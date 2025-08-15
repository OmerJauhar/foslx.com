import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock } from "lucide-react"
import type { BlogPost } from "@/app/lib/blog"

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-lg border border-purple-500/20 bg-black/50 backdrop-blur-sm transition-all hover:border-purple-500/40 hover:bg-black/60">
      <div className="relative h-48 w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 z-0"></div>
        <Image
          src={post.coverImage || "/placeholder.svg"}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105 z-10"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="flex flex-1 flex-col justify-between p-4 sm:p-6">
        <div>
          <div className="flex items-center gap-2 text-xs text-zinc-400 mb-3">
            <div className="flex items-center">
              <Calendar className="mr-1 h-3 w-3" />
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </time>
            </div>
            <span>•</span>
            <div className="flex items-center">
              <Clock className="mr-1 h-3 w-3" />
              <span>{post.readingTime}</span>
            </div>
          </div>
          <h3 className="mb-2 text-lg sm:text-xl font-bold leading-tight text-white transition-colors group-hover:text-purple-400">
            {post.title}
          </h3>
          <p className="line-clamp-3 text-sm text-zinc-400">{post.excerpt}</p>
        </div>
        <div className="mt-4 sm:mt-6 flex items-center">
          <Image
            src={post.author.image || "/placeholder.svg"}
            alt={post.author.name}
            width={32}
            height={32}
            className="rounded-full mr-3"
          />
          <span className="text-sm font-medium text-zinc-300">{post.author.name}</span>
        </div>
      </div>
      <Link href={`/blog/${post.slug}`} className="absolute inset-0 z-20" aria-label={`Read ${post.title}`}>
        <span className="sr-only">Read {post.title}</span>
      </Link>
    </div>
  )
}
