import { streamBlogPost } from "@/app/actions"
import { StreamingTextResponse } from "ai"

export const runtime = "edge"

export async function POST(req: Request) {
  try {
    const { promptContent, topic, modelProvider, temperature } = await req.json()

    if (!promptContent || !topic) {
      return new Response(JSON.stringify({ error: "Missing prompt content or topic" }), {
        status: 400, // Bad Request
        headers: { "Content-Type": "application/json" },
      })
    }

    const stream = await streamBlogPost(promptContent, topic, modelProvider, temperature)
    return new StreamingTextResponse(stream)
  } catch (error: any) {
    console.error("[API_PROXY_ERROR] Error in /api/completion-proxy:", error)

    let clientErrorMessage = "An internal server error occurred."
    let statusCode = 500 // Internal Server Error by default

    if (error instanceof Error) {
      // Check for specific API key error messages from the action
      if (
        error.message.toLowerCase().includes("api key is not configured") ||
        error.message.toLowerCase().includes("openai_api_key") || // More general check
        error.message.toLowerCase().includes("groq_api_key")
      ) {
        clientErrorMessage = error.message // Use the specific message from the action
        statusCode = 400 // Bad Request, as it's often a client-side setup issue (missing env var)
      } else {
        clientErrorMessage = "An unexpected error occurred on the server."
      }
    }

    return new Response(JSON.stringify({ error: clientErrorMessage }), {
      status: statusCode,
      headers: { "Content-Type": "application/json" },
    })
  }
}
