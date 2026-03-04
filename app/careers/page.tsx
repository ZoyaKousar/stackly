import Header from '@/components/header'
import Footer from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Heart, Trophy, Shield, Target, Zap, Smile, Briefcase, Calendar, DollarSign, Users, Check } from 'lucide-react'

export default function CareersPage() {
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
              Join Our Team
            </h1>
            <p className="text-xl sm:text-2xl text-white/80">
              We've built a crew of talented folks who all click on the same wavelength: high creativity, real ownership of our work, and that drive to come out on top.
            </p>
          </div>
        </div>
      </section>

      {/* Love Coming to Work Every Day */}
      <section className="relative py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-[#2aaaea] to-cyan-400 rounded-xl flex items-center justify-center">
                  <Heart className="w-10 h-10 text-white" />
                </div>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Love Coming to Work Every Day
              </h2>
              <p className="text-lg text-gray-600">
                Picture actually looking forward to Mondays, that's the vibe we're going for here. We put in serious effort, but we make sure there's plenty of laughs and good energy along the way.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Core Values */}
      <section className="relative py-16 sm:py-20 bg-gradient-to-b from-white via-blue-50/30 to-indigo-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="p-6 bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all">
              <div className="w-12 h-12 mb-4 bg-gradient-to-br from-[#2aaaea] to-cyan-400 rounded-lg flex items-center justify-center">
                <Trophy className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Competitive</h3>
              <p className="text-gray-600">We love winning, plain and simple.</p>
            </Card>

            <Card className="p-6 bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all">
              <div className="w-12 h-12 mb-4 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Honest</h3>
              <p className="text-gray-600">Trust is non-negotiable.</p>
            </Card>

            <Card className="p-6 bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all">
              <div className="w-12 h-12 mb-4 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Accountable</h3>
              <p className="text-gray-600">We own our results, no excuses.</p>
            </Card>

            <Card className="p-6 bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all">
              <div className="w-12 h-12 mb-4 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Motivated</h3>
              <p className="text-gray-600">We're wired to push forward.</p>
            </Card>

            <Card className="p-6 bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all">
              <div className="w-12 h-12 mb-4 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Passionate</h3>
              <p className="text-gray-600">This work matters to us.</p>
            </Card>

            <Card className="p-6 bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all">
              <div className="w-12 h-12 mb-4 bg-gradient-to-br from-pink-500 to-rose-500 rounded-lg flex items-center justify-center">
                <Smile className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Sense of Humor</h3>
              <p className="text-gray-600">You've got to be able to crack a smile when things get intense.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Perks & Solid Benefits */}
      <section className="relative py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Company Perks & Solid Benefits
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="p-6 bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Medical Insurance</h3>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Dental Insurance</h3>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Vision Insurance</h3>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Life Insurance</h3>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">401K Plans</h3>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Flexible Paid Time Off</h3>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">10 Paid Holidays</h3>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Bonus Opportunities</h3>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">FREE Ping Pong Lessons</h3>
                  <p className="text-sm text-gray-500 mt-1">Yes, really, we take breaks seriously</p>
                </div>
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
            See If We're the Right Fit for You
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            No big sales pitch or awkward pressure. Just a straightforward chat about what you're looking for in your next role, what we do here, and whether it feels like a match. Reach out whenever you're ready, we'd love to hear from you.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
