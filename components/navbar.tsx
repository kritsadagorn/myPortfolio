"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { LanguageToggle } from "@/components/language-toggle"
import { FloatingMobileNav } from "@/components/floating-mobile-nav"
import { useLanguage } from "@/contexts/language-context"

export function Navbar() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const { t, language } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Scroll to top when pathname changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [pathname])

  const navItems = [
    { href: "/", label: t("nav.home") },
    { href: "/projects", label: t("nav.projects") },
    { href: "/about", label: t("nav.about") },
    { href: "/contact", label: t("nav.contact") },
  ]

  const isActive = (path: string) => pathname === path

  const handleNavClick = () => {
    // Additional scroll to top for immediate feedback
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg border-b border-gray-200/50 dark:border-gray-700/50"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 md:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo/Brand */}
            <Link href="/" className="flex items-center space-x-2 group" onClick={handleNavClick}>
              <div className="w-8 h-8 bg-gradient-to-br from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-300 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                <span className="text-white dark:text-gray-900 font-bold text-sm">{language === "en" ? "K" : "ก"}</span>
              </div>
              <span className="font-medium text-gray-900 dark:text-gray-100 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors tracking-wide">
                {language === "en" ? "Kritsadagorn" : "กฤษฎากร"}
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={handleNavClick}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-200 rounded-full tracking-wide ${
                    isActive(item.href)
                      ? "text-gray-900 dark:text-gray-100 bg-gray-100 dark:bg-gray-800"
                      : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800"
                  }`}
                >
                  {item.label}
                  {isActive(item.href) && (
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-900/5 to-gray-600/5 dark:from-gray-100/5 dark:to-gray-300/5 rounded-full" />
                  )}
                </Link>
              ))}
            </div>

            {/* Desktop Controls */}
            <div className="hidden md:flex items-center space-x-4">
              <LanguageToggle />
              <ThemeToggle />
              <div className="flex items-center space-x-2">
                <a
                  href="#"
                  className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-all duration-200"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-all duration-200"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
              <Button
                asChild
                className="bg-gray-900 hover:bg-gray-800 dark:bg-gray-100 dark:hover:bg-gray-200 text-white dark:text-gray-900 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:shadow-lg hover:scale-105"
              >
                <Link href="/contact" onClick={handleNavClick}>
                  <Mail className="w-4 h-4 mr-2" />
                  {t("nav.letsTalk")}
                </Link>
              </Button>
            </div>

            {/* Mobile Controls */}
            <div className="md:hidden flex items-center space-x-2">
              <LanguageToggle />
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer to prevent content from hiding behind fixed navbar */}
      <div className="h-16 md:h-20" />

      {/* Floating Mobile Navigation */}
      <FloatingMobileNav />
    </>
  )
}
