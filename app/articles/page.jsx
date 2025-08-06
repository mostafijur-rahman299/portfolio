"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { AnimatedSection } from "@/components/ui/animated-section"
import { PremiumCard } from "@/components/ui/premium-card"
import { PageHeader } from "@/components/ui/page-header"
import { EnhancedButton } from "@/components/ui/enhanced-button"

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
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-neutral-100 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary-200/30 to-secondary-200/30 rounded-full blur-3xl animate-float" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-secondary-200/30 to-primary-200/30 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-primary-100/20 to-secondary-100/20 rounded-full blur-3xl animate-float" />
      </div>

      <div className="container mx-auto px-4 py-16 max-w-7xl relative z-10">
        <div className="space-y-16">
        <PageHeader
          title="Latest Articles"
          subtitle="Discover insights, tips, and strategies to help you grow personally and professionally."
          highlightWord="Articles"
        />

        <AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentPosts.map((post, index) => (
              <PremiumCard
                key={index}
                className="group overflow-hidden transition-all duration-300 transform hover:-translate-y-1 relative flex flex-col h-full"
              >
              <div className="relative">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  width={600}
                  height={400}
                  className="w-full h-48 sm:h-56 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  {post.category.map((cat, index) => (
                    <span key={index} className="text-xs sm:text-sm font-medium px-3 py-1 rounded-full bg-primary-100/90 text-primary-800 backdrop-blur-sm">
                      {cat}
                    </span>
                  ))}
                </div>
              </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h2 className="text-xl sm:text-2xl font-serif mb-3 line-clamp-2 text-neutral-800">{post.title}</h2>
                  <p className="text-neutral-600 mb-4 text-sm sm:text-base flex-grow">{post.excerpt}</p>
                  <Link href={`/articles/${post.slug}`} className="mt-auto">
                    <EnhancedButton
                      variant="outline"
                      size="sm"
                      className="w-full group-hover:shadow-glow transition-all duration-300"
                    >
                      Read Article
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </EnhancedButton>
                  </Link>
                </div>
              </PremiumCard>
          ))}
        </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="flex justify-center items-center space-x-2 sm:space-x-4 flex-wrap">
            <EnhancedButton
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              variant="outline"
              size="sm"
              className="p-2 rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ArrowLeft className="h-5 w-5 sm:h-6 sm:w-6" />
            </EnhancedButton>
            {Array.from({ length: totalPages }, (_, i) => (
              <EnhancedButton
                key={i}
                onClick={() => paginate(i + 1)}
                variant={currentPage === i + 1 ? "primary" : "outline"}
                size="sm"
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full text-sm sm:text-base"
              >
                {i + 1}
              </EnhancedButton>
            ))}
            <EnhancedButton
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === totalPages}
              variant="outline"
              size="sm"
              className="p-2 rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6" />
            </EnhancedButton>
          </div>
         </AnimatedSection>
        </div>
      </div>
    </div>
  )
}

