import { useState, useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import Navigation from "./components/Navigation"
import ContentRenderer from "./components/ContentRenderer"

export default function App() {
  const [activeSection, setActiveSection] = useState("about")
  const containerRef = useRef(null)
  const contentRef = useRef(null)

  useGSAP(() => {
    // Initial animation
    gsap.fromTo(
      containerRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
    )

    // Navigation animation
    gsap.fromTo(
      ".nav-item",
      { opacity: 0, x: -20 },
      { opacity: 1, x: 0, duration: 0.6, stagger: 0.1, delay: 0.3 }
    )
  }, [])

  useGSAP(() => {
    // Content transition animation
    gsap.fromTo(
      contentRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
    )
  }, [activeSection])

  const handleSectionChange = sectionId => {
    // Prevent navigation if already on the same section
    if (activeSection === sectionId) {
      return
    }

    gsap.to(contentRef.current, {
      opacity: 0,
      y: -20,
      duration: 0.3,
      ease: "power2.in",
      onComplete: () => {
        setActiveSection(sectionId)
      }
    })
  }

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-[#cec7b5] relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25px 25px, rgba(77, 73, 55, 0.1) 2px, transparent 0)`,
            backgroundSize: "50px 50px"
          }}
        ></div>
      </div>
      <div className="container mx-auto px-4 py-8 max-w-6xl relative z-10">
        <Navigation 
          activeSection={activeSection} 
          onSectionChange={handleSectionChange} 
        />
        <main ref={contentRef}>
          <ContentRenderer activeSection={activeSection} />
        </main>
      </div>
    </div>
  )
}