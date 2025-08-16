'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/', label: 'Home' },
  { href: '/cfp', label: 'CFP' },
  { href: '/schedule', label: 'Schedule' },
  { href: '/speakers', label: 'Speakers' },
  { href: '/venue', label: 'Venue' },
  { href: '/faq', label: 'FAQ' },
  { href: '/coc', label: 'CoC' },
]

export default function Nav() {
  const pathname = usePathname()
  
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
          
          <div className="hidden lg:flex gap-4 xl:gap-6 text-sm font-medium mx-4 xl:mx-8 flex-shrink min-w-0">
            {links.map(l => (
              <Link 
                key={l.href} 
                href={l.href} 
                className={`nav-link whitespace-nowrap ${pathname === l.href ? 'active' : ''}`}
              >
                {l.label}
              </Link>
            ))}
          </div>
          
          <div className="flex gap-4 xl:gap-6 text-sm font-medium flex-shrink-0">
            <a 
              className="nav-link whitespace-nowrap flex items-center gap-2" 
              href="#register"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span className="hidden md:inline">Register (Free)</span>
              <span className="md:hidden">Register</span>
            </a>
            <a 
              className="nav-link whitespace-nowrap flex items-center gap-2 bg-orange-500 text-white rounded-lg px-3 py-2 hover:bg-orange-600 transition-colors" 
              href="/cfp#submit"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span className="hidden md:inline">Submit Paper</span>
              <span className="md:hidden">Submit</span>
            </a>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        <div className="lg:hidden pb-4">
          <div className="flex flex-wrap gap-4 text-sm font-medium">
            {links.map(l => (
              <Link 
                key={l.href} 
                href={l.href} 
                className={`nav-link ${pathname === l.href ? 'active' : ''}`}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}