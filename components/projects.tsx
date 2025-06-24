"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, Calendar } from "lucide-react"
import { motion } from "framer-motion"

export function Projects() {
  const projects = [
    {
      title: "LLM Agent Workflow Visualizer",
      description:
        "Real-time visualization tool for LLM agent decision-making flows using Graphiti and Neo4j, with interactive workflow tracking and analysis.",
      period: "May 2025",
      status: "Published",
      highlights: [
        "Integrated Graphiti Agent from Ottomator framework for real-time agent flow visualization",
        "Used GraphitiTracer to hook into agent lifecycle events (on_agent_action, on_tool_end, on_chain_end)",
        "Parsed intermediate reasoning steps and tool usage to construct dynamic workflow graphs",
        "Built interactive Streamlit front-end for visualizing agent toolchains and trace paths",
        "Enabled support for LangChain-compatible agents (OpenAI tools, function-calling agents)",
        "Made tool extensible and model-agnostic for different LLMs and custom toolchains",
      ],
      technologies: ["LLMs", "Graphiti", "Neo4j", "Streamlit", "LangChain", "Ottomator", "Python"],
      github: "https://github.com/Meghana-thota/LLM-Agent-Workflow-Visualizer-using-Graphiti",
    },
    {
      title: "End-to-End Weather Data Ingestion Pipeline using Airflow and Astro",
      description:
        "Comprehensive ETL pipeline using Apache Airflow and PostgreSQL for automated weather data ingestion, transformation, and storage with robust monitoring.",
      period: "Mar 2025 – Apr 2025",
      status: "Published",
      highlights: [
        "Built custom Airflow tasks using @task decorator and managed dependencies with task chaining within DAG",
        "Configured Airflow connections and secrets management for API and database access using Astro Runtime",
        "Utilized Docker and Astro CLI to containerize project, enabling environment consistency and reproducibility",
        "Developed transformation layer to normalize raw API responses and ensure schema consistency",
        "Managed task scheduling, retries, and logging through Airflow's native UI for robust pipeline monitoring",
        "Implemented error handling and data quality checks for reliable data ingestion",
      ],
      technologies: ["Python", "Apache Airflow", "PostgreSQL", "Docker", "Astro", "ETL"],
      github: "https://github.com/Meghana-thota/ETLWEATHER",
    },
    {
      title: "LLM-based Research Paper Chatbot",
      description:
        "GenAI-powered chatbot using RAG and LangChain to recommend top-10 relevant research papers based on natural language queries.",
      period: "Mar 2025 – June 2025",
      status: "In Progress",
      highlights: [
        "Applied Supervised Fine-Tuning (SFT) on GPT3.5 achieving 15% better precision",
        "Designed hybrid retrieval pipeline with dense vector search and Knowledge Graph",
        "Engineered multimodal support for abstracts, tables, and figures",
        "Built intuitive Streamlit UI with real-time search and semantic explanations",
      ],
      technologies: ["GPT-3.5", "LangChain", "RAG", "OpenSearch", "AWS S3", "AWS Lambda", "Streamlit"],
      github: "#",
    },
    {
      title: "NLMDB Python Package",
      description:
        "Natural Language database query system using MCP with automatic schema extraction and multi-agent architecture.",
      period: "April 2025",
      status: "Published",
      highlights: [
        "Integrated LangChain framework for privacy-first, local processing",
        "Built multi-agent architecture for SQL generation and visualization",
        "Supports DataFrame, JSON, and Plotly output formats",
        "Published as open-source Python package on PyPI",
      ],
      technologies: ["Python", "LangChain", "MCP", "SQLite", "PyPI"],
      github: "#",
    },
    {
      title: "Deep Learning Breast Cancer Detection",
      description:
        "CNN and CGAN-based pipeline for breast cancer detection with improved classification accuracy and synthetic data generation.",
      period: "Sep 2024 – Present",
      status: "Research",
      highlights: [
        "Improved classification accuracy by 5% using CNN and CGAN pipelines",
        "Leveraged CGANs to synthesize variants for underrepresented classes",
        "Achieved 40% faster training with GPU-accelerated AWS EC2 clusters",
        "Enabled real-time inference with 3x speed improvement",
      ],
      technologies: ["PyTorch", "CNNs", "CGANs", "AWS EC2", "Docker", "TorchScript"],
      github: "#",
    },
    {
      title: "Battery Performance Optimization",
      description:
        "ML-driven system for electric vehicle battery performance optimization with predictive modeling and anomaly detection.",
      period: "May 2022 – July 2023",
      status: "Production",
      highlights: [
        "Developed LightGBM models with 18% higher accuracy for SOC and RUL prediction",
        "Built real-time anomaly detection identifying faults 33% earlier",
        "Improved fault detection accuracy by 28% using feature importance analysis",
        "Automated telemetry data collection reducing manual overhead",
      ],
      technologies: ["LightGBM", "Isolation Forest", "Apache Airflow", "PostgreSQL", "Selenium"],
      github: "#",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Published":
        return "bg-green-100 text-green-800 border-green-300"
      case "Production":
        return "bg-blue-100 text-blue-800 border-blue-300"
      case "In Progress":
        return "bg-yellow-100 text-yellow-800 border-yellow-300"
      case "Research":
        return "bg-purple-100 text-purple-800 border-purple-300"
      default:
        return "bg-gray-100 text-gray-800 border-gray-300"
    }
  }

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
        <p className="text-xl text-gray-600">
          Innovative AI solutions spanning healthcare, research, and automotive industries
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="h-full"
            whileHover={{ y: -8, boxShadow: "0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)" }}
            transition={{ type: "spring", stiffness: 300, duration: 0.2 }}
          >
            <Card className="h-full flex flex-col border-2 border-transparent hover:border-blue-300 transition-colors duration-300 overflow-hidden group">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </CardTitle>
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                      <Calendar className="h-4 w-4" />
                      <span>{project.period}</span>
                    </div>
                  </div>
                  <Badge variant="outline" className={`text-xs font-semibold ${getStatusColor(project.status)}`}>
                    {project.status}
                  </Badge>
                </div>
                <p className="text-gray-600 text-sm">{project.description}</p>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col pt-0">
                <div className="mb-4 flex-1">
                  <h4 className="font-semibold text-sm mb-2 text-gray-700">Key Highlights</h4>
                  <ul className="space-y-1.5">
                    {project.highlights.slice(0, 3).map(
                      (
                        highlight,
                        i, // Show only first 3 highlights initially
                      ) => (
                        <li key={i} className="text-xs text-gray-500 flex items-start gap-2">
                          <span className="text-blue-500 mt-0.5">•</span>
                          <span>{highlight}</span>
                        </li>
                      ),
                    )}
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-sm mb-2 text-gray-700">Technologies</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="mt-auto pt-4 border-t border-gray-200">
                  {project.github && project.github !== "#" && (
                    <Button
                      size="sm"
                      variant="default"
                      className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white transition-all transform hover:scale-105"
                      onClick={() => window.open(project.github, "_blank")}
                    >
                      <Github className="mr-2 h-4 w-4" />
                      View Code
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
