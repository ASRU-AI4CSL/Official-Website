import Hero from '../../../components/Hero'
import { getOrganizerSections, Organizer } from '../../../lib/organizers'

export const metadata = { title: 'Organizers — Child Speech AI Workshop' }

function OrganizerCard({ organizer }: { organizer: Organizer }) {
  return (
    <div className="bg-white rounded-xl p-3 shadow-md hover:shadow-lg transition-shadow duration-300 text-center w-[180px] h-56 flex flex-col">
      <div className="w-24 h-24 mx-auto mb-2 overflow-hidden rounded-full">
        <img
          src={organizer.image}
          alt={organizer.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="px-1 flex-1 flex flex-col">
        <h3
          className="text-sm font-semibold text-gray-900 leading-snug break-words"
          style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}
        >
          {organizer.name}
        </h3>
        <p
          className="text-[11px] text-gray-600 mt-1"
          style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}
        >
          {organizer.affiliation}
        </p>
      </div>
      {organizer.email && (
        <a
          href={organizer.email}
          className="inline-flex items-center justify-center w-7 h-7 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors self-center"
          aria-label={`Email ${organizer.name}`}
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </a>
      )}
    </div>
  )
}

function OrganizerSection({ title, organizers, columns }: { title: string; organizers: Organizer[] | undefined; columns?: 1 | 2 | 3 }) {
  const list = organizers ?? []
  const len = list.length
  const colClass = ''
  return (
    <section className="mb-10">
      <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 text-center mb-6">
        {title}
      </h2>
      <div className={`flex flex-wrap gap-3 justify-center ${colClass}`}>
        {list.map((organizer, idx) => (
          <OrganizerCard key={idx} organizer={organizer} />
        ))}
      </div>
    </section>
  )
}

export default function Page() {
  const sections = getOrganizerSections()
  return (
    <>
      <Hero
        title="Organizers"
        subtitle="Meet the ASRU 2025 Organizing Committee dedicated to advancing the field with expert leadership, planning events, and fostering professional connections."
        variant="orangePink"
      />

      {/* Organizers Content (driven by JSON) */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4">
          {sections.map((s) => (
            <OrganizerSection key={s.key} title={s.title} organizers={s.items} columns={s.columns} />
          ))}
        </div>
      </section>
    </>
  )
}
