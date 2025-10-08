import {
  Rocket,
  Zap,
  Brain,
} from "lucide-react"

export type RoadmapItem = {
  quarter: string
  title: string
  status: "completed" | "in-progress" | "planned"
  icon: typeof Rocket
  color: string
  features: string[]
}

export const roadmapItems: RoadmapItem[] = [
  {
    quarter: "Q4 2025",
    title: "Beta Launch",
    status: "in-progress",
    icon: Rocket,
    color: "from-green-500 to-emerald-500",
    features: [
      "Department-level workspaces",
      "Curriculum management",
      "Attendance, Marksheets and Sessions",
      "Role-based access control",
    ],
  },
  {
    quarter: "Q1 2026",
    title: "Integrations & Automation",
    status: "planned",
    icon: Zap,
    color: "from-yellow-500 to-orange-500",
    features: [
      "Student portal customization",
      "Collabration and notifications",
      "Forms and Workflow Automations",
    ],
  },
  {
    quarter: "Q2 2026",
    title: "AI Assistance",
    status: "planned",
    icon: Brain,
    color: "from-purple-500 to-pink-500",
    features: [
      "AI-powered attendance tracking",
      "Reporting and Analytics",
      "Marketplace for custom integrations",
    ],
  },
]
