import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Classdesk - College Management System for NAAC & NBA Accreditation",
  description: "Streamline NAAC & NBA accreditation process with Classdesk. Complete college management software for attendance tracking, marksheet generation, session planning, and university administration. Perfect for affiliated colleges and deemed universities.",
  keywords: [
    "college management system",
    "university management software",
    "NAAC accreditation software",
    "NBA accreditation process",
    "student attendance management",
    "marksheet generation system",
    "academic session planning",
    "college ERP software",
    "university administration",
    "affiliated college management",
    "deemed university software",
    "education management system",
    "college automation software",
    "student information system",
    "academic records management",
    "institutional accreditation tools",
    "college attendance tracking",
    "online marksheet system",
    "timetable management",
    "faculty management system"
  ],
  authors: [{ name: "Classdesk" }],
  creator: "Classdesk",
  publisher: "Classdesk",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://classdesk.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Classdesk - College Management System for NAAC & NBA Accreditation",
    description: "Streamline NAAC & NBA accreditation process with Classdesk. Complete college management software for attendance, marksheets, and session planning.",
    url: "https://classdesk.app",
    siteName: "Classdesk",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Classdesk - College Management Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Classdesk - College Management System for NAAC & NBA Accreditation",
    description: "Streamline NAAC & NBA accreditation with complete college management software. Attendance, marksheets, session planning & more.",
    images: ["/twitter-image.png"],
    creator: "@classdesk",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your verification codes here when you have them
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://classdesk.app/#organization",
        "name": "Classdesk",
        "url": "https://classdesk.app",
        "logo": {
          "@type": "ImageObject",
          "url": "https://classdesk.app/logo.png"
        },
        "description": "All-in-one college management platform for NAAC and NBA accreditation",
        "contactPoint": {
          "@type": "ContactPoint",
          "email": "hello@classdesk.app",
          "contactType": "Customer Service"
        }
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://classdesk.app/#software",
        "name": "Classdesk",
        "applicationCategory": "EducationalApplication",
        "operatingSystem": "Web",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "INR"
        },
        "description": "Complete college management system for NAAC & NBA accreditation process. Manage attendance, marksheets, sessions, and university administration.",
        "featureList": [
          "NAAC Accreditation Support",
          "NBA Accreditation Process Management",
          "Student Attendance Tracking",
          "Marksheet Generation",
          "Academic Session Planning",
          "University ERP Integration",
          "Role-based Access Control",
          "Analytics and Insights"
        ],
        "audience": {
          "@type": "EducationalAudience",
          "educationalRole": ["College Administrator", "University Staff", "Faculty Member"]
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://classdesk.app/#website",
        "url": "https://classdesk.app",
        "name": "Classdesk",
        "description": "College management system for NAAC and NBA accreditation",
        "publisher": {
          "@id": "https://classdesk.app/#organization"
        },
        "inLanguage": "en-IN"
      }
    ]
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased`}
      >
        <ThemeProvider>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
