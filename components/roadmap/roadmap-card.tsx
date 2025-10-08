import { motion } from "framer-motion"
import { RoadmapItem } from "@/app/roadmap/types"
import { StatusBadge } from "./status-badge"

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

interface RoadmapCardProps {
  item: RoadmapItem
  index: number
}

export const RoadmapCard = ({ item, index }: RoadmapCardProps) => {
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
              className="flex items-center gap-3 text-gray-600 dark:text-white/70"
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
}
