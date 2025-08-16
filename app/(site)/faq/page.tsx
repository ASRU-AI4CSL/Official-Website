import Hero from '../../../components/Hero'
import faqData from '../../../data/faq.json'

export const metadata = { title: 'FAQ — Child Speech AI Workshop' }

// Source of truth moved to JSON for easier edits/localization
const faqCategories = (faqData as { categories: any }).categories

import FAQInteractive from './FAQInteractive'

export default function Page() {
  return (
    <>
      <Hero
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about the Child Speech AI Workshop. Can't find what you're looking for? Contact our organizers for assistance."
        variant="indigoCyan"
      />

      {/* FAQ Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          

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
                className="btn-conference-primary"
              >
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Email Organizers
              </a>
              <a 
                href="/organizers"
                className="btn-conference-secondary"
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
