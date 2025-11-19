# Child Speech AI Workshop Website

A Next.js 14 workshop website with App Router, TypeScript, Tailwind CSS, and JSON-based content management. Features automated GitHub Pages deployment and external image support.

## Features
- **Pages**: Home, Accepted Papers, Schedule, Speakers, Organizers, Venue, FAQ, Dates, Code of Conduct
- **Content Management**: JSON-based data files for easy updates
- **Images**: External image support (Google Drive, CDN links)
- **SEO**: JSON-LD structured data, OpenGraph, Twitter cards
- **Deployment**: Automated GitHub Pages deployment
- **Responsive**: Mobile-first design with Tailwind CSS

## Getting Started

```bash
npm install
npm run dev
# open http://localhost:3000
```

## Development Commands

```bash
npm install          # Install dependencies
npm run dev         # Start development server (http://localhost:3000)
npm run build       # Build for production
npm run lint        # Run ESLint
```

## Content Management Guide

All content is managed through JSON files in the `/data/` directory. This makes it easy to update information without touching code.

### 📋 Updating Speakers

**File**: `/data/speakers.json`

```json
{
  "speakers": [
    {
      "name": "Dr. Jane Smith",
      "title": "Senior Researcher", 
      "affiliation": "University of Technology",
      "bio": "Dr. Smith is a leading expert in child speech recognition...",
      "talk_title": "Advances in Pediatric ASR",
      "image": "https://drive.google.com/uc?export=view&id=YOUR_FILE_ID",
      "website": "https://janesmithresearch.com",
      "email": "jane.smith@university.edu"
    }
  ]
}
```

**Adding a new speaker:**
1. Upload speaker photo to Google Drive (or other CDN)
2. Get the shareable link and convert to direct download format
3. Add speaker object to the `speakers` array in `speakers.json`

### 👥 Updating Organizers

**File**: `/data/organizers.json`

```json
{
  "Organizers & Program Committee": [
    {
      "name": "Dr. John Doe",
      "title": "Professor",
      "affiliation": "Research University", 
      "description": "Status: Confirmed",
      "email": "mailto:john.doe@university.edu",
      "website": "https://johndoe.com",
      "image": "https://drive.google.com/uc?export=view&id=YOUR_FILE_ID"
    }
  ],
  "advisoryBoard": [
    // Advisory board members...
  ]
}
```

**Adding a new organizer:**
1. Upload organizer photo to Google Drive
2. Add organizer object to appropriate section in `organizers.json`
3. Academic titles are automatically sorted by hierarchy (Professor, Associate Professor, Assistant Professor, etc.)

### 📅 Updating Important Dates

**File**: `/data/dates.json`

```json
{
  "registration": {
    "opens": "October 1, 2025",
    "closes": "December 5, 2025", 
    "type": "Free registration with limited capacity"
  },
  "dates": [
    {
      "id": "paper-submission",
      "date": "November 15, 2025",
      "title": "Paper Submission Deadline",
      "description": "Submit papers via OpenReview",
      "type": "deadline"
    }
  ]
}
```

**Available date types**: `deadline`, `notification`, `info`, `process`, `registration`, `event`

### ❓ Updating FAQ

**File**: `/data/faq.json`

```json
{
  "categories": [
    {
      "title": "Registration & Participation",
      "items": [
        {
          "q": "Is registration free?",
          "a": "Yes, registration is free but space is limited."
        }
      ]
    }
  ]
}
```

### 🔗 Updating External Links

**File**: `/data/externalurl.json`

```json
{
  "register": "/dates",
  "submitPaper": "https://openreview.net/",
  "campusMap": "https://map.hawaii.edu/manoa/",
  "contactEmail": "organizers@childspeechai.org",
  "venueImage": "https://drive.google.com/uc?export=view&id=YOUR_FILE_ID",
  "heroImage": "https://drive.google.com/uc?export=view&id=YOUR_FILE_ID"
}
```

## Image Management

### 🖼️ Using External Images

All images are hosted externally (Google Drive, CDN, etc.) and referenced by URL. No local image files needed.

**Google Drive Image Setup:**
1. Upload image to Google Drive
2. Right-click → Share → "Anyone with the link"
3. Copy the share link: `https://drive.google.com/file/d/FILE_ID/view?usp=sharing`
4. Convert to direct link: `https://drive.google.com/uc?export=view&id=FILE_ID`
5. Use the converted URL in your JSON files

**Image Requirements:**
- **Speaker/Organizer photos**: Square aspect ratio, min 400x400px
- **Hero/Venue images**: Wide aspect ratio (16:9), min 1200x675px  
- **Format**: JPG, PNG, WebP
- **Optimization**: Compress images for web (tools: TinyPNG, ImageOptim)

### 🎨 Image Best Practices

- Use high-quality images with good lighting
- Maintain consistent aspect ratios within categories
- Compress images to reduce load times
- Use descriptive filenames when uploading
- Test image URLs before adding to JSON

## Architecture Overview

### 📁 Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── (site)/            # Grouped routes 
│   │   ├── cfp/           # Accepted papers (program reveal)
│   │   ├── speakers/      # Speaker profiles
│   │   ├── organizers/    # Organizer profiles  
│   │   ├── schedule/      # Event schedule
│   │   ├── venue/         # Venue information
│   │   ├── dates/         # Important dates
│   │   ├── faq/           # Frequently asked questions
│   │   └── coc/           # Code of conduct
│   ├── layout.tsx         # Global layout & metadata
│   └── page.tsx           # Homepage
├── components/            # Reusable components
├── data/                  # JSON content files
├── lib/                   # Utilities & helpers
└── public/               # Static assets
```

### 🔧 Key Features

**Content Management**: 
- JSON-based content in `/data/` directory
- External image hosting support
- Structured data for SEO

**Styling**:
- Tailwind CSS with custom components
- Responsive design patterns
- Conference-themed color scheme

**SEO & Performance**:
- JSON-LD structured data for events
- OpenGraph and Twitter card metadata  
- Optimized images with lazy loading
- Static site generation

## Deployment

### 🚀 GitHub Pages (Current Setup)

The site automatically deploys to GitHub Pages when you push to the main branch:

**Live URL**: `https://USERNAME.github.io/REPOSITORY-NAME/`

**Deployment Process**:
1. Push changes to `main` branch
2. GitHub Actions runs the build process
3. Site deploys automatically (2-5 minutes)
4. Check deployment status in GitHub Actions tab

**Configuration**:
- Uses conditional `basePath` for GitHub Pages compatibility
- Development: runs on `localhost:3000` 
- Production: includes proper path prefixes

### 🔄 Making Updates

1. **Edit JSON files** in `/data/` directory
2. **Test locally** with `npm run dev`
3. **Commit and push** to main branch
4. **Wait for deployment** (check GitHub Actions)
5. **Verify changes** on live site

### 🐛 Troubleshooting

**Common Issues**:
- **404 on deployed site**: Check that all internal links use Next.js `Link` component
- **Images not loading**: Verify external image URLs are publicly accessible
- **Build failures**: Check for syntax errors in JSON files
- **Local development issues**: Ensure `npm install` completed successfully

**Getting Help**:
- Check GitHub Actions logs for deployment errors
- Validate JSON syntax with an online JSON validator
- Test image URLs directly in browser
- Review the `/CLAUDE.md` file for development guidelines

## Architecture Notes

This website uses:
- **Next.js 14** with App Router and TypeScript
- **Tailwind CSS** for styling with custom components
- **JSON-based content** for easy non-technical updates
- **External images** to avoid repository bloat
- **GitHub Pages** deployment with automated workflows
- **SEO optimization** with structured data and metadata

The design prioritizes maintainability and ease of updates for conference organizers without technical backgrounds.
