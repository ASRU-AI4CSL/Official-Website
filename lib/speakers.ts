import speakersData from '../data/speakers.json'
import scheduleData from '../data/schedule.json'

export interface Speaker {
  slug: string
  name: string
  affiliation: string
  role: string
  image: string
  website: string
  talkTitle: string
  talkDescription: string
  time: string
  room: string
}

export interface ScheduleEventBase {
  time: string
  type: 'talk' | 'keynote' | 'session' | 'break'
  room: string
}

export interface ScheduleEventTalk extends ScheduleEventBase {
  type: 'talk' | 'keynote'
  speaker?: string
  image?: string
  title?: string
  description?: string
}

export interface ScheduleEventOther extends ScheduleEventBase {
  type: 'session' | 'break'
  title: string
  description: string
  image?: string
}

export type ScheduleEvent = ScheduleEventTalk | ScheduleEventOther

export const speakers: Speaker[] = speakersData as Speaker[]

// Build schedule events by joining with speakers.json
export const scheduleEvents: ScheduleEvent[] = (scheduleData as any[]).map((raw) => {
  if (raw.type === 'talk' || raw.type === 'keynote') {
    const candidates: string[] = Array.isArray(raw.speakerNames)
      ? raw.speakerNames
      : typeof raw.speaker === 'string'
        ? String(raw.speaker).split(/\s+or\s+/i).map((s: string) => s.trim())
        : []
    const matched = speakers.find((s) => candidates.includes(s.name))
    return {
      time: raw.time,
      type: raw.type,
      room: raw.room,
      speaker: matched?.name || candidates[0] || undefined,
      image: raw.image || matched?.image,
      title: matched?.talkTitle || raw.title,
      description: matched?.talkDescription || raw.description,
    } as ScheduleEvent
  }

  // Non-talk items
  return {
    time: raw.time,
    type: raw.type,
    room: raw.room,
    title: raw.title,
    description: raw.description,
    image: raw.image,
  } as ScheduleEvent
})
