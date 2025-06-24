"use client"

import { Button } from "@/components/ui/button"
import { Settings2, Feather } from "lucide-react"
import { cn } from "@/lib/utils"

interface AppHeaderProps {
  onSettingsClick: () => void
  className?: string
}

export function AppHeader({ onSettingsClick, className }: AppHeaderProps) {
  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/50",
        className,
      )}
    >
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg shadow-inner">
            <Feather className="h-6 w-6 text-primary" />
          </div>
          <h1 className="text-xl font-bold tracking-tight text-foreground">Blogwriting Made Easy</h1>
        </div>
        <Button
          variant="outline"
          size="icon"
          onClick={onSettingsClick}
          aria-label="Advanced Settings"
          className="rounded-full hover:bg-muted/80 focus-visible:ring-2 focus-visible:ring-primary/50 transition-colors"
        >
          <Settings2 className="h-5 w-5 text-muted-foreground group-hover:text-foreground" />
        </Button>
      </div>
    </header>
  )
}
