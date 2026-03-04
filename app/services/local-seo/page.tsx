import Header from '@/components/header'
import Footer from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Check, ArrowRight, MapPin, Search, FileText, Star, TrendingUp, Zap, Shield, Users, Globe, Target, BarChart3 } from 'lucide-react'

export default function LocalSEOPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-[#111a42]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.05),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
              Why Local SEO Matters
            </h1>
            <p className="text-xl sm:text-2xl text-white/80">
              Someone in your area searches "best tacos near me" or "plumber near Johar Town" if you don't want to be invisible on page two. Local SEO puts you on Maps, in the three-pack, in the organic spots right where those local people are looking. Real point: turn those searches into people actually walking in or calling you.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Discovery & Local Strategy */}
            <Card className="p-8 bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all">
              <div className="w-16 h-16 mb-6 bg-gradient-to-br from-[#2aaaea] to-cyan-400 rounded-xl flex items-center justify-center">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Discovery & Local Strategy</h3>
              <p className="text-gray-600">We sit down and really get your business, who comes through the door, which parts of Lahore or nearby you care about most. Then we make a straightforward plan that puts your effort where the customers actually are.</p>
            </Card>

            {/* Local Profile Optimization */}
            <Card className="p-8 bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all">
              <div className="w-16 h-16 mb-6 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Local Profile Optimization</h3>
              <p className="text-gray-600">Your Google Business Profile is your shopfront 24/7 now. We fix it up, make every bit accurate, pick smart categories, list services properly, post updates so it ranks better and looks like a place people want to visit.</p>
            </Card>

            {/* Local Citations & Consistency */}
            <Card className="p-8 bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all">
              <div className="w-16 h-16 mb-6 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Local Citations & Consistency</h3>
              <p className="text-gray-600">We go find every single place online that lists your business and force the name, address, phone to match exactly everywhere. That one thing still moves the needle a lot for local rankings.</p>
            </Card>

            {/* Review & Reputation Growth */}
            <Card className="p-8 bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all">
              <div className="w-16 h-16 mb-6 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Review & Reputation Growth</h3>
              <p className="text-gray-600">Happy customers leave good reviews, we help you collect more. We also show you easy, genuine ways to reply so you look caring and professional.</p>
            </Card>

            {/* Ongoing Tracking & Growth */}
            <Card className="p-8 bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all">
              <div className="w-16 h-16 mb-6 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Ongoing Tracking & Growth</h3>
              <p className="text-gray-600">We watch your position in the map pack, how many calls come from Google, the numbers that count. Every month we adjust a little to keep climbing.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* How Local SEO Fits Section */}
      <section className="relative py-16 sm:py-20 bg-gradient-to-b from-white via-blue-50/30 to-indigo-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-[#2aaaea] to-cyan-400 rounded-xl flex items-center justify-center">
                  <Globe className="w-10 h-10 text-white" />
                </div>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                How Local SEO Fits Into the Bigger Picture
              </h2>
              <p className="text-lg text-gray-600">
                Local SEO connects your website to people who live or work close enough to actually come see you. More walk-ins, more service calls, more locals picking you because you feel familiar and trustworthy. Add it to normal SEO or some ads and you've got a proper way to bring in business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Common Questions About Local SEO
            </h2>
          </div>
          
          <div className="space-y-4">
            <Card className="p-6 bg-white/90 backdrop-blur-sm hover:shadow-md transition-all">
              <h3 className="text-lg font-bold text-gray-900 mb-2">How long does it take to see results from Local SEO?</h3>
              <p className="text-gray-600">Most businesses start feeling it in 3–6 months. Depends how competitive your area is, how bad your setup was before, how clean everything is. Stick with it and it keeps getting better.</p>
            </Card>
            
            <Card className="p-6 bg-white/90 backdrop-blur-sm hover:shadow-md transition-all">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Do I really need Local SEO if I already have a website?</h3>
              <p className="text-gray-600">Yes boss, 100%. A nice website is great but if you skip local work nobody searching "near me" or "in Lahore" will ever find you.</p>
            </Card>
            
            <Card className="p-6 bg-white/90 backdrop-blur-sm hover:shadow-md transition-all">
              <h3 className="text-lg font-bold text-gray-900 mb-2">What's the difference between SEO and Local SEO?</h3>
              <p className="text-gray-600">Regular SEO goes after the whole country or world. Local SEO is only about your city / area so you dominate Maps, the three-pack and "near me" searches.</p>
            </Card>
            
            <Card className="p-6 bg-white/90 backdrop-blur-sm hover:shadow-md transition-all">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Can you help with my Google Business Profile (Google My Business)?</h3>
              <p className="text-gray-600">Of course yaar. We make it perfect, good photos, correct details, right categories, fresh posts, proper review replies.</p>
            </Card>
            
            <Card className="p-6 bg-white/90 backdrop-blur-sm hover:shadow-md transition-all">
              <h3 className="text-lg font-bold text-gray-900 mb-2">What types of businesses benefit most from Local SEO?</h3>
              <p className="text-gray-600">Anyone who gets customers from nearby: restaurants, clinics, plumbers, gyms, boutiques, repair shops, they all jump when local is done right.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Free Audit CTA */}
      <section className="relative py-16 sm:py-20 bg-[#111a42]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Get A Free Website Audit.
          </h2>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-[#2aaaea] via-[#2aaaea] to-[#2aaaea] hover:from-[#2599d4] hover:via-[#2599d4] hover:to-[#2599d4] text-white border-0 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 rounded-full px-8 py-6 font-semibold"
          >
            Yes Please
          </Button>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Want More? Fine, Twist Our Arm.
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="p-8 text-center border-2 border-blue-200 hover:border-[#2aaaea] transition-colors">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                <Check className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">No Setup Fees</h3>
              <p className="text-gray-600">Kick off your growth today with no upfront fees.</p>
            </Card>
            
            <Card className="p-8 text-center border-2 border-blue-200 hover:border-[#2aaaea] transition-colors">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">You Own Everything</h3>
              <p className="text-gray-600">Every step, every asset, is completely under your control.</p>
            </Card>
            
            <Card className="p-8 text-center border-2 border-blue-200 hover:border-[#2aaaea] transition-colors">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[#2aaaea] to-cyan-400 rounded-full flex items-center justify-center">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Dedicated Team</h3>
              <p className="text-gray-600">A dedicated team focused entirely on your success.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="relative py-16 sm:py-20 bg-gradient-to-b from-white via-blue-50/30 to-indigo-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              We Want Results As Fast As You Do.
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all">
              <div className="text-5xl font-bold bg-gradient-to-r from-[#2aaaea] to-cyan-400 bg-clip-text text-transparent mb-2">
                0-3
              </div>
              <div className="text-xl font-semibold text-gray-900 mb-4">Months</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Gearing Up</h3>
              <p className="text-gray-600">We kick things off with in-depth research, spotting quick wins, and optimizing your site.</p>
            </Card>
            
            <Card className="p-8 bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all">
              <div className="text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-2">
                4-8
              </div>
              <div className="text-xl font-semibold text-gray-900 mb-4">Months</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Gaining Momentum</h3>
              <p className="text-gray-600">Optimizing every step, keeping your site's performance and long-term growth front and center.</p>
            </Card>
            
            <Card className="p-8 bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all">
              <div className="text-5xl font-bold bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent mb-2">
                9-12
              </div>
              <div className="text-xl font-semibold text-gray-900 mb-4">Months</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Endless Possibilities</h3>
              <p className="text-gray-600">Pushing boundaries with ongoing optimization and scaling for maximum results.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Business Types */}
      <section className="relative py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Bet You We're A Perfect Match.
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Whether you're growing your SMB or leading an enterprise, our client stories highlight a spectrum of success. Your brand could be the next success story.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-8 text-center border-2 border-blue-200 hover:border-[#2aaaea] transition-colors">
              <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center">
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Small + Midsize Business</h3>
              <p className="text-gray-600">Perfect for growing businesses ready to scale</p>
            </Card>
            
            <Card className="p-8 text-center border-2 border-blue-200 hover:border-[#2aaaea] transition-colors">
              <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-[#2aaaea] to-cyan-400 rounded-2xl flex items-center justify-center">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Enterprise Business</h3>
              <p className="text-gray-600">Enterprise solutions for large-scale operations</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="relative py-16 sm:py-20 bg-gradient-to-b from-white via-blue-50/30 to-indigo-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Come On, Take It To The Next Level.
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Stack our services your way and let your business be the benchmark others wish they could reach.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all group cursor-pointer">
              <div className="w-16 h-16 mb-6 bg-gradient-to-br from-[#2aaaea] to-cyan-400 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <Search className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Paid Search</h3>
              <p className="text-gray-600 mb-4">Elevate your online presence with cutting-edge techniques.</p>
              <div className="flex items-center text-[#2aaaea] font-medium">
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </Card>
            
            <Card className="p-8 bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all group cursor-pointer">
              <div className="w-16 h-16 mb-6 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Paid Social</h3>
              <p className="text-gray-600 mb-4">Build deeper connections and drive engagement with social.</p>
              <div className="flex items-center text-[#2aaaea] font-medium">
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </Card>
            
            <Card className="p-8 bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all group cursor-pointer">
              <div className="w-16 h-16 mb-6 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Performance Creative</h3>
              <p className="text-gray-600 mb-4">Our in-house creative team isn't just good, they're award-winning good.</p>
              <div className="flex items-center text-[#2aaaea] font-medium">
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-16 sm:py-20 bg-[#111a42]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            See If We're the Right Team for You.
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            No pressure. Just a real conversation about your goals, our approach, and whether it makes sense to work together.
          </p>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-[#2aaaea] via-[#2aaaea] to-[#2aaaea] hover:from-[#2599d4] hover:via-[#2599d4] hover:to-[#2599d4] text-white border-0 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 rounded-full px-8 py-6 font-semibold"
          >
            Book a Call
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
