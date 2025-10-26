import type { Metadata } from "next";
import { Background } from "@/components/home/background";
import { Footer } from "@/components/home/footer";

export const metadata: Metadata = {
  title: "About Classdesk - Simplified College Management System",
  description: "Learn about Classdesk, the simplified college management system designed to streamline attendance, marks, timetables, and parent communication for schools and colleges across India.",
  keywords: [
    "about classdesk",
    "classdesk company",
    "college management system about",
    "school management system about",
    "education technology company",
    "attendance management software",
    "marks management system",
    "timetable management",
    "college ERP system",
    "academic management platform",
    "student information system",
    "classdesk team",
    "education software development"
  ],
  openGraph: {
    title: "About Classdesk - Simplified College Management System",
    description: "Learn about Classdesk's mission to simplify college management through streamlined attendance, marks, and communication tools.",
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
                  Streamlining daily operations for schools and colleges across India with simplified management tools 
                  for attendance tracking, marks management, timetable scheduling, and parent communication.
                </p>
              </header>

              <section className="overflow-hidden rounded-xl bg-white dark:bg-white/5 backdrop-blur-sm border border-gray-100 dark:border-white/10 p-8">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                  Our Mission
                </h2>
                <p className="text-gray-600 dark:text-white/70 mb-4">
                  At Classdesk, we believe that every educational institution deserves access to modern, 
                  efficient management tools that simplify daily administrative tasks. Our mission 
                  is to revolutionize how schools and colleges handle attendance, marks management, 
                  timetable scheduling, and parent communication.
                </p>
                <p className="text-gray-600 dark:text-white/70">
                  We&apos;re committed to making college administration seamless, transparent, 
                  and manageable for educational institutions of all sizes across India - helping educators 
                  spend less time on paperwork and more time on what truly matters: teaching.
                </p>
              </section>

              <section className="overflow-hidden rounded-xl bg-white dark:bg-white/5 backdrop-blur-sm border border-gray-100 dark:border-white/10 p-8">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                  Why Classdesk?
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      Simplified Operations
                    </h3>
                    <p className="text-gray-600 dark:text-white/70">
                      Focus on core administrative tasks - attendance tracking, marks management, 
                      timetable scheduling, and parent communication - all streamlined for efficiency.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      User-Friendly Design
                    </h3>
                    <p className="text-gray-600 dark:text-white/70">
                      Intuitive interface designed for administrators, faculty, and staff with 
                      minimal training requirements. Get started quickly.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      Time-Saving Automation
                    </h3>
                    <p className="text-gray-600 dark:text-white/70">
                      Automate repetitive tasks like attendance records, grade calculations, and 
                      parent notifications to save hours of administrative work.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      Built for Indian Institutions
                    </h3>
                    <p className="text-gray-600 dark:text-white/70">
                      Designed specifically for the needs of Indian schools and colleges, with 
                      support for local requirements and workflows.
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
                  Building for Educational Excellence
                </h2>
                <p className="text-gray-600 dark:text-white/70 mb-4">
                  Classdesk is being built for educational institutions across India, 
                  from small colleges to large universities. Our platform is designed to handle the unique 
                  challenges faced by Indian educational institutions in managing daily operations efficiently.
                </p>
                <p className="text-gray-600 dark:text-white/70">
                  We understand the importance of balancing quality education with administrative efficiency. 
                  Classdesk is our contribution to making daily college management smoother, allowing 
                  educational leaders to focus more on student success and less on paperwork.
                </p>
              </section>

              <section className="overflow-hidden rounded-xl bg-gray-50 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 p-8">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                  Get Started with Classdesk
                </h2>
                <p className="text-gray-600 dark:text-white/70 mb-6">
                  Ready to simplify your college management? Join the waitlist 
                  to be among the first to experience Classdesk&apos;s streamlined solution 
                  for attendance, marks, timetables, and parent communication.
                </p>
                <div className="bg-gray-100 dark:bg-white/10 rounded-lg p-6">
                  <p className="text-gray-900 dark:text-white font-medium">
                    Beta Launch: Q4 2025
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 text-sm mt-2">
                    Be the first to experience Classdesk&apos;s revolutionary college management platform.
                  </p>
                </div>
              </section>
            </article>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
