'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useRef, useState } from 'react'
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
  const [peopleOpen, setPeopleOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const handlePeopleEnter = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current)
      closeTimer.current = null
    }
    setPeopleOpen(true)
  }

  const handlePeopleLeave = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    closeTimer.current = setTimeout(() => setPeopleOpen(false), 200)
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }
  
  return (
    <div className="nav">
      <div className="container">
        <div className="flex items-center justify-between py-4 lg:py-6 w-full">
          <Link 
            href="/" 
            className="text-gradient font-bold text-lg lg:text-xl xl:text-2xl tracking-tight transition-colors duration-300 flex-shrink-0"
          >
            <span className="hidden sm:inline">Child Speech AI Workshop</span>
            <span className="sm:hidden">Child Speech AI</span>
          </Link>
          
          {/* Desktop Navigation */}
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
            <div 
              className="relative"
              onMouseEnter={handlePeopleEnter}
              onMouseLeave={handlePeopleLeave}
            >
              <button 
                className={`nav-link whitespace-nowrap flex items-center gap-1 ${peopleActive ? 'active' : ''}`}
                aria-haspopup="true"
                aria-expanded={peopleOpen}
                onClick={() => setPeopleOpen(o => !o)}
              >
                Peoples
                <svg className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                  <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 011.08 1.04l-4.25 4.25a.75.75 0 01-1.06 0L5.21 8.27a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                </svg>
              </button>
              <div className={`absolute left-0 top-full ${peopleOpen ? 'block' : 'hidden'} z-50 pt-2`}
                   onMouseEnter={handlePeopleEnter}
                   onMouseLeave={handlePeopleLeave}
              >
                <div className="bg-white border border-gray-200 rounded-lg shadow-lg min-w-[180px]">
                  <div className="py-1">
                  <Link href="/speakers" className={`block px-4 py-2 text-sm hover:bg-gray-50 ${pathname === '/speakers' ? 'text-orange-600 font-semibold' : 'text-gray-700'}`}>Speakers</Link>
                  <Link href="/organizers" className={`block px-4 py-2 text-sm hover:bg-gray-50 ${pathname === '/organizers' ? 'text-orange-600 font-semibold' : 'text-gray-700'}`}>Organizers</Link>
                  </div>
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
          
          {/* Desktop Action Buttons */}
          <div className="hidden lg:flex items-center gap-3 xl:gap-4 text-sm font-medium flex-shrink-0">
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

          {/* Mobile Hamburger Menu Button Only */}
          <div className="flex lg:hidden items-center">
            <button
              className="p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-400 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation Menu */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? 'max-h-[500px] opacity-100 pb-4' : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="border-t border-gray-200 pt-4 space-y-4">
            {/* Navigation Links */}
            <div className="grid grid-cols-2 gap-3 text-sm font-medium">
              {navLinks.map(l => (
                <Link
                  key={l.href}
                  href={l.href as any}
                  className={`nav-link-mobile block px-3 py-2 rounded-md text-center ${
                    pathname === l.href ? 'bg-orange-100 text-orange-700 font-semibold' : 'text-gray-700 hover:bg-gray-50'
                  }`}
                  onClick={closeMobileMenu}
                >
                  {l.label}
                </Link>
              ))}
              {/* Peoples as separate links on mobile */}
              <Link 
                href="/speakers" 
                className={`nav-link-mobile block px-3 py-2 rounded-md text-center ${
                  pathname === '/speakers' ? 'bg-orange-100 text-orange-700 font-semibold' : 'text-gray-700 hover:bg-gray-50'
                }`}
                onClick={closeMobileMenu}
              >
                Speakers
              </Link>
              <Link 
                href="/organizers" 
                className={`nav-link-mobile block px-3 py-2 rounded-md text-center ${
                  pathname === '/organizers' ? 'bg-orange-100 text-orange-700 font-semibold' : 'text-gray-700 hover:bg-gray-50'
                }`}
                onClick={closeMobileMenu}
              >
                Organizers
              </Link>
            </div>
            
            {/* Action Buttons in Mobile Menu */}
            <div className="border-t border-gray-200 pt-4">
              <div className="space-y-3">
                <a 
                  className="btn-conference-secondary w-full flex items-center justify-center gap-2 py-3 px-4" 
                  href={(externalUrls as any).register}
                  onClick={closeMobileMenu}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  Register (Free)
                </a>
                <a 
                  className="btn-conference-primary w-full flex items-center justify-center gap-2 py-3 px-4" 
                  href={(externalUrls as any).submitPaper}
                  target={(externalUrls as any).submitPaper?.startsWith('http') ? '_blank' : undefined}
                  rel={(externalUrls as any).submitPaper?.startsWith('http') ? 'noopener' : undefined}
                  onClick={closeMobileMenu}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Submit Paper
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}