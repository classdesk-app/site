import { motion } from "framer-motion"

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

export const HeroSection = () => {
  return (
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
        <span className="text-gray-900 dark:text-white">
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
  )
}
