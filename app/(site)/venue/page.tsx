import Hero from '../../../components/Hero'
import ExternalImage from '../../../components/ExternalImage'
import externalUrls from '../../../data/externalurl.json'

export const metadata = { title: 'Venue — Child Speech AI Workshop' }

export default function Page() {
  return (
    <>
      <Hero
        title="Venue"
        subtitle="The Child Speech AI Workshop takes place at the University of Hawai‘i at Mānoa campus in Honolulu, Hawai‘i. Specific room is TBD."
        variant="emeraldTeal"
      />

      {/* Featured Venue Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              University of Hawai‘i at Mānoa
            </h2>
            <p className="text-xl text-gray-600 mb-2">
              Honolulu, Hawai‘i (Room: TBD)
            </p>
            <p className="text-gray-600">
              2500 Campus Rd<br />
              Honolulu, HI 96822
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Venue Image */}
            <div className="w-full lg:w-1/2">
              <ExternalImage
                src={(externalUrls as any).venueImage || 'https://drive.google.com/file/d/1MBRiSu9c1sd7ULRSPLpfUEz6dPD9QcrX/view?usp=drive_link'}
                alt="University of Hawaii Campus"
                className="w-full h-80 lg:h-96 object-cover rounded-xl shadow-xl"
                width={1600}
                height={900}
              />
            </div>
            
            {/* Venue Description */}
            <div className="w-full lg:w-1/2">
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                UH Mānoa sits in the lush Mānoa Valley, about 3 miles from Waikīkī and 8 miles from Daniel K. Inouye International Airport (HNL). The campus offers modern facilities and accessible routes. Final room assignment will be posted closer to the event date.
              </p>

              <div className="flex flex-wrap gap-3 mb-6">
                <a href="https://map.hawaii.edu/manoa/" target="_blank" rel="noopener" className="btn-conference-secondary">Open Campus Map</a>
                <a href="https://manoa.hawaii.edu/commuter/visitors/" target="_blank" rel="noopener" className="btn-conference-secondary">Visitor Parking</a>
              </div>

              <a
                href="/schedule"
                className="btn-conference-primary"
              >
                View Schedule
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Removed Image Gallery Section per request */}

      {/* Transportation & Access */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Transportation Options */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Transportation</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-semibold text-gray-900">From HNL (airport)</h4>
                  <p className="text-gray-600 text-sm">
                    HNL is ~8 miles from UH Mānoa (20–30 minutes by car, traffic dependent). See official ground options for taxis, ride apps, shuttles, and public transit.
                    <br />
                    <a className="text-orange-700 underline" href="https://airports.hawaii.gov/hnl/getting-to-from/ground-transportation/" target="_blank" rel="noopener">HNL Ground Transportation</a>
                  </p>
                </div>
                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Public transit (TheBus)</h4>
                  <p className="text-gray-600 text-sm">
                    The City &amp; County of Honolulu’s TheBus serves HNL and stops near UH Mānoa. Use the route info/trip planner to find current options.
                    <br />
                    <a className="text-orange-700 underline" href="https://airports.hawaii.gov/hnl/getting-to-from/ground-transportation/the-bus/" target="_blank" rel="noopener">TheBus from HNL</a>
                  </p>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Getting Around</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Parking</h4>
                  <p className="text-gray-600 text-sm">
                    Visitor parking is available in designated lots and structures; payment is via JustPark app or attendant where noted. Rates and availability may change—check the official page.
                    <br />
                    <a className="text-orange-700 underline" href="https://manoa.hawaii.edu/commuter/visitors/" target="_blank" rel="noopener">UH Mānoa Visitor Parking</a>
                  </p>
                </div>
                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Accessibility</h4>
                  <p className="text-gray-600 text-sm">
                    We aim to provide accessible routes, seating, and quiet rooms. Reach out with specific needs; campus resources are available.
                    <br />
                    <a className="text-orange-700 underline" href="https://www.hawaii.edu/access/" target="_blank" rel="noopener">Accessibility at UH</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}
