import Link from 'next/link'
import Hero from '../../../components/Hero'
import ExternalImage from '../../../components/ExternalImage'
import { scheduleEvents, speakers } from '../../../lib/speakers'
import { workshopDate } from '../../../lib/dates'

export const metadata = { title: 'Schedule — Child Speech AI Workshop' }

export default function Page() {
  return (
    <>
      <Hero
        title="Workshop Schedule"
        subtitle={`${workshopDate.date} (${workshopDate.time}) — join us for a day of talks and sessions focused on advancing child speech AI technologies with fairness, precision, and interactive learning.`}
        variant="indigoCyan"
      />

      {/* Events Timeline Style */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="relative">
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-200" />
            {scheduleEvents.map((e, idx) => {
              const isTalk = e.type === 'talk' || e.type === 'keynote'
              const speakerCandidates = (isTalk && 'speaker' in e ? e.speaker || '' : '')
                .split(/\s+or\s+/i)
                .map(s => s.trim())
                .filter(Boolean)
              const speakerData = isTalk
                ? speakers.find(s => speakerCandidates.includes(s.name))
                : undefined
              const displayTitle = (isTalk && speakerData?.talkTitle ? speakerData.talkTitle : ('title' in e ? e.title : '')) || ''
              const displayDesc = (isTalk && speakerData?.talkDescription ? speakerData.talkDescription : ('description' in e ? e.description : '')) || ''
              const displayImage = isTalk && speakerData?.image ? speakerData.image : e.image
              const displaySpeaker = speakerData?.name || (isTalk && 'speaker' in e ? e.speaker : undefined)
              const displayAffiliation = speakerData?.affiliation

              const ImageEl = displayImage ? (
                <div>
                  <ExternalImage
                    src={displayImage}
                    alt={displayTitle}
                    className={`w-full h-64 lg:h-96 object-cover rounded-xl shadow-xl ${isTalk ? 'transition-transform duration-200 group-hover:scale-[1.02]' : ''}`}
                    width={1600}
                    height={900}
                  />
                </div>
              ) : <div />

              const ContentEl = (
                <div className={`${idx % 2 === 1 ? 'text-center lg:text-right' : 'text-center lg:text-left'}`}>
                  <div className="inline-block bg-orange-100 text-orange-700 text-sm font-bold px-4 py-2 rounded-full mb-6 uppercase tracking-wide">
                    {e.time} · {e.room}
                  </div>
                  <h2 className="text-3xl lg:text-5xl font-black text-gray-900 mb-3 leading-tight">
                    {displayTitle}
                  </h2>
                  {displaySpeaker && (
                    <p className={`text-xl mb-1 font-semibold ${isTalk ? 'text-orange-700' : 'text-gray-800'}`}>
                      {displaySpeaker}
                    </p>
                  )}
                  {displayAffiliation && (
                    <p className="text-sm text-gray-600 mb-5">{displayAffiliation}</p>
                  )}
                  <p className="text-gray-700 leading-relaxed text-lg lg:text-xl max-w-lg mx-auto lg:mx-0">
                    {displayDesc}
                  </p>
                </div>
              )

              // Mobile stacked: image then content; Desktop: split across the center line
              const ItemGrid = (
                <>
                  {/* Mobile stacked */}
                  <div className="lg:hidden space-y-6">
                    {ImageEl}
                    {ContentEl}
                  </div>
                  {/* Desktop two columns with alternating sides */}
                  <div className="hidden lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
                    {idx % 2 === 0 ? (
                      <>
                        <div>{ImageEl}</div>
                        <div className="lg:text-left">{ContentEl}</div>
                      </>
                    ) : (
                      <>
                        <div className="lg:text-right">{ContentEl}</div>
                        <div>{ImageEl}</div>
                      </>
                    )}
                  </div>
                </>
              )

              const Wrapped = isTalk ? (
                <Link href="/speakers" className="block group focus:outline-none focus:ring-2 focus:ring-orange-400 rounded-xl">
                  {ItemGrid}
                </Link>
              ) : ItemGrid

              return (
                <div key={idx} className="relative mb-10 lg:mb-14">

                  {/* Center dot on desktop */}
                  <div className={`hidden lg:flex items-center justify-center absolute left-1/2 -translate-x-1/2 top-3 w-4 h-4 rounded-full bg-white border-2 border-orange-400`} />

                  {/* Mobile left-line + dot */}
                  <div className="lg:hidden relative border-l border-gray-200 pl-4">
                    <span className={`absolute -left-1.5 top-3 w-3 h-3 rounded-full bg-white border-2 border-orange-400`} />
                    {Wrapped}
                  </div>

                  {/* Desktop alternating layout spanning both sides */}
                  <div className="hidden lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
                    {idx % 2 === 0 ? (
                      <>
                        <div>{isTalk ? <Link href="/speakers" className="block group focus:outline-none">{ImageEl}</Link> : ImageEl}</div>
                        <div className="lg:text-left">{isTalk ? <Link href="/speakers" className="block group focus:outline-none">{ContentEl}</Link> : ContentEl}</div>
                      </>
                    ) : (
                      <>
                        <div className="lg:text-right">{isTalk ? <Link href="/speakers" className="block group focus:outline-none">{ContentEl}</Link> : ContentEl}</div>
                        <div>{isTalk ? <Link href="/speakers" className="block group focus:outline-none">{ImageEl}</Link> : ImageEl}</div>
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
