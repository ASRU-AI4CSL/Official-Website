export const metadata = { title: 'Organizers — Child Speech AI Workshop' }

const generalChairs = [
  {
    name: 'Bowon Lee',
    affiliation: 'Inha U., KR',
    image: '/images/organizers/bowon-lee.jpg',
    email: 'mailto:bowon.lee@example.com'
  },
  {
    name: 'Kyu Jeong Han',
    affiliation: 'Amazon Web Services, US',
    image: '/images/organizers/kyu-jeong-han.jpg',
    email: 'mailto:kyu.han@example.com'
  },
  {
    name: 'Chanwoo Kim',
    affiliation: 'Korea U., KR',
    image: '/images/organizers/chanwoo-kim.jpg',
    email: 'mailto:chanwoo.kim@example.com'
  }
]

const advisoryBoard = [
  {
    name: 'Shri Narayanan',
    affiliation: 'USC, US',
    image: '/images/organizers/shri-narayanan.jpg',
    email: 'mailto:shri.narayanan@example.com'
  },
  {
    name: 'Bhuvana Ramabhadran',
    affiliation: 'Google, US',
    image: '/images/organizers/bhuvana-ramabhadran.jpg',
    email: 'mailto:bhuvana.rama@example.com'
  }
]

const diversityChairs = [
  {
    name: 'Dr. Elena Rodriguez',
    affiliation: 'MIT, US',
    image: '/images/organizers/elena-rodriguez.jpg',
    email: 'mailto:elena.rodriguez@example.com'
  }
]

function OrganizerCard({ organizer }: { organizer: typeof generalChairs[0] }) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
      <div className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-xl">
        <img
          src={organizer.image}
          alt={organizer.name}
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{organizer.name}</h3>
      <p className="text-gray-600 mb-4">{organizer.affiliation}</p>
      <a
        href={organizer.email}
        className="inline-flex items-center justify-center w-10 h-10 bg-orange-100 text-orange-600 rounded-full hover:bg-orange-200 transition-colors"
        aria-label={`Email ${organizer.name}`}
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      </a>
    </div>
  )
}

function OrganizerSection({ title, organizers }: { title: string; organizers: typeof generalChairs }) {
  return (
    <section className="mb-16">
      <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-8">
        {title}
      </h2>
      <div className={`grid gap-8 justify-center ${
        organizers.length === 1 ? 'max-w-sm mx-auto' :
        organizers.length === 2 ? 'grid-cols-1 md:grid-cols-2 max-w-2xl mx-auto' :
        'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto'
      }`}>
        {organizers.map((organizer, idx) => (
          <OrganizerCard key={idx} organizer={organizer} />
        ))}
      </div>
    </section>
  )
}

export default function Page() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-pink-500 text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Organizers</h1>
          <p className="max-w-2xl mx-auto text-lg">
            Meet the ASRU 2025 Organizing Committee dedicated to advancing the field with 
            expert leadership, planning events, and fostering professional connections.
          </p>
        </div>
      </section>

      {/* Organizers Content */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <OrganizerSection title="General Chairs" organizers={generalChairs} />
          <OrganizerSection title="Advisory Board" organizers={advisoryBoard} />
          <OrganizerSection title="Diversity and Inclusion Chair" organizers={diversityChairs} />
        </div>
      </section>
    </>
  )
}