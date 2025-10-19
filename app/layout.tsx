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
  title: "Classdesk - School & College Management System | Attendance, Marksheets & Parent Communication",
  description: "Complete school and college management software for attendance tracking, automated marksheet generation, grade reports, parent-teacher communication, and NAAC/NBA accreditation. Perfect for schools, colleges, coaching classes, and universities.",
  keywords: [
    "classdesk",
    "school management system",
    "college management system",
    "attendance management software",
    "marksheet generation software",
    "parent communication app",
    "student report card generator",
    "online attendance system",
    "school ERP software",
    "college ERP software",
    "coaching class management",
    "university management software",
    "student information system",
    "grade book software",
    "parent-teacher communication",
    "academic management system",
    "student attendance tracker",
    "automated marksheet generator",
    "school automation software",
    "NAAC accreditation software",
    "NBA accreditation system",
    "education management platform",
    "classroom management software",
    "student database management",
    "school administration software",
    "college administration system",
    "tuition class management",
    "institute management software",
    "academic records system",
    "student progress tracking",
    "parent portal software",
    "teacher management system",
    "timetable management software",
    "exam management system",
    "grade management software",
    "school communication app",
    "educational institution software",
    "campus management system",
    "student grade tracking",
    "online report card system",
    "school attendance app",
    "college attendance system",
    "parent notification system",
    "student performance tracking",
    "academic planning software",
    "education technology platform",
    "smart school management",
    "digital school system",
    "school management app India",
    "college management software India"
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
    title: "Classdesk - School & College Management System | Attendance, Marksheets & Parent Communication",
    description: "Complete school and college management software for attendance, automated marksheets, grade reports, and parent-teacher communication. Perfect for schools, colleges, and coaching classes.",
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
    title: "Classdesk - School & College Management System | Attendance, Marksheets & Parent Communication",
    description: "Complete school and college management software. Attendance tracking, automated marksheets, grade reports, and parent-teacher communication for schools, colleges, and coaching classes.",
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
    // IMPORTANT: Add your Google Search Console verification code here
    // This is REQUIRED for Google to trust your site for indexing
    // Steps to get verification code:
    // 1. Go to https://search.google.com/search-console
    // 2. Add property (classdesk.app) if not already added
    // 3. Go to Settings > Ownership verification
    // 4. Choose "HTML tag" method
    // 5. Copy ONLY the content value from the meta tag (the code between content="...")
    // 6. Uncomment the line below and paste your code
    // Example: google: "abc123xyz456def789",
    
    // google: "your-google-verification-code-here",
    // After adding, rebuild and redeploy your site
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
        "description": "All-in-one school and college management platform for attendance, marksheets, grade reports, parent communication, and NAAC/NBA accreditation",
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
        "description": "Complete school and college management system for attendance tracking, automated marksheet generation, grade reports, parent-teacher communication, and NAAC/NBA accreditation. Perfect for schools, colleges, coaching classes, and universities.",
        "featureList": [
          "Student Attendance Tracking",
          "Automated Marksheet Generation",
          "Grade Book Management",
          "Parent-Teacher Communication",
          "Student Progress Reports",
          "Online Report Cards",
          "Parent Notification System",
          "Academic Session Planning",
          "Timetable Management",
          "Exam Management",
          "Student Information System",
          "Faculty Management",
          "NAAC Accreditation Support",
          "NBA Accreditation Process",
          "Real-time Analytics Dashboard",
          "Automated Reporting",
          "Role-based Access Control",
          "Document Management"
        ],
        "audience": {
          "@type": "EducationalAudience",
          "educationalRole": ["School Principal", "School Administrator", "College Administrator", "University Staff", "Faculty Member", "Teacher", "Academic Coordinator", "Registrar", "Coaching Class Owner"]
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
        "name": "Classdesk - School & College Management System | Attendance, Marksheets & Parent Communication",
        "description": "Complete school and college management software for attendance tracking, automated marksheet generation, grade reports, parent-teacher communication, and NAAC/NBA accreditation. Perfect for schools, colleges, coaching classes, and universities.",
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
        {/* Explicit robots meta tag for Google indexing */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        
        {/* Explicit canonical URL */}
        <link rel="canonical" href="https://classdesk.app/" />
        
        {/* Favicons and manifest */}
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#4f46e5" />
        <meta name="msapplication-TileColor" content="#4f46e5" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        
        {/* Structured data for better SEO */}
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
