"use server"

import { streamText } from "ai"
import { groq } from "@ai-sdk/groq"
import { openai } from "@ai-sdk/openai"
import type { LanguageModel } from "ai"

// We'll simplify the provider to "free" (Groq) and "openai"
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
  let llm: LanguageModel

  if (modelProvider === "openai") {
    // Premium model: requires the developer to have set an OpenAI key
    if (!process.env.OPENAI_API_KEY) {
      throw new Error(
        "To use the Premium (OpenAI) model, the developer must set the OPENAI_API_KEY environment variable.",
      )
    }
    llm = openai("gpt-4o")
  } else {
    // Free Tier model (default): uses Groq, requires the developer to have set a Groq key
    if (!process.env.GROQ_API_KEY) {
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
  const result = await streamText({
    model: llm,
    prompt: finalPrompt,
    temperature: temperature,
  })

  return result.toTextStream()
}
