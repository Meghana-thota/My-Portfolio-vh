"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, TrendingUp } from "lucide-react"

export function Experience() {
  const experiences = [
    {
      title: "Graduate Research Assistant - Data Scientist",
      company: "University of Massachusetts Dartmouth",
      location: "Boston, USA",
      period: "Sep 2024 – May 2025",
      type: "Research",
      achievements: [
        "Designed CNN and CGAN-based pipelines improving breast cancer detection accuracy by 5%",
        "Achieved 40% faster training using GPU-accelerated AWS EC2 clusters with DDP",
        "Enabled real-time inference (3x faster) using TorchScript and model pruning",
        "Reduced deployment time by 60% using Docker and AWS Lambda",
        "Integrated LLM-powered diagnostic explanations for physician-facing outputs",
      ],
      technologies: ["PyTorch", "AWS EC2", "Docker", "AWS Lambda", "Snowflake", "CNNs", "CGANs"],
    },
    {
      title: "Data Scientist",
      company: "Leep eDrive",
      location: "India",
      period: "May 2022 – July 2023",
      type: "Full-time",
      achievements: [
        "Developed LightGBM models achieving 18% higher accuracy for battery SOC and RUL prediction",
        "Built real-time anomaly detection system identifying battery faults 33% earlier",
        "Improved fault detection accuracy by 28% using feature importance analysis",
        "Reduced testing cycle time by 20% through ML-driven insights collaboration",
        "Designed containerized ETL pipelines using Apache Airflow and Docker",
      ],
      technologies: ["LightGBM", "Apache Airflow", "Docker", "PostgreSQL", "Selenium", "Python"],
    },
  ]

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Professional Experience</h2>
          <p className="text-xl text-gray-600">
            Building impactful AI solutions across healthcare and automotive industries
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl mb-2">{exp.title}</CardTitle>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-gray-600">
                      <span className="font-semibold text-blue-600">{exp.company}</span>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span className="text-sm">{exp.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span className="text-sm">{exp.period}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Badge variant={exp.type === "Research" ? "default" : "secondary"}>{exp.type}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-green-600" />
                    Key Achievements
                  </h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="text-gray-600 flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <Badge key={i} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
