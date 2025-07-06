"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function ResearchSpotlight() {
  const achievements = [
    { title: "18% Accuracy Improvement", description: "LightGBM models for battery life prediction" },
    { title: "33% Earlier Detection", description: "Real-time anomaly detection system" },
    { title: "28% Better Performance", description: "Fault detection through feature analysis" },
    { title: "Outstanding Research Award", description: "Recognition for breakthrough work" },
  ]

  return (
    <section id="research-spotlight" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2 text-primary-blue border-primary-blue">
            Research Excellence
          </Badge>
          <h2 className="text-4xl font-semibold mb-6 text-text-primary">Battery Intelligence Research</h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Breakthrough research in machine learning-driven battery optimization that transformed industry standards
            and earned recognition as outstanding undergraduate research.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-text-primary">Research Impact</h3>
            <div className="space-y-6">
              <Card className="border-l-4 border-l-primary-blue border border-border-light bg-white">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-text-primary mb-3">The Challenge</h4>
                  <p className="text-text-secondary leading-relaxed">
                    Traditional battery management systems were failing across the industry. Faults went undetected
                    until catastrophic failure, and data processing couldn't keep up with real-time demands.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-green-600 border border-border-light bg-white">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-text-primary mb-3">The Innovation</h4>
                  <p className="text-text-secondary leading-relaxed">
                    Developed advanced machine learning algorithms using LightGBM and Isolation Forest to predict
                    battery failures before they occurred. Created containerized ETL pipelines with Apache Airflow.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-purple-600 border border-border-light bg-white">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-text-primary mb-3">Industry Recognition</h4>
                  <p className="text-text-secondary leading-relaxed">
                    Awarded "Outstanding Undergraduate Research Recognition" by the Department of Electrical and
                    Electronics Engineering. Research now influences battery monitoring in commercial applications.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6 text-text-primary">Key Achievements</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {achievements.map((achievement, index) => (
                <Card key={index} className="border border-border-light text-center bg-white">
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-text-primary mb-2">{achievement.title}</h4>
                    <p className="text-text-secondary text-sm">{achievement.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="border border-border-light bg-white">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold mb-4 text-text-primary">Research Timeline</h4>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-3 h-3 bg-primary-blue rounded-full"></div>
                    <div>
                      <p className="font-medium text-text-primary">May 2022 - Selection</p>
                      <p className="text-text-secondary text-sm">Chosen from 120 candidates for research opportunity</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-3 h-3 bg-primary-blue rounded-full"></div>
                    <div>
                      <p className="font-medium text-text-primary">2022-2023 - Development</p>
                      <p className="text-text-secondary text-sm">15-month intensive research and development phase</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-3 h-3 bg-primary-blue rounded-full"></div>
                    <div>
                      <p className="font-medium text-text-primary">July 2023 - Recognition</p>
                      <p className="text-text-secondary text-sm">Outstanding Research Award and industry adoption</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
