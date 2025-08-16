export const metadata = { title: 'CFP — Child Speech AI Workshop' }

export default function Page() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-5xl lg:text-6xl font-black mb-6">Call For Papers</h1>
            <p className="text-xl lg:text-2xl mb-8 leading-relaxed">
              A call for papers invites researchers to submit their work to ASRU 2025 for presentation or publication, outlining topics, and deadlines.
            </p>
            <div className="flex justify-center">
              <a href="https://openreview.net/" className="inline-flex items-center gap-2 bg-red-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-red-700 transition-colors shadow-lg">
                Submit Paper
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Workshop Description */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg leading-relaxed mb-8">
              The ASRU Workshop is a flagship event of IEEE Speech and Language Processing Technical Committee. It has a tradition of bringing together researchers from academia and industry to discuss problems in automatic speech recognition and understanding.
            </p>
            <p className="text-lg leading-relaxed mb-8">
              The workshop will feature invited talks/keynotes, regular papers and special sessions. All papers will be presented as posters.
            </p>
            <p className="text-lg leading-relaxed">
              If you have any questions, please contact the ASRU 2025 TPC Chairs at <a href="mailto:tpc@asru2025.org" className="text-orange-600 hover:text-orange-700">tpc@asru2025.org</a>
            </p>
          </div>
        </div>
      </section>

      {/* Topics Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Topics</h2>
            <p className="text-xl text-gray-600">Topics of interest include, but not limited to:</p>
          </div>
          
          <div className="max-w-6xl mx-auto grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">Automatic speech recognition</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">Spoken language processing</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">Speech enhancement and separation</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">Speech analysis</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">Speaker and language recognition</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">Speaker diarization</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">Text-only language processing</span>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">Multimodal speech processing</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">Multilingual speech processing</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">Emotion recognition and paralinguistics</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">Speech synthesis and spoken language generation</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">Resources (new corpora, toolkits, evaluation metrics, etc.)</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">Machine learning for speech application</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-orange-600 mb-2">MARK YOUR CALENDARS</p>
            <h2 className="text-4xl font-bold text-gray-900">Important Dates</h2>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-orange-500">
              <h3 className="text-xl font-bold text-orange-600 mb-2">MARCH 28, 2025</h3>
              <p className="text-gray-700">Paper submissions open</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-red-500">
              <h3 className="text-xl font-bold text-red-600 mb-2">MAY 28, 2025</h3>
              <p className="text-gray-700">Regular & special session papers due</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-blue-600 mb-2">JUNE 4, 2025</h3>
              <p className="text-gray-700">Paper revision due</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-green-500">
              <h3 className="text-xl font-bold text-green-600 mb-2">AUGUST 6, 2025</h3>
              <p className="text-gray-700">Paper notification of acceptance</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-purple-500">
              <h3 className="text-xl font-bold text-purple-600 mb-2">AUGUST 13, 2025</h3>
              <p className="text-gray-700">Registration Opens</p>
            </div>
          </div>
        </div>
      </section>

      {/* Submission Info */}
      <section className="py-16">
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
    </>
  )
}