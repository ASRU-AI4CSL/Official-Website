import React from 'react'
import type { ImportantDate } from '../lib/dates'

type Variant = 'list' | 'grid'

const colorMap = {
  red: { border: 'border-red-500', text: 'text-red-700', bg: 'bg-red-50' },
  green: { border: 'border-green-500', text: 'text-green-700', bg: 'bg-green-50' },
  blue: { border: 'border-blue-500', text: 'text-blue-700', bg: 'bg-blue-50' },
  orange: { border: 'border-orange-500', text: 'text-orange-700', bg: 'bg-orange-50' },
  purple: { border: 'border-purple-500', text: 'text-purple-700', bg: 'bg-purple-50' },
  pink: { border: 'border-pink-500', text: 'text-pink-700', bg: 'bg-pink-50' },
} as const

export interface ImportantDatesProps {
  dates: ImportantDate[]
  variant?: Variant
  showDescription?: boolean
}

export default function ImportantDates({ dates, variant = 'list', showDescription = false }: ImportantDatesProps) {
  if (!dates?.length) return null

  if (variant === 'grid') {
    return (
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {dates.map((d) => {
          const colors = colorMap[d.color]
          return (
            <div key={d.id} className={`rounded-xl p-6 border ${colors.border} ${colors.bg}`}>
              <h3 className={`text-lg font-bold ${colors.text} mb-1`}>{d.title}</h3>
              <p className="text-sm text-gray-600 font-medium">{d.date}</p>
              {showDescription && d.description && (
                <p className="text-sm text-gray-700 mt-3">{d.description}</p>
              )}
            </div>
          )
        })}
      </div>
    )
  }

  // list variant (stacked)
  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {dates.map((d) => {
        const colors = colorMap[d.color]
        return (
          <div key={d.id} className={`bg-white rounded-xl p-6 shadow-lg border-l-4 ${colors.border}`}>
            <h3 className={`text-xl font-bold ${colors.text} mb-1`}>{d.date.toUpperCase()}</h3>
            <p className="text-gray-900 font-medium">{d.title}</p>
            {showDescription && d.description && (
              <p className="text-gray-600 mt-1 text-sm">{d.description}</p>
            )}
          </div>
        )
      })}
    </div>
  )
}

