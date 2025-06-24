"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, ExternalLink } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

export function Hero() {
  const scrollToAbout = () => {
    const element = document.getElementById("about")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-24 md:pt-16 relative overflow-hidden"
    >
      {/* The ::before pseudo-element for animated gradient is now in app/page.tsx global styles */}
      <motion.div
        className="max-w-4xl mx-auto text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="mb-8">
          <motion.div whileHover={{ scale: 1.05, rotate: 2 }} transition={{ type: "spring", stiffness: 300 }}>
            <Image
              src="/images/meghana-profile.jpeg"
              alt="Meghana Thota"
              width={180}
              height={180}
              className="rounded-full mx-auto border-4 border-white shadow-xl"
              priority
            />
          </motion.div>
        </motion.div>

        <motion.div variants={itemVariants}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
              Meghana Thota
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Data Scientist & AI Engineer specializing in production-ready AI systems, LLMs, and cloud-based solutions
            that optimize operations across healthcare and automotive sectors.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="flex justify-center items-center mb-12">
          <Button
            size="lg"
            variant="outline"
            className="bg-white/80 backdrop-blur-sm text-gray-800 border-gray-300 hover:bg-white hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            onClick={() => window.open("https://medium.com/@meghanathota13", "_blank")}
          >
            <ExternalLink className="mr-2 h-4 w-4" />
            View Medium Blog
          </Button>
        </motion.div>

        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {[
            { value: "2+", label: "Years Experience", color: "text-blue-600" },
            { value: "15+", label: "AI/ML Projects", color: "text-purple-600" },
            { value: "6+", label: "Certifications", color: "text-teal-600" },
          ].map((metric) => (
            <motion.div
              key={metric.label}
              className="text-center p-4 bg-white/50 backdrop-blur-sm rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
              whileHover={{ y: -5 }}
            >
              <div className={`text-3xl font-bold ${metric.color} mb-2`}>{metric.value}</div>
              <div className="text-gray-600">{metric.label}</div>
            </motion.div>
          ))}
        </motion.div>

        <motion.button
          variants={itemVariants}
          onClick={scrollToAbout}
          className="animate-bounce p-2"
          aria-label="Scroll to about section"
        >
          <ArrowDown className="h-8 w-8 text-gray-500 hover:text-blue-600 transition-colors" />
        </motion.button>
      </motion.div>
    </section>
  )
}
