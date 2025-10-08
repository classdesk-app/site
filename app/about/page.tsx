import type { Metadata } from "next";
import { Background } from "@/components/home/background";

export const metadata: Metadata = {
  title: "About Classdesk - College Management System for NAAC & NBA Accreditation",
  description: "Learn about Classdesk, the comprehensive college management system designed to streamline NAAC and NBA accreditation processes for universities and affiliated colleges across India.",
  keywords: [
    "about classdesk",
    "classdesk company",
    "college management system about",
    "NAAC accreditation software company",
    "NBA accreditation platform",
    "education technology company",
    "university management software",
    "college ERP system",
    "academic management platform",
    "student information system",
    "classdesk team",
    "education software development"
  ],
  openGraph: {
    title: "About Classdesk - College Management System",
    description: "Learn about Classdesk's mission to revolutionize college management and accreditation processes.",
    url: "https://classdesk.app/about",
    type: "website",
  },
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen w-full bg-white dark:bg-black relative">
      <Background />
      
      <main className="relative z-10 text-gray-900 dark:text-white">
        <section className="py-24 px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <article className="space-y-12">
              <header className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                  About Classdesk
                </h1>
                <p className="text-xl text-gray-600 dark:text-white/70 leading-relaxed">
                  Empowering colleges and universities across India with comprehensive management solutions 
                  designed specifically for NAAC and NBA accreditation processes.
                </p>
              </header>

              <section className="overflow-hidden rounded-xl bg-white dark:bg-white/5 backdrop-blur-sm border border-gray-100 dark:border-white/10 p-8">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                  Our Mission
                </h2>
                <p className="text-gray-600 dark:text-white/70 mb-4">
                  At Classdesk, we believe that every educational institution deserves access to modern, 
                  efficient management tools that simplify complex administrative processes. Our mission 
                  is to revolutionize how colleges and universities handle accreditation, student management, 
                  and academic operations.
                </p>
                <p className="text-gray-600 dark:text-white/70">
                  We&apos;re committed to making NAAC and NBA accreditation processes seamless, transparent, 
                  and manageable for educational institutions of all sizes across India.
                </p>
              </section>

              <section className="overflow-hidden rounded-xl bg-white dark:bg-white/5 backdrop-blur-sm border border-gray-100 dark:border-white/10 p-8">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                  Why Classdesk?
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      Accreditation-Focused
                    </h3>
                    <p className="text-gray-600 dark:text-white/70">
                      Built specifically for NAAC and NBA accreditation requirements, ensuring your 
                      institution meets all compliance standards.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      Comprehensive Solution
                    </h3>
                    <p className="text-gray-600 dark:text-white/70">
                      From attendance tracking to marksheet generation, Classdesk covers all aspects 
                      of college management in one integrated platform.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      User-Friendly Design
                    </h3>
                    <p className="text-gray-600 dark:text-white/70">
                      Intuitive interface designed for administrators, faculty, and staff with 
                      minimal training requirements.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      Scalable Platform
                    </h3>
                    <p className="text-gray-600 dark:text-white/70">
                      Whether you&apos;re a small college or a large university, Classdesk scales 
                      to meet your institution&apos;s unique needs.
                    </p>
                  </div>
                </div>
              </section>

              <section className="overflow-hidden rounded-xl bg-white dark:bg-white/5 backdrop-blur-sm border border-gray-100 dark:border-white/10 p-8">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                  Our Technology
                </h2>
                <p className="text-gray-600 dark:text-white/70 mb-4">
                  Classdesk is built on modern web technologies ensuring reliability, security, 
                  and performance. Our cloud-based architecture provides:
                </p>
                <ul className="list-disc list-inside text-gray-600 dark:text-white/70 space-y-2">
                  <li>Real-time data synchronization across all departments</li>
                  <li>Advanced security measures to protect sensitive student information</li>
                  <li>Automated backup and disaster recovery systems</li>
                  <li>Mobile-responsive design for access from any device</li>
                  <li>Integration capabilities with existing university systems</li>
                </ul>
              </section>

              <section className="overflow-hidden rounded-xl bg-white dark:bg-white/5 backdrop-blur-sm border border-gray-100 dark:border-white/10 p-8">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                  Serving Educational Excellence
                </h2>
                <p className="text-gray-600 dark:text-white/70 mb-4">
                  Classdesk serves a diverse range of educational institutions across India, 
                  from small affiliated colleges to large deemed universities. Our platform 
                  has been designed to handle the unique challenges faced by Indian 
                  educational institutions in their pursuit of academic excellence.
                </p>
                <p className="text-gray-600 dark:text-white/70">
                  We understand the importance of maintaining high standards while managing 
                  complex administrative processes, and Classdesk is our contribution to 
                  making this journey smoother for educational leaders nationwide.
                </p>
              </section>

              <section className="overflow-hidden rounded-xl bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-500/10 dark:to-blue-500/10 backdrop-blur-sm border border-gray-100 dark:border-white/10 p-8">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                  Get Started with Classdesk
                </h2>
                <p className="text-gray-600 dark:text-white/70 mb-6">
                  Ready to transform your college management processes? Join the waitlist 
                  to be among the first to experience Classdesk&apos;s comprehensive solution 
                  for NAAC and NBA accreditation.
                </p>
                <div className="bg-indigo-50 dark:bg-indigo-500/10 rounded-lg p-6">
                  <p className="text-indigo-800 dark:text-indigo-200 font-medium">
                    Beta Launch: Q4 2025
                  </p>
                  <p className="text-indigo-600 dark:text-indigo-300 text-sm mt-2">
                    Be the first to experience Classdesk&apos;s revolutionary college management platform.
                  </p>
                </div>
              </section>
            </article>
          </div>
        </section>
      </main>
    </div>
  );
}
