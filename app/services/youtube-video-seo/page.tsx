import Header from '@/components/header'
import Footer from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Check, ArrowRight, Search, FileText, Star, TrendingUp, Zap, Shield, Users, Globe, Target, BarChart3, Video, PlayCircle, Image as ImageIcon } from 'lucide-react'
import Link from 'next/link'

export default function YouTubeVideoSEOPage() {
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
              YouTube & Video SEO That Works.
            </h1>
            <p className="text-xl sm:text-2xl text-white/80">
              We sort your videos out so the people who actually want to see them find them easy, watch more of it, and end up doing what you need, like subscribing, clicking through, or buying.
            </p>
          </div>
        </div>
      </section>

      {/* Our Formula for Video Success */}
      <section className="relative py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Formula for Video Success
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Uploading and forgetting doesn't work anymore. We get in there and do what matters: check what your audience really searches for, write titles and descriptions that make them click, add decent captions, create thumbnails that actually stop the scroll, put videos in playlists that keep them going, and watch the stats to see what's moving the needle.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative py-16 sm:py-20 bg-gradient-to-b from-white via-blue-50/30 to-indigo-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Keyword Research for Video */}
            <Card className="p-8 bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all">
              <div className="w-16 h-16 mb-6 bg-gradient-to-br from-[#2aaaea] to-cyan-400 rounded-xl flex items-center justify-center">
                <Search className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Keyword Research for Video</h3>
              <p className="text-gray-600">We see exactly what phrases your viewers punch into YouTube. We work those words into titles, descriptions and tags the natural way so your video turns up when they're looking.</p>
            </Card>

            {/* Video Metadata Optimization */}
            <Card className="p-8 bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all">
              <div className="w-16 h-16 mb-6 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Video Metadata Optimization</h3>
              <p className="text-gray-600">We make titles that beg to be clicked, descriptions that hook and explain, tags that cover the useful ground, and pick categories that fit. When this part is solid, YouTube starts showing your video to people who'll actually stick around and engage.</p>
            </Card>

            {/* Thumbnail & Visual Strategy */}
            <Card className="p-8 bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all">
              <div className="w-16 h-16 mb-6 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                <ImageIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Thumbnail & Visual Strategy</h3>
              <p className="text-gray-600">We build thumbnails that jump out, branded, with real faces or big clear text that says "this is worth your time". We also make sure the opening seconds of the video look sharp so nobody swipes away fast. Watch time shoots up and the algorithm notices.</p>
            </Card>

            {/* Transcripts & Captions */}
            <Card className="p-8 bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all">
              <div className="w-16 h-16 mb-6 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Transcripts & Captions</h3>
              <p className="text-gray-600">We put proper captions and full transcripts in. It lets more people watch (deaf folks, people in noisy places, non-native speakers), and gives YouTube way more text to read so it ranks you higher. Simple change, big difference in getting discovered.</p>
            </Card>

            {/* Playlist & Channel Optimization */}
            <Card className="p-8 bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all">
              <div className="w-16 h-16 mb-6 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                <PlayCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Playlist & Channel Optimization</h3>
              <p className="text-gray-600">We group videos into playlists that flow nicely so one video leads straight to the next. We tidy the channel page, decent banner, logical sections, and are easy to navigate. Viewers stay longer, total watch hours climb, and your whole channel looks stronger to YouTube.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Maximize Views Section */}
      <section className="relative py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-[#2aaaea] to-cyan-400 rounded-xl flex items-center justify-center">
                  <Video className="w-10 h-10 text-white" />
                </div>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Maximize Views, Engagement, & Conversions
              </h2>
              <p className="text-lg text-gray-600">
                It's not about fake views or empty likes. It's about getting your videos to the right eyes, keeping them watching till the end, and getting them to do something useful, subscribe, check your website, make a purchase. We tune every little thing so you actually get more views, better retention, and real business coming from YouTube and beyond.
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
              Common Questions About Video SEO
            </h2>
          </div>
          
          <div className="space-y-4">
            <Card className="p-6 bg-white/90 backdrop-blur-sm hover:shadow-md transition-all">
              <h3 className="text-lg font-bold text-gray-900 mb-2">What is video SEO and why is it important?</h3>
              <p className="text-gray-600">It's making your videos show up and rank properly on YouTube search and suggestions so you pull real viewers, get good engagement, and see actual results for your business or channel.</p>
            </Card>
            
            <Card className="p-6 bg-white/90 backdrop-blur-sm hover:shadow-md transition-all">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Do I need video SEO if I already upload videos?</h3>
              <p className="text-gray-600">Yes, for sure. Without it your videos just sink and never reach the people who'd actually enjoy them or act on them.</p>
            </Card>
            
            <Card className="p-6 bg-white/90 backdrop-blur-sm hover:shadow-md transition-all">
              <h3 className="text-lg font-bold text-gray-900 mb-2">How long does it take to see results from video SEO?</h3>
              <p className="text-gray-600">Quick stuff like fixing titles, thumbnails and descriptions can bring extra views in a week or two. Getting solid rankings and consistent growth usually takes Two to Three months of proper work.</p>
            </Card>
            
            <Card className="p-6 bg-white/90 backdrop-blur-sm hover:shadow-md transition-all">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Does video SEO apply only to YouTube?</h3>
              <p className="text-gray-600">No chance. The same changes help videos show in Google search, when embedded on sites, and on other platforms. You end up getting seen in more places.</p>
            </Card>
            
            <Card className="p-6 bg-white/90 backdrop-blur-sm hover:shadow-md transition-all">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Can existing videos be optimized?</h3>
              <p className="text-gray-600">Yes, easily. We take your older videos, update the titles, rewrite descriptions, swap thumbnails, fix captions, shuffle playlists around, give them a little push, most start pulling way more views and longer watches.</p>
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
              <p className="text-gray-600">Get going today, no money needed upfront.</p>
            </Card>
            
            <Card className="p-8 text-center border-2 border-blue-200 hover:border-[#2aaaea] transition-colors">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">You Own Everything</h3>
              <p className="text-gray-600">All of it, strategies, files, results, is yours completely.</p>
            </Card>
            
            <Card className="p-8 text-center border-2 border-blue-200 hover:border-[#2aaaea] transition-colors">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[#2aaaea] to-cyan-400 rounded-full flex items-center justify-center">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Dedicated Team</h3>
              <p className="text-gray-600">Our guys stay on your channel and actually want to see your numbers go up.</p>
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
              <p className="text-gray-600">We dig into your niche, grab the easy wins, optimize videos and channel setup.</p>
            </Card>
            
            <Card className="p-8 bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all">
              <div className="text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-2">
                4-8
              </div>
              <div className="text-xl font-semibold text-gray-900 mb-4">Months</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Gaining Momentum</h3>
              <p className="text-gray-600">We keep improving, building more watch time, and growing the channel steadily.</p>
            </Card>
            
            <Card className="p-8 bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all">
              <div className="text-5xl font-bold bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent mb-2">
                9-12
              </div>
              <div className="text-xl font-semibold text-gray-900 mb-4">Months</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Endless Possibilities</h3>
              <p className="text-gray-600">We push on, scale what's good, go for bigger growth.</p>
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
              Whether you're a small creator or a brand with multiple channels, we've helped people like you get real growth. You could be up next.
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
              Pick what you need from us, mix it how you want, make your videos the ones people actually find and watch.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all group cursor-pointer">
              <div className="w-16 h-16 mb-6 bg-gradient-to-br from-[#2aaaea] to-cyan-400 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <Search className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Paid Search</h3>
              <p className="text-gray-600 mb-4">Get eyes on your content quickly with paid ads that work.</p>
              <Link href="/services/paid-search" className="flex items-center text-[#2aaaea] font-medium">
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Card>
            
            <Card className="p-8 bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all group cursor-pointer">
              <div className="w-16 h-16 mb-6 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Paid Social</h3>
              <p className="text-gray-600 mb-4">Grow real followers and buzz on social.</p>
              <Link href="/services/paid-social" className="flex items-center text-[#2aaaea] font-medium">
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Card>
            
            <Card className="p-8 bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all group cursor-pointer">
              <div className="w-16 h-16 mb-6 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Performance Creative</h3>
              <p className="text-gray-600 mb-4">Our creative people make stuff that actually gets awards.</p>
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
            No pressure at all. Just talk about what you're trying to do, how we do things, see if it feels like a match.
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
