"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Logo } from "@/components/logo"
import { ThemeToggle } from "@/components/theme-toggle"

export function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/50 dark:bg-black/50 bg-white/80 backdrop-blur-xl shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav
        className="mx-auto max-w-7xl px-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-1"
          >
            <Link href="/" className="flex items-center gap-2 group">
              <Logo className="h-8 w-8" />
              <p className="text-lg mt-0.5 font-poppins font-black text-gray-900 dark:text-white">
                Classdesk
              </p>
            </Link>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-2"
          >
            <ThemeToggle />
            <Button
              asChild
              variant="ghost"
              size="sm"
              className="text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-white/10 hover:text-gray-900 dark:hover:text-white hidden sm:flex"
            >
              <Link href="/roadmap">Roadmap</Link>
            </Button>
            <Button asChild size="sm" className="rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white">
              <a href="#waitlist">Join Waitlist</a>
            </Button>
          </motion.div>
        </div>
      </nav>
    </motion.header>
  )
}
