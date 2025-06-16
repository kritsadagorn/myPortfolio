"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navbar } from "@/components/navbar"
import { useLanguage } from "@/contexts/language-context"
import { useEffect, useState } from "react"

export default function About() {
  const { t } = useLanguage()
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)
  const [hoveredTimeline, setHoveredTimeline] = useState<number | null>(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const skillsUpdated = [
    { name: "React", level: 70, category: t("category.frontend"), color: "from-blue-500 to-cyan-500" },
    { name: "Node.js", level: 60, category: t("category.backend"), color: "from-green-500 to-emerald-500" },
    { name: "Express.js", level: 60, category: t("category.backend"), color: "from-gray-700 to-gray-500" },
    { name: "Next.js", level: 50, category: t("category.framework"), color: "from-gray-800 to-gray-600" },
    { name: "Python", level: 50, category: t("category.language"), color: "from-yellow-500 to-orange-500" },
    { name: "TypeScript", level: 30, category: t("category.language"), color: "from-blue-600 to-indigo-600" },
    { name: "MongoDB", level: 20, category: t("category.database"), color: "from-green-600 to-teal-600" },
  ]

  const timelineUpdated = [
    {
      year: "2024",
      title: t("timeline.2024.title"),
      description: t("timeline.2024.desc"),
      color: "from-blue-500 to-purple-500",
      icon: "🎓",
    },
    {
      year: "2023",
      title: t("timeline.2023.title"),
      description: t("timeline.2023.desc"),
      color: "from-green-500 to-teal-500",
      icon: "💻",
    },
    {
      year: "2022",
      title: t("timeline.2022.title"),
      description: t("timeline.2022.desc"),
      color: "from-orange-500 to-red-500",
      icon: "🚀",
    },
    {
      year: "2021",
      title: t("timeline.2021.title"),
      description: t("timeline.2021.desc"),
      color: "from-purple-500 to-pink-500",
      icon: "⚡",
    },
  ]

  const interests = [
    { name: t("interest.webdev"), icon: "🌐", color: "from-blue-500 to-cyan-500" },
    { name: t("interest.aiml"), icon: "🤖", color: "from-purple-500 to-pink-500" },
    { name: t("interest.opensource"), icon: "🔓", color: "from-green-500 to-emerald-500" },
    { name: t("interest.uiux"), icon: "🎨", color: "from-orange-500 to-red-500" },
    { name: t("interest.cloud"), icon: "☁️", color: "from-gray-500 to-blue-500" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden transition-colors duration-300">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 right-10 w-80 h-80 bg-gradient-to-br from-green-100 to-blue-100 dark:from-green-900/30 dark:to-blue-900/30 rounded-full opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 left-10 w-80 h-80 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-full opacity-20 blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-gradient-to-br from-yellow-100 to-orange-100 dark:from-yellow-900/30 dark:to-orange-900/30 rounded-full opacity-15 blur-3xl animate-pulse delay-500"></div>

        {/* Floating elements */}
        <div className="absolute top-24 left-12 w-3 h-3 bg-blue-400/40 rounded-full animate-bounce delay-300"></div>
        <div className="absolute top-48 right-24 w-4 h-4 bg-purple-400/30 rotate-45 animate-bounce delay-700"></div>
        <div className="absolute bottom-64 left-1/4 w-2 h-2 bg-green-400/50 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute bottom-32 right-1/3 w-3 h-3 bg-pink-400/40 rotate-45 animate-bounce delay-1300"></div>
      </div>

      <Navbar />

      <div className="relative z-10 container mx-auto px-6 md:px-8 py-12 md:py-20">
        <div className="max-w-6xl mx-auto">
          {/* Enhanced Header */}
          <div
            className={`mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 dark:text-gray-100 tracking-wide mb-6">
              <span className="inline-block transform hover:scale-105 transition-transform duration-300">
                {t("about.title")}
              </span>
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-green-500 to-blue-500 rounded-full transform origin-left scale-x-0 animate-[scaleX_1s_ease-out_0.5s_forwards]"></div>
          </div>

          {/* Enhanced Introduction */}
          <div className="grid lg:grid-cols-3 gap-12 mb-20">
            <div
              className={`lg:col-span-2 space-y-6 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <div className="backdrop-blur-sm bg-white/70 dark:bg-gray-800/70 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 group">
                <h2 className="text-2xl md:text-3xl font-light text-gray-900 dark:text-gray-100 mb-6 tracking-wide group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {t("about.hello")}
                </h2>
                <div className="space-y-6 text-gray-600 dark:text-gray-400 leading-relaxed">
                  <p className="text-lg transform hover:translate-x-2 transition-transform duration-300">
                    {t("about.intro1")}
                  </p>
                  <p className="transform hover:translate-x-2 transition-transform duration-300 delay-100">
                    {t("about.intro2")}
                  </p>
                  <p className="transform hover:translate-x-2 transition-transform duration-300 delay-200">
                    {t("about.intro3")}
                  </p>
                </div>
              </div>
            </div>

            <div
              className={`space-y-6 transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              {/* Quick Facts Card */}
              <Card className="backdrop-blur-sm bg-white/70 dark:bg-gray-800/70 border-0 shadow-lg hover:shadow-xl transition-all duration-500 group">
                <CardContent className="p-6">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-4 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                    {t("about.quickFacts")}
                  </h3>
                  <div className="space-y-4 text-sm">
                    {[
                      { label: t("about.age"), value: "22", icon: "🎂" },
                      { label: t("about.location"), value: t("location.thailand"), icon: "📍" },
                      { label: t("about.education"), value: "RMUTI", icon: "🎓" },
                      { label: t("about.field"), value: t("field.computereng"), icon: "💻" },
                    ].map((fact, index) => (
                      <div
                        key={fact.label}
                        className={`flex justify-between items-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 transform hover:scale-105`}
                        style={{ transitionDelay: `${index * 100}ms` }}
                      >
                        <span className="text-gray-600 dark:text-gray-400 flex items-center">
                          <span className="mr-2">{fact.icon}</span>
                          {fact.label}
                        </span>
                        <span className="text-gray-900 dark:text-gray-100 font-medium">{fact.value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Interests Card */}
              <Card className="backdrop-blur-sm bg-white/70 dark:bg-gray-800/70 border-0 shadow-lg hover:shadow-xl transition-all duration-500 group">
                <CardContent className="p-6">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-4 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors duration-300">
                    {t("about.interests")}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {interests.map((interest, index) => (
                      <Badge
                        key={interest.name}
                        className={`bg-gradient-to-r ${interest.color} text-white border-0 hover:scale-110 transition-all duration-300 cursor-pointer transform hover:rotate-3`}
                        style={{ transitionDelay: `${index * 100}ms` }}
                      >
                        <span className="mr-1">{interest.icon}</span>
                        {interest.name}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Enhanced Skills Section */}
          <div
            className={`mb-20 transition-all duration-1000 delay-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 dark:text-gray-100 mb-8 tracking-wide">
              {t("about.skills")}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {skillsUpdated.map((skill, index) => (
                <Card
                  key={skill.name}
                  className={`backdrop-blur-sm bg-white/70 dark:bg-gray-800/70 border-0 shadow-lg hover:shadow-xl transition-all duration-500 group cursor-pointer transform hover:scale-105 ${hoveredSkill === skill.name ? "ring-2 ring-blue-400" : ""}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                  onMouseEnter={() => setHoveredSkill(skill.name)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center mb-4">
                      <span className="font-medium text-gray-900 dark:text-gray-100 text-lg group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                        {skill.name}
                      </span>
                      <Badge
                        className={`bg-gradient-to-r ${skill.color} text-white border-0 transform group-hover:scale-110 transition-all duration-300`}
                      >
                        {skill.category}
                      </Badge>
                    </div>
                    <div className="relative">
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                        <div
                          className={`bg-gradient-to-r ${skill.color} h-3 rounded-full transition-all duration-1000 ease-out transform origin-left ${hoveredSkill === skill.name ? "animate-pulse" : ""}`}
                          style={{
                            width: `${skill.level}%`,
                            transitionDelay: `${index * 200}ms`,
                          }}
                        ></div>
                      </div>
                      <span
                        className={`absolute right-0 -top-6 text-sm font-bold text-gray-600 dark:text-gray-400 transition-all duration-300 ${hoveredSkill === skill.name ? "text-blue-600 dark:text-blue-400 scale-110" : ""}`}
                      >
                        {skill.level}%
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Enhanced Timeline */}
          <div
            className={`mb-20 transition-all duration-1000 delay-900 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 dark:text-gray-100 mb-8 tracking-wide">
              {t("about.journey")}
            </h2>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full"></div>

              <div className="space-y-8">
                {timelineUpdated.map((item, index) => (
                  <Card
                    key={index}
                    className={`backdrop-blur-sm bg-white/70 dark:bg-gray-800/70 border-0 shadow-lg hover:shadow-xl transition-all duration-500 group ml-16 cursor-pointer transform hover:scale-105 hover:-rotate-1 ${hoveredTimeline === index ? "ring-2 ring-purple-400" : ""}`}
                    style={{ transitionDelay: `${index * 200}ms` }}
                    onMouseEnter={() => setHoveredTimeline(index)}
                    onMouseLeave={() => setHoveredTimeline(null)}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 relative">
                          {/* Timeline dot */}
                          <div
                            className={`absolute -left-20 top-2 w-12 h-12 bg-gradient-to-br ${item.color} text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg transform transition-all duration-300 ${hoveredTimeline === index ? "scale-125 rotate-12" : ""}`}
                          >
                            <span className="text-2xl">{item.icon}</span>
                          </div>
                          <div
                            className={`w-16 h-16 bg-gradient-to-br ${item.color} text-white rounded-2xl flex items-center justify-center font-bold text-xl shadow-lg transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-6`}
                          >
                            {item.year}
                          </div>
                        </div>
                        <div className="flex-grow">
                          <h3 className="text-xl font-medium text-gray-900 dark:text-gray-100 mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                            {item.title}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-400 leading-relaxed transform group-hover:translate-x-2 transition-transform duration-300">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add bottom padding for mobile floating nav */}
      <div className="h-20 md:h-0" />
    </div>
  )
}
