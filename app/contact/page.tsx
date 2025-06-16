"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, MapPin, Phone, Github, Twitter, Send, Clock, CheckCircle } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { useLanguage } from "@/contexts/language-context"
import { useEffect, useState } from "react"

export default function Contact() {
  const { t } = useLanguage()
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const contactMethods = [
    {
      id: "email",
      icon: Mail,
      label: "Email",
      value: "kritsadagorn@example.com",
      color: "from-blue-500 to-cyan-500",
      href: "mailto:kritsadagorn@example.com",
    },
    {
      id: "phone",
      icon: Phone,
      label: "Phone",
      value: "+66 123 456 789",
      color: "from-green-500 to-emerald-500",
      href: "tel:+66123456789",
    },
    {
      id: "location",
      icon: MapPin,
      label: "Location",
      value: t("location.bangkok"),
      color: "from-purple-500 to-pink-500",
      href: "#",
    },
  ]

  const socialLinks = [
    {
      id: "github",
      icon: Github,
      label: "GitHub",
      value: "github.com/kritsadagorn",
      color: "from-gray-700 to-gray-900",
      href: "#",
    },
    {
      id: "twitter",
      icon: Twitter,
      label: "Twitter",
      value: "@kritsadagorn",
      color: "from-sky-500 to-blue-600",
      href: "#",
    },
  ]

  const availabilityItems = [
    { icon: CheckCircle, text: t("contact.availableFreelance"), color: "text-green-500" },
    { icon: CheckCircle, text: t("contact.openCollaboration"), color: "text-blue-500" },
    { icon: CheckCircle, text: t("contact.acceptingOpportunities"), color: "text-purple-500" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden transition-colors duration-300">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30 rounded-full opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-full opacity-20 blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-green-100 to-yellow-100 dark:from-green-900/30 dark:to-yellow-900/30 rounded-full opacity-15 blur-3xl animate-pulse delay-500"></div>

        {/* Floating contact icons */}
        <div className="absolute top-32 right-16 w-8 h-8 bg-blue-400/20 rounded-full flex items-center justify-center animate-bounce delay-300">
          <Mail className="w-4 h-4 text-blue-500" />
        </div>
        <div className="absolute top-64 left-24 w-6 h-6 bg-purple-400/20 rounded-full flex items-center justify-center animate-bounce delay-700">
          <Phone className="w-3 h-3 text-purple-500" />
        </div>
        <div className="absolute bottom-48 right-1/4 w-7 h-7 bg-green-400/20 rounded-full flex items-center justify-center animate-bounce delay-1000">
          <MapPin className="w-3 h-3 text-green-500" />
        </div>
      </div>

      <Navbar />

      <div className="relative z-10 container mx-auto px-6 md:px-8 py-12 md:py-20">
        <div className="max-w-6xl mx-auto">
          {/* Enhanced Header */}
          <div
            className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 dark:text-gray-100 tracking-wide mb-6">
              <span className="inline-block transform hover:scale-105 transition-transform duration-300">
                {t("contact.title")}
              </span>
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-6 transform origin-center scale-x-0 animate-[scaleX_1s_ease-out_0.5s_forwards]"></div>
            <p
              className={`text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
            >
              {t("contact.description")}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Enhanced Contact Form */}
            <div
              className={`lg:col-span-2 transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <Card className="backdrop-blur-sm bg-white/70 dark:bg-gray-800/70 border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <Send className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-light text-gray-900 dark:text-gray-100 tracking-wide group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {t("contact.sendMessage")}
                    </h2>
                  </div>

                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="group">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                          {t("contact.name")}
                        </label>
                        <Input
                          className="rounded-xl border-2 border-gray-200 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 transition-all duration-300 hover:border-gray-300 dark:hover:border-gray-500 transform hover:scale-105"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                      </div>
                      <div className="group">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                          {t("contact.email")}
                        </label>
                        <Input
                          type="email"
                          className="rounded-xl border-2 border-gray-200 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 transition-all duration-300 hover:border-gray-300 dark:hover:border-gray-500 transform hover:scale-105"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="group">
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                        {t("contact.subject")}
                      </label>
                      <Input
                        className="rounded-xl border-2 border-gray-200 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 transition-all duration-300 hover:border-gray-300 dark:hover:border-gray-500 transform hover:scale-105"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      />
                    </div>

                    <div className="group">
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                        {t("contact.message")}
                      </label>
                      <Textarea
                        className="rounded-xl border-2 border-gray-200 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-400 min-h-[150px] bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 transition-all duration-300 hover:border-gray-300 dark:hover:border-gray-500 transform hover:scale-105 resize-none"
                        placeholder={t("contact.messagePlaceholder")}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      />
                    </div>

                    <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 rounded-xl text-base font-medium tracking-wide transition-all duration-300 hover:shadow-xl hover:scale-105 group">
                      <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                      {t("contact.send")}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Enhanced Contact Information */}
            <div
              className={`space-y-6 transition-all duration-1000 delay-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              {/* Contact Methods */}
              <Card className="backdrop-blur-sm bg-white/70 dark:bg-gray-800/70 border-0 shadow-lg hover:shadow-xl transition-all duration-500 group">
                <CardContent className="p-6">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-6 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {t("contact.getInTouch")}
                  </h3>
                  <div className="space-y-4">
                    {contactMethods.map((method, index) => (
                      <a
                        key={method.id}
                        href={method.href}
                        className={`flex items-center space-x-4 p-3 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 group cursor-pointer transform hover:scale-105 ${hoveredCard === method.id ? "bg-gray-100 dark:bg-gray-700" : ""}`}
                        style={{ transitionDelay: `${index * 100}ms` }}
                        onMouseEnter={() => setHoveredCard(method.id)}
                        onMouseLeave={() => setHoveredCard(null)}
                      >
                        <div
                          className={`w-10 h-10 bg-gradient-to-br ${method.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                        >
                          <method.icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">{method.label}</div>
                          <div className="text-gray-700 dark:text-gray-300 font-medium">{method.value}</div>
                        </div>
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Social Links */}
              <Card className="backdrop-blur-sm bg-white/70 dark:bg-gray-800/70 border-0 shadow-lg hover:shadow-xl transition-all duration-500 group">
                <CardContent className="p-6">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-6 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                    {t("contact.followMe")}
                  </h3>
                  <div className="space-y-3">
                    {socialLinks.map((social, index) => (
                      <a
                        key={social.id}
                        href={social.href}
                        className={`flex items-center space-x-4 p-3 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 group cursor-pointer transform hover:scale-105 ${hoveredCard === social.id ? "bg-gray-100 dark:bg-gray-700" : ""}`}
                        style={{ transitionDelay: `${index * 100}ms` }}
                        onMouseEnter={() => setHoveredCard(social.id)}
                        onMouseLeave={() => setHoveredCard(null)}
                      >
                        <div
                          className={`w-10 h-10 bg-gradient-to-br ${social.color} rounded-lg flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}
                        >
                          <social.icon className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-gray-700 dark:text-gray-300 font-medium">{social.value}</span>
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Availability */}
              <Card className="backdrop-blur-sm bg-white/70 dark:bg-gray-800/70 border-0 shadow-lg hover:shadow-xl transition-all duration-500 group">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-300">
                      {t("contact.availability")}
                    </h3>
                  </div>
                  <div className="space-y-3 text-sm">
                    {availabilityItems.map((item, index) => (
                      <div
                        key={index}
                        className={`flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 transform hover:translate-x-2`}
                        style={{ transitionDelay: `${index * 100}ms` }}
                      >
                        <item.icon className={`w-4 h-4 ${item.color}`} />
                        <span className="text-gray-600 dark:text-gray-400">{item.text}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex items-center space-x-2 text-xs text-gray-500 dark:text-gray-500">
                      <Clock className="w-4 h-4" />
                      <span>{t("contact.responseTime")}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Add bottom padding for mobile floating nav */}
      <div className="h-20 md:h-0" />
    </div>
  )
}
