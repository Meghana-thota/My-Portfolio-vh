"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetFooter,
  SheetClose,
} from "@/components/ui/sheet"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { templateOptions } from "@/lib/prompt-templates"
import type { ModelProvider } from "@/app/actions"
import { Info, Zap, Star } from "lucide-react"

export type TemplateKey = keyof typeof templateOptions

export interface FilterFormData {
  domain: string
  targetAudience: string
  wordCount: string
  tone: string
  primaryKeyword: string
  secondaryKeywords: string
  selectedTemplate: TemplateKey
  technologyFramework: string
  modelProvider: ModelProvider
  temperature: number
}

interface FilterSheetProps {
  isOpen: boolean
  onOpenChange: (isOpen: boolean) => void
  filterData: FilterFormData
  onFilterDataChange: (data: FilterFormData) => void
}

export function FilterSheet({ isOpen, onOpenChange, filterData, onFilterDataChange }: FilterSheetProps) {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    onFilterDataChange({ ...filterData, [name]: value })
  }

  const handleSelectChange = (name: keyof FilterFormData, value: string) => {
    onFilterDataChange({ ...filterData, [name]: value as any })
  }

  const handleSliderChange = (value: number[]) => {
    onFilterDataChange({ ...filterData, temperature: value[0] })
  }

  return (
    <Sheet open={isOpen} onOpenChange={onOpenChange}>
      <SheetContent className="sm:max-w-md w-[90vw] overflow-y-auto p-6 bg-card/95 backdrop-blur-lg">
        <SheetHeader className="mb-6">
          <SheetTitle className="text-2xl font-semibold text-foreground">Advanced Settings</SheetTitle>
          <SheetDescription className="text-sm text-muted-foreground">
            Fine-tune the generation parameters for your blog post.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-y-6">
          <div className="space-y-2">
            <Label htmlFor="modelProvider" className="font-medium text-foreground">
              Generation Tier
            </Label>
            <Select
              onValueChange={(value) => handleSelectChange("modelProvider", value)}
              defaultValue={filterData.modelProvider}
            >
              <SelectTrigger id="modelProvider" className="h-11 bg-background border-border/70">
                <SelectValue placeholder="Select a tier" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="free" className="py-2">
                  <div className="flex items-center gap-2">
                    <Zap className="h-4 w-4 text-green-500" />
                    <span>Free Tier (Fast & Good)</span>
                  </div>
                </SelectItem>
                <SelectItem value="openai" className="py-2">
                  <div className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-blue-500" />
                    <span>Premium (Most Powerful)</span>
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
            {filterData.modelProvider === "openai" && (
              <div className="mt-2 flex items-start space-x-2 p-2.5 text-xs text-blue-700 dark:text-blue-300 bg-blue-500/10 dark:bg-blue-500/20 rounded-md border border-blue-500/20">
                <Info className="h-4 w-4 flex-shrink-0 mt-0.5" />
                <p>
                  The Premium tier uses OpenAI. The developer must provide an <strong>OPENAI_API_KEY</strong> in the
                  project's environment variables.
                </p>
              </div>
            )}
            {filterData.modelProvider === "free" && (
              <div className="mt-2 flex items-start space-x-2 p-2.5 text-xs text-green-700 dark:text-green-300 bg-green-500/10 dark:bg-green-500/20 rounded-md border border-green-500/20">
                <Info className="h-4 w-4 flex-shrink-0 mt-0.5" />
                <p>
                  The Free tier uses Groq AI. The developer must provide a <strong>GROQ_API_KEY</strong> in the
                  project's environment variables.
                </p>
              </div>
            )}
          </div>

          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <Label htmlFor="temperature" className="font-medium text-foreground">
                Creativity (Temperature)
              </Label>
              <span className="text-sm font-mono px-2 py-1 rounded-md bg-primary/10 text-primary">
                {filterData.temperature.toFixed(1)}
              </span>
            </div>
            <Slider
              id="temperature"
              min={0}
              max={1}
              step={0.1}
              defaultValue={[filterData.temperature]}
              onValueChange={handleSliderChange}
              className="[&>span:first-child]:h-3 [&>span:first-child]:w-3"
            />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>Deterministic</span>
              <span>Creative</span>
            </div>
          </div>

          {/* Other settings remain the same */}
          <div className="space-y-2">
            <Label htmlFor="template" className="font-medium text-foreground">
              Prompt Template
            </Label>
            <Select
              onValueChange={(value) => handleSelectChange("selectedTemplate", value)}
              defaultValue={filterData.selectedTemplate}
            >
              <SelectTrigger id="template" className="h-11 bg-background border-border/70">
                <SelectValue placeholder="Select a template" />
              </SelectTrigger>
              <SelectContent>
                {Object.entries(templateOptions).map(([key, _]) => (
                  <SelectItem key={key} value={key} className="py-2">
                    {key.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase())}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {filterData.selectedTemplate === "technicalTutorial" && (
            <div className="space-y-2 p-3 bg-primary/5 border border-primary/20 rounded-md">
              <Label htmlFor="technologyFramework" className="font-medium text-primary">
                Technology / Framework <span className="text-xs">(for Tutorial template)</span>
              </Label>
              <Input
                id="technologyFramework"
                name="technologyFramework"
                value={filterData.technologyFramework}
                onChange={handleInputChange}
                placeholder="e.g., React, CVXPY, PATH Solver"
                className="h-11 bg-background border-border/70"
              />
            </div>
          )}
        </div>
        <SheetFooter className="mt-8 pt-6 border-t border-border/70">
          <SheetClose asChild>
            <Button
              type="button"
              className="w-full h-11 text-base bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Done
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
