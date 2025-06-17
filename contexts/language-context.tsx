"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type Language = "en" | "th"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.projects": "Projects",
    "nav.about": "About",
    "nav.contact": "Contact",
    "nav.letsTalk": "Let's Talk",

    // Homepage
    "home.availableForWork": "Available for new opportunities",
    "home.portfolio": "PORTFOLIO",
    "home.name": "Kritsadagorn Punnapanich",
    "home.intro":
      "Hi, I'm Jai — 22 Years old Computer Engineering student at Rajamangala University Of Technology Lanna.",
    "home.description":
      "I'm really into learning new stuff — especially anything tech-related. Always up for discovering something new!",
    "home.viewProjects": "VIEW MY PROJECTS",
    "home.downloadCV": "Download CV",
    "home.projects": "Projects",
    "home.yearsLearning": "Years Learning",
    "home.passion": "Passion",
    "home.whatIDo": "What I Do",
    "home.whatIDoDesc":
      "I'm exploring various fields, especially in technology, and I always enjoy learning and embracing new ideas.",
    "home.recentWork": "Recent Work",
    "home.recentWorkDesc": "Some of my latest projects and experiments",
    "home.viewAllProjects": "View All Projects",
    "home.ctaTitle": "I want to learn everything from you.",
    "home.ctaDesc":
      "I'm a recent graduate excited to grow as a developer, learn from real-world projects, and collaborate with experienced teams.",
    "home.startConversation": "Start a Conversation",
    "home.learnMore": "Learn More About Me",

    // Projects
    "projects.title": "PROJECTS",
    "projects.description":
      "Here are the projects I have been involved in. Throughout the process, I gained valuable experience in web development and problem-solving.",
    "projects.featured": "Featured Project",
    "projects.other": "Other Projects",
    "projects.liveDemo": "Live Demo",
    "projects.sourceCode": "Source Code",
    "projects.demo": "Demo",

    // About
    "about.title": "ABOUT",
    "about.hello": "Hello, I'm Kritsadagorn",
    "about.intro1":
      'I\'m a 22-year-old Computer Engineering student at RMUTI with an insatiable curiosity for technology and innovation. My journey in tech began with a simple question: "How does this work?" and has evolved into a passion for creating digital solutions that make a difference.',
    "about.intro2":
      "What drives me is the endless possibility of learning something new every day. Whether it's exploring a new framework, diving deep into algorithms, or understanding the latest industry trends, I'm always eager to expand my knowledge and skills.",
    "about.intro3":
      "I believe in the power of technology to solve real-world problems and create meaningful experiences. Through my projects, I strive to combine technical excellence with user-centered design.",
    "about.quickFacts": "Quick Facts",
    "about.age": "Age",
    "about.location": "Location",
    "about.education": "Education",
    "about.field": "Field",
    "about.interests": "Interests",
    "about.skills": "Skills & Technologies",
    "about.journey": "My Journey",

    // Contact
    "contact.title": "CONTACT",
    "contact.description":
      "Let's connect! Whether you have a project in mind, want to collaborate, or just want to say hello, I'd love to hear from you.",
    "contact.sendMessage": "Send me a message",
    "contact.name": "Name",
    "contact.email": "Email",
    "contact.subject": "Subject",
    "contact.message": "Message",
    "contact.messagePlaceholder": "Tell me about your project or just say hello...",
    "contact.send": "SEND MESSAGE",
    "contact.getInTouch": "Get in touch",
    "contact.followMe": "Follow me",
    "contact.availability": "Availability",
    "contact.availableFreelance": "Available for freelance projects",
    "contact.openCollaboration": "Open to collaboration",
    "contact.acceptingOpportunities": "Accepting new opportunities",
    "contact.responseTime": "Response time: Usually within 24 hours",

    // Skills
    "skills.frontend": "React, Next.js, Javascript",
    "skills.backend": "Node.js, Python, APIs",
    "skills.design": "Figma, Canva",
    "skills.etc.": "I'm REALLY into music",

    // Project descriptions
    "project.positionExplorer.desc":
      "A comprehensive job search platform that helps users explore career opportunities with advanced filtering and insights.",
    "project.shabu.title": "Food ordering website for shabu restaurant",
    "project.shabu.desc":
      "A collaborative project management tool with real-time updates and team collaboration features.",
    "project.parking.title": "University Parking Reservation System",
    "project.parking.desc": "Full-stack e-commerce solution with payment integration and inventory management.",

    // Timeline
    "timeline.2024.title": "Final Year - RMUTI",
    "timeline.2024.desc": "Focusing on advanced software engineering concepts and working on final year project",
    "timeline.2023.title": "Full-Stack Development",
    "timeline.2023.desc": "Started building complex web applications and learning modern development practices",
    "timeline.2022.title": "Computer Engineering Student",
    "timeline.2022.desc": "Began my journey in Computer Engineering at RMUTI, discovered passion for web development",
    "timeline.2021.title": "Programming Foundations",
    "timeline.2021.desc": "Started learning programming fundamentals and built my first simple applications",

    // Skills categories
    "category.frontend": "Frontend",
    "category.backend": "Backend",
    "category.language": "Language",
    "category.database": "Database",
    "category.framework": "Framework",

    // About interests
    "interest.webdev": "Web Development",
    "interest.aiml": "AI/ML",
    "interest.opensource": "Open Source",
    "interest.uiux": "UI/UX Design",
    "interest.cloud": "Cloud Computing",

    // Location
    "location.thailand": "Thailand",
    "location.bangkok": "Bangkok, Thailand",
    "field.computereng": "Computer Engineering",
  },
  th: {
    // Navigation
    "nav.home": "หน้าแรก",
    "nav.projects": "โปรเจกต์",
    "nav.about": "เกี่ยวกับ",
    "nav.contact": "ติดต่อ",
    "nav.letsTalk": "ชักชวน",

    // Homepage
    "home.availableForWork": "พร้อมรับงานใหม่",
    "home.portfolio": "PORTFOLIO",
    "home.name": "กฤษฎากรณ์ ปุนนพานิช",
    "home.intro": "สวัสดีครับ ผม ไจ๋ — นักศึกษาวิศวกรรมคอมพิวเตอร์ อายุ 22 ปี จากมหาวิทยาลัยเทคโนโลยีราชมงคลล้านนา เชียงใหม่",
    "home.description": "ผมกำลังเรียนรู้ในหลายๆสิ่ง ทั้งที่เกี่ยวกับเทคโนโลยีและอื่นๆ ผมชอบที่จะได้เรียนรู้และรับฟังสิ่งใหม่ๆเสมอ",
    "home.viewProjects": "ผลงาน",
    "home.downloadCV": "ดาวน์โหลด CV",
    "home.projects": "โปรเจกต์",
    "home.yearsLearning": "ปีที่เรียนรู้",
    "home.passion": "แพชชั่น",
    "home.whatIDo": "ความสามารถ",
    "home.whatIDoDesc":
      "ผมกำลังสำรวจและเรียนรู้ในหลากหลายด้าน โดยเฉพาะในสายเทคโนโลยี และผมมีความสนุกกับการเปิดรับแนวคิดใหม่ๆ อยู่เสมอ",
    "home.recentWork": "ผลงานล่าสุด",
    "home.recentWorkDesc": "โปรเจกต์ล่าสุดของผม",
    "home.viewAllProjects": "ดูโปรเจกต์ทั้งหมด",
    "home.ctaTitle": "ผมอยาก ที่จะ เรียนรู้ สิ่งใหม่ๆ จาก ทุกๆแหล่ง",
    "home.ctaDesc": "ผมตื่นเต้นเสมอที่จะทำงานในโปรเจกต์ใหม่และร่วมมือกับคนอื่นๆ สนุกทุกครั้งที่จะได้เรียนเรื่องใหม่ๆ หลายสถานการณ์ หลายสถานที่",
    "home.startConversation": "ช่องทางการติดต่อ",
    "home.learnMore": "เกี่ยวกับผม",

    // Projects
    "projects.title": "โปรเจกต์",
    "projects.description":
      "นี่คือรายการโปรเจกต์ที่ผมได้มีส่วนร่วมในการพัฒนา และได้เกิดการเรียนรู้ระหว่างทางการทำงาน ทั้งด้านการพัฒนาเว็บไซต์ และกระบวนการแก้ปัญหา",
    "projects.featured": "โปรเจกต์ที่ผมภูมิใจ",
    "projects.other": "โปรเจกต์อื่นๆ",
    "projects.liveDemo": "View",
    "projects.sourceCode": "Source Code",
    "projects.demo": "View",

    // About
    "about.title": "เกี่ยวกับ",
    "about.hello": "สวัสดีครับ ผมกฤษฎากร",
    "about.intro1":
      'ผมเป็นนักศึกษาวิศวกรรมคอมพิวเตอร์อายุ 22 ปี จาก RMUTI ที่มีความอยากรู้อยากเห็นอย่างไม่รู้จักพอเพียงต่อเทคโนโลยีและนวัตกรรม การเดินทางของผมในโลกเทคเริ่มต้นด้วยคำถามง่ายๆ ว่า "สิ่งนี้ทำงานอย่างไร?" และได้พัฒนาเป็นความหลงใหลในการสร้างโซลูชันดิจิทัลที่สร้างความแตกต่าง',
    "about.intro2":
      "สิ่งที่ขับเคลื่อนผมคือความเป็นไปได้ไม่รู้จบในการเรียนรู้สิ่งใหม่ทุกวัน ไม่ว่าจะเป็นการสำรวจเฟรมเวิร์กใหม่ การเจาะลึกอัลกอริทึม หรือการทำความเข้าใจเทรนด์อุตสาหกรรมล่าสุด ผมมักจะกระตือรือร้นที่จะขยายความรู้และทักษะของตัวเอง",
    "about.intro3":
      "ผมเชื่อในพลังของเทคโนโลยีในการแก้ปัญหาในโลกแห่งความเป็นจริงและสร้างประสบการณ์ที่มีความหมาย ผ่านโปรเจคต่างๆ ของผม ผมมุ่งมั่นที่จะผสมผสานความเป็นเลิศทางเทคนิคเข้ากับการออกแบบที่เน้นผู้ใช้เป็นศูนย์กลาง",
    "about.quickFacts": "ข้อมูลด่วน",
    "about.age": "อายุ",
    "about.location": "ที่อยู่",
    "about.education": "การศึกษา",
    "about.field": "สาขา",
    "about.interests": "ความสนใจ",
    "about.skills": "ทักษะและเทคโนโลยี",
    "about.journey": "การเดินทางของผม",

    // Contact
    "contact.title": "ติดต่อ",
    "contact.description": "มาเชื่อมต่อกัน! ไม่ว่าคุณจะมีโปรเจคในใจ ต้องการร่วมมือ หรือแค่อยากทักทาย ผมยินดีที่จะได้ยินจากคุณ",
    "contact.sendMessage": "ส่งข้อความหาผม",
    "contact.name": "ชื่อ",
    "contact.email": "อีเมล",
    "contact.subject": "หัวข้อ",
    "contact.message": "ข้อความ",
    "contact.messagePlaceholder": "บอกผมเกี่ยวกับโปรเจคของคุณหรือแค่ทักทาย...",
    "contact.send": "ส่งข้อความ",
    "contact.getInTouch": "ติดต่อผม",
    "contact.followMe": "ติดตามผม",
    "contact.availability": "สถานะ",
    "contact.availableFreelance": "พร้อมรับงานฟรีแลนซ์",
    "contact.openCollaboration": "เปิดรับการร่วมมือ",
    "contact.acceptingOpportunities": "รับโอกาสใหม่",
    "contact.responseTime": "เวลาตอบกลับ: โดยปกติภายใน 24 ชั่วโมง",

    // Skills
    "skills.frontend": "React, Node.js, Javascript",
    "skills.backend": "Node.js, Python, APIs",
    "skills.design": "Figma, Canva",
    "skills.etc.": "ผมหลงไหลในเสียงดนตรีมากจริงๆ",

    // Project descriptions
    "project.positionExplorer.desc": "เว็บไซต์วิเคราะห์ข้อมูลการรับสมัครงาน เพื่อนำเสนอเครื่องมือยอดนิยมในแต่ละตำแหน่ง",
    "project.shabu.title": "ShabuShabu",
    "project.shabu.desc": "เว็บไซต์สั่งอาหารร้านชาบู และระบบดูแลหลังร้าน (CRUD)",
    "project.parking.title": "Parking Reservation",
    "project.parking.desc": "เว็บไซต์จองที่จอดรถ ของมหาวิทยาลัยเทคโนโลยีราชมงคลล้านนา ณ ตึกศึกษาทั่วไป",

    // Timeline
    "timeline.2024.title": "ปีสุดท้าย - RMUTL",
    "timeline.2024.desc": "เน้นแนวคิดวิศวกรรมซอฟต์แวร์ขั้นสูงและทำงานในโปรเจคปีสุดท้าย",
    "timeline.2023.title": "การพัฒนา Full-Stack",
    "timeline.2023.desc": "เริ่มสร้างเว็บแอปพลิเคชันที่ซับซ้อนและเรียนรู้แนวทางการพัฒนาสมัยใหม่",
    "timeline.2022.title": "นักศึกษาวิศวกรรมคอมพิวเตอร์",
    "timeline.2022.desc": "เริ่มต้นการเดินทางในวิศวกรรมคอมพิวเตอร์ที่ RMUTI ค้นพบความหลงใหลในการพัฒนาเว็บ",
    "timeline.2021.title": "พื้นฐานการเขียนโปรแกรม",
    "timeline.2021.desc": "เริ่มเรียนรู้พื้นฐานการเขียนโปรแกรมและสร้างแอปพลิเคชันง่ายๆ ครั้งแรก",

    // Skills categories
    "category.frontend": "Frontend",
    "category.backend": "Backend",
    "category.language": "ภาษา",
    "category.database": "ฐานข้อมูล",
    "category.framework": "Framework",

    // About interests
    "interest.webdev": "การพัฒนาเว็บ",
    "interest.aiml": "AI/ML",
    "interest.opensource": "โอเพ่นซอร์ส",
    "interest.uiux": "UI/UX Design",
    "interest.cloud": "Cloud Computing",

    // Location
    "location.thailand": "ประเทศไทย",
    "location.bangkok": "กรุงเทพฯ ประเทศไทย",
    "field.computereng": "วิศวกรรมคอมพิวเตอร์",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "th")) {
      setLanguage(savedLanguage)
    }
  }, [])

  useEffect(() => {
    // Apply font based on language
    document.body.setAttribute("data-lang", language)
    if (language === "th") {
      document.body.style.fontFamily = "var(--font-kanit)"
    } else {
      document.body.style.fontFamily = "var(--font-jura)"
    }
  }, [language])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("language", lang)
  }

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)[typeof language]] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
