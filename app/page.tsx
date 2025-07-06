"use client"

import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Experience } from "@/components/experience"
import { Projects } from "@/components/projects"
import { Skills } from "@/components/skills"
import { Blog } from "@/components/blog"
import { ResearchSpotlight } from "@/components/research-spotlight"
import { Contact } from "@/components/contact"
import Navigation from "@/components/navigation"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Blog />
        <ResearchSpotlight />
        <Contact />
      </main>
    </div>
  )
}
