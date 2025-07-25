import { Button } from "@/components/ui/button"
import { sections } from "../constants/data"

const Navigation = ({ activeSection, onSectionChange }) => {
  return (
    <nav className="mb-8">
      <div className="flex flex-wrap gap-2 justify-center p-2 bg-[#cec7b5]/80 backdrop-blur-sm rounded-xl shadow-sm border border-[#948a75]/30">
        {sections.map(section => {
          const Icon = section.icon
          return (
            <Button
              key={section.id}
              variant={activeSection === section.id ? "default" : "ghost"}
              onClick={() => onSectionChange(section.id)}
              className={`nav-item flex items-center gap-2 rounded-xl transition-all duration-300 ${
                activeSection === section.id
                  ? "bg-[#4d4937] text-[#cec7b5] shadow-sm"
                  : "hover:bg-[#a4b292]/20 text-[#4d4937]"
              }`}
            >
              <Icon className="w-4 h-4" />
              {section.label}
            </Button>
          )
        })}
      </div>
    </nav>
  )
}

export default Navigation