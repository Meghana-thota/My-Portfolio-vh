"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Github, Linkedin, Send } from "lucide-react"

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
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-bg-light">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold mb-6 text-text-primary">Get In Touch</h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Let's discuss opportunities in AI, data science, or potential collaborations
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-6 text-text-primary">Contact Information</h3>
            <div className="space-y-4 mb-8">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center gap-4 p-4 bg-white rounded-lg border border-border-light">
                  <div className="bg-bg-light p-3 rounded-lg">
                    <item.icon className="h-5 w-5 text-primary-blue" />
                  </div>
                  <div>
                    <div className="font-medium text-text-primary">{item.label}</div>
                    <a href={item.href} className="text-text-secondary hover:text-primary-blue transition-colors">
                      {item.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="mb-8">
              <h4 className="font-medium mb-4 text-text-primary">Connect with me</h4>
              <div className="flex gap-3">
                {socialLinks.map((link, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    onClick={() => window.open(link.href, "_blank")}
                    className="flex items-center gap-2 border-primary-blue text-primary-blue hover:bg-bg-light"
                  >
                    <link.icon className="h-4 w-4" />
                    {link.label}
                  </Button>
                ))}
              </div>
            </div>

            <Card className="border border-border-light bg-white">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-2 text-text-primary">Open to Opportunities</h4>
                <p className="text-text-secondary">
                  Currently seeking full-time Data Scientist positions and research collaborations in AI/ML,
                  particularly in healthcare and automotive applications.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="border border-border-light bg-white">
            <CardHeader>
              <CardTitle className="text-xl text-text-primary">Send me a message</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium mb-1 text-text-primary">
                      First Name
                    </label>
                    <Input id="firstName" placeholder="John" className="border-border-light" />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium mb-1 text-text-primary">
                      Last Name
                    </label>
                    <Input id="lastName" placeholder="Doe" className="border-border-light" />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1 text-text-primary">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="john@example.com" className="border-border-light" />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-1 text-text-primary">
                    Subject
                  </label>
                  <Input id="subject" placeholder="Collaboration Opportunity" className="border-border-light" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1 text-text-primary">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    rows={5}
                    placeholder="Tell me about your project or opportunity..."
                    className="border-border-light"
                  />
                </div>
                <Button type="submit" className="w-full bg-primary-blue hover:bg-blue-hover transition-colors">
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
