export const metadata = { title: 'FAQ — Child Speech AI Workshop' }

const faqCategories = [
  {
    title: 'Registration & Participation',
    icon: '🎫',
    faqs: [
      { 
        q: 'Is registration free?', 
        a: 'Yes! Participation in the Child Speech AI Workshop is completely free. However, capacity may be limited, so we recommend registering early to secure your spot.' 
      },
      { 
        q: 'How do I register for the workshop?', 
        a: 'Registration is available through our online portal. Simply click the "Register Free" button on the homepage and fill out the required information. You will receive a confirmation email with further details.' 
      },
      { 
        q: 'What is the capacity limit?', 
        a: 'Due to venue constraints, we have limited capacity for in-person attendance. Registration is on a first-come, first-served basis.' 
      },
      { 
        q: 'Can I attend virtually?', 
        a: 'The workshop is primarily designed for in-person participation. Remote options may be granted for visa difficulties or exceptional circumstances. Please contact the organizers for special arrangements.' 
      }
    ]
  },
  {
    title: 'Submissions & Presentations',
    icon: '📝',
    faqs: [
      { 
        q: 'What types of submissions are accepted?', 
        a: 'We accept short papers (3 pages) and regular papers (up to 6 pages) via OpenReview. Submissions are single-blind and non-archival, focusing on child speech AI technologies.' 
      },
      { 
        q: 'Are remote presentations allowed?', 
        a: 'In-person presentations are strongly preferred. Remote presentation options may be granted for visa/travel difficulties or exceptional circumstances. Please contact organizers early if you need remote arrangements.' 
      },
      { 
        q: 'What is the submission deadline?', 
        a: 'Please check the Call for Papers page for the most up-to-date submission deadlines and requirements.' 
      },
      { 
        q: 'Is the workshop recorded?', 
        a: 'Recording policy will be announced prior to the event. We will inform all participants about recording arrangements and obtain necessary permissions.' 
      }
    ]
  },
  {
    title: 'Travel & Accommodation',
    icon: '✈️',
    faqs: [
      { 
        q: 'Where is the workshop located?', 
        a: 'The workshop will be held at the University of Hawaii campus in Honolulu, Hawaii. Specific venue details and directions will be provided closer to the event date.' 
      },
      { 
        q: 'Are there recommended hotels?', 
        a: 'Yes! We have partnered with several hotels near the venue to offer discounted rates. Check our Venue & Accommodations page for a list of recommended hotels and booking information.' 
      },
      { 
        q: 'How do I get from the airport to the venue?', 
        a: 'Daniel K. Inouye International Airport (HNL) is approximately 20 minutes by car from the venue. Transportation options include rental cars, ride-sharing services, TheBus public transit, and airport shuttles.' 
      },
      { 
        q: 'Is the venue accessible?', 
        a: 'Yes, we are committed to providing accessible facilities. The venue offers accessible routes, seating arrangements, and quiet rooms. Please contact us with specific accessibility needs so we can ensure proper accommodations.' 
      }
    ]
  },
  {
    title: 'Technical & Content',
    icon: '🤖',
    faqs: [
      { 
        q: 'What topics will be covered?', 
        a: 'The workshop focuses on child speech AI with emphasis on fairness, precision, and interactive learning systems. Topics include ASR for children, speech development, bias in AI systems, and ethical considerations.' 
      },
      { 
        q: 'Who should attend this workshop?', 
        a: 'Researchers, practitioners, and students working in speech processing, child language development, AI ethics, educational technology, and related fields. Both academic and industry participants are welcome.' 
      },
      { 
        q: 'Will presentation materials be available?', 
        a: 'Yes, presentation slides and materials will be made available to registered participants after the workshop, subject to presenter approval.' 
      },
      { 
        q: 'Are there networking opportunities?', 
        a: 'Absolutely! The workshop includes dedicated networking breaks, poster sessions, and social events to facilitate connections between attendees, speakers, and organizers.' 
      }
    ]
  }
]

import FAQInteractive from './FAQInteractive'

export default function Page() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-pink-500 text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="max-w-2xl mx-auto text-base md:text-lg">
            Find answers to common questions about the Child Speech AI Workshop. 
            Can't find what you're looking for? Contact our organizers for assistance.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
            <div className="text-center p-4 md:p-6 bg-orange-50 rounded-xl">
              <div className="text-2xl md:text-3xl font-bold text-orange-600 mb-1">FREE</div>
              <div className="text-xs md:text-sm text-gray-600">Registration</div>
            </div>
            <div className="text-center p-4 md:p-6 bg-blue-50 rounded-xl">
              <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-1">DEC 10</div>
              <div className="text-xs md:text-sm text-gray-600">Workshop Date</div>
            </div>
            <div className="text-center p-4 md:p-6 bg-green-50 rounded-xl">
              <div className="text-2xl md:text-3xl font-bold text-green-600 mb-1">HAWAII</div>
              <div className="text-xs md:text-sm text-gray-600">Location</div>
            </div>
            <div className="text-center p-4 md:p-6 bg-purple-50 rounded-xl">
              <div className="text-2xl md:text-3xl font-bold text-purple-600 mb-1">AI</div>
              <div className="text-xs md:text-sm text-gray-600">Child Speech</div>
            </div>
          </div>

          {/* FAQ Categories - Interactive Component */}
          <FAQInteractive faqCategories={faqCategories} />

          {/* Contact Section */}
          <div className="mt-12 p-6 md:p-8 bg-gradient-to-r from-orange-50 to-pink-50 rounded-2xl text-center">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">Still have questions?</h2>
            <p className="text-sm md:text-base text-gray-600 mb-6">
              Our organizing committee is here to help. Reach out with any questions not covered above.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
              <a 
                href="mailto:organizers@childspeechai.org"
                className="inline-flex items-center gap-2 bg-orange-500 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg hover:bg-orange-600 transition-colors text-sm md:text-base font-medium"
              >
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Email Organizers
              </a>
              <a 
                href="/organizers"
                className="inline-flex items-center gap-2 bg-white text-orange-600 border-2 border-orange-500 px-4 md:px-6 py-2 md:py-3 rounded-lg hover:bg-orange-50 transition-colors text-sm md:text-base font-medium"
              >
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                Meet Organizers
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
