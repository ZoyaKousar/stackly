import Header from '@/components/header'
import Footer from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Check, ArrowRight, MapPin, Search, FileText, Star, TrendingUp, Zap, Shield, Users, Globe, Target, BarChart3, Building2 } from 'lucide-react'
import Link from 'next/link'

export default function MultiLocationSEOPage() {
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
              SEO That Scales Across Every Location.
            </h1>
            <p className="text-xl sm:text-2xl text-white/80">
              We help every single branch or franchise show up properly in its own city or area, while your whole brand still feels like one thing.
            </p>
          </div>
        </div>
      </section>

      {/* How We Optimize Multiple Locations */}
      <section className="relative py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              How We Optimize Multiple Locations
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We spread SEO across all your places so none get left behind. Each branch page gets real work put into local search, Google Maps, and reviews. We find keywords that actually get used there, fix the titles and descriptions, handle the Google Business stuff, and write content that belongs in that spot. Every location builds its own strength, but your brand voice stays exactly the same.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative py-16 sm:py-20 bg-gradient-to-b from-white via-blue-50/30 to-indigo-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Local Keyword Research */}
            <Card className="p-8 bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all">
              <div className="w-16 h-16 mb-6 bg-gradient-to-br from-[#2aaaea] to-cyan-400 rounded-xl flex items-center justify-center">
                <Search className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Local Keyword Research</h3>
              <p className="text-gray-600">We look up what people really search for in each town or neighborhood. Not big general words, the actual stuff locals type when they need something right now. That lets each branch climb the rankings, bring in visitors who mean business, and beat the competition just a few streets away.</p>
            </Card>

            {/* Google Business Profile Optimization */}
            <Card className="p-8 bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all">
              <div className="w-16 h-16 mb-6 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Google Business Profile Optimization</h3>
              <p className="text-gray-600">We claim every profile, verify it, and make it look sharp. Correct details, smart categories, photos that show the real place, and posts to keep it fresh. When profiles are taken care of, they appear much higher in Maps and the local results. People find you quick and actually show up.</p>
            </Card>

            {/* Location-Specific Pages & Content */}
            <Card className="p-8 bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all">
              <div className="w-16 h-16 mb-6 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Location-Specific Pages & Content</h3>
              <p className="text-gray-600">We make a new landing page for each branch, written like it was meant for that exact place. We weave in the right keywords, mention local spots or events, add offers that make sense there. No copy-paste at all. Google sees fresh useful content, and customers feel like the page gets them.</p>
            </Card>

            {/* Reputation & Review Management */}
            <Card className="p-8 bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all">
              <div className="w-16 h-16 mb-6 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Reputation & Review Management</h3>
              <p className="text-gray-600">We check Google and the other review spots regularly, answer every review fast and properly, and make sure the good ones get noticed. Quick real replies build trust fast. That trust helps push local rankings up for every branch.</p>
            </Card>

            {/* NAP Consistency & Local Citations */}
            <Card className="p-8 bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all">
              <div className="w-16 h-16 mb-6 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">NAP Consistency & Local Citations</h3>
              <p className="text-gray-600">We go make sure your name, address and phone number are written the exact same way on every single directory and listing. When it all matches, Google trusts you're a proper business. It keeps every location easy to find whenever someone searches nearby.</p>
            </Card>

            {/* Ongoing Tracking & Growth */}
            <Card className="p-8 bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all">
              <div className="w-16 h-16 mb-6 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Ongoing Tracking & Growth</h3>
              <p className="text-gray-600">We track performance for each location separately—traffic, leads, actual sales. The numbers tell us what's hitting and what needs more work to get the best payoff across all your branches.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Boost Local Visibility Section */}
      <section className="relative py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-[#2aaaea] to-cyan-400 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-10 h-10 text-white" />
                </div>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Boost Local Visibility, Drive Consistent Growth
              </h2>
              <p className="text-lg text-gray-600">
                Multi-location SEO gets each branch noticed right where it should be, in local search, on Maps, through reviews. We tune every one on its own but keep the brand looking clean and consistent. You start getting better traffic, real leads, and money coming in from all your markets. People see you, feel good about you, and pick you wherever they are.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-16 sm:py-20 bg-gradient-to-b from-white via-blue-50/30 to-indigo-50/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Common Questions About Multi-Location SEO
            </h2>
          </div>
          
          <div className="space-y-4">
            <Card className="p-6 bg-white/90 backdrop-blur-sm hover:shadow-md transition-all">
              <h3 className="text-lg font-bold text-gray-900 mb-2">What is multi-location SEO and why is it important?</h3>
              <p className="text-gray-600">It's making sure each branch ranks well in its own local area, search, Maps, reviews, so every place gets found and brings in customers who actually want to come.</p>
            </Card>
            
            <Card className="p-6 bg-white/90 backdrop-blur-sm hover:shadow-md transition-all">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Do all locations need unique pages and content?</h3>
              <p className="text-gray-600">Yes, they really do. Pages made for that specific area rank way better and give people close to the exact details they're searching for.</p>
            </Card>
            
            <Card className="p-6 bg-white/90 backdrop-blur-sm hover:shadow-md transition-all">
              <h3 className="text-lg font-bold text-gray-900 mb-2">How do you manage reviews across multiple locations?</h3>
              <p className="text-gray-600">We keep watch on the main sites, reply right away with real answers, and use the positive ones to show you're reliable. It builds trust quickly and lifts rankings for each spot.</p>
            </Card>
            
            <Card className="p-6 bg-white/90 backdrop-blur-sm hover:shadow-md transition-all">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Can multi-location SEO improve traffic for all locations at once?</h3>
              <p className="text-gray-600">Yes it does. We build up the main brand while pushing hard in each city. Traffic and leads start growing in several places at the same time.</p>
            </Card>
            
            <Card className="p-6 bg-white/90 backdrop-blur-sm hover:shadow-md transition-all">
              <h3 className="text-lg font-bold text-gray-900 mb-2">How do you track performance for multiple locations?</h3>
              <p className="text-gray-600">We pull the data, traffic, leads, actual sales, split out by each branch. The numbers tell us what's hitting and what needs more work to get the best payoff.</p>
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
            Want More? Fine, Twist Our Arm.
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
              <p className="text-gray-600">Get started today, no cash needed to begin.</p>
            </Card>
            
            <Card className="p-8 text-center border-2 border-blue-200 hover:border-[#2aaaea] transition-colors">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">You Own Everything</h3>
              <p className="text-gray-600">Everything we do or make belongs to you completely.</p>
            </Card>
            
            <Card className="p-8 text-center border-2 border-blue-200 hover:border-[#2aaaea] transition-colors">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[#2aaaea] to-cyan-400 rounded-full flex items-center justify-center">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Dedicated Team</h3>
              <p className="text-gray-600">We assign people who stick with your account and fight for your results.</p>
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
              <p className="text-gray-600">We jump in, research everything, spot the easy wins, and get your site plus branches fixed up right.</p>
            </Card>
            
            <Card className="p-8 bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all">
              <div className="text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-2">
                4-8
              </div>
              <div className="text-xl font-semibold text-gray-900 mb-4">Months</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Gaining Momentum</h3>
              <p className="text-gray-600">We keep improving the good stuff, fix the weak spots, and set up for real steady growth.</p>
            </Card>
            
            <Card className="p-8 bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all">
              <div className="text-5xl font-bold bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent mb-2">
                9-12
              </div>
              <div className="text-xl font-semibold text-gray-900 mb-4">Months</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Endless Possibilities</h3>
              <p className="text-gray-600">We keep working, find new ways to grow, and push so the results keep getting bigger.</p>
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
              Whether you've got a few local spots or a big chain across cities, we've helped businesses like yours get solid wins. You could be the next one.
            </p>
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
              Choose the services you need, put them together your way, make your business the one others want to be like.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all group cursor-pointer">
              <div className="w-16 h-16 mb-6 bg-gradient-to-br from-[#2aaaea] to-cyan-400 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <Search className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Paid Search</h3>
              <p className="text-gray-600 mb-4">Get found fast with paid ads done smart.</p>
              <Link href="/services/paid-search" className="flex items-center text-[#2aaaea] font-medium">
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Card>
            
            <Card className="p-8 bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all group cursor-pointer">
              <div className="w-16 h-16 mb-6 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Paid Social</h3>
              <p className="text-gray-600 mb-4">Make real connections and get people engaged on social.</p>
              <Link href="/services/paid-social" className="flex items-center text-[#2aaaea] font-medium">
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Card>
            
            <Card className="p-8 bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all group cursor-pointer">
              <div className="w-16 h-16 mb-6 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Performance Creative</h3>
              <p className="text-gray-600 mb-4">Our creative people make things that actually win awards.</p>
              <Link href="/services/performance-creative" className="flex items-center text-[#2aaaea] font-medium">
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
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
            No hard sell. Just a normal chat about what you're after, how we work, and if it feels like a good match.
          </p>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-[#2aaaea] via-[#2aaaea] to-[#2aaaea] hover:from-[#2599d4] hover:via-[#2599d4] hover:to-[#2599d4] text-white border-0 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 rounded-full px-8 py-6 font-semibold"
          >
            Let's Talk About Your Goals.
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
