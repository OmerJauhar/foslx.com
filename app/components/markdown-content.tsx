"use client"
import ReactMarkdown from "react-markdown"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism"

interface MarkdownContentProps {
  content: string
}

export default function MarkdownContent({ content }: MarkdownContentProps) {
  return (
    <ReactMarkdown
      className="prose prose-sm sm:prose-base lg:prose-lg prose-invert max-w-none"
      components={{
        h1: ({ node, ...props }) => (
          <h1 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-white" {...props} />
        ),
        h2: ({ node, ...props }) => (
          <h2 className="text-2xl sm:text-3xl font-bold mt-8 sm:mt-12 mb-4 sm:mb-6 text-white" {...props} />
        ),
        h3: ({ node, ...props }) => (
          <h3 className="text-xl sm:text-2xl font-bold mt-6 sm:mt-10 mb-3 sm:mb-4 text-white" {...props} />
        ),
        p: ({ node, ...props }) => <p className="mb-4 sm:mb-6 leading-relaxed text-zinc-200" {...props} />,
        ul: ({ node, ...props }) => <ul className="mb-4 sm:mb-6 list-disc pl-6 sm:pl-8" {...props} />,
        ol: ({ node, ...props }) => <ol className="mb-4 sm:mb-6 list-decimal pl-6 sm:pl-8" {...props} />,
        li: ({ node, ...props }) => <li className="mb-1 sm:mb-2 text-zinc-200" {...props} />,
        a: ({ node, ...props }) => <a className="text-purple-400 hover:text-purple-300 underline" {...props} />,
        blockquote: ({ node, ...props }) => (
          <blockquote className="border-l-4 border-purple-500 pl-4 italic my-4 sm:my-6 text-zinc-300" {...props} />
        ),
        code({ inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || "")
          return !inline && match ? (
            <div className="mb-4 sm:mb-6 rounded-md overflow-hidden">
              <SyntaxHighlighter style={atomDark} language={match[1]} PreTag="div" {...props}>
                {String(children).replace(/\n$/, "")}
              </SyntaxHighlighter>
            </div>
          ) : (
            <code className="bg-black/50 text-purple-300 px-1 py-0.5 rounded text-xs sm:text-sm" {...props}>
              {children}
            </code>
          )
        },
      }}
    >
      {content}
    </ReactMarkdown>
  )
}
