'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { HelpCircle } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

const faqs = [
  {
    question: 'How do I know if we\'re the right agency for you?',
    answer: 'Book the call and we\'ll come ready. We look at your site, your competitors, your market first. So the conversation goes straight to the useful stuff. By the end we\'ll both know whether it makes sense to keep talking.',
  },
  {
    question: 'Will I have to sign a long-term contract?',
    answer: 'We love longer commitments because that\'s when the best work happens, we usually give better terms for it. But if month-to-month feels safer right now, we can figure that out too.',
  },
  {
    question: 'Who owns the assets your Performance Creative team develops for us?',
    answer: 'Every ad, landing page, video we make is yours. 100%. You walk away with everything if you ever leave.',
  },
  {
    question: 'Will I have access to my accounts?',
    answer: 'You always have full access and you own them, the ones you gave us and the ones we set up. Your business, your logins.',
  },
  {
    question: 'What is your pricing structure?',
    answer: 'Flat monthly retainer based on your monthly ad spend. We don\'t do percentage-of-spend like most places. Fees stay the same month after month unless your spend jumps or drops a lot.',
  },
  {
    question: 'What type of reporting do you provide?',
    answer: 'Custom dashboard showing the numbers that actually matter to your business, refreshes every 15 minutes, 24/7 access. But the real reporting happens in our regular calls (usually every two weeks) where we explain what\'s moving, why, and what we\'re doing about it.',
  },
  {
    question: 'What size budgets do you work with?',
    answer: 'Growth-stage companies are already spending $10k–$250k per month on paid media and are ready to push harder.',
  },
]

export default function FAQ() {
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
    <section ref={sectionRef} id="faq" className="relative py-20 sm:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-indigo-50/30 to-purple-50/30"></div>
      <div className="absolute top-10 right-10 w-96 h-96 bg-gradient-to-br from-indigo-200/20 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-gradient-to-tr from-purple-200/20 to-transparent rounded-full blur-3xl"></div>
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left: Image */}
          <div className={`relative order-2 lg:order-1 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <div className="relative w-full h-80 rounded-3xl overflow-hidden shadow-2xl group">
              <Image
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200&h=800&fit=crop"
                alt="Customer support and FAQ"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
            </div>
            {/* Decorative element */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-indigo-400/30 to-purple-400/30 rounded-2xl blur-2xl -z-10"></div>
          </div>

          {/* Right: Content */}
          <div className={`order-1 lg:order-2 ${isVisible ? 'animate-fade-in-up animation-delay-200' : 'opacity-0'}`}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center">
                <HelpCircle className="w-6 h-6 text-white" />
              </div>
              <span className="text-sm font-medium text-gray-600">Got Questions?</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 text-pretty">
              What Growth-Stage Brands Ask Us.
            </h2>
            <p className="text-lg text-gray-600">
              We've Got Answers
            </p>
          </div>
        </div>

        <div className={isVisible ? 'animate-fade-in animation-delay-200' : 'opacity-0'}>
          <Accordion type="single" collapsible className="w-full space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-gray-200 rounded-lg px-6 py-2 bg-white/80 backdrop-blur-sm hover:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-lg font-semibold text-gray-900 hover:text-[#2aaaea] transition-colors py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
