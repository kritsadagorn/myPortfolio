import { projects } from "../constants/data"

const ProjectTooltip = ({ hoveredProject, tooltipPosition }) => {
  if (hoveredProject === null) return null

  const project = projects[hoveredProject]

  return (
    <div
      className="fixed z-50 pointer-events-none transition-opacity duration-200"
      style={{
        left: tooltipPosition.x + 20,
        top: tooltipPosition.y - 100
      }}
    >
      <div className="bg-[#12160b] rounded-lg p-2 shadow-2xl border-2 border-[#4d4937] max-w-sm">
        <div className="relative">
          <img
            src={project.previewImage || "/placeholder.svg"}
            alt={`${project.title} preview`}
            className="w-full h-32 object-cover rounded"
          />
          <div className="absolute top-2 right-2">
            <div className="w-2 h-2 bg-[#a4b292] rounded-full animate-pulse"></div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#12160b]/80 to-transparent p-2 rounded-b">
            <p className="text-[#cec7b5] text-xs font-medium truncate">
              {project.title}
            </p>
          </div>
        </div>
        <div className="flex justify-center mt-1">
          <div className="w-8 h-1 bg-[#948a75] rounded-full"></div>
        </div>
      </div>
    </div>
  )
}

export default ProjectTooltip