export const metadata = { title: 'FAQ — Child Speech AI Workshop' }

const faqs = [
  { q: 'Is registration free?', a: 'Yes. Participation is free; capacity may be limited.' },
  { q: 'Are remote talks allowed?', a: 'In-person is expected; remote options may be granted for visa/travel difficulties.' },
  { q: 'Is the workshop recorded?', a: 'Recording policy TBA; we will announce prior to the event.' }
]

export default function Page() {
  return (
    <section>
      <h1 className="mb-4 text-2xl font-semibold">FAQ</h1>
      <ul className="space-y-3">
        {faqs.map((f,i)=>(
          <li key={i} className="rounded-lg bg-white p-4 shadow">
            <p className="font-medium">{f.q}</p>
            <p className="text-sm text-gray-700">{f.a}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
