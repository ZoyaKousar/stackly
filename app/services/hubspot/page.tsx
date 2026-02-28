import Header from '@/components/header'
import Footer from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Check, ArrowRight, Search, TrendingUp, BarChart3, Settings, Users, Calendar, Shield, Zap, Target, FileText, Brain, Code, Link2, PenTool, BarChart, Globe, Share2, Mail, Workflow, GraduationCap, Eye, Award } from 'lucide-react'
import Link from 'next/link'

export default function HubSpotPage() {
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
              Squeeze the Most Out of HubSpot
            </h1>
            <p className="text-xl sm:text-2xl text-white/80">
              It's worth it – let's get every bit of value from it.
            </p>
          </div>
        </div>
      </section>

      {/* Certified Partner Section */}
      <section className="relative py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block mb-6">
              <div className="w-24 h-24 mx-auto bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center">
                <Award className="w-12 h-12 text-white" />
              </div>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Certified HubSpot Partner
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We're official HubSpot partners. We set it up right, tune it, and turn it into a real lead-to-sale machine.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative py-16 sm:py-20 bg-gradient-to-b from-white via-blue-50/30 to-indigo-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Onboarding */}
            <Card className="p-8 bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all">
              <div className="w-16 h-16 mb-6 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Onboarding</h3>
              <p className="text-gray-600 mb-4">Just starting with HubSpot? Great pick. We get the basics done, give you clear guides and one-on-one help so your team can run with it fast.</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#2aaaea]" /> Onboarding Call</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#2aaaea]" /> Integrations</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#2aaaea]" /> Account Settings</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#2aaaea]" /> Domain Connections</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#2aaaea]" /> Reports & Dashboards</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#2aaaea]" /> Lists</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#2aaaea]" /> Payments</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#2aaaea]" /> Automations</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#2aaaea]" /> Pipelines</li>
              </ul>
            </Card>

            {/* Execution */}
            <Card className="p-8 bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all">
              <div className="w-16 h-16 mb-6 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                <Settings className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Execution</h3>
              <p className="text-gray-600 mb-4">Life's busy – we get it. We do the full setup for you, customize everything to fit, and hand over the roadmap and training when you're ready.</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#2aaaea]" /> Integrations</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#2aaaea]" /> Account Settings</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#2aaaea]" /> Domain Connections</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#2aaaea]" /> Reports & Dashboards</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#2aaaea]" /> Lists</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#2aaaea]" /> Payments</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#2aaaea]" /> Automations</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#2aaaea]" /> Pipelines</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#2aaaea]" /> Pro Suite: Paid Ads Deal Revenue Tracking</li>
              </ul>
            </Card>

            {/* Management */}
            <Card className="p-8 bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all">
              <div className="w-16 h-16 mb-6 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center">
                <Workflow className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Management</h3>
              <p className="text-gray-600 mb-4">Workflows a mess? We clean them up and build simple, scalable systems using what actually works so your team doesn't fight the tool.</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#2aaaea]" /> Data Cleanup</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#2aaaea]" /> Custom Reporting</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#2aaaea]" /> Sales + Marketing Alignment</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#2aaaea]" /> Ad-Hoc Requests</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#2aaaea]" /> Automation Strategy</li>
              </ul>
            </Card>

            {/* Consultation */}
            <Card className="p-8 bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all">
              <div className="w-16 h-16 mb-6 bg-gradient-to-br from-[#2aaaea] to-cyan-400 rounded-xl flex items-center justify-center">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Consultation</h3>
              <p className="text-gray-600 mb-4">We team up with your strategist to link HubSpot data to your ads – better leads, higher ROI, smarter overall marketing.</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#2aaaea]" /> Integrated Marketing Strategy</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#2aaaea]" /> Integrated Sales Strategy</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#2aaaea]" /> Solution-Based Project Support</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#2aaaea]" /> Industry-Specific Guidance</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#2aaaea]" /> Sales Enablement</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#2aaaea]" /> Marketing Enablement</li>
              </ul>
            </Card>

            {/* Training */}
            <Card className="p-8 bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all">
              <div className="w-16 h-16 mb-6 bg-gradient-to-br from-[#2aaaea] to-cyan-400 rounded-xl flex items-center justify-center">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Training</h3>
              <p className="text-gray-600 mb-4">We can train your team or handle it ourselves. One-on-one sessions, custom guides, ongoing help to get everyone comfortable quick.</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#2aaaea]" /> 1-on-1 Training Hours</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#2aaaea]" /> Custom Roadmaps</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#2aaaea]" /> Dedicated Team Support</li>
              </ul>
            </Card>

            {/* Design */}
            <Card className="p-8 bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all">
              <div className="w-16 h-16 mb-6 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center">
                <PenTool className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Design</h3>
              <p className="text-gray-600 mb-4">We make HubSpot landing pages, emails and CTAs that convert – with A/B tests built in for real insights.</p>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg mb-4">
                <p className="text-sm text-gray-700">
                  <strong>Note:</strong> No CMS or full website migrations right now.
                </p>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#2aaaea]" /> Landing Pages</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#2aaaea]" /> Email Templates</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#2aaaea]" /> CTA Creation</li>
              </ul>
            </Card>

            {/* Auditing */}
            <Card className="p-8 bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all">
              <div className="w-16 h-16 mb-6 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-xl flex items-center justify-center">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Auditing</h3>
              <p className="text-gray-600 mb-4">We go deep into your HubSpot setup, spot the good stuff and the problems, fix what's broken and make it run smoother.</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#2aaaea]" /> Contacts</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#2aaaea]" /> Deals</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#2aaaea]" /> Account / Billing</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#2aaaea]" /> Team Structuring</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#2aaaea]" /> Integrations</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#2aaaea]" /> Workflows</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Free Consultation CTA */}
      <section className="relative py-16 sm:py-20 bg-[#111a42]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Get Your Free HubSpot Consultation
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
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Exclusive Help Portal</h3>
              <p className="text-gray-600">Quick requests with live tracking.</p>
            </Card>
            
            <Card className="p-8 text-center border-2 border-blue-200 hover:border-[#2aaaea] transition-colors">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">You Own Everything</h3>
              <p className="text-gray-600">Full ownership start to finish.</p>
            </Card>
            
            <Card className="p-8 text-center border-2 border-blue-200 hover:border-[#2aaaea] transition-colors">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[#2aaaea] to-cyan-400 rounded-full flex items-center justify-center">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Dedicated Team</h3>
              <p className="text-gray-600">Personal focus on your success.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="relative py-16 sm:py-20 bg-gradient-to-b from-white via-blue-50/30 to-indigo-50/30">
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
                  <span className="text-2xl font-bold bg-gradient-to-r from-[#2aaaea] to-cyan-400 bg-clip-text text-transparent">One Week Bath</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">About the Brand</h3>
                <p className="text-gray-600 mb-6">LA luxury bathroom remodeler wanted better leads and lower costs.</p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">The Challenge</h4>
                    <p className="text-gray-600">High costs and no clean connection between Google Ads and HubSpot.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">The Solution</h4>
                    <p className="text-gray-600">Improved landing pages + HubSpot forms to qualify leads better from Google and Meta.</p>
                  </div>
                  <div className="pt-4 border-t border-blue-200">
                    <h4 className="font-semibold text-gray-900 mb-2">Business Impact</h4>
                    <div className="grid grid-cols-1 gap-4">
                      <div>
                        <div className="text-3xl font-bold bg-gradient-to-r from-[#2aaaea] to-cyan-400 bg-clip-text text-transparent">$600,000+</div>
                        <p className="text-sm text-gray-600">in potential revenue</p>
                      </div>
                      <p className="text-gray-600 mt-2">Proper tracking unlocked and way more closed deals.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative h-96 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#111a42] via-[#2aaaea] to-cyan-400"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white p-8">
                    <Settings className="w-24 h-24 mx-auto mb-4 opacity-50" />
                    <p className="text-lg font-semibold">Case Study Visual</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Other Services */}
      <section className="relative py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Ready to Level Up?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Bundle services and take over your space.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all group cursor-pointer">
              <div className="w-16 h-16 mb-6 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <Share2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Paid Social</h3>
              <p className="text-gray-600 mb-4">Real connections and engagement</p>
              <Link href="/services/paid-social" className="flex items-center text-[#2aaaea] font-medium">
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Card>
            
            <Card className="p-8 bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all group cursor-pointer">
              <div className="w-16 h-16 mb-6 bg-gradient-to-br from-[#2aaaea] to-cyan-400 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Performance Creative</h3>
              <p className="text-gray-600 mb-4">In-house team that grabs attention and gets sales</p>
              <Link href="/services/performance-creative" className="flex items-center text-[#2aaaea] font-medium">
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
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
