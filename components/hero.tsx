import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-26 lg:pb-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#111a42]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.05),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 text-center lg:text-left">
           

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              <span className="text-white">For Brands Ready to </span>
              <span className="text-[#2aaaea] italic">
                Accelerate
              </span>
              <span className="text-white">, Not Just Optimize.</span>
            </h1>

            <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto lg:mx-0 leading-relaxed text-pretty">
              We design paid media from the audience up. Built on strategy, driven by speed, and engineered to scale. We don't just run ads. We propel growth.
            </p>

            <div className="flex justify-center lg:justify-start pt-4">
              <Button 
                size="lg" 
                className="text-base bg-gradient-to-r from-[#2aaaea] via-[#2aaaea] to-[#2aaaea] hover:from-[#2599d4] hover:via-[#2599d4] hover:to-[#2599d4] text-white border-0 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 rounded-full px-8 py-6 font-semibold group relative overflow-hidden"
              >
                <span className="relative z-10">Book a Discovery Call</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </Button>
            </div>

            <div className="pt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-white/20">
              <div className="pt-6">
                <div className="text-3xl font-bold text-white">250+</div>
                <p className="text-sm text-white/70 mt-1">Brands Trust Us</p>
              </div>
              <div className="pt-6">
                <div className="text-3xl font-bold text-white">8 Services</div>
                <p className="text-sm text-white/70 mt-1">Fully Integrated</p>
              </div>
              <div className="pt-6">
                <div className="text-3xl font-bold text-white">AI Native</div>
                <p className="text-sm text-white/70 mt-1">Strategy & Execution</p>
              </div>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="relative lg:block hidden">
            <div className="relative">
              {/* Decorative Circles */}
              <div className="absolute -top-10 -right-10 w-72 h-72 bg-[#111a42]/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl"></div>
              
              {/* Main Image Container */}
              <div className="relative z-10">
                <div className="relative w-full aspect-square max-w-lg mx-auto group">
                  {/* Circular Image Frame with better styling */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-100 via-blue-100 to-slate-100 p-3 shadow-2xl group-hover:shadow-3xl transition-shadow duration-300">
                    <div className="w-full h-full rounded-full overflow-hidden relative">
                      <Image
                        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=800&fit=crop"
                        alt="Happy professional team collaborating"
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-600/10"></div>
                    </div>
                  </div>
                  
                  {/* Floating Elements - More visible */}
                  <div className="absolute top-8 -left-8 w-24 h-24 bg-gradient-to-br from-[#2aaaea] to-cyan-400 rounded-2xl rotate-12 shadow-xl opacity-90 animate-float"></div>
                  <div className="absolute bottom-8 -right-8 w-20 h-20 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-xl -rotate-12 shadow-xl opacity-90 animate-float" style={{ animationDelay: '0.3s' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Image */}
          <div className="relative lg:hidden mt-8">
            <div className="relative w-full aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-100 via-blue-100 to-slate-100 p-3 shadow-xl">
                <div className="w-full h-full rounded-2xl overflow-hidden relative">
                  <Image
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=800&fit=crop"
                    alt="Happy professional team collaborating"
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
