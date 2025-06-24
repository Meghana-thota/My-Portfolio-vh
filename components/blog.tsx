"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Calendar, Eye } from "lucide-react"
import Image from "next/image"

export function Blog() {
  const blogPosts = [
    {
      title: "CVXPY: The Python Library That Makes Optimization Actually Easy",
      description: "Write complex optimization problems exactly like mathematical formulas",
      date: "Just now",
      readTime: "5 min read",
      tags: ["Python", "Optimization", "CVXPY"],
      image: "/images/medium-profile.png",
      url: "https://medium.com/@meghanathota13",
    },
    {
      title: "The Complete PySpark Guide: From Zero to Processing Terabytes Like a Pro",
      description: "Master distributed data processing with Python's most powerful big data tool",
      date: "22h ago",
      readTime: "12 min read",
      tags: ["PySpark", "Big Data", "Python"],
      image: "/images/medium-profile.png",
      url: "https://medium.com/@meghanathota13",
    },
    {
      title: "Key Challenges in Applying AI to Molecular Biology",
      description:
        "Artificial Intelligence is revolutionizing fields from autonomous vehicles to natural language processing, and molecular biology...",
      date: "6d ago",
      readTime: "8 min read",
      tags: ["AI", "Biology", "Research"],
      image: "/images/medium-profile.png",
      url: "https://medium.com/@meghanathota13",
    },
    {
      title: "Taming the Curse: A Complete Guide to Dimensionality Reduction in Machine Learning",
      description: "Understanding when, why, and how to reduce dimensions in your data science projects",
      date: "8d ago",
      readTime: "10 min read",
      tags: ["Machine Learning", "Data Science", "Dimensionality Reduction"],
      image: "/images/medium-profile.png",
      url: "https://medium.com/@meghanathota13",
    },
  ]

  return (
    <section id="blog" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Latest Blog Posts</h2>
          <p className="text-xl text-gray-600 mb-8">Sharing insights on AI, machine learning, and data science</p>
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="flex items-center gap-2">
              <Image
                src="/images/medium-profile.png"
                alt="Medium Profile"
                width={32}
                height={32}
                className="rounded-full"
              />
              <span className="text-gray-600">@meghanathota13 on Medium</span>
            </div>
            <Badge variant="secondary">16 followers</Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow group">
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-lg mb-2 group-hover:text-blue-600 transition-colors">
                      {post.title}
                    </CardTitle>
                    <p className="text-gray-600 text-sm mb-3">{post.description}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Eye className="h-4 w-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, i) => (
                    <Badge key={i} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full group-hover:bg-blue-50 group-hover:border-blue-300"
                  onClick={() => window.open(post.url, "_blank")}
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Read on Medium
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            onClick={() => window.open("https://medium.com/@meghanathota13", "_blank")}
          >
            <ExternalLink className="mr-2 h-4 w-4" />
            View All Posts on Medium
          </Button>
        </div>
      </div>
    </section>
  )
}
