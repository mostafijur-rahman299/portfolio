"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Twitter, Facebook, LinkedinIcon, Link2 } from "lucide-react"
import { cn } from "@/lib/utils"

export default function BlogDetail() {
  const [activeSection, setActiveSection] = useState("")
  const [email, setEmail] = useState("")

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
      <main className="container mx-auto px-4 py-8 md:py-12">
        <div className="flex flex-col lg:flex-row gap-12 max-w-7xl mx-auto">
          {/* Left Sidebar - Table of Contents */}
          <div className="lg:w-64 order-2 lg:order-1">
            <div className="sticky top-8 space-y-8">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-medium text-gray-900 mb-4 uppercase text-sm tracking-wider">Contents</h3>
                <nav className="space-y-2">
                  {tableOfContents.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => {
                        document.getElementById(section.id)?.scrollIntoView({ behavior: "smooth" })
                      }}
                      className={cn(
                        "block w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-200",
                        activeSection === section.id
                          ? "bg-white text-blue-600 shadow-sm font-medium"
                          : "text-gray-600 hover:bg-white hover:text-gray-900",
                      )}
                    >
                      {section.title}
                    </button>
                  ))}
                </nav>
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h4 className="font-medium text-gray-900 mb-4 uppercase text-sm tracking-wider">Share</h4>
                  <div className="flex gap-2">
                    <button className="p-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors">
                      <Twitter className="w-4 h-4" />
                    </button>
                    <button className="p-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors">
                      <Facebook className="w-4 h-4" />
                    </button>
                    <button className="p-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors">
                      <LinkedinIcon className="w-4 h-4" />
                    </button>
                    <button className="p-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors">
                      <Link2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:flex-1 order-1 lg:order-2">
            <article>
              <Link
                href="/blog"
                className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900 mb-8 group"
              >
                <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
                Back to Blog
              </Link>

              <div className="space-y-4 mb-8">
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">AWS</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                    Cloud Computing
                  </span>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
                  How to Learn AWS From Scratch in 2025: The Complete Guide
                </h1>
                <p className="text-xl text-gray-600">
                  Your complete guide to learning AWS, whether starting fresh or building on existing knowledge.
                  Discover a step-by-step roadmap along with several resources to get you started!
                </p>
              </div>

              {/* Enhanced Author Section */}
              <div className="bg-gray-50 rounded-xl p-6 mb-12">
                <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                  <div className="relative w-20 h-20 shrink-0">
                    <Image
                      src="/placeholder.svg?height=80&width=80"
                      alt="Thalia Barrera"
                      width={80}
                      height={80}
                      className="rounded-xl"
                    />
                    <div className="absolute -bottom-1 -right-1 bg-green-500 w-4 h-4 rounded-full border-2 border-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-2">
                      <h2 className="text-xl font-semibold text-gray-900">Thalia Barrera</h2>
                      <div className="flex gap-2 text-sm text-gray-600">
                        <span>Nov 27, 2024</span>
                        <span>•</span>
                        <span>25 min read</span>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">
                      Senior Data Science Editor at DataCamp. Previously Senior Developer at AWS. Author of "Cloud
                      Computing Simplified" and regular speaker at tech conferences.
                    </p>
                    <div className="flex gap-3">
                      <Link href="#" className="text-sm font-medium text-blue-600 hover:text-blue-700">
                        Follow
                      </Link>
                      <Link href="#" className="text-sm font-medium text-blue-600 hover:text-blue-700">
                        View Profile
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="prose prose-lg max-w-none">
                <Image
                  src="/placeholder.svg?height=600&width=1200"
                  alt="AWS Cloud Services Overview"
                  width={1200}
                  height={600}
                  className="w-full rounded-xl mb-8"
                  priority
                />

                <p>
                  Learning AWS is one of the best ways to advance your career in tech. As the most widely used cloud
                  provider, AWS is likely a prerequisite for many roles you aspire to. Even if your dream company uses a
                  different cloud provider, the knowledge you gain from learning AWS is always transferable.
                </p>

                <h2 id="what-is" className="text-3xl font-bold mt-12 mb-6 scroll-mt-20">
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
                  className="w-full rounded-xl my-8"
                />

                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8 rounded-r-xl">
                  <h4 className="text-blue-900 font-semibold mb-2">Key Insight</h4>
                  <p className="text-blue-800 m-0">
                    AWS's global infrastructure allows you to deploy applications closer to your end users, reducing
                    latency and improving user experience.
                  </p>
                </div>

                <h2 id="who-uses" className="text-3xl font-bold mt-12 mb-6 scroll-mt-20">
                  Who Uses AWS?
                </h2>

                <div className="grid sm:grid-cols-2 gap-6 my-8">
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h3 className="font-semibold mb-2">Startups</h3>
                    <p className="text-gray-600 m-0">
                      From single-person ventures to unicorn companies, AWS provides scalable infrastructure.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h3 className="font-semibold mb-2">Enterprises</h3>
                    <p className="text-gray-600 m-0">
                      Large organizations leverage AWS for digital transformation and innovation.
                    </p>
                  </div>
                </div>

                <Image
                  src="/placeholder.svg?height=400&width=800"
                  alt="AWS Use Cases"
                  width={800}
                  height={400}
                  className="w-full rounded-xl my-8"
                />

                {/* More sections would continue here */}
              </div>
            </article>
          </div>

          {/* Right Sidebar - Newsletter */}
          <div className="lg:w-80 order-3">
            <div className="sticky top-8 space-y-8">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4">Subscribe to Our Newsletter</h3>
                <p className="text-gray-600 mb-6">
                  Get the latest AWS tips and tutorials delivered directly to your inbox.
                </p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="email"
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                  <button
                    type="submit"
                    className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Subscribe
                  </button>
                </form>
                <p className="text-xs text-gray-500 mt-4">No spam ever. Unsubscribe at any time.</p>
              </div>

              <div className="bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4">AWS Certification Guide</h3>
                <p className="mb-6 text-white/90">
                  Download our free guide to AWS certifications and accelerate your cloud career.
                </p>
                <Link
                  href="#"
                  className="inline-block w-full px-4 py-2 bg-white text-blue-600 rounded-lg text-center font-medium hover:bg-blue-50 transition-colors"
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

