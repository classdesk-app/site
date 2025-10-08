import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/header";

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
    "classdesk",
    "classdesk app",
    "classdesk software",
    "classdesk college management",
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
    "faculty management system",
    "college management platform",
    "university ERP system",
    "academic management software",
    "student management system",
    "college administration software",
    "educational technology",
    "campus management system",
    "academic planning software",
    "student tracking system",
    "college analytics platform",
    "university dashboard",
    "academic reporting system",
    "college data management",
    "educational institution software",
    "campus automation",
    "academic workflow management"
  ],
  authors: [{ name: "Classdesk Team", url: "https://classdesk.app" }],
  creator: "Classdesk",
  publisher: "Classdesk",
  applicationName: "Classdesk",
  category: "Education Technology",
  classification: "College Management Software",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://classdesk.app"),
  alternates: {
    canonical: "/",
    languages: {
      'en-IN': '/',
      'en-US': '/',
    },
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
        alt: "Classdesk - College Management Platform for NAAC & NBA Accreditation",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Classdesk - College Management System for NAAC & NBA Accreditation",
    description: "Streamline NAAC & NBA accreditation with complete college management software. Attendance, marksheets, session planning & more.",
    images: ["/twitter-image.png"],
    creator: "@classdesk",
    site: "@classdesk",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your verification codes here when you have them
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "Classdesk",
    "mobile-web-app-capable": "yes",
    "theme-color": "#4f46e5",
    "msapplication-TileColor": "#4f46e5",
    "msapplication-config": "/browserconfig.xml",
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
          "url": "https://classdesk.app/logo.png",
          "width": 200,
          "height": 200
        },
        "description": "All-in-one college management platform for NAAC and NBA accreditation",
        "contactPoint": {
          "@type": "ContactPoint",
          "email": "hello@classdesk.app",
          "contactType": "Customer Service",
          "availableLanguage": ["English"]
        },
        "sameAs": [
          "https://twitter.com/classdesk",
          "https://linkedin.com/company/classdesk",
          "https://github.com/classdesk"
        ],
        "foundingDate": "2024",
        "industry": "Education Technology",
        "numberOfEmployees": "1-10",
        "areaServed": "India",
        "knowsAbout": [
          "College Management Systems",
          "NAAC Accreditation",
          "NBA Accreditation",
          "Educational Technology",
          "Student Information Systems",
          "Academic Management"
        ]
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://classdesk.app/#software",
        "name": "Classdesk",
        "applicationCategory": "EducationalApplication",
        "operatingSystem": "Web",
        "browserRequirements": "Requires JavaScript. Requires HTML5.",
        "softwareVersion": "1.0",
        "datePublished": "2024-01-01",
        "dateModified": "2024-12-01",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "INR",
          "availability": "https://schema.org/InStock",
          "validFrom": "2024-01-01"
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
          "Analytics and Insights",
          "Real-time Dashboard",
          "Automated Reporting",
          "Student Information Management",
          "Faculty Management",
          "Timetable Management",
          "Grade Management",
          "Document Management"
        ],
        "audience": {
          "@type": "EducationalAudience",
          "educationalRole": ["College Administrator", "University Staff", "Faculty Member", "Academic Coordinator", "Registrar"]
        },
        "screenshot": "https://classdesk.app/screenshot.png",
        "softwareRequirements": "Modern web browser with JavaScript enabled",
        "permissions": "Internet connection required",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "ratingCount": "150",
          "bestRating": "5",
          "worstRating": "1"
        },
        "author": {
          "@id": "https://classdesk.app/#organization"
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
        "inLanguage": "en-IN",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://classdesk.app/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "WebPage",
        "@id": "https://classdesk.app/#webpage",
        "url": "https://classdesk.app",
        "name": "Classdesk - College Management System for NAAC & NBA Accreditation",
        "description": "Streamline NAAC & NBA accreditation process with Classdesk. Complete college management software for attendance tracking, marksheet generation, session planning, and university administration.",
        "isPartOf": {
          "@id": "https://classdesk.app/#website"
        },
        "about": {
          "@id": "https://classdesk.app/#software"
        },
        "publisher": {
          "@id": "https://classdesk.app/#organization"
        },
        "inLanguage": "en-IN",
        "datePublished": "2024-01-01",
        "dateModified": "2024-12-01"
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://classdesk.app"
          }
        ]
      }
    ]
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#4f46e5" />
        <meta name="msapplication-TileColor" content="#4f46e5" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased`}
      >
        <ThemeProvider>
          <Header />
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
