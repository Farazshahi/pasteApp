"use client"

import { MoonIcon, SunIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"


export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()

  return (
    <Button
      variant="default"
      size="sm"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="bg-transparent has-[>svg]:px-[calc(var(--spacing)*0)] hover:bg-transparent shadow-none cursor-pointer"
      aria-label="Toggle theme"
    >
      {resolvedTheme === "dark" ?
        <SunIcon className=" text-white size-6 cursor-pointer" />
        :
        <MoonIcon className="  text-black size-6 cursor-pointer" />
      }
    </Button>
  )
}


