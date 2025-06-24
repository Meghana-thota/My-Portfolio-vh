"use client" // Required for framer-motion on page level if using motion components directly here

import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Experience } from "@/components/experience"
import { Projects } from "@/components/projects"
import { Skills } from "@/components/skills"
import { Blog } from "@/components/blog"
import { ResearchSpotlight } from "@/components/research-spotlight" // Import new component
import { BeyondCode } from "@/components/beyond-code"
import { Contact } from "@/components/contact"
import Navigation from "@/components/navigation"
import { motion } from "framer-motion"

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-slate-50 text-gray-800">
      <style jsx global>{`
        #hero::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            135deg,
            #e0f2fe, /* sky-100 */
            #ede9fe, /* violet-100 */
            #f0fdfa  /* teal-50 */
          );
          background-size: 200% 200%;
          animation: gradientAnimation 15s ease infinite;
          z-index: 0;
        }
        @keyframes gradientAnimation {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        main > section:not(#hero) {
          position: relative; /* Ensure content is above pseudo-elements if any */
          z-index: 1;
        }
        #hero > div { /* Ensure hero content is above its own animated background */
          position: relative;
          z-index: 1;
        }
      `}</style>
      <Navigation />
      <main>
        <Hero />
        {[
          { Component: About, id: "about", bgColor: "bg-white" },
          { Component: Experience, id: "experience", bgColor: "bg-slate-50" },
          { Component: Projects, id: "projects", bgColor: "bg-white" },
          { Component: Skills, id: "skills", bgColor: "bg-slate-50" },
          { Component: Blog, id: "blog", bgColor: "bg-white" },
          { Component: ResearchSpotlight, id: "research-spotlight", bgColor: "bg-white" }, // Added new section
          { Component: BeyondCode, id: "beyond-code", bgColor: "bg-slate-50" },
          { Component: Contact, id: "contact", bgColor: "bg-gradient-to-br from-sky-100 to-purple-100" },
        ].map(({ Component, id, bgColor }) => (
          <motion.section
            key={id}
            id={id}
            className={`py-20 px-4 sm:px-6 lg:px-8 ${bgColor}`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }} // Adjusted amount for potentially taller section
            variants={sectionVariants}
          >
            <Component />
          </motion.section>
        ))}
      </main>
    </div>
  )
}
