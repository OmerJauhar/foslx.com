import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "FOSL X - Innovative Technology Solutions",
  description: "FOSL X provides cutting-edge technology solutions to help your business grow and succeed.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script type="text/javascript" src="https://widget.clutch.co/static/js/widget.js" defer></script>
      </head>
      <body className={inter.className}>
        <div className="dark">{children}</div>
      </body>
    </html>
  )
}
