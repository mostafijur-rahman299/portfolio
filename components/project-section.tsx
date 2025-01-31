"use client"

import { useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { motion } from "framer-motion"

export function ProjectSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -600 : 600
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" })
    }
  }

  const projects = [
    {
      title: "Stop Wasting Time – How to Change Your Life in 90 Days",
      image: "/placeholder.svg?height=400&width=600",
      date: "January 21, 2025",
      backgroundColor: "bg-white",
      category: "Productivity",
    },
    {
      title: "My Honest Advice to Someone Who Wants to Start a YouTube Channel in 2025",
      image: "/placeholder.svg?height=400&width=600",
      date: "January 10, 2025",
      backgroundColor: "bg-[#ff7f5d]",
      category: "YouTube",
    },
    {
      title: "How To Actually Achieve Your Goals in 2025 (Evidence-Based)",
      image: "/placeholder.svg?height=400&width=600",
      date: "December 20, 2024",
      backgroundColor: "bg-white",
      category: "Personal Growth",
    },
    {
      title: "Life with Deep Work: My System for Productivity",
      image: "/placeholder.svg?height=400&width=600",
      date: "December 17, 2024",
      backgroundColor: "bg-[#ff7f5d]",
      category: "Productivity",
    },
  ]

  return (
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex justify-between items-end mb-12"
      >
        <div className="max-w-2xl">
          <h2 className="text-5xl md:text-6xl font-bold leading-tight">
            Watch My Most
            <br />
            Popular Videos
            <div className="h-2 w-40 bg-yellow-300 mt-6 rounded-full"></div>
          </h2>
        </div>
        <div className="flex gap-3">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full h-12 w-12 border-2 hover:scale-110 transition-transform"
            onClick={() => scroll("left")}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full h-12 w-12 border-2 hover:scale-110 transition-transform"
            onClick={() => scroll("right")}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      </motion.div>

      <div ref={scrollRef} className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbar">
        {projects.map((project, index) => (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            key={index}
            className={`${project.backgroundColor} rounded-3xl overflow-hidden flex-none w-[400px] snap-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}
          >
            <div className="relative">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={400}
                height={300}
                className="w-full aspect-[4/3] object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className="px-4 py-2 bg-black/70 text-white rounded-full text-sm">{project.category}</span>
              </div>
            </div>
            <div className="p-8">
              <p className="text-gray-600 mb-4 text-sm">{project.date}</p>
              <h3 className="text-2xl font-bold mb-6 leading-tight">{project.title}</h3>
              <Button variant="link" className="px-0 font-semibold group flex items-center gap-2">
                View
                <span className="group-hover:translate-x-2 transition-transform">→</span>
              </Button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

