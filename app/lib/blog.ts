import fs from "fs"
import path from "path"
import matter from "gray-matter"

const blogDirectory = path.join(process.cwd(), "blogs")

export type BlogPost = {
  slug: string
  title: string
  date: string
  excerpt: string
  content: string
  coverImage: string
  author: {
    name: string
    image: string
    bio: string
  }
  readingTime: string
}

export function getBlogSlugs() {
  try {
    return fs.readdirSync(blogDirectory)
  } catch (error) {
    // Directory may not exist in development
    console.log("Blog directory not found, creating it...")
    try {
      fs.mkdirSync(blogDirectory, { recursive: true })
      return []
    } catch (mkdirError) {
      console.error("Error creating blog directory:", mkdirError)
      return []
    }
  }
}

export function getBlogBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(blogDirectory, `${slug}.md`)
    const fileContents = fs.readFileSync(fullPath, "utf8")
    const { data, content } = matter(fileContents)

    // Calculate reading time (rough estimate - 200 words per minute)
    const wordCount = content.split(/\s+/).length
    const readingTime = Math.ceil(wordCount / 200) + " min read"

    return {
      slug,
      title: data.title || "Untitled Post",
      date: data.date || new Date().toISOString(),
      excerpt: data.excerpt || "",
      content,
      coverImage: data.coverImage || "/placeholder.svg?height=600&width=1200",
      author: {
        name: data.author?.name || "Anonymous",
        image: data.author?.image || "/placeholder.svg?height=100&width=100",
        bio: data.author?.bio || "No bio available",
      },
      readingTime,
    }
  } catch (error) {
    console.error(`Error reading blog post: ${slug}`, error)
    return null
  }
}

export function getAllBlogs(): BlogPost[] {
  const slugs = getBlogSlugs()

  const allBlogs = slugs
    .map((slug) => {
      // Remove .md extension
      const realSlug = slug.replace(/\.md$/, "")
      return getBlogBySlug(realSlug)
    })
    .filter((post): post is BlogPost => post !== null)
    // Sort by date (newest first)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return allBlogs
}

export function getRecentBlogs(count = 3): BlogPost[] {
  return getAllBlogs().slice(0, count)
}

// Helper function to create a sample blog post if none exist
export function createSampleBlogPost() {
  if (getBlogSlugs().length === 0) {
    const sampleContent = `---
title: Getting Started with Web Development
date: ${new Date().toISOString()}
excerpt: An introduction to modern web development practices and technologies.
coverImage: /placeholder.svg?height=600&width=1200
author:
  name: Sarah Johnson
  image: /placeholder.svg?height=100&width=100
  bio: Senior Web Developer at FOSLX with 8 years of experience in frontend technologies.
---

# Getting Started with Web Development

Web development has evolved significantly over the past decade. In this post, we'll explore the foundational skills and technologies needed to become a successful web developer in today's landscape.

## The Three Core Technologies

Every web developer should start with a solid understanding of:

1. **HTML** - The structure of web content
2. **CSS** - The presentation and styling
3. **JavaScript** - The functionality and interactivity

### HTML: The Building Blocks

HTML (HyperText Markup Language) provides the basic structure of sites. It's what you use to put content on a page and give it structure, like:

\`\`\`html
<!DOCTYPE html>
<html>
  <head>
    <title>My First Webpage</title>
  </head>
  <body>
    <h1>Welcome to My Website</h1>
    <p>This is a paragraph of text.</p>
  </body>
</html>
\`\`\`

### CSS: Making It Look Good

CSS (Cascading Style Sheets) is used to style and layout web pages. With CSS, you can control:

- Colors and typography
- Layout and positioning
- Responsive design
- Animations and transitions

### JavaScript: Adding Interactivity

JavaScript allows you to create dynamic content and handle complex interactions. It's what makes modern web applications possible.

## Modern Web Development

Today's web development ecosystem includes:

- **Frameworks** like React, Vue, and Angular
- **CSS preprocessors** like Sass and Less
- **Build tools** like Webpack and Vite
- **Version control** with Git

## Getting Started

If you're new to web development, here are some steps to begin your journey:

1. Learn HTML, CSS, and basic JavaScript
2. Build simple static websites to practice
3. Explore modern tools and frameworks
4. Create a portfolio of projects
5. Never stop learning and experimenting

Web development is a field that rewards curiosity and continuous learning. The technologies may change, but the fundamental skills of problem-solving and user-focused design will always be valuable.
`

    const samplePath = path.join(blogDirectory, "getting-started-with-web-development.md")
    fs.writeFileSync(samplePath, sampleContent)

    // Create another sample post
    const secondSampleContent = `---
title: The Future of AI in Web Design
date: ${new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString()}
excerpt: Exploring how artificial intelligence is transforming the web design industry.
coverImage: /placeholder.svg?height=600&width=1200
author:
  name: Ammar Raza
  image: /placeholder.svg?height=100&width=100
  bio: Lead Software Developer at FOSLX specializing in AI-driven applications.
---

# The Future of AI in Web Design

Artificial intelligence is rapidly changing how we approach web design and development. From automated layouts to personalized user experiences, AI tools are becoming essential for modern web designers.

## How AI is Transforming Web Design

### Automated Design Systems

AI can now generate entire layouts based on content requirements and brand guidelines. This allows designers to:

- Rapidly prototype multiple design options
- Test variations with target audiences
- Focus more on creative direction rather than implementation details

### Personalized User Experiences

With AI-driven analytics, websites can now adapt to individual users in real-time:

- Dynamic content based on user behavior
- Personalized navigation paths
- Adaptive visual elements

### Accessibility Improvements

AI tools can automatically detect and fix accessibility issues:

- Generating appropriate alt text for images
- Suggesting color contrast improvements
- Identifying navigation problems

## Popular AI Tools for Web Designers

1. **Adobe Sensei** - AI features integrated into Adobe's Creative Cloud
2. **Wix ADI** - Artificial Design Intelligence for website creation
3. **Grid.io** - AI-powered website builder
4. **Runway ML** - Machine learning tools for creators

## The Designer's Evolving Role

As AI handles more of the technical implementation, the role of web designers is evolving to focus more on:

- Strategic thinking
- Brand storytelling
- Ethical considerations of AI implementation
- Human-centered design principles

## Preparing for an AI-Enhanced Future

To stay relevant in this changing landscape, designers should:

1. Understand the capabilities and limitations of AI tools
2. Develop skills in prompt engineering and AI direction
3. Focus on uniquely human creative abilities
4. Explore the ethical implications of automated design

The future of web design will be a collaboration between human creativity and AI capabilities, creating experiences that were previously impossible or impractical to implement.
`

    const secondSamplePath = path.join(blogDirectory, "the-future-of-ai-in-web-design.md")
    fs.writeFileSync(secondSamplePath, secondSampleContent)
  }
}
