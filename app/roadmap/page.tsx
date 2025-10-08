"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import {
  Rocket,
  Zap,
  Brain,
  Building2,
  CheckCircle2,
  Clock,
  AlertCircle
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

type RoadmapItem = {
  quarter: string
  title: string
  status: "completed" | "in-progress" | "planned"
  icon: typeof Rocket
  color: string
  features: string[]
}

const roadmapItems: RoadmapItem[] = [
  {
    quarter: "Q4 2025",
    title: "Beta Launch",
    status: "in-progress",
    icon: Rocket,
    color: "from-green-500 to-emerald-500",
    features: [
      "Core modules: Attendance, Marksheets, Sessions",
      "Early Access for Affiliated Colleges",
      "Basic reporting and analytics",
    ],
  },
  {
    quarter: "Q1 2026",
    title: "Integrations & Automation",
    status: "planned",
    icon: Zap,
    color: "from-yellow-500 to-orange-500",
    features: [
      "Integrate with University ERP",
      "Timetable sync",
      "Role-based access control",
      "Automated notifications",
    ],
  },
  {
    quarter: "Q2 2026",
    title: "AI Assistance",
    status: "planned",
    icon: Brain,
    color: "from-purple-500 to-pink-500",
    features: [
      "Automated Report Generation",
      "Predictive Attendance Insights",
      "Smart scheduling suggestions",
      "Natural language queries",
    ],
  },
  {
    quarter: "Q3 2026",
    title: "Multi-campus Support",
    status: "planned",
    icon: Building2,
    color: "from-blue-500 to-indigo-500",
    features: [
      "Manage multiple colleges under one dashboard",
      "Cross-campus reporting",
      "Centralized administration",
      "Campus-specific customization",
    ],
  },
]

const StatusBadge = ({ status }: { status: RoadmapItem["status"] }) => {
  const config = {
    completed: {
      icon: CheckCircle2,
      text: "Completed",
      color: "text-green-600 dark:text-green-400",
      bg: "bg-green-100 dark:bg-green-900/30",
    },
    "in-progress": {
      icon: Clock,
      text: "In Progress",
      color: "text-yellow-600 dark:text-yellow-400",
      bg: "bg-yellow-100 dark:bg-yellow-900/30",
    },
    planned: {
      icon: AlertCircle,
      text: "Planned",
      color: "text-blue-600 dark:text-blue-400",
      bg: "bg-blue-100 dark:bg-blue-900/30",
    },
  }

  const { icon: Icon, text, color, bg } = config[status]

  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${bg} ${color}`}>
      <Icon className="h-3.5 w-3.5" />
      {text}
    </span>
  )
}

export default function RoadmapPage() {
  return (
    <div className="min-h-screen w-full bg-white dark:bg-black relative">
      {/* Cosmic Nebula - PatternCraft (Dark Mode Only) */}
      <div
        className="absolute inset-0 z-0 dark:block hidden"
        style={{
          background: `
            radial-gradient(ellipse 110% 70% at 25% 80%, rgba(147, 51, 234, 0.12), transparent 55%),
            radial-gradient(ellipse 130% 60% at 75% 15%, rgba(59, 130, 246, 0.10), transparent 65%),
            radial-gradient(ellipse 80% 90% at 20% 30%, rgba(236, 72, 153, 0.14), transparent 50%),
            radial-gradient(ellipse 100% 40% at 60% 70%, rgba(16, 185, 129, 0.08), transparent 45%),
            #000000
          `,
        }}
      />

      {/* Light Mode Background */}
      <div
        className="absolute inset-0 z-0 dark:hidden block"
        style={{
          background: `
            radial-gradient(ellipse at top, #f0f9ff 0%, #ffffff 50%),
            linear-gradient(180deg, #ffffff 0%, #f0f9ff 100%)
          `,
        }}
      />

      <Header />

      <main className="relative z-10 pt-24 pb-20 px-6 lg:px-8 text-gray-900 dark:text-white">
        <div className="mx-auto max-w-5xl">
          {/* Hero Section */}
          <motion.div
            className="text-center mb-20"
            initial="initial"
            animate="animate"
            variants={staggerChildren}
          >
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white mb-6"
                variants={fadeInUp}
              >
                <span className="bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent">
                  Product Roadmap
                </span>
              </motion.h1>
              <motion.p
                className="text-lg md:text-xl text-gray-600 dark:text-white/70 max-w-2xl mx-auto"
                variants={fadeInUp}
              >
                See what&apos;s coming next as we build the future of college
                administration.
              </motion.p>
          </motion.div>

          {/* Roadmap Timeline */}
          <motion.div
            className="relative space-y-8"
            initial="initial"
            animate="animate"
            variants={staggerChildren}
          >
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-300 dark:from-indigo-400/30 via-blue-300 dark:via-blue-400/30 to-transparent hidden md:block" />

            {roadmapItems.map((item, index) => {
              const Icon = item.icon

              return (
                <motion.div
                  key={index}
                  className="relative"
                  variants={fadeInUp}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-6 top-8 hidden md:block">
                    <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${item.color} ring-4 ring-white/50 dark:ring-black/50`} />
                  </div>

                  {/* Content Card */}
                  <div className="md:ml-20 bg-white dark:bg-white/5 backdrop-blur-md rounded-xl border border-gray-200 dark:border-white/10 p-8 hover:bg-gray-50 dark:hover:bg-white/10 hover:border-gray-300 dark:hover:border-white/20 transition-all duration-300">
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                      <div className="flex items-start gap-4">
                        <div className={`bg-gradient-to-br ${item.color} rounded-lg p-3 flex-shrink-0`}>
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-600 dark:text-white/60 mb-1">
                            {item.quarter}
                          </p>
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                            {item.title}
                          </h3>
                        </div>
                      </div>
                      <StatusBadge status={item.status} />
                    </div>

                    <ul className="space-y-3">
                      {item.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-start gap-3 text-gray-600 dark:text-white/70"
                        >
                          <div className="flex-shrink-0 mt-1">
                            <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${item.color}`} />
                          </div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>

          {/* CTA Section */}
          <motion.div
            className="mt-20 bg-gradient-to-br from-indigo-100 to-blue-100 dark:from-indigo-500/20 dark:to-blue-500/20 backdrop-blur-sm rounded-2xl p-8 md:p-12 text-center text-gray-900 dark:text-white border border-indigo-200 dark:border-white/20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Want to shape our roadmap?
            </h2>
            <p className="text-lg text-gray-700 dark:text-white/80 mb-8 max-w-2xl mx-auto">
              Join the waitlist and share your feedback with us. Your input will
              help us prioritize features that matter most to colleges.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-indigo-600 dark:bg-white text-white dark:text-indigo-600 hover:bg-indigo-700 dark:hover:bg-indigo-50 font-semibold"
            >
              <Link href="/#waitlist">Join Waitlist</Link>
            </Button>
          </motion.div>
        </div>
      </main>
    </div>
  )
}


