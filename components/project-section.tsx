"use client"

import { useRef, useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { motion, useAnimation, useMotionValue } from "framer-motion"

const swipeConfidenceThreshold = 10000
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity
}

const styles = `
  .hide-scrollbar::-webkit-scrollbar {
    display: none;
  }
  .hide-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  .content-section {
    width: 100%;
    transition: all 0.5s ease;
  }
  .card-hover {
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    border: 2px solid transparent;
  }
  .card-hover:hover {
    transform: translateY(-8px);
    border-color: #FFD700;
    box-shadow: 0 10px 30px rgba(255, 215, 0, 0.2);
  }
`

export function ProjectSection() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const controls = useAnimation()
  const x = useMotionValue(0)

  const checkScroll = () => {
    if (scrollRef.current) {
      setCanScrollLeft(currentIndex > 0)
      setCanScrollRight(currentIndex < projects.length - 3) // Show 3 items at a time
    }
  }

  useEffect(() => {
    checkScroll()
    window.addEventListener("resize", checkScroll)
    return () => window.removeEventListener("resize", checkScroll)
  }, [currentIndex])

  const scroll = (direction: "left" | "right") => {
    const newIndex =
      direction === "left" ? Math.max(0, currentIndex - 1) : Math.min(projects.length - 3, currentIndex + 1)

    setCurrentIndex(newIndex)
    controls.start({
      x: -newIndex * 380,
      transition: { type: "spring", stiffness: 300, damping: 30 },
    })
  }

  const projects = [
    {
      title: "How to Change Your Life with Deep Work (My System)",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-03%20at%209.28.27%E2%80%AFAM-eKDPMbd1tY2tVzzhhZqMSiq5m2Edi0.png",
      date: "December 17, 2024",
      backgroundColor: "bg-[#f9f6f3]",
      category: "Productivity",
      tags: ["Deep Work", "Time Management", "Focus"],
      description: "A comprehensive guide to implementing deep work practices in your daily routine.",
    },
    {
      title: "My Honest Advice to Someone Who Wants to Start a YouTube Channel in 2025",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-03%20at%209.28.27%E2%80%AFAM-eKDPMbd1tY2tVzzhhZqMSiq5m2Edi0.png",
      date: "January 10, 2025",
      backgroundColor: "bg-[#f9f6f3]",
      category: "Content Creation",
      tags: ["YouTube", "Social Media", "Marketing"],
      description: "Real insights and strategies for building a successful YouTube presence.",
    },
    {
      title: "The Ultimate Guide to Building a Personal Brand",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/personal-brand.png",
      date: "February 5, 2025",
      backgroundColor: "bg-[#f9f6f3]",
      category: "Personal Development",
      tags: ["Branding", "Career Growth", "Online Presence"],
      description: "Step-by-step guide to creating and growing your personal brand online.",
    },
    {
      title: "Mastering React: Advanced Patterns and Best Practices",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/react-patterns.png",
      date: "March 1, 2025",
      backgroundColor: "bg-[#f9f6f3]",
      category: "Programming",
      tags: ["React", "JavaScript", "Web Development"],
      description: "Deep dive into advanced React patterns for building scalable applications.",
    },
    {
      title: "The Future of AI in Content Creation",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ai-content.png",
      date: "March 15, 2025",
      backgroundColor: "bg-[#f9f6f3]",
      category: "Technology",
      tags: ["AI", "Content", "Future Tech"],
      description: "Exploring how AI is revolutionizing the content creation landscape.",
    },
    {
      title: "Mastering React: Advanced Patterns and Best Practices",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/react-patterns.png",
      date: "March 1, 2025",
      backgroundColor: "bg-[#f9f6f3]",
      category: "Programming",
      tags: ["React", "JavaScript", "Web Development"],
      description: "Deep dive into advanced React patterns for building scalable applications.",
    },
    {
      title: "The Future of AI in Content Creation",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ai-content.png",
      date: "March 15, 2025",
      backgroundColor: "bg-[#f9f6f3]",
      category: "Technology",
      tags: ["AI", "Content", "Future Tech"],
      description: "Exploring how AI is revolutionizing the content creation landscape.",
    },
  ]

  return (
    <>
      <style>{styles}</style>
      <section className="content-section py-16 sm:py-24 md:py-32" id="projects">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 sm:mb-16"
          >
            <div className="max-w-2xl mb-8 sm:mb-0">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight"
              >
                <span className="text-[#40C1EA] bg-clip-text">
                  My Latest
                </span>
                <br />
                <span className="relative inline-block">
                  Products
                  <span className="absolute -bottom-2 left-0 h-2 w-full bg-yellow-400/40 -rotate-1 rounded-full"></span>
                </span>
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                className="mt-6 text-gray-600 text-lg sm:text-xl font-medium"
              >
                Discover my carefully crafted digital solutions that make a difference
              </motion.p>
            </div>

            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
              className="flex gap-3"
            >
              <Button
                variant="outline"
                size="icon"
                className={`rounded-full h-12 w-12 border-2 border-yellow-400 bg-white hover:bg-yellow-400 transition-all duration-300 ${
                  !canScrollLeft ? "opacity-40 cursor-not-allowed" : ""
                }`}
                onClick={() => scroll("left")}
                disabled={!canScrollLeft}
              >
                <ChevronLeft className="h-6 w-6 text-black" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className={`rounded-full h-12 w-12 border-2 border-yellow-400 bg-white hover:bg-yellow-400 transition-all duration-300 ${
                  !canScrollRight ? "opacity-40 cursor-not-allowed" : ""
                }`}
                onClick={() => scroll("right")}
                disabled={!canScrollRight}
              >
                <ChevronRight className="h-6 w-6 text-black" />
              </Button>
            </motion.div>
          </motion.div>
        </div>

        <div className="w-full overflow-hidden">
          <motion.div
            ref={scrollRef}
            className="flex gap-6 px-4 sm:px-6 lg:px-8 py-4"
            animate={controls}
            initial={{ x: 0 }}
            style={{ x }}
            drag="x"
            dragConstraints={{ left: -((projects.length - 3) * 380), right: 0 }}
            dragElastic={0.1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x)
              if (swipe < -swipeConfidenceThreshold) {
                scroll("right")
              } else if (swipe > swipeConfidenceThreshold) {
                scroll("left")
              }
            }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  delay: index * 0.08,
                }}
                className={`flex-shrink-0 w-[280px] sm:w-[320px] md:w-[360px] overflow-hidden rounded-xl shadow-lg ${project.backgroundColor} hover:shadow-xl card-hover`}
              >
                <div className="p-6 group">
                  <h3 className="text-lg font-semibold mb-3 leading-snug transition-colors duration-300 group-hover:text-black line-clamp-2 tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-2 transition-colors duration-300 group-hover:text-gray-700 font-medium">
                    {project.date}
                  </p>
                  <div className="relative h-48 sm:h-52 mt-4">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-300 hover:scale-105 rounded-lg"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1.5 bg-yellow-400 text-black rounded-full text-xs font-semibold tracking-wide">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mt-4 line-clamp-2 group-hover:text-gray-700 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs transition-colors duration-300 group-hover:bg-yellow-100 font-medium tag-text"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Button
                    variant="link"
                    className="px-0 font-medium group flex items-center gap-2 text-sm text-black transition-colors duration-300 hover:text-yellow-600"
                  >
                    Learn more
                    <span className="group-hover:translate-x-0.5 transition-transform duration-300">→</span>
                  </Button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
            className="mt-12 sm:mt-16 text-center"
          >
            <Button
              variant="outline"
              size="lg"
              className="rounded-full px-8 py-3 text-lg font-semibold border-2 border-yellow-400 text-black hover:bg-yellow-400 hover:text-black transition-all duration-300 button-text"
            >
              View All Products
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  )
}
