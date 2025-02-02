"use client"

import { useRef, useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function ProjectSection() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10) // 10px threshold
    }
  }

  useEffect(() => {
    checkScroll()
    window.addEventListener("resize", checkScroll)
    return () => window.removeEventListener("resize", checkScroll)
  }, [scrollRef])

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300
      scrollRef.current.scrollBy({ 
        left: scrollAmount, 
        behavior: "smooth" 
      })
    }
  }

  const projects = [
    {
      title: "Building a RESTful API with Django and Python",
      image: "/placeholder.svg?height=400&width=600",
      date: "January 21, 2025", 
      backgroundColor: "bg-white",
      category: "Backend Development",
      tags: ["Django", "Python", "REST API"],
      hoverColor: "hover:bg-blue-100",
    },
    {
      title: "Creating a React Native Mobile App for Task Management",
      image: "/placeholder.svg?height=400&width=600",
      date: "January 10, 2025",
      backgroundColor: "bg-[#ff7f5d]",
      category: "Mobile Development", 
      tags: ["React Native", "JavaScript", "Mobile"],
      hoverColor: "hover:bg-green-100",
    },
    {
      title: "Implementing Machine Learning Models with TensorFlow",
      image: "/placeholder.svg?height=400&width=600",
      date: "December 20, 2024",
      backgroundColor: "bg-white",
      category: "Machine Learning",
      tags: ["TensorFlow", "Python", "AI"],
      hoverColor: "hover:bg-purple-100",
    },
    {
      title: "Building a Microservices Architecture with Node.js",
      image: "/placeholder.svg?height=400&width=600",
      date: "December 17, 2024",
      backgroundColor: "bg-[#ff7f5d]",
      category: "Backend Development",
      tags: ["Node.js", "Microservices", "Docker"],
      hoverColor: "hover:bg-yellow-100",
    },
    {
      title: "Creating a React Native Mobile App for Task Management",
      image: "/placeholder.svg?height=400&width=600", 
      date: "January 10, 2025",
      backgroundColor: "bg-[#ff7f5d]",
      category: "Mobile Development",
      tags: ["React Native", "JavaScript", "Mobile"],
      hoverColor: "hover:bg-green-100",
    },
    {
      title: "Implementing Machine Learning Models with TensorFlow",
      image: "/placeholder.svg?height=400&width=600",
      date: "December 20, 2024",
      backgroundColor: "bg-white",
      category: "Machine Learning",
      tags: ["TensorFlow", "Python", "AI"],
      hoverColor: "hover:bg-purple-100",
    },
    {
      title: "Building a Microservices Architecture with Node.js",
      image: "/placeholder.svg?height=400&width=600",
      date: "December 17, 2024",
      backgroundColor: "bg-[#ff7f5d]",
      category: "Backend Development",
      tags: ["Node.js", "Microservices", "Docker"],
      hoverColor: "hover:bg-yellow-100",
    },
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 sm:mb-12"
      >
        <div className="max-w-2xl mb-6 sm:mb-0">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight"
          >
            Explore My
            <br />
            Latest Projects
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "10rem" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
              className="h-2 bg-yellow-300 mt-4 sm:mt-6 rounded-full"
            ></motion.div>
          </motion.h2>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="flex gap-3"
        >
          <Button
            variant="outline"
            size="icon"
            className={`rounded-full h-10 w-10 sm:h-12 sm:w-12 border-2 hover:scale-110 transition-all duration-300 ${
              !canScrollLeft ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
          >
            <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
          </Button>
          <Button
            variant="outline"
            size="icon" 
            className={`rounded-full h-10 w-10 sm:h-12 sm:w-12 border-2 hover:scale-110 transition-all duration-300 ${
              !canScrollRight ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
          >
            <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
          </Button>
        </motion.div>
      </motion.div>

      <motion.div
        ref={scrollRef}
        className="flex gap-4 sm:gap-6 overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbar scroll-smooth"
        onScroll={checkScroll}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
      >
        <AnimatePresence mode="wait">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ 
                duration: 0.8,
                ease: "easeOut",
                delay: index * 0.1
              }}
              className={`${project.backgroundColor} ${project.hoverColor} rounded-2xl sm:rounded-3xl overflow-hidden flex-none w-[280px] sm:w-[350px] md:w-[400px] snap-center hover:shadow-xl transition-all duration-300`}
            >
              <motion.div 
                whileHover={{ scale: 1.05 }} 
                transition={{ duration: 0.4, ease: "easeOut" }} 
                className="relative"
              >
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="w-full aspect-[4/3] object-cover"
                />
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                  className="absolute top-2 sm:top-4 left-2 sm:left-4"
                >
                  <span className="px-3 py-1 sm:px-4 sm:py-2 bg-black/70 text-white rounded-full text-xs sm:text-sm">
                    {project.category}
                  </span>
                </motion.div>
              </motion.div>
              <div className="p-4 sm:p-6 md:p-8">
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                  className="text-gray-600 mb-2 sm:mb-4 text-xs sm:text-sm"
                >
                  {project.date}
                </motion.p>
                <motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                  className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 leading-tight"
                >
                  {project.title}
                </motion.h3>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
                  className="flex flex-wrap gap-2 mb-4 sm:mb-6"
                >
                  {project.tags.map((tag, tagIndex) => (
                    <motion.span
                      key={tagIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ 
                        duration: 0.8, 
                        ease: "easeOut",
                        delay: 0.6 + tagIndex * 0.1 
                      }}
                      className="px-2 sm:px-3 py-1 bg-gray-200 text-gray-800 rounded-full text-xs"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.7 }}
                >
                  <Button
                    variant="link"
                    className="px-0 font-semibold group flex items-center gap-2 text-sm sm:text-base"
                  >
                    View Project
                    <motion.span 
                      initial={{ x: 0 }} 
                      whileHover={{ x: 5 }} 
                      transition={{ duration: 0.4, ease: "easeOut" }}
                    >
                      →
                    </motion.span>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
        className="mt-8 sm:mt-12 text-center"
      >
        <Button
          variant="outline"
          size="lg"
          className="rounded-full px-6 py-3 sm:px-8 sm:py-6 text-base sm:text-lg font-semibold"
        >
          View More Projects
        </Button>
      </motion.div>
    </motion.div>
  )
}
