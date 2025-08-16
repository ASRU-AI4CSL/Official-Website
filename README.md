# Child Speech AI Workshop — Starter

A minimal Next.js 14 + Tailwind + MDX site for a workshop. Includes:
- Pages: Home, CFP, Schedule, Speakers, Venue, FAQ, Organizers
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

## Content Management Guide

### Adding New Speakers

1. **Add Speaker Image**:
   - Upload speaker photo to `/public/images/speakers/`
   - Use naming convention: `firstname-lastname.jpg`
   - Recommended size: 512x512px square

2. **Update Speakers Page**:
   - Edit `/app/(site)/speakers/page.tsx`
   - Add new speaker object to the speakers array:
   ```javascript
   {
     name: "Dr. Jane Smith",
     title: "Senior Researcher",
     affiliation: "University of Technology",
     image: "/images/speakers/jane-smith.jpg",
     bio: "Dr. Smith is a leading expert in...",
     talk: "Title of Their Talk"
   }
   ```

### Adding New Organizers

1. **Add Organizer Image**:
   - Upload photo to `/public/images/organizers/`
   - Use naming convention: `firstname-lastname.jpg`
   - Recommended size: 512x512px square

2. **Update Organizers Page**:
   - Edit `/app/(site)/organizers/page.tsx`
   - Add organizer to appropriate section (General Chairs, Advisory Board, etc.):
   ```javascript
   {
     name: "Dr. John Doe",
     title: "Professor",
     affiliation: "Research University",
     email: "john.doe@university.edu",
     image: "/images/organizers/john-doe.jpg"
   }
   ```

### Adding Schedule Sessions

1. **Add Session Image** (if needed):
   - Upload to `/public/images/schedule/`
   - Use descriptive names: `session-topic.jpg`

2. **Update Schedule Page**:
   - Edit `/app/(site)/schedule/page.tsx`
   - Add new session object:
   ```javascript
   {
     time: "10:00 AM",
     title: "Session Title",
     description: "Description of the session...",
     speaker: "Speaker Name",
     image: "/images/schedule/session-image.jpg"
   }
   ```

### Updating Important Dates

- **Homepage**: Edit dates in `/app/page.tsx` in the "Important Dates" section
- **CFP Page**: Edit dates in `/app/(site)/cfp/page.tsx` in the "Important Dates" section

### Adding FAQ Items

- Edit `/app/(site)/faq/page.tsx`
- Add new FAQ to the appropriate category in `faqCategories` array:
```javascript
{
  q: "Your question here?",
  a: "Your answer here..."
}
```

### Updating Venue Information

- Edit `/app/(site)/venue/page.tsx`
- Update venue details, hotel recommendations, and transportation info
- Add venue photos to `/public/images/venue/`

### Customizing Colors and Styling

- **Global Colors**: Edit CSS variables in `/app/globals.css`
- **Button Styles**: Modify `.btn-conference-primary` and `.btn-conference-secondary` classes
- **Navigation**: Update links in `/components/Nav.tsx`

## Development Commands

```bash
npm install          # Install dependencies
npm run dev         # Start development server (http://localhost:3000)
npm run build       # Build for production
npm run lint        # Run ESLint
```

## Deployment

- Deploy on Vercel by connecting your GitHub repository
- Ensure all images are properly uploaded to `/public/images/`
- Test all pages and links before going live
