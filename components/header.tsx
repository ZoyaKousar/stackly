'use client'

import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
} from '@/components/ui/dropdown-menu'
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from '@/components/ui/hover-card'

const serviceItems = [
  { href: '/services/paid-search', label: 'Paid Search', sub: 'Google & Microsoft Ads' },
  { href: '/services/paid-social', label: 'Paid Social', sub: 'Meta, TikTok, LinkedIn' },
  { href: '/services/performance-creative', label: 'Performance Creative', sub: 'Award-winning creative' },
  { href: '/services/amazon-ads', label: 'Amazon Ads', sub: 'Amazon growth experts' },
  { href: '/services/hubspot', label: 'HubSpot', sub: 'CRM & automation' },
]

const seoSubItems = [
  { href: '/services/aio', label: 'AIO', sub: 'AI Search Optimization' },
  { href: '/services/local-seo', label: 'Local SEO', sub: 'Local search optimization' },
  { href: '/services/multi-location-seo', label: 'Multi Location SEO', sub: 'Multi-location strategy' },
  { href: '/services/ecommerce-seo', label: 'Ecommerce SEO', sub: 'SEO that drives sales' },
  { href: '/services/youtube-video-seo', label: 'YouTube & Video SEO', sub: 'Video SEO that works' },
  { href: '/services/national-seo', label: 'National SEO', sub: 'Nationwide SEO strategy' },
  { href: '/services/enterprise-seo', label: 'Enterprise SEO', sub: 'Enterprise-scale SEO' },
  { href: '/services/international-seo', label: 'International SEO', sub: 'Global SEO strategy' },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const servicesTimeout = useRef<ReturnType<typeof setTimeout> | null>(null)
  const router = useRouter()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const openServices = () => {
    if (servicesTimeout.current) clearTimeout(servicesTimeout.current)
    setServicesOpen(true)
  }

  const closeServices = () => {
    servicesTimeout.current = setTimeout(() => setServicesOpen(false), 100)
  }

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#0d1533]/95 backdrop-blur-xl shadow-lg shadow-black/30 border-b border-white/10'
          : 'bg-[#111a42]/90 backdrop-blur-md border-b border-white/10'
      }`}
    >
      {/* Bottom glow line */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#2aaaea]/40 to-transparent" />

      {/* Radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(42,170,234,0.06),transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(59,130,246,0.06),transparent_60%)] pointer-events-none" />

      <nav className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="relative w-9 h-9 rounded-xl bg-[#2aaaea] flex items-center justify-center text-white font-extrabold text-lg shadow-lg shadow-[#2aaaea]/30 group-hover:shadow-[#2aaaea]/60 group-hover:scale-105 transition-all duration-300">
            <span className="relative z-10">S</span>
          </div>
          <span className="text-xl font-extrabold text-white hidden sm:inline tracking-tight group-hover:text-[#2aaaea] transition-colors duration-300">
            Stackly
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-1">

          {/* Services — hover controlled */}
          <div
            className="relative"
            onMouseEnter={openServices}
            onMouseLeave={closeServices}
          >
            <DropdownMenu open={servicesOpen} onOpenChange={setServicesOpen}>
              <DropdownMenuTrigger
                className="group flex items-center gap-1 px-4 py-2 rounded-xl text-sm font-semibold text-white/80 hover:text-white hover:bg-white/10 transition-all duration-200 outline-none focus:outline-none"
                onMouseEnter={openServices}
              >
                Services
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 text-white/50 group-hover:text-white ${servicesOpen ? 'rotate-180' : ''}`}
                />
              </DropdownMenuTrigger>

              <DropdownMenuContent
                align="start"
                onMouseEnter={openServices}
                onMouseLeave={closeServices}
                style={{ backgroundColor: '#0d1230' }}
                className="w-[300px] p-3 border border-white/10 rounded-2xl shadow-2xl shadow-black/60 mt-1"
              >
                <div className="mb-2 px-2 py-1">
                  <p className="text-[10px] font-bold text-white/30 uppercase tracking-widest">Our Services</p>
                </div>
                <div className="grid grid-cols-1 gap-0.5">
                  {serviceItems.map((item) => (
                    <DropdownMenuItem key={item.href} asChild className="p-0 focus:bg-transparent data-[highlighted]:bg-transparent">
                      <Link
                        href={item.href}
                        className="flex items-center justify-between p-2.5 rounded-xl hover:bg-white/[0.08] transition-all duration-200 group cursor-pointer"
                        onClick={() => setServicesOpen(false)}
                      >
                        <div>
                          <div className="font-semibold text-sm text-white/90 group-hover:text-[#2aaaea] transition-colors">{item.label}</div>
                          <div className="text-xs text-white/40">{item.sub}</div>
                        </div>
                        <ArrowRight className="w-3.5 h-3.5 text-[#2aaaea] opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-200 flex-shrink-0" />
                      </Link>
                    </DropdownMenuItem>
                  ))}

                  {/* SEO Sub-menu */}
                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger
                      className="p-0 focus:bg-transparent data-[state=open]:bg-transparent data-[highlighted]:bg-transparent"
                      onClick={(e) => { e.preventDefault(); router.push('/services/seo'); setServicesOpen(false) }}
                    >
                      <div className="flex items-center justify-between p-2.5 rounded-xl hover:bg-white/[0.08] transition-all duration-200 group cursor-pointer w-full">
                        <div>
                          <div className="font-semibold text-sm text-white/90 group-hover:text-[#2aaaea] transition-colors">SEO</div>
                          <div className="text-xs text-white/40">AI-driven SEO strategy</div>
                        </div>
                      </div>
                    </DropdownMenuSubTrigger>
                    <DropdownMenuSubContent
                      style={{ backgroundColor: '#0d1230' }}
                      className="w-64 p-3 border border-white/10 rounded-2xl shadow-2xl shadow-black/60 ml-2"
                    >
                      <div className="mb-2 px-2 py-1">
                        <p className="text-[10px] font-bold text-white/30 uppercase tracking-widest">SEO Specialties</p>
                      </div>
                      <div className="grid grid-cols-1 gap-0.5">
                        {seoSubItems.map((item) => (
                          <DropdownMenuItem key={item.href} asChild className="p-0 focus:bg-transparent data-[highlighted]:bg-transparent">
                            <Link
                              href={item.href}
                              className="flex items-center justify-between p-2.5 rounded-xl hover:bg-white/[0.08] transition-all duration-200 group cursor-pointer"
                              onClick={() => setServicesOpen(false)}
                            >
                              <div>
                                <div className="font-semibold text-sm text-white/90 group-hover:text-[#2aaaea] transition-colors">{item.label}</div>
                                <div className="text-xs text-white/40">{item.sub}</div>
                              </div>
                              <ArrowRight className="w-3.5 h-3.5 text-[#2aaaea] opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-200 flex-shrink-0" />
                            </Link>
                          </DropdownMenuItem>
                        ))}
                      </div>
                    </DropdownMenuSubContent>
                  </DropdownMenuSub>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Who We Are */}
          <HoverCard openDelay={150} closeDelay={100}>
            <HoverCardTrigger asChild>
              <button className="group flex items-center gap-1 px-4 py-2 rounded-xl text-sm font-semibold text-white/80 hover:text-white hover:bg-white/10 transition-all duration-200 outline-none focus:outline-none">
                Who We Are
                <ChevronDown className="w-4 h-4 transition-transform duration-300 text-white/50 group-hover:text-white" />
              </button>
            </HoverCardTrigger>
            <HoverCardContent
              align="start"
              style={{ backgroundColor: '#0d1230' }}
              className="w-52 p-3 border border-white/10 rounded-2xl shadow-2xl shadow-black/60 mt-1"
            >
              <div className="mb-2 px-2 py-1">
                <p className="text-[10px] font-bold text-white/30 uppercase tracking-widest">Company</p>
              </div>
              <div className="space-y-0.5">
                <Link href="/about-us" className="flex items-center justify-between p-2.5 rounded-xl hover:bg-white/[0.08] transition-all duration-200 group cursor-pointer">
                  <div>
                    <div className="font-semibold text-sm text-white/90 group-hover:text-[#2aaaea] transition-colors">About Us</div>
                    <div className="text-xs text-white/40">Meet our team</div>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-[#2aaaea] opacity-0 group-hover:opacity-100 transition-all duration-200 flex-shrink-0" />
                </Link>
                <Link href="/careers" className="flex items-center justify-between p-2.5 rounded-xl hover:bg-white/[0.08] transition-all duration-200 group cursor-pointer">
                  <div>
                    <div className="font-semibold text-sm text-white/90 group-hover:text-[#2aaaea] transition-colors">Careers</div>
                    <div className="text-xs text-white/40">Join our team</div>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-[#2aaaea] opacity-0 group-hover:opacity-100 transition-all duration-200 flex-shrink-0" />
                </Link>
              </div>
            </HoverCardContent>
          </HoverCard>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Button
            size="sm"
            className="relative overflow-hidden bg-[#2aaaea] hover:bg-[#2599d4] text-white border-0 rounded-xl px-5 py-2 font-semibold shadow-lg shadow-[#2aaaea]/25 hover:shadow-[#2aaaea]/50 hover:shadow-xl transition-all duration-300 group"
          >
            Book a Call
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-xl hover:bg-white/10 transition-colors duration-200 text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-white/10 bg-[#0d1230]">
          <div className="px-4 py-5 space-y-5 max-h-[80vh] overflow-y-auto">

            {/* Services */}
            <div>
              <p className="text-[10px] font-bold text-white/30 uppercase tracking-widest mb-3 px-1">Services</p>
              <div className="space-y-0.5">
                {serviceItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-center justify-between p-3 rounded-xl hover:bg-white/[0.08] transition-all duration-200 group"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <div>
                      <div className="font-semibold text-white/90 text-sm group-hover:text-[#2aaaea] transition-colors">{item.label}</div>
                      <div className="text-xs text-white/40">{item.sub}</div>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-[#2aaaea] opacity-0 group-hover:opacity-100 transition-all duration-200 flex-shrink-0" />
                  </Link>
                ))}

                {/* SEO */}
                <Link href="/services/seo" className="flex items-center justify-between p-3 rounded-xl hover:bg-white/[0.08] transition-all duration-200 group" onClick={() => setIsMenuOpen(false)}>
                  <div>
                    <div className="font-semibold text-white/90 text-sm group-hover:text-[#2aaaea] transition-colors">SEO</div>
                    <div className="text-xs text-white/40">AI-driven SEO strategy</div>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-[#2aaaea] opacity-0 group-hover:opacity-100 transition-all duration-200 flex-shrink-0" />
                </Link>

                {/* SEO Sub-items */}
                <div className="ml-4 space-y-0.5 border-l border-white/10 pl-3">
                  {seoSubItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="flex items-center justify-between p-2.5 rounded-xl hover:bg-white/[0.08] transition-all duration-200 group"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <div>
                        <div className="font-semibold text-white/90 text-sm group-hover:text-[#2aaaea] transition-colors">{item.label}</div>
                        <div className="text-xs text-white/40">{item.sub}</div>
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 text-[#2aaaea] opacity-0 group-hover:opacity-100 transition-all duration-200 flex-shrink-0" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Who We Are */}
            <div>
              <p className="text-[10px] font-bold text-white/30 uppercase tracking-widest mb-3 px-1">Company</p>
              <div className="space-y-0.5">
                <Link href="/about-us" className="flex items-center justify-between p-3 rounded-xl hover:bg-white/[0.08] transition-all duration-200 group" onClick={() => setIsMenuOpen(false)}>
                  <div>
                    <div className="font-semibold text-white/90 text-sm group-hover:text-[#2aaaea] transition-colors">About Us</div>
                    <div className="text-xs text-white/40">Learn more about our team</div>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-[#2aaaea] opacity-0 group-hover:opacity-100 transition-all duration-200 flex-shrink-0" />
                </Link>
                <Link href="/careers" className="flex items-center justify-between p-3 rounded-xl hover:bg-white/[0.08] transition-all duration-200 group" onClick={() => setIsMenuOpen(false)}>
                  <div>
                    <div className="font-semibold text-white/90 text-sm group-hover:text-[#2aaaea] transition-colors">Careers</div>
                    <div className="text-xs text-white/40">Join our team</div>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-[#2aaaea] opacity-0 group-hover:opacity-100 transition-all duration-200 flex-shrink-0" />
                </Link>
              </div>
            </div>

            <Button
              size="sm"
              className="w-full bg-[#2aaaea] hover:bg-[#2599d4] text-white border-0 rounded-xl font-semibold shadow-lg shadow-[#2aaaea]/25"
              onClick={() => setIsMenuOpen(false)}
            >
              Book a Call
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
