"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navbar } from "@/components/navbar"
import { ArrowRight, Download, ExternalLink, Github, Code, Palette, Database, Globe } from "lucide-react"
import { useEffect, useState } from "react"
import { useLanguage } from "@/contexts/language-context"

const skills = [
  { name: "Frontend", icon: Code, color: "from-blue-500 to-cyan-500" },
  { name: "Backend", icon: Database, color: "from-green-500 to-emerald-500" },
  { name: "Design", icon: Palette, color: "from-purple-500 to-pink-500" },
  { name: "Full-Stack", icon: Globe, color: "from-orange-500 to-red-500" },
]

export default function Homepage() {
  const [isVisible, setIsVisible] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const recentProjects = [
    {
      title: "Position Explorer",
      description: t("project.positionExplorer.desc"),
      tags: ["React", "Node.js", "MongoDB"],
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: t("project.taskManagement.title"),
      description: t("project.taskManagement.desc"),
      tags: ["Next.js", "TypeScript", "PostgreSQL"],
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: t("project.ecommerce.title"),
      description: t("project.ecommerce.desc"),
      tags: ["React", "Python", "Django"],
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden transition-colors duration-300">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-full opacity-30 blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-orange-100 to-pink-100 dark:from-orange-900/30 dark:to-pink-900/30 rounded-full opacity-30 blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-green-100 to-blue-100 dark:from-green-900/30 dark:to-blue-900/30 rounded-full opacity-20 blur-3xl animate-pulse delay-500"></div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-gray-400 dark:bg-gray-600 rounded-full animate-bounce delay-300"></div>
        <div className="absolute top-40 right-32 w-3 h-3 bg-gray-300 dark:bg-gray-700 rounded-full animate-bounce delay-700"></div>
        <div className="absolute bottom-32 left-32 w-2 h-2 bg-gray-400 dark:bg-gray-600 rounded-full animate-bounce delay-1000"></div>
      </div>

      <Navbar />

      {/* Hero Section */}
      <section className="relative z-10 container mx-auto px-6 md:px-8 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[80vh]">
          {/* Left Column - Enhanced Text Content */}
          <div
            className={`space-y-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-full border border-gray-200 dark:border-gray-700 shadow-sm">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></div>
                <span className="text-sm text-gray-600 dark:text-gray-400">{t("home.availableForWork")}</span>
              </div>

              <h1 className="text-6xl md:text-7xl lg:text-8xl font-light text-gray-900 dark:text-gray-100 tracking-wide leading-none">
                {t("home.portfolio")}
                <span className="block text-2xl md:text-3xl text-gray-600 dark:text-gray-400 font-normal mt-4 tracking-normal">
                  {t("home.name")}
                </span>
              </h1>

              <div className="w-24 h-1 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-300 rounded-full"></div>
            </div>

            <div className="space-y-6 text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-lg">
              <p className="text-xl">{t("home.intro")}</p>
              <p>{t("home.description")}</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                className="bg-gray-900 hover:bg-gray-800 dark:bg-gray-100 dark:hover:bg-gray-200 text-white dark:text-gray-900 px-8 py-4 rounded-full text-base font-medium transition-all duration-300 hover:shadow-xl hover:scale-105 group"
              >
                <Link href="/projects">
                  {t("home.viewProjects")}
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>

              <Button
                variant="outline"
                className="px-8 py-4 rounded-full text-base font-medium border-2 border-gray-300 dark:border-gray-700 hover:border-gray-900 dark:hover:border-gray-100 hover:bg-gray-900 dark:hover:bg-gray-100 hover:text-white dark:hover:text-gray-900 transition-all duration-300 group"
              >
                <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                {t("home.downloadCV")}
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="flex items-center space-x-8 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">15+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{t("home.projects")}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">3+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{t("home.yearsLearning")}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">100%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{t("home.passion")}</div>
              </div>
            </div>
          </div>

          {/* Right Column - Enhanced Project Showcase */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="relative">
              {/* Main Project Card */}
              <Card className="overflow-hidden backdrop-blur-sm bg-white/80 dark:bg-gray-800/80 border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 group">
                <div className="relative">
                  <Image
                    src="/images/laptop-mockup.png"
                    alt="Position Explorer project on laptop"
                    width={600}
                    height={400}
                    className="w-full h-auto group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-light text-gray-900 dark:text-gray-100">Position Explorer</h3>
                    <div className="flex space-x-2">
                      <Button
                        size="sm"
                        variant="ghost"
                        className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
                      >
                        <Github className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                    {t("project.positionExplorer.desc")}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {["React", "Node.js", "MongoDB", "Express"].map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full opacity-80 animate-bounce delay-300"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-br from-orange-500 to-pink-500 rounded-full opacity-80 animate-bounce delay-700"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Preview Section */}
      <section className="relative z-10 container mx-auto px-6 md:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 dark:text-gray-100 mb-4 tracking-wide">
            {t("home.whatIDo")}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">{t("home.whatIDoDesc")}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <Card
              key={skill.name}
              className={`group cursor-pointer backdrop-blur-sm bg-white/70 dark:bg-gray-800/70 border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8 text-center">
                <div
                  className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${skill.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                >
                  <skill.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-medium text-gray-900 dark:text-gray-100 mb-2">{skill.name}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {t(`skills.${skill.name.toLowerCase().replace("-", "")}`)}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Recent Projects Section */}
      <section className="relative z-10 container mx-auto px-6 md:px-8 py-20">
        <div className="flex items-center justify-between mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 dark:text-gray-100 mb-4 tracking-wide">
              {t("home.recentWork")}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">{t("home.recentWorkDesc")}</p>
          </div>
          <Button
            asChild
            variant="outline"
            className="hidden md:flex px-6 py-3 rounded-full border-2 border-gray-300 dark:border-gray-700 hover:border-gray-900 dark:hover:border-gray-100 hover:bg-gray-900 dark:hover:bg-gray-100 hover:text-white dark:hover:text-gray-900 transition-all duration-300"
          >
            <Link href="/projects">
              {t("home.viewAllProjects")}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentProjects.map((project, index) => (
            <Card
              key={project.title}
              className={`group cursor-pointer backdrop-blur-sm bg-white/70 dark:bg-gray-800/70 border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-medium text-gray-900 dark:text-gray-100 mb-2 group-hover:text-gray-600 dark:group-hover:text-gray-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 md:hidden">
          <Button
            asChild
            variant="outline"
            className="px-6 py-3 rounded-full border-2 border-gray-300 dark:border-gray-700 hover:border-gray-900 dark:hover:border-gray-100 hover:bg-gray-900 dark:hover:bg-gray-100 hover:text-white dark:hover:text-gray-900 transition-all duration-300"
          >
            <Link href="/projects">
              {t("home.viewAllProjects")}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 container mx-auto px-6 md:px-8 py-20">
        <div className="relative overflow-hidden">
          {/* Enhanced Background with Multiple Layers */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black dark:from-gray-100 dark:via-gray-200 dark:to-gray-300 rounded-3xl"></div>

          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden rounded-3xl">
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute -bottom-20 -left-20 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-2xl animate-pulse delay-500"></div>

            {/* Floating Geometric Shapes */}
            <div className="absolute top-8 right-8 w-4 h-4 bg-blue-400/30 rotate-45 animate-bounce delay-300"></div>
            <div className="absolute bottom-8 left-8 w-3 h-3 bg-purple-400/30 rounded-full animate-bounce delay-700"></div>
            <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-cyan-400/40 rotate-45 animate-bounce delay-1000"></div>
            <div className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-pink-400/30 rounded-full animate-bounce delay-1300"></div>
          </div>

          {/* Grid Pattern Overlay */}
          <div
            className="absolute inset-0 opacity-5 dark:opacity-10 rounded-3xl"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
              backgroundSize: "20px 20px",
            }}
          ></div>

          {/* Main Content */}
          <div className="relative p-12 md:p-16 text-center">
            {/* Icon Section */}
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl transform rotate-3 hover:rotate-6 transition-transform duration-300">
                  <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                </div>
                {/* Floating particles around icon */}
                <div className="absolute -top-2 -right-2 w-3 h-3 bg-yellow-400 rounded-full animate-ping"></div>
                <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-cyan-400 rounded-full animate-ping delay-500"></div>
              </div>
            </div>

            {/* Enhanced Typography */}
            <div className="space-y-6 mb-10">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white dark:text-gray-900 tracking-wide leading-tight">
                <span className="inline-block transform hover:scale-105 transition-transform duration-300">
                  {t("home.ctaTitle").split(" ").slice(0, 2).join(" ")}
                </span>
                <br />
                <span className="inline-block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-medium transform hover:scale-105 transition-transform duration-300 delay-100">
                  {t("home.ctaTitle").split(" ").slice(2, 4).join(" ")}
                </span>
                <br />
                <span className="inline-block transform hover:scale-105 transition-transform duration-300 delay-200">
                  {t("home.ctaTitle").split(" ").slice(4).join(" ")}
                </span>
              </h2>

              <div className="max-w-3xl mx-auto">
                <p className="text-lg md:text-xl text-gray-300 dark:text-gray-600 leading-relaxed">
                  {t("home.ctaDesc")}
                </p>
              </div>
            </div>

            {/* Enhanced Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button
                asChild
                className="group relative overflow-hidden bg-white dark:bg-gray-900 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 px-8 py-4 rounded-full text-base font-medium transition-all duration-300 hover:shadow-2xl hover:scale-105 border-0"
              >
                <Link href="/contact">
                  <span className="relative z-10 flex items-center">
                    {t("home.startConversation")}
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                  {/* Button background animation */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-full"></div>
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                className="group relative overflow-hidden border-2 border-white/30 dark:border-gray-900/30 text-white dark:text-gray-900 hover:bg-white/10 dark:hover:bg-gray-900/10 px-8 py-4 rounded-full text-base font-medium transition-all duration-300 hover:border-white/60 dark:hover:border-gray-900/60 hover:shadow-xl"
              >
                <Link href="/about">
                  <span className="relative z-10 flex items-center">
                    {t("home.learnMore")}
                    <svg
                      className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </span>
                  {/* Button glow effect */}
                  <div className="absolute inset-0 bg-white/5 dark:bg-gray-900/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
                </Link>
              </Button>
            </div>

            {/* Stats or Features Row */}
            <div className="mt-12 pt-8 border-t border-white/20 dark:border-gray-900/20">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="group text-center">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-white dark:text-gray-900 font-medium mb-1">Fast Delivery</h3>
                  <p className="text-gray-300 dark:text-gray-600 text-sm">Quick turnaround times</p>
                </div>

                <div className="group text-center">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-white dark:text-gray-900 font-medium mb-1">Quality Code</h3>
                  <p className="text-gray-300 dark:text-gray-600 text-sm">Clean & maintainable</p>
                </div>

                <div className="group text-center">
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-white dark:text-gray-900 font-medium mb-1">Collaboration</h3>
                  <p className="text-gray-300 dark:text-gray-600 text-sm">Work together seamlessly</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Add bottom padding for mobile floating nav */}
      <div className="h-20 md:h-0" />
    </div>
  )
}
