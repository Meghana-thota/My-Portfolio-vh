"use client"

import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism"
// Removed cn and Github icon import as they are no longer needed for this specific link styling

export function MarkdownDisplay({ content }: { content: string }) {
  return (
    <div className="prose prose-base lg:prose-lg dark:prose-invert max-w-none break-words">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          img: ({ node, ...props }) => {
            const src = props.src || ""
            if (src.startsWith("placeholder:")) {
              const query = src.substring("placeholder:".length)
              const imageUrl = `/placeholder.svg?width=800&height=450&query=${encodeURIComponent(query)}`
              return (
                <div className="my-8 overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700 shadow-md bg-gray-50 dark:bg-gray-800">
                  <img src={imageUrl || "/placeholder.svg"} alt={props.alt} className="w-full object-cover" />
                  <p className="text-center text-xs text-gray-500 dark:text-gray-400 p-2">{props.alt}</p>
                </div>
              )
            }
            return (
              <div className="my-6 overflow-hidden rounded-lg border shadow-md">
                <img {...props} className="w-full" />
              </div>
            )
          },
          a: ({ node, ...props }) => {
            // Simplified link styling, no longer checking for GitHub placeholder
            return (
              <a className="text-primary hover:underline font-medium" {...props}>
                {props.children}
              </a>
            )
          },
          h1: ({ node, ...props }) => <h1 className="text-3xl lg:text-4xl font-bold mt-8 mb-4" {...props} />,
          h2: ({ node, ...props }) => (
            <h2
              className="text-2xl lg:text-3xl font-semibold mt-8 mb-4 border-b border-gray-200 dark:border-gray-700 pb-2"
              {...props}
            />
          ),
          h3: ({ node, ...props }) => <h3 className="text-xl lg:text-2xl font-semibold mt-6 mb-3" {...props} />,
          p: ({ node, ...props }) => <p className="mb-4 leading-relaxed" {...props} />,
          ul: ({ node, ...props }) => <ul className="list-disc pl-6 mb-4 space-y-2" {...props} />,
          ol: ({ node, ...props }) => <ol className="list-decimal pl-6 mb-4 space-y-2" {...props} />,
          li: ({ node, ...props }) => <li className="mb-1" {...props} />,
          blockquote: ({ node, ...props }) => (
            <blockquote
              className="border-l-4 border-primary pl-4 italic my-6 text-gray-600 dark:text-gray-400"
              {...props}
            />
          ),
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "")
            return !inline && match ? (
              <div className="my-6 rounded-md overflow-hidden bg-gray-800 dark:bg-gray-900 text-sm">
                <SyntaxHighlighter
                  style={vscDarkPlus}
                  language={match[1]}
                  PreTag="div"
                  customStyle={{ margin: 0, padding: "1.25rem" }}
                  lineNumberStyle={{ opacity: 0.5, minWidth: "2.25em" }}
                  showLineNumbers={String(children).split("\n").length > 3}
                  {...props}
                >
                  {String(children).replace(/\n$/, "")}
                </SyntaxHighlighter>
              </div>
            ) : (
              <code
                className="bg-gray-100 dark:bg-gray-700 text-primary dark:text-primary-foreground px-1.5 py-1 rounded-md text-[0.9em] font-mono"
                {...props}
              >
                {children}
              </code>
            )
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}
