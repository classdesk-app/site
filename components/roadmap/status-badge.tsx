import {
  CheckCircle2,
  Clock,
  AlertCircle
} from "lucide-react"

type RoadmapItemStatus = "completed" | "in-progress" | "planned"

export const StatusBadge = ({ status }: { status: RoadmapItemStatus }) => {
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
