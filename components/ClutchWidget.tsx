"use client"

import { useEffect, useState } from "react"

export default function ClutchWidget() {
  const [hasMounted, setHasMounted] = useState(false)
  useEffect(() => { setHasMounted(true) }, [])

  if (!hasMounted) return null

  return (
    <div
      className="clutch-widget bg-white p-3 sm:p-4 rounded-lg mb-3 sm:mb-4"
      data-url="https://widget.clutch.co"
      data-widget-type="2"
      data-height="45"
      data-nofollow="true"
      data-expandifr="true"
      data-scale="120"
      data-clutchcompany-id="2473122"
    >
      {/* Fallback content until Clutch widget loads */}
      <div className="flex items-center justify-center">
        <div className="text-black font-medium text-sm">
          <div className="flex items-center">
            <span className="mr-1 sm:mr-2">REVIEWED ON</span>
            <img src="/placeholder.svg?height=20&width=80" alt="Clutch" className="h-4 sm:h-5" />
          </div>
          <div className="flex items-center mt-1">
            <div className="flex text-yellow-500">
              <span>★★★★★</span>
            </div>
            <span className="ml-1 sm:ml-2 text-xs sm:text-sm">1 REVIEW</span>
          </div>
        </div>
      </div>
    </div>
  )
}
