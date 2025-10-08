"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "./theme-provider"
import { Button } from "./ui/button"
import { useEffect, useState } from "react"

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button
        size="icon"
        className="text-foreground hover:bg-accent rounded-lg h-8 w-8"
        disabled
      >
        <Sun className="h-5 w-5" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    )
  }

  return <ThemeToggleClient />
}

function ThemeToggleClient() {
  const { theme, toggleTheme } = useTheme()

  return (
    <Button
    variant="outline"
      size="icon"
      onClick={toggleTheme}
      className="hover:bg-accent rounded-lg h-8 w-8"
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5" />
      ) : (
        <Moon className="h-5 w-5" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}

