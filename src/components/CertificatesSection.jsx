import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
  } from "@/components/ui/card"
  import { certificates } from "../constants/data"
  
  const CertificatesSection = () => {
    return (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-[#12160b]">Certificates</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {certificates.map((certificate, index) => (
            <div key={index} className="space-y-4">
              <div className="aspect-video relative overflow-hidden bg-[#cec7b5] rounded-lg border border-[#948a75]/30">
                <img
                  src={certificate.image || "/placeholder.svg"}
                  alt={certificate.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <Card className="border-[#948a75]/30 bg-[#cec7b5]/30">
                <CardHeader>
                  <CardTitle className="text-[#12160b]">
                    {certificate.title}
                  </CardTitle>
                  <CardDescription className="text-[#4d4937]">
                    {certificate.description}
                  </CardDescription>
                </CardHeader>
                <CardFooter className="flex justify-between text-sm text-[#4d4937]">
                  <span>{certificate.issuer}</span>
                  <span>{certificate.date}</span>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </div>
    )
  }
  
  export default CertificatesSection