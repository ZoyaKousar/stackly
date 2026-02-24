import Header from '@/components/header'
import Footer from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Check, ArrowRight, Search, TrendingUp, BarChart3, Settings, Users, Calendar, Shield, Zap, Target, FileText } from 'lucide-react'
import Image from 'next/image'

export default function PaidSearchPage() {
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
              So, You Want Paid Search Experts.
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600">
              Lucky you. We've got a solid crew ready to roll.
            </p>
          </div>
        </div>
      </section>

      {/* Certified Partners Section */}
      <section className="relative py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Certified Google + Microsoft Partners
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We've got the official Google Ads and Microsoft Ads badges to prove it. We tune your campaigns tight so they hit hard and deliver the ROI you're chasing.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-8 text-center border-2 border-pink-200 hover:border-pink-400 transition-colors">
              <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center">
                <Search className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Google Ads Certified</h3>
              <p className="text-gray-600">Official Google Partner with proven expertise</p>
            </Card>
            
            <Card className="p-8 text-center border-2 border-pink-200 hover:border-pink-400 transition-colors">
              <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center">
                <Search className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Microsoft Ads Certified</h3>
              <p className="text-gray-600">Certified Microsoft Advertising Partner</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative py-16 sm:py-20 bg-gradient-to-b from-white via-blue-50/30 to-pink-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Planning */}
            <Card className="p-8 bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all">
              <div className="w-16 h-16 mb-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Planning</h3>
              <p className="text-gray-600 mb-4">We get inside your business first. We study your competitors, nail down your audience, scan the market. Then we build the strategy that actually fits.</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-pink-500" /> Audience</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-pink-500" /> Media planning + Forecasting</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-pink-500" /> Trend Analysis + Relative Market Share Research</li>
              </ul>
            </Card>

            {/* Platforms */}
            <Card className="p-8 bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all">
              <div className="w-16 h-16 mb-6 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Platforms</h3>
              <p className="text-gray-600 mb-4">Real power comes from smart search plus multi-channel ads. Hand it to us. You focus on running the business.</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-pink-500" /> Google Ads</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-pink-500" /> Microsoft Ads</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-pink-500" /> Youtube</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-pink-500" /> GDN (Prospecting + Remarketing)</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-pink-500" /> Performance Max</li>
              </ul>
            </Card>

            {/* Reporting */}
            <Card className="p-8 bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all">
              <div className="w-16 h-16 mb-6 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Reporting</h3>
              <p className="text-gray-600 mb-4">Data. Data. Data. We don't hide behind fancy charts. Clear reports keep everything honest and make the partnership actually work.</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-pink-500" /> Bi-Weekly Meetings w/ Agendas</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-pink-500" /> Live Metrics Dashboard</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-pink-500" /> QBRs</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-pink-500" /> Ad Hoc Reporting</li>
              </ul>
            </Card>

            {/* Technology */}
            <Card className="p-8 bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all">
              <div className="w-16 h-16 mb-6 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center">
                <Settings className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Technology</h3>
              <p className="text-gray-600 mb-4">Basic Google Ads is fine to start. Winning takes better tools. We plug in the good stuff to give you the edge.</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-pink-500" /> Callrail</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-pink-500" /> Semrush</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-pink-500" /> PixisAI</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-pink-500" /> Feed Management (TBD)</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-pink-500" /> ClickCease</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-pink-500" /> GA4 Setup + Analysis</li>
              </ul>
            </Card>

            {/* Management */}
            <Card className="p-8 bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all">
              <div className="w-16 h-16 mb-6 bg-gradient-to-br from-rose-500 to-pink-500 rounded-xl flex items-center justify-center">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Management</h3>
              <p className="text-gray-600 mb-4">Clean day-to-day handling, smart moves, real attention. Your ads stay on point every single day.</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-pink-500" /> Dedicated Account Manager</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-pink-500" /> Support Team</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-pink-500" /> Daily/Weekly account monitoring</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-pink-500" /> 24 Business Hour Email Response</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-pink-500" /> Ad Copy Creation + A/B Testing</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-pink-500" /> Conversion + ROI Tracking Setup</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-pink-500" /> Budget + Bid Strategy Management</li>
              </ul>
            </Card>

            {/* Business Data */}
            <Card className="p-8 bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all">
              <div className="w-16 h-16 mb-6 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Business Data</h3>
              <p className="text-gray-600">Comprehensive data analysis and insights to drive your business forward.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Free Audit CTA */}
      <section className="relative py-16 sm:py-20 bg-gradient-to-br from-pink-500 via-rose-500 to-orange-500">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Snag Your Free Search Audit.
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
              Want More? Fine, Twist Our Arm.
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="p-8 text-center border-2 border-pink-200 hover:border-pink-400 transition-colors">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                <Check className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">No Setup Fees</h3>
              <p className="text-gray-600">Zero upfront. We start fast and let the results do the talking.</p>
            </Card>
            
            <Card className="p-8 text-center border-2 border-pink-200 hover:border-pink-400 transition-colors">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">You Own Everything</h3>
              <p className="text-gray-600">All of it is yours. Accounts, creatives, everything from day one.</p>
            </Card>
            
            <Card className="p-8 text-center border-2 border-pink-200 hover:border-pink-400 transition-colors">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-pink-500 to-rose-500 rounded-full flex items-center justify-center">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Dedicated Team</h3>
              <p className="text-gray-600">You get people who actually care about your growth. Not just another account number.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="relative py-16 sm:py-20 bg-gradient-to-b from-white via-blue-50/30 to-pink-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              We Want Results As Fast As You Do.
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all">
              <div className="text-5xl font-bold bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent mb-2">
                0-3
              </div>
              <div className="text-xl font-semibold text-gray-900 mb-4">Months</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Revving Up</h3>
              <p className="text-gray-600">Deep research right away, quick wins spotted, ads sharpened fast. We move the second we're in.</p>
            </Card>
            
            <Card className="p-8 bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all">
              <div className="text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-2">
                4-8
              </div>
              <div className="text-xl font-semibold text-gray-900 mb-4">Months</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Hitting Our Stride</h3>
              <p className="text-gray-600">Things click. We dial in performance, build consistency, and start scaling smart.</p>
            </Card>
            
            <Card className="p-8 bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all">
              <div className="text-5xl font-bold bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent mb-2">
                9-12
              </div>
              <div className="text-xl font-semibold text-gray-900 mb-4">Months</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">No Brakes, Just Breakthroughs</h3>
              <p className="text-gray-600">No slowing down. Constant testing, bigger bets, real long-term gains.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Explore Our Work */}
      <section className="relative py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Explore Our Work.
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Scroll our wins. Data-driven ideas meeting bold execution across all kinds of industries and goals. Fresh thinking keeps it interesting.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="overflow-hidden hover:shadow-xl transition-all group">
                <div className="relative h-64 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-xl font-bold mb-1">Case Study {i}</h3>
                    <p className="text-sm opacity-90">View Details</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="relative py-16 sm:py-20 bg-gradient-to-b from-white via-blue-50/30 to-pink-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Come On, Take It To The Next Level.
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Add one or stack a few more services. Watch your competitors eat dust (that's you up front).
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all group cursor-pointer">
              <div className="w-16 h-16 mb-6 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">SEO</h3>
              <p className="text-gray-600 mb-4">Push your organic game with sharp, modern tactics.</p>
              <div className="flex items-center text-pink-600 font-medium">
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </Card>
            
            <Card className="p-8 bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all group cursor-pointer">
              <div className="w-16 h-16 mb-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Performance Creative</h3>
              <p className="text-gray-600 mb-4">Our in-house crew makes visuals that stop thumbs and turn them into clicks.</p>
              <div className="flex items-center text-pink-600 font-medium">
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </Card>
            
            <Card className="p-8 bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all group cursor-pointer">
              <div className="w-16 h-16 mb-6 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Paid Social</h3>
              <p className="text-gray-600 mb-4">Build real connections. Get people talking and engaging on social media.</p>
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
              Bet You We're A Perfect Match.
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Startups scaling up, enterprises pushing harder. We've got stories across the board. Yours could easily be next.
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
              What Growth-Stage Brands Ask Us.
            </h2>
          </div>
          
          <div className="space-y-4">
            {[
              {
                q: "How do I know if Stackly is the right agency for us?",
                a: "Book the call and we'll do our homework first. Your business, your market, your rivals. We jump straight into real talk. By the end you'll know if we click."
              },
              {
                q: "Will I have to sign a long-term contract?",
                a: "We love long-term because it lets us crush it for you. Longer deals get you better terms. But if you want month-to-month we can make it work. Just say the word."
              },
              {
                q: "Who owns the assets your Performance Creative team develops for us?",
                a: "Everything we make is yours. Landing pages, ads, videos. Take the whole pile when you want. No strings."
              },
              {
                q: "Will I have access to my accounts?",
                a: "You get full access and full ownership. Yours to invite us into or ones we build. Doesn't matter. Your brand. We just drive."
              },
              {
                q: "What is your pricing structure?",
                a: "Flat monthly retainer tied to your ad spend tier. No sneaky percentage grab like most shops. Fees stay predictable unless your budget makes a big move."
              },
              {
                q: "What type of reporting do you provide?",
                a: "Custom dashboard with the numbers that actually matter to you. Live, updates every 15 min. But we don't just send links. We talk bi-weekly (or whatever works) and explain what's moving and why."
              },
              {
                q: "What size budgets do you work with?",
                a: "Growth brands running $10k–$250k/month in paid media and hungry to scale bigger."
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
