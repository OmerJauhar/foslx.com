import { getAllBlogs, createSampleBlogPost } from "@/app/lib/blog"
import { BlogCard } from "@/app/components/blog-card"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata = {
  title: "FOSL X Blog - Tech Insights & Updates",
  description:
    "Stay updated with the latest in tech, web development, and digital transformation through our FOSL X blog.",
}

export default function BlogPage() {
  // Create sample blog posts if none exist
  createSampleBlogPost()

  const blogs = getAllBlogs()

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
            href="/"
            className="flex items-center gap-2 text-sm font-medium text-zinc-300 hover:text-purple-400 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </div>
      </header>

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 to-purple-900/10 opacity-30"></div>
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>

            {/* Digital Art Circuit Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="circuit-pattern"></div>
            </div>
          </div>

          <div className="container px-4 md:px-6 relative z-10">
            <div className="mb-12 md:mb-16 max-w-3xl mx-auto text-center md:text-left">
              <div className="inline-block rounded-lg bg-purple-500/10 px-3 py-1 text-sm text-purple-500 border border-purple-500/20 mb-4">
                Our Blog
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4 sm:mb-6">
                Insights & Expertise
              </h1>
              <p className="text-base sm:text-lg text-zinc-400">
                Explore our latest thoughts on technology, web development, and digital transformation.
              </p>
            </div>

            {blogs.length > 0 ? (
              <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {blogs.map((blog) => (
                  <BlogCard key={blog.slug} post={blog} />
                ))}
              </div>
            ) : (
              <div className="rounded-lg border border-purple-500/20 bg-black/50 p-6 sm:p-8 text-center max-w-3xl mx-auto">
                <h3 className="text-xl font-bold text-white mb-2">No Blog Posts Yet</h3>
                <p className="text-zinc-400 text-sm sm:text-base">
                  Check back soon for our upcoming articles, or add markdown files to the 'blogs' directory.
                </p>
              </div>
            )}
          </div>
        </section>
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
