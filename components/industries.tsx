'use client'

import { Card } from '@/components/ui/card'
import { Building2, ArrowRight, TrendingUp, Briefcase, GraduationCap, Sparkles, ShoppingBag, Scale, Code, Plane } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

const industries = [
  {
    title: 'Home Services',
    description: 'More jobs booked. Local campaigns that finally make sense.',
    gradient: 'from-blue-500 to-cyan-500',
    icon: Building2,
    stat: '40%',
    label: 'More bookings',
  },
  {
    title: 'Retail & eCommerce',
    description: 'Campaigns built around profit, not just sales volume.',
    gradient: 'from-[#111a42] to-[#1a2555]',
    icon: ShoppingBag,
    stat: '3.2x',
    label: 'ROI increase',
  },
  {
    title: 'Legal & Finance',
    description: 'Rules-following ads that still bring in serious leads and feel trustworthy.',
    gradient: 'from-purple-500 to-indigo-500',
    icon: Scale,
    stat: '85%',
    label: 'Lead quality',
  },
  {
    title: 'B2B & SaaS',
    description: 'Longer nurture paths that actually educate and turn real buyers.',
    gradient: 'from-green-500 to-emerald-500',
    icon: Code,
    stat: '2.5x',
    label: 'Conversion rate',
  },
  {
    title: 'Education',
    description: 'Fill classes and courses with people who are genuinely interested.',
    gradient: 'from-yellow-500 to-orange-500',
    icon: GraduationCap,
    stat: '60%',
    label: 'Enrollment boost',
  },
  {
    title: 'Beauty & Personal Care',
    description: 'Targeting + creative that sells products without bleeding money.',
    gradient: 'from-indigo-500 to-blue-500',
    icon: Sparkles,
    stat: '4.1x',
    label: 'Revenue growth',
  },
  {
    title: 'Franchise & Multi-Location',
    description: 'Local ads at big scale, more calls, more walk-ins, more bookings.',
    gradient: 'from-cyan-500 to-blue-500',
    icon: Briefcase,
    stat: '70%',
    label: 'More walk-ins',
  },
  {
    title: 'Travel & Hospitality',
    description: 'Fill beds and tours with travellers who are ready to click "book".',
    gradient: 'from-orange-500 to-red-500',
    icon: Plane,
    stat: '55%',
    label: 'Booking rate',
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

  // 3D tilt effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cardRefs.current.forEach((card, index) => {
        if (!card || hoveredIndex !== index) return

        const rect = card.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top

        const centerX = rect.width / 2
        const centerY = rect.height / 2

        const rotateX = (y - centerY) / 20
        const rotateY = (centerX - x) / 20

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px) scale(1.05)`
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
    <section ref={sectionRef} id="industries" className="relative py-16 sm:py-20 overflow-hidden">
      {/* Modern Dark Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#111a42] via-[#0f1535] to-[#111a42]"></div>
      
      {/* Animated mesh gradient */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(42,174,234,0.15),transparent_50%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(42,174,234,0.1),transparent_50%)]"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
      }}></div>

      {/* Floating orbs */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-[#2aaaea]/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Modern Header */}
        <div className={`text-center mb-12 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2aaaea]/10 border border-[#2aaaea]/20 mb-6 backdrop-blur-sm">
            <TrendingUp className="w-4 h-4 text-[#2aaaea]" />
            <span className="text-sm font-semibold text-[#2aaaea]">Industry Expertise</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-white">
            Specialists Across Industries.
          </h2>
          
          <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            We go deep, not wide. Fewer channels, fewer industries, extremely hard on both.
          </p>
        </div>

        {/* Industries Grid - Modern Card Design */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {industries.map((industry, index) => {
            const Icon = industry.icon
            const delay = (index % 8) * 80
            
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
                className={`group relative p-6 border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 transition-all duration-500 overflow-hidden ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{
                  transformStyle: 'preserve-3d',
                  transition: 'transform 0.1s ease-out, background 0.3s ease-out, border-color 0.3s ease-out',
                  animationDelay: isVisible ? `${delay}ms` : '0ms',
                }}
              >
                {/* Gradient border on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${industry.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-lg`}></div>
                
                {/* Shimmer effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 animate-shimmer pointer-events-none"></div>
                
                {/* Glow effect */}
                <div className={`absolute -inset-0.5 bg-gradient-to-br ${industry.gradient} opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500 -z-10 rounded-lg`}></div>
                
                <div className="relative z-10">
                  {/* Top: Icon and Stat */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${industry.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-6 h-6 text-white group-hover:rotate-12 transition-transform duration-300" />
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-white group-hover:text-[#2aaaea] transition-colors">
                        {industry.stat}
                      </div>
                      <div className="text-xs text-white/60 font-medium">
                        {industry.label}
                      </div>
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#2aaaea] transition-colors duration-300">
                    {industry.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-sm text-white/70 leading-relaxed mb-4 group-hover:text-white/90 transition-colors duration-300">
                    {industry.description}
                  </p>
                  
                  {/* CTA */}
                  <div className="flex items-center gap-2 text-[#2aaaea] opacity-0 group-hover:opacity-100 translate-x-[-8px] group-hover:translate-x-0 transition-all duration-300">
                    <span className="text-xs font-semibold">Explore</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>

                {/* Decorative corner element */}
                <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${industry.gradient} opacity-0 group-hover:opacity-10 rounded-bl-full transition-opacity duration-500`}></div>
              </Card>
            )
          })}
        </div>

        {/* Bottom CTA Section */}
        <div className={`mt-12 text-center ${isVisible ? 'animate-fade-in-up animation-delay-800' : 'opacity-0'}`}>
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#2aaaea]/10 border border-[#2aaaea]/20 hover:bg-[#2aaaea]/20 transition-all duration-300 cursor-pointer group">
            <Building2 className="w-5 h-5 text-[#2aaaea] group-hover:rotate-12 transition-transform" />
            <span className="text-sm font-semibold text-white">View All Industries</span>
            <ArrowRight className="w-4 h-4 text-[#2aaaea] group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </section>
  )
}
