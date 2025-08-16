export function generateICS(summary: string, startISO: string, endISO: string, location: string) {
  const dt = (s: string) => s.replace(/[-:]/g, '').replace('.000','')
  const ics = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Child Speech AI Workshop//EN',
    'CALSCALE:GREGORIAN',
    'BEGIN:VEVENT',
    `DTSTAMP:${dt(new Date().toISOString())}Z`,
    `DTSTART:${dt(startISO)}`,
    `DTEND:${dt(endISO)}`,
    `SUMMARY:${summary}`,
    `LOCATION:${location}`,
    'END:VEVENT',
    'END:VCALENDAR'
  ].join('\r\n')
  return ics
}
