'use client'

import { Card } from '@/components/ui/card'
import { ArrowRight, TrendingUp } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

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
    gradient: 'from-pink-500 to-rose-500',
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
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 via-purple-50/30 to-pink-50/50"></div>
      <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-blue-300/20 to-transparent rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-tr from-pink-300/20 to-transparent rounded-full blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left: Content */}
          <div className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 text-pretty">
              From Plateau to Performance.
            </h2>
            <p className="text-lg text-gray-600 mb-6 text-pretty">
              We get growth-stage brands out of the "just optimize" trap and into real scaling.
            </p>
            <div className="flex items-center gap-3 text-gray-700">
              <TrendingUp className="w-6 h-6 text-green-500" />
              <span className="font-medium">Real Growth for Growth-Stage Brands</span>
            </div>
          </div>

          {/* Right: Image */}
          <div className={`relative ${isVisible ? 'animate-slide-in-right animation-delay-200' : 'opacity-0'}`}>
            <div className="relative w-full h-96 rounded-3xl overflow-hidden shadow-2xl group">
              <Image
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop"
                alt="Business growth and analytics charts"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-green-400/30 to-emerald-400/30 rounded-2xl blur-2xl -z-10"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {caseStudies.map((study, index) => (
            <Card
              key={index}
              className={`p-8 border-gray-200 bg-white/90 backdrop-blur-sm hover:shadow-xl hover:-translate-y-2 transition-all ${
                isVisible ? `animate-scale-in animation-delay-${index * 200}` : 'opacity-0'
              }`}
            >
              <div className="mb-6">
                <div className={`text-4xl sm:text-5xl font-bold bg-gradient-to-r ${study.gradient} bg-clip-text text-transparent mb-2`}>
                  {study.metric}
                </div>
                <div className="inline-block px-3 py-1 bg-gradient-to-r from-pink-50 to-rose-50 border border-pink-200 rounded-lg text-xs font-medium text-pink-700">
                  {study.industry}
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {study.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                {study.description}
              </p>
              <button className="text-pink-600 font-medium text-sm flex items-center gap-2 hover:gap-3 transition-all group">
                View Case Study
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
