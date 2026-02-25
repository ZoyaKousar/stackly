'use client'

import { Card } from '@/components/ui/card'
import { Building2, ArrowRight } from 'lucide-react'
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
    color: 'from-[#111a42] to-[#1a2555]',
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
    color: 'from-indigo-500 to-blue-500',
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
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

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

  // 3D tilt effect on mouse move
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cardRefs.current.forEach((card, index) => {
        if (!card || hoveredIndex !== index) return

        const rect = card.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top

        const centerX = rect.width / 2
        const centerY = rect.height / 2

        const rotateX = (y - centerY) / 15
        const rotateY = (centerX - x) / 15

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px) scale(1.02)`
      })
    }

    if (hoveredIndex !== null) {
      window.addEventListener('mousemove', handleMouseMove)
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [hoveredIndex])

  return (
    <section ref={sectionRef} id="industries" className="relative py-12 sm:py-16 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-purple-50/20 to-indigo-50/20"></div>
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-purple-200/15 to-transparent rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-tr from-indigo-200/15 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      {/* Floating gradient orbs */}
      <div className="absolute top-1/3 left-1/4 w-48 h-48 bg-purple-400/8 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-indigo-400/8 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Compact Header */}
        <div className={`text-center mb-8 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 text-pretty bg-gradient-to-r from-gray-900 via-[#111a42] to-gray-900 bg-clip-text text-transparent animate-gradient">
            Specialists Across Industries.
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto text-pretty">
            We go deep, not wide. Fewer channels, fewer industries, extremely hard on both.
          </p>
        </div>

        {/* Compact Image Section */}
        <div className={`relative mb-8 ${isVisible ? 'animate-scale-in animation-delay-200' : 'opacity-0'}`}>
          <div className="relative w-full max-w-3xl mx-auto h-48 rounded-2xl overflow-hidden shadow-xl group">
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400 opacity-0 group-hover:opacity-15 blur-xl transition-opacity duration-500 -z-10"></div>
            
            <Image
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=600&fit=crop"
              alt="Business industries and sectors"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent group-hover:from-black/60 transition-all duration-500"></div>
            
            {/* Overlay shimmer */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 animate-shimmer pointer-events-none"></div>
            
            <div className="absolute bottom-4 left-4 right-4">
              <div className="flex items-center gap-3 text-white">
                <div className="w-10 h-10 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Building2 className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                </div>
                <div>
                  <p className="text-base font-semibold">Industry Expertise</p>
                  <p className="text-xs opacity-90">Deep Specialization Across Sectors</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Compact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {industries.map((industry, index) => {
            const delay = (index % 8) * 100
            return (
              <Card
                key={index}
                ref={(el) => {
                  cardRefs.current[index] = el
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => {
                  setHoveredIndex(null)
                  const card = cardRefs.current[index]
                  if (card) {
                    card.style.transform = ''
                  }
                }}
                className={`group relative p-4 border-gray-200/50 bg-white/90 backdrop-blur-md hover:border-transparent transition-all duration-500 hover:shadow-xl overflow-hidden ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{
                  transformStyle: 'preserve-3d',
                  transition: 'transform 0.1s ease-out, box-shadow 0.3s ease-out',
                  animationDelay: isVisible ? `${delay}ms` : '0ms',
                }}
              >
                {/* Animated gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                {/* Shimmer effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 animate-shimmer pointer-events-none"></div>
                
                {/* Glow effect */}
                <div className={`absolute -inset-0.5 bg-gradient-to-br ${industry.color} opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-500 -z-10`}></div>
                
                <div className="relative z-10">
                  {/* Icon with animated background */}
                  <div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${industry.color} mb-3 shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300 relative overflow-hidden`}>
                    <div className={`absolute inset-0 bg-gradient-to-br ${industry.color} animate-gradient opacity-75`}></div>
                  </div>
                  
                  <h3 className="text-base font-bold text-gray-900 mb-1.5 group-hover:text-[#111a42] transition-colors duration-300">
                    {industry.title}
                  </h3>
                  
                  <p className="text-xs text-gray-600 leading-relaxed mb-2 group-hover:text-gray-700 transition-colors duration-300">
                    {industry.description}
                  </p>
                  
                  {/* Animated arrow on hover */}
                  <div className="flex items-center text-[#111a42] opacity-0 group-hover:opacity-100 translate-x-[-8px] group-hover:translate-x-0 transition-all duration-300">
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
