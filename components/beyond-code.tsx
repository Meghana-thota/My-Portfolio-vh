"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, ChefHat, Coffee } from "lucide-react"

export function BeyondCode() {
  const interests = [
    {
      icon: BookOpen,
      title: "Reading",
      description: "Exploring diverse genres from sci-fi to philosophy, always learning something new",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: ChefHat,
      title: "Cooking New Cuisines",
      description: "Experimenting with flavors from around the world, from Mexican Tacos to Italian pastas",
      color: "text-orange-600",
      bgColor: "bg-orange-50",
    },
    {
      icon: Coffee,
      title: "Trying New Bobas",
      description:
        "Always on the hunt for the perfect boba combination - taro milk tea with strawberry boba is my current favorite!",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
  ]

  return (
    <section id="beyond-code" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Beyond Code</h2>
          <p className="text-xl text-gray-600">
            When I'm not training models or optimizing algorithms, you'll find me exploring these passions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {interests.map((interest, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow group">
              <CardHeader>
                <div
                  className={`w-16 h-16 ${interest.bgColor} rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform`}
                >
                  <interest.icon className={`h-8 w-8 ${interest.color}`} />
                </div>
                <CardTitle className="text-xl text-center">{interest.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">{interest.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-pink-50 via-purple-50 to-blue-50 rounded-2xl p-8">
          <div className="text-center">
            <p className="text-gray-600 italic text-lg">
              "The best algorithms are inspired by life experiences - whether it's the patience learned from
              slow-cooking a perfect risotto or the exploration mindset from trying a new boba flavor!"
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
