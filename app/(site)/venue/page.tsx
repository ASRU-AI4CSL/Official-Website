export const metadata = { title: 'Venue — Child Speech AI Workshop' }

export default function Page() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-pink-500 text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Venue & Accommodations</h1>
          <p className="max-w-2xl mx-auto text-lg">
            Stay near the University of Hawaii for easy access to the Child Speech AI Workshop venue, 
            a place with stunning ocean views, and top dining. Book your Honolulu accommodations early!
          </p>
        </div>
      </section>

      {/* Featured Venue Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              University of Hawaii
            </h2>
            <p className="text-xl text-gray-600 mb-2">
              Conference Center and Campus
            </p>
            <p className="text-gray-600">
              2444 Dole Street<br />
              Honolulu, Hawaii 96822
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Venue Image */}
            <div className="w-full lg:w-1/2">
              <img
                src="/images/venue/university-hawaii-campus.jpg"
                alt="University of Hawaii Campus"
                className="w-full h-80 lg:h-96 object-cover rounded-xl shadow-xl"
              />
            </div>
            
            {/* Venue Description */}
            <div className="w-full lg:w-1/2">
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                The University of Hawaii campus is a stunning beachfront setting in Honolulu, Hawaii. Located just 
                steps away from beautiful Waikiki Beach, offering soft sand and near blue waters. The campus provides modern 
                conference facilities with state-of-the-art technology and accessibility features for all attendees.
              </p>
              
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                Enjoy locally sourced dining options, with over 50 restaurants and 
                cafes, each with a private balcony and gorgeous views of 
                the ocean or city, the campus was designed to be smart, 
                intuitive, and timeless.
              </p>

              <p className="text-gray-600 mb-6">
                Book your hotel by November 6, 2025 to receive the 
                discounted rate!
              </p>

              <a
                href="#accommodations"
                className="inline-flex items-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors font-medium"
              >
                Find Hotels
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="py-16 bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <img
              src="/images/venue/conference-room.jpg"
              alt="Conference Room"
              className="w-full h-32 md:h-40 object-cover rounded-lg shadow-lg"
            />
            <img
              src="/images/venue/waikiki-beach.jpg"
              alt="Waikiki Beach"
              className="w-full h-32 md:h-40 object-cover rounded-lg shadow-lg"
            />
            <img
              src="/images/venue/campus-view.jpg"
              alt="Campus View"
              className="w-full h-32 md:h-40 object-cover rounded-lg shadow-lg"
            />
            <img
              src="/images/venue/lobby-area.jpg"
              alt="Lobby Area"
              className="w-full h-32 md:h-40 object-cover rounded-lg shadow-lg"
            />
            <img
              src="/images/venue/honolulu-skyline.jpg"
              alt="Honolulu Skyline"
              className="w-full h-32 md:h-40 object-cover rounded-lg shadow-lg"
            />
            <img
              src="/images/venue/dining-area.jpg"
              alt="Dining Area"
              className="w-full h-32 md:h-40 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Map and Transportation Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-8">
            <div className="inline-block bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wide mb-4">
              Daniel K. Inouye International Airport (HNL) To/From Airport
            </div>
          </div>

          <div className="bg-gray-100 rounded-xl p-8 mb-8">
            <div className="aspect-video bg-gray-300 rounded-lg mb-6 flex items-center justify-center">
              <div className="text-center text-gray-600">
                <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-lg font-medium">Interactive Map</p>
                <p className="text-sm">20 minutes by car</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Transportation Options */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Transportation</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-semibold text-gray-900">TheBus</h4>
                  <p className="text-gray-600 text-sm">
                    Upon request, TheBus offers a special door-to-door E.II-lift service to 
                    the hotel so do not forget for hotel reservations - Waikiki Beach Resort 
                    and Spa guests.
                  </p>
                </div>
                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-semibold text-gray-900">SpeedShuttle</h4>
                  <p className="text-gray-600 text-sm">
                    SpeedShuttle is an authorized on-site service provider at the Honolulu 
                    airport and has greeters stationed throughout the terminal.
                  </p>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Getting Around</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Local Transportation</h4>
                  <p className="text-gray-600 text-sm">
                    Guests desiring to walk to SpeedShuttle's private land are 
                    escorted to one of the secured vehicle pickup locations. Reservations are required 
                    at least 72 hours in advance.
                  </p>
                </div>
                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Accessibility</h4>
                  <p className="text-gray-600 text-sm">
                    We aim to provide accessible routes, seating, and quiet rooms. 
                    Contact us with specific accessibility needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accommodations Section */}
      <section id="accommodations" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Recommended Accommodations
            </h2>
            <p className="text-xl text-gray-600">
              Stay near the venue for easy access to the workshop
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Hotel 1 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img
                src="/images/venue/hotel-1.jpg"
                alt="Waikiki Beach Resort"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Waikiki Beach Resort</h3>
                <p className="text-orange-600 font-medium mb-2">0.5 miles from venue</p>
                <p className="text-gray-600 text-sm mb-4">
                  Beachfront hotel with ocean views and modern amenities.
                </p>
                <button className="w-full bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition-colors">
                  View Details
                </button>
              </div>
            </div>

            {/* Hotel 2 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img
                src="/images/venue/hotel-2.jpg"
                alt="Honolulu University Inn"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Honolulu University Inn</h3>
                <p className="text-orange-600 font-medium mb-2">0.2 miles from venue</p>
                <p className="text-gray-600 text-sm mb-4">
                  Walking distance to campus with conference rate available.
                </p>
                <button className="w-full bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition-colors">
                  View Details
                </button>
              </div>
            </div>

            {/* Hotel 3 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img
                src="/images/venue/hotel-3.jpg"
                alt="Diamond Head Hotel"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Diamond Head Hotel</h3>
                <p className="text-orange-600 font-medium mb-2">1.2 miles from venue</p>
                <p className="text-gray-600 text-sm mb-4">
                  Luxury accommodations with Diamond Head crater views.
                </p>
                <button className="w-full bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition-colors">
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
