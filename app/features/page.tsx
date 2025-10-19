import type { Metadata } from "next";
import { Background } from "@/components/home/background";
import { AdvancedFeaturesSection } from "@/components/home/advanced-features-section";
import { Footer } from "@/components/home/footer";

export const metadata: Metadata = {
  title: "Classdesk Features - Complete College Management System for NAAC & NBA",
  description: "Explore Classdesk's comprehensive features: attendance management, marksheet generation, session planning, analytics, and role management for NAAC & NBA accreditation.",
  keywords: [
    "classdesk features",
    "college management system features",
    "NAAC accreditation software features",
    "NBA accreditation platform features",
    "attendance management system",
    "marksheet generation software",
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
    title: "Classdesk Features - Complete College Management System",
    description: "Discover all the powerful features that make Classdesk the ideal solution for college management and accreditation.",
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
