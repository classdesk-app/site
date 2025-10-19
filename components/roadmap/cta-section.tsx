import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const CTASection = () => {
  return (
    <motion.div
      className="mt-20 bg-gray-50 dark:bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 text-center text-gray-900 dark:text-white border border-gray-200 dark:border-white/20"
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
        className="bg-gray-900 hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-100 text-white dark:text-gray-900 font-semibold"
      >
        <Link href="/#waitlist">Join Waitlist</Link>
      </Button>
    </motion.div>
  )
}
