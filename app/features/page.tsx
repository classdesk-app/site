import type { Metadata } from "next";
import { Background } from "@/components/home/background";
import { AdvancedFeaturesSection } from "@/components/home/advanced-features-section";
import { Footer } from "@/components/home/footer";

export const metadata: Metadata = {
  title: "Classdesk Features - Simplified College Management System",
  description: "Explore Classdesk's comprehensive features: attendance management, marksheet generation, timetable scheduling, parent communication, analytics, and role management for streamlined operations.",
  keywords: [
    "classdesk features",
    "college management system features",
    "school management system features",
    "attendance management system",
    "marksheet generation software",
    "timetable scheduling software",
    "parent communication system",
    "academic session planning",
    "college analytics dashboard",
    "university ERP features",
    "student information system features",
    "faculty management system",
    "academic reporting tools",
    "college automation features",
    "educational technology features"
  ],
  openGraph: {
    title: "Classdesk Features - Simplified College Management System",
    description: "Discover all the powerful features that make Classdesk the ideal solution for streamlined college management and daily operations.",
    url: "https://classdesk.app/features",
    type: "website",
  },
  alternates: {
    canonical: "/features",
  },
};

export default function FeaturesPage() {
  return (
    <div className="min-h-screen w-full bg-white dark:bg-black relative">
      <Background />
      
      <main className="relative z-10 text-gray-900 dark:text-white">
        <AdvancedFeaturesSection />
      </main>

      <Footer />
    </div>
  );
}
