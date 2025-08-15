"use client"

import { useEffect, useRef } from "react"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import gsap from "gsap"

export default function PartnersSection() {
  const logosContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Animate logos from left to right
    if (logosContainerRef.current) {
      const logos = logosContainerRef.current.querySelectorAll(".partner-logo")

      gsap.fromTo(
        logos,
        {
          x: -100,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          stagger: 0.2,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: logosContainerRef.current,
            start: "top 80%",
          },
        },
      )

      // Create infinite scrolling animation
      const logoWidth = 200 // approximate width of each logo + margin
      const totalWidth = logoWidth * logos.length

      // Clone logos for seamless scrolling
      const loopAnimation = gsap.to(logos, {
        x: `+=${totalWidth}`,
        ease: "none",
        duration: 20,
        repeat: -1,
        modifiers: {
          x: (x, target) => {
            // When a logo goes off screen to the right, move it back to the left
            const newX = Number.parseFloat(x) % totalWidth
            return `${newX}px`
          },
        },
      })

      // Pause animation on hover
      logosContainerRef.current.addEventListener("mouseenter", () => loopAnimation.pause())
      logosContainerRef.current.addEventListener("mouseleave", () => loopAnimation.play())

      return () => {
        loopAnimation.kill()
      }
    }
  }, [])

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 to-blue-900/10 opacity-30"></div>
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-4 md:space-y-6 text-center md:text-left">
            <div className="inline-block rounded-lg bg-purple-500/10 px-3 py-1 text-sm text-purple-500 border border-purple-500/20 mb-4">
              Our Impact
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Translating technology into a <span className="text-purple-500">positive impact</span>
            </h2>
            <p className="max-w-[900px] text-zinc-400 text-sm sm:text-base md:text-lg/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto md:mx-0">
              Our approach allows us to deliver exceptional experiences that drive growth and success for all
              stakeholders. Let's rise to new heights with the power of digital transformation.
            </p>
            <Button
              asChild
              variant="ghost"
              className="group border border-purple-500/20 hover:bg-purple-950/30 text-white px-5 py-2 sm:px-6 sm:py-3"
            >
              <Link href="#contact">
                Learn More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>

          {/* Right side - Stats */}
          <div className="grid grid-cols-2 gap-4 sm:gap-8">
            <div className="space-y-2 text-center p-3 sm:p-4 rounded-lg border border-purple-500/20 bg-black/30 backdrop-blur-sm">
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-purple-500">5+</div>
              <div className="text-xs sm:text-sm md:text-base text-zinc-400">Years of continual excellence</div>
            </div>

            <div className="space-y-2 text-center p-3 sm:p-4 rounded-lg border border-blue-500/20 bg-black/30 backdrop-blur-sm">
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-400">100+</div>
              <div className="text-xs sm:text-sm md:text-base text-zinc-400">Change makers driving revolution</div>
            </div>

            <div className="space-y-2 text-center p-3 sm:p-4 rounded-lg border border-blue-500/20 bg-black/30 backdrop-blur-sm">
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-400">10+</div>
              <div className="text-xs sm:text-sm md:text-base text-zinc-400">Countries with our presence</div>
            </div>

            <div className="space-y-2 text-center p-3 sm:p-4 rounded-lg border border-purple-500/20 bg-black/30 backdrop-blur-sm">
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-purple-500">50+</div>
              <div className="text-xs sm:text-sm md:text-base text-zinc-400">Active clients across the globe</div>
            </div>
          </div>
        </div>

        {/* Partner ecosystem statement */}
        <div className="mt-16 md:mt-20 text-center">
          <h3 className="text-xl md:text-2xl font-bold max-w-4xl mx-auto">
            We rethink business growth for you through our collective experience with strategic partner ecosystem.
          </h3>
        </div>

        {/* Partner logos */}
        <div ref={logosContainerRef} className="mt-8 md:mt-12 flex items-center justify-start overflow-hidden">
          <div className="flex space-x-8 sm:space-x-12 partner-logo-container">
            <div className="partner-logo flex items-center justify-center h-14 sm:h-16 w-32 sm:w-40 bg-black/20 backdrop-blur-sm rounded-lg px-3 py-1 sm:px-4 sm:py-2 border border-purple-500/10">
              <img
                src="/placeholder.svg?height=60&width=120"
                alt="Microsoft"
                className="max-h-8 sm:max-h-10 object-contain"
              />
            </div>
            <div className="partner-logo flex items-center justify-center h-14 sm:h-16 w-32 sm:w-40 bg-black/20 backdrop-blur-sm rounded-lg px-3 py-1 sm:px-4 sm:py-2 border border-purple-500/10">
              <img
                src="/placeholder.svg?height=60&width=120"
                alt="Google"
                className="max-h-8 sm:max-h-10 object-contain"
              />
            </div>
            <div className="partner-logo flex items-center justify-center h-14 sm:h-16 w-32 sm:w-40 bg-black/20 backdrop-blur-sm rounded-lg px-3 py-1 sm:px-4 sm:py-2 border border-purple-500/10">
              <img
                src="/placeholder.svg?height=60&width=120"
                alt="Amazon"
                className="max-h-8 sm:max-h-10 object-contain"
              />
            </div>
            <div className="partner-logo flex items-center justify-center h-14 sm:h-16 w-32 sm:w-40 bg-black/20 backdrop-blur-sm rounded-lg px-3 py-1 sm:px-4 sm:py-2 border border-purple-500/10">
              <img
                src="/placeholder.svg?height=60&width=120"
                alt="Atlassian"
                className="max-h-8 sm:max-h-10 object-contain"
              />
            </div>
            <div className="partner-logo flex items-center justify-center h-14 sm:h-16 w-32 sm:w-40 bg-black/20 backdrop-blur-sm rounded-lg px-3 py-1 sm:px-4 sm:py-2 border border-purple-500/10">
              <img
                src="/placeholder.svg?height=60&width=120"
                alt="Salesforce"
                className="max-h-8 sm:max-h-10 object-contain"
              />
            </div>
            <div className="partner-logo flex items-center justify-center h-14 sm:h-16 w-32 sm:w-40 bg-black/20 backdrop-blur-sm rounded-lg px-3 py-1 sm:px-4 sm:py-2 border border-purple-500/10">
              <img
                src="/placeholder.svg?height=60&width=120"
                alt="Adobe"
                className="max-h-8 sm:max-h-10 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
