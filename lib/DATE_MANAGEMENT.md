# Date Management System

This document explains how to manage all important dates for the Child Speech AI Workshop website.

## Overview

All dates across the website are managed from a single file: `/lib/dates.ts`. This ensures consistency and makes it easy to update dates without hunting through multiple files.

## Quick Start

### To Update a Date
1. Open `/lib/dates.ts`
2. Find the date you want to change in the `IMPORTANT_DATES` array
3. Update the `date` field
4. Save the file - all pages will automatically update

### To Add a New Date
1. Open `/lib/dates.ts`
2. Add a new object to the `IMPORTANT_DATES` array:
```typescript
{
  id: 'my-new-date',
  date: 'January 15, 2025',
  title: 'My New Event',
  description: 'Description of what happens',
  type: 'deadline', // or 'info', 'notification', etc.
  color: 'red', // Color for UI display
  priority: 'high', // 'high', 'medium', or 'low'
  showOnHomepage: true, // Show on homepage?
  showOnCFP: false // Show on CFP page?
}
```

## File Structure

### Main Configuration (`WORKSHOP_CONFIG`)
Contains core workshop information:
- **workshop**: Main event details (date, time, location)
- **registration**: Registration open/close dates and info
- **submission**: Submission portal and requirements

### Important Dates (`IMPORTANT_DATES`)
Array of all dates with properties:
- **id**: Unique identifier
- **date**: Date string (e.g., "October 1, 2025")
- **title**: Display title
- **description**: Detailed description
- **type**: Category of date
- **color**: UI color theme
- **priority**: Importance level
- **showOnHomepage**: Display on homepage important dates section
- **showOnCFP**: Display on Call for Papers page

### Date Types
- `deadline`: Important deadlines (red color recommended)
- `notification`: Notification dates (green color recommended)
- `info`: Informational dates (blue/orange color)
- `process`: Process periods (purple color recommended)
- `registration`: Registration-related dates
- `event`: Main events

### Colors Available
- `red`: For deadlines and urgent items
- `green`: For positive notifications
- `blue`: For informational items
- `orange`: For workshop events
- `purple`: For process periods
- `pink`: For special events

## Utility Functions

The `DateUtils` object provides helpful functions:

### Filter Functions
```typescript
DateUtils.getDeadlines() // Get all deadline dates
DateUtils.getHomepageDates() // Get dates shown on homepage
DateUtils.getCFPDates() // Get dates shown on CFP page
DateUtils.getHighPriorityDates() // Get high priority dates
```

### Specific Date Getters
```typescript
DateUtils.getSubmissionDeadline() // Get submission deadline
DateUtils.getAcceptanceNotification() // Get acceptance notification
DateUtils.getWorkshopDate() // Get main workshop date
```

### Formatting Functions
```typescript
DateUtils.formatDateShort(date) // Remove year for display
DateUtils.formatDateDisplay(date) // Convert to uppercase
```

### Future Utility Functions
```typescript
DateUtils.isDatePassed(date) // Check if date has passed
DateUtils.getDaysUntil(date) // Get days until date
```

## Usage in Components

### Basic Usage
```typescript
import { IMPORTANT_DATES, DateUtils } from '../lib/dates'

// Show all homepage dates
{DateUtils.getHomepageDates().map(date => (
  <div key={date.id}>
    <h3>{date.title}</h3>
    <p>{date.date}</p>
  </div>
))}
```

### Advanced Usage
```typescript
import { WORKSHOP_CONFIG, DateUtils } from '../lib/dates'

// Get workshop info
const workshop = WORKSHOP_CONFIG.workshop
const submissionDeadline = DateUtils.getSubmissionDeadline()

// Use in component
<div>
  <h1>Workshop: {workshop.date}</h1>
  <p>Submit by: {submissionDeadline?.date}</p>
</div>
```

## Current Pages Using This System

1. **Homepage** (`/app/page.tsx`):
   - Hero section date badge
   - Important dates cards section
   - Paper submission deadlines
   - Registration dates

2. **CFP Page** (`/app/(site)/cfp/page.tsx`):
   - Important dates timeline
   - All submission-related dates

3. **Schedule Page** (`/app/(site)/schedule/page.tsx`):
   - Workshop date in hero section

4. **FAQ Page** (`/app/(site)/faq/page.tsx`):
   - Quick stats with workshop date

## Best Practices

### When Adding Dates
1. Use descriptive IDs (kebab-case)
2. Include full descriptions
3. Set appropriate colors for visual hierarchy
4. Consider which pages should show the date
5. Set priority based on importance to users

### When Updating Dates
1. Update the date string in the exact same format
2. Check if descriptions need updating
3. Verify the date appears correctly on all pages
4. Consider if the date type or priority has changed

### Date Format
- Always use: "Month Day, Year" format
- Example: "October 1, 2025"
- For date ranges: "October 13–26, 2025"

## Troubleshooting

### Date Not Appearing
1. Check `showOnHomepage` or `showOnCFP` flags
2. Verify the date ID is unique
3. Ensure proper TypeScript syntax

### Wrong Color/Styling
1. Check the `color` field matches available colors
2. Verify Tailwind CSS classes are generated
3. Check if custom colors are properly defined

### Legacy Code Issues
The system maintains backward compatibility with:
- `importantDates` (legacy export)
- `workshopDate` (legacy export)  
- `registrationDates` (legacy export)

## Future Enhancements

The system is designed to be extended with:
- Automatic deadline warnings
- Date countdown functionality
- Calendar integration
- Time zone conversion
- Past date highlighting
- Email reminder integration

## Example: Adding a New Deadline

```typescript
// Add to IMPORTANT_DATES array in /lib/dates.ts
{
  id: 'camera-ready-deadline',
  date: 'November 20, 2025',
  title: 'Camera-Ready Papers Due',
  description: 'Final versions of accepted papers must be submitted',
  type: 'deadline',
  color: 'red',
  priority: 'high',
  showOnHomepage: true,
  showOnCFP: true
}
```

This date will automatically appear on:
- Homepage important dates section
- CFP page timeline
- Any component using `DateUtils.getDeadlines()`
- Any component using `DateUtils.getHomepageDates()`