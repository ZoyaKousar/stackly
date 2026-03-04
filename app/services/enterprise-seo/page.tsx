import Header from '@/components/header'
import Footer from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Check, ArrowRight, Search, FileText, Target, Code, BarChart3, Zap, Shield, Users, Globe, TrendingUp } from 'lucide-react'

export default function EnterpriseSEOPage() {
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
              Enterprise SEO
              <br />
              <span className="text-[#2aaaea]">That Actually Scales Your Business.</span>
            </h1>
            <p className="text-xl sm:text-2xl text-white/80">
              We build serious SEO strategies that push visibility and revenue on big, messy, complicated websites.
            </p>
          </div>
        </div>
      </section>

      {/* Our Enterprise SEO Approach */}
      <section className="relative py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Enterprise SEO Approach
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Big sites with tons of pages don't grow from quick tricks or one-off tweaks. Scaling SEO properly takes real strategy, constant hands-on work, and never taking shortcuts. We fix the technical backbone first, get your content strategy firing on all cylinders, and use data the right way, so every page actually helps search rankings, keeps users happy, and brings in more business.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Comprehensive Site Audits */}
            <Card className="p-8 bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all">
              <div className="w-16 h-16 mb-6 bg-gradient-to-br from-[#2aaaea] to-cyan-400 rounded-xl flex items-center justify-center">
                <Search className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Comprehensive Site Audits</h3>
              <p className="text-gray-600">We crawl every corner, thousands, sometimes tens of thousands of pages, hunting down broken links, duplicate content disasters, crawl traps, weird redirects, and structural problems that kill performance. We don't just hand you a giant list; we rank the fixes by what will move the needle fastest for you.</p>
            </Card>

            {/* Scalable Content Strategy */}
            <Card className="p-8 bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all">
              <div className="w-16 h-16 mb-6 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Scalable Content Strategy</h3>
              <p className="text-gray-600">We look at what you already have and figure out realistic ways to make those pages stronger, plus plan how to add new ones without everything turning into a nightmare. Every page gets matched to keywords that actually matter, your business priorities, and what real people are searching for, so the growth compounds instead of fizzling.</p>
            </Card>

            {/* Advanced Keyword Research */}
            <Card className="p-8 bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all">
              <div className="w-16 h-16 mb-6 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Advanced Keyword Research</h3>
              <p className="text-gray-600">Forget basic keyword tools spitting out obvious stuff. Finding the hidden, high-value terms across products, services, cities, audience segments, whatever makes sense for your business. The goal is every important page has the best possible shot at real traffic.</p>
            </Card>

            {/* Technical SEO Optimization */}
            <Card className="p-8 bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all">
              <div className="w-16 h-16 mb-6 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center">
                <Code className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Technical SEO Optimization</h3>
              <p className="text-gray-600">We clean up site structure, fix crawl & index issues, lock in proper schema, speed things up where it counts, and make sure search engines can actually read and love your content. These aren't sexy changes people notice right away, but they're the reason good sites suddenly start ranking properly.</p>
            </Card>

            {/* Analytics & Reporting */}
            <Card className="p-8 bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all">
              <div className="w-16 h-16 mb-6 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Analytics & Reporting</h3>
              <p className="text-gray-600">You'll get straightforward reports that show what's actually happening: traffic trends, ranking moves, conversion lifts, new opportunities popping up. Real numbers you can show the boss and actually use to decide what to do next.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Proven Results Section */}
      <section className="relative py-16 sm:py-20 bg-gradient-to-b from-white via-blue-50/30 to-indigo-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-[#2aaaea] to-cyan-400 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-10 h-10 text-white" />
                </div>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Proven Results for Enterprise Growth
              </h2>
              <p className="text-lg text-gray-600">
                This isn't about moving the needle a couple percent. Enterprise SEO is about big, measurable wins across the whole damn site: way more organic visitors, much higher rankings for money keywords, and better conversion rates everywhere. Technical cleanup + content that scales + trustworthy data = steady, predictable growth that keeps big companies ahead.
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
              Common Questions About Enterprise SEO
            </h2>
          </div>
          
          <div className="space-y-4">
            <Card className="p-6 bg-white/90 backdrop-blur-sm hover:shadow-md transition-all">
              <h3 className="text-lg font-bold text-gray-900 mb-2">What is Enterprise SEO, and how is it different from regular SEO?</h3>
              <p className="text-gray-600">Regular SEO works okay for small-to-medium sites. Enterprise SEO is what you need when you've got thousands (or hundreds of thousands) of pages, multiple brands/domains, country versions, or global scale. It requires systems that don't break at volume, heavy-duty analytics, and someone watching it 24/7 so nothing quietly dies.</p>
            </Card>
            
            <Card className="p-6 bg-white/90 backdrop-blur-sm hover:shadow-md transition-all">
              <h3 className="text-lg font-bold text-gray-900 mb-2">How long does it take to see results from Enterprise SEO?</h3>
              <p className="text-gray-600">Honestly depends, site size, how brutal the competition is, how messed up things were at the start. Most of our clients start seeing solid traffic increases, better rankings, and actual revenue movement between month 3 and month 6.</p>
            </Card>
            
            <Card className="p-6 bg-white/90 backdrop-blur-sm hover:shadow-md transition-all">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Can Enterprise SEO handle multiple domains or international sites?</h3>
              <p className="text-gray-600">Yeah, no problem. We run multi-domain setups, subdomains, hreflang for different countries/languages, all of it, and keep the optimization consistent so you don't lose visibility anywhere.</p>
            </Card>
            
            <Card className="p-6 bg-white/90 backdrop-blur-sm hover:shadow-md transition-all">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Do I need Enterprise SEO if my website already has great content?</h3>
              <p className="text-gray-600">Yes, unfortunately. Amazing content still gets buried if Google can't crawl it properly, if there are technical errors blocking indexing, or if the site architecture makes it hard to understand what's important. We make sure your best stuff actually gets seen and rewarded.</p>
            </Card>
            
            <Card className="p-6 bg-white/90 backdrop-blur-sm hover:shadow-md transition-all">
              <h3 className="text-lg font-bold text-gray-900 mb-2">How often should Enterprise SEO audits be conducted?</h3>
              <p className="text-gray-600">For enterprise-level sites, every 2–3 months is the sweet spot. Things break, new issues appear, Google changes stuff, regular audits keep us ahead of problems and let us keep pushing growth instead of just maintaining.</p>
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
              <p className="text-gray-600">Start today, zero money upfront, no gotchas.</p>
            </Card>
            
            <Card className="p-8 text-center border-2 border-blue-200 hover:border-[#2aaaea] transition-colors">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">You Own Everything</h3>
              <p className="text-gray-600">Every plan, every spreadsheet, every optimized page, it's all yours forever.</p>
            </Card>
            
            <Card className="p-8 text-center border-2 border-blue-200 hover:border-[#2aaaea] transition-colors">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[#2aaaea] to-cyan-400 rounded-full flex items-center justify-center">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Dedicated Team</h3>
              <p className="text-gray-600">You get real people assigned just to your account, not a rotating cast.</p>
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
              <p className="text-gray-600">Heavy research, finding the fastest wins, fixing the worst technical stuff so we have a clean foundation.</p>
            </Card>
            
            <Card className="p-8 bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all">
              <div className="text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-2">
                4-8
              </div>
              <div className="text-xl font-semibold text-gray-900 mb-4">Months</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Gaining Momentum</h3>
              <p className="text-gray-600">We're deep in now, refining pages, scaling content, watching rankings climb, building real momentum.</p>
            </Card>
            
            <Card className="p-8 bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all">
              <div className="text-5xl font-bold bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent mb-2">
                9-12
              </div>
              <div className="text-xl font-semibold text-gray-900 mb-4">Months</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Endless Possibilities</h3>
              <p className="text-gray-600">This is where it gets fun, ongoing optimization, testing bigger ideas, scaling winners hard, and chasing much larger results.</p>
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
              Doesn't matter if you're still growing an SMB or already running a proper enterprise, the client wins, we've had to cover pretty much everything. The next case study could easily be yours.
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
              Pick the services you actually want, stack them however makes sense for your business, and become the one everyone else starts copying.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all group cursor-pointer">
              <div className="w-16 h-16 mb-6 bg-gradient-to-br from-[#2aaaea] to-cyan-400 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <Search className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Paid Search</h3>
              <p className="text-gray-600 mb-4">We run paid search campaigns that actually make money, using the latest tricks without wasting budget.</p>
              <div className="flex items-center text-[#2aaaea] font-medium">
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </Card>
            
            <Card className="p-8 bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all group cursor-pointer">
              <div className="w-16 h-16 mb-6 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Paid Social</h3>
              <p className="text-gray-600 mb-4">Deeper audience connections, better engagement, real results from social, not just likes.</p>
              <div className="flex items-center text-[#2aaaea] font-medium">
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </Card>
            
            <Card className="p-8 bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all group cursor-pointer">
              <div className="w-16 h-16 mb-6 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Performance Creative</h3>
              <p className="text-gray-600 mb-4">Our internal creative team isn't just decent, they've got actual awards sitting on the shelf.</p>
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
            No arm-twisting, no fake urgency. Just a straight-up conversation about what you're trying to hit, how we normally do things, and whether we'd actually be a good fit.
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
