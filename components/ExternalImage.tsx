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
