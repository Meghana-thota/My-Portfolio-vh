// The master prompt is already good. We'll focus on the technical tutorial.

export const technicalTutorialBlog = `
Write a hands-on technical tutorial about [TECHNOLOGY/FRAMEWORK].

**Title Format**: "How to [ACHIEVE OUTCOME] with [TECHNOLOGY] in 2024: A Complete Guide"

**Structure**:
- Problem statement (why readers need this)
- Prerequisites (tools, knowledge required)
- Step-by-step implementation with code
- Common errors and troubleshooting
- Performance optimization tips
- Deployment considerations
- Next steps and advanced resources

**Include**:
- When a visual explanation would be beneficial, insert an image placeholder in the format \`![Alt text for the image](placeholder:A descriptive query for the image)\`.
- Complete, working code examples
- Terminal/CLI commands
- Configuration files
- Before/after performance metrics
// Removed the instruction for GitHub link placeholder

**Tone**: Friendly expert guiding a colleague
`

// Re-exporting all templates for completeness
export const masterPromptTemplate = `
You are an expert tech writer with deep knowledge in [DOMAIN]. Write a comprehensive, engaging blog post about [TOPIC] that will rank well in search engines and provide genuine value to readers.

**Topic**: [YOUR SPECIFIC TOPIC]
**Target Audience**: [e.g., Senior developers, Tech beginners, CTOs, Full-stack developers]
**Word Count**: [e.g., 1500-2000 words]
**Tone**: [Professional/Conversational/Technical/Beginner-friendly]

**Requirements**:

1. **Structure**:
   - Compelling SEO-optimized title (include numbers/year if relevant)
   - Hook introduction (pose a problem or intriguing question)
   - Clear sections with descriptive H2/H3 headings
   - Practical examples and real-world applications
   - Actionable takeaways
   - Strong conclusion with next steps

2. **Content Elements to Include**:
   - Current statistics and trends (cite sources)
   - Code examples with syntax highlighting (if applicable)
   - Comparison tables or pros/cons lists
   - Common pitfalls and how to avoid them
   - Best practices and industry standards
   - Future predictions or emerging trends

3. **SEO Requirements**:
   - Primary keyword: [KEYWORD]
   - Secondary keywords: [KEYWORD1, KEYWORD2, KEYWORD3]
   - Meta description (155 characters)
   - Include keywords naturally in headings and first paragraph

4. **Engagement Elements**:
   - **When a visual explanation would be beneficial, insert an image placeholder in the format \`![Alt text for the image](placeholder:A descriptive query for the image)\`. For example, for a post about neural networks, you might include \`![Diagram of a simple neural network with input, hidden, and output layers](placeholder:diagram of a simple neural network)\`.**
   - Pull quotes or key statistics to highlight
   - Links to 5-8 authoritative external resources

5. **Technical Depth**:
   - Explain complex concepts simply
   - Include advanced tips for experienced readers
   - Provide both theoretical understanding and practical implementation

Please format the output with proper markdown, making it ready for publication.
`

export const technologyComparisonBlog = `
Create a detailed comparison of [TECH A] vs [TECH B] vs [TECH C] for [USE CASE].

**Required Sections**:
1. Executive Summary (TL;DR comparison table)
2. Introduction to each technology
3. Detailed comparison criteria:
   - Performance benchmarks
   - Learning curve
   - Community support
   - Cost analysis
   - Scalability
   - Security features
   - Integration capabilities
4. Use case scenarios (when to use each)
5. Migration considerations
6. Future outlook
7. Recommendation matrix

**Deliverables**:
- When a visual explanation would be beneficial, insert an image placeholder in the format \`![Alt text for the image](placeholder:A descriptive query for the image)\`.
- Comparison table (markdown)
- Decision flowchart description
- Code samples for each technology
- Performance benchmark results
- Cost calculator template
`

export const templateOptions = {
  master: masterPromptTemplate,
  technicalTutorial: technicalTutorialBlog,
  technologyComparison: technologyComparisonBlog,
}
