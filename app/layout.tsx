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
  title: "Classdesk - School & College Management System | Attendance, Marks & Timetables",
  description: "Simplified college management software for attendance tracking, marks & grade management, timetable scheduling, and parent-teacher communication. Streamline your daily operations with Classdesk.",
  keywords: [
    "classdesk",
    "school and college management system",
    "college management system",
    "school management system",
    "attendance management software",
    "marksheet generation software",
    "student attendance tracking",
    "timetable management software",
    "grade management software",
    "parent-teacher communication",
    "online attendance system",
    "automated marksheet generator",
    "college management platform",
    "school ERP software",
    "college ERP software",
    "student report card generator",
    "parent communication app",
    "academic management system",
    "student information system",
    "grade book software",
    "school automation software",
    "college administration system",
    "school administration software",
    "exam management system",
    "student progress tracking",
    "teacher management system",
    "parent portal software",
    "education management platform",
    "classroom management software",
    "student database management",
    "academic records system",
    "online report card system",
    "school attendance app",
    "college attendance system",
    "parent notification system",
    "student performance tracking",
    "academic planning software",
    "student grade tracking",
    "education technology platform",
    "smart school management",
    "digital school system",
    "school management app India",
    "college management software India",
    "NAAC accreditation software",
    "NBA accreditation system",
    "university management software",
    "coaching class management",
    "tuition class management",
    "institute management software",
    "campus management system",
    "educational institution software"
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
    title: "Classdesk - School & College Management System | Attendance, Marks & Timetables",
    description: "Simplified college management software for attendance tracking, marks & grade management, timetable scheduling, and parent-teacher communication. Streamline your daily operations.",
    url: "https://classdesk.app",
    siteName: "Classdesk",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Classdesk - Simplified College Management Platform for Daily Operations",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Classdesk - School & College Management System | Attendance, Marks & Timetables",
    description: "Simplified college management software for attendance tracking, marks & grade management, timetable scheduling, and parent-teacher communication. Join the waitlist for early access.",
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
    "theme-color": "#F97316",
    "msapplication-TileColor": "#F97316",
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
        "description": "Simplified school and college management platform for attendance tracking, marks management, timetable scheduling, and parent communication",
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
          "School Management Systems",
          "Attendance Management",
          "Grade Management",
          "Timetable Scheduling",
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
        "description": "Simplified school and college management system for attendance tracking, marks & grade management, timetable scheduling, and parent-teacher communication. Streamline your daily operations with an easy-to-use platform.",
        "featureList": [
          "Student Attendance Tracking",
          "Automated Marksheet Generation",
          "Grade Book Management",
          "Timetable Management",
          "Parent-Teacher Communication",
          "Student Progress Reports",
          "Online Report Cards",
          "Parent Notification System",
          "Academic Session Planning",
          "Exam Management",
          "Student Information System",
          "Faculty Management",
          "Real-time Analytics Dashboard",
          "Automated Reporting",
          "Role-based Access Control"
        ],
        "audience": {
          "@type": "EducationalAudience",
          "educationalRole": ["School Principal", "School Administrator", "College Administrator", "University Staff", "Faculty Member", "Teacher", "Academic Coordinator", "Registrar", "Coaching Class Owner"]
        },
        "screenshot": "https://classdesk.app/screenshot.png",
        "softwareRequirements": "Modern web browser with JavaScript enabled",
        "permissions": "Internet connection required",
        "author": {
          "@id": "https://classdesk.app/#organization"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://classdesk.app/#website",
        "url": "https://classdesk.app",
        "name": "Classdesk",
        "description": "School and college management system for attendance, marks, and timetables",
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
        "name": "Classdesk - School & College Management System | Attendance, Marks & Timetables",
        "description": "Simplified school and college management software for attendance tracking, marks & grade management, timetable scheduling, and parent-teacher communication. Streamline your daily operations.",
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
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#F97316" />
        <meta name="msapplication-TileColor" content="#F97316" />
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
