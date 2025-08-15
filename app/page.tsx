import Link from "next/link"
import ClutchWidget from "@/components/ClutchWidget"
import { ArrowRight, Code, Database, Globe, LifeBuoy, Shield, Mail, Phone, Menu, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { getRecentBlogs, createSampleBlogPost } from "@/app/lib/blog"
import { BlogCard } from "@/app/components/blog-card"
import SpaceBackground from "@/app/components/space-scene"
import TerminalInterface from "@/app/components/terminal-interface"
import PartnersSection from "@/app/components/partners-section"
import ResearchSection from "@/app/components/research-section"


export default function Home() {
  // Create sample blog posts for development
  createSampleBlogPost()

  // Get recent blog posts
  const recentBlogs = getRecentBlogs(3)

  return (
  <div className="flex min-h-screen flex-col bg-black text-white text-base sm:text-base md:text-lg">
      {/* 3D Space Scene Background */}
      <SpaceBackground />

      <header className="sticky top-0 z-50 w-full bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60">
        <div className="container max-w-screen-xl flex h-16 items-center justify-between px-4 md:px-8">
          <div className="flex items-center gap-2 font-bold text-xl md:text-2xl lg:text-3xl">
            <span className="text-white">FOSL</span>
            <span className="text-blue-400">X</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-6 text-base lg:text-lg">
            <Link href="#" className="text-sm font-medium transition-colors hover:text-purple-400">
              Home
            </Link>
            <Link href="#services" className="text-sm font-medium transition-colors hover:text-purple-400">
              Services
            </Link>
            <Link href="#expertise" className="text-sm font-medium transition-colors hover:text-purple-400">
              Expertise
            </Link>
            <Link href="#research" className="text-sm font-medium transition-colors hover:text-purple-400">
              Research
            </Link>
            <Link href="#work" className="text-sm font-medium transition-colors hover:text-purple-400">
              Work
            </Link>
            <Link href="#team" className="text-sm font-medium transition-colors hover:text-purple-400">
              Team
            </Link>
            <Link href="#blog" className="text-sm font-medium transition-colors hover:text-purple-400">
              Blog
            </Link>
            <Link href="#contact" className="text-sm font-medium transition-colors hover:text-purple-400">
              Contact
            </Link>
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-4 text-base lg:text-lg">
            <Button asChild variant="ghost" className="border border-purple-500/20 hover:bg-purple-950/30 text-white">
              <Link href="#contact">Get in touch</Link>
            </Button>
            <Button asChild className="bg-purple-600 hover:bg-purple-700 text-white">
              <Link href="#services">Our Services</Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-black/95 border-purple-900/20 text-white w-[250px] sm:w-[300px]">
              <nav className="flex flex-col gap-4 mt-10">
                <Link href="#" className="text-lg font-medium transition-colors hover:text-purple-400">
                  Home
                </Link>
                <Link href="#services" className="text-lg font-medium transition-colors hover:text-purple-400">
                  Services
                </Link>
                <Link href="#expertise" className="text-lg font-medium transition-colors hover:text-purple-400">
                  Expertise
                </Link>
                <Link href="#research" className="text-lg font-medium transition-colors hover:text-purple-400">
                  Research
                </Link>
                <Link href="#work" className="text-lg font-medium transition-colors hover:text-purple-400">
                  Work
                </Link>
                <Link href="#team" className="text-lg font-medium transition-colors hover:text-purple-400">
                  Team
                </Link>
                <Link href="#blog" className="text-lg font-medium transition-colors hover:text-purple-400">
                  Blog
                </Link>
                <Link href="#contact" className="text-lg font-medium transition-colors hover:text-purple-400">
                  Contact
                </Link>
                <div className="flex flex-col gap-4 mt-4">
                  <Button
                    asChild
                    variant="ghost"
                    className="w-full border border-purple-500/20 hover:bg-purple-950/30 text-white"
                  >
                    <Link href="#contact">Get in touch</Link>
                  </Button>
                  <Button asChild className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                    <Link href="#services">Our Services</Link>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <main className="flex-1 relative z-10">
        <section className="w-full py-8 sm:py-12 md:py-20 lg:py-28 xl:py-36 2xl:py-48 relative overflow-hidden">
          <div className="container max-w-screen-xl px-4 md:px-8 relative z-10">
            <div className="mx-auto">
              <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 xl:grid-cols-2 items-center">
                <div className="flex flex-col justify-center space-y-4 text-center lg:text-left">
                  <div className="space-y-2">
                    <div className="text-purple-500 font-mono text-base sm:text-lg">{"{HELLO, WORLD!}"}</div>
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-6xl/none">
                      <span className="text-white">FOSL</span>
                      <span className="text-blue-400">X</span>
                      <span className="block text-blue-400 font-light">Engineers</span>
                    </h1>
                    <p className="max-w-2xl text-zinc-400 text-base md:text-lg mx-auto lg:mx-0">
                      are dedicated to helping your business thrive online. We focus on creating tailored solutions that
                      drive growth, streamline operations, and enhance your digital presence.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center lg:justify-start">
                    <Button
                      asChild
                      size="lg"
                      className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 sm:px-8 sm:py-4 text-base md:text-lg"
                    >
                      <Link href="#contact">
                        Let's discuss <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
                <div className="flex items-center justify-center mt-8 lg:mt-0">
                  <TerminalInterface />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 to-purple-900/10 opacity-30"></div>
          </div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="xl-content-container mx-auto">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-purple-500/10 px-3 py-1 text-sm text-purple-500 border border-purple-500/20">
                    Our Services
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter md:text-4xl/tight">
                    Comprehensive Solutions for Your Business Needs
                  </h2>
                  <p className="max-w-[900px] text-zinc-400 text-sm sm:text-base md:text-lg/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    We offer a wide range of services to help your business thrive in the digital age.
                  </p>
                </div>
              </div>
              <div className="mx-auto grid max-w-5xl items-center gap-6 py-8 sm:py-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                <div className="flex flex-col justify-center space-y-4 rounded-lg border border-purple-500/20 bg-black/50 p-4 sm:p-6 backdrop-blur-sm transition-all hover:border-purple-500/40 hover:bg-black/60">
                  <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-lg bg-purple-500/10 text-purple-500 border border-purple-500/20">
                    <Globe className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg sm:text-xl font-bold">Web Development</h3>
                    <p className="text-zinc-400 text-sm sm:text-base">
                      Custom websites and web applications designed to meet your specific business requirements.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col justify-center space-y-4 rounded-lg border border-purple-500/20 bg-black/50 p-4 sm:p-6 backdrop-blur-sm transition-all hover:border-purple-500/40 hover:bg-black/60">
                  <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-lg bg-purple-500/10 text-purple-500 border border-purple-500/20">
                    <Shield className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg sm:text-xl font-bold">Cybersecurity</h3>
                    <p className="text-zinc-400 text-sm sm:text-base">
                      Protect your business with our comprehensive security solutions and services.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col justify-center space-y-4 rounded-lg border border-purple-500/20 bg-black/50 p-4 sm:p-6 backdrop-blur-sm transition-all hover:border-purple-500/40 hover:bg-black/60 sm:col-span-2 lg:col-span-1">
                  <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-lg bg-purple-500/10 text-purple-500 border border-purple-500/20">
                    <Database className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg sm:text-xl font-bold">Data Solutions</h3>
                    <p className="text-zinc-400 text-sm sm:text-base">
                      Harness the power of your data with our advanced analytics and database solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <PartnersSection />

        {/* Research & Innovation Section */}
        <ResearchSection />

        <section id="expertise" className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 to-blue-900/10 opacity-30"></div>
          </div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="xl-content-container mx-auto">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-blue-500/10 px-3 py-1 text-sm text-blue-400 border border-blue-500/20">
                    Our Expertise
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter md:text-4xl/tight">
                    Cutting-Edge Technologies
                  </h2>
                  <p className="max-w-[900px] text-zinc-400 text-sm sm:text-base md:text-lg/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    We leverage the latest technologies to deliver exceptional solutions.
                  </p>
                </div>
              </div>
              <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-8 sm:py-12 sm:grid-cols-2 lg:gap-8">
                <div className="flex flex-col space-y-4 rounded-lg border border-blue-500/20 bg-black/50 p-4 sm:p-6 backdrop-blur-sm transition-all hover:border-blue-500/40 hover:bg-black/60">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                      <Code className="h-5 w-5 sm:h-6 sm:w-6" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-lg sm:text-xl font-bold">Frontend Development</h3>
                      <p className="text-zinc-400 text-sm sm:text-base">
                        React, Vue, Angular, and other modern frameworks to create responsive and interactive user
                        interfaces.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col space-y-4 rounded-lg border border-blue-500/20 bg-black/50 p-4 sm:p-6 backdrop-blur-sm transition-all hover:border-blue-500/40 hover:bg-black/60">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                      <Database className="h-5 w-5 sm:h-6 sm:w-6" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-lg sm:text-xl font-bold">Backend Development</h3>
                      <p className="text-zinc-400 text-sm sm:text-base">
                        Node.js, Python, Go, and other server-side technologies to build robust and scalable
                        applications.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col space-y-4 rounded-lg border border-blue-500/20 bg-black/50 p-4 sm:p-6 backdrop-blur-sm transition-all hover:border-blue-500/40 hover:bg-black/60">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                      <Shield className="h-5 w-5 sm:h-6 sm:w-6" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-lg sm:text-xl font-bold">Security Solutions</h3>
                      <p className="text-zinc-400 text-sm sm:text-base">
                        Advanced security protocols and technologies to protect your data and systems from threats.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col space-y-4 rounded-lg border border-blue-500/20 bg-black/50 p-4 sm:p-6 backdrop-blur-sm transition-all hover:border-blue-500/40 hover:bg-black/60">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                      <LifeBuoy className="h-5 w-5 sm:h-6 sm:w-6" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-lg sm:text-xl font-bold">Support & Maintenance</h3>
                      <p className="text-zinc-400 text-sm sm:text-base">
                        Ongoing support and maintenance services to ensure your systems run smoothly and efficiently.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="work" className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 to-purple-900/10 opacity-30"></div>
          </div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="xl-content-container mx-auto">
              <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8 md:mb-12">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-purple-500/10 px-3 py-1 text-sm text-purple-500 border border-purple-500/20">
                    Our Work
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter md:text-4xl/tight">
                    Featured Projects
                  </h2>
                  <p className="max-w-[900px] text-zinc-400 text-sm sm:text-base md:text-lg/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Explore some of our recent projects and see how we've helped our clients succeed.
                  </p>
                </div>
              </div>
              <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <div className="group relative overflow-hidden rounded-lg border border-purple-500/20 bg-black/50 backdrop-blur-sm transition-all hover:border-purple-500/40 hover:bg-black/60">
                  <div className="aspect-video w-full overflow-hidden">
                    <div className="h-full w-full bg-gradient-to-br from-purple-500/20 to-blue-500/20"></div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold">E-Commerce Platform</h3>
                    <p className="text-sm text-zinc-400">A custom e-commerce solution for a retail client.</p>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity group-hover:opacity-100">
                    <Button
                      variant="outline"
                      className="border-purple-500 text-purple-500 hover:bg-purple-500/20 bg-transparent px-5 py-2 sm:px-6 sm:py-3 text-sm"
                    >
                      View Project
                    </Button>
                  </div>
                </div>
                <div className="group relative overflow-hidden rounded-lg border border-purple-500/20 bg-black/50 backdrop-blur-sm transition-all hover:border-purple-500/40 hover:bg-black/60">
                  <div className="aspect-video w-full overflow-hidden">
                    <div className="h-full w-full bg-gradient-to-br from-blue-500/20 to-purple-500/20"></div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold">Financial Dashboard</h3>
                    <p className="text-sm text-zinc-400">An analytics dashboard for a financial services company.</p>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity group-hover:opacity-100">
                    <Button
                      variant="outline"
                      className="border-purple-500 text-purple-500 hover:bg-purple-500/20 bg-transparent px-5 py-2 sm:px-6 sm:py-3 text-sm"
                    >
                      View Project
                    </Button>
                  </div>
                </div>
                <div className="group relative overflow-hidden rounded-lg border border-purple-500/20 bg-black/50 backdrop-blur-sm transition-all hover:border-purple-500/40 hover:bg-black/60 sm:col-span-2 lg:col-span-1">
                  <div className="aspect-video w-full overflow-hidden">
                    <div className="h-full w-full bg-gradient-to-br from-purple-500/20 to-blue-500/20"></div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold">Healthcare App</h3>
                    <p className="text-sm text-zinc-400">A mobile application for a healthcare provider.</p>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity group-hover:opacity-100">
                    <Button
                      variant="outline"
                      className="border-purple-500 text-purple-500 hover:bg-purple-500/20 bg-transparent px-5 py-2 sm:px-6 sm:py-3 text-sm"
                    >
                      View Project
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="team" className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 to-purple-900/10 opacity-30"></div>
          </div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="xl-content-container mx-auto">
              <div className="flex flex-col space-y-4 max-w-3xl mx-auto mb-8 md:mb-12 text-center">
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tighter md:text-5xl/tight text-white">
                  Meet Our Team
                </h2>
                <p className="text-zinc-400 text-sm sm:text-base md:text-lg">
                  Our talented professionals bring diverse expertise and passion to every project.
                </p>
              </div>

              <div className="mx-auto max-w-5xl px-4 sm:px-8 lg:px-16">
                <div className="flex flex-nowrap gap-4 overflow-x-auto pb-6 snap-x">

                  {/* Team Member 1: Omer Jauhar (Founder & CEO) */}
                  <div className="team-card group relative aspect-square w-[70%] min-w-[180px] max-w-[250px] flex-none overflow-hidden rounded-lg bg-black/50 snap-center">
                    <img
                      src="/placeholder.svg?height=400&width=400"
                      alt="Omer Jauhar"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-100">
                      <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                        <h3 className="text-base sm:text-lg font-bold text-white">Omer Jauhar</h3>
                        <p className="text-xs sm:text-sm text-green-400">Founder & CEO</p>
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 flex justify-center mb-12 sm:mb-16 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <a
                        href="#"
                        className="rounded-full bg-white/10 p-2 backdrop-blur-sm transition-transform duration-300 hover:scale-110"
                      >
                        <Linkedin className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                      </a>
                    </div>
                  </div>

                  {/* Team Member 2: Sudais Khan (Backend Engineer) */}
                  <div className="team-card group relative aspect-square w-[70%] min-w-[180px] max-w-[250px] flex-none overflow-hidden rounded-lg bg-black/50 snap-center">
                    <img
                      src="/placeholder.svg?height=400&width=400"
                      alt="Sudais Khan"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-100">
                      <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                        <h3 className="text-base sm:text-lg font-bold text-white">Sudais Khan</h3>
                        <p className="text-xs sm:text-sm text-green-400">Backend Engineer</p>
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 flex justify-center mb-12 sm:mb-16 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <a
                        href="#"
                        className="rounded-full bg-white/10 p-2 backdrop-blur-sm transition-transform duration-300 hover:scale-110"
                      >
                        <Linkedin className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                      </a>
                    </div>
                  </div>

                  {/* Team Member 3 */}
                  <div className="team-card group relative aspect-square w-[70%] min-w-[180px] max-w-[250px] flex-none overflow-hidden rounded-lg bg-black/50 snap-center">
                    <img
                      src="/placeholder.svg?height=400&width=400"
                      alt="Ammar Raza"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-100">
                      <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                        <h3 className="text-base sm:text-lg font-bold text-white">Ammar Raza</h3>
                        <p className="text-xs sm:text-sm text-green-400">Lead Software Dev</p>
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 flex justify-center mb-12 sm:mb-16 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <a
                        href="#"
                        className="rounded-full bg-white/10 p-2 backdrop-blur-sm transition-transform duration-300 hover:scale-110"
                      >
                        <Linkedin className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                      </a>
                    </div>
                  </div>

                  {/* Team Member 4 */}
                  <div className="team-card group relative aspect-square w-[70%] min-w-[180px] max-w-[250px] flex-none overflow-hidden rounded-lg bg-black/50 snap-center">
                    <img
                      src="/placeholder.svg?height=400&width=400"
                      alt="Azaz Khan"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-100">
                      <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                        <h3 className="text-base sm:text-lg font-bold text-white">Azaz Khan</h3>
                        <p className="text-xs sm:text-sm text-green-400">UX/UI Designer</p>
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 flex justify-center mb-12 sm:mb-16 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <a
                        href="#"
                        className="rounded-full bg-white/10 p-2 backdrop-blur-sm transition-transform duration-300 hover:scale-110"
                      >
                        <Linkedin className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                      </a>
                    </div>
                  </div>

                </div>
              </div>

              <div className="flex justify-center mt-8 md:mt-12">
                <a
                  href="#"
                  className="group inline-flex items-center justify-center rounded-full border border-white/20 px-5 py-2 sm:px-6 sm:py-3 text-sm font-medium text-white transition-colors hover:bg-white/10"
                >
                  Join Our Team <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="blog" className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 to-purple-900/10 opacity-30"></div>
          </div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="xl-content-container mx-auto">
              <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8 md:mb-12">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-purple-500/10 px-3 py-1 text-sm text-purple-500 border border-purple-500/20">
                    Our Blog
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter md:text-4xl/tight">
                    Latest Insights & Articles
                  </h2>
                  <p className="max-w-[900px] text-zinc-400 text-sm sm:text-base md:text-lg/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Stay updated with our latest thoughts on technology and digital transformation.
                  </p>
                </div>
              </div>

              {recentBlogs.length > 0 ? (
                <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {recentBlogs.map((blog) => (
                    <BlogCard key={blog.slug} post={blog} />
                  ))}
                </div>
              ) : (
                <div className="rounded-lg border border-purple-500/20 bg-black/50 p-6 sm:p-8 text-center max-w-3xl mx-auto">
                  <h3 className="text-xl font-bold text-white mb-2">Coming Soon</h3>
                  <p className="text-zinc-400 text-sm sm:text-base">
                    Our blog is currently under development. Check back soon for insightful articles and updates.
                  </p>
                </div>
              )}

              <div className="flex justify-center mt-8 md:mt-12">
                <Link
                  href="/blog"
                  className="group inline-flex items-center justify-center rounded-full border border-white/20 px-5 py-2 sm:px-6 sm:py-3 text-sm font-medium text-white transition-colors hover:bg-white/10"
                >
                  View All Articles{" "}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 to-blue-900/10 opacity-30"></div>
          </div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="xl-content-container mx-auto">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-blue-500/10 px-3 py-1 text-sm text-blue-400 border border-blue-500/20">
                    Contact Us
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter md:text-4xl/tight">Get in Touch</h2>
                  <p className="max-w-[900px] text-zinc-400 text-sm sm:text-base md:text-lg/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    We'd love to hear from you. Contact us for more information about our services.
                  </p>
                </div>
              </div>
              <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-8 sm:py-12 lg:grid-cols-2 lg:gap-8">
                <div className="space-y-4 rounded-lg border border-blue-500/20 bg-black/50 p-4 sm:p-6 backdrop-blur-sm">
                  <h3 className="text-lg sm:text-xl font-bold">Send us a message</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label
                        htmlFor="first-name"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        First name
                      </label>
                      <input
                        id="first-name"
                        className="flex h-10 w-full rounded-md border border-purple-500/20 bg-black/50 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="John"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="last-name"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Last name
                      </label>
                      <input
                        id="last-name"
                        className="flex h-10 w-full rounded-md border border-purple-500/20 bg-black/50 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="flex h-10 w-full rounded-md border border-purple-500/20 bg-black/50 px-3 py-2 text-sm ring-offset-background placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="john.doe@example.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      className="flex min-h-[100px] sm:min-h-[120px] w-full rounded-md border border-purple-500/20 bg-black/50 px-3 py-2 text-sm ring-offset-background placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Type your message here."
                    ></textarea>
                  </div>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 sm:px-6 sm:py-3 text-sm">
                    Send Message
                  </Button>
                </div>
                <div className="space-y-4">
                  <div className="rounded-lg border border-blue-500/20 bg-black/50 p-4 sm:p-6 backdrop-blur-sm">
                    <h3 className="text-lg sm:text-xl font-bold mb-4">Contact Information</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                          <Mail className="h-5 w-5 sm:h-6 sm:w-6" />
                        </div>
                        <div>
                          <h4 className="text-base sm:text-lg font-medium">Email</h4>
                          <p className="text-zinc-400 text-sm sm:text-base">info@foslx.com</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                          <Phone className="h-5 w-5 sm:h-6 sm:w-6" />
                        </div>
                        <div>
                          <h4 className="text-base sm:text-lg font-medium">Phone</h4>
                          <p className="text-zinc-400 text-sm sm:text-base">+1 (555) 123-4567</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                          <Globe className="h-5 w-5 sm:h-6 sm:w-6" />
                        </div>
                        <div>
                          <h4 className="text-base sm:text-lg font-medium">Website</h4>
                          <p className="text-zinc-400 text-sm sm:text-base">www.foslx.com</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-lg border border-blue-500/20 bg-black/50 p-4 sm:p-6 backdrop-blur-sm">
                    <h3 className="text-lg sm:text-xl font-bold mb-4">Office Hours</h3>
                    <div className="space-y-2 text-sm sm:text-base">
                      <div className="flex justify-between">
                        <span className="text-zinc-400">Monday - Friday</span>
                        <span>9:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-zinc-400">Saturday</span>
                        <span>10:00 AM - 4:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-zinc-400">Sunday</span>
                        <span>Closed</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full bg-black py-12 sm:py-16 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-purple-900/20 rounded-full blur-3xl"></div>
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-blue-900/20 rounded-full blur-3xl"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-8 sm:mb-12">
            {/* Logo and Clutch Widget */}
            <div className="md:col-span-4 flex flex-col items-center text-center">
              <div className="box-border border-b-4 border-purple-600 p-6 sm:p-8 bg-black text-white rounded-lg mx-auto max-w-xs w-full">
                <h3 className="font-bold text-3xl sm:text-4xl mb-3 sm:mb-4">
                  <span className="text-white">FOSL</span>
                  <span className="text-blue-400">X</span>
                </h3>
                <ClutchWidget />
                <div className="text-sm sm:text-md font-medium text-white">
                  <h5>Peshawar KPK, Pakistan</h5>
                </div>
              </div>
            </div>

            {/* Links */}
            <div className="md:col-span-2 md:col-start-6 text-center md:text-left">
              <h4 className="text-lg font-bold mb-4 sm:mb-6 text-white">LINKS</h4>
              <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base">
                <li>
                  <Link href="#" className="text-zinc-400 hover:text-purple-400 transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="text-zinc-400 hover:text-purple-400 transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="#blog" className="text-zinc-400 hover:text-purple-400 transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-zinc-400 hover:text-purple-400 transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="#team" className="text-zinc-400 hover:text-purple-400 transition-colors">
                    Our Team
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div className="md:col-span-3 text-center md:text-left">
              <h4 className="text-lg font-bold mb-4 sm:mb-6 text-white">OUR SERVICES</h4>
              <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base">
                <li>
                  <Link href="#" className="text-zinc-400 hover:text-purple-400 transition-colors">
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-zinc-400 hover:text-purple-400 transition-colors">
                    AI Enabled Tools
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-zinc-400 hover:text-purple-400 transition-colors">
                    Domain and Hosting
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-zinc-400 hover:text-purple-400 transition-colors">
                    General IT Consultations
                  </Link>
                </li>
              </ul>
            </div>

            {/* Stay Connected */}
            <div className="md:col-span-3 text-center md:text-left">
              <h4 className="text-lg font-bold mb-4 sm:mb-6 text-white">STAY CONNECTED</h4>
              <p className="text-zinc-400 text-sm sm:text-base mb-4 sm:mb-6">WE'D LOVE TO CONNECT WITH YOU!</p>
              <div className="flex space-x-3 sm:space-x-4 justify-center md:justify-start">
                <a
                  href="#"
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-purple-900/30 flex items-center justify-center border border-purple-500/30 hover:bg-purple-800/50 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-purple-900/30 flex items-center justify-center border border-purple-500/30 hover:bg-purple-800/50 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-purple-900/30 flex items-center justify-center border border-purple-500/30 hover:bg-purple-800/50 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
              </div>
              <div className="mt-4 sm:mt-6">
                <Button
                  asChild
                  variant="outline"
                  className="border-purple-500/30 hover:bg-purple-900/30 text-white bg-transparent px-5 py-2 sm:px-6 sm:py-3 text-sm"
                >
                  <Link href="#contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="pt-6 sm:pt-8 border-t border-zinc-800/50 mt-8 sm:mt-12">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-center text-xs sm:text-sm text-zinc-400 md:text-left mb-2 md:mb-0">
                &copy; {new Date().getFullYear()} FOSLX. All rights reserved.
              </p>
              <div className="flex gap-4 sm:gap-6 mt-2 md:mt-0 text-xs sm:text-sm">
                <Link href="#" className="text-zinc-400 hover:text-purple-400">
                  Privacy Policy
                </Link>
                <Link href="#" className="text-zinc-400 hover:text-purple-400">
                  Terms & Conditions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
