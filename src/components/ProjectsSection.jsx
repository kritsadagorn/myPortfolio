import { useState } from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"
import { projects } from "../constants/data"
import ProjectTooltip from "./ProjectTooltip"

const ProjectsSection = () => {
  const [hoveredProject, setHoveredProject] = useState(null)
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 })

  const handleProjectHover = (index, event) => {
    setHoveredProject(index)
    setTooltipPosition({ x: event.clientX, y: event.clientY })
  }

  const handleProjectLeave = () => {
    setHoveredProject(null)
  }

  const handleMouseMove = event => {
    if (hoveredProject !== null) {
      setTooltipPosition({ x: event.clientX, y: event.clientY })
    }
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-[#12160b]">
        Featured Projects
      </h2>
      <div className="grid gap-6">
        {projects.map((project, index) => (
          <Card
            key={index}
            className="hover:shadow-md transition-shadow border-[#948a75]/30 bg-[#cec7b5]/30 relative"
          >
            <CardHeader>
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3
                      className="text-xl font-semibold cursor-pointer hover:text-[#728559] transition-colors relative text-[#12160b]"
                      onMouseEnter={e => handleProjectHover(index, e)}
                      onMouseLeave={handleProjectLeave}
                      onMouseMove={handleMouseMove}
                    >
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-2">
                      <div
                        className={`w-2 h-2 rounded-full ${
                          project.isDeployed
                            ? "bg-[#a4b292]"
                            : "bg-[#a0a2a5]"
                        }`}
                      ></div>
                      <span className="text-xs text-[#4d4937]">
                        {project.isDeployed
                          ? "Deployed"
                          : "Not Deployed"}
                      </span>
                    </div>
                  </div>
                  <CardDescription className="text-[#4d4937]">
                    {project.description}
                  </CardDescription>
                </div>
                <div className="flex gap-2">
                  <Button
                    size="icon"
                    variant="ghost"
                    asChild
                    className="hover:bg-[#a4b292]/20"
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4 text-[#4d4937]" />
                    </a>
                  </Button>
                  <Button
                    size="icon"
                    variant="ghost"
                    asChild
                    className={`hover:bg-[#a4b292]/20 ${
                      !project.isDeployed
                        ? "opacity-50 cursor-not-allowed"
                        : ""
                    }`}
                  >
                    <a
                      href={project.isDeployed ? project.demo : "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={
                        !project.isDeployed
                          ? e => e.preventDefault()
                          : undefined
                      }
                    >
                      <ExternalLink className="w-4 h-4 text-[#4d4937]" />
                    </a>
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {project.tech.map(tech => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="bg-[#a4b292] text-[#12160b]"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <ProjectTooltip 
        hoveredProject={hoveredProject} 
        tooltipPosition={tooltipPosition} 
      />
    </div>
  )
}

export default ProjectsSection