"use client"

import { motion } from "framer-motion"
import { 
  Building2,
  BookOpen,
  Users, 
  FileText, 
  Calendar, 
  Shield,
  Palette,
  Bell,
  Workflow,
  Brain,
  BarChart3,
  Store,
  ArrowRight,
  Sparkles,
  Target,
  LucideIcon
} from "lucide-react"

const FeatureCard = ({ 
  icon: Icon, 
  title, 
  description, 
  features,
  color = "from-gray-500 to-gray-600",
  delay = 0
}: {
  icon: LucideIcon
  title: string
  description: string
  features: string[]
  color?: string
  delay?: number
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="group relative overflow-hidden rounded-xl bg-white dark:bg-white/5 backdrop-blur-md border border-gray-200 dark:border-white/10 hover:bg-gray-50 dark:hover:bg-white/10 hover:border-gray-300 dark:hover:border-white/20 transition-all duration-300 hover:shadow-lg h-full flex flex-col"
    >
      <div className="relative p-8 flex flex-col h-full">
        {/* Icon */}
        <div className="relative mb-6">
          <div className={`relative bg-gradient-to-br ${color} rounded-lg p-3 shadow-sm group-hover:shadow-md transition-all duration-300 w-fit`}>
            <Icon className="h-6 w-6 text-white" />
          </div>
        </div>

        {/* Content */}
        <div className="space-y-4 flex-grow">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
            {title}
          </h3>
          <p className="text-gray-600 dark:text-white/70 leading-relaxed">
            {description}
          </p>
          
          {/* Feature List */}
          <div className="space-y-2">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: delay + (index * 0.1) }}
                className="flex items-center gap-3"
              >
                <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gray-400 dark:bg-gray-600" />
                <span className="text-sm text-gray-600 dark:text-white/70">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Hover Arrow */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          whileHover={{ opacity: 1, x: 0 }}
          className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-all duration-300"
        >
          <ArrowRight className="h-5 w-5 text-gray-400" />
        </motion.div>
      </div>
    </motion.div>
  )
}


export const AdvancedFeaturesSection = () => {
  const features = [
    // Q4 2025 - Beta Launch (In Progress)
    {
      icon: Building2,
      title: "Department-level Workspaces",
      description: "Organize your institution with dedicated workspaces for each department, enabling efficient collaboration and resource management.",
      color: "from-blue-500 to-cyan-500",
      features: [
        "Isolated department environments",
        "Customizable workspace settings",
        "Cross-department collaboration tools",
        "Resource sharing and permissions"
      ]
    },
    {
      icon: BookOpen,
      title: "Curriculum Management",
      description: "Comprehensive curriculum planning and management system to organize courses, subjects, and academic programs.",
      color: "from-emerald-500 to-teal-500",
      features: [
        "Course and subject management",
        "Program structure planning",
        "Academic year organization",
        "Syllabus tracking"
      ]
    },
    {
      icon: Users,
      title: "Attendance Tracking",
      description: "Efficient attendance management system with real-time tracking and automated reporting for NAAC compliance.",
      color: "from-violet-500 to-purple-500",
      features: [
        "Quick attendance marking",
        "Automated report generation",
        "NAAC compliance documentation",
        "Faculty dashboard with insights"
      ]
    },
    {
      icon: FileText,
      title: "Marksheet Generation",
      description: "Streamlined marksheet creation with built-in validation and NBA accreditation compliance.",
      color: "from-pink-500 to-rose-500",
      features: [
        "Automated grade calculation",
        "Digital marksheet generation",
        "NBA compliance features",
        "Bulk export capabilities"
      ]
    },
    {
      icon: Calendar,
      title: "Session Planning",
      description: "Plan and manage academic sessions with timetable organization and resource allocation.",
      color: "from-sky-500 to-blue-500",
      features: [
        "Session scheduling",
        "Timetable management",
        "Faculty assignment",
        "Room allocation"
      ]
    },
    {
      icon: Shield,
      title: "Role-based Access Control",
      description: "Secure access management with granular permissions for different roles across your institution.",
      color: "from-indigo-500 to-blue-500",
      features: [
        "Multiple user roles",
        "Granular permissions",
        "Audit trails",
        "Secure authentication"
      ]
    },
    // Q1 2026 - Integrations & Automation (Planned)
    {
      icon: Palette,
      title: "Student Portal Customization",
      description: "Create a branded student portal with customizable themes and layouts tailored to your institution.",
      color: "from-fuchsia-500 to-pink-500",
      features: [
        "Custom branding options",
        "Flexible layout design",
        "Personalized dashboards",
        "Mobile-responsive interface"
      ]
    },
    {
      icon: Bell,
      title: "Collaboration and Notifications",
      description: "Keep everyone informed with real-time notifications and collaboration tools for faculty and students.",
      color: "from-sky-500 to-blue-500",
      features: [
        "Real-time notifications",
        "Email and SMS alerts",
        "In-app messaging",
        "Announcement broadcasting"
      ]
    },
    {
      icon: Workflow,
      title: "Forms and Workflow Automations",
      description: "Automate administrative processes with custom forms and intelligent workflow automation.",
      color: "from-lime-500 to-green-500",
      features: [
        "Custom form builder",
        "Automated approval workflows",
        "Process automation",
        "Integration capabilities"
      ]
    },
    // Q2 2026 - AI Assistance (Planned)
    {
      icon: Brain,
      title: "AI-powered Attendance Tracking",
      description: "Next-generation attendance system with AI-driven insights and predictive analytics.",
      color: "from-purple-500 to-violet-500",
      features: [
        "Intelligent pattern recognition",
        "Predictive attendance alerts",
        "Automated anomaly detection",
        "Smart recommendations"
      ]
    },
    {
      icon: BarChart3,
      title: "Reporting and Analytics",
      description: "Advanced analytics with comprehensive reporting tools and data visualization for informed decision-making.",
      color: "from-cyan-500 to-teal-500",
      features: [
        "Custom report generation",
        "Interactive dashboards",
        "Data visualization tools",
        "Export in multiple formats"
      ]
    },
    {
      icon: Store,
      title: "Marketplace for Custom Integrations",
      description: "Extend functionality with a marketplace of custom integrations and third-party applications.",
      color: "from-rose-500 to-pink-500",
      features: [
        "Third-party app integrations",
        "Custom plugin support",
        "API access",
        "Developer marketplace"
      ]
    }
  ]

  return (
    <section className="py-24 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-gray-100 dark:bg-gray-800 rounded-full px-4 py-2 border border-gray-200 dark:border-white/20 mb-6">
            <Sparkles className="h-4 w-4 text-gray-600 dark:text-gray-400" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Advanced Features
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Complete College Management Platform
          </h2>
          <p className="text-xl text-gray-600 dark:text-white/70 max-w-3xl mx-auto leading-relaxed">
            Explore all the features planned for Classdesk. From core department management 
            to AI-powered analytics, discover how we&apos;re building the future of college administration.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              features={feature.features}
              color={feature.color}
              delay={index * 0.1}
            />
          ))}
        </div>


        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-20"
        >
          <div className="relative overflow-hidden rounded-xl bg-gray-50 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 p-12">
            <div className="relative">
              <div className="inline-flex items-center gap-2 bg-white dark:bg-white/10 rounded-full px-4 py-2 border border-gray-200 dark:border-white/20 mb-6">
                <Target className="h-4 w-4 text-gray-600 dark:text-gray-400" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Ready to Transform Your College?
                </span>
              </div>
              
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Experience the Future of College Management
              </h3>
              <p className="text-lg text-gray-600 dark:text-white/70 mb-8 max-w-2xl mx-auto">
                Join the waitlist to be among the first to access these powerful features 
                when Classdesk launches in Q4 2025.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#waitlist"
                  className="bg-gray-900 hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-100 text-white dark:text-gray-900 px-8 py-4 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Join Waitlist
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="/roadmap"
                  className="border border-gray-300 dark:border-white/20 text-gray-700 dark:text-white hover:bg-gray-50 dark:hover:bg-white/10 px-8 py-4 rounded-xl font-medium transition-all duration-300"
                >
                  View Roadmap
                </motion.a>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </section>
  )
}
