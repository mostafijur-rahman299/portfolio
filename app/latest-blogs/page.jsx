"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ArrowRight } from "lucide-react"

export default function BlogList() {
  const [currentPage, setCurrentPage] = useState(1)
  const postsPerPage = 6

  const blogPosts = [
    {
      title: "10 Productivity Hacks for Content Creators",
      excerpt: "Boost your content creation workflow with these game-changing productivity tips.",
      category: "Productivity",
      color: "#FF9500",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "The Ultimate Guide to YouTube SEO",
      excerpt: "Learn how to optimize your videos for maximum visibility and growth on YouTube.",
      category: "YouTube",
      color: "#FF6B6B",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "5 Effective Study Techniques Backed by Science",
      excerpt: "Discover research-proven methods to enhance your learning and retention.",
      category: "Education",
      color: "#9747FF",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Building a Successful Online Business: From Idea to Launch",
      excerpt: "A step-by-step guide to turning your passion into a thriving online venture.",
      category: "Business",
      color: "#40C1EA",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "The Power of Personal Branding in the Digital Age",
      excerpt: "Learn how to build and leverage your personal brand for career success.",
      category: "Marketing",
      color: "#FF4D4D",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Mastering the Art of Public Speaking",
      excerpt: "Overcome your fear and become a confident, persuasive speaker.",
      category: "Self-Improvement",
      color: "#4CAF50",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "The Future of AI in Content Creation",
      excerpt: "Explore how artificial intelligence is revolutionizing the content industry.",
      category: "Technology",
      color: "#5C6BC0",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Financial Planning for Freelancers and Entrepreneurs",
      excerpt: "Essential tips for managing your finances when you're self-employed.",
      category: "Finance",
      color: "#9C27B0",
      image: "/placeholder.svg?height=400&width=600",
    },
  ]

  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost)
  const totalPages = Math.ceil(blogPosts.length / postsPerPage)

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <div className="container mx-auto px-4 py-16 max-w-7xl">
      <div className="space-y-16">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl sm:text-6xl md:text-7xl leading-[1.1] tracking-tight font-serif mb-6">
            Latest{" "}
            <span className="relative inline-block">
              Blog Posts
              <span className="absolute -bottom-2 left-0 h-3 w-full bg-[#40C1EA]/40 -rotate-1 rounded-full" />
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover insights, tips, and strategies to help you grow personally and professionally.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentPosts.map((post, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 relative flex flex-col h-full"
            >
              <div className="relative">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  width={600}
                  height={400}
                  className="w-full h-48 sm:h-56 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span
                    className={`text-xs sm:text-sm font-medium px-3 py-1 rounded-full text-white`}
                    style={{ backgroundColor: post.color }}
                  >
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-xl sm:text-2xl font-serif mb-3 line-clamp-2">{post.title}</h2>
                <p className="text-gray-600 mb-4 text-sm sm:text-base flex-grow">{post.excerpt}</p>
                <Link
                  href="#"
                  className={`text-sm sm:text-base font-medium hover:underline transition-all duration-200 flex items-center mt-auto`}
                  style={{ color: post.color }}
                >
                  Read more
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center space-x-2 sm:space-x-4 flex-wrap">
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className="p-2 rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
          >
            <ArrowLeft className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => paginate(i + 1)}
              className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full text-sm sm:text-base transition-colors duration-200 ${
                currentPage === i + 1 ? "bg-[#40C1EA] text-white" : "bg-gray-200 text-gray-600 hover:bg-gray-300"
              }`}
            >
              {i + 1}
            </button>
          ))}
          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="p-2 rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
          >
            <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>
        </div>
      </div>
    </div>
  )
}

