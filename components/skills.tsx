"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Cloud, Brain, Wrench, BarChart } from "lucide-react"

export function Skills() {
  const skillCategories = [
    {
      icon: Brain,
      title: "AI/ML & Deep Learning",
      color: "text-purple-600",
      skills: ["PyTorch", "TensorFlow", "LangChain", "OpenAI/GPT", "Scikit-Learn", "Computer Vision"],
    },
    {
      icon: Code,
      title: "Programming Languages",
      color: "text-blue-600",
      skills: ["Python", "SQL", "Bash", "C++", "JavaScript", "R"],
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      color: "text-green-600",
      skills: ["AWS", "Docker", "Kubernetes", "GCP", "Jenkins", "Git"],
    },
    {
      icon: Database,
      title: "Data Engineering",
      color: "text-orange-600",
      skills: ["PostgreSQL", "Apache Airflow", "PySpark", "MySQL", "OpenSearch", "ETL Pipelines"],
    },
    {
      icon: Wrench,
      title: "Frameworks & Tools",
      color: "text-red-600",
      skills: ["Streamlit", "FastAPI", "Pandas", "NumPy", "Selenium", "MLflow"],
    },
    {
      icon: BarChart,
      title: "Visualization & Analytics",
      color: "text-teal-600",
      skills: ["Matplotlib", "Plotly", "Seaborn", "D3.js", "Tableau", "Power BI"],
    },
  ]

  const certifications = [
    "AWS Cloud Practitioner",
    "ETL and Data Pipelines with Airflow and Kafka by IBM",
    "Advanced SQL for Data Scientists",
    "Amazon Redshift Essentials",
    "Generative AI with Large Language Models",
    "Machine Learning by Stanford (Andrew Ng)",
  ]

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Technical Skills</h2>
          <p className="text-xl text-gray-600">Comprehensive expertise across the AI/ML technology stack</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <category.icon className={`h-6 w-6 ${category.color}`} />
                  <span className="text-lg">{category.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <Badge key={i} variant="outline" className="text-sm">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-gradient-to-r from-blue-50 to-purple-50">
          <CardHeader>
            <CardTitle className="text-center text-2xl">Certifications & Courses</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {certifications.map((cert, index) => (
                <Badge key={index} variant="secondary" className="p-3 text-center justify-center">
                  {cert}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
