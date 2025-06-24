"use client"

import type React from "react"
import { useState, useEffect, useCallback } from "react"
import { useCompletion } from "@ai-sdk/react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Loader2, FileText, Settings2, Sparkles, Wand2, Copy, XCircle, Check, AlertTriangle, Info } from "lucide-react"
import { templateOptions } from "@/lib/prompt-templates"
import { MarkdownDisplay } from "@/components/markdown-display"
import { FilterSheet, type FilterFormData, type TemplateKey } from "@/components/filter-sheet"
import { AppHeader } from "@/components/header"
import { SkeletonLoader } from "@/components/skeleton-loader"
import { useToast } from "@/hooks/use-toast"

export default function BlogWriterPage() {
  const [topic, setTopic] = useState("Introduction to Python Programming")
  const [filterData, setFilterData] = useState<FilterFormData>({
    domain: "Software Development",
    targetAudience: "Beginners",
    wordCount: "1500 words",
    tone: "Informative and Practical",
    primaryKeyword: "Python programming",
    secondaryKeywords: "python basics, learn python",
    selectedTemplate: "master",
    technologyFramework: "Python",
    modelProvider: "free",
    temperature: 0.7,
  })
  const [isSheetOpen, setIsSheetOpen] = useState(false)
  const [hasCopied, setHasCopied] = useState(false)
  const { toast } = useToast()

  const {
    completion,
    handleSubmit: handleCompletionSubmit,
    isLoading,
    error,
    stop,
  } = useCompletion({
    api: "/api/completion-proxy",
    onError: (err) => {
      console.error("Error from useCompletion hook:", err)
      let description = err.message || "An unexpected error occurred. Check the console for more details."
      if (err.message.toLowerCase().includes("api key")) {
        description = `API Key Error: ${err.message}. Please ensure the required API key is set in your project's environment variables.`
      }
      toast({
        title: "Generation Failed",
        description: description,
        variant: "destructive",
        duration: 10000,
      })
    },
  })

  const buildFullPrompt = useCallback(() => {
    const originalPromptContent = templateOptions[filterData.selectedTemplate as TemplateKey]
    let effectiveFramework = filterData.technologyFramework
    if (filterData.selectedTemplate !== "technicalTutorial" && topic.toLowerCase().includes("python")) {
      effectiveFramework = "Python"
    } else if (!filterData.technologyFramework && topic.toLowerCase().includes("python")) {
      effectiveFramework = "Python"
    }

    return originalPromptContent
      .replace(/\[DOMAIN\]/g, filterData.domain)
      .replace(/\[TOPIC\]/g, topic)
      .replace(/\[YOUR SPECIFIC TOPIC\]/g, topic)
      .replace(/\[TECHNOLOGY\/FRAMEWORK\]/g, effectiveFramework || topic)
      .replace(/\[Target Audience: .*?\]/g, `Target Audience: ${filterData.targetAudience}`)
      .replace(/\[Word Count: .*?\]/g, `Word Count: ${filterData.wordCount}`)
      .replace(/\[Tone: .*?\]/g, `Tone: ${filterData.tone}`)
      .replace(/\[KEYWORD\]/g, filterData.primaryKeyword)
      .replace(/\[KEYWORD1, KEYWORD2, KEYWORD3\]/g, filterData.secondaryKeywords)
  }, [topic, filterData])

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!topic.trim()) {
      toast({ title: "Topic Required", description: "Please enter a blog post topic.", variant: "destructive" })
      return
    }

    const fullPrompt = buildFullPrompt()
    const bodyPayload = {
      promptContent: fullPrompt,
      topic: topic,
      modelProvider: filterData.modelProvider,
      temperature: filterData.temperature,
    }

    // DEBUGGING LOG: Log the payload being sent from the client.
    console.log("[CLIENT LOG] Submitting form with payload:", bodyPayload)

    handleCompletionSubmit(e, {
      body: bodyPayload,
    })
  }

  const handleCopyToClipboard = () => {
    if (!completion) return
    navigator.clipboard.writeText(completion)
    setHasCopied(true)
    toast({ title: "Copied to Clipboard!", description: "The content has been copied." })
  }

  useEffect(() => {
    if (hasCopied) {
      const timer = setTimeout(() => setHasCopied(false), 2000)
      return () => clearTimeout(timer)
    }
  }, [hasCopied])

  const handleStopOrClear = () => {
    if (isLoading) {
      stop()
      toast({ title: "Generation Stopped" })
    }
  }

  const showApiKeyWarning = filterData.modelProvider !== "free" && !isLoading && !completion && !error

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-stone-100 dark:from-slate-900 dark:via-gray-900 dark:to-stone-950">
      <AppHeader onSettingsClick={() => setIsSheetOpen(true)} />
      <main className="flex-grow container mx-auto px-4 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <Card className="lg:col-span-5 shadow-2xl shadow-primary/10 dark:shadow-primary/20 lg:sticky top-24 self-start bg-card/80 backdrop-blur-xl border border-primary/20 rounded-xl overflow-hidden">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary/50 via-primary to-primary/50 animate-pulse-slow"></div>
            <CardHeader className="p-6 border-b border-border/30">
              <div className="flex items-center gap-3 mb-1">
                <Wand2 className="w-7 h-7 text-primary" />
                <CardTitle className="text-2xl font-bold tracking-tight text-foreground">Blog Post Generator</CardTitle>
              </div>
              <CardDescription className="text-muted-foreground text-sm">
                Currently using the <strong>{filterData.modelProvider.toUpperCase()} Tier</strong>. Adjust in settings.
              </CardDescription>
            </CardHeader>
            <form onSubmit={onSubmit}>
              <CardContent className="p-6 space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="topic" className="text-sm font-medium text-foreground/90">
                    Blog Post Topic
                  </Label>
                  <Input
                    id="topic"
                    name="topic"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    placeholder="e.g., Advanced Python Techniques"
                    className="h-12 text-base px-4 rounded-lg border-2 border-border/50 focus:ring-2 focus:ring-primary/70 focus:border-primary transition-all duration-200 shadow-sm hover:shadow-md focus:shadow-lg focus:shadow-primary/20 bg-background/70"
                    disabled={isLoading}
                  />
                </div>
              </CardContent>
              <CardFooter className="p-6 bg-muted/30 border-t border-border/30">
                <Button
                  type="submit"
                  size="lg"
                  className="w-full h-12 text-base font-semibold bg-gradient-to-r from-primary to-primary/70 hover:from-primary/90 hover:to-primary/60 text-primary-foreground transition-all duration-300 transform hover:scale-[1.02] focus:ring-4 focus:ring-primary/30 rounded-lg shadow-lg hover:shadow-primary/30"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <Sparkles className="mr-2 h-5 w-5" />
                      Generate Article
                    </>
                  )}
                </Button>
              </CardFooter>
            </form>
          </Card>

          <Card className="lg:col-span-7 shadow-2xl shadow-slate-400/10 dark:shadow-black/50 min-h-[calc(100vh-12rem)] bg-card/80 backdrop-blur-xl border border-border/50 rounded-xl overflow-hidden">
            <CardHeader className="p-6 flex flex-row items-center justify-between border-b border-border/30">
              <div className="flex items-center gap-3">
                <FileText className="w-6 h-6 text-primary" />
                <div>
                  <CardTitle className="text-xl font-semibold text-foreground">Generated Content</CardTitle>
                  <CardDescription className="text-sm text-muted-foreground">
                    Your AI-crafted article will stream here.
                  </CardDescription>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {completion && !isLoading && (
                  <Button variant="outline" size="icon" onClick={handleCopyToClipboard} aria-label="Copy content">
                    {hasCopied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                  </Button>
                )}
                {isLoading && (
                  <Button variant="outline" size="icon" onClick={handleStopOrClear} aria-label="Stop generation">
                    <XCircle className="h-4 w-4 text-red-500" />
                  </Button>
                )}
              </div>
            </CardHeader>
            <CardContent className="p-6 h-full">
              {isLoading && !completion && <SkeletonLoader />}
              {error && (
                <div className="flex flex-col items-center justify-center text-center text-red-600 dark:text-red-400 p-6 my-4 border-2 border-dashed border-red-500/30 bg-red-500/5 rounded-xl">
                  <AlertTriangle className="w-12 h-12 mb-4 text-red-500" />
                  <p className="text-lg font-semibold mb-1">Generation Failed</p>
                  <p className="text-sm max-w-md">
                    {error.message.toLowerCase().includes("api key")
                      ? `It seems there's an issue with the API key for the selected tier. The developer needs to set the required key in the project's environment variables.`
                      : error.message || "An unknown error occurred. Please check the console or server logs."}
                  </p>
                  <Button variant="link" className="mt-3 text-sm" onClick={() => setIsSheetOpen(true)}>
                    Check Tier Settings
                  </Button>
                </div>
              )}
              {completion && <MarkdownDisplay content={completion} />}
              {!isLoading &&
                !completion &&
                !error &&
                (showApiKeyWarning ? (
                  <div className="flex flex-col items-center justify-center h-full text-center text-blue-700 dark:text-blue-300 border-2 border-dashed border-blue-500/30 bg-blue-500/5 rounded-xl p-8">
                    <Info className="w-12 h-12 mb-4 text-blue-500" />
                    <p className="text-lg font-semibold mb-1">Premium Tier Selected</p>
                    <p className="text-sm max-w-md">
                      To use the Premium (OpenAI) model, the developer must set the <strong>OPENAI_API_KEY</strong> in
                      the project's environment variables.
                    </p>
                    <Button variant="link" className="mt-3 text-sm" onClick={() => setIsSheetOpen(true)}>
                      Change Tier or Settings
                    </Button>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center h-full text-center text-muted-foreground border-2 border-dashed border-border/50 rounded-xl p-8">
                    <Sparkles className="w-16 h-16 mb-6 text-primary/30" />
                    <p className="text-xl font-medium mb-2 text-foreground/80">Ready to Write?</p>
                    <p className="text-sm max-w-xs">
                      Enter your topic, fine-tune with <Settings2 className="inline h-4 w-4 mx-0.5" /> settings, and let
                      the magic begin!
                    </p>
                  </div>
                ))}
            </CardContent>
          </Card>
        </div>
        <FilterSheet
          isOpen={isSheetOpen}
          onOpenChange={setIsSheetOpen}
          filterData={filterData}
          onFilterDataChange={setFilterData}
        />
      </main>
    </div>
  )
}
