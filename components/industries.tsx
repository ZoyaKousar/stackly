'use client'

import { Card } from '@/components/ui/card'
import { Building2 } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

const industries = [
  {
    title: 'Home Services',
    description: 'More jobs booked. Local campaigns that finally make sense.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Retail & eCommerce',
    description: 'Campaigns built around profit, not just sales volume.',
    color: 'from-pink-500 to-rose-500',
  },
  {
    title: 'Legal & Finance',
    description: 'Rules-following ads that still bring in serious leads and feel trustworthy.',
    color: 'from-purple-500 to-indigo-500',
  },
  {
    title: 'B2B & SaaS',
    description: 'Longer nurture paths that actually educate and turn real buyers.',
    color: 'from-green-500 to-emerald-500',
  },
  {
    title: 'Education',
    description: 'Fill classes and courses with people who are genuinely interested.',
    color: 'from-yellow-500 to-orange-500',
  },
  {
    title: 'Beauty & Personal Care',
    description: 'Targeting + creative that sells products without bleeding money.',
    color: 'from-rose-500 to-pink-500',
  },
  {
    title: 'Franchise & Multi-Location',
    description: 'Local ads at big scale, more calls, more walk-ins, more bookings.',
    color: 'from-cyan-500 to-blue-500',
  },
  {
    title: 'Travel & Hospitality',
    description: 'Fill beds and tours with travellers who are ready to click "book".',
    color: 'from-orange-500 to-red-500',
  },
]

export default function Industries() {
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
    <section ref={sectionRef} id="industries" className="relative py-20 sm:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-purple-50/30 to-pink-50/30"></div>
      <div className="absolute top-10 left-0 w-96 h-96 bg-gradient-to-br from-purple-200/20 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-gradient-to-tr from-pink-200/20 to-transparent rounded-full blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-12 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 text-pretty">
            Specialists Across Industries.
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto text-pretty mb-8">
            We go deep, not wide. Fewer channels, fewer industries, extremely hard on both.
          </p>
        </div>

        {/* Image Section - Above grid */}
        <div className={`relative mb-12 ${isVisible ? 'animate-scale-in animation-delay-200' : 'opacity-0'}`}>
          <div className="relative w-full max-w-4xl mx-auto h-72 rounded-3xl overflow-hidden shadow-2xl group">
            <Image
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=600&fit=crop"
              alt="Business industries and sectors"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex items-center gap-3 text-white">
                <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-lg font-semibold">Industry Expertise</p>
                  <p className="text-sm opacity-90">Deep Specialization Across Sectors</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <Card
              key={index}
              className={`p-6 border-gray-200 bg-white/90 backdrop-blur-sm hover:border-pink-400 transition-all hover:shadow-xl hover:-translate-y-1 ${
                isVisible ? `animate-fade-in-up animation-delay-${(index % 8) * 100}` : 'opacity-0'
              }`}
            >
              <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${industry.color} mb-4 shadow-md`}></div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {industry.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {industry.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
