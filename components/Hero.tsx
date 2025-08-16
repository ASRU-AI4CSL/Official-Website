type Variant = 'orangePink' | 'blueIndigo' | 'emeraldTeal' | 'indigoCyan' | 'roseFuchsia'

const variantClasses: Record<Variant, string> = {
  orangePink: 'bg-gradient-to-r from-orange-500 to-pink-500',
  blueIndigo: 'bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700',
  emeraldTeal: 'bg-gradient-to-r from-emerald-500 to-teal-500',
  indigoCyan: 'bg-gradient-to-r from-indigo-600 to-cyan-500',
  roseFuchsia: 'bg-gradient-to-r from-rose-500 to-fuchsia-500',
}

export default function Hero({
  title,
  subtitle,
  align = 'center',
  variant = 'orangePink',
}: {
  title: string
  subtitle?: string
  align?: 'center' | 'left'
  variant?: Variant
}) {
  const alignClass = align === 'left' ? 'text-left' : 'text-center'
  return (
    <section className={`py-16 text-white ${variantClasses[variant]} ${alignClass}`}>
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
        {subtitle && (
          <p className="max-w-3xl mx-auto md:text-lg opacity-95">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}

