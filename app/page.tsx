import Header from '@/components/header'
import Hero from '@/components/hero'
import Services from '@/components/services'
import Advantages from '@/components/advantages'
import Industries from '@/components/industries'
import CaseStudies from '@/components/case-studies'
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
      <CaseStudies />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  )
}
