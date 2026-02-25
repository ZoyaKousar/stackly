'use client'

import { Button } from '@/components/ui/button'
import { Phone } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

export default function CTA() {
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
    <section ref={sectionRef} className="relative py-20 sm:py-32 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-[#111a42]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.1),transparent_50%)]"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        {/* Image/Icon Section */}
        <div className={`flex items-center justify-center mb-8 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}>
          <div className="w-32 h-32 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-2xl animate-float">
            <Phone className="w-16 h-16 text-[#2aaaea]" />
          </div>
        </div>

        <div className={isVisible ? 'animate-fade-in-up' : 'opacity-0'}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 text-pretty">
            See If We're the Right Team for You.
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto text-pretty mb-8">
            No hard sell. Just an honest chat about where you want to go, how we work, and whether it feels like a match.
          </p>
        </div>

        <div className={`flex justify-center pt-4 ${
          isVisible ? 'animate-fade-in-up animation-delay-300' : 'opacity-0'
        }`}>
          <Button
            size="lg"
            className="text-base bg-gradient-to-r from-[#2aaaea] via-[#2aaaea] to-[#2aaaea] hover:from-[#2599d4] hover:via-[#2599d4] hover:to-[#2599d4] text-white border-0 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 rounded-full px-8 py-6 font-semibold group relative overflow-hidden"
          >
            <span className="relative z-10">Book a Call</span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </Button>
        </div>
      </div>
    </section>
  )
}
