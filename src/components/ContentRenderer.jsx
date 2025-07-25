import AboutSection from "./AboutSection"
import SkillsSection from "./SkillsSection"
import ProjectsSection from "./ProjectsSection"
import CertificatesSection from "./CertificatesSection"
import LearningSection from "./LearningSection"

const ContentRenderer = ({ activeSection }) => {
  const renderContent = () => {
    switch (activeSection) {
      case "about":
        return <AboutSection />
      case "skills":
        return <SkillsSection />
      case "projects":
        return <ProjectsSection />
      case "certificates":
        return <CertificatesSection />
      case "learning":
        return <LearningSection />
      default:
        return <AboutSection />
    }
  }

  return renderContent()
}

export default ContentRenderer