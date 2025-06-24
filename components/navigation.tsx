"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Github, Linkedin } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "hero",
        "about",
        "experience",
        "projects",
        "skills",
        "blog",
        "research-spotlight", // Added new section ID
        "beyond-code",
        "contact",
      ]
      const current = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) setActiveSection(current)
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Call on mount to set initial state
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
  }

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "blog", label: "Blog" },
    { id: "research-spotlight", label: "Research" }, // Added nav item
    { id: "beyond-code", label: "Beyond Code" },
    { id: "contact", label: "Contact" },
  ]

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 transition-shadow duration-300 ${scrolled ? "bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-200" : "bg-transparent border-b border-transparent"}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <motion.div
            className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            whileHover={{ scale: 1.1, rotate: -5 }}
          >
            MT
          </motion.div>

          <div className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-all duration-200 px-3 py-2 rounded-md hover:bg-blue-50 ${
                  activeSection === item.id ? "text-blue-600 bg-blue-100" : scrolled ? "text-gray-700" : "text-gray-800"
                } ${!scrolled && activeSection !== item.id && "hover:text-blue-700"}`}
              >
                {item.label}
              </Button>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-2">
            <motion.a
              href="https://github.com/Meghana-thota"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
            >
              <Button
                variant="ghost"
                size="icon"
                className={scrolled ? "text-gray-700 hover:text-blue-600" : "text-gray-800 hover:text-blue-600"}
              >
                <Github className="h-5 w-5" />
              </Button>
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/meghana-thota36/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
            >
              <Button
                variant="ghost"
                size="icon"
                className={scrolled ? "text-gray-700 hover:text-blue-600" : "text-gray-800 hover:text-blue-600"}
              >
                <Linkedin className="h-5 w-5" />
              </Button>
            </motion.a>
          </div>

          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden py-4 border-t border-gray-200 bg-white/95 backdrop-blur-lg"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="flex flex-col space-y-2 px-2">
                {navItems.map((item) => (
                  <Button
                    key={item.id}
                    variant="ghost"
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full justify-start text-base font-medium transition-colors hover:text-blue-600 hover:bg-blue-50 ${
                      activeSection === item.id ? "text-blue-600 bg-blue-100" : "text-gray-700"
                    }`}
                  >
                    {item.label}
                  </Button>
                ))}
                <div className="flex space-x-2 pt-2">
                  <a
                    href="https://github.com/Meghana-thota"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button variant="outline" className="w-full">
                      <Github className="mr-2 h-4 w-4" /> GitHub
                    </Button>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/meghana-thota36/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button variant="outline" className="w-full">
                      <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
                    </Button>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}
