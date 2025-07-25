import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle
  } from "@/components/ui/card"
  import { Badge } from "@/components/ui/badge"
  import { learningPath } from "../constants/data"
  
  const LearningSection = () => {
    return (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-[#12160b]">Learning Path</h2>
        <div className="space-y-4">
          {learningPath.map((item, index) => (
            <Card
              key={index}
              className={`border-[#948a75]/30 ${
                item.status === "completed"
                  ? "bg-[#a4b292]/30"
                  : item.status === "in-progress"
                  ? "bg-[#cec7b5]/30"
                  : "bg-[#cec7b5]/20"
              }`}
            >
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-lg text-[#12160b]">
                      {item.title}
                    </CardTitle>
                    <CardDescription className="mt-1 text-[#4d4937]">
                      {item.description}
                    </CardDescription>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <Badge
                      variant={
                        item.status === "completed"
                          ? "default"
                          : item.status === "in-progress"
                          ? "secondary"
                          : "outline"
                      }
                      className={
                        item.status === "completed"
                          ? "bg-[#4d4937] text-[#cec7b5]"
                          : item.status === "in-progress"
                          ? "bg-[#a4b292] text-[#12160b]"
                          : "border-[#948a75] bg-transparent text-[#4d4937]"
                      }
                    >
                      {item.status.replace("-", " ")}
                    </Badge>
                    <span className="text-sm text-[#4d4937]">
                      {item.period}
                    </span>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    )
  }
  
  export default LearningSection