import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative pt-16 pb-8 sm:pt-20 sm:pb-12 lg:pt-26 lg:pb-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#111a42]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.05),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Mobile Image - Show First */}
          <div className="relative lg:hidden w-full order-first">
            <div className="relative w-full max-w-[280px] mx-auto aspect-square">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-100 via-blue-100 to-slate-100 p-2 shadow-xl">
                <div className="w-full h-full rounded-xl overflow-hidden relative">
                  <Image
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=800&fit=crop"
                    alt="Happy professional team collaborating"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-5 sm:space-y-6 text-center lg:text-left w-full">
            <h1 className="text-[28px] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.15] sm:leading-tight">
              <span className="text-white">For Brands Ready to </span>
              <br className="sm:hidden" />
              <span className="text-[#2aaaea] italic">
                Accelerate
              </span>
              <span className="text-white">, Not Just Optimize.</span>
            </h1>

            <p className="text-[15px] sm:text-base md:text-lg lg:text-xl text-white/75 sm:text-white/80 max-w-2xl mx-auto lg:mx-0 leading-relaxed px-1 sm:px-0">
              We design paid media from the audience up. Built on strategy, driven by speed, and engineered to scale. We don't just run ads. We propel growth.
            </p>

            <div className="flex justify-center lg:justify-start pt-1 sm:pt-2">
              <Button 
                size="lg" 
                className="text-[14px] sm:text-base bg-gradient-to-r from-[#2aaaea] via-[#2aaaea] to-[#2aaaea] hover:from-[#2599d4] hover:via-[#2599d4] hover:to-[#2599d4] text-white border-0 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 rounded-full px-7 py-[14px] sm:px-8 sm:py-6 font-semibold group relative overflow-hidden w-full max-w-[320px] sm:w-auto sm:max-w-none"
              >
                <span className="relative z-10">Book a Discovery Call</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </Button>
            </div>

            <div className="pt-4 sm:pt-6 lg:pt-8 grid grid-cols-3 gap-2 sm:gap-4 lg:gap-6 border-t border-white/10 sm:border-white/20">
              <div className="pt-3 sm:pt-4 lg:pt-6">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">250+</div>
                <p className="text-[11px] sm:text-xs lg:text-sm text-white/60 sm:text-white/70 mt-0.5 sm:mt-1 leading-tight">Brands Trust Us</p>
              </div>
              <div className="pt-3 sm:pt-4 lg:pt-6">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">8 Services</div>
                <p className="text-[11px] sm:text-xs lg:text-sm text-white/60 sm:text-white/70 mt-0.5 sm:mt-1 leading-tight">Fully Integrated</p>
              </div>
              <div className="pt-3 sm:pt-4 lg:pt-6">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">AI Native</div>
                <p className="text-[11px] sm:text-xs lg:text-sm text-white/60 sm:text-white/70 mt-0.5 sm:mt-1 leading-tight">Strategy & Execution</p>
              </div>
            </div>
          </div>

          {/* Desktop Image Section */}
          <div className="relative lg:block hidden order-last">
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
        </div>
      </div>
    </section>
  )
}
