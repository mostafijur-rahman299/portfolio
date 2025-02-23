"use client"

import { useRef, useState, useEffect, useMemo } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  ChevronLeft,
  ChevronRight,
  Layers,
  Globe,
  Server,
  Database,
  Cloud,
  Cpu,
  ExternalLink,
  Github,
} from "lucide-react"
import { motion, useAnimation, useMotionValue } from "framer-motion"
import { useRouter } from "next/navigation"
import TelemedicineBanner from "@/public/projects/telemedicine/banner.webp"
import { projectData } from "@/lib/utils"

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
  .gradient-text {
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    background-image: linear-gradient(45deg, #3b82f6, #8b5cf6);
  }
`

const projectsData = projectData

export function ProjectSection() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const controls = useAnimation()
  const x = useMotionValue(0)
  const router = useRouter()
  const projects = useMemo(() => projectsData, [])

  const checkScroll = useMemo(() => {
    return () => {
      if (scrollRef.current) {
        setCanScrollLeft(currentIndex > 0)
        setCanScrollRight(currentIndex < projects.length - 3) // Show 3 items at a time
      }
    }
  }, [currentIndex, projects])

  useEffect(() => {
    checkScroll()
    window.addEventListener("resize", checkScroll)
    return () => window.removeEventListener("resize", checkScroll)
  }, [checkScroll])

  const scroll = (direction: "left" | "right") => {
    const newIndex =
      direction === "left" ? Math.max(0, currentIndex - 1) : Math.min(projects.length - 3, currentIndex + 1)

    setCurrentIndex(newIndex)
    controls.start({
      x: -newIndex * 380,
      transition: { type: "spring", stiffness: 300, damping: 30 },
    })
  }

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
                <span className="gradient-text">My Latest</span>
                <br />
                <span className="relative inline-block">
                  Projects
                  <motion.span
                    className="absolute -bottom-2 left-0 h-2 w-full bg-yellow-400/40 rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                  ></motion.span>
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
                className={`flex-shrink-0 w-[280px] sm:w-[320px] md:w-[360px] overflow-hidden rounded-xl shadow-lg bg-white hover:shadow-xl card-hover`}
              >
                <div className="p-6 group">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold leading-snug transition-colors duration-300 group-hover:text-black line-clamp-2 tracking-tight">
                      {project.title}
                    </h3>
                    <div className={`p-2 rounded-full bg-gradient-to-br ${project.color}`}>
                      {project.icon && <project.icon className="w-6 h-6 text-white" />}
                    </div>
                  </div>
                  <div className="relative h-48 sm:h-52 mt-4 mb-4 overflow-hidden rounded-lg">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <p className="text-white text-center px-4">{project.description}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.skills.slice(0, 3).map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs transition-colors duration-300 group-hover:bg-yellow-100 font-medium tag-text"
                      >
                        {skill}
                      </span>
                    ))}
                    {project.skills.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs transition-colors duration-300 group-hover:bg-yellow-100 font-medium tag-text">
                        +{project.skills.length - 3} more
                      </span>
                    )}
                  </div>
                  <div className="flex justify-between items-center">
                    {project.demoLink && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="rounded-full font-medium text-sm text-black transition-colors duration-300 hover:bg-yellow-400 hover:text-black"
                        onClick={() => window.open(project.demoLink, "_blank")}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Demo
                      </Button>
                    )}
                    {project.githubLink && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="rounded-full font-medium text-sm text-black transition-colors duration-300 hover:bg-yellow-400 hover:text-black"
                        onClick={() => window.open(project.githubLink, "_blank")}
                      >
                        <Github className="w-4 h-4 mr-2" />
                        GitHub
                      </Button>
                    )}
                    <Button
                      variant="outline"
                      size="sm"
                      className="rounded-full font-medium text-sm text-black transition-colors duration-300 hover:bg-yellow-400 hover:text-black"
                      onClick={() => router.push(`/projects/${project.slug}`)}
                    >
                      View Details
                    </Button>
                    
                  </div>
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
              onClick={() => router.push("/projects")}
            >
              View All Projects
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  )
}

