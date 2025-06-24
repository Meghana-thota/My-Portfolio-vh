export function SkeletonLoader() {
  return (
    <div className="space-y-6 animate-pulse">
      <div className="h-8 bg-muted rounded-md w-3/4"></div>
      <div className="space-y-3">
        <div className="h-4 bg-muted rounded-md w-full"></div>
        <div className="h-4 bg-muted rounded-md w-5/6"></div>
        <div className="h-4 bg-muted rounded-md w-full"></div>
      </div>
      <div className="h-6 bg-muted rounded-md w-1/2"></div>
      <div className="space-y-3">
        <div className="h-4 bg-muted rounded-md w-full"></div>
        <div className="h-4 bg-muted rounded-md w-full"></div>
        <div className="h-4 bg-muted rounded-md w-4/6"></div>
      </div>
      <div className="h-32 bg-muted rounded-md w-full"></div> {/* Code block like */}
      <div className="space-y-3">
        <div className="h-4 bg-muted rounded-md w-5/6"></div>
        <div className="h-4 bg-muted rounded-md w-full"></div>
      </div>
    </div>
  )
}
