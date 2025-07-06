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
        "Artificial Intelligence is revolutionizing fields from autonomous vehicles to natural language processing...",
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
    <section id="blog" className="py-24 px-4 sm:px-6 lg:px-8 bg-bg-light">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold mb-6 text-text-primary">Latest Blog Posts</h2>
          <p className="text-lg text-text-secondary mb-8 max-w-3xl mx-auto">
            Sharing insights on AI, machine learning, and data science
          </p>
          <div className="inline-block">
            <a
              href="https://medium.com/@meghanathota13"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 p-3 bg-white rounded-lg border border-border-light hover:border-primary-blue transition-colors"
            >
              <Image
                src="/images/medium-profile.png"
                alt="Medium Profile"
                width={32}
                height={32}
                className="rounded-full"
              />
              <div className="text-left">
                <span className="font-medium text-text-primary">Meghana Thota</span>
                <span className="block text-xs text-text-secondary">@meghanathota13 on Medium • 25 followers</span>
              </div>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {blogPosts.map((post, index) => (
            <Card key={index} className="h-full border border-border-light bg-white">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg mb-2 text-text-primary">{post.title}</CardTitle>
                <p className="text-text-secondary text-sm mb-2 line-clamp-2">{post.description}</p>
                <div className="flex items-center gap-4 text-xs text-text-secondary">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Eye className="h-3 w-3" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col pt-0">
                <div className="flex flex-wrap gap-1 mb-4">
                  {post.tags.map((tag, i) => (
                    <Badge
                      key={i}
                      variant="secondary"
                      className="text-xs bg-bg-light text-text-primary border border-border-light"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full mt-auto bg-transparent border-primary-blue text-primary-blue hover:bg-bg-light"
                  onClick={() => window.open(post.url, "_blank")}
                >
                  <ExternalLink className="mr-2 h-3 w-3" /> Read on Medium
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            className="bg-primary-blue hover:bg-blue-hover transition-colors"
            onClick={() => window.open("https://medium.com/@meghanathota13", "_blank")}
          >
            <ExternalLink className="mr-2 h-4 w-4" /> View All Posts on Medium
          </Button>
        </div>
      </div>
    </section>
  )
}
