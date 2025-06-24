"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Zap, Target, Award, Users, Lightbulb, BarChart3, BookOpen } from "lucide-react"
import { motion } from "framer-motion"

export function ResearchSpotlight() {
  const achievements = [
    { icon: BarChart3, text: "18% higher accuracy in battery life predictions" },
    { icon: Zap, text: "33% earlier fault detection with real-time anomaly system" },
    { icon: Target, text: "28% improved fault detection accuracy via feature analysis" },
    { icon: Users, text: "20% reduced testing cycle time with hardware teams" },
  ]

  // Define a consistent accent color
  const accentColor = "text-blue-600"
  const accentBorderColor = "border-blue-500"
  const accentBgLight = "bg-blue-50"

  return (
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block mb-4"
        >
          <Badge variant="outline" className={`text-sm px-4 py-2 ${accentColor} border-blue-300 bg-blue-50 shadow-md`}>
            <BookOpen className="mr-2 h-4 w-4" />
            Undergraduate Research
          </Badge>
        </motion.div>
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">My Research Story</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          From intern to industry recognition—a revolution in battery intelligence, one algorithm at a time.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-start">
        {/* Left Column for Story */}
        <div className="md:col-span-3 space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className={`shadow-lg border-l-4 ${accentBorderColor}`}>
              <CardHeader>
                <CardTitle className={`text-2xl font-semibold ${accentColor} flex items-center`}>
                  <Lightbulb className="mr-3 h-7 w-7" /> Against All Odds
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 space-y-3">
                <p>
                  Out of 120 electrical engineering students at Nitte Meenakshi Institute of Technology, only five were
                  chosen for the undergraduate research opportunity. I was one of them. The challenge? Revolutionize
                  battery management systems that were failing across the industry.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-gray-700">The Problem</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600 space-y-2">
                <p>
                  Traditional battery systems were dying unexpectedly. Faults went undetected until catastrophic
                  failure. Data processing couldn't keep up with real-time demands. The industry needed a
                  breakthrough—and I was determined to deliver it.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-gray-700">The Innovation</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600 space-y-2">
                <p>
                  I dove headfirst into uncharted territory, mastering LightGBM, containerized ETL pipelines, and
                  anomaly detection algorithms. Through countless late nights in the lab, I engineered solutions that
                  traditional approaches couldn't match. I automated the entire data collection process using Selenium,
                  designed containerized ETL pipelines with Apache Airflow and Docker, and created machine learning
                  systems that could predict battery failures before they happened.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Right Column for Achievements & Recognition */}
        <div className="md:col-span-2 space-y-8">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card className={`${accentBgLight} shadow-xl border-t-4 ${accentBorderColor}`}>
              <CardHeader>
                <CardTitle className={`text-xl font-semibold ${accentColor}`}>My Breakthrough Achievements</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {achievements.map((ach, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <ach.icon className={`h-6 w-6 ${accentColor} mt-0.5 flex-shrink-0`} />
                      <span className="text-gray-700 text-sm">{ach.text}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-gray-700">Real-World Impact</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600 space-y-2">
                <p>
                  During my 15-month contract at Leep eDrive (May 2022 - July 2023), my research transformed from
                  academic theory into industry-ready solutions. I worked directly with hardware engineers and R&D
                  teams, proving that my innovations could deliver tangible results in commercial applications.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* Recognition and Legacy - Full Width */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="mt-12"
      >
        <Card className="bg-gray-800 text-white shadow-2xl p-8 rounded-xl">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <Award className={`h-16 w-16 ${accentColor} flex-shrink-0`} />
            <div>
              <h3 className={`text-2xl font-bold ${accentColor} mb-2`}>The Recognition</h3>
              <p className="text-gray-300 mb-3">
                In June 2023, my research earned the{" "}
                <span className={`font-semibold ${accentColor}`}>Outstanding Undergraduate Research Recognition</span>{" "}
                from the Department of Electrical and Electronics. Out of 28 competing teams, my project was awarded top
                honors for "superior methodology, analysis, and outcomes."
              </p>
              <h3 className={`text-2xl font-bold ${accentColor} mt-4 mb-2`}>The Legacy</h3>
              <p className="text-gray-300">
                I didn't just improve battery technology—I proved that one determined undergraduate could challenge
                industry standards and win. My work now influences how batteries are monitored, analyzed, and optimized
                in real electric vehicle applications.
              </p>
            </div>
          </div>
        </Card>
      </motion.div>
    </div>
  )
}
