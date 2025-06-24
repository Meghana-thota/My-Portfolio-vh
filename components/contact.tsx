"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Github, Linkedin, Send } from "lucide-react"
import { motion } from "framer-motion"

export function Contact() {
  const contactInfo = [
    { icon: Mail, label: "Email", value: "meghanathota13@gmail.com", href: "mailto:meghanathota13@gmail.com" },
    { icon: MapPin, label: "Location", value: "Boston, MA", href: "#" },
  ]

  const socialLinks = [
    { icon: Github, label: "GitHub", href: "https://github.com/meghanathota13" },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/meghana-thota36/" },
  ]

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
        <p className="text-xl text-gray-600">
          Let's discuss opportunities in AI, data science, or potential collaborations
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-2xl font-semibold mb-8 text-gray-700">Contact Information</h3>
          <div className="space-y-6 mb-8">
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                whileHover={{ scale: 1.03 }}
              >
                <div className="bg-gradient-to-tr from-blue-100 to-purple-100 p-3 rounded-lg">
                  <item.icon className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-800">{item.label}</div>
                  <a href={item.href} className="text-gray-600 hover:text-blue-700 transition-colors">
                    {item.value}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mb-8">
            <h4 className="font-semibold mb-4 text-gray-700">Connect with me</h4>
            <div className="flex gap-4">
              {socialLinks.map((link, index) => (
                <motion.div key={index} whileHover={{ scale: 1.1 }}>
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() => window.open(link.href, "_blank")}
                    className="flex items-center gap-2 text-gray-700 border-gray-300 hover:bg-gray-50 hover:border-blue-400 hover:text-blue-600 transition-all"
                  >
                    <link.icon className="h-5 w-5" />
                    {link.label}
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>

          <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-xl">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2">Open to Opportunities</h4>
              <p className="text-blue-100">
                Currently seeking full-time Data Scientist positions and research collaborations in AI/ML, particularly
                in healthcare and automotive applications.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Card className="shadow-xl border-t-4 border-blue-500">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-700">Send me a message</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium mb-1 text-gray-600">
                      First Name
                    </label>
                    <Input id="firstName" placeholder="John" className="focus:border-blue-500 focus:ring-blue-500" />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium mb-1 text-gray-600">
                      Last Name
                    </label>
                    <Input id="lastName" placeholder="Doe" className="focus:border-blue-500 focus:ring-blue-500" />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1 text-gray-600">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    className="focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-1 text-gray-600">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    placeholder="Collaboration Opportunity"
                    className="focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1 text-gray-600">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    rows={5}
                    placeholder="Tell me about your project or opportunity..."
                    className="focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 text-base font-semibold transition-all transform hover:scale-105 shadow-md hover:shadow-lg"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
