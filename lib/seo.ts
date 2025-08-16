export function eventJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: 'Child Speech AI Workshop',
    startDate: '2025-12-10T14:00:00-10:00',
    endDate: '2025-12-10T18:30:00-10:00',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    eventStatus: 'https://schema.org/EventScheduled',
    location: {
      '@type': 'Place',
      name: 'University of Hawaii',
      address: 'Honolulu, HI, USA'
    },
    isAccessibleForFree: true,
    description: 'Fair • Precise • Interactive — a focused workshop on AI for child speech.',
    organizer: {'@type':'Organization','name':'Workshop Organizers'}
  }
}
