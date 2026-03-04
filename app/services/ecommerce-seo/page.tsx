import Header from '@/components/header'
import Footer from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Check, ArrowRight, Search, FileText, Star, TrendingUp, Zap, Shield, Users, Globe, Target, BarChart3, ShoppingCart, Smartphone } from 'lucide-react'
import Link from 'next/link'

export default function EcommerceSEOPage() {
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
              Ecommerce SEO That Drives Sales.
            </h1>
            <p className="text-xl sm:text-2xl text-white/80">
              We dig into your store page by page so it shows up higher for the right searches and actually gets people adding stuff to cart and paying.
            </p>
          </div>
        </div>
      </section>

      {/* How We Drive More Sales */}
      <section className="relative py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              How We Drive More Sales
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We make your whole shop work for sales, not just rankings. We chase keywords that bring buyers, clean up product pages, fix whatever's slowing things down technically, and add content that helps people decide to buy. More visitors show up, more stick around, more hit checkout.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative py-16 sm:py-20 bg-gradient-to-b from-white via-blue-50/30 to-indigo-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Keyword Research & Product Targeting */}
            <Card className="p-8 bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all">
              <div className="w-16 h-16 mb-6 bg-gradient-to-br from-[#2aaaea] to-cyan-400 rounded-xl flex items-center justify-center">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Keyword Research & Product Targeting</h3>
              <p className="text-gray-600">We look for the searches that really end in purchases for your kind of products. We find the gaps where competitors aren't showing up strong and target those exact words so you get serious shoppers, not just people browsing.</p>
            </Card>

            {/* On-Page Optimization */}
            <Card className="p-8 bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all">
              <div className="w-16 h-16 mb-6 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">On-Page Optimization</h3>
              <p className="text-gray-600">We go over every product page, every category, titles, headings, image tags. Google understands what you're selling quicker, the pages feel better to use, and you start appearing higher when people search.</p>
            </Card>

            {/* Technical SEO for Ecommerce */}
            <Card className="p-8 bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all">
              <div className="w-16 h-16 mb-6 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                <Smartphone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Technical SEO for Ecommerce</h3>
              <p className="text-gray-600">We make pages load fast, work smoothly on phones, let Google crawl everything easily, and put the right product data in place. Your items show up correctly in search and nobody leaves because the site's slow or broken on mobile.</p>
            </Card>

            {/* Content Strategy & Blogging */}
            <Card className="p-8 bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all">
              <div className="w-16 h-16 mb-6 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center">
                <Search className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Content Strategy & Blogging</h3>
              <p className="text-gray-600">We get more people coming in with blog posts, guides, how-to pieces, and articles that actually help. It answers questions, builds confidence, and makes your store feel like the smartest place to buy from.</p>
            </Card>

            {/* Conversion Optimization */}
            <Card className="p-8 bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all">
              <div className="w-16 h-16 mb-6 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Conversion Optimization</h3>
              <p className="text-gray-600">We mix SEO fixes with things that push sales, like better buy buttons, descriptions that make sense, navigation that doesn't confuse anyone. People land on the site, like what they see, and buy more often.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Search, Click, Buy Section */}
      <section className="relative py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-[#2aaaea] to-cyan-400 rounded-xl flex items-center justify-center">
                  <ShoppingCart className="w-10 h-10 text-white" />
                </div>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Search, Click, Buy: Ecommerce SEO That Works
              </h2>
              <p className="text-lg text-gray-600">
                Ecommerce SEO gets your products in front of people who want them right now. You end up with higher positions, pages that sell better, and a site people enjoy using, so traffic goes up, more people buy, revenue grows steady. We keep working it so you don't drop back and keep grabbing sales every season.
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
              Common Questions About Ecommerce SEO
            </h2>
          </div>
          
          <div className="space-y-4">
            <Card className="p-6 bg-white/90 backdrop-blur-sm hover:shadow-md transition-all">
              <h3 className="text-lg font-bold text-gray-900 mb-2">How long does it take to see results from Ecommerce SEO?</h3>
              <p className="text-gray-600">Usually you'll see traffic and rankings pick up in 3 to 6 months. Bigger stores or really competitive niches take a little longer, but it keeps improving if we stay consistent.</p>
            </Card>
            
            <Card className="p-6 bg-white/90 backdrop-blur-sm hover:shadow-md transition-all">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Can you optimize product pages for hundreds of items?</h3>
              <p className="text-gray-600">Yeah, we handle big catalogs all the time. We use smart ways to scale so every single page gets proper attention without it taking months.</p>
            </Card>
            
            <Card className="p-6 bg-white/90 backdrop-blur-sm hover:shadow-md transition-all">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Will Ecommerce SEO work for new online stores?</h3>
              <p className="text-gray-600">Works great for new ones actually. Get the keywords, tech basics, and product pages right from the start and you can see movement pretty quick.</p>
            </Card>
            
            <Card className="p-6 bg-white/90 backdrop-blur-sm hover:shadow-md transition-all">
              <h3 className="text-lg font-bold text-gray-900 mb-2">How does Ecommerce SEO impact sales?</h3>
              <p className="text-gray-600">It brings people who are already looking to buy, lands them on good product pages, and makes the whole shopping experience easier. You get more orders, people buy bigger amounts, total money coming in goes up.</p>
            </Card>
            
            <Card className="p-6 bg-white/90 backdrop-blur-sm hover:shadow-md transition-all">
              <h3 className="text-lg font-bold text-gray-900 mb-2">How do you handle SEO for seasonal or limited-time products?</h3>
              <p className="text-gray-600">We plan early, pick keywords before the rush, write posts or pages that fit the timing, update titles and descriptions so those products rank high exactly when people start searching hard.</p>
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
              <p className="text-gray-600">Start right now, no money needed to kick off.</p>
            </Card>
            
            <Card className="p-8 text-center border-2 border-blue-200 hover:border-[#2aaaea] transition-colors">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">You Own Everything</h3>
              <p className="text-gray-600">Whatever we do, whatever we create, it's all yours, no catch.</p>
            </Card>
            
            <Card className="p-8 text-center border-2 border-blue-200 hover:border-[#2aaaea] transition-colors">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[#2aaaea] to-cyan-400 rounded-full flex items-center justify-center">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Dedicated Team</h3>
              <p className="text-gray-600">We put people in your store who only focus on making you money.</p>
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
              <p className="text-gray-600">We research everything properly, spot the easy improvements, get your store fixed and move.</p>
            </Card>
            
            <Card className="p-8 bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all">
              <div className="text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-2">
                4-8
              </div>
              <div className="text-xl font-semibold text-gray-900 mb-4">Months</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Gaining Momentum</h3>
              <p className="text-gray-600">We keep building on what's working, tweak the rest, set things up for real ongoing traffic and sales.</p>
            </Card>
            
            <Card className="p-8 bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all">
              <div className="text-5xl font-bold bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent mb-2">
                9-12
              </div>
              <div className="text-xl font-semibold text-gray-900 mb-4">Months</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Endless Possibilities</h3>
              <p className="text-gray-600">We don't stop, keep finding new ways, keep scaling, keep making the numbers bigger.</p>
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
              Small ecommerce guys or bigger online brands, we've helped both make serious money. Your store could be the next story.
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
              Choose the bits you want from us, put them together how you like, make your shop the one others copy.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all group cursor-pointer">
              <div className="w-16 h-16 mb-6 bg-gradient-to-br from-[#2aaaea] to-cyan-400 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <Search className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Paid Search</h3>
              <p className="text-gray-600 mb-4">Get buyers fast with paid ads that actually work.</p>
              <Link href="/services/paid-search" className="flex items-center text-[#2aaaea] font-medium">
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Card>
            
            <Card className="p-8 bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all group cursor-pointer">
              <div className="w-16 h-16 mb-6 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Paid Social</h3>
              <p className="text-gray-600 mb-4">Get people liking, sharing, and buying from your social pages.</p>
              <Link href="/services/paid-social" className="flex items-center text-[#2aaaea] font-medium">
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Card>
            
            <Card className="p-8 bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all group cursor-pointer">
              <div className="w-16 h-16 mb-6 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Performance Creative</h3>
              <p className="text-gray-600 mb-4">Our creative team makes ads and visuals that win awards.</p>
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
            No pressure, no nonsense. Just talk about what you want, how we work, see if it feels right.
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
