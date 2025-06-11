"use client"
import Link from "next/link"
import { useTheme } from "next-themes"
import { Moon, Sun, Star, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"

const Navbar = () => {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <nav className="font-jura flex justify-between items-center mb-5 px-9 pt-9">
      {/* Left side - Home button */}
      <div className="flex items-center">
        <Link
          href={"/"}
          className="flex items-center hover:text-black dark:hover:text-white transition-colors"
          aria-label="Star"
        >
          <Star className="w-6 h-6 md:w-7 md:h-7 xl:w-8 xl:h-8 text-[#575757] dark:text-[#a3a3a3] hover:text-black dark:hover:text-white" />
        </Link>
      </div>

      {/* Right side - Navigation links and theme toggle */}
      <div className="flex items-center gap-3 xl:gap-10 text-xl xl:text-4xl text-[#575757] dark:text-[#a3a3a3]">
        <Link href={"/Project"} className="navButton hover:text-black dark:hover:text-white transition-colors">
          Project
        </Link>

        <Link href={"/About"} className="navButton hover:text-black dark:hover:text-white transition-colors">
          About
        </Link>

        <Link href={"/Contact"} className="navButton hover:text-black dark:hover:text-white transition-colors">
          Contact
        </Link>

        <Button
          variant="ghost"
          size="icon"
          onClick={toggleTheme}
          className="rounded-full p-0 hover:bg-transparent ml-2"
          aria-label="Toggle theme"
        >
          {theme === "dark" ? (
            <Sun className="w-5 h-5 md:w-6 md:h-6 xl:w-7 xl:h-7 text-yellow-400 hover:text-yellow-300 transition-colors" />
          ) : (
            <Moon className="w-5 h-5 md:w-6 md:h-6 xl:w-7 xl:h-7 text-[#575757] hover:text-black transition-colors" />
          )}
        </Button>

        <Link href={"/"} className="md:hidden ml-2">
          <Menu className="w-5 h-5" />
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
