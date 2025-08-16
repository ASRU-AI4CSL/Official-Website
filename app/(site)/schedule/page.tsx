export const metadata = { title: 'Schedule — Child Speech AI Workshop' }

const events = [
  {
    time: '14:00',
    title: 'Opening Remarks',
    speaker: 'Organizers',
    room: 'Main Hall',
    image: '/images/child-speech-hero.jpeg',
    description: 'Kick off the workshop with an introduction to goals and logistics.',
  },
  {
    time: '14:10',
    title: 'Invited Talk 1',
    speaker: 'TBD',
    room: 'Main Hall',
    image: '/images/child-speech-hero.jpeg',
    description: 'Keynote address by a leading expert in child speech recognition.',
  },
  {
    time: '15:00',
    title: 'Contributed Talks',
    room: 'Main Hall',
    image: '/images/child-speech-hero.jpeg',
    description: 'Selected talks highlighting recent advances and challenges.',
  },
  {
    time: '16:00',
    title: 'Coffee Break',
    room: 'Lobby',
    image: '/images/child-speech-hero.jpeg',
    description: 'Refresh and network with fellow attendees over coffee.',
  },
  {
    time: '16:30',
    title: 'Poster Session',
    room: 'Main Hall',
    image: '/images/child-speech-hero.jpeg',
    description: 'Explore posters and discuss research with presenters.',
  },
  {
    time: '18:00',
    title: 'Closing',
    room: 'Main Hall',
    image: '/images/child-speech-hero.jpeg',
    description: 'Concluding remarks and future directions for child speech AI.',
  },
]

export default function Page() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-pink-500 text-white text-center">
        <h1 className="text-5xl font-bold mb-4">Workshop Schedule</h1>
        <p className="max-w-2xl mx-auto text-lg">
          Dec 10, 2025 (HST) — join us for a day of talks and sessions.
        </p>
      </section>

      {/* Events */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          {events.map((e, idx) => (
            <div
              key={idx}
              className="relative bg-white rounded-lg shadow-lg overflow-hidden mb-12"
            >
              <div className="absolute -top-2 left-0 w-0 h-0 border-l-[30px] border-t-[30px] border-l-orange-500 border-t-transparent" />
              <div className="absolute -bottom-2 right-0 w-0 h-0 border-r-[30px] border-b-[30px] border-r-transparent border-b-orange-500" />
              <img
                src={e.image}
                alt=""
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <span className="inline-block bg-orange-100 text-orange-600 text-sm font-semibold px-3 py-1 rounded-full mb-4">
                  {e.time} · {e.room}
                </span>
                <h3 className="text-2xl font-bold mb-2">{e.title}</h3>
                {e.speaker && (
                  <p className="text-gray-700 mb-2">{e.speaker}</p>
                )}
                {e.description && (
                  <p className="text-gray-600">{e.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

