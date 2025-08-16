import Hero from '../../../components/Hero'
import ImportantDates from '../../../components/ImportantDates'
import { IMPORTANT_DATES } from '../../../lib/dates'
import externalUrls from '../../../data/externalurl.json'

export const metadata = { title: 'CFP — Child Speech AI Workshop' }

export default function Page() {
  return (
    <>
      <Hero
        title="Call For Papers"
        subtitle="A call for papers invites researchers to submit their work to ASRU 2025 for presentation or publication, outlining topics, and deadlines."
        variant="roseFuchsia"
      />

      {/* Workshop Description */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Workshop Theme</h2>
            <p className="text-lg leading-relaxed mb-6">
              Children's speech and language pose unique challenges for speech technology, with rapid developmental changes, wide individual variation, and significant fairness concerns. Current AI systems trained on adult speech often fail for children, particularly for non-standard speech, dialects, or neurodiverse conditions. Addressing these gaps requires systems that are fair, precise, and interactive:
            </p>
            
            <div className="grid gap-6 md:grid-cols-3 mb-8">
              <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-blue-500">
                <h3 className="text-xl font-bold text-blue-600 mb-3">Fairness</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Ensuring robust, inclusive performance across ages, languages, and developmental profiles, while upholding ethical data practices.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-green-500">
                <h3 className="text-xl font-bold text-green-600 mb-3">Precision</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Building reliable tools for transcription and early detection of speech, language, and neurodevelopmental disorders.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-purple-500">
                <h3 className="text-xl font-bold text-purple-600 mb-3">Interactivity</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Designing engaging, real-time feedback systems that support learning and clinical assessment.
                </p>
              </div>
            </div>
            
            <p className="text-lg leading-relaxed">
              This workshop brings together researchers in speech technology, clinical linguistics, and human-computer interaction to advance next-generation systems that are accurate, inclusive, and responsive to children's needs.
            </p>
          </div>
        </div>
      </section>

      {/* Paper Topics Section */}
      <section className="py-16 bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Paper Topics</h2>
            <p className="text-xl text-white opacity-90">Topics of interest include, but are not limited to:</p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
              <span className="text-white">ASR and modeling techniques for children's speech</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
              <span className="text-white">Detection of speech and language disorders (e.g., speech delay, DLD, dyslexia, stuttering)</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
              <span className="text-white">Pronunciation and fluency analysis across ages</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
              <span className="text-white">Interactive learning, feedback, and screening systems</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
              <span className="text-white">Data collection, annotation, and benchmark design</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
              <span className="text-white">Multimodal and cross-linguistic methods for pediatric language modeling</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
              <span className="text-white">Privacy, fairness, and ethics in child speech technologies</span>
            </div>
          </div>
        </div>
      </section>

      {/* Important Dates section removed per request */}

      {/* Submission Info */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Submission Information</h2>
            
            <div className="grid gap-8 md:grid-cols-2">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Submission Types</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600">•</span>
                    <span>Short papers: 3 pages + references</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600">•</span>
                    <span>Regular papers: up to 6 pages + references</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Review Process</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600">•</span>
                    <span>Single-blind review</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600">•</span>
                    <span>Non-archival</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600">•</span>
                    <span>Organizers + PC with meta-reviewers</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 bg-orange-50 rounded-xl p-6 border border-orange-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Policies</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-orange-600">•</span>
                  <span>Dual submission allowed where compatible with venue policy</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600">•</span>
                  <span>Presenting author expected to attend in person (remote exceptions for visa/travel difficulties)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Submit Paper CTA */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Ready to submit?</h2>
            <p className="text-gray-600 mb-6">Follow the instructions above, then submit your paper via the link below.</p>
            <a
              className="btn-conference-primary inline-flex items-center gap-2"
              href={(externalUrls as any).submitPaper}
              target={(externalUrls as any).submitPaper?.startsWith('http') ? '_blank' : undefined}
              rel={(externalUrls as any).submitPaper?.startsWith('http') ? 'noopener' : undefined}
            >
              Submit Paper
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
