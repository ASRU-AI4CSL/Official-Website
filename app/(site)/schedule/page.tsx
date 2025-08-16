export const metadata = { title: 'Schedule — Child Speech AI Workshop' }

const events = [
  {
    time: '14:00',
    title: 'Opening Remarks',
    speaker: 'Organizers',
    room: 'Main Hall',
    image: '/images/hero/child-speech-hero.jpeg',
    description: 'Kick off the workshop with an introduction to goals and logistics.',
  },
  {
    time: '14:10',
    title: 'Invited Talk 1',
    speaker: 'TBD',
    room: 'Main Hall',
    image: '/images/hero/child-speech-hero.jpeg',
    description: 'Keynote address by a leading expert in child speech recognition.',
  },
  {
    time: '15:00',
    title: 'Contributed Talks',
    room: 'Main Hall',
    image: '/images/hero/child-speech-hero.jpeg',
    description: 'Selected talks highlighting recent advances and challenges.',
  },
  {
    time: '16:00',
    title: 'Coffee Break',
    room: 'Lobby',
    image: '/images/hero/child-speech-hero.jpeg',
    description: 'Refresh and network with fellow attendees over coffee.',
  },
  {
    time: '16:30',
    title: 'Poster Session',
    room: 'Main Hall',
    image: '/images/hero/child-speech-hero.jpeg',
    description: 'Explore posters and discuss research with presenters.',
  },
  {
    time: '18:00',
    title: 'Closing',
    room: 'Main Hall',
    image: '/images/hero/child-speech-hero.jpeg',
    description: 'Concluding remarks and future directions for child speech AI.',
  },
]

export default function Page() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-pink-500 text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Workshop Schedule</h1>
          <p className="max-w-2xl mx-auto text-lg">
            Dec 10, 2025 (HST) — join us for a day of talks and sessions focused on advancing child speech AI technologies with fairness, precision, and interactive learning.
          </p>
        </div>
      </section>

      {/* Events with Alternating Layout */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          {events.map((e, idx) => (
            <div key={idx} className="mb-20 last:mb-0">
              {/* Day Label */}
              {idx === 0 && (
                <div className="text-center mb-8">
                  <span className="text-sm uppercase tracking-wide text-gray-500 font-semibold">
                    DAY 1
                  </span>
                </div>
              )}
              
              <div className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-16 ${
                idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}>
                {/* Image */}
                <div className="w-full lg:w-1/2">
                  <img
                    src={e.image}
                    alt={e.title}
                    className="w-full h-64 lg:h-96 object-cover rounded-xl shadow-xl"
                  />
                </div>
                
                {/* Content */}
                <div className={`w-full lg:w-1/2 ${idx % 2 === 1 ? 'text-center lg:text-right' : 'text-center lg:text-left'}`}>
                  <div className="inline-block bg-orange-100 text-orange-700 text-sm font-bold px-4 py-2 rounded-full mb-6 uppercase tracking-wide">
                    {e.time} · {e.room}
                  </div>
                  
                  <h2 className="text-3xl lg:text-5xl font-black text-gray-900 mb-6 leading-tight">
                    {e.title}
                  </h2>
                  
                  {e.speaker && (
                    <p className="text-xl text-gray-800 mb-6 font-semibold">
                      {e.speaker}
                    </p>
                  )}
                  
                  <p className="text-gray-700 leading-relaxed text-lg lg:text-xl max-w-lg">
                    {e.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

