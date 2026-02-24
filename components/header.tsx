'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Menu, X, ChevronDown } from 'lucide-react'
import Link from 'next/link'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-rose-500 rounded-lg flex items-center justify-center text-white font-bold shadow-md">
            S
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent hidden sm:inline">Stackly</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <DropdownMenu>
            <DropdownMenuTrigger className="text-sm font-medium text-gray-700 hover:text-pink-600 transition flex items-center gap-1 outline-none">
              Services
              <ChevronDown className="w-4 h-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56">
              <DropdownMenuItem asChild>
                <Link href="/services/paid-search" className="cursor-pointer">
                  Paid Search
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/services/paid-social" className="cursor-pointer">
                  Paid Social
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/services/performance-creative" className="cursor-pointer">
                  Performance Creative
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/services/amazon-ads" className="cursor-pointer">
                  Amazon Ads
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/services/seo" className="cursor-pointer">
                  SEO
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/services/hubspot" className="cursor-pointer">
                  HubSpot
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="#services" className="cursor-pointer">
                  All Services
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <a href="#industries" className="text-sm font-medium text-gray-700 hover:text-pink-600 transition">
            Industries
          </a>
          <a href="#faq" className="text-sm font-medium text-gray-700 hover:text-pink-600 transition">
            FAQ
          </a>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Button
            variant="outline"
            size="sm"
            className="border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-pink-400 hover:text-pink-600"
          >
            Contact
          </Button>
          <Button size="sm" className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white border-0">Book a Call</Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white/95 backdrop-blur-md">
          <div className="px-4 py-4 space-y-4">
            <div className="space-y-2">
              <div className="text-sm font-semibold text-gray-900 mb-2">Services</div>
              <Link href="/services/paid-search" className="block pl-4 text-sm font-medium text-gray-700 hover:text-pink-600" onClick={() => setIsMenuOpen(false)}>
                Paid Search
              </Link>
              <Link href="/services/paid-social" className="block pl-4 text-sm font-medium text-gray-700 hover:text-pink-600" onClick={() => setIsMenuOpen(false)}>
                Paid Social
              </Link>
              <Link href="/services/performance-creative" className="block pl-4 text-sm font-medium text-gray-700 hover:text-pink-600" onClick={() => setIsMenuOpen(false)}>
                Performance Creative
              </Link>
              <Link href="/services/amazon-ads" className="block pl-4 text-sm font-medium text-gray-700 hover:text-pink-600" onClick={() => setIsMenuOpen(false)}>
                Amazon Ads
              </Link>
              <Link href="/services/seo" className="block pl-4 text-sm font-medium text-gray-700 hover:text-pink-600" onClick={() => setIsMenuOpen(false)}>
                SEO
              </Link>
              <Link href="/services/hubspot" className="block pl-4 text-sm font-medium text-gray-700 hover:text-pink-600" onClick={() => setIsMenuOpen(false)}>
                HubSpot
              </Link>
              <a href="#services" className="block pl-4 text-sm font-medium text-gray-700 hover:text-pink-600" onClick={() => setIsMenuOpen(false)}>
                All Services
              </a>
            </div>
            <a href="#industries" className="block text-sm font-medium text-gray-700 hover:text-pink-600" onClick={() => setIsMenuOpen(false)}>
              Industries
            </a>
            <a href="#faq" className="block text-sm font-medium text-gray-700 hover:text-pink-600" onClick={() => setIsMenuOpen(false)}>
              FAQ
            </a>
            <div className="flex flex-col gap-2 pt-2">
              <Button variant="outline" size="sm" className="w-full">
                Contact
              </Button>
              <Button size="sm" className="w-full">
                Book a Call
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
