'use client'

import { Card } from '@/components/ui/card'
import {
  Search,
  Share2,
  Package,
  TrendingUp,
  Mail,
  Zap,
  ArrowRight,
} from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

const services = [
  {
    icon: Search,
    title: 'Paid Search',
    description: 'Grab people who are already looking hard and feed those signals into everything else you do.',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Share2,
    title: 'Paid Social',
    description: 'Grow awareness and interest with creative and targeting that really matches the people you want.',
    gradient: 'from-[#111a42] to-[#1a2555]',
  },
  {
    icon: TrendingUp,
    title: 'Performance Creative',
    description: 'Keep testing, keep learning, keep making the messages hit harder at every step of the funnel.',
    gradient: 'from-purple-500 to-indigo-500',
  },
  {
    icon: Search,
    title: 'SEO & AIO',
    description: 'Bring in more visitors and build real trust by going after the exact things people type into search.',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    icon: Mail,
    title: 'Marketing Automation',
    description: 'Make follow-ups, lead flows and personal messages happen automatically so engagement and sales go up.',
    gradient: 'from-orange-500 to-red-500',
  },
  {
    icon: Zap,
    title: 'GHL Services',
    description: 'Run everything smoothly inside GoHighLevel - CRM, funnels, SMS, email sequences, client dashboards.',
    gradient: 'from-yellow-500 to-orange-500',
  },
]

export default function Services() {
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

        const rotateX = (y - centerY) / 10
        const rotateY = (centerX - x) / 10

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px) scale(1.02)`
      })
    }

    const handleMouseLeave = (index: number) => {
      const card = cardRefs.current[index]
      if (card) {
        card.style.transform = ''
      }
    }

    if (hoveredIndex !== null) {
      window.addEventListener('mousemove', handleMouseMove)
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [hoveredIndex])

  return (
    <section ref={sectionRef} id="services" className="relative py-20 sm:py-28 overflow-hidden">
      {/* Animated Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/30 to-indigo-50/30"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-200/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-indigo-200/20 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-indigo-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left: Content */}
          <div className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 text-pretty bg-gradient-to-r from-gray-900 via-[#111a42] to-gray-900 bg-clip-text text-transparent animate-gradient">
              A Media System, Not Just Channel Chops.
            </h2>
            <p className="text-lg text-gray-600 mb-6 text-pretty leading-relaxed">
              Good results don't come from channels sitting alone; they come from channels that actually talk to each other.
            </p>
            <div className="flex items-center gap-3 text-gray-700 group/item hover:text-[#111a42] transition-colors duration-300 cursor-default">
              <div className="p-2 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 group-hover/item:scale-110 transition-transform duration-300">
                <Package className="w-6 h-6 text-[#111a42] group-hover/item:rotate-12 transition-transform duration-300" />
              </div>
              <span className="font-medium">Integrated Media Solutions</span>
            </div>
          </div>

          {/* Right: Image */}
          <div className={`relative ${isVisible ? 'animate-slide-in-right animation-delay-200' : 'opacity-0'}`}>
            <div className="relative w-full h-96 rounded-3xl overflow-hidden shadow-2xl group">
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10"></div>
              
              <Image
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop"
                alt="Digital marketing services and analytics dashboard"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent group-hover:from-black/50 transition-all duration-500"></div>
              
              {/* Overlay shimmer on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 animate-shimmer pointer-events-none"></div>
            </div>
            {/* Animated decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#111a42]/20 rounded-2xl blur-2xl -z-10 animate-pulse"></div>
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-400/20 rounded-full blur-xl animate-float"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            const delay = (index % 6) * 100
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
                className={`group relative p-6 border-gray-200/50 bg-white/90 backdrop-blur-md hover:border-transparent transition-all duration-500 hover:shadow-2xl overflow-hidden ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{
                  transformStyle: 'preserve-3d',
                  transition: 'transform 0.1s ease-out, box-shadow 0.3s ease-out',
                  animationDelay: isVisible ? `${delay}ms` : '0ms',
                }}
              >
                {/* Animated gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                {/* Shimmer effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 animate-shimmer pointer-events-none"></div>
                
                {/* Glow effect */}
                <div className={`absolute -inset-0.5 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10`}></div>
                
                <div className="relative z-10">
                  {/* Icon with animated background */}
                  <div className={`mb-4 w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300 relative overflow-hidden`}>
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} animate-gradient opacity-75`}></div>
                    <Icon className="w-7 h-7 text-white relative z-10 group-hover:rotate-12 transition-transform duration-300" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#111a42] transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-4 group-hover:text-gray-700 transition-colors duration-300">
                    {service.description}
                  </p>
                  
                  {/* Animated arrow on hover */}
                  <div className="flex items-center text-[#111a42] opacity-0 group-hover:opacity-100 translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300">
                    <span className="text-sm font-semibold mr-2">Learn more</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </Card>
            )
          })}
        </div>

        <div className={`mt-12 p-8 bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 rounded-2xl border border-indigo-200/50 shadow-xl hover:shadow-2xl transition-all duration-500 relative overflow-hidden group ${
          isVisible ? 'animate-scale-in animation-delay-600' : 'opacity-0'
        }`}>
          {/* Animated background gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 via-indigo-400/10 to-purple-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient"></div>
          
          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#111a42] transition-colors duration-300">
              Also in Our Toolkit.
            </h3>
            <p className="text-gray-700 group-hover:text-gray-800 transition-colors duration-300">
              Amazon Ads, HubSpot & CRM, Conversion Tracking, Analytics Setup
            </p>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-200/20 to-transparent rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-indigo-200/20 to-transparent rounded-full blur-2xl"></div>
        </div>
      </div>
    </section>
  )
}
