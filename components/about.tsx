"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, Cloud, Database, Code } from "lucide-react"

export function About() {
  const highlights = [
    {
      icon: Brain,
      title: "AI/ML Expertise",
      description: "Specialized in NoProp, LLMs, CGANs, CNNs with production deployment experience",
    },
    {
      icon: Cloud,
      title: "Cloud Architecture",
      description: "AWS  certified with expertise in scalable infrastructure design",
    },
    {
      icon: Database,
      title: "Data Engineering",
      description: "ETL pipelines, real-time processing, and database optimization",
    },
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "End-to-end AI application development and deployment",
    },
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate about transforming complex data into actionable insights and building AI systems that make a
            real-world impact.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-semibold mb-6">My Journey</h3>
            <div className="space-y-4 text-gray-600">
              <p>
                Recently graduated with my Master's in Data Science from UMass Dartmouth, I bring over 2 years of
                hands-on experience in building production-ready AI and ML systems.
              </p>
              <p>
                My expertise spans from developing CNN and CGAN-based pipelines for healthcare applications to
                optimizing battery performance for electric vehicles using advanced ML techniques.
              </p>
              <p>
                I'm particularly passionate about LLM integration, prompt engineering, and creating context-aware AI
                solutions that deliver precise, domain-specific outputs.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <item.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h4 className="font-semibold mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
          <h3 className="text-2xl font-semibold mb-6 text-center">Current Focus</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold mb-3">Research & Development</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Deep Learning for Medical Imaging</li>
                <li>• Generative AI and CGANs</li>
                <li>• LLM Fine-tuning and RAG Systems</li>
                <li>• Multimodal AI Applications</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Technical Interests</h4>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">PyTorch</Badge>
                <Badge variant="secondary">LangChain</Badge>
                <Badge variant="secondary">AWS SageMaker</Badge>
                <Badge variant="secondary">Docker</Badge>
                <Badge variant="secondary">Kubernetes</Badge>
                <Badge variant="secondary">Apache Airflow</Badge>
                <Badge variant="secondary">PostgreSQL</Badge>
                <Badge variant="secondary">OpenAI</Badge>
                <Badge variant="secondary">MCP</Badge>
                <Badge variant="secondary">PySpark</Badge>
                <Badge variant="secondary">NoProp</Badge>
                <Badge variant="secondary">FastMCP</Badge>
                <Badge variant="secondary">Ollama</Badge>
                <Badge variant="secondary">vLLM</Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
