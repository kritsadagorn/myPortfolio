"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setLanguage(language === "en" ? "th" : "en")}
      className="w-12 h-9 p-0 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-all duration-200 font-medium"
    >
      {language === "en" ? "TH" : "EN"}
    </Button>
  )
}
