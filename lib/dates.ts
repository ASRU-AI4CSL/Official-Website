// ============================================
// WORKSHOP DATE MANAGEMENT MODULE (JSON-backed)
// ============================================
// Centralizes all important dates for the Child Speech AI Workshop.
// Update data in /data/dates.json; pages read via this module.

import datesData from '../data/dates.json'

export interface ImportantDate {
  id: string
  date: string
  title: string
  description: string
  type: 'deadline' | 'notification' | 'info' | 'process' | 'registration' | 'event'
  color: 'red' | 'green' | 'blue' | 'orange' | 'purple' | 'pink'
  priority: 'high' | 'medium' | 'low'
  showOnHomepage?: boolean
  showOnCFP?: boolean
}

type DatesJson = {
  workshop: {
    date: string
    time: string
    timezone: string
    title: string
    location: string
    venue: string
    description: string
  }
  registration: {
    opens: string
    closes: string
    type: string
    url: string
  }
  submission: {
    portal: string
    types: string[]
    reviewType: string
  }
  importantDates: ImportantDate[]
}

const RAW = datesData as DatesJson

export const WORKSHOP_CONFIG = {
  workshop: RAW.workshop,
  registration: RAW.registration,
  submission: RAW.submission,
}

export const IMPORTANT_DATES: ImportantDate[] = RAW.importantDates

// ============================================
// UTILITY FUNCTIONS
// ============================================
export const DateUtils = {
  // Get dates filtered by type
  getDeadlines: () => IMPORTANT_DATES.filter(d => d.type === 'deadline'),
  getNotifications: () => IMPORTANT_DATES.filter(d => d.type === 'notification'),
  getRegistrationDates: () => IMPORTANT_DATES.filter(d => d.type === 'registration'),
  
  // Get dates filtered by display location
  getHomepageDates: () => IMPORTANT_DATES.filter(d => d.showOnHomepage),
  getCFPDates: () => IMPORTANT_DATES.filter(d => d.showOnCFP),
  
  // Get dates filtered by priority
  getHighPriorityDates: () => IMPORTANT_DATES.filter(d => d.priority === 'high'),
  
  // Get specific dates
  getSubmissionDeadline: () => IMPORTANT_DATES.find(d => d.id === 'submission-deadline'),
  getAcceptanceNotification: () => IMPORTANT_DATES.find(d => d.id === 'acceptance-notification'),
  getWorkshopDate: () => IMPORTANT_DATES.find(d => d.id === 'workshop-event'),
  
  // Format dates for display
  formatDateShort: (dateString: string) => {
    return dateString.replace(', 2025', '')
  },
  
  formatDateDisplay: (dateString: string) => {
    return dateString.toUpperCase()
  },
  
  // Check if date has passed (utility for future use)
  isDatePassed: (dateString: string) => {
    const today = new Date()
    const targetDate = new Date(dateString)
    return today > targetDate
  },
  
  // Get days until date (utility for future use)
  getDaysUntil: (dateString: string) => {
    const today = new Date()
    const targetDate = new Date(dateString)
    const diffTime = targetDate.getTime() - today.getTime()
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24))
  }
}

// ============================================
// LEGACY EXPORTS (for backward compatibility)
// ============================================
// These maintain compatibility with existing code

export const importantDates = IMPORTANT_DATES
export const workshopDate = WORKSHOP_CONFIG.workshop
export const registrationDates = WORKSHOP_CONFIG.registration

// ============================================
// EXAMPLE USAGE IN COMPONENTS:
// ============================================
/*
// Import the module
import { IMPORTANT_DATES, DateUtils, WORKSHOP_CONFIG } from '../lib/dates'

// Get specific date types
const deadlines = DateUtils.getDeadlines()
const homepageDates = DateUtils.getHomepageDates()

// Get workshop info
const workshopInfo = WORKSHOP_CONFIG.workshop
const registrationInfo = WORKSHOP_CONFIG.registration

// Use in component
{DateUtils.getHomepageDates().map(date => (
  <div key={date.id} className={`border-${date.color}-500`}>
    <h3>{date.title}</h3>
    <p>{DateUtils.formatDateShort(date.date)}</p>
  </div>
))}
*/
