"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Calendar, Eye } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

export function Blog() {
  const blogPosts = [
    {
      title: "CVXPY: The Python Library That Makes Optimization Actually Easy",
      description: "Write complex optimization problems exactly like mathematical formulas",
      date: "Just now",
      readTime: "5 min read",
      tags: ["Python", "Optimization", "CVXPY"],
      image: "/images/medium-profile.png",
      url: "https://medium.com/@meghanathota13/cvxpy-the-python-library-that-makes-optimization-actually-easy-b9d80dce4a10",
    },
    {
      title: "The Complete PySpark Guide: From Zero to Processing Terabytes Like a Pro",
      description: "Master distributed data processing with Python's most powerful big data tool",
      date: "22h ago",
      readTime: "12 min read",
      tags: ["PySpark", "Big Data", "Python"],
      image: "/images/medium-profile.png",
      url: "https://medium.com/@meghanathota13/the-complete-pyspark-guide-from-zero-to-processing-terabytes-like-a-pro-f6d4c55055add",
    },
    {
      title: "Key Challenges in Applying AI to Molecular Biology",
      description:
        "Artificial Intelligence is revolutionizing fields from autonomous vehicles to natural language processing, and molecular biology...",
      date: "6d ago",
      readTime: "8 min read",
      tags: ["AI", "Biology", "Research"],
      image: "/images/medium-profile.png",
      url: "https://medium.com/@meghanathota13/key-challenges-in-applying-ai-to-molecular-biology-9193729a8f7c",
    },
    {
      title: "Taming the Curse: A Complete Guide to Dimensionality Reduction in Machine Learning",
      description: "Understanding when, why, and how to reduce dimensions in your data science projects",
      date: "8d ago",
      readTime: "10 min read",
      tags: ["Machine Learning", "Data Science", "Dimensionality Reduction"],
      image: "/images/medium-profile.png",
      url: "https://medium.com/@meghanathota13/taming-the-curse-a-complete-guide-to-dimensionality-reduction-in-machine-learning-9e3c720d7778",
    },
  ]

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Latest Blog Posts</h2>
        <p className="text-xl text-gray-600 mb-8">Sharing insights on AI, machine learning, and data science</p>
        <motion.div className="inline-block" whileHover={{ scale: 1.05 }}>
          <a
            href="https://medium.com/@meghanathota13"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 p-3 bg-white rounded-lg shadow hover:shadow-md transition-shadow"
          >
            <Image
              src="/images/medium-profile.png"
              alt="Medium Profile"
              width={40}
              height={40}
              className="rounded-full border-2 border-purple-300"
            />
            <div className="text-left">
              <span className="font-semibold text-gray-700">Meghana Thota</span>
              <span className="block text-xs text-gray-500">@meghanathota13 on Medium &bull; 16 followers</span>
            </div>
          </a>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {blogPosts.map((post, index) => (
          <motion.div
            key={index}
            className="h-full"
            whileHover={{ y: -8, boxShadow: "0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)" }}
            transition={{ type: "spring", stiffness: 300, duration: 0.2 }}
          >
            <Card className="h-full flex flex-col border-2 border-transparent hover:border-purple-300 transition-colors duration-300 overflow-hidden group">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg mb-1.5 group-hover:text-purple-600 transition-colors">
                  {post.title}
                </CardTitle>
                <p className="text-gray-500 text-sm mb-2 line-clamp-2">{post.description}</p>
                <div className="flex items-center gap-4 text-xs text-gray-400">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Eye className="h-3.5 w-3.5" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col pt-0">
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {post.tags.map((tag, i) => (
                    <Badge key={i} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Button
                  variant="default"
                  size="sm"
                  className="w-full mt-auto bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white transition-all transform hover:scale-105"
                  onClick={() => window.open(post.url, "_blank")}
                >
                  <ExternalLink className="mr-2 h-4 w-4" /> Read on Medium
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="text-center">
        <Button
          size="lg"
          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white transition-all transform hover:scale-105 shadow-md hover:shadow-lg"
          onClick={() => window.open("https://medium.com/@meghanathota13", "_blank")}
        >
          <ExternalLink className="mr-2 h-4 w-4" /> View All Posts on Medium
        </Button>
      </div>
    </div>
  )
}
