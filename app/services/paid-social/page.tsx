import Header from '@/components/header'
import Footer from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Check, ArrowRight, Search, TrendingUp, BarChart3, Settings, Users, Calendar, Shield, Zap, Target, FileText, Heart, Share2, Video, Sparkles } from 'lucide-react'
import Link from 'next/link'

export default function PaidSocialPage() {
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
              Don't Just Like Your Paid Social – Actually Love It
            </h1>
            <p className="text-xl sm:text-2xl text-white/80">
              We make it personal. One-size-fits-all never works anyway.
            </p>
          </div>
        </div>
      </section>

      {/* Certified Experts Section */}
      <section className="relative py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Certified Social Media Experts
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We've got the official Meta certs and we're pretty damn good at running strong paid campaigns on every big platform. Ready to see your engagement actually take off?
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="p-8 text-center border-2 border-blue-200 hover:border-[#2aaaea] transition-colors">
              <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center">
                <Share2 className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Meta Certified</h3>
              <p className="text-gray-600">Facebook + Instagram expertise</p>
            </Card>
            
            <Card className="p-8 text-center border-2 border-blue-200 hover:border-[#2aaaea] transition-colors">
              <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-[#2aaaea] to-cyan-400 rounded-2xl flex items-center justify-center">
                <Video className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">TikTok Ads</h3>
              <p className="text-gray-600">Video-first platform mastery</p>
            </Card>
            
            <Card className="p-8 text-center border-2 border-blue-200 hover:border-[#2aaaea] transition-colors">
              <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">LinkedIn Ads</h3>
              <p className="text-gray-600">B2B professional targeting</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="relative py-16 sm:py-20 bg-gradient-to-b from-white via-blue-50/30 to-indigo-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Platforms We Master
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Every platform has its own feel and crowd. We pick the right ones for your goals and build ads that fit right in and actually perform.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { name: 'Meta (Facebook + Instagram)', icon: Share2, color: 'from-blue-500 to-blue-600' },
              { name: 'TikTok', icon: Video, color: 'from-[#2aaaea] to-cyan-400' },
              { name: 'LinkedIn', icon: Users, color: 'from-indigo-500 to-purple-500' },
              { name: 'Pinterest', icon: Heart, color: 'from-[#2aaaea] to-cyan-400' },
              { name: 'Reddit', icon: Sparkles, color: 'from-orange-500 to-red-500' },
            ].map((platform, i) => {
              const Icon = platform.icon
              return (
                <Card key={i} className="p-6 bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${platform.color} rounded-xl flex items-center justify-center`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{platform.name}</h3>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Strategic Planning */}
            <Card className="p-8 bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all">
              <div className="w-16 h-16 mb-6 bg-gradient-to-br from-[#2aaaea] to-cyan-400 rounded-xl flex items-center justify-center">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Strategic Planning</h3>
              <p className="text-gray-600 mb-4">Good campaigns don't start by accident. Our strategists really dig into your brand, what you want to achieve, your competitors and the market so we can hand you a clear custom plan – calendars, triggers, everything lined up to make your money go further.</p>
              <div className="text-sm font-semibold text-gray-900 mb-2">Decision-Making Triggers:</div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#2aaaea]" /> Audience Research & Discovery</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#2aaaea]" /> Industry & Competitor Research</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#2aaaea]" /> Seasonal & Event Promotions</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#2aaaea]" /> Historical Performance Analysis</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#2aaaea]" /> Platform & Channel Recommendations</li>
              </ul>
            </Card>

            {/* Campaign Management */}
            <Card className="p-8 bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all">
              <div className="w-16 h-16 mb-6 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                <Settings className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Campaign Management</h3>
              <p className="text-gray-600 mb-4">Juggling ads on multiple platforms gets messy fast. We handle it all – daily checks, quick fixes, real-time tweaks – so your brand stays relevant and you can just sit back and watch things grow.</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#2aaaea]" /> Dedicated Account Manager</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#2aaaea]" /> Full Support Team</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#2aaaea]" /> Daily / Weekly Account Reviews</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#2aaaea]" /> Email Responses Within 24 Business Hours</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#2aaaea]" /> Ad Copy Creation & A/B Testing</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#2aaaea]" /> Conversion & ROI Tracking</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#2aaaea]" /> Budget Pacing & Allocation Management</li>
              </ul>
            </Card>

            {/* Audience Targeting */}
            <Card className="p-8 bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all">
              <div className="w-16 h-16 mb-6 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Audience Targeting</h3>
              <p className="text-gray-600 mb-4">It all comes down to knowing who you're actually talking to. We build smart, targeted audiences that connect, new people or loyal customers, we make it feel right.</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#2aaaea]" /> Behavioral & Purchase Triggers</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#2aaaea]" /> Demographic Segmentation + Testing</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#2aaaea]" /> A/B Audience Testing</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#2aaaea]" /> Custom-Tailored Messaging</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#2aaaea]" /> Full-Funnel Audiences: Awareness, Prospecting, Retargeting, Retention</li>
              </ul>
            </Card>

            {/* Performance Creative */}
            <Card className="p-8 bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all">
              <div className="w-16 h-16 mb-6 bg-gradient-to-br from-[#2aaaea] to-cyan-400 rounded-xl flex items-center justify-center">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Performance Creative</h3>
              <p className="text-gray-600 mb-4">If the creative doesn't convert, nothing else matters. Our in-house crew takes your brand and goals and turns them into ads people actually stop for, researched, tested, improved until they work.</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#2aaaea]" /> In-House Creative Team</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#2aaaea]" /> Seamless Communication & Feedback</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#2aaaea]" /> Conversion-Rate-Optimized Landing Pages</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#2aaaea]" /> A/B Creative Testing</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#2aaaea]" /> Static, Animated, Video & Carousel Formats</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#2aaaea]" /> Direct-Response Copywriting</li>
              </ul>
            </Card>

            {/* Advanced Technology */}
            <Card className="p-8 bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all">
              <div className="w-16 h-16 mb-6 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Advanced Technology & Tools</h3>
              <p className="text-gray-600 mb-4">We use the newest tools, AI insights and automation to get every last drop of performance out of your campaigns.</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#2aaaea]" /> Ecommerce Feed Optimization</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#2aaaea]" /> Creative Collaboration & Approval Tools</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#2aaaea]" /> Landing Page Heatmaps & Session Recordings</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#2aaaea]" /> Live Real-Time Performance Dashboards</li>
              </ul>
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
            Get Your Free Paid Social Audit Today
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
              Want More? Go Ahead – Twist Our Arm.
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="p-8 text-center border-2 border-blue-200 hover:border-[#2aaaea] transition-colors">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                <Check className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">No Setup Fees</h3>
              <p className="text-gray-600">Jump in with zero upfront cost.</p>
            </Card>
            
            <Card className="p-8 text-center border-2 border-blue-200 hover:border-[#2aaaea] transition-colors">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">You Own Everything</h3>
              <p className="text-gray-600">Accounts, ads, data – all yours 100%.</p>
            </Card>
            
            <Card className="p-8 text-center border-2 border-blue-200 hover:border-[#2aaaea] transition-colors">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[#2aaaea] to-cyan-400 rounded-full flex items-center justify-center">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Dedicated Team</h3>
              <p className="text-gray-600">Real people who care about your results.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="relative py-16 sm:py-20 bg-gradient-to-b from-white via-blue-50/30 to-indigo-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              We're Obsessed With Fast Results Same as you.
            </h2>
            <p className="text-lg text-gray-600">Timeline of Results</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all">
              <div className="text-5xl font-bold bg-gradient-to-r from-[#2aaaea] to-cyan-400 bg-clip-text text-transparent mb-2">
                0-3
              </div>
              <div className="text-xl font-semibold text-gray-900 mb-4">Months</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Revving Up</h3>
              <p className="text-gray-600">We dive in deep, grab the quick wins, refresh the ads. Full speed right after onboarding.</p>
            </Card>
            
            <Card className="p-8 bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all">
              <div className="text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-2">
                4-8
              </div>
              <div className="text-xl font-semibold text-gray-900 mb-4">Months</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Hitting Our Stride</h3>
              <p className="text-gray-600">Getting the rhythm right, sharpening performance, growing steady and strong.</p>
            </Card>
            
            <Card className="p-8 bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all">
              <div className="text-5xl font-bold bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent mb-2">
                9-12
              </div>
              <div className="text-xl font-semibold text-gray-900 mb-4">Months</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">No Brakes, Just Breakthroughs</h3>
              <p className="text-gray-600">Testing non-stop, scaling what works, blowing past old limits.</p>
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
          
          <Card className="p-8 md:p-12 bg-gradient-to-br from-slate-50 to-blue-50 border-2 border-blue-200">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-block px-4 py-2 bg-white rounded-full mb-6">
                  <span className="text-2xl font-bold bg-gradient-to-r from-[#2aaaea] to-cyan-400 bg-clip-text text-transparent">MISSHA</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">About the Brand</h3>
                <p className="text-gray-600 mb-6">Big Korean beauty brand Missha wanted to really break through in the crowded US market.</p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">The Challenge</h4>
                    <p className="text-gray-600">Results were all over the place and competition was brutal.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">The Solution</h4>
                    <p className="text-gray-600">Fresh catalog ads + smart holiday pushes on Meta.</p>
                  </div>
                  <div className="pt-4 border-t border-blue-200">
                    <h4 className="font-semibold text-gray-900 mb-2">Business Impact</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-3xl font-bold bg-gradient-to-r from-[#2aaaea] to-cyan-400 bg-clip-text text-transparent">$103,310</div>
                        <p className="text-sm text-gray-600">revenue generated</p>
                      </div>
                      <div>
                        <div className="text-3xl font-bold bg-gradient-to-r from-[#2aaaea] to-cyan-400 bg-clip-text text-transparent">5.38×</div>
                        <p className="text-sm text-gray-600">ROAS</p>
                      </div>
                    </div>
                    <p className="text-gray-600 mt-4">Much stronger foothold in the US.</p>
                  </div>
                </div>
              </div>
              <div className="relative h-96 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#111a42] via-[#2aaaea] to-cyan-400"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white p-8">
                    <Share2 className="w-24 h-24 mx-auto mb-4 opacity-50" />
                    <p className="text-lg font-semibold">Case Study Visual</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Other Services */}
      <section className="relative py-16 sm:py-20 bg-gradient-to-b from-white via-blue-50/30 to-indigo-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Ready to Level Up?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Pick a few services, stack them, and leave your competitors behind (yeah, that's you now).
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all group cursor-pointer">
              <div className="w-16 h-16 mb-6 bg-gradient-to-br from-[#2aaaea] to-cyan-400 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Performance Creative</h3>
              <p className="text-gray-600 mb-4">In-house crew that grabs attention and gets sales</p>
              <div className="flex items-center text-[#2aaaea] font-medium">
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </Card>
            
            <Card className="p-8 bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all group cursor-pointer">
              <div className="w-16 h-16 mb-6 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <Search className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Paid Search</h3>
              <p className="text-gray-600 mb-4">Super targeted growth</p>
              <Link href="/services/paid-search" className="flex items-center text-[#2aaaea] font-medium">
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Card>
            
            <Card className="p-8 bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all group cursor-pointer">
              <div className="w-16 h-16 mb-6 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Amazon Ads</h3>
              <p className="text-gray-600 mb-4">Custom plans that send sales through the roof</p>
              <div className="flex items-center text-[#2aaaea] font-medium">
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 sm:py-20 bg-[#111a42]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Let's Talk About Your Goals.
          </h2>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-[#2aaaea] via-[#2aaaea] to-[#2aaaea] hover:from-[#2599d4] hover:via-[#2599d4] hover:to-[#2599d4] text-white border-0 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 rounded-full px-8 py-6 font-semibold"
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
              Doesn't matter if you're a growing small business or a big player – we've got the track record. You could be next.
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

      {/* FAQ Section */}
      <section className="relative py-16 sm:py-20 bg-gradient-to-b from-white via-blue-50/30 to-indigo-50/30">
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
      <section className="relative py-16 sm:py-20 bg-[#111a42]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            See If We're the Right Team for You.
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            No pressure sales pitch. Just a straight conversation about your goals, how we work, and whether it feels right.
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
