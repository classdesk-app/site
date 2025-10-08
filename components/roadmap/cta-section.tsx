import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const CTASection = () => {
  return (
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
  )
}
