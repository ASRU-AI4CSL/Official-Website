import Hero from '../../../components/Hero'
import { speakers } from '../../../lib/speakers'
import ExternalImage from '../../../components/ExternalImage'

export const metadata = { title: 'Speakers — Child Speech AI Workshop' }

export default function Page() {
  return (
    <>
      <Hero
        title="Speakers"
        subtitle="Meet our distinguished panel of experts leading the Child Speech AI Workshop 2025"
        variant="blueIndigo"
      />

      {/* Speakers Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {speakers.map(speaker => (
              <div key={speaker.name} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col">
                {/* Speaker Image */}
                <div className="relative">
                  <ExternalImage 
                    src={speaker.image} 
                    alt={speaker.name}
                    className="w-full h-64 object-cover"
                    width={1200}
                    height={800}
                  />
                  {/* Role Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-white text-gray-800 px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                      {speaker.role}
                    </span>
                  </div>
                </div>

                {/* Speaker Info */}
                <div className="p-6 flex flex-col h-full">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{speaker.name}</h3>
                  <p className="text-orange-600 font-medium mb-4">{speaker.affiliation}</p>
                  
                  {/* Talk Info */}
                  <div className="mb-6 flex-grow">
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">{speaker.talkTitle}</h4>
                    <p className="text-sm text-gray-600 mb-2">{speaker.time} • {speaker.room}</p>
                    <p className="text-sm text-gray-700 leading-relaxed">{speaker.talkDescription}</p>
                  </div>
                  
                  {/* Button at bottom */}
                  <div className="mt-auto">
                    <a 
                      href={speaker.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-2 px-4 rounded-lg font-medium hover:from-orange-600 hover:to-red-600 transition-all duration-300 text-center"
                    >
                      View Profile
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </>
  )
}
