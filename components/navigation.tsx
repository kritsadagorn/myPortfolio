"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export function Navigation() {
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path

  return (
    <nav className="flex justify-end items-center p-6 md:p-8">
      <div className="flex items-center space-x-8">
        <Link
          href="/"
          className={`px-4 py-2 text-sm transition-colors ${
            isActive("/")
              ? "border border-gray-300 rounded-full text-gray-600 bg-gray-100"
              : "text-gray-600 hover:text-gray-900"
          }`}
        >
          Project
        </Link>
        <Link
          href="/about"
          className={`px-4 py-2 text-sm transition-colors ${
            isActive("/about")
              ? "border border-gray-300 rounded-full text-gray-600 bg-gray-100"
              : "text-gray-600 hover:text-gray-900"
          }`}
        >
          About
        </Link>
        <Link
          href="/contact"
          className={`px-4 py-2 text-sm transition-colors ${
            isActive("/contact")
              ? "border border-gray-300 rounded-full text-gray-600 bg-gray-100"
              : "text-gray-600 hover:text-gray-900"
          }`}
        >
          Contact
        </Link>
      </div>
    </nav>
  )
}
