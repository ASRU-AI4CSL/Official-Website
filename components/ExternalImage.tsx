import Image from 'next/image'
import { normalizeExternalImageUrl } from '../lib/images'

type Props = {
  src: string
  alt: string
  className?: string
  width?: number
  height?: number
  priority?: boolean
  quality?: number
  fill?: boolean
  style?: React.CSSProperties
  sizes?: string
}

export default function ExternalImage({ src, alt, className, width = 1200, height = 800, priority = false, quality, fill = false, style, sizes }: Props) {
  const normalized = normalizeExternalImageUrl(src)
  
  // For external URLs, use regular img tag to avoid basePath issues
  const isExternal = normalized.startsWith('http')
  
  if (isExternal) {
    return (
      <img
        src={normalized}
        alt={alt}
        className={className}
        width={fill ? undefined : width}
        height={fill ? undefined : height}
        style={style}
        loading={priority ? "eager" : "lazy"}
      />
    )
  }
  
  // For local images, use Next.js Image
  return (
    <Image
      src={normalized}
      alt={alt}
      {...(fill ? { fill: true } : { width, height })}
      className={className}
      priority={priority}
      quality={quality}
      style={style}
      sizes={sizes}
    />
  )
}
