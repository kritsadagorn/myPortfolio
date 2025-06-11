"use client";

import { Calendar, ExternalLink, Github, Tag } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "Position Explorer",
    description:
      "A minimalist analytics platform that transforms complex data into beautiful, actionable insights.",
    tags: ["React", "Javascript", "Nodejs", "MySQL", "Expressjs"],
    date: "2024 - Present",
    status: "Live",
    link: "https://positionexplorer.vercel.app",
    github: "https://github.com/kritsadagorn/FrontJob",
  },
  {
    id: 2,
    title: "Food ordering website for shabu restaurant",
    description:
      "Voice-to-text note-taking app with AI-powered organization and seamless cross-device sync.",
    tags: ["PHP", "MySQL"],
    date: "2024",
    status: "Archived",
    link: "#",
    github: "https://github.com/kritsadagorn/Shabu-php",
  },
  {
    id: 3,
    title: "Mood to Music (Song Recommend)",
    description:
      "A web application that recommends songs based on user text input using AI-powered text analysis and the Spotify API.",
    tags: ["React", "Flask","Python",],
    date: "2024",
    status: "Archived",
    link: "#",
    github: "https://github.com/kritsadagorn/SongRecommend",
  },
];

const statusColors = {
  Live: "text-emerald-600 bg-emerald-50",
  "In Progress": "text-amber-600 bg-amber-50",
  Archived: "text-slate-500 bg-slate-50",
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b border-slate-100 bg-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="space-y-4">
            <h1 className="text-4xl font-light tracking-tight text-slate-900">
              List of Projects
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
              These are my project during university
            </p>
          </div>
        </div>
      </header>

      {/* Projects Grid */}
      <main className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid gap-12 md:gap-16">
          {projects.map((project, index) => (
            <article key={project.id} className="group relative">
              <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                {/* Project Number */}
                <div className="flex-shrink-0">
                  <span className="text-6xl font-extralight text-slate-200 group-hover:text-slate-300 transition-colors duration-300">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Project Content */}
                <div className="flex-1 space-y-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-4 flex-wrap">
                      <h2 className="text-2xl font-medium text-slate-900 group-hover:text-slate-700 transition-colors duration-200">
                        {project.title}
                      </h2>
                      <div className="flex items-center gap-2">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            statusColors[
                              project.status as keyof typeof statusColors
                            ]
                          }`}
                        >
                          {project.status}
                        </span>
                        <div className="flex items-center gap-1 text-slate-500">
                          <Calendar className="w-3 h-3" />
                          <span className="text-xs">{project.date}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-slate-600 leading-relaxed max-w-3xl">
                      {project.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex items-center gap-2 flex-wrap">
                    <Tag className="w-4 h-4 text-slate-400" />
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-sm text-slate-500 hover:text-slate-700 transition-colors duration-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-6">
                    <Link
                      href={project.link}
                      className="inline-flex items-center gap-2 text-slate-900 hover:text-slate-600 transition-colors duration-200 group/link"
                    >
                      <span className="text-sm font-medium">View Project</span>
                      <ExternalLink className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-200" />
                    </Link>

                    <Link
                      href={project.github}
                      className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-700 transition-colors duration-200"
                    >
                      <Github className="w-4 h-4" />
                      <span className="text-sm">Source</span>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Subtle separator line */}
              {index < projects.length - 1 && (
                <div className="mt-12 md:mt-16 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
              )}
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
