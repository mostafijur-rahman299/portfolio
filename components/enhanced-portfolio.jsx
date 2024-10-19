'use client'

import React, { useState, useRef, useEffect } from "react"
import { motion, useAnimation, useInView, AnimatePresence } from "framer-motion"
import { ArrowRight, ExternalLink, Github, Linkedin, Twitter, Code, Zap, ChevronDown, Mail, Menu, X, Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Image from "next/image"

const projects = [
  {
    title: "CSS for the shell of it",
    description: "Not all work needs to lead somewhere.",
    image: "/placeholder.svg?height=100&width=100",
    link: "#",
    github: "#",
    color: "from-emerald-400 to-cyan-400",
    skills: ["CSS", "Design", "Creativity"],
  },
  {
    title: "Neon Nexus",
    description: "A futuristic web platform for digital art exhibitions.",
    image: "/placeholder.svg?height=600&width=800",
    link: "#",
    github: "#",
    color: "from-pink-500 to-purple-500",
    skills: ["React", "Three.js", "WebGL", "Node.js", "MongoDB"],
  },
  // ... (include the rest of the projects)
]

const allTags = Array.from(new Set(projects.flatMap(project => project.skills)))

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
            className={`mr-2 mb-2 cursor-pointer ${isActive ? 'bg-primary text-primary-foreground' : 'bg-primary/10 text-primary hover:bg-primary/20'}`}
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

const NavItem = ({ href, children, isActive }) => (
  <motion.a
    href={href}
    className={`text-sm font-medium transition-colors duration-300 ${
      isActive ? 'text-emerald-800 font-bold' : 'text-emerald-700 hover:text-emerald-900'
    }`}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    {children}
  </motion.a>
)

const SocialIcon = ({ Icon, href }) => (
  <motion.a
    href={href}
    className="text-emerald-700 hover:text-emerald-900 transition-colors duration-300"
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.2, rotate: 5 }}
    whileTap={{ scale: 0.9 }}
  >
    <Icon className="h-6 w-6" />
  </motion.a>
)

export function EnhancedPortfolioJsx() {
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const [selectedTags, setSelectedTags] = useState([])
  const [activeSection, setActiveSection] = useState('notes')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
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
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 50)

      const sections = ['work', 'about', 'play', 'notes', 'contact']
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  }

  const filteredProjects = selectedTags.length > 0
    ? projects.filter(project => selectedTags.every(tag => project.skills.includes(tag)))
    : projects

  const toggleTag = (tag) => {
    setSelectedTags(prev => 
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-lime-100 via-emerald-200 to-teal-300 text-foreground overflow-hidden transition-all duration-500">
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      >
        <nav className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center md:justify-center">
            <motion.div 
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
              }`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="hidden md:flex space-x-6">
                <NavItem href="#work" isActive={activeSection === 'work'}>Work</NavItem>
                <NavItem href="#about" isActive={activeSection === 'about'}>About</NavItem>
                <NavItem href="#play" isActive={activeSection === 'play'}>Play</NavItem>
                <NavItem href="#notes" isActive={activeSection === 'notes'}>Notes</NavItem>
                <NavItem href="#contact" isActive={activeSection === 'contact'}>Contact</NavItem>
              </div>
              <div className="md:hidden">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  aria-label="Toggle menu"
                >
                  {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </Button>
              </div>
            </motion.div>
          </div>
        </nav>
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="md:hidden bg-white/80 backdrop-blur-md p-4"
            >
              <div className="flex flex-col space-y-4">
                <NavItem href="#work" isActive={activeSection === 'work'}>Work</NavItem>
                <NavItem href="#about" isActive={activeSection === 'about'}>About</NavItem>
                <NavItem href="#play" isActive={activeSection === 'play'}>Play</NavItem>
                <NavItem href="#notes" isActive={activeSection === 'notes'}>Notes</NavItem>
                <NavItem href="#contact" isActive={activeSection === 'contact'}>Contact</NavItem>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      <main className="relative z-10 pt-32 pb-16" ref={containerRef}>
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-8 text-emerald-800"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              Notes.
            </motion.h1>
            <motion.p 
              className="text-xl text-emerald-700 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Some thoughts, reflections, & notes on design and development,
              <br className="hidden md:inline" />
              along with some latest work in progress.
            </motion.p>
          </motion.div>
          
          <motion.div
            className="flex flex-wrap justify-center gap-2 mb-8"
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
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
            variants={containerVariants}
            initial="hidden"
            animate={controls}
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                className="relative group"
                variants={itemVariants}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
              >
                <motion.div
                  className="relative overflow-hidden rounded-2xl shadow-lg"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={800}
                    height={600}
                    className="w-full h-64 object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                  />
                  <motion.div 
                    className={`absolute inset-0 opacity-70 transition-opacity duration-300 group-hover:opacity-90 bg-gradient-to-br ${project.color}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.7 }}
                    whileHover={{ opacity: 0.9 }}
                  />
                  <motion.div
                    className="absolute inset-0 flex flex-col justify-end p-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h2 className="text-2xl font-bold mb-2 text-white">{project.title}</h2>
                    <p className="text-sm mb-4 text-white">{project.description}</p>
                    <div className="mb-4 flex flex-wrap">
                      {project.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="secondary" className="mr-2 mb-2 bg-white/20 text-white">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex space-x-4">
                      <Button
                        variant="secondary"
                        size="sm"
                        className="bg-white/20 text-white hover:bg-white hover:text-black transition-colors duration-300"
                        asChild
                      >
                        <a href={project.link}>
                          View Project
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                      <Button
                        variant="secondary"
                        size="sm"
                        className="bg-white/20 text-white hover:bg-white hover:text-black transition-colors duration-300"
                        asChild
                      >
                        <a href={project.github}>
                          GitHub
                          <Github className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </motion.div>
                </motion.div>
                <AnimatePresence>
                  {hoveredIndex === index && (
                    <motion.div
                      className="absolute -top-2 -right-2 bg-white rounded-full p-2 shadow-lg"
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      exit={{ scale: 0, rotate: 180 }}
                      transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    >
                      <Zap className="h-6 w-6 text-black" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </main>

      <motion.footer
        className="relative z-10 bg-transparent py-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <div  className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="md:col-span-2">
              <motion.h3 
                className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-emerald-600  to-teal-600"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2, duration: 0.5 }}
              >
                Alex Chen
              </motion.h3>
              <motion.p 
                className="text-emerald-700 mb-6"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.4, duration: 0.5 }}
              >
                Passionate about creating innovative digital solutions that make a difference in people's lives and push the boundaries of what's possible in technology.
              </motion.p>
              <motion.div 
                className="flex space-x-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6, duration: 0.5 }}
              >
                <SocialIcon Icon={Github} href="#" />
                <SocialIcon Icon={Linkedin} href="#" />
                <SocialIcon Icon={Twitter} href="#" />
                <SocialIcon Icon={Mail} href="#" />
              </motion.div>
            </div>
            <div>
              <motion.h4 
                className="text-xl font-semibold mb-4 text-emerald-800"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.8, duration: 0.5 }}
              >
                Quick Links
              </motion.h4>
              <motion.ul 
                className="space-y-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2, duration: 0.5 }}
              >
                <li><a href="#work" className="text-emerald-700 hover:text-emerald-900 transition-colors duration-300">Work</a></li>
                <li><a href="#about" className="text-emerald-700 hover:text-emerald-900 transition-colors duration-300">About</a></li>
                <li><a href="#play" className="text-emerald-700 hover:text-emerald-900 transition-colors duration-300">Play</a></li>
                <li><a href="#notes" className="text-emerald-700 hover:text-emerald-900 transition-colors duration-300">Notes</a></li>
                <li><a href="#contact" className="text-emerald-700 hover:text-emerald-900 transition-colors duration-300">Contact</a></li>
              </motion.ul>
            </div>
            <div>
              <motion.h4 
                className="text-xl font-semibold mb-4 text-emerald-800"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.2, duration: 0.5 }}
              >
                Get in Touch
              </motion.h4>
              <motion.p 
                className="text-emerald-700 mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.4, duration: 0.5 }}
              >
                Interested in working together? Let's connect and create something amazing.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.6, duration: 0.5 }}
              >
                <Button variant="outline" size="lg" className="w-full bg-emerald-700 text-white hover:bg-emerald-800">
                  Contact Me
                  <Mail className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
            </div>
          </div>
          <motion.div 
            className="mt-12 pt-8 border-t border-emerald-200 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.8, duration: 0.5 }}
          >
            <p className="text-emerald-700">© 2024 Alex Chen. All rights reserved.</p>
          </motion.div>
        </div>
      </motion.footer>
    </div>
  )
}