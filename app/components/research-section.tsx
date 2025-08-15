"use client"

import Link from "next/link"
import { Cpu, Database, LineChart, ArrowRight } from "lucide-react"

export default function ResearchSection() {
  return (
    <section id="research" className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 to-blue-900/10 opacity-30"></div>
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-4 mb-8 md:mb-12 text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter">
              Research & <span className="text-purple-500">Innovation</span>
            </h2>
            <p className="text-zinc-400 text-base md:text-lg max-w-3xl mx-auto md:mx-0">
              We conduct cutting-edge research in Computer Science and Machine Learning to push the boundaries of what's
              possible.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12 md:mb-16">
            {/* Machine Learning Card */}
            <div className="group relative overflow-hidden rounded-lg border border-purple-500/20 bg-black/30 backdrop-blur-sm p-5 sm:p-6 transition-all hover:border-purple-500/40 hover:bg-black/40">
              <div className="mb-3 sm:mb-4">
                <div className="inline-flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-lg bg-[#0f172a] text-[#4ade80]">
                  <Cpu className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">Machine Learning</h3>
              <p className="text-zinc-400 text-sm sm:text-base mb-3 sm:mb-4">
                Developing advanced algorithms and models to solve complex problems.
              </p>
              <Link
                href="#"
                className="inline-flex items-center text-[#4ade80] hover:text-[#86efac] transition-colors text-sm"
              >
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            {/* Big Data Analytics Card */}
            <div className="group relative overflow-hidden rounded-lg border border-purple-500/20 bg-black/30 backdrop-blur-sm p-5 sm:p-6 transition-all hover:border-purple-500/40 hover:bg-black/40">
              <div className="mb-3 sm:mb-4">
                <div className="inline-flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-lg bg-[#0f172a] text-[#4ade80]">
                  <Database className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">Big Data Analytics</h3>
              <p className="text-zinc-400 text-sm sm:text-base mb-3 sm:mb-4">
                Transforming large datasets into actionable insights and knowledge.
              </p>
              <Link
                href="#"
                className="inline-flex items-center text-[#4ade80] hover:text-[#86efac] transition-colors text-sm"
              >
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            {/* Predictive Modeling Card */}
            <div className="group relative overflow-hidden rounded-lg border border-purple-500/20 bg-black/30 backdrop-blur-sm p-5 sm:p-6 transition-all hover:border-purple-500/40 hover:bg-black/40">
              <div className="mb-3 sm:mb-4">
                <div className="inline-flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-lg bg-[#0f172a] text-[#4ade80]">
                  <LineChart className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">Predictive Modeling</h3>
              <p className="text-zinc-400 text-sm sm:text-base mb-3 sm:mb-4">
                Building sophisticated models to forecast trends and behaviors.
              </p>
              <Link
                href="#"
                className="inline-flex items-center text-[#4ade80] hover:text-[#86efac] transition-colors text-sm"
              >
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="space-y-4 md:space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold text-center md:text-left">Ongoing Research</h3>

            <div className="border-l-4 border-[#4ade80] pl-4 py-2">
              <h4 className="text-lg sm:text-xl font-bold mb-1">
                Physics Informed Neural Networks for Structural Weight Prediction
              </h4>
              <p className="text-zinc-400 text-sm sm:text-base mb-1 sm:mb-2">Mr. Sudais Khan, Mr. M Omer Jauhar</p>
              <p className="text-xs sm:text-sm text-zinc-500">June 2025</p>
            </div>

            <div className="border-l-4 border-[#4ade80] pl-4 py-2">
              <h4 className="text-lg sm:text-xl font-bold mb-1">Quantum Computing Applications in Cryptography</h4>
              <p className="text-zinc-400 text-sm sm:text-base mb-1 sm:mb-2">Dr. Aisha Iftikhar, Mr. Ammar Raza</p>
              <p className="text-xs sm:text-sm text-zinc-500">April 2025</p>
            </div>

            <div className="border-l-4 border-[#4ade80] pl-4 py-2">
              <h4 className="text-lg sm:text-xl font-bold mb-1">Self-Supervised Learning for Computer Vision</h4>
              <p className="text-zinc-400 text-sm sm:text-base mb-1 sm:mb-2">Mr. Azaz Khan, Mr. Sudais Khan</p>
              <p className="text-xs sm:text-sm text-zinc-500">March 2025</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
