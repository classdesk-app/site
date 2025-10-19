import HeroSection from "@/components/hero-section"
import { Background } from "@/components/home/background"
import { FeaturesSection } from "@/components/home/features-section"
import { WaitlistSection } from "@/components/home/waitlist-section"
import { Footer } from "@/components/home/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen w-full bg-white dark:bg-black relative">
      <Background />

      <main className="relative z-10 text-gray-900 dark:text-white">
        <HeroSection />
        <FeaturesSection />
        <WaitlistSection />
      </main>

      <Footer />
    </div>
  )
}
