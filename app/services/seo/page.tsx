import Header from '@/components/header'
import Footer from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Check, ArrowRight, Search, TrendingUp, BarChart3, Settings, Users, Calendar, Shield, Zap, Target, FileText, Brain, Code, Link2, PenTool, BarChart, Globe, Share2 } from 'lucide-react'
import Link from 'next/link'

export default function SEOPage() {
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
              With SEO, Hide and Seek Is Over
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600">
              Time to get found over and over.
            </p>
          </div>
        </div>
      </section>

      {/* SEO Experts Section */}
      <section className="relative py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block mb-6">
              <div className="w-24 h-24 mx-auto bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center">
                <Search className="w-12 h-12 text-white" />
              </div>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              SEO Experts
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              SEO isn't just about rankings anymore. It's about showing up in regular search and AI tools like ChatGPT or Google's AI answers. We make sure your brand pops up where people are actually looking.
            </p>
          </div>
        </div>
      </section>

      {/* AI-Driven SEO Section */}
      <section className="relative py-16 sm:py-20 bg-gradient-to-b from-white via-blue-50/30 to-pink-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="inline-block mb-4">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                <Brain className="w-10 h-10 text-white" />
              </div>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              AI-Driven SEO
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mb-6">
              Search changed big time. AI now gives direct answers instead of just links – and it only picks from sites it trusts. We tune your site so you get included in those answers.
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-8">
              <p className="text-gray-700 font-medium">
                <strong>NOTE:</strong> AI search and classic SEO are the same thing now. All our work – keywords, tech fixes, content – gets you in the new search game.
              </p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">To win you need:</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-pink-500 mt-0.5 flex-shrink-0" />
                  <span>Entity setup so AI knows exactly who you are</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-pink-500 mt-0.5 flex-shrink-0" />
                  <span>Strong content that answers real questions</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-pink-500 mt-0.5 flex-shrink-0" />
                  <span>Clean technical setup so AI can read you easily</span>
                </li>
              </ul>
            </div>
          </div>
          
          <Card className="p-8 bg-white/90 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">AI-Driven SEO Services</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-pink-500 flex-shrink-0" />
                <span className="text-gray-700">Entity Optimization</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-pink-500 flex-shrink-0" />
                <span className="text-gray-700">AI Search Reporting</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-pink-500 flex-shrink-0" />
                <span className="text-gray-700">Customer Question Analysis</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-pink-500 flex-shrink-0" />
                <span className="text-gray-700">Content Built for AI Answers</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-pink-500 flex-shrink-0" />
                <span className="text-gray-700">Technical Site Structure</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-pink-500 flex-shrink-0" />
                <span className="text-gray-700">Competitor Analysis</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-pink-500 flex-shrink-0" />
                <span className="text-gray-700">AI Trend Tracking</span>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Keyword Research */}
            <Card className="p-8 bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all">
              <div className="w-16 h-16 mb-6 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                <Search className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Keyword Research</h3>
              <p className="text-gray-600 mb-4">We check what you already rank for, then dig deeper to find the best keywords that fit your site and beat the competition.</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-pink-500" /> Identifying Seed Keywords</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-pink-500" /> Competitor Analysis</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-pink-500" /> SERP Analysis</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-pink-500" /> Search Intent Analysis</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-pink-500" /> Long-Tail Keyword Research</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-pink-500" /> Keyword Difficulty Scoring</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-pink-500" /> Search Volume & Trend Analysis</li>
              </ul>
            </Card>

            {/* Technical SEO */}
            <Card className="p-8 bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all">
              <div className="w-16 h-16 mb-6 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center">
                <Code className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Technical SEO</h3>
              <p className="text-gray-600 mb-4">Search engines need to move through your site without tripping. We fix it all – like cleaning up before company comes over.</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-pink-500" /> Website Performance</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-pink-500" /> Mobile Friendliness</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-pink-500" /> Structured Data</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-pink-500" /> XML Sitemap</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-pink-500" /> Clean URL Structure</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-pink-500" /> Canonical Tags</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-pink-500" /> Redirects</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-pink-500" /> Site Architecture</li>
              </ul>
            </Card>

            {/* On-Page SEO */}
            <Card className="p-8 bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all">
              <div className="w-16 h-16 mb-6 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">On-Page SEO</h3>
              <p className="text-gray-600 mb-4">Our on-page people know their stuff. We write and optimize content that ranks well and looks good – titles, metas, images, links, the works.</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-pink-500" /> Title Tags</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-pink-500" /> Meta Descriptions</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-pink-500" /> Header Tags</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-pink-500" /> High-Quality Content</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-pink-500" /> Keyword Optimization</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-pink-500" /> Image Optimization</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-pink-500" /> Internal Linking</li>
              </ul>
            </Card>

            {/* Off-Page SEO */}
            <Card className="p-8 bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all">
              <div className="w-16 h-16 mb-6 bg-gradient-to-br from-rose-500 to-pink-500 rounded-xl flex items-center justify-center">
                <Link2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Off-Page SEO</h3>
              <p className="text-gray-600 mb-4">This is how you build trust online – good links, mentions, shares, reviews.</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-pink-500" /> Backlinks</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-pink-500" /> Social Signals</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-pink-500" /> Brand Mentions</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-pink-500" /> Guest Blogging</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-pink-500" /> Local Citations</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-pink-500" /> Customer Reviews</li>
              </ul>
            </Card>

            {/* Content Marketing */}
            <Card className="p-8 bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all">
              <div className="w-16 h-16 mb-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                <PenTool className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Content Marketing</h3>
              <p className="text-gray-600 mb-4">Content has to work for people and AI now. We research, plan, write, optimize, publish and track so it ranks and shows up in AI answers.</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-pink-500" /> Research</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-pink-500" /> Planning</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-pink-500" /> Proofreading</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-pink-500" /> AI & Search Optimization</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-pink-500" /> Publishing</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-pink-500" /> Promotion</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-pink-500" /> Monitoring Engagement (AI + Users)</li>
              </ul>
            </Card>

            {/* Reporting */}
            <Card className="p-8 bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all">
              <div className="w-16 h-16 mb-6 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center">
                <BarChart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Reporting</h3>
              <p className="text-gray-600 mb-4">Simple, useful reports – traffic, conversions, tech health, competitors, and now how you show up in AI results. No BS, just stuff you can act on.</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-pink-500" /> Traffic Analysis</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-pink-500" /> User Engagement Metrics</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-pink-500" /> Conversion Tracking</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-pink-500" /> Backlink Analysis</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-pink-500" /> Page Speed Insights</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-pink-500" /> Technical SEO Health</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-pink-500" /> Content Performance</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-pink-500" /> Goals & Objectives</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-pink-500" /> Actionable Recommendations</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-pink-500" /> Competitor Performance</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-pink-500" /> AI Search Visibility Tracking</li>
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
            Get Your Free Website Audit
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
              <p className="text-gray-600">Start growth with zero upfront cost.</p>
            </Card>
            
            <Card className="p-8 text-center border-2 border-pink-200 hover:border-pink-400 transition-colors">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">You Own Everything</h3>
              <p className="text-gray-600">Every step and asset is yours.</p>
            </Card>
            
            <Card className="p-8 text-center border-2 border-pink-200 hover:border-pink-400 transition-colors">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-pink-500 to-rose-500 rounded-full flex items-center justify-center">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Dedicated Team</h3>
              <p className="text-gray-600">Team focused only on you.</p>
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
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Gearing Up</h3>
              <p className="text-gray-600">Heavy research, quick fixes, site tune-up.</p>
            </Card>
            
            <Card className="p-8 bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all">
              <div className="text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-2">
                4-8
              </div>
              <div className="text-xl font-semibold text-gray-900 mb-4">Months</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Gaining Momentum</h3>
              <p className="text-gray-600">Improving every piece, building long-term gains.</p>
            </Card>
            
            <Card className="p-8 bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all">
              <div className="text-5xl font-bold bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent mb-2">
                9-12
              </div>
              <div className="text-xl font-semibold text-gray-900 mb-4">Months</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Endless Possibilities</h3>
              <p className="text-gray-600">Keep optimizing, scale bigger, no limits.</p>
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
                  <span className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">NRG Clean Power</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">About the Brand</h3>
                <p className="text-gray-600 mb-6">LA solar company using California credits and Google ads.</p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">The Challenge</h4>
                    <p className="text-gray-600">Tough competition and $2,500 target cost per closed deal.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">The Solution</h4>
                    <p className="text-gray-600">Tuned Performance Max with CRM data + solar audience targeting.</p>
                  </div>
                  <div className="pt-4 border-t border-pink-200">
                    <h4 className="font-semibold text-gray-900 mb-2">Business Impact</h4>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <div className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">309%</div>
                        <p className="text-sm text-gray-600">more leads</p>
                      </div>
                      <div>
                        <div className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">9.87×</div>
                        <p className="text-sm text-gray-600">ROAS</p>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">$147,822 revenue in just 60 days.</p>
                    <div className="bg-white/80 p-4 rounded-lg border-l-4 border-pink-500">
                      <p className="text-gray-700 italic">"Every campaign has better clicks and conversions than before. Their attention to detail got us our highest revenue goal yet."</p>
                      <p className="text-sm text-gray-600 mt-2 font-semibold">— Oren Schott, CEO</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative h-96 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-green-400 via-emerald-400 to-teal-400"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white p-8">
                    <Globe className="w-24 h-24 mx-auto mb-4 opacity-50" />
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
              Stack services however you want – become the one others try to copy.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all group cursor-pointer">
              <div className="w-16 h-16 mb-6 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <Search className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Paid Search</h3>
              <p className="text-gray-600 mb-4">Smart visibility techniques</p>
              <Link href="/services/paid-search" className="flex items-center text-pink-600 font-medium">
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Card>
            
            <Card className="p-8 bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all group cursor-pointer">
              <div className="w-16 h-16 mb-6 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <Share2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Paid Social</h3>
              <p className="text-gray-600 mb-4">Real connections and engagement</p>
              <Link href="/services/paid-social" className="flex items-center text-pink-600 font-medium">
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Card>
            
            <Card className="p-8 bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all group cursor-pointer">
              <div className="w-16 h-16 mb-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Performance Creative</h3>
              <p className="text-gray-600 mb-4">Award-winning in-house team</p>
              <Link href="/services/performance-creative" className="flex items-center text-pink-600 font-medium">
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
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
