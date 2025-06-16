"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink, Github } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { useLanguage } from "@/contexts/language-context"
import { useEffect, useState } from "react"

export default function Projects() {
  const { t } = useLanguage()
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const projects = [
    {
      id: 1,
      title: "Position Explorer",
      description: t("project.positionExplorer.desc"),
      image: "/images/laptop-mockup.png",
      tags: ["React", "Node.js", "MySQL", "Express"],
      liveUrl: "https://positionexplorer.vercel.app",
      githubUrl: "https://github.com/kritsadagorn/FrontJob",
      featured: true,
    },
    {
      id: 2,
      title: t("project.shabu.title"),
      description: t("project.taskManagement.desc"),
      image: "/placeholder.svg?height=300&width=500",
      tags: ["PHP", "MySQL"],
      liveUrl: "#",
      githubUrl: "",
      featured: false,
    },
    {
      id: 3,
      title: t("project.ecommerce.title"),
      description: t("project.ecommerce.desc"),
      image: "/placeholder.svg?height=300&width=500",
      tags: ["React", "Python", "Django", "Stripe"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
    {
      id: 4,
      title: "Weather Analytics App",
      description:
        "Real-time weather monitoring application with predictive analytics and beautiful data visualizations.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Vue.js", "Python", "FastAPI", "Chart.js"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
    {
      id: 5,
      title: "Social Media Dashboard",
      description:
        "Comprehensive social media management tool with scheduling, analytics, and multi-platform integration.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["React", "Node.js", "Redis", "Socket.io"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
    {
      id: 6,
      title: "Learning Management System",
      description: "Educational platform with course management, progress tracking, and interactive learning modules.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Next.js", "Supabase", "Tailwind", "Framer Motion"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
  ]

  const featuredProject = projects.find((p) => p.featured)
  const otherProjects = projects.filter((p) => !p.featured)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden transition-colors duration-300">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-full opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-gradient-to-br from-orange-100 to-pink-100 dark:from-orange-900/30 dark:to-pink-900/30 rounded-full opacity-20 blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-green-100 to-cyan-100 dark:from-green-900/30 dark:to-cyan-900/30 rounded-full opacity-15 blur-3xl animate-pulse delay-500"></div>

        {/* Floating geometric shapes */}
        <div className="absolute top-32 left-16 w-4 h-4 bg-blue-400/30 rotate-45 animate-bounce delay-300"></div>
        <div className="absolute top-64 right-32 w-3 h-3 bg-purple-400/30 rounded-full animate-bounce delay-700"></div>
        <div className="absolute bottom-48 left-1/4 w-2 h-2 bg-orange-400/40 rotate-45 animate-bounce delay-1000"></div>
        <div className="absolute bottom-32 right-16 w-3 h-3 bg-pink-400/30 rounded-full animate-bounce delay-1300"></div>
      </div>

      <Navbar />

      <div className="relative z-10 container mx-auto px-6 md:px-8 py-12 md:py-20">
        {/* Enhanced Header with Staggered Animation */}
        <div
          className={`mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="relative">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 dark:text-gray-100 tracking-wide mb-6">
              <span className="inline-block transform hover:scale-105 transition-transform duration-300">
                {t("projects.title")}
              </span>
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-6 transform origin-left scale-x-0 animate-[scaleX_1s_ease-out_0.5s_forwards]"></div>
            <p
              className={`text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl leading-relaxed transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
            >
              {t("projects.description")}
            </p>
          </div>
        </div>

        {/* Enhanced Featured Project */}
        {featuredProject && (
          <div
            className={`mb-20 transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="flex items-center mb-8">
              <h2 className="text-2xl md:text-3xl font-light text-gray-900 dark:text-gray-100 tracking-wide">
                {t("projects.featured")}
              </h2>
              <div className="ml-4 w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center animate-pulse">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
            </div>

            <Card
              className="overflow-hidden backdrop-blur-sm bg-white/70 dark:bg-gray-800/70 border-0 shadow-xl hover:shadow-2xl transition-all duration-700 group"
              onMouseEnter={() => setHoveredProject(featuredProject.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-auto overflow-hidden">
                  <Image
                    src={featuredProject.image || "/placeholder.svg"}
                    alt={featuredProject.title}
                    fill
                    className={`object-cover transition-all duration-700 ${hoveredProject === featuredProject.id ? "scale-110 rotate-1" : "scale-100 rotate-0"}`}
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-black/50 to-transparent transition-opacity duration-500 ${hoveredProject === featuredProject.id ? "opacity-100" : "opacity-0"}`}
                  ></div>

                  {/* Floating action buttons */}
                  <div
                    className={`absolute top-4 right-4 flex space-x-2 transition-all duration-500 ${hoveredProject === featuredProject.id ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"}`}
                  >
                    <Button
                      size="sm"
                      className="bg-white/90 hover:bg-white text-gray-900 rounded-full p-2 shadow-lg backdrop-blur-sm"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                    <Button
                      size="sm"
                      className="bg-white/90 hover:bg-white text-gray-900 rounded-full p-2 shadow-lg backdrop-blur-sm"
                    >
                      <Github className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                  <h3 className="text-3xl md:text-4xl font-light text-gray-900 dark:text-gray-100 mb-6 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {featuredProject.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8 text-lg">
                    {featuredProject.description}
                  </p>

                  <div className="flex flex-wrap gap-3 mb-8">
                    {featuredProject.tags.map((tag, index) => (
                      <span
                        key={tag}
                        className={`px-4 py-2 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-sm rounded-full transform transition-all duration-300 hover:scale-105 hover:shadow-lg ${hoveredProject === featuredProject.id ? "animate-pulse" : ""}`}
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    <Button className="bg-gray-900 hover:bg-gray-800 dark:bg-gray-100 dark:hover:bg-gray-200 text-white dark:text-gray-900 rounded-full px-6 py-3 transform hover:scale-105 transition-all duration-300 hover:shadow-xl group">
                      <ExternalLink className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
                      {t("projects.liveDemo")}
                    </Button>
                    <Button
                      variant="outline"
                      className="rounded-full border-2 border-gray-300 dark:border-gray-700 px-6 py-3 hover:border-gray-900 dark:hover:border-gray-100 transform hover:scale-105 transition-all duration-300 group"
                    >
                      <Github className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
                      {t("projects.sourceCode")}
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>
        )}

        {/* Enhanced Other Projects Grid */}
        <div className="mb-20">
          <h2
            className={`text-2xl md:text-3xl font-light text-gray-900 dark:text-gray-100 mb-8 tracking-wide transition-all duration-1000 delay-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
          >
            {t("projects.other")}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherProjects.map((project, index) => (
              <Card
                key={project.id}
                className={`overflow-hidden backdrop-blur-sm bg-white/70 dark:bg-gray-800/70 border-0 shadow-lg hover:shadow-2xl transition-all duration-500 group cursor-pointer transform hover:scale-105 hover:-rotate-1 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${800 + index * 150}ms` }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className={`object-cover transition-all duration-700 ${hoveredProject === project.id ? "scale-125 brightness-110" : "scale-100"}`}
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-opacity duration-500 ${hoveredProject === project.id ? "opacity-100" : "opacity-0"}`}
                  ></div>

                  {/* Project number badge */}
                  <div className="absolute top-4 left-4 w-8 h-8 bg-white/90 dark:bg-gray-900/90 rounded-full flex items-center justify-center text-sm font-bold text-gray-900 dark:text-gray-100 backdrop-blur-sm">
                    {index + 1}
                  </div>

                  {/* Hover overlay with buttons */}
                  <div
                    className={`absolute inset-0 flex items-center justify-center space-x-3 transition-all duration-500 ${hoveredProject === project.id ? "opacity-100" : "opacity-0"}`}
                  >
                    <Button
                      size="sm"
                      className="bg-white/90 hover:bg-white text-gray-900 rounded-full px-4 py-2 shadow-lg backdrop-blur-sm transform hover:scale-110 transition-all duration-300"
                    >
                      <ExternalLink className="w-3 h-3 mr-1" />
                      {t("projects.demo")}
                    </Button>
                    <Button
                      size="sm"
                      className="bg-white/90 hover:bg-white text-gray-900 rounded-full p-2 shadow-lg backdrop-blur-sm transform hover:scale-110 transition-all duration-300"
                    >
                      <Github className="w-3 h-3" />
                    </Button>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-medium text-gray-900 dark:text-gray-100 mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tag}
                        className={`px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full transition-all duration-300 hover:bg-gray-200 dark:hover:bg-gray-600 transform hover:scale-105 ${hoveredProject === project.id ? "animate-pulse" : ""}`}
                        style={{ animationDelay: `${tagIndex * 50}ms` }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Add bottom padding for mobile floating nav */}
      <div className="h-20 md:h-0" />
    </div>
  )
}
