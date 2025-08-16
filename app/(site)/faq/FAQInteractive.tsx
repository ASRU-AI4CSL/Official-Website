'use client'
import { useState } from 'react'

type FAQ = {
  q: string
  a: string
}

type FAQCategory = {
  title: string
  icon: string
  faqs: FAQ[]
}

function FAQItem({ faq, isOpen, onToggle }: { faq: FAQ, isOpen: boolean, onToggle: () => void }) {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full px-4 md:px-6 py-3 md:py-4 text-left bg-white hover:bg-gray-50 transition-colors flex justify-between items-center"
      >
        <h3 className="text-sm md:text-base font-semibold text-gray-900 pr-4">{faq.q}</h3>
        <svg 
          className={`w-4 h-4 md:w-5 md:h-5 text-gray-500 transform transition-transform flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`}
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="px-4 md:px-6 pb-3 md:pb-4 bg-gray-50">
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">{faq.a}</p>
        </div>
      )}
    </div>
  )
}

function FAQCategory({ category }: { category: FAQCategory }) {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  return (
    <div className="mb-8 md:mb-12">
      <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
        <span className="text-xl md:text-2xl">{category.icon}</span>
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900">{category.title}</h2>
      </div>
      <div className="space-y-3 md:space-y-4">
        {category.faqs.map((faq, index) => (
          <FAQItem
            key={index}
            faq={faq}
            isOpen={openItems.includes(index)}
            onToggle={() => toggleItem(index)}
          />
        ))}
      </div>
    </div>
  )
}

export default function FAQInteractive({ faqCategories }: { faqCategories: FAQCategory[] }) {
  return (
    <>
      {faqCategories.map((category, index) => (
        <FAQCategory key={index} category={category} />
      ))}
    </>
  )
}