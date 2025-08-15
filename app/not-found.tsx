import Link from "next/link"

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black text-white px-4 text-center">
      <div className="max-w-md mx-auto">
        <h1 className="text-5xl sm:text-6xl font-bold text-purple-500 mb-4">404</h1>
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-zinc-400 text-sm sm:text-base mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-md bg-purple-600 px-5 py-2 sm:px-6 sm:py-3 text-sm font-medium text-white hover:bg-purple-700 transition-colors"
        >
          Return Home
        </Link>
      </div>
    </div>
  )
}
