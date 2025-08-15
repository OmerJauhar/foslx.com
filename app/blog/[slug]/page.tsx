import { getBlogBySlug, getAllBlogs, createSampleBlogPost } from "@/app/lib/blog"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Calendar, Clock } from "lucide-react"
import MarkdownContent from "@/app/components/markdown-content"
import { notFound } from "next/navigation"

export async function generateMetadata({ params }: { params: { slug: string } }) {
  createSampleBlogPost() // Ensure we have sample posts for development
  const post = getBlogBySlug(params.slug)

  if (!post) {
    return {
      title: "Blog Post Not Found",
      description: "The requested blog post could not be found.",
    }
  }

  return {
    title: `${post.title} - FOSL X Blog`,
    description: post.excerpt,
  }
}

export function generateStaticParams() {
  const posts = getAllBlogs()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  createSampleBlogPost() // Ensure we have sample posts for development
  const post = getBlogBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <header className="sticky top-0 z-50 w-full border-b border-purple-900/20 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2 font-bold text-xl">
            <Link href="/">
              <span className="text-white">FOSL</span>
              <span className="text-blue-400">X</span>
            </Link>
          </div>
          <Link
            href="/blog"
            className="flex items-center gap-2 text-sm font-medium text-zinc-300 hover:text-purple-400 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>
        </div>
      </header>

      <main className="flex-1">
        <article>
          {/* Hero section with cover image */}
          <div className="relative w-full h-[40vh] sm:h-[50vh] md:h-[60vh] min-h-[300px] max-h-[600px]">
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent z-10"></div>
            <Image
              src={post.coverImage || "/placeholder.svg"}
              alt={post.title}
              fill
              className="object-cover z-0"
              priority
              sizes="100vw"
            />
            <div className="container relative z-20 h-full flex flex-col justify-end px-4 md:px-6 pb-8 sm:pb-12 md:pb-16">
              <div className="max-w-4xl">
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs sm:text-sm text-zinc-300 mb-3 sm:mb-4">
                  <div className="flex items-center">
                    <Calendar className="mr-1 h-3 w-3 sm:h-4 sm:w-4" />
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </time>
                  </div>
                  <span>•</span>
                  <div className="flex items-center">
                    <Clock className="mr-1 h-3 w-3 sm:h-4 sm:w-4" />
                    <span>{post.readingTime}</span>
                  </div>
                </div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
                  {post.title}
                </h1>
                <div className="flex items-center">
                  <Image
                    src={post.author.image || "/placeholder.svg"}
                    alt={post.author.name}
                    width={40}
                    height={40}
                    className="rounded-full mr-3 sm:mr-4"
                  />
                  <div>
                    <p className="font-medium text-white text-sm sm:text-base">{post.author.name}</p>
                    <p className="text-xs sm:text-sm text-zinc-400">{post.author.bio}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Blog content */}
          <div className="container px-4 md:px-6 py-8 md:py-12">
            <div className="mx-auto max-w-4xl">
              <div className="rounded-lg border border-purple-500/20 bg-black/50 p-4 sm:p-6 md:p-10 backdrop-blur-sm">
                <MarkdownContent content={post.content} />
              </div>
            </div>
          </div>
        </article>
      </main>

      <footer className="w-full bg-black py-6 sm:py-8 border-t border-purple-900/20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 font-bold text-xl mb-3 md:mb-0">
              <span className="text-white">FOSL</span>
              <span className="text-blue-400">X</span>
            </div>
            <p className="text-center text-xs sm:text-sm text-zinc-400">
              &copy; {new Date().getFullYear()} FOSL X. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
