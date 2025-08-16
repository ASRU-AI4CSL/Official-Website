# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm install` - Install dependencies
- `npm run dev` - Start development server on http://localhost:3000
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Architecture Overview

This is a Next.js 14 conference/workshop website using the App Router with TypeScript and Tailwind CSS. The site is structured for a Child Speech AI Workshop with academic content management.

### Key Architecture Patterns

**Route Structure**: Uses Next.js App Router with grouped routes in `app/(site)/` for main pages (cfp, schedule, speakers, venue, faq, coc). The home page is at `app/page.tsx`.

**Content Management**: MDX-based content system with structured directories:
- `content/speakers/` - Speaker profiles with frontmatter (name, affiliation, bio, talk_title)
- `content/sessions/` - Session descriptions 
- `content/pages/` - Additional page content

**SEO & Metadata**: Centralized SEO handling via:
- `lib/seo.ts` - JSON-LD structured data for event schema
- Global metadata in `app/layout.tsx` with OpenGraph and Twitter cards
- Per-page metadata exports

**Styling**: Tailwind CSS with custom component classes defined in globals.css (`.btn`, `.badge`, `.container`)

**Navigation**: Client-side navigation component (`components/Nav.tsx`) with active state detection using `usePathname()`

### Configuration Notes

- TypeScript strict mode enabled with `baseUrl: "."` for clean imports
- Next.js experimental typed routes enabled
- MDX support via `@next/mdx` for content files
- No testing framework currently configured
- Zod for runtime type validation

### Content Customization

Key files to update for new workshops:
- Event details: `app/page.tsx`, `lib/seo.ts`
- Site metadata: `app/layout.tsx` 
- Navigation links: `components/Nav.tsx`
- Speaker/session content: respective MDX files in `content/`