import Link from 'next/link'
import Hero from '../../../components/Hero'
import externalUrls from '../../../data/externalurl.json'
import acceptedPapersData from '../../../data/accepted-papers.json'

type AcceptedPaper = {
  title: string
  authors: string
  affiliation: string
}

const acceptedPapers = acceptedPapersData as AcceptedPaper[]

export const metadata = { title: 'Accepted Papers — Child Speech AI Workshop' }

export default function Page() {
  const totalPapers = acceptedPapers.length

  const highlights = [
    {
      title: 'Best Paper',
      description: '“Curriculum-Guided Pretraining for Early Language Models” from University of Edinburgh & Mila',
    },
    {
      title: 'Best Student Paper',
      description: '“Interactive Agents for Bilingual Storytelling” led by Universidad Nacional Autónoma de México',
    },
    {
      title: 'Impact Recognition',
      description: '“ASR-Coach: Remote Fluency Therapy with Personalized Prompts” deployed with Boston-area clinics',
    },
  ]

  const registerUrl = (externalUrls as any).register
  const registerTarget = registerUrl?.startsWith('http') ? '_blank' : undefined
  const registerRel = registerUrl?.startsWith('http') ? 'noopener' : undefined

  return (
    <>
      <Hero
        title="Accepted Papers"
        subtitle="Celebrate the researchers selected for presentation at the Child Speech AI Workshop. Explore the themes that emerged across the program and plan to meet the authors in Honolulu."
        variant="roseFuchsia"
      />

      {/* Accepted papers */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <p className="text-sm uppercase tracking-widest text-rose-500 font-semibold">Program Reveal</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4">Explore the accepted papers</h2>
            <p className="mt-4 text-gray-600">
              Preview every oral and poster contribution, then check the schedule to see when each author presents.
            </p>
          </div>
          <ul className="space-y-6 max-w-3xl mx-auto">
            {acceptedPapers.map((paper, index) => (
              <li key={paper.title} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 text-left">
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-rose-400 mb-3">
                  Paper {index + 1} of {totalPapers}
                </div>
                <p className="text-xl font-bold text-gray-900 leading-snug">{paper.title}</p>
                <p className="text-sm text-gray-700 mt-3">{paper.authors}</p>
                <p className="text-sm text-gray-500">{paper.affiliation}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Appreciation */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-4 text-lg text-gray-700 leading-relaxed">
            <p>
              Thank you to everyone who contributed to this year’s call—we received our largest pool of submissions
              to date. After careful review, {totalPapers} papers were selected for presentation at ASRU 2025 in
              Honolulu. They represent advances across recognition accuracy, fairness, storytelling, and deployment
              in clinics and classrooms.
            </p>
            <p>
              Authors will receive presentation logistics from the organizing committee. If you have questions about
              scheduling or accessibility needs, please reach out to{' '}
              <a className="text-rose-600 font-semibold" href={`mailto:${(externalUrls as any).contactEmail}`}>
                {(externalUrls as any).contactEmail}
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Next steps */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gray-900 text-white rounded-3xl p-10">
            <div className="grid gap-8 md:grid-cols-2 md:items-center">
              <div>
                <p className="uppercase text-sm tracking-widest text-rose-300 font-semibold">Join the sessions</p>
                <h3 className="text-3xl font-bold mt-4">See when each paper is featured</h3>
                <p className="text-white/80 mt-4">
                  Check the schedule for oral spotlights and poster rotations, and register to reserve your seat in
                  Honolulu.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <Link className="btn-conference-primary bg-white text-gray-900 hover:bg-gray-100" href="/schedule">
                  View schedule
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <a
                  className="btn-conference-secondary border-white text-white hover:bg-white hover:text-gray-900"
                  href={registerUrl}
                  target={registerTarget}
                  rel={registerRel}
                >
                  Register for the workshop
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
