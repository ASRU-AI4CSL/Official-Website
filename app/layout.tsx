import './globals.css'
import type { Metadata } from 'next'
import Nav from '../components/Nav'

export const metadata: Metadata = {
  title: {
    default: 'Child Speech AI Workshop',
    template: '%s — Child Speech AI Workshop',
  },
  description: 'Fair • Precise • Interactive — Workshop 2025',
  metadataBase: new URL('https://example.com'),
  openGraph: {
    type: 'website',
    url: 'https://example.com',
    siteName: 'Child Speech AI Workshop',
    title: 'Child Speech AI Workshop',
    description: 'Fair • Precise • Interactive — Workshop 2025',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Child Speech AI Workshop',
    description: 'Fair • Precise • Interactive — Workshop 2025',
  },
}

const basePath =
  process.env.NODE_ENV === 'production'
    ? '/ASRU-ChildWorkshopWebpage/'
    : '/'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* 👇 This makes all /images/, /coc, /favicon.ico resolve correctly under GitHub Pages */}
        <base href={basePath} />
      </head>
      <body className="min-h-screen flex flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <footer className="footer">
          <div className="container py-12 text-center">
            <p className="text-sm text-gray-600">
              © {new Date().getFullYear()} Child Speech AI Workshop • 
              <a 
                href="/coc" 
                className="ml-1 text-gradient font-medium hover:scale-105 transition-transform inline-block"
              >
                Code of Conduct
              </a>
            </p>
          </div>
        </footer>
      </body>
    </html>
  )
}
