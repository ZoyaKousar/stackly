'use client'

import { Card } from '@/components/ui/card'
import { useEffect, useRef, useState } from 'react'

const caseStudies = [
  {
    metric: '150%',
    title: 'More Conversions for a Home Retail Brand',
    description: 'Audience targeting done right + better creative = 150% more conversions and 62% cheaper cost per acquisition.',
    industry: 'Retail & eCommerce',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    metric: '2X',
    title: 'ROAS for a Luxury Spa Brand',
    description: 'Smart cross-channel work doubled return on ad spend and pushed click-through rate up 25%.',
    industry: 'Beauty & Personal Care',
    gradient: 'from-[#111a42] to-[#1a2555]',
  },
  {
    metric: '800%',
    title: 'ROAS for a Home Services Brand',
    description: 'Fixed attribution leaks + better lead routing = 8 times return on every ad dollar.',
    industry: 'Home Services',
    gradient: 'from-purple-500 to-indigo-500',
  },
]

export default function CaseStudies() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="relative py-20 sm:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 via-purple-50/30 to-indigo-50/50"></div>
      <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-blue-300/20 to-transparent rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-tr from-indigo-300/20 to-transparent rounded-full blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {caseStudies.map((study, index) => (
            <Card
              key={index}
              className={`p-8 border-gray-200 bg-white/90 backdrop-blur-sm hover:shadow-xl hover:-translate-y-2 transition-all ${
                isVisible ? `animate-scale-in animation-delay-${index * 200}` : 'opacity-0'
              }`}
            >
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
