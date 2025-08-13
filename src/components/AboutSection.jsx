import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  MapPin,
  Mail,
  Calendar,
  Github,
  Code,
  Coffee,
  Trophy,
  Heart,
  Sparkles,
  Target,
  Users,
  Zap,
  Search,
} from "lucide-react";

const AboutSection = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const stats = [
    { icon: Code, label: "Stack", value: "5+", color: "text-[#728559]" },
    {
      icon: Users,
      label: "Freelance Work",
      value: "2+",
      color: "text-[#4169e1]",
    },
  ];

  const highlights = [
    "> Problem Solving",
    "> Communication",
    "> Teamwork",
    "> Stress Management",
    "> Creativity",
  ];

  const techStack = [
    "HTML/CSS [Basic]",
    "Javascript [Intermediate]",
    "React.js [Intermediate]",
    "Next.js [Basic]",
    "Node.js [Basic]",
    "PHP [Basic]",
    "MongoDB",
    "MySQL",
    "Prisma",
    "Python [Basic]",
    "Git",
  ];

  const filteredTechStack = techStack.filter((tech) =>
    tech.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Hero Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-10">
        {/* Photo Section - Larger but with reduced margins */}
        <div className="flex justify-center lg:justify-start order-1 lg:order-1">
          <div className="relative group">
            {/* Main Photo Container - Reduced margins */}
            <div className="w-72 h-72 md:w-80 md:h-80 lg:ml-38 rounded-2xl overflow-hidden shadow-xl border-4 border-[#948a75] transform hover:scale-105 transition-all duration-500 bg-white">
              <img
                src="https://img5.pic.in.th/file/secure-sv1/pic932adb7d7983744c.jpg"
                alt="Kritsadgorn - Intern as a Fullstack Developer"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Subtle overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#12160b]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                <div className="text-[#cec7b5] text-center">
                  <p className="font-medium text-sm">
                    Kritsadagorn Punnapanich
                  </p>
                  <p className="text-xs opacity-80">
                    Intern as a Fullstack Developer
                  </p>
                </div>
              </div>
            </div>

            {/* Subtle Glow Effect */}
            <div className="absolute -inset-3 bg-gradient-to-r from-[#a4b292]/25 via-[#728559]/25 to-[#a4b292]/25 rounded-2xl blur-lg opacity-40 animate-pulse -z-10"></div>

            {/* Minimal Status Badge */}
            <div className="absolute -top-2 -right-2 bg-[#728559] text-[#cec7b5] px-3 py-1 rounded-full text-xs font-medium shadow-md">
              <Sparkles className="w-3 h-3 inline mr-1" />
              Internship
            </div>
          </div>
        </div>

        {/* Information Section - Clean and minimal */}
        <div className="space-y-6 order-2 lg:order-2">
          <div className="text-center lg:text-left space-y-3">
            <div className="space-y-2">
              <h1 className="text-3xl md:text-4xl font-bold text-[#12160b] tracking-tight">
                Kritsadagorn Punnapanich
              </h1>
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <Zap className="w-5 h-5 text-[#728559]" />
                <p className="text-[#4d4937] text-lg font-medium">
                  Intern as a Fullstack Developer
                </p>
              </div>
            </div>
            <p className="text-[#4d4937] text-base leading-relaxed max-w-xl">
              Passionate full-stack developer with expertise in modern web
              technologies. I specialize in creating beautiful, efficient, and
              scalable digital experiences that solve real-world problems and
              delight users.
            </p>
          </div>

          {/* Contact Info Grid - Minimal and clean */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="flex items-center gap-3 text-[#4d4937] bg-[#cec7b5]/50 p-3 rounded-lg border border-[#948a75]/30 hover:border-[#728559]/50 transition-all duration-300">
              <MapPin className="w-4 h-4 text-[#728559]" />
              <div>
                <p className="text-xs text-[#728559] font-medium">Location</p>
                <p className="text-sm font-semibold">Chiang mai, TH</p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-[#4d4937] bg-[#cec7b5]/50 p-3 rounded-lg border border-[#948a75]/30 hover:border-[#728559]/50 transition-all duration-300">
              <Mail className="w-4 h-4 text-[#728559]" />
              <div>
                <p className="text-xs text-[#728559] font-medium">Email</p>
                <p className="text-sm font-semibold">kritdevo3@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-[#4d4937] bg-[#cec7b5]/50 p-3 rounded-lg border border-[#948a75]/30 hover:border-[#728559]/50 transition-all duration-300">
              <Calendar className="w-4 h-4 text-[#728559]" />
              <div>
                <p className="text-xs text-[#728559] font-medium">Faculty</p>
                <p className="text-sm font-semibold">Computer Engineering</p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-[#4d4937] bg-[#cec7b5]/50 p-3 rounded-lg border border-[#948a75]/30 hover:border-[#728559]/50 transition-all duration-300">
              <Target className="w-4 h-4 text-[#728559]" />
              <div>
                <p className="text-xs text-[#728559] font-medium">
                  Primary Tool
                </p>
                <p className="text-sm font-semibold">React.js</p>
              </div>
            </div>
          </div>

          {/* Action Buttons - Clean and minimal */}
          <div className="flex gap-3 flex-wrap justify-center lg:justify-start">
            <Button
              asChild
              className="bg-[#4d4937] hover:bg-[#12160b] text-[#cec7b5] shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <a
                href="https://github.com/kritsadagorn"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Github className="w-4 h-4" />
                GitHub Profile
              </a>
            </Button>
            <Button
              variant="outline"
              asChild
              className="border-[#948a75] hover:bg-[#a4b292]/20 bg-transparent text-[#4d4937] shadow-md hover:shadow-lg transition-all duration-300"
            >
              <a
                href="/PortKP.pdf"
                download
                className="flex items-center gap-2"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Download Resume
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="flex justify-center gap-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card
              key={index}
              className="text-center border-[#948a75]/30 bg-[#cec7b5]/30 hover:bg-[#a4b292]/30 transition-all duration-300 hover:scale-105"
            >
              <CardContent className="w-40 lg:w-52">
                <Icon className={`w-8 h-8 mx-auto mb-2 ${stat.color}`} />
                <div className="text-2xl font-bold text-[#12160b]">
                  {stat.value}
                </div>
                <div className="text-sm text-[#4d4937] font-medium">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Soft skills & Tech Stack */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="border-[#948a75]/30 bg-[#cec7b5]/30">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-[#12160b]">
              <Heart className="w-5 h-5 text-[#e74c3c]" />
              Soft Skills
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 gap-3">
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-[#4d4937] p-2 rounded-lg hover:bg-[#a4b292]/20 transition-colors"
                >
                  <span className="text-sm font-medium">{highlight}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border-[#948a75]/30 bg-[#cec7b5]/30">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-[#12160b]">
              <Code className="w-5 h-5 text-[#728559]" />
              Tech Stack
            </CardTitle>
          </CardHeader>
          <CardContent>
            {/* Search Bar */}
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#728559]" />
              <input
                type="text"
                placeholder="Search technologies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-[#948a75]/30 rounded-lg bg-[#cec7b5]/50 text-[#4d4937] placeholder-[#728559]/70 focus:outline-none focus:ring-2 focus:ring-[#728559]/50 focus:border-[#728559] transition-all duration-300"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {filteredTechStack.length > 0 ? (
                filteredTechStack.map((tech, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="bg-[#a4b292] text-[#12160b] hover:bg-[#728559] hover:text-[#cec7b5] transition-colors cursor-pointer"
                  >
                    {tech}
                  </Badge>
                ))
              ) : (
                <p className="text-[#728559] text-sm italic">
                  No technologies found matching "{searchTerm}"
                </p>
              )}
            </div>
            <p className="text-sm text-[#4d4937] mt-4 leading-relaxed">
              Always exploring new technologies and frameworks to stay at the
              forefront of web development. Currently diving deep into AI
              integration and modern deployment strategies.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AboutSection;
