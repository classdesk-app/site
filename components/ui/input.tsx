import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "file:text-gray-900 dark:file:text-white placeholder:text-gray-400 dark:placeholder:text-white/40 selection:bg-orange-500 selection:text-white bg-white dark:bg-white/5 border-gray-300 dark:border-white/20 text-gray-900 dark:text-white h-9 w-full min-w-0 rounded-md border px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm hover:bg-gray-50 dark:hover:bg-white/10",
        "focus-visible:border-orange-400 focus-visible:ring-orange-400/30 focus-visible:ring-[3px]",
        "aria-invalid:ring-red-400/20 aria-invalid:border-red-400",
        className
      )}
      {...props}
    />
  )
}

export { Input }
