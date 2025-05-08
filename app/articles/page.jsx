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
      id: 1,
      title: "Securing Your Django Application: Best Practices for Preventing XSS, CSRF, and More",
      excerpt: "Security should always be at the forefront of any web development project. With Django, you get a framework that provides a lot of built-in security features, but there are ...",
      image: "/blog-posts/1.webp",
      category: ["Django", "Security"],
      slug: "securing-your-django-application"
    },
    {
      id: 2,
      title: "Introduction to Cloud Computing: A Friendly Guide for Beginners",
      excerpt: "When you type a website address (like www.netflix.com) into your browser, it’s like dialing a phone number. Your computer asks a special phone book (called DNS) for Netflix’s “number” (IP address)... ",
      image: "/blog-posts/2.webp",
      category: ["Cloud Computing", "AWS"],
      slug: "introduction-to-cloud-computing"
    },
    {
      id: 3,
      title: "A Comprehensive Guide to Top Programming Languages for Career Success",
      excerpt: "As we step into the dynamic landscape of 2024, the key to a successful career in software development lies in making informed choices, and one of the crucial decisions is selecting the right programming language. In this guide, we’ll navigate through ... ",
      image: "/blog-posts/3.webp",
      category: ["Programming", "Languages"],
      slug: "a-comprehensive-guide-to-top-programming-languages-for-career-success"
    }
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
                    {post.category.map((cat, index) => (
                      <span key={index} className="mr-2 bg-gray-200 text-gray-600 hover:bg-gray-300 rounded-full px-2 py-1">{cat}</span> 
                    ))}
                  </span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-xl sm:text-2xl font-serif mb-3 line-clamp-2">{post.title}</h2>
                <p className="text-gray-600 mb-4 text-sm sm:text-base flex-grow">{post.excerpt}</p>
                <Link
                  href={`/articles/${post.slug}`}
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

