import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-24 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-pink-50 to-purple-50"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(236,72,153,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 text-center lg:text-left">
            <div className="inline-block px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-pink-200 shadow-sm">
              <span className="text-sm font-medium text-gray-700">
                Part of Stellar • AI-Native Performance Partner
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              <span className="text-gray-900">For Brands Ready to </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-500 italic">
                Accelerate
              </span>
              <span className="text-gray-900">, Not Just Optimize.</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed text-pretty">
              We design paid media from the audience up. Built on strategy, driven by speed, and engineered to scale. We don't just run ads. We propel growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Button 
                size="lg" 
                className="text-base bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white border-0 shadow-lg hover:shadow-xl transition-all"
              >
                Book a Discovery Call
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base border-2 border-gray-300 text-gray-700 hover:bg-white hover:border-pink-400 hover:text-pink-600 bg-white/80 backdrop-blur-sm"
              >
                See Our Case Studies
              </Button>
            </div>

            <div className="pt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-gray-200">
              <div className="pt-6">
                <div className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">250+</div>
                <p className="text-sm text-gray-600 mt-1">Brands Trust Us</p>
              </div>
              <div className="pt-6">
                <div className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">8 Services</div>
                <p className="text-sm text-gray-600 mt-1">Fully Integrated</p>
              </div>
              <div className="pt-6">
                <div className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">AI Native</div>
                <p className="text-sm text-gray-600 mt-1">Strategy & Execution</p>
              </div>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="relative lg:block hidden">
            <div className="relative">
              {/* Decorative Circles */}
              <div className="absolute -top-10 -right-10 w-72 h-72 bg-gradient-to-br from-pink-400/20 to-rose-400/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
              
              {/* Main Image Container */}
              <div className="relative z-10">
                <div className="relative w-full aspect-square max-w-lg mx-auto group">
                  {/* Circular Image Frame with better styling */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-pink-100 via-rose-100 to-purple-100 p-3 shadow-2xl group-hover:shadow-3xl transition-shadow duration-300">
                    <div className="w-full h-full rounded-full overflow-hidden relative">
                      <Image
                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=800&fit=crop&crop=faces"
                        alt="Professional team working together"
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-600/10"></div>
                    </div>
                  </div>
                  
                  {/* Floating Elements - More visible */}
                  <div className="absolute top-8 -left-8 w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-2xl rotate-12 shadow-xl opacity-90 animate-float"></div>
                  <div className="absolute bottom-8 -right-8 w-20 h-20 bg-gradient-to-br from-pink-400 to-rose-400 rounded-xl -rotate-12 shadow-xl opacity-90"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Image */}
          <div className="relative lg:hidden mt-8">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-pink-100 via-rose-100 to-purple-100 p-3 shadow-xl">
                <div className="w-full h-full rounded-2xl overflow-hidden relative">
                  <Image
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=800&fit=crop&crop=faces"
                    alt="Professional team working together"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
