"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Twitter, Facebook, LinkedinIcon, Link2 } from "lucide-react"
import { cn } from "@/lib/utils"

export default function BlogDetail() {
  const [activeSection, setActiveSection] = useState("")
  const [email, setEmail] = useState("")
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.5 },
    )

    document.querySelectorAll("h2[id]").forEach((section) => {
      observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsSidebarOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Email submitted:", email)
  }

  const tableOfContents = [
    { id: "what-is", title: "What is AWS?" },
    { id: "who-uses", title: "Who Uses AWS?" },
    { id: "requirements", title: "What's Required to Learn AWS?" },
    { id: "roadmap", title: "Step-by-Step Roadmap" },
    { id: "timeline", title: "Learning AWS Timeline" },
  ]

  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      <main className="container mx-auto px-3 sm:px-4 md:px-6 py-4 sm:py-6 md:py-8 lg:py-12">
        {/* Mobile Table of Contents Toggle */}
        <button 
          className="lg:hidden fixed bottom-4 right-4 z-50 bg-blue-600 text-white p-2.5 sm:p-3 rounded-full shadow-lg text-sm sm:text-base"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          {isSidebarOpen ? 'Close' : 'Contents'}
        </button>

        <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-8 xl:gap-12 max-w-7xl mx-auto">
          {/* Left Sidebar - Table of Contents */}
          <div className={cn(
            "fixed inset-0 lg:static lg:w-56 xl:w-64 bg-white/95 lg:bg-transparent backdrop-blur-sm lg:backdrop-blur-none z-40 transition-transform duration-300 lg:translate-x-0",
            isSidebarOpen ? "translate-x-0" : "-translate-x-full",
            "lg:order-1"
          )}>
            <div className="h-full lg:h-auto overflow-y-auto lg:overflow-visible p-4 sm:p-6 lg:p-0">
              <div className="sticky top-4 sm:top-6 lg:top-8 space-y-4 sm:space-y-6 lg:space-y-8">
                <div className="bg-gray-50 rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-5">
                  <h3 className="font-medium text-gray-900 mb-3 sm:mb-4 uppercase text-xs sm:text-sm tracking-wider">Contents</h3>
                  <nav className="space-y-1 sm:space-y-1.5">
                    {tableOfContents.map((section) => (
                      <button
                        key={section.id}
                        onClick={() => {
                          document.getElementById(section.id)?.scrollIntoView({ behavior: "smooth" })
                          setIsSidebarOpen(false)
                        }}
                        className={cn(
                          "block w-full text-left px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-md sm:rounded-lg text-xs sm:text-sm transition-all duration-200",
                          activeSection === section.id
                            ? "bg-white text-blue-600 shadow-sm font-medium"
                            : "text-gray-600 hover:bg-white hover:text-gray-900",
                        )}
                      >
                        {section.title}
                      </button>
                    ))}
                  </nav>
                  <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-200">
                    <h4 className="font-medium text-gray-900 mb-3 sm:mb-4 uppercase text-xs sm:text-sm tracking-wider">Share</h4>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      <button className="p-1.5 sm:p-2 rounded-md sm:rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors">
                        <Twitter className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
                      </button>
                      <button className="p-1.5 sm:p-2 rounded-md sm:rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors">
                        <Facebook className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
                      </button>
                      <button className="p-1.5 sm:p-2 rounded-md sm:rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors">
                        <LinkedinIcon className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
                      </button>
                      <button className="p-1.5 sm:p-2 rounded-md sm:rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors">
                        <Link2 className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:flex-1 order-1 lg:order-2">
            <article className="max-w-3xl mx-auto">
              <Link
                href="/blog"
                className="inline-flex items-center text-xs sm:text-sm text-gray-600 hover:text-gray-900 mb-4 sm:mb-6 md:mb-8 group"
              >
                <ArrowLeft className="w-3.5 sm:w-4 h-3.5 sm:h-4 mr-1.5 sm:mr-2 transition-transform group-hover:-translate-x-1" />
                Back to Blog
              </Link>

              <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6 md:mb-8">
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  <span className="px-2.5 sm:px-3 py-0.5 sm:py-1 bg-blue-100 text-blue-800 rounded-full text-xs sm:text-sm font-medium">AWS</span>
                  <span className="px-2.5 sm:px-3 py-0.5 sm:py-1 bg-purple-100 text-purple-800 rounded-full text-xs sm:text-sm font-medium">
                    Cloud Computing
                  </span>
                </div>
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 tracking-tight">
                  How to Learn AWS From Scratch in 2025: The Complete Guide
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-gray-600">
                  Your complete guide to learning AWS, whether starting fresh or building on existing knowledge.
                  Discover a step-by-step roadmap along with several resources to get you started!
                </p>
              </div>

              {/* Enhanced Author Section */}
              <div className="bg-gray-50 rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-5 lg:p-6 mb-6 sm:mb-8 md:mb-10 lg:mb-12">
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-5 lg:gap-6 items-start sm:items-center">
                  <div className="relative w-14 sm:w-16 md:w-18 lg:w-20 h-14 sm:h-16 md:h-18 lg:h-20 shrink-0">
                    <Image
                      src="/placeholder.svg?height=80&width=80"
                      alt="Thalia Barrera"
                      width={80}
                      height={80}
                      className="rounded-lg sm:rounded-xl"
                    />
                    <div className="absolute -bottom-1 -right-1 bg-green-500 w-2.5 sm:w-3 md:w-3.5 lg:w-4 h-2.5 sm:h-3 md:h-3.5 lg:h-4 rounded-full border-2 border-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-x-2 sm:gap-x-3 md:gap-x-4 gap-y-1 sm:gap-y-1.5 md:gap-y-2 mb-1.5 sm:mb-2">
                      <h2 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900">Thalia Barrera</h2>
                      <div className="flex gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-600">
                        <span>Nov 27, 2024</span>
                        <span>•</span>
                        <span>25 min read</span>
                      </div>
                    </div>
                    <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-2 sm:mb-3 md:mb-4">
                      Senior Data Science Editor at DataCamp. Previously Senior Developer at AWS. Author of "Cloud
                      Computing Simplified" and regular speaker at tech conferences.
                    </p>
                    <div className="flex gap-2 sm:gap-3">
                      <Link href="#" className="text-xs sm:text-sm font-medium text-blue-600 hover:text-blue-700">
                        Follow
                      </Link>
                      <Link href="#" className="text-xs sm:text-sm font-medium text-blue-600 hover:text-blue-700">
                        View Profile
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="prose prose-xs sm:prose-sm md:prose-base lg:prose-lg max-w-none">
                <Image
                  src="/placeholder.svg?height=600&width=1200"
                  alt="AWS Cloud Services Overview"
                  width={1200}
                  height={600}
                  className="w-full rounded-lg sm:rounded-xl mb-4 sm:mb-6 md:mb-8"
                  priority
                />

                <p>
                  Learning AWS is one of the best ways to advance your career in tech. As the most widely used cloud
                  provider, AWS is likely a prerequisite for many roles you aspire to. Even if your dream company uses a
                  different cloud provider, the knowledge you gain from learning AWS is always transferable.
                </p>

                <h2 id="what-is" className="text-xl sm:text-2xl md:text-3xl font-bold mt-6 sm:mt-8 md:mt-10 lg:mt-12 mb-3 sm:mb-4 md:mb-5 lg:mb-6 scroll-mt-20">
                  What is AWS?
                </h2>
                <p>
                  AWS (Amazon Web Services) is the world's most comprehensive and broadly adopted cloud platform,
                  offering over 200 fully featured services from data centers globally.
                </p>

                <Image
                  src="/placeholder.svg?height=400&width=800"
                  alt="AWS Global Infrastructure"
                  width={800}
                  height={400}
                  className="w-full rounded-lg sm:rounded-xl my-4 sm:my-6 md:my-8"
                />

                <div className="bg-blue-50 border-l-4 border-blue-500 p-3 sm:p-4 md:p-5 lg:p-6 my-4 sm:my-6 md:my-8 rounded-r-lg sm:rounded-r-xl">
                  <h4 className="text-blue-900 font-semibold mb-1.5 sm:mb-2">Key Insight</h4>
                  <p className="text-blue-800 m-0">
                    AWS's global infrastructure allows you to deploy applications closer to your end users, reducing
                    latency and improving user experience.
                  </p>
                </div>

                <h2 id="who-uses" className="text-xl sm:text-2xl md:text-3xl font-bold mt-6 sm:mt-8 md:mt-10 lg:mt-12 mb-3 sm:mb-4 md:mb-5 lg:mb-6 scroll-mt-20">
                  Who Uses AWS?
                </h2>

                <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 md:gap-5 lg:gap-6 my-4 sm:my-6 md:my-8">
                  <div className="bg-gray-50 p-3 sm:p-4 md:p-5 lg:p-6 rounded-lg sm:rounded-xl">
                    <h3 className="font-semibold mb-1.5 sm:mb-2">Startups</h3>
                    <p className="text-xs sm:text-sm md:text-base text-gray-600 m-0">
                      From single-person ventures to unicorn companies, AWS provides scalable infrastructure.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-3 sm:p-4 md:p-5 lg:p-6 rounded-lg sm:rounded-xl">
                    <h3 className="font-semibold mb-1.5 sm:mb-2">Enterprises</h3>
                    <p className="text-xs sm:text-sm md:text-base text-gray-600 m-0">
                      Large organizations leverage AWS for digital transformation and innovation.
                    </p>
                  </div>
                </div>

                <Image
                  src="/placeholder.svg?height=400&width=800"
                  alt="AWS Use Cases"
                  width={800}
                  height={400}
                  className="w-full rounded-lg sm:rounded-xl my-4 sm:my-6 md:my-8"
                />

                {/* More sections would continue here */}
              </div>
            </article>
          </div>

          {/* Right Sidebar - Newsletter */}
          <div className="lg:w-72 xl:w-80 order-3">
            <div className="sticky top-4 sm:top-6 lg:top-8 space-y-4 sm:space-y-6 lg:space-y-8">
              <div className="bg-gray-50 rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-5">
                <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 md:mb-4">Subscribe to Our Newsletter</h3>
                <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-3 sm:mb-4 md:mb-6">
                  Get the latest AWS tips and tutorials delivered directly to your inbox.
                </p>
                <form onSubmit={handleSubmit} className="space-y-2 sm:space-y-3 md:space-y-4">
                  <input
                    type="email"
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-2.5 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-md sm:rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs sm:text-sm md:text-base"
                    required
                  />
                  <button
                    type="submit"
                    className="w-full px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-600 text-white rounded-md sm:rounded-lg hover:bg-blue-700 transition-colors text-xs sm:text-sm md:text-base"
                  >
                    Subscribe
                  </button>
                </form>
                <p className="text-[10px] sm:text-xs text-gray-500 mt-2 sm:mt-3 md:mt-4">No spam ever. Unsubscribe at any time.</p>
              </div>

              <div className="bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-5">
                <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 md:mb-4">AWS Certification Guide</h3>
                <p className="text-xs sm:text-sm md:text-base mb-3 sm:mb-4 md:mb-6 text-white/90">
                  Download our free guide to AWS certifications and accelerate your cloud career.
                </p>
                <Link
                  href="#"
                  className="inline-block w-full px-3 sm:px-4 py-1.5 sm:py-2 bg-white text-blue-600 rounded-md sm:rounded-lg text-center font-medium hover:bg-blue-50 transition-colors text-xs sm:text-sm md:text-base"
                >
                  Download Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
