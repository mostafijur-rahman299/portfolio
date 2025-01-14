"use client"

import React, { useState, useRef, useEffect } from "react"
import { motion, useAnimation, useInView, AnimatePresence } from "framer-motion"
import { Zap, ExternalLink, Github, ArrowRight, Code, Server, Database, Globe, Cloud, Cpu, Layers } from 'lucide-react'
import { Badge } from "@/components/Badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/Tooltip"
import { Button } from "@/components/Button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/Card"
import Link from "next/link"

const allTags = [
  "All",
  "Django",
  "Django Rest Framework",
  "PostgreSQL",
  "MySQL",
  "Docker",
  "React",
  "jQuery",
  "VanillaJS",
  "OpenAI API",
  "WhatsApp API",
  "Stripe API",
  "Python",
  "Django Channels",
  "RabbitMQ",
  "Celery",
  "Redis",
]

const allProjects = [
  {
    id: 1,
    title: "AI-Powered Chat Application",
    description: "A real-time chat application with AI-generated responses.",
    skills: ["React", "Django", "OpenAI API", "WebSocket"],
    demoLink: "https://ai-chat.example.com",
    githubLink: "https://github.com/yourusername/ai-chat",
    icon: Globe,
    color: "from-blue-400 to-indigo-600",
  },
  {
    id: 2,
    title: "E-commerce Platform",
    description: "A full-featured e-commerce platform with payment integration.",
    skills: ["Django", "React", "PostgreSQL", "Stripe API"],
    demoLink: "https://ecommerce.example.com",
    githubLink: "https://github.com/yourusername/ecommerce",
    icon: Server,
    color: "from-pink-400 to-rose-600",
  },
  {
    id: 3,
    title: "Task Management System",
    description: "A collaborative task management system for teams.",
    skills: ["Django Rest Framework", "React", "Redis", "Docker"],
    demoLink: "https://tasks.example.com",
    githubLink: "https://github.com/yourusername/task-manager",
    icon: Database,
    color: "from-cyan-400 to-blue-600",
  },
  {
    id: 4,
    title: "Real-time Analytics Dashboard",
    description: "A dashboard for visualizing real-time data analytics.",
    skills: ["React", "Django Channels", "PostgreSQL", "WebSocket"],
    demoLink: "https://analytics.example.com",
    githubLink: "https://github.com/yourusername/analytics-dashboard",
    icon: Cloud,
    color: "from-emerald-400 to-teal-600",
  },
  {
    id: 5,
    title: "Machine Learning Pipeline",
    description: "An end-to-end ML pipeline for data processing and model training.",
    skills: ["Python", "TensorFlow", "Docker", "Kubernetes"],
    demoLink: "https://ml-pipeline.example.com",
    githubLink: "https://github.com/yourusername/ml-pipeline",
    icon: Cpu,
    color: "from-amber-400 to-orange-600",
  },
  {
    id: 6,
    title: "Microservices Architecture",
    description: "A scalable microservices-based application architecture.",
    skills: ["Docker", "Kubernetes", "gRPC", "Redis"],
    demoLink: "https://microservices.example.com",
    githubLink: "https://github.com/yourusername/microservices-arch",
    icon: Layers,
    color: "from-violet-400 to-purple-600",
  },
]

const SkillBadge = ({ skill, onClick, isActive }) => (
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Badge
            variant="secondary"
            className={`mr-2 mb-2 cursor-pointer ${
              isActive
                ? "bg-gradient-to-r from-pink-500 to-violet-500 text-white shadow-lg"
                : "bg-white/10 text-white hover:bg-white/20"
            }`}
            onClick={onClick}
          >
            {skill}
          </Badge>
        </motion.div>
      </TooltipTrigger>
      <TooltipContent>
        <p>Filter by {skill}</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
)

const ProjectCard = ({ project, isHovered, onHover }) => (
  <motion.div
    layout
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.8 }}
    transition={{ duration: 0.5 }}
  >
    <Card 
      className={`relative overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-2xl bg-gradient-to-br ${project.color}`}
      onMouseEnter={() => onHover(project.id)}
      onMouseLeave={() => onHover(null)}
    >
      <CardHeader className="relative pb-0">
        <motion.div 
          className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-bl-full flex items-center justify-center"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        >
          <project.icon className="w-10 h-10 text-white" />
        </motion.div>
        <CardTitle className="text-2xl font-bold text-white mb-2">{project.title}</CardTitle>
        <CardDescription className="text-white/80">{project.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <motion.div className="mb-4 flex flex-wrap" layout>
          {project.skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Badge className="mr-2 mb-2 bg-white/20 text-white">
                {skill}
              </Badge>
            </motion.div>
          ))}
        </motion.div>
        <div className="flex flex-wrap gap-2">
          <Button variant="secondary" size="sm" asChild className="bg-white/20 text-white hover:bg-white/30 transition-all duration-300 hover:shadow-lg">
            <Link href={`/projects/${project.title}`}>
              Learn More
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          {project.demoLink && (
            <Button size="sm" variant="outline" asChild className="border-white/40 text-white hover:bg-white/10 transition-all duration-300 hover:shadow-lg">
              <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                Live Demo
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          )}
          {project.githubLink && (
            <Button size="sm" variant="outline" asChild className="border-white/40 text-white hover:bg-white/10 transition-all duration-300 hover:shadow-lg">
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </a>
            </Button>
          )}
        </div>
      </CardContent>
      <AnimatePresence>
        {isHovered && (
          <motion.div
            className="absolute -top-2 -left-2 bg-white rounded-full p-2 shadow-lg"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: 180 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            <Zap className="h-6 w-6 text-black" />
          </motion.div>
        )}
      </AnimatePresence>
    </Card>
  </motion.div>
)

function ProjectsComponent() {
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const [selectedTags, setSelectedTags] = useState(["All"])
  const [filteredProjects, setFilteredProjects] = useState(allProjects)
  const [scrollY, setScrollY] = useState(0)

  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.2 })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const toggleTag = (tag) => {
    if (tag === "All") {
      setSelectedTags(["All"])
    } else {
      const newTags = selectedTags.includes(tag)
        ? selectedTags.filter((t) => t !== tag)
        : [...selectedTags.filter((t) => t !== "All"), tag]
      setSelectedTags(newTags.length ? newTags : ["All"])
    }
  }

  useEffect(() => {
    if (selectedTags.includes("All")) {
      setFilteredProjects(allProjects)
    } else {
      setFilteredProjects(
        allProjects.filter((project) =>
          selectedTags.every((tag) => project.skills.includes(tag))
        )
      )
    }
  }, [selectedTags])

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-800 via-purple-700 to-pink-600 text-white overflow-hidden flex flex-col items-center justify-center relative">
      <div 
        className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      ></div>
      
      <div className="relative w-full z-10 px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
        <main className="max-w-7xl mx-auto" ref={containerRef}>
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
          >
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-pink-300 to-indigo-300"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              Innovative Projects Showcase
            </motion.h1>
            <motion.p
              className="text-lg sm:text-xl md:text-2xl text-indigo-200 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Explore a collection of cutting-edge projects that push the boundaries of technology and creativity. 
              Each project represents a unique challenge conquered and a step forward in innovation.
            </motion.p>
          </motion.div>

          <motion.div
            className="flex flex-wrap justify-center gap-2 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {allTags.map((tag) => (
              <SkillBadge
                key={tag}
                skill={tag}
                onClick={() => toggleTag(tag)}
                isActive={selectedTags.includes(tag)}
              />
            ))}
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={controls}
          >
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  isHovered={hoveredIndex === project.id}
                  onHover={setHoveredIndex}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        </main>
      </div>

      {/* Enhanced fancy decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div 
          className="absolute top-1/4 left-0 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"
          style={{
            transform: `translate(${Math.sin(scrollY * 0.01) * 50}px, ${Math.cos(scrollY * 0.01) * 50}px)`,
          }}
        ></div>
        <div 
          className="absolute top-3/4 right-0 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"
          style={{
            transform: `translate(${Math.cos(scrollY * 0.01) * 50}px, ${Math.sin(scrollY * 0.01) * 50}px)`,
          }}
        ></div>
        <div 
          className="absolute bottom-0 left-1/2 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"
          style={{
            transform: `translate(${Math.sin(scrollY * 0.02) * 50}px, ${Math.cos(scrollY * 0.02) * 50}px)`,
          }}
        ></div>
      </div>

      {/* Enhanced animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white rounded-full mix-blend-overlay"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 6 + 1}px`,
              height: `${Math.random() * 6 + 1}px`,
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              x: [0, Math.random() * 100 - 50],
              scale: [1, Math.random() * 2 + 0.5],
              opacity: [0.7, 0.1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      {/* Interactive cursor effect */}
      <div className="fixed inset-0 pointer-events-none z-50">
        <motion.div
          className="w-6 h-6 rounded-full bg-white/30 backdrop-blur-sm"
          animate={{
            x: scrollY,
            y: scrollY,
          }}
          transition={{
            type: "spring",
            damping: 10,
            stiffness: 50,
            restDelta: 0.001
          }}
        />
      </div>
    </div>
  )
}

export default ProjectsComponent;