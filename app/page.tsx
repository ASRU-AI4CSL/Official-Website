import { eventJsonLd } from '../lib/seo'
import { importantDates, workshopDate, registrationDates, DateUtils } from '../lib/dates'
import ImportantDates from '../components/ImportantDates'

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
                  {workshopDate.date.toUpperCase()}
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
              <a className="btn-conference-primary" href="/cfp">
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
              <a className="btn-conference-primary" href="/schedule">
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
              <a className="btn-conference-primary" href="/venue">
                Plan your visit
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Important Dates Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Important Dates</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Mark your calendar with these key deadlines for the Child Speech AI Workshop 2025
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {/* Paper Submission */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">Paper Submission</h3>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Deadline:</span>
                    <span className="font-semibold text-blue-700">{importantDates.find(d => d.type === 'deadline')?.date.replace(', 2025', '')}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Notification:</span>
                    <span className="font-semibold text-blue-700">{importantDates.find(d => d.type === 'notification')?.date.replace(', 2025', '')}</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-3">
                  Submit your research papers via OpenReview platform
                </p>
              </div>

              {/* Registration */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">Registration</h3>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Opens:</span>
                    <span className="font-semibold text-green-700">{registrationDates.opens.replace(', 2025', '')}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Closes:</span>
                    <span className="font-semibold text-green-700">{registrationDates.closes.replace(', 2025', '')}</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-3">
                  {registrationDates.type}
                </p>
              </div>

              {/* Workshop Event */}
              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 border border-orange-100 md:col-span-2 lg:col-span-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">Workshop Event</h3>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Date:</span>
                    <span className="font-semibold text-orange-700">{workshopDate.date.replace(', 2025', '')}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Time:</span>
                    <span className="font-semibold text-orange-700">{workshopDate.time}</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-3">
                  {workshopDate.description}
                </p>
              </div>
            </div>

            {/* Additional Important Dates (link to full list) */}
            <div className="mt-8 bg-gray-50 rounded-xl p-6 text-center">
              <a className="btn-conference-primary" href="/dates">View All Important Dates</a>
            </div>
          </div>
        </div>
      </section>

      {/* Registration section removed per request */}
    </>
  )
}
