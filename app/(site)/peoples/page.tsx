import Hero from '../../../components/Hero'
import { speakers } from '../../../lib/speakers'
import { organizers } from '../../../lib/organizers'

export const metadata = { title: 'Peoples — Child Speech AI Workshop' }

type Row = {
  name: string
  title?: string
  affiliation: string
  type: 'Speaker' | 'Organizer'
  group?: string
  website?: string
  email?: string
}

export default function Page() {
  const organizerRows: Row[] = [
    ...organizers.generalChairs.map(o => ({ name: o.name, title: o.title, affiliation: o.affiliation, type: 'Organizer' as const, group: 'General Chairs', website: undefined, email: o.email })),
    ...organizers.advisoryBoard.map(o => ({ name: o.name, title: o.title, affiliation: o.affiliation, type: 'Organizer' as const, group: 'Advisory Board', website: undefined, email: o.email })),
    ...organizers.diversityChairs.map(o => ({ name: o.name, title: o.title, affiliation: o.affiliation, type: 'Organizer' as const, group: 'Diversity & Inclusion', website: undefined, email: o.email })),
  ]

  const speakerRows: Row[] = speakers.map(s => ({
    name: s.name,
    title: s.talkTitle,
    affiliation: s.affiliation,
    type: 'Speaker' as const,
    group: s.role,
    website: s.website,
    email: undefined,
  }))

  const rows: Row[] = [...speakerRows, ...organizerRows]
    .sort((a, b) => a.type.localeCompare(b.type) || a.name.localeCompare(b.name))

  return (
    <>
      <Hero
        title="Peoples"
        subtitle="Speakers and organizers directory"
        variant="blueIndigo"
      />

      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="overflow-x-auto bg-white rounded-xl shadow">
            <table className="min-w-full text-sm">
              <thead className="bg-gray-50 text-gray-700">
                <tr>
                  <th className="text-left px-4 py-3 font-semibold">Name</th>
                  <th className="text-left px-4 py-3 font-semibold">Title / Role</th>
                  <th className="text-left px-4 py-3 font-semibold">Affiliation</th>
                  <th className="text-left px-4 py-3 font-semibold">Type</th>
                  <th className="text-left px-4 py-3 font-semibold">Group</th>
                  <th className="text-left px-4 py-3 font-semibold">Links</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-3 font-medium text-gray-900">{r.name}</td>
                    <td className="px-4 py-3 text-gray-700">{r.title || '-'}</td>
                    <td className="px-4 py-3 text-gray-700">{r.affiliation}</td>
                    <td className="px-4 py-3">
                      <span className={`inline-block px-2 py-0.5 rounded text-xs font-semibold ${r.type === 'Speaker' ? 'bg-blue-100 text-blue-700' : 'bg-emerald-100 text-emerald-700'}`}>{r.type}</span>
                    </td>
                    <td className="px-4 py-3 text-gray-700">{r.group || '-'}</td>
                    <td className="px-4 py-3 space-x-2">
                      {r.website && (
                        <a href={r.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Website</a>
                      )}
                      {r.email && (
                        <a href={r.email} className="text-orange-600 hover:underline">Email</a>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  )
}

