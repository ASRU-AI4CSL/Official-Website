import organizersData from '../data/organizers.json'

export interface Organizer {
  name: string
  title?: string
  affiliation: string
  email?: string
  image: string
  website?: string
  description?: string
}

export interface OrganizersByRole {
  generalChairs: Organizer[]
  advisoryBoard: Organizer[]
  diversityChairs: Organizer[]
}

const rawAny = organizersData as any

function firstArrayOrEmpty<T = unknown>(keys: string[]): T[] {
  for (const k of keys) {
    const v = rawAny?.[k]
    if (Array.isArray(v)) return v as T[]
  }
  return []
}

export const organizers: OrganizersByRole = {
  // Support multiple possible keys to avoid breakage when editing JSON
  generalChairs: firstArrayOrEmpty<Organizer>([
    'generalChairs', 'Organizers', 'organizers', 'general_chairs'
  ]),
  advisoryBoard: firstArrayOrEmpty<Organizer>([
    'advisoryBoard', 'AdvisoryBoard', 'advisory_board', 'advisory'
  ]),
  diversityChairs: firstArrayOrEmpty<Organizer>([
    'diversityChairs', 'DiversityChairs', 'diversityChair', 'diversity', 'diversity_and_inclusion'
  ]),
}

// Dynamic sections rendering support
export interface OrganizerSectionDef {
  key: string
  title?: string
  columns?: 1 | 2 | 3
}

export interface OrganizerSectionData {
  key: string
  title: string
  columns?: 1 | 2 | 3
  items: Organizer[]
}

function humanizeKey(key: string): string {
  // Convert camelCase or snake_case to Title Case
  const spaced = key
    .replace(/_/g, ' ')
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/\s+/g, ' ')
    .trim()
  return spaced
    .split(' ')
    .map(s => s.charAt(0).toUpperCase() + s.slice(1))
    .join(' ')
}

function getTitleRank(title: string | undefined): number {
  if (!title) return 99
  const lower = title.toLowerCase()
  
  // Professor ranks highest
  if (lower.includes('professor')) return 1
  
  // Assistant Professor
  if (lower.includes('assistant professor')) return 2
  
  // Associate Professor  
  if (lower.includes('associate professor')) return 3
  
  // PhD students
  if (lower.includes('phd') || lower === 'phd') return 4
  
  // Everything else
  return 5
}

function sortOrganizersByTitle(organizers: Organizer[]): Organizer[] {
  return [...organizers].sort((a, b) => {
    const rankA = getTitleRank(a.title)
    const rankB = getTitleRank(b.title)
    
    if (rankA !== rankB) {
      return rankA - rankB
    }
    
    // If same rank, sort alphabetically by name
    return a.name.localeCompare(b.name)
  })
}

export function getOrganizerSections(): OrganizerSectionData[] {
  const metaSections = Array.isArray(rawAny?.sections) ? (rawAny.sections as OrganizerSectionDef[]) : null
  const usedKeys = new Set<string>()
  const sections: OrganizerSectionData[] = []

  if (metaSections) {
    for (const s of metaSections) {
      const items = sortOrganizersByTitle(firstArrayOrEmpty<Organizer>([s.key]))
      sections.push({
        key: s.key,
        title: s.title || humanizeKey(s.key),
        columns: s.columns,
        items,
      })
      usedKeys.add(s.key)
    }
  }

  // Add any remaining array keys as sections automatically
  for (const [k, v] of Object.entries(rawAny || {})) {
    if (usedKeys.has(k)) continue
    if (Array.isArray(v)) {
      sections.push({ key: k, title: humanizeKey(k), items: sortOrganizersByTitle(v as Organizer[]) })
    }
  }

  // Filter out empty sections
  return sections.filter(s => (s.items?.length ?? 0) > 0)
}
