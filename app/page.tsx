import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Features from '@/components/Features'
import Portfolio from '@/components/Portfolio'
import Pricing from '@/components/Pricing'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <Features />
      <Portfolio />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  )
} 