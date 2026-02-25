'use client'

import { Card } from '@/components/ui/card'
import {
  Target,
  Zap,
  TrendingUp,
  ShieldCheck,
  Brain,
  Users,
} from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

const advantages = [
  {
    icon: Target,
    title: 'Audience Planning That Matters',
    description: 'We map triggers and decisions through your customer journey.',
    gradient: 'from-blue-500 to-indigo-500',
  },
  {
    icon: TrendingUp,
    title: 'Full-funnel Execution',
    description: 'Align media channels across every stage of the buyer journey.',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    icon: Zap,
    title: 'Forward Strategy',
    description: 'We show what\'s next with continuous testing, scaling, and growth.',
    gradient: 'from-yellow-500 to-orange-500',
  },
  {
    icon: ShieldCheck,
    title: 'Full Transparency',
    description: 'Earn trust through clear reporting and open communication.',
    gradient: 'from-purple-500 to-indigo-500',
  },
  {
    icon: Brain,
    title: 'AI That Works',
    description: 'Smarter allocation and sharper insights from real AI implementation.',
    gradient: 'from-cyan-500 to-blue-500',
  },
  {
    icon: Users,
    title: 'Senior Expertise Only',
    description: 'You talk directly to experienced strategists who own your success.',
    gradient: 'from-indigo-500 to-blue-500',
  },
]

const whyWeWin = [
  {
    title: 'Test & Adapt Fast',
    description: 'We\'re inside the accounts daily, watching, trying new things, killing what doesn\'t work so your growth keeps compounding.',
  },
  {
    title: 'Depth Over Breadth',
    description: 'Fewer channels, way more expertise on each one. That\'s the only way to build something that scales.',
  },
  {
    title: 'True Partnership',
    description: 'We act like an internal team because that\'s how we win. Real talk, shared wins, no vendor-client wall.',
  },
]

export default function Advantages() {
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
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-50/50 via-purple-50/30 to-blue-50/50"></div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-indigo-300/20 to-transparent rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-gradient-to-tr from-blue-300/20 to-transparent rounded-full blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left: Image */}
          <div className={`relative order-2 lg:order-1 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <div className="relative w-full h-96 rounded-3xl overflow-hidden shadow-2xl group">
              <Image
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=800&fit=crop"
                alt="Expert team collaborating on strategy"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
            </div>
            {/* Decorative element */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-purple-400/30 to-indigo-400/30 rounded-2xl blur-2xl -z-10"></div>
          </div>

          {/* Right: Content */}
          <div className={`order-1 lg:order-2 ${isVisible ? 'animate-fade-in-up animation-delay-200' : 'opacity-0'}`}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 text-pretty">
              Why Our Team Wins, Every Time.
            </h2>
            <p className="text-lg text-gray-600 mb-6 text-pretty">
              You get experienced strategists, channel pros and creative people who feel like they sit right next to your team.
            </p>
            <div className="flex items-center gap-3 text-gray-700">
              <Users className="w-6 h-6 text-[#111a42]" />
              <span className="font-medium">Senior Strategists & Channel Pros</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {advantages.map((advantage, index) => {
            const Icon = advantage.icon
            return (
              <Card
                key={index}
                className={`p-6 border-gray-200 bg-white/90 backdrop-blur-sm hover:shadow-xl hover:-translate-y-1 transition-all ${
                  isVisible ? `animate-fade-in-up animation-delay-${(index % 6) * 100}` : 'opacity-0'
                }`}
              >
                <div className={`mb-4 w-12 h-12 rounded-xl bg-gradient-to-br ${advantage.gradient} flex items-center justify-center shadow-lg`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {advantage.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {advantage.description}
                </p>
              </Card>
            )
          })}
        </div>

        <div className="border-t border-gray-200 pt-16">
          <h3 className={`text-2xl sm:text-3xl font-bold text-gray-900 mb-12 text-center ${
            isVisible ? 'animate-fade-in-up animation-delay-600' : 'opacity-0'
          }`}>
            Built to Perform. Built for Partnership.
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyWeWin.map((item, index) => (
              <div 
                key={index} 
                className={`space-y-3 ${
                  isVisible ? `animate-fade-in-up animation-delay-${700 + index * 100}` : 'opacity-0'
                }`}
              >
                <h4 className="text-xl font-bold text-gray-900">
                  {item.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
