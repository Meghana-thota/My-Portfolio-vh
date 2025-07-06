"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function Skills() {
  const skillCategories = [
    {
      title: "Machine Learning & AI",
      skills: [
        "Deep Learning (PyTorch, TensorFlow)",
        "Computer Vision & NLP",
        "Large Language Models",
        "MLOps & Model Deployment",
        "Generative AI (GANs, VAEs)",
        "Reinforcement Learning",
      ],
    },
    {
      title: "Cloud & Infrastructure",
      skills: [
        "AWS (SageMaker, EC2, S3, Lambda)",
        "Docker & Kubernetes",
        "CI/CD Pipelines",
        "Infrastructure as Code",
        "Microservices Architecture",
        "Auto-scaling & Load Balancing",
      ],
    },
    {
      title: "Data Engineering",
      skills: [
        "Apache Airflow & Kafka",
        "Real-time Data Processing",
        "ETL/ELT Pipelines",
        "Data Warehousing",
        "Stream Processing",
        "Data Quality & Governance",
      ],
    },
    {
      title: "Programming & Development",
      skills: [
        "Python (Advanced)",
        "SQL & NoSQL Databases",
        "JavaScript/TypeScript",
        "API Development (FastAPI, Flask)",
        "Version Control (Git)",
        "Software Architecture",
      ],
    },
  ]

  const certifications = [
    { name: "AWS Certified Cloud Practitioner", issuer: "Amazon Web Services", year: "2024" },
    { name: "Machine Learning Specialization", issuer: "Stanford University", year: "2023" },
    { name: "Deep Learning Specialization", issuer: "DeepLearning.AI", year: "2023" },
    { name: "Data Engineering with Apache Airflow", issuer: "IBM", year: "2024" },
    { name: "Advanced SQL for Data Scientists", issuer: "Coursera", year: "2023" },
    { name: "Generative AI with Large Language Models", issuer: "DeepLearning.AI", year: "2024" },
  ]

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold mb-6 text-text-primary">Technical Skills</h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Comprehensive technical expertise spanning the entire AI/ML development lifecycle, from research and
            prototyping to production deployment and monitoring.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="border border-border-light bg-white">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-text-primary">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {category.skills.map((skill, i) => (
                    <li key={i} className="text-text-secondary flex items-start">
                      <span className="w-1.5 h-1.5 bg-primary-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="border border-border-light bg-white">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-semibold text-text-primary">Professional Certifications</CardTitle>
            <p className="text-text-secondary mt-2">
              Industry-recognized credentials demonstrating expertise and commitment to continuous learning
            </p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {certifications.map((cert, index) => (
                <div key={index} className="border border-border-light rounded-lg p-4 bg-bg-light">
                  <h4 className="font-semibold text-text-primary mb-1">{cert.name}</h4>
                  <p className="text-text-secondary text-sm mb-1">{cert.issuer}</p>
                  <p className="text-text-secondary text-sm">{cert.year}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
