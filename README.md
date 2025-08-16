# Child Speech AI Workshop — Starter

A minimal Next.js 14 + Tailwind + MDX site for a workshop. Includes:
- Pages: Home, CFP, Schedule, Speakers, Venue, FAQ, CoC, Organizers
- Components: Nav
- Lib: JSON-LD Event, simple ICS generator
- Content folders for MDX (speakers, sessions)

## Getting Started
```bash
npm install
npm run dev
# open http://localhost:3000
```

## Image Directory Structure

All images are organized in `public/images/` with the following subdirectories:

### `/public/images/organizers/`
- **Purpose**: Organizer headshots and profile photos
- **Format**: .jpg, .png
- **Naming**: `firstname-lastname.jpg` (lowercase, hyphenated)
- **Size**: Square aspect ratio, min 256x256px, recommended 512x512px
- **Examples**: `bowon-lee.jpg`, `kyu-jeong-han.jpg`

### `/public/images/speakers/`
- **Purpose**: Speaker headshots and presentation photos
- **Format**: .jpg, .png
- **Naming**: `firstname-lastname.jpg` or `YYYYMMDD_FirstnameLastname.png`
- **Size**: Square aspect ratio, min 256x256px, recommended 512x512px
- **Examples**: `jane-doe.jpg`, `20240212_JinjunXiong.png`

### `/public/images/schedule/`
- **Purpose**: Schedule event photos, session images
- **Format**: .jpg, .png
- **Naming**: `session-name.jpg` or `event-type.jpg`
- **Size**: 16:9 aspect ratio recommended, min 800x450px
- **Examples**: `opening-ceremony.jpg`, `coffee-break.jpg`

### `/public/images/venue/`
- **Purpose**: Venue photos, maps, location images
- **Format**: .jpg, .png
- **Naming**: `venue-name.jpg` or `location-type.jpg`
- **Size**: Various, landscape preferred
- **Examples**: `conference-hall.jpg`, `campus-map.png`

### `/public/images/hero/`
- **Purpose**: Hero/banner images for pages
- **Format**: .jpg, .jpeg
- **Naming**: `page-name-hero.jpg` or descriptive names
- **Size**: Wide aspect ratio (21:9 or 16:9), min 1920x1080px
- **Examples**: `child-speech-hero.jpeg`, `workshop-banner.jpg`

### `/public/images/sponsors/`
- **Purpose**: Sponsor logos and company images
- **Format**: .png (transparent backgrounds), .svg preferred
- **Naming**: `company-name-logo.png`
- **Size**: Vector or high-res (min 300x150px)
- **Examples**: `google-logo.png`, `microsoft-logo.svg`

## Customize
- Update dates, venue, and registration URLs in `app/page.tsx`, `app/(site)/*`.
- Add speakers/sessions under `content/`.
- Upload images following the directory structure above.
- Deploy on Vercel.
