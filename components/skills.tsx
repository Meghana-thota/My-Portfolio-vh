"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Cloud, Brain, Wrench, BarChart } from "lucide-react"
import { motion } from "framer-motion"

export function Skills() {
  const skillCategories = [
    {
      icon: Brain,
      title: "AI/ML & Deep Learning",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      skills: ["PyTorch", "TensorFlow", "LangChain", "OpenAI/GPT", "Scikit-Learn", "Computer Vision", "LLMs", "RAG"],
    },
    {
      icon: Code,
      title: "Programming Languages",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      skills: ["Python", "SQL", "Bash", "C++", "JavaScript", "R"],
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      color: "text-green-600",
      bgColor: "bg-green-50",
      skills: ["AWS", "Docker", "Kubernetes", "GCP", "Jenkins", "Git", "Terraform"],
    },
    {
      icon: Database,
      title: "Data Engineering",
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      skills: ["PostgreSQL", "Apache Airflow", "PySpark", "MySQL", "OpenSearch", "ETL Pipelines", "Kafka"],
    },
    {
      icon: Wrench,
      title: "Frameworks & Tools",
      color: "text-indigo-600",
      bgColor: "bg-indigo-50",
      skills: ["Streamlit", "FastAPI", "Pandas", "NumPy", "Selenium", "MLflow", "Polars"],
    },
    {
      icon: BarChart,
      title: "Visualization & Analytics",
      color: "text-teal-600",
      bgColor: "bg-teal-50",
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
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Technical Skills</h2>
        <p className="text-xl text-gray-600">Comprehensive expertise across the AI/ML technology stack</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Card
              className={`overflow-hidden border-2 border-transparent hover:border-opacity-50 ${category.color.replace("text-", "hover:border-")}`}
            >
              <CardHeader className={`p-4 ${category.bgColor}`}>
                <CardTitle className="flex items-center gap-3">
                  <category.icon className={`h-8 w-8 ${category.color}`} />
                  <span className={`text-lg font-semibold ${category.color}`}>{category.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <Badge
                      key={i}
                      variant="outline"
                      className="text-sm border-gray-300 text-gray-700 hover:bg-gray-100 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <Card className="bg-gradient-to-r from-sky-100 via-purple-100 to-pink-100 p-2 rounded-xl shadow-lg">
        <CardHeader className="pb-2 pt-4">
          <CardTitle className="text-center text-2xl font-semibold text-gray-700">Certifications & Courses</CardTitle>
        </CardHeader>
        <CardContent className="p-4">
          <div className="flex flex-wrap justify-center gap-3">
            {certifications.map((cert, index) => (
              <Badge
                key={index}
                variant="solid"
                className="bg-white text-gray-700 px-4 py-2 text-sm shadow-sm border border-gray-200 hover:bg-slate-50 transition-colors"
              >
                {cert}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
