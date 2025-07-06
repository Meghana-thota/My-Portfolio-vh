"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function About() {
  const expertise = [
    {
      title: "Machine Learning Engineering",
      description:
        "Production-scale ML systems with 99.9% uptime, serving millions of predictions daily across healthcare and automotive sectors.",
    },
    {
      title: "Cloud Architecture",
      description:
        "AWS-certified solutions architect with expertise in scalable, cost-optimized infrastructure reducing operational costs by 40%.",
    },
    {
      title: "Data Engineering",
      description:
        "Real-time data pipelines processing 10M+ records daily with sub-second latency and automated quality monitoring.",
    },
    {
      title: "AI Research & Development",
      description:
        "Published researcher in computer vision and generative AI, with models achieving state-of-the-art performance metrics.",
    },
  ]

  const technologies = [
    "Python",
    "PyTorch",
    "TensorFlow",
    "AWS",
    "Docker",
    "Kubernetes",
    "Apache Airflow",
    "PostgreSQL",
    "LangChain",
    "OpenAI",
    "Streamlit",
    "FastAPI",
    "React",
    "TypeScript",
    "Git",
    "MLflow",
  ]

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-bg-light">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold mb-6 text-text-primary">About Me</h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Results-driven Data Scientist with a proven track record of delivering enterprise-grade AI solutions that
            drive measurable business impact and operational efficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-text-primary">Background</h3>
            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                Master's in Data Science from UMass Dartmouth with 2+ years of hands-on experience architecting and
                deploying production-ready AI systems. Demonstrated expertise in reducing operational costs by 40%
                through intelligent automation and improving system accuracy by 28% through advanced ML techniques.
              </p>
              <p>
                Led cross-functional teams in developing CNN and CGAN-based diagnostic systems for healthcare
                applications, achieving 94% accuracy in medical image classification. Architected battery optimization
                systems for electric vehicles that improved fault detection by 33% and extended battery life
                predictions.
              </p>
              <p>
                Specialized in Large Language Model integration, RAG architectures, and prompt engineering for
                enterprise applications. Successfully deployed systems processing millions of daily transactions with
                sub-second response times and 99.9% uptime.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6 text-text-primary">Core Competencies</h3>
            <div className="space-y-4">
              {expertise.map((item, index) => (
                <Card key={index} className="border border-border-light bg-white">
                  <CardContent className="p-4">
                    <h4 className="font-semibold mb-2 text-text-primary">{item.title}</h4>
                    <p className="text-text-secondary text-sm leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border-light pt-12">
          <h3 className="text-2xl font-semibold mb-8 text-text-primary text-center">Technology Stack</h3>
          <div className="flex flex-wrap justify-center gap-2">
            {technologies.map((tech, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="bg-white border border-border-light text-text-primary px-3 py-1 hover:bg-bg-light transition-colors"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
