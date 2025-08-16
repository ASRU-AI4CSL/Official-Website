'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { DateUtils } from '../lib/dates'
import externalUrls from '../data/externalurl.json'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/cfp', label: 'CFP' },
  { href: '/schedule', label: 'Schedule' },
  // Peoples dropdown will be rendered separately
  { href: '/dates', label: 'Dates' },
  { href: '/venue', label: 'Venue' },
  { href: '/faq', label: 'FAQ' },
]

export default function Nav() {
  const pathname = usePathname()
  const submission = DateUtils.getSubmissionDeadline()
  const nextBadge = submission ? `${submission.title}: ${DateUtils.formatDateShort(submission.date)}` : 'Dates'
  const peopleActive = pathname === '/speakers' || pathname === '/organizers'
  
  return (
    <div className="nav">
      <div className="container">
        <div className="flex items-center justify-between py-6 w-full">
          <Link 
            href="/" 
            className="text-gradient font-bold text-lg lg:text-xl xl:text-2xl tracking-tight transition-colors duration-300 flex-shrink-0"
          >
            <span className="hidden sm:inline">Child Speech AI Workshop</span>
            <span className="sm:hidden">Child Speech AI</span>
          </Link>
          
          <div className="hidden lg:flex gap-3 xl:gap-4 text-sm font-medium mx-4 xl:mx-6 flex-1 justify-center max-w-fit">
            {navLinks.slice(0, 3).map(l => (
              <Link
                key={l.href}
                href={l.href as any}
                className={`nav-link whitespace-nowrap ${pathname === l.href ? 'active' : ''}`}
              >
                {l.label}
              </Link>
            ))}
            {/* Peoples dropdown */}
            <div className="relative group">
              <button className={`nav-link whitespace-nowrap flex items-center gap-1 ${peopleActive ? 'active' : ''}`}>
                Peoples
                <svg className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                  <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 011.08 1.04l-4.25 4.25a.75.75 0 01-1.06 0L5.21 8.27a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 hidden group-hover:block bg-white border border-gray-200 rounded-lg shadow-lg min-w-[180px] z-50">
                <div className="py-1">
                  <Link href="/speakers" className={`block px-4 py-2 text-sm hover:bg-gray-50 ${pathname === '/speakers' ? 'text-orange-600 font-semibold' : 'text-gray-700'}`}>Speakers</Link>
                  <Link href="/organizers" className={`block px-4 py-2 text-sm hover:bg-gray-50 ${pathname === '/organizers' ? 'text-orange-600 font-semibold' : 'text-gray-700'}`}>Organizers</Link>
                </div>
              </div>
            </div>
            {navLinks.slice(3).map(l => (
              <Link
                key={l.href}
                href={l.href as any}
                className={`nav-link whitespace-nowrap ${pathname === l.href ? 'active' : ''}`}
              >
                {l.label}
              </Link>
            ))}
          </div>
          
          <div className="flex items-center gap-3 xl:gap-4 text-sm font-medium flex-shrink-0">
            <a 
              className="btn-conference-secondary whitespace-nowrap flex items-center gap-1" 
              href={(externalUrls as any).register}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span className="hidden lg:inline">Register (Free)</span>
              <span className="lg:hidden">Register</span>
            </a>
            <a 
              className="btn-conference-primary whitespace-nowrap flex items-center gap-1" 
              href={(externalUrls as any).submitPaper}
              target={(externalUrls as any).submitPaper?.startsWith('http') ? '_blank' : undefined}
              rel={(externalUrls as any).submitPaper?.startsWith('http') ? 'noopener' : undefined}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span className="hidden lg:inline">Submit Paper</span>
              <span className="lg:hidden">Submit</span>
            </a>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        <div className="lg:hidden pb-4">
          <div className="flex flex-wrap gap-4 text-sm font-medium">
            {navLinks.map(l => (
              <Link
                key={l.href}
                href={l.href as any}
                className={`nav-link ${pathname === l.href ? 'active' : ''}`}
              >
                {l.label}
              </Link>
            ))}
            {/* Peoples as flat links on mobile */}
            <Link href="/speakers" className={`nav-link ${pathname === '/speakers' ? 'active' : ''}`}>Speakers</Link>
            <Link href="/organizers" className={`nav-link ${pathname === '/organizers' ? 'active' : ''}`}>Organizers</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
