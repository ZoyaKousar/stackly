import Header from '@/components/header'
import Footer from '@/components/footer'
import { Card } from '@/components/ui/card'
import { Award, Users, Handshake, Eye, Lightbulb, Zap, Target, Clock, TrendingUp, Shield } from 'lucide-react'

export default function AboutUsPage() {
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
              Award-Winning Digital Advertising Experts
            </h1>
            <p className="text-xl sm:text-2xl text-white/80">
              We started back in 2010, nothing fancy, just good honest work. Over the years we've quietly grown and now look after more than ten million in ad spend for people who actually like working with us.
            </p>
          </div>
        </div>
      </section>

      {/* Black Propeller Section */}
      <section className="relative py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-[#2aaaea] to-cyan-400 rounded-xl flex items-center justify-center">
                  <Award className="w-10 h-10 text-white" />
                </div>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Black Propeller
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                We're proper certified partners with Google, Microsoft Advertising, and Meta. It means we get all the early access, updates, and little tricks before most agencies even hear about them.
              </p>
              <p className="text-lg text-gray-600">
                We don't chase shiny awards or big talk. What matters is whether your money comes back bigger than you spent. We live for that number, ROI. Every decision, every tweak, every late-night adjustment is about making your advertising actually pay for itself and then some.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="relative py-16 sm:py-20 bg-gradient-to-b from-white via-blue-50/30 to-indigo-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* A Team You Can Really Count On */}
            <Card className="p-8 bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all">
              <div className="w-16 h-16 mb-6 bg-gradient-to-br from-[#2aaaea] to-cyan-400 rounded-xl flex items-center justify-center">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">A Team You Can Really Count On</h3>
              <p className="text-gray-600">You're not a username and a monthly invoice to us. You get your own Account Manager plus a proper paid-search person who will sit with you until they really get what your business does, who buys from you, and what good looks like on a good month. Then we roll our sleeves up and make the campaigns work hard for you.</p>
            </Card>

            {/* Partnerships Built Around What You Need */}
            <Card className="p-8 bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all">
              <div className="w-16 h-16 mb-6 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                <Handshake className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Partnerships Built Around What You Need</h3>
              <p className="text-gray-600">Long relationships usually give the best results, we both know that. But life happens. Budgets tighten, plans change. So whether you want to lock in for six months or keep it month-to-month so you can breathe easy, we'll meet you where you're at and make it feel fair.</p>
            </Card>

            {/* Total Openness Every Step of the Way */}
            <Card className="p-8 bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all">
              <div className="w-16 h-16 mb-6 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Total Openness Every Step of the Way</h3>
              <p className="text-gray-600">You should never have to guess if the ads are working or where the budget vanished. We send plain-English weekly reports that actually make sense, and we do a proper monthly call where we walk through what's happening, what's working, what's not, and what we're doing next. No jargon, no hiding.</p>
            </Card>

            {/* Your Ideas Actually Matter Here */}
            <Card className="p-8 bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all">
              <div className="w-16 h-16 mb-6 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Your Ideas Actually Matter Here</h3>
              <p className="text-gray-600">We know PPC inside out, but you know your customers, your product quirks, your brand voice. When you say "that doesn't sound like us" or "our people respond better to this kind of offer", we listen hard and change course. It's your business, we're just the ones who help run the ads.</p>
            </Card>

            {/* The Best Tools Plus Real People Behind Them */}
            <Card className="p-8 bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all">
              <div className="w-16 h-16 mb-6 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">The Best Tools Plus Real People Behind Them</h3>
              <p className="text-gray-600">We use good software, tracking setups, automation where it saves time, research tools that save us guessing. But none of that replaces someone who actually thinks about your account like it's their own money on the line.</p>
            </Card>

            {/* We Never Stop Learning or Improving */}
            <Card className="p-8 bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all">
              <div className="w-16 h-16 mb-6 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">We Never Stop Learning or Improving</h3>
              <p className="text-gray-600">The platforms change every few weeks. Features appear, rules shift, audiences behave differently. If we're not keeping up, your results suffer. So we read, test, watch, experiment, whatever it takes to keep your campaigns ahead instead of playing catch-up.</p>
            </Card>

            {/* Creative Work That Actually Makes Money */}
            <Card className="p-8 bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all">
              <div className="w-16 h-16 mb-6 bg-gradient-to-br from-pink-500 to-rose-500 rounded-xl flex items-center justify-center">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Creative Work That Actually Makes Money</h3>
              <p className="text-gray-600">Boring safe ads usually get boring safe results. We keep trying new copy angles, different images, fresh calls-to-action, weird little tests most people skip. Sometimes they flop. Sometimes they double the return. That's the game.</p>
            </Card>

            {/* Everything Working Together */}
            <Card className="p-8 bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all">
              <div className="w-16 h-16 mb-6 bg-gradient-to-br from-violet-500 to-purple-500 rounded-xl flex items-center justify-center">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Everything Working Together</h3>
              <p className="text-gray-600">Paid search on its own is fine. Paid search plus consistent messaging on social and display is usually much better. We help pull it all together so someone sees your ad on Google, then your post on Facebook, then your banner somewhere else, and it all feels like the same company talking to them.</p>
            </Card>

            {/* Take Back Your Time */}
            <Card className="p-8 bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all">
              <div className="w-16 h-16 mb-6 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Take Back Your Time</h3>
              <p className="text-gray-600">Running ads properly is a second job: checking stats, fixing broken tracking, killing underperformers, finding new winners. We do all that so you don't have to. You get the good stuff, clear numbers, simple recommendations, more hours in your week.</p>
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
            Let's Just Talk Honestly
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            No slick pitch, no fake urgency. If you're curious, send a message. We'll have a normal conversation about what you're trying to do, how we usually help, and whether it sounds like something worth trying together. No pressure either way. Talk soon?
          </p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
