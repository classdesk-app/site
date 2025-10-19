"use client"

import { Header } from "@/components/header"
import { Background } from "@/components/home/background"
import { HeroSection } from "@/components/roadmap/hero-section"
import { RoadmapTimeline } from "@/components/roadmap/roadmap-timeline"
import { CTASection } from "@/components/roadmap/cta-section"
import { Footer } from "@/components/home/footer"

export default function RoadmapPage() {
  return (
    <div className="min-h-screen w-full bg-white dark:bg-black relative">
      <Background />
      <Header />

      <main className="relative z-10 pt-24 pb-20 px-6 lg:px-8 text-gray-900 dark:text-white">
        <div className="mx-auto max-w-5xl">
          <HeroSection />
          <RoadmapTimeline />
          <CTASection />
        </div>
      </main>

      <Footer />
    </div>
  )
}
