"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { LuMoon, LuSun } from "react-icons/lu"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  // Prevents hydration flash
  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="w-9 h-9" />
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-md border border-gray-200 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <LuSun className="h-5 w-5 text-yellow-500" />
      ) : (
        <LuMoon className="h-5 w-5 text-slate-700" />
      )}
    </button>
  )
}