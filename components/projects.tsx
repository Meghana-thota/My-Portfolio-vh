"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"

export function Projects() {
  const projects = [
    {
      title: "LLM Agent Workflow Visualizer using Graphiti and Neo4j",
      period: "April 2025 – May 2025",
      description:
        "Built a real-time visualization tool for LLM agent decision-making using Graphiti Agent integration, tracking execution flows and toolchain interactions through an interactive Streamlit interface.",
      status: "Production",
      impact: "60% faster content generation",
      highlights: [
        " Integrated the Graphiti Agent from the Ottomator framework to visualize the decision-making flow of LLM agents in real-time.",
        "Used GraphitiTracer to hook into agent lifecycle events like on_agent_action, on_tool_end, and on_chain_end to track execution steps",
        "Parsed intermediate reasoning steps, tool usage, and model outputs to dynamically construct a visual workflow graph",
        "Leveraged Streamlit to build an interactive front-end for visualizing agent toolchains and trace paths",
        "Made the tool extensible and model-agnostic, supporting integration with different LLMs and custom toolchains.",
      ],
      technologies: ["Python", "OpenAI GPT-4", "Graphiti", "Neo4j", "Streamlit", "Docker", "Knowledge Graphs"],
      github: "https://github.com/Meghana-thota/LLM-Agent-Workflow-Visualizer-using-Graphiti",
    },
    {
      title: "End-to-End Weather Data Ingestion using Apache Airflow and PostgreSQL",
      period: "March 2025 – April 2025",
      description:
        "Developed automated ETL pipelines with Apache Airflow and Spark, implementing real-time feature engineering that reduced processing latency by 75% while ensuring robust monitoring and error handling.",
      status: "Production",
      impact: "Pipeline Acceleration",
      highlights: [
        "Built custom Airflow tasks using the @task decorator and managed dependencies using task chaining within a DAG",
        "Implemented real-time feature engineering with Apache Spark, reducing latency by 75%",
        "Configured Airflow connections and secrets management for API and database access using Astro Runtime.",
        "Managed task scheduling, retries, and logging through Airflow's native UI for robust and transparent pipeline monitoring",
      ],
      technologies: ["Python", "Apache Airflow", "Apache Spark", "MLflow", "PostgreSQL", "Docker", "Kubernetes"],
      github: "https://github.com/Meghana-thota/ETLWEATHER",
    },

    {
      title: "Customer Purchase Prediction Using Amazon SageMaker",
      period: "Feb 2025 – Mar 2025",
      description:
        "Machine learning model to predict customer purchase behavior using Amazon SageMaker with 89.7% accuracy.",
      status: "Production",
      impact: "89.7% prediction accuracy",
      highlights: [
        "Built XGBoost model achieving 89.7% accuracy in customer purchase classification",
        "Implemented end-to-end MLOps pipeline using AWS SageMaker and S3",
        "Deployed real-time API for seamless prediction serving",
        "Fine-tuned hyperparameters for optimal model performance",
        "Enhanced understanding of cloud-based model training and scalable AI deployment",
      ],
      technologies: ["Python", "AWS SageMaker", "XGBoost", "Amazon S3", "NumPy", "Pandas", "MLOps"],
      github: "https://github.com/Meghana-thota/Customer-Purchase-Prediction-Using-Amazon-SageMaker",
    },
    {
      title: "FashionGAN - Generating Fashion with Generative Adversarial Networks",
      period: "Jan 2025 – Feb 2025",
      description: "Deep Convolutional GAN (DCGAN) trained on fashion dataset to generate realistic clothing images.",
      status: "Completed",
      impact: "Realistic fashion image generation",
      highlights: [
        "Trained Deep Convolutional GAN (DCGAN) on Fashion-MNIST dataset",
        "Generated realistic fashion images using adversarial training",
        "Fine-tuned hyperparameters for improved image quality",
        "Explored latent space representations of fashion items",
        "Demonstrated AI applications in fashion design and synthetic data generation",
      ],
      technologies: ["Python", "TensorFlow", "GANs", "DCGAN", "NumPy", "Pandas", "Matplotlib"],
      github: "https://github.com/Meghana-thota/FashionGAN",
    },

    {
      title: "Deep Learning Platform for Medical Diagnostics",
      period: "September 2024 – December 2024",
      description:
        "HIPAA-compliant medical imaging platform with 94% diagnostic accuracy, processing 500+ scans daily.",
      status: "Production",
      impact: "86.34% diagnostic accuracy",
      highlights: [
        "Developed CNN architecture achieving 94% accuracy in medical image classification",
        "Implemented CGAN-based data augmentation, improving model robustness by 20%",
        "Built HIPAA-compliant infrastructure with end-to-end encryption and audit trails",
        "Deployed containerized solution with automated CI/CD, reducing deployment time by 80%",
      ],
      technologies: ["PyTorch", "OpenCV", "FastAPI", "PostgreSQL", "Docker", "AWS", "Terraform"],
    },
    {
      title: "Battery Performance Optimization System",
      period: "May 2022 – July 2023",
      description:
        "ML-driven predictive maintenance system for electric vehicles, improving fault detection by 33% and extending battery life.",
      status: "Production",
      impact: "33% improvement in fault detection",
      highlights: [
        "Developed LightGBM ensemble models with 92% accuracy for battery life prediction",
        "Implemented real-time anomaly detection using Isolation Forest, reducing false positives by 40%",
        "Built automated data collection system processing 1M+ sensor readings per hour",
        "Achieved $2M+ annual savings through predictive maintenance optimization",
      ],
      technologies: ["Python", "LightGBM", "Apache Airflow", "PostgreSQL", "Grafana", "Docker"],
    },
  ]

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-light-cream">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold mb-6 text-dark-charcoal">Featured Projects</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Production-grade AI systems delivering measurable business impact across healthcare, automotive, and
            enterprise sectors.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="border border-warm-beige h-full bg-white">
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-xl font-semibold text-dark-charcoal leading-tight">
                    {project.title}
                  </CardTitle>
                  <Badge variant="outline" className="ml-4 text-xs border-muted-purple text-muted-purple">
                    {project.status}
                  </Badge>
                </div>
                <p className="text-sm text-gray-500 mb-3">{project.period}</p>
                <div className="bg-warm-beige rounded-lg p-3 mb-4 border-l-4 border-deep-navy">
                  <p className="text-dark-charcoal font-medium text-sm">{project.impact}</p>
                </div>
                <p className="text-gray-700 leading-relaxed">{project.description}</p>
              </CardHeader>

              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-3 text-dark-charcoal">Key Achievements</h4>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="text-gray-600 text-sm flex items-start leading-relaxed">
                        <span className="w-1.5 h-1.5 bg-deep-navy rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 text-dark-charcoal">Technologies</h4>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech, i) => (
                      <Badge
                        key={i}
                        variant="secondary"
                        className="text-xs bg-light-cream text-dark-charcoal border border-warm-beige"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 pt-4 border-t border-warm-beige">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex items-center gap-2 text-xs bg-transparent border-muted-purple text-muted-purple hover:bg-light-cream"
                    onClick={() => window.open(project.github, "_blank")}
                  >
                    <Github className="h-3 w-3" />
                    Code
                  </Button>
                  {project.demo && (
                    <Button
                      size="sm"
                      className="flex items-center gap-2 bg-deep-navy hover:bg-muted-purple text-xs transition-colors"
                      onClick={() => window.open(project.demo, "_blank")}
                    >
                      <ExternalLink className="h-3 w-3" />
                      Demo
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
