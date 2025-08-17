export function normalizeExternalImageUrl(src: string): string {
  if (!src) return src
  try {
    const url = new URL(src)
    const host = url.hostname

    // If already a direct Googleusercontent URL, return as-is
    if (host.endsWith('googleusercontent.com')) return src

    // Handle common Google Drive share formats by extracting the file ID
    if (host === 'drive.google.com') {
      // Pattern: https://drive.google.com/file/d/FILE_ID/view?usp=sharing
      const fileMatch = url.pathname.match(/\/file\/d\/([^/]+)/)
      if (fileMatch && fileMatch[1]) {
        const id = fileMatch[1]
        // Use googleusercontent CDN which serves raw image bytes
        return `https://lh3.googleusercontent.com/d/${id}=w1600`
      }
      // Pattern: https://drive.google.com/open?id=FILE_ID
      const openId = url.searchParams.get('id')
      if (openId) {
        return `https://lh3.googleusercontent.com/d/${openId}=w1600`
      }
      // Pattern: already uc with id
      const ucId = url.searchParams.get('id')
      if (url.pathname.startsWith('/uc') && ucId) {
        return `https://lh3.googleusercontent.com/d/${ucId}=w1600`
      }
    }
  } catch {
    // Ignore parse errors, fall through
  }
  return src
}

