import { eventJsonLd } from '../lib/seo'

export const metadata = {
  title: 'Home — Child Speech AI Workshop',
  description: 'Fair • Precise • Interactive — December 10, 2025 · Honolulu (HST)'
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(eventJsonLd()) }} />
      
      {/* Full-Width Hero Section - ASRU Inspired */}
      <section className="hero-fullwidth">
        {/* Background Image */}
        <div className="hero-background"></div>
        
        {/* Content Overlay */}
        <div className="hero-content">
          <div className="container">
            <div className="flex justify-end items-center min-h-[70vh]">
              {/* Right Side - Info Card */}
              <div className="hero-info-card">
                <div className="badge-conference mb-6">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  DECEMBER 6-10, 2025
                </div>
                
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                  IEEE CHILD SPEECH AI 2025
                </h2>
                
                <h3 className="text-2xl lg:text-3xl text-gray-700 mb-8 font-medium">
                  Fair • Precise • Interactive
                </h3>
                
                <p className="text-lg text-gray-600 leading-relaxed mb-12">
                  Workshop on Automatic Speech Recognition and Understanding focused on child speech technologies, fairness, precision, and interactive learning systems.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <a className="btn-conference-primary" href="#register">
                    Register Now
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                  <a className="btn-conference-secondary" href="/cfp">
                    Call for Papers
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards Section */}
      <section className="py-16 bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-bold text-orange-600 mb-4">Submit</h3>
              <p className="text-gray-700 leading-relaxed mb-6 text-sm">
                Short (3pp) and regular (up to 6pp) submissions via OpenReview; single-blind, non-archival.
              </p>
              <a className="inline-flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors font-medium text-sm" href="/cfp">
                Read CFP
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-bold text-orange-600 mb-4">Program</h3>
              <p className="text-gray-700 leading-relaxed mb-6 text-sm">
                Afternoon program with invited talks, contributed papers, posters, and discussion.
              </p>
              <a className="inline-flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors font-medium text-sm" href="/schedule">
                See schedule
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-bold text-orange-600 mb-4">Venue</h3>
              <p className="text-gray-700 leading-relaxed mb-6 text-sm">
                University of Hawaii campus, Honolulu (subject to change). Accessibility information included.
              </p>
              <a className="inline-flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors font-medium text-sm" href="/venue">
                Plan your visit
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Container */}
      <div className="container space-y-16 py-16">

        {/* Registration Section */}
        <section id="register" className="card p-16 text-center glass glow">
          <div className="max-w-3xl mx-auto">
            <div className="feature-icon mx-auto mb-8" style={{background: 'linear-gradient(135deg, #9333ea, #ec4899)', width: '5rem', height: '5rem'}}>
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h2 className="text-gradient mb-6">Registration</h2>
            <p className="text-xl text-gray-700 mb-12 leading-relaxed">
              Participation is free. Reserve your spot—capacity is limited.
            </p>
            <a className="btn-conference-primary text-xl px-12 py-6" href="https://example.com/register">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Register Free
            </a>
          </div>
        </section>
      </div>
    </>
  )
}