import Header from '@/components/header'
import Hero from '@/components/hero'
import Services from '@/components/services'
import Advantages from '@/components/advantages'
import Industries from '@/components/industries'
import FAQ from '@/components/faq'
import CTA from '@/components/cta-section'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <Services />
      <Advantages />
      <Industries />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  )
}
