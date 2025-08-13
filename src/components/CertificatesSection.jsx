import { useState, useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
  } from "@/components/ui/card"
import { X } from "lucide-react"
import { certificates } from "../constants/data"

const CertificatesSection = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null)
  const modalRef = useRef(null)
  const overlayRef = useRef(null)

  const openModal = (certificate) => {
    setSelectedCertificate(certificate)
  }

  const closeModal = () => {
    gsap.to(modalRef.current, {
      scale: 0.8,
      opacity: 0,
      duration: 0.3,
      ease: "power2.in",
      onComplete: () => setSelectedCertificate(null)
    })
  }

  useGSAP(() => {
    if (selectedCertificate && modalRef.current) {
      // Reset initial state
      gsap.set(modalRef.current, { scale: 0.8, opacity: 0 })
      
      // Animate in
      gsap.to(modalRef.current, {
        scale: 1,
        opacity: 1,
        duration: 0.4,
        ease: "back.out(1.7)",
        delay: 0.1
      })
    }
  }, [selectedCertificate])

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-[#12160b]">Certificates</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {certificates.map((certificate, index) => (
          <div key={index} className="space-y-4">
            <div 
              className="aspect-video relative overflow-hidden bg-[#cec7b5] rounded-lg border border-[#948a75]/30 cursor-pointer group"
              onClick={() => openModal(certificate)}
            >
              <img
                src={certificate.image || "/placeholder.svg"}
                alt={certificate.title}
                className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[#12160b]/0 group-hover:bg-[#12160b]/20 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#cec7b5]/90 rounded-full p-2">
                  <svg className="w-6 h-6 text-[#4d4937]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
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

      {/* Modal */}
      {selectedCertificate && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div 
            ref={modalRef}
            className="bg-[#cec7b5] rounded-xl max-w-4xl max-h-[90vh] overflow-hidden shadow-2xl border border-[#948a75]/50"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex justify-between items-center p-6 border-b border-[#948a75]/30 bg-[#a4b292]/30">
              <h3 className="text-2xl font-bold text-[#12160b]">
                {selectedCertificate.title}
              </h3>
              <button
                onClick={closeModal}
                className="p-2 hover:bg-[#728559]/20 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-[#4d4937]" />
              </button>
            </div>
            
            {/* Modal Content */}
            <div className="p-6 bg-[#cec7b5]">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Certificate Image */}
                <div className="rounded-lg overflow-hidden flex items-center border border-[#948a75]/30">
                  <img
                    src={selectedCertificate.image || "/placeholder.svg"}
                    alt={selectedCertificate.title}
                    className="max-w-full h-auto object-contain"
                  />
                </div>
                
                {/* Certificate Details */}
                <div className="space-y-4">
                  <div className="bg-[#a4b292]/20 p-4 rounded-lg border border-[#948a75]/30">
                    <h4 className="text-lg font-semibold text-[#12160b] mb-2">Description</h4>
                    <p className="text-[#4d4937] leading-relaxed">
                      {selectedCertificate.description}
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 gap-4">
                    <div className="bg-[#a4b292]/20 p-4 rounded-lg border border-[#948a75]/30">
                      <h5 className="font-medium text-[#12160b] mb-1">Issued By</h5>
                      <p className="text-[#4d4937]">{selectedCertificate.issuer}</p>
                    </div>
                    <div className="bg-[#a4b292]/20 p-4 rounded-lg border border-[#948a75]/30">
                      <h5 className="font-medium text-[#12160b] mb-1">Date Received</h5>
                      <p className="text-[#4d4937]">{selectedCertificate.date}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default CertificatesSection