"use client"

import { motion } from "framer-motion"
import { WaitlistForm } from "@/components/waitlist-form"

export const WaitlistSection = () => {
  return (
    <section id="waitlist" className="py-24 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Join 500+ Colleges Already Waiting
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-white/70 mb-2">
              <strong className="text-gray-900 dark:text-white">🎁 Limited Offer:</strong> First 100 colleges get 6 months premium FREE
            </p>
            <p className="text-sm text-gray-600 dark:text-white/60 mb-8">
              ⚡ Launching Q4 2025 | Spots filling fast | Priority onboarding for early signups
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">6 Months Premium FREE</h3>
                  <p className="text-gray-600 dark:text-white/60 text-sm">Full access to all features, analytics, and premium support (Worth ₹2.4L)</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Zero Setup Cost</h3>
                  <p className="text-gray-600 dark:text-white/60 text-sm">Free migration from your current system + custom training sessions</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Priority Implementation</h3>
                  <p className="text-gray-600 dark:text-white/60 text-sm">Skip the queue - Get live in 2 weeks with dedicated onboarding specialist</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right side - Form */}
          <motion.div
            className="bg-white dark:bg-white/5 backdrop-blur-md rounded-2xl p-8 md:p-10 border border-gray-100 dark:border-white/10"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <WaitlistForm />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
