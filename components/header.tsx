'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Menu, X, ChevronDown, Search, Share2, Zap, ShoppingCart, Globe, Settings, ArrowRight } from 'lucide-react'
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
            <DropdownMenuTrigger className="text-sm font-medium text-gray-700 hover:text-pink-600 transition flex items-center gap-1 outline-none focus:outline-none">
              Services
              <ChevronDown className="w-4 h-4 transition-transform group-data-[state=open]:rotate-180" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-80 p-2 bg-white border border-gray-200 rounded-xl shadow-xl">
              <div className="grid grid-cols-1 gap-1">
                <DropdownMenuItem asChild className="p-0">
                  <Link href="/services/paid-search" className="flex items-center gap-3 p-3 rounded-lg hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 transition-all group cursor-pointer">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Search className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">Paid Search</div>
                      <div className="text-xs text-gray-500 truncate">Google & Microsoft Ads</div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 opacity-0 group-hover:opacity-100 transition-all" />
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="p-0">
                  <Link href="/services/paid-social" className="flex items-center gap-3 p-3 rounded-lg hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 transition-all group cursor-pointer">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Share2 className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">Paid Social</div>
                      <div className="text-xs text-gray-500 truncate">Meta, TikTok, LinkedIn</div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-purple-600 opacity-0 group-hover:opacity-100 transition-all" />
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="p-0">
                  <Link href="/services/performance-creative" className="flex items-center gap-3 p-3 rounded-lg hover:bg-gradient-to-r hover:from-rose-50 hover:to-orange-50 transition-all group cursor-pointer">
                    <div className="w-10 h-10 bg-gradient-to-br from-rose-500 to-orange-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Zap className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-gray-900 group-hover:text-rose-600 transition-colors">Performance Creative</div>
                      <div className="text-xs text-gray-500 truncate">Award-winning creative</div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-rose-600 opacity-0 group-hover:opacity-100 transition-all" />
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="p-0">
                  <Link href="/services/amazon-ads" className="flex items-center gap-3 p-3 rounded-lg hover:bg-gradient-to-r hover:from-yellow-50 hover:to-orange-50 transition-all group cursor-pointer">
                    <div className="w-10 h-10 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <ShoppingCart className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-gray-900 group-hover:text-orange-600 transition-colors">Amazon Ads</div>
                      <div className="text-xs text-gray-500 truncate">Amazon growth experts</div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-orange-600 opacity-0 group-hover:opacity-100 transition-all" />
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="p-0">
                  <Link href="/services/seo" className="flex items-center gap-3 p-3 rounded-lg hover:bg-gradient-to-r hover:from-green-50 hover:to-emerald-50 transition-all group cursor-pointer">
                    <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Globe className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-gray-900 group-hover:text-green-600 transition-colors">SEO</div>
                      <div className="text-xs text-gray-500 truncate">AI-driven SEO strategy</div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-green-600 opacity-0 group-hover:opacity-100 transition-all" />
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="p-0">
                  <Link href="/services/hubspot" className="flex items-center gap-3 p-3 rounded-lg hover:bg-gradient-to-r hover:from-orange-50 hover:to-red-50 transition-all group cursor-pointer">
                    <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Settings className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-gray-900 group-hover:text-orange-600 transition-colors">HubSpot</div>
                      <div className="text-xs text-gray-500 truncate">CRM & automation</div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-orange-600 opacity-0 group-hover:opacity-100 transition-all" />
                  </Link>
                </DropdownMenuItem>
              </div>
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
              <div className="text-sm font-semibold text-gray-900 mb-3 px-2">Services</div>
              <Link href="/services/paid-search" className="flex items-center gap-3 p-3 rounded-lg hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 transition-all group" onClick={() => setIsMenuOpen(false)}>
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Search className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-gray-900 text-sm">Paid Search</div>
                  <div className="text-xs text-gray-500">Google & Microsoft Ads</div>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-400" />
              </Link>
              <Link href="/services/paid-social" className="flex items-center gap-3 p-3 rounded-lg hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 transition-all group" onClick={() => setIsMenuOpen(false)}>
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Share2 className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-gray-900 text-sm">Paid Social</div>
                  <div className="text-xs text-gray-500">Meta, TikTok, LinkedIn</div>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-400" />
              </Link>
              <Link href="/services/performance-creative" className="flex items-center gap-3 p-3 rounded-lg hover:bg-gradient-to-r hover:from-rose-50 hover:to-orange-50 transition-all group" onClick={() => setIsMenuOpen(false)}>
                <div className="w-10 h-10 bg-gradient-to-br from-rose-500 to-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-gray-900 text-sm">Performance Creative</div>
                  <div className="text-xs text-gray-500">Award-winning creative</div>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-400" />
              </Link>
              <Link href="/services/amazon-ads" className="flex items-center gap-3 p-3 rounded-lg hover:bg-gradient-to-r hover:from-yellow-50 hover:to-orange-50 transition-all group" onClick={() => setIsMenuOpen(false)}>
                <div className="w-10 h-10 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <ShoppingCart className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-gray-900 text-sm">Amazon Ads</div>
                  <div className="text-xs text-gray-500">Amazon growth experts</div>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-400" />
              </Link>
              <Link href="/services/seo" className="flex items-center gap-3 p-3 rounded-lg hover:bg-gradient-to-r hover:from-green-50 hover:to-emerald-50 transition-all group" onClick={() => setIsMenuOpen(false)}>
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Globe className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-gray-900 text-sm">SEO</div>
                  <div className="text-xs text-gray-500">AI-driven SEO strategy</div>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-400" />
              </Link>
              <Link href="/services/hubspot" className="flex items-center gap-3 p-3 rounded-lg hover:bg-gradient-to-r hover:from-orange-50 hover:to-red-50 transition-all group" onClick={() => setIsMenuOpen(false)}>
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Settings className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-gray-900 text-sm">HubSpot</div>
                  <div className="text-xs text-gray-500">CRM & automation</div>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-400" />
              </Link>
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
