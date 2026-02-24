'use client'

import { Card } from '@/components/ui/card'
import {
  Search,
  Share2,
  Package,
  TrendingUp,
  Mail,
  Zap,
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
    gradient: 'from-pink-500 to-rose-500',
  },
  {
    icon: TrendingUp,
    title: 'Performance Creative',
    description: 'Keep testing, keep learning, keep making the messages hit harder at every step of the funnel.',
    gradient: 'from-purple-500 to-pink-500',
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
    <section ref={sectionRef} id="services" className="relative py-20 sm:py-28 overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/30 to-pink-50/30"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-200/20 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-pink-200/20 to-transparent rounded-full blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left: Content */}
          <div className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 text-pretty">
              A Media System, Not Just Channel Chops.
            </h2>
            <p className="text-lg text-gray-600 mb-6 text-pretty">
              Good results don't come from channels sitting alone; they come from channels that actually talk to each other.
            </p>
            <div className="flex items-center gap-3 text-gray-700">
              <Package className="w-6 h-6 text-pink-500" />
              <span className="font-medium">Integrated Media Solutions</span>
            </div>
          </div>

          {/* Right: Image */}
          <div className={`relative ${isVisible ? 'animate-slide-in-right animation-delay-200' : 'opacity-0'}`}>
            <div className="relative w-full h-96 rounded-3xl overflow-hidden shadow-2xl group">
              <Image
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop"
                alt="Digital marketing services and analytics dashboard"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-pink-400/30 to-rose-400/30 rounded-2xl blur-2xl -z-10"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card
                key={index}
                className={`p-6 border-gray-200 bg-white/80 backdrop-blur-sm hover:border-pink-400 transition-all hover:shadow-xl hover:-translate-y-1 ${
                  isVisible ? `animate-fade-in-up animation-delay-${(index % 6) * 100}` : 'opacity-0'
                }`}
              >
                <div className={`mb-4 w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-lg`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </Card>
            )
          })}
        </div>

        <div className={`mt-12 p-8 bg-gradient-to-r from-blue-50 to-pink-50 rounded-2xl border border-pink-200 shadow-lg ${
          isVisible ? 'animate-scale-in animation-delay-600' : 'opacity-0'
        }`}>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Also in Our Toolkit.
          </h3>
          <p className="text-gray-700">
            Amazon Ads, HubSpot & CRM, Conversion Tracking, Analytics Setup
          </p>
        </div>
      </div>
    </section>
  )
}
