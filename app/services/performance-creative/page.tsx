import Header from '@/components/header'
import Footer from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Check, ArrowRight, Search, TrendingUp, BarChart3, Settings, Users, Calendar, Shield, Zap, Target, FileText, Heart, Share2, Video, Sparkles, Award, Image as ImageIcon, Layout, Palette, BarChart } from 'lucide-react'
import Link from 'next/link'

export default function PerformanceCreativePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-pink-50 to-purple-50"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(236,72,153,0.1),transparent_50%)]"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight">
              Performance Creative.
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600">
              Where creativity actually meets real numbers. Ready to jump in?
            </p>
          </div>
        </div>
      </section>

      {/* Award-Winning Section */}
      <section className="relative py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block mb-6">
              <div className="w-24 h-24 mx-auto bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center">
                <Award className="w-12 h-12 text-white" />
              </div>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Award-Winning In-House Performance Creative
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our team isn't just good – they've won awards. Fresh designs, real stories, results that stand out. Let's make your stuff look and perform like a winner too.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative py-16 sm:py-20 bg-gradient-to-b from-white via-blue-50/30 to-pink-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Advertising Assets */}
            <Card className="p-8 bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all">
              <div className="w-16 h-16 mb-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                <ImageIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Advertising Assets</h3>
              <p className="text-gray-600 mb-4">Great creativity is what makes digital marketing actually work. We build visuals and animations made for paid search and social that get noticed and turn into sales.</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-pink-500" /> PMAX (Performance Max) Image Assets</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-pink-500" /> Custom Display Ads</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-pink-500" /> Responsive Display Ads (RDA) Images</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-pink-500" /> Paid Social Image Creatives + Carousel Ads</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-pink-500" /> Feed & Story Ad Creative</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-pink-500" /> Short-Form + UGC Video Editing</li>
              </ul>
            </Card>

            {/* Landing Pages */}
            <Card className="p-8 bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all">
              <div className="w-16 h-16 mb-6 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                <Layout className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Landing Pages</h3>
              <p className="text-gray-600 mb-4">This is where interest turns into money. We create, host and tune mobile-first landing pages that look sharp and convert on any device.</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-pink-500" /> Custom Mobile-Responsive Landing Page Design</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-pink-500" /> Hosting via Unbounce</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-pink-500" /> A/B Testing & Optimization</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-pink-500" /> Sharing Detailed A/B Test Reports</li>
              </ul>
            </Card>

            {/* Strategy + Consultation */}
            <Card className="p-8 bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all">
              <div className="w-16 h-16 mb-6 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Strategy + Consultation</h3>
              <p className="text-gray-600 mb-4">Every brand has its own story. We help you tell it better, audits, strategy sessions, always staying inside your brand rules so your online look feels consistent and strong.</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-pink-500" /> Website + Landing Page Audits</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-pink-500" /> Creative Consultation & Strategy</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-pink-500" /> Strictly Within Your Brand Guidelines</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-pink-500" /> Dedicated Designer Assigned to Your Account</li>
              </ul>
            </Card>

            {/* Partnership Approach */}
            <Card className="p-8 bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all">
              <div className="w-16 h-16 mb-6 bg-gradient-to-br from-rose-500 to-pink-500 rounded-xl flex items-center justify-center">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Partnership Approach</h3>
              <p className="text-gray-600 mb-4">We're not just sending files, we're working together. Constant back-and-forth, a designer who knows your account inside out, your vision actually happening.</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-pink-500" /> Dedicated Designer on Your Account</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-pink-500" /> Ongoing Client Communication</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-pink-500" /> Creative Work Aligned with Brand Guidelines</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-pink-500" /> Support Across All Digital Platforms</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-pink-500" /> Real-Time Creative Feedback Tool</li>
              </ul>
            </Card>

            {/* Performance & Analytics */}
            <Card className="p-8 bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all">
              <div className="w-16 h-16 mb-6 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center">
                <BarChart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Performance & Analytics</h3>
              <p className="text-gray-600 mb-4">We track how the creative actually performs so we can keep making it better and improve your return.</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-pink-500" /> Creative Performance Analysis & Reporting</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-pink-500" /> A/B Testing Results & Insights</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-pink-500" /> Landing Page Conversion Metrics</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-pink-500" /> Ad Creative Engagement Rates</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-pink-500" /> Social Content Performance Analysis</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-pink-500" /> Tailored Optimization Recommendations</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Free Audit CTA */}
      <section className="relative py-16 sm:py-20 bg-gradient-to-br from-pink-500 via-rose-500 to-orange-500">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Get Your Free Landing Page Audit
          </h2>
          <Button 
            size="lg" 
            className="bg-white text-pink-600 hover:bg-gray-100 text-lg px-8 py-6 shadow-xl hover:shadow-2xl transition-all"
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
              Want More? Go Ahead – Twist Our Arm.
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="p-8 text-center border-2 border-pink-200 hover:border-pink-400 transition-colors">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                <Check className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">No Setup Fees</h3>
              <p className="text-gray-600">Start with zero upfront cost.</p>
            </Card>
            
            <Card className="p-8 text-center border-2 border-pink-200 hover:border-pink-400 transition-colors">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">You Own Everything</h3>
              <p className="text-gray-600">Every creative and asset is yours 100%.</p>
            </Card>
            
            <Card className="p-8 text-center border-2 border-pink-200 hover:border-pink-400 transition-colors">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-pink-500 to-rose-500 rounded-full flex items-center justify-center">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Dedicated Team</h3>
              <p className="text-gray-600">Personal attention on your success.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="relative py-16 sm:py-20 bg-gradient-to-b from-white via-blue-50/30 to-pink-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              We're Obsessed With Fast Results Same as you.
            </h2>
            <p className="text-lg text-gray-600">Timeline of Results</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all">
              <div className="text-5xl font-bold bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent mb-2">
                0-3
              </div>
              <div className="text-xl font-semibold text-gray-900 mb-4">Months</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Revving Up</h3>
              <p className="text-gray-600">Deep dive, quick improvements, creative refresh. Full speed after onboarding.</p>
            </Card>
            
            <Card className="p-8 bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all">
              <div className="text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-2">
                4-8
              </div>
              <div className="text-xl font-semibold text-gray-900 mb-4">Months</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Hitting Our Stride</h3>
              <p className="text-gray-600">Finding the sweet spot, steady gains, building momentum.</p>
            </Card>
            
            <Card className="p-8 bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all">
              <div className="text-5xl font-bold bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent mb-2">
                9-12
              </div>
              <div className="text-xl font-semibold text-gray-900 mb-4">Months</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">No Brakes, Just Breakthroughs</h3>
              <p className="text-gray-600">Constant testing, bigger scales, new highs.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="relative py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Explore Our Work
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Real wins across different industries – data + guts = results.
            </p>
          </div>
          
          <Card className="p-8 md:p-12 bg-gradient-to-br from-pink-50 to-blue-50 border-2 border-pink-200">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-block px-4 py-2 bg-white rounded-full mb-6">
                  <span className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">Page Publishing</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">About the Brand</h3>
                <p className="text-gray-600 mb-6">US book publishers wanted stronger leads from Google and Microsoft Ads in multiple areas.</p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">The Challenge</h4>
                    <p className="text-gray-600">Conversions were low and costs high, especially on phones.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">The Solution</h4>
                    <p className="text-gray-600">Tested landing page forms and switched to embedded style for better conversions.</p>
                  </div>
                  <div className="pt-4 border-t border-pink-200">
                    <h4 className="font-semibold text-gray-900 mb-2">Business Impact</h4>
                    <div className="grid grid-cols-1 gap-4">
                      <div>
                        <div className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">27%</div>
                        <p className="text-sm text-gray-600">jump in landing page conversions</p>
                      </div>
                      <p className="text-gray-600 mt-2">Costs per conversion dropped a lot.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative h-96 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400 via-pink-400 to-rose-400"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white p-8">
                    <Layout className="w-24 h-24 mx-auto mb-4 opacity-50" />
                    <p className="text-lg font-semibold">Case Study Visual</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Other Services */}
      <section className="relative py-16 sm:py-20 bg-gradient-to-b from-white via-blue-50/30 to-pink-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Ready to Level Up?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Stack a few services and watch your competitors struggle to keep up.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all group cursor-pointer">
              <div className="w-16 h-16 mb-6 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <Search className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Paid Search</h3>
              <p className="text-gray-600 mb-4">Super targeted growth</p>
              <Link href="/services/paid-search" className="flex items-center text-pink-600 font-medium">
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Card>
            
            <Card className="p-8 bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all group cursor-pointer">
              <div className="w-16 h-16 mb-6 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <Share2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Paid Social</h3>
              <p className="text-gray-600 mb-4">Deeper connections and engagement</p>
              <Link href="/services/paid-social" className="flex items-center text-pink-600 font-medium">
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Card>
            
            <Card className="p-8 bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all group cursor-pointer">
              <div className="w-16 h-16 mb-6 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Amazon</h3>
              <p className="text-gray-600 mb-4">Expert care to max out potential</p>
              <div className="flex items-center text-pink-600 font-medium">
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 sm:py-20 bg-gradient-to-br from-pink-500 via-rose-500 to-orange-500">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Let's Talk About Your Goals.
          </h2>
          <Button 
            size="lg" 
            className="bg-white text-pink-600 hover:bg-gray-100 text-lg px-8 py-6 shadow-xl hover:shadow-2xl transition-all"
          >
            BOOK A CALL
          </Button>
        </div>
      </section>

      {/* Business Types */}
      <section className="relative py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Bet We're a Perfect Match
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Small businesses grow fast or big companies – we've done it before. Your story could be next.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-8 text-center border-2 border-pink-200 hover:border-pink-400 transition-colors">
              <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center">
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Small + Midsize Business</h3>
              <p className="text-gray-600">Perfect for growing businesses ready to scale</p>
            </Card>
            
            <Card className="p-8 text-center border-2 border-pink-200 hover:border-pink-400 transition-colors">
              <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Enterprise Business</h3>
              <p className="text-gray-600">Enterprise solutions for large-scale operations</p>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-16 sm:py-20 bg-gradient-to-b from-white via-blue-50/30 to-pink-50/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Questions Growth-Stage Brands Usually Ask Us.
            </h2>
          </div>
          
          <div className="space-y-4">
            {[
              {
                q: "Is Stackly the right agency for us?",
                a: "We do our homework on your business, market and competitors before we even hop on the call. By the end we both know whether it's a good match."
              },
              {
                q: "Do I need a long-term contract?",
                a: "We prefer longer commitments and sweeten the deal for them, but we get it – month-to-month works too if that's what you need."
              },
              {
                q: "Who owns the creative assets we produce?",
                a: "You do. Every single ad, video, landing page and line of copy is yours forever – even if we stop working together."
              },
              {
                q: "Will I have full access to my accounts?",
                a: "Yes – you own them completely. Whether you added us or we created them, they're yours with full access always."
              },
              {
                q: "What's your pricing model?",
                a: "Fixed monthly retainer based on your ad spend (tiered). No percentage cut. Price stays the same unless your spend jumps or drops a lot."
              },
              {
                q: "What kind of reporting do you give?",
                a: "Your own custom dashboard that updates every 15 minutes + calls every couple of weeks where we actually explain what the numbers mean for your business."
              },
              {
                q: "What budget size do you work with?",
                a: "Growth-stage companies spending $10k–$250k/month on paid media and ready to push harder."
              }
            ].map((faq, i) => (
              <Card key={i} className="p-6 bg-white/90 backdrop-blur-sm hover:shadow-md transition-all">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-16 sm:py-20 bg-gradient-to-br from-pink-500 via-rose-500 to-orange-500">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            See If We're the Right Team for You.
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            No pressure sales pitch. Just a straight conversation about your goals, how we work, and whether it feels right.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-pink-600 hover:bg-gray-100 text-lg px-8 py-6 shadow-xl hover:shadow-2xl transition-all"
          >
            Book a Call
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
