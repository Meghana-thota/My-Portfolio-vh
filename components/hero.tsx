"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, ExternalLink } from "lucide-react"
import Image from "next/image"

export function Hero() {
  const scrollToAbout = () => {
    const element = document.getElementById("about")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-12">
          <Image
            src="/images/meghana-profile.jpeg"
            alt="Meghana Thota"
            width={120}
            height={120}
            className="rounded-full mx-auto mb-8 border border-border-light"
            priority
          />
        </div>

        <h1 className="text-5xl md:text-5xl font-normal mb-5 text-text-primary leading-tight">
          Data Scientist & <span className="text-primary-blue">AI/ML Engineer</span>
        </h1>

        <p className="text-xl text-text-secondary mb-12 max-w-3xl mx-auto leading-relaxed">
          Transforming complex data into intelligent solutions that drive innovation and create measurable business
          impact across industries.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-16">
          <Button
            size="lg"
            className="bg-primary-blue hover:bg-blue-hover text-white px-8 py-3 transition-colors"
            onClick={() => window.open("https://medium.com/@meghanathota13", "_blank")}
          >
            <ExternalLink className="mr-2 h-4 w-4" />
            View Blogs
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-border-light text-text-secondary hover:bg-bg-light px-8 py-3 bg-transparent transition-colors"
            onClick={scrollToAbout}
          >
            Learn More
            <ArrowDown className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { value: "2+", label: "Years Experience", sublabel: "Production AI Systems" },
            { value: "12+", label: "ML Projects", sublabel: "End-to-End Solutions" },
            { value: "6+", label: "Certifications", sublabel: "AWS & Data Science" },
          ].map((metric, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-semibold text-primary-blue mb-2">{metric.value}</div>
              <div className="text-text-primary font-medium">{metric.label}</div>
              <div className="text-sm text-text-secondary">{metric.sublabel}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
