import { motion } from "framer-motion"
import { roadmapItems } from "@/app/roadmap/types"
import { RoadmapCard } from "./roadmap-card"

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

export const RoadmapTimeline = () => {
  return (
    <motion.div
      className="relative space-y-8"
      initial="initial"
      animate="animate"
      variants={staggerChildren}
    >
      {/* Timeline Line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gray-300 dark:from-gray-600/30 via-gray-300 dark:via-gray-600/30 to-transparent hidden md:block" />

      {roadmapItems.map((item, index) => (
        <RoadmapCard key={index} item={item} index={index} />
      ))}
    </motion.div>
  )
}
