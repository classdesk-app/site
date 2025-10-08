import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product Roadmap - Classdesk College Management System",
  description: "Explore Classdesk's product roadmap for college management software. Upcoming features for NAAC/NBA accreditation, AI-powered insights, multi-campus support, and university ERP integrations.",
  keywords: [
    "college management roadmap",
    "NAAC accreditation features",
    "NBA accreditation tools",
    "university software updates",
    "education management future",
    "college ERP roadmap",
    "university administration updates"
  ],
  openGraph: {
    title: "Product Roadmap - Classdesk",
    description: "See what's coming next for Classdesk college management platform. NAAC/NBA support, AI features, and multi-campus management.",
    url: "https://classdesk.app/roadmap",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Product Roadmap - Classdesk",
    description: "See what's coming next for Classdesk college management platform.",
  },
  alternates: {
    canonical: "/roadmap",
  },
};

export default function RoadmapLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

