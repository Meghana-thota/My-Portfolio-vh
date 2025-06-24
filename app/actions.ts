"use server"

import { streamText } from "ai"
import { groq } from "@ai-sdk/groq"
import { openai } from "@ai-sdk/openai"
import type { LanguageModel } from "ai"

export type ModelProvider = "free" | "openai"

function getSimulatedRetrievedContext(topic: string): string {
  const lowerTopic = topic.toLowerCase()
  if (lowerTopic.includes("python")) {
    return `
Python is a high-level, interpreted programming language known for its readability and versatility.
Created by Guido van Rossum and first released in 1991, Python's design philosophy emphasizes code readability with its notable use of significant indentation.
It supports multiple programming paradigms, including structured (particularly, procedural), object-oriented, and functional programming.
Python is dynamically typed and garbage-collected. It has a comprehensive standard library and is widely used in web development, data science, artificial intelligence, machine learning, scientific computing, automation, and more.
Popular Python frameworks and libraries include Django and Flask for web development, NumPy, Pandas, Matplotlib for data science, and TensorFlow, PyTorch, scikit-learn for AI/ML.
`.trim()
  }
  return "Ensure the blog post is well-structured, technically accurate, and provides actionable insights for the target audience. Use clear language and provide examples where appropriate. Focus on the core aspects of the requested topic."
}

export async function streamBlogPost(
  originalPromptContent: string,
  topic: string,
  modelProvider: ModelProvider,
  temperature = 0.7,
) {
  // DEBUGGING LOG: Check if the action is being called and what provider is used.
  console.log(`[ACTION LOG] streamBlogPost called with provider: ${modelProvider}`)

  let llm: LanguageModel

  if (modelProvider === "openai") {
    const key = process.env.OPENAI_API_KEY
    // DEBUGGING LOG: Check for the OpenAI API key.
    console.log(`[ACTION LOG] Checking for OPENAI_API_KEY. Found: ${key ? "Yes" : "No"}`)
    if (!key) {
      throw new Error(
        "To use the Premium (OpenAI) model, the developer must set the OPENAI_API_KEY environment variable.",
      )
    }
    llm = openai("gpt-4o")
  } else {
    const key = process.env.GROQ_API_KEY
    // DEBUGGING LOG: Check for the Groq API key and log a masked version for security.
    const maskedKey = key ? `gsk_...${key.slice(-6)}` : "Not Found"
    console.log(`[ACTION LOG] Checking for GROQ_API_KEY. Value: ${maskedKey}`)

    if (!key) {
      throw new Error("To use the Free Tier, the developer must set the GROQ_API_KEY environment variable.")
    }
    llm = groq("llama3-70b-8192")
  }

  const simulatedContext = getSimulatedRetrievedContext(topic)
  const finalPrompt = `
You are an expert tech writer. Your task is to write a blog post based on the following request.
Critically, you MUST use the "Retrieved Context" provided below to inform your writing, ensuring accuracy and depth.
Do not mention that you were provided with context, just use it naturally.

Retrieved Context:
--------------------
${simulatedContext}
--------------------

Original Blog Post Request:
--------------------
${originalPromptContent}
--------------------
`
  // DEBUGGING LOG: Log the topic being sent to the AI.
  console.log(`[ACTION LOG] Generating text for topic: "${topic}"`)

  try {
    const result = await streamText({
      model: llm,
      prompt: finalPrompt,
      temperature: temperature,
    })
    console.log("[ACTION LOG] streamText call successful. Returning stream.")
    return result.toTextStream()
  } catch (error) {
    console.error("[ACTION LOG] Error during streamText call:", error)
    throw error // Re-throw the error to be caught by the API route
  }
}
