import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import HeroSection from '@/sections/HeroSection'
import ProductDemoSection from '@/sections/ProductDemoSection'
import ProblemSection from '@/sections/ProblemSection'
import FeaturesSection from '@/sections/FeaturesSection'
import MobileExperienceSection from '@/sections/MobileExperienceSection'
import AIFeaturesSection from '@/sections/AIFeaturesSection'
import TestimonialsSection from '@/sections/TestimonialsSection'
import SchoolsSection from '@/sections/SchoolsSection'
import SecuritySection from '@/sections/SecuritySection'
import FAQSection from '@/sections/FAQSection'
import FinalCTASection from '@/sections/FinalCTASection'

export default function Home() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <ProductDemoSection />
      <ProblemSection />
      <FeaturesSection />
      <MobileExperienceSection />
      <AIFeaturesSection />
      <TestimonialsSection />
      <SchoolsSection />
      <SecuritySection />
      <FAQSection />
      <FinalCTASection />
      <Footer />
    </main>
  )
}
