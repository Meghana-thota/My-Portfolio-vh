import { streamBlogPost } from "@/app/actions"
import { StreamingTextResponse } from "ai"

export const runtime = "edge"

export async function POST(req: Request) {
  // DEBUGGING LOG: Confirm the API route is being hit.
  console.log("[API_PROXY_LOG] Received request to /api/completion-proxy")

  try {
    const { promptContent, topic, modelProvider, temperature } = await req.json()

    // DEBUGGING LOG: Log the data received from the client.
    console.log(`[API_PROXY_LOG] Parsed data: topic=${topic}, provider=${modelProvider}`)

    if (!promptContent || !topic) {
      console.error("[API_PROXY_LOG] Missing prompt content or topic")
      return new Response(JSON.stringify({ error: "Missing prompt content or topic" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      })
    }

    const stream = await streamBlogPost(promptContent, topic, modelProvider, temperature)
    return new StreamingTextResponse(stream)
  } catch (error: any) {
    console.error("[API_PROXY_LOG] Error in completion proxy:", error)
    let clientErrorMessage = "An internal server error occurred."
    let statusCode = 500

    if (error instanceof Error) {
      if (error.message.toLowerCase().includes("api key")) {
        clientErrorMessage = error.message
        statusCode = 400
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
