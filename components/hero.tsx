"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, ExternalLink } from "lucide-react"
import { motion } from "framer-motion"

export function Hero() {
  const scrollToAbout = () => {
    const element = document.getElementById("about")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
              Meghana Thota
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Data Scientist & AI Engineer specializing in production-ready AI systems, LLMs, and cloud-based solutions
            that optimize operations across healthcare and automotive sectors.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center items-center mb-12"
        >
          <Button
            size="lg"
            variant="outline"
            className="bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
            onClick={() => window.open("https://medium.com/@meghanathota13", "_blank")}
          >
            <ExternalLink className="mr-2 h-4 w-4" />
            View Medium Blog
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">2+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">15+</div>
            <div className="text-gray-600">AI/ML Projects</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-teal-600 mb-2">6+</div>
            <div className="text-gray-600">Certifications</div>
          </div>
        </motion.div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          onClick={scrollToAbout}
          className="animate-bounce"
        >
          <ArrowDown className="h-6 w-6 text-gray-400" />
        </motion.button>
      </div>
    </section>
  )
}
