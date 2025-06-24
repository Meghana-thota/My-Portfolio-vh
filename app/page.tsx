import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Experience } from "@/components/experience"
import { Projects } from "@/components/projects"
import { Skills } from "@/components/skills"
import { Blog } from "@/components/blog"
import { BeyondCode } from "@/components/beyond-code"
import { Contact } from "@/components/contact"
import Navigation from "@/components/navigation"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Blog />
        <BeyondCode />
        <Contact />
      </main>
    </div>
  )
}
