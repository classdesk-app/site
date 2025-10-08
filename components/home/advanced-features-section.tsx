"use client"

import { motion } from "framer-motion"
import { 
  Users, 
  FileText, 
  Calendar, 
  BarChart3, 
  Shield,
  ArrowRight,
  Sparkles,
  Zap,
  Target,
  LucideIcon
} from "lucide-react"

const FeatureCard = ({ 
  icon: Icon, 
  title, 
  description, 
  features, 
  delay = 0
}: {
  icon: LucideIcon
  title: string
  description: string
  features: string[]
  delay?: number
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="group relative overflow-hidden rounded-xl bg-white dark:bg-white/5 backdrop-blur-sm border border-gray-100 dark:border-white/10 hover:border-gray-200 dark:hover:border-white/20 transition-all duration-300 hover:shadow-lg h-full flex flex-col"
    >
      <div className="relative p-8 flex flex-col h-full">
        {/* Icon */}
        <div className="relative mb-6">
          <div className="relative bg-gray-50 dark:bg-white/10 rounded-lg p-4 border border-gray-100 dark:border-white/10 shadow-sm group-hover:shadow-md transition-all duration-300 w-fit">
            <Icon className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
          </div>
        </div>

        {/* Content */}
        <div className="space-y-4 flex-grow">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
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
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-indigo-500" />
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
          <ArrowRight className="h-5 w-5 text-indigo-500" />
        </motion.div>
      </div>
    </motion.div>
  )
}


export const AdvancedFeaturesSection = () => {
  const features = [
    {
      icon: Users,
      title: "Smart Attendance Management",
      description: "Revolutionary AI-powered attendance tracking with real-time analytics and automated reporting for NAAC compliance.",
      features: [
        "Real-time biometric integration",
        "Automated report generation",
        "NAAC compliance documentation",
        "Faculty dashboard with insights",
        "Student notification system",
        "Mobile app integration"
      ]
    },
    {
      icon: FileText,
      title: "Advanced Marksheet Generation",
      description: "Intelligent marksheet creation with built-in validation, digital signatures, and NBA accreditation compliance.",
      features: [
        "Automated grade calculation",
        "Digital signature support",
        "NBA compliance features",
        "Bulk export capabilities",
        "Custom template designer"
      ]
    },
    {
      icon: Calendar,
      title: "Intelligent Session Planning",
      description: "AI-driven timetable optimization with conflict detection and resource allocation for seamless academic management.",
      features: [
        "Smart conflict detection",
        "Resource optimization",
        "Faculty availability tracking",
        "Room booking automation",
        "Mobile notifications"
      ]
    },
    {
      icon: BarChart3,
      title: "Predictive Analytics Dashboard",
      description: "Advanced analytics with machine learning insights, predictive modeling, and real-time performance tracking.",
      features: [
        "Machine learning insights",
        "Predictive performance modeling",
        "Custom dashboard creation",
        "Real-time data visualization",
        "Export to multiple formats"
      ]
    },
    {
      icon: Shield,
      title: "Enterprise Security & Compliance",
      description: "Bank-grade security with role-based access control, audit trails, and compliance management for educational institutions.",
      features: [
        "Multi-factor authentication",
        "Role-based access control",
        "Comprehensive audit trails",
        "GDPR compliance tools",
        "Data encryption at rest"
      ]
    },
    {
      icon: Zap,
      title: "Automation & Workflow Engine",
      description: "Powerful workflow automation that streamlines administrative processes and reduces manual work by up to 80%.",
      features: [
        "Custom workflow builder",
        "Automated notifications",
        "Integration with external systems",
        "Process optimization",
        "Performance monitoring"
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
          <div className="inline-flex items-center gap-2 bg-indigo-50 dark:bg-indigo-500/10 rounded-full px-4 py-2 border border-indigo-200 dark:border-indigo-500/20 mb-6">
            <Sparkles className="h-4 w-4 text-indigo-500" />
            <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
              Advanced Features
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Everything you need to manage your college with{" "}
            <span className="text-indigo-600 dark:text-indigo-400">
              Classdesk
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-white/70 max-w-3xl mx-auto leading-relaxed">
            From attendance tracking to advanced analytics, Classdesk provides comprehensive 
            tools to modernize your university administration and streamline NAAC & NBA accreditation.
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
          <div className="relative overflow-hidden rounded-xl bg-indigo-50 dark:bg-indigo-500/10 backdrop-blur-sm border border-indigo-200 dark:border-indigo-500/20 p-12">
            <div className="relative">
              <div className="inline-flex items-center gap-2 bg-white dark:bg-white/10 rounded-full px-4 py-2 border border-gray-200 dark:border-white/20 mb-6">
                <Target className="h-4 w-4 text-indigo-500" />
                <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
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
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
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
