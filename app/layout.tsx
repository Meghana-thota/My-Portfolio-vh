import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"
import { Toaster } from "@/components/ui/toaster" // Ensure this path is correct for your shadcn/ui setup

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Blogwriting Made Easy",
  description: "Generate high-quality tech blog posts effortlessly with AI.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 dark:from-slate-900 dark:to-gray-800 font-sans antialiased",
          fontSans.variable,
        )}
      >
        {children}
        <Toaster /> {/* Add the Toaster component here */}
      </body>
    </html>
  )
}
