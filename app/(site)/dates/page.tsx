import Hero from '../../../components/Hero'
import { IMPORTANT_DATES } from '../../../lib/dates'

export const metadata = { title: 'Important Dates — Child Speech AI Workshop' }

const colorMap = {
  red: { border: 'border-red-500', text: 'text-red-700', bg: 'bg-red-50' },
  green: { border: 'border-green-500', text: 'text-green-700', bg: 'bg-green-50' },
  blue: { border: 'border-blue-500', text: 'text-blue-700', bg: 'bg-blue-50' },
  orange: { border: 'border-orange-500', text: 'text-orange-700', bg: 'bg-orange-50' },
  purple: { border: 'border-purple-500', text: 'text-purple-700', bg: 'bg-purple-50' },
  pink: { border: 'border-pink-500', text: 'text-pink-700', bg: 'bg-pink-50' },
} as const

export default function Page() {
  return (
    <>
      <Hero
        title="Important Dates"
        subtitle="All key milestones for the Child Speech AI Workshop"
        variant="roseFuchsia"
      />

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          {/* Desktop: centered vertical line; Mobile: per-item left line */}
          <div className="relative">
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-200" />
            {IMPORTANT_DATES.map((d, idx) => {
              const colors = colorMap[d.color]
              const content = (
                <div className={`bg-white rounded-xl p-5 shadow-lg border-l-4 ${colors.border}`}>
                  <div className={`text-sm font-semibold mb-2 ${colors.text}`}>{d.date.toUpperCase()}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{d.title}</h3>
                  {d.description && (
                    <p className="text-gray-700 leading-relaxed">{d.description}</p>
                  )}
                </div>
              )

              return (
                <div key={d.id} className="relative mb-6 lg:mb-8">
                  {/* Center dot on desktop */}
                  <div className={`hidden lg:flex items-center justify-center absolute left-1/2 -translate-x-1/2 top-3 w-4 h-4 rounded-full bg-white border-2 ${colors.border}`} />

                  {/* Mobile left-line + dot */}
                  <div className="lg:hidden relative border-l border-gray-200 pl-4">
                    <span className={`absolute -left-1.5 top-3 w-3 h-3 rounded-full bg-white border-2 ${colors.border}`} />
                    {content}
                  </div>

                  {/* Desktop alternating layout */}
                  <div className="hidden lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
                    {idx % 2 === 0 ? (
                      <>
                        <div>{content}</div>
                        <div />
                      </>
                    ) : (
                      <>
                        <div />
                        <div className="lg:text-right">{content}</div>
                      </>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
