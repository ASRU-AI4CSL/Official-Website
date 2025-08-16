export const metadata = { title: 'Schedule — Child Speech AI Workshop' }

const rows = [
  { time: '14:00', title: 'Opening Remarks', room: 'TBD' },
  { time: '14:10', title: 'Invited Talk 1', speaker: 'TBD', room: 'TBD' },
  { time: '15:00', title: 'Contributed Talks', room: 'TBD' },
  { time: '16:00', title: 'Coffee Break', room: 'Lobby' },
  { time: '16:30', title: 'Poster Session', room: 'TBD' },
  { time: '18:00', title: 'Closing', room: 'TBD' },
]

export default function Page() {
  return (
    <section>
      <h1 className="mb-4 text-2xl font-semibold">Schedule (Dec 10, 2025, HST)</h1>
      <div className="overflow-auto rounded-lg bg-white shadow">
        <table className="w-full text-sm">
          <thead className="bg-gray-100 text-left">
            <tr><th className="p-3">Time</th><th className="p-3">Session</th><th className="p-3">Room</th></tr>
          </thead>
          <tbody>
          {rows.map((r,i)=>(
            <tr key={i} className="border-t">
              <td className="p-3 font-mono">{r.time}</td>
              <td className="p-3">{r.title}{r.speaker?` — ${r.speaker}`:''}</td>
              <td className="p-3">{r.room}</td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
