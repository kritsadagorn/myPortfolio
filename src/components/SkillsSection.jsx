import {
    Card,
    CardContent,
    CardHeader,
    CardTitle
  } from "@/components/ui/card"
  import { Badge } from "@/components/ui/badge"
  import { Code2 } from "lucide-react"
  import { skills } from "../constants/data"
  
  const SkillsSection = () => {
    return (
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold mb-4 text-[#12160b]">
            Programming Skills
          </h2>
          <Card className="relative overflow-hidden border-[#948a75]/30 bg-[#cec7b5]/30">
            <CardHeader className="relative">
              <CardTitle className="text-lg flex items-center gap-2 text-[#4d4937]">
                <Code2 className="w-5 h-5 text-[#728559]" />
                Technical Skills
              </CardTitle>
            </CardHeader>
            <CardContent className="relative">
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {skills.programming.map(skill => (
                    <div
                      key={skill.name}
                      className="flex justify-between items-center p-3 rounded-lg border border-[#948a75]/30 bg-[#cec7b5]/50"
                    >
                      <span className="font-medium text-sm text-[#12160b]">
                        {skill.name}
                      </span>
                      <span className="text-xs text-[#4d4937] font-medium">
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
  
        <div>
          <Card className="border-[#948a75]/30 bg-[#cec7b5]/30">
            <CardHeader>
              <CardTitle className="text-lg text-[#4d4937]">
                Soft Skills
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {skills.soft.map(skill => (
                  <Badge
                    key={skill}
                    variant="outline"
                    className="border-[#728559] text-[#4d4937] bg-[#a4b292]/20"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
  
        <div>
          <Card className="border-[#948a75]/30 bg-[#cec7b5]/30">
            <CardHeader>
              <CardTitle className="text-lg text-[#4d4937]">
                Languages
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {skills.languages.map(lang => (
                  <div
                    key={lang.name}
                    className="flex justify-between items-center"
                  >
                    <span className="font-medium text-[#12160b]">
                      {lang.name}
                    </span>
                    <Badge
                      variant="secondary"
                      className="bg-[#a4b292] text-[#12160b]"
                    >
                      {lang.level}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }
  
  export default SkillsSection