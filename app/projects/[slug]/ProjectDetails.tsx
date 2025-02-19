"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowLeft, ArrowRight, ExternalLink, Github, Calendar, Users, Code, ChevronDown, Star, Link as LinkIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ProjectDetails({ projectData }: { projectData: any }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % projectData.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + projectData.images.length) % projectData.images.length)
  }

  // Auto-advance images every 5 seconds
  useEffect(() => {
    if (!isHovered) {
      const timer = setInterval(nextImage, 5000)
      return () => clearInterval(timer)
    }
  }, [isHovered])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900">
      {/* Enhanced Background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/assets/images/circuit-pattern.svg')] opacity-5"></div>
        <motion.div
          className="absolute top-1/4 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute top-3/4 right-0 w-96 h-96 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{
            x: [0, 50, 0],
            y: [0, -100, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 18,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-32 pb-16 max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <motion.h1 
            className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300"
            whileHover={{ scale: 1.02 }}
          >
            {projectData.title}
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-8 text-indigo-200 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {projectData.description}
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
          >
            <Card className="bg-white/5 backdrop-blur-md overflow-hidden border border-white/10 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20">
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-lg">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentImageIndex}
                      initial={{ opacity: 0, scale: 1.1 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Image
                        src={projectData.images[currentImageIndex] || "/placeholder.svg"}
                        alt={`Project image ${currentImageIndex + 1}`}
                        width={1200}
                        height={800}
                        className="w-full h-[500px] object-cover transform hover:scale-105 transition-transform duration-500"
                        priority
                      />
                    </motion.div>
                  </AnimatePresence>
                  <Button
                    variant="secondary"
                    size="icon"
                    className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 backdrop-blur-sm"
                    onClick={prevImage}
                  >
                    <ArrowLeft className="h-6 w-6" />
                  </Button>
                  <Button
                    variant="secondary"
                    size="icon"
                    className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 backdrop-blur-sm"
                    onClick={nextImage}
                  >
                    <ArrowRight className="h-6 w-6" />
                  </Button>
                </div>
              </CardContent>
            </Card>
            <div className="flex justify-center mt-4 space-x-2">
              {projectData.images.map((_, index: number) => (
                <motion.button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    index === currentImageIndex ? "bg-purple-500" : "bg-white/30"
                  }`}
                  onClick={() => setCurrentImageIndex(index)}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="bg-white/5 backdrop-blur-md overflow-hidden border border-white/10 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300">
                  Project Overview
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <motion.div 
                  className="flex items-center text-indigo-200"
                  whileHover={{ x: 5 }}
                >
                  <Calendar className="mr-2 h-5 w-5 text-purple-400" />
                  <span>
                    {projectData.startDate} - {projectData.endDate}
                  </span>
                </motion.div>
                <motion.div 
                  className="flex items-center text-indigo-200"
                  whileHover={{ x: 5 }}
                >
                  <Users className="mr-2 h-5 w-5 text-purple-400" />
                  <span>{projectData.teamSize} Team Members</span>
                </motion.div>
                <motion.div 
                  className="flex items-center text-indigo-200"
                  whileHover={{ x: 5 }}
                >
                  <Code className="mr-2 h-5 w-5 text-purple-400" />
                  <span>{projectData.skills.length} Technologies Used</span>
                </motion.div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-md overflow-hidden border border-white/10 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300">
                  Tech Stack
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {projectData.skills.map((skill: string, index: number) => (
                    <motion.div 
                      key={index} 
                      whileHover={{ scale: 1.1, rotate: [-1, 1, -1, 0] }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Badge 
                        variant="secondary" 
                        className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-white border border-white/10 backdrop-blur-sm"
                      >
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="flex flex-col space-y-4">
              {projectData.demoLink && (
                <Button
                  asChild
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-all duration-300 group"
                >
                  <a href={projectData.demoLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                    Live Demo 
                    <motion.span
                      className="ml-2"
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ExternalLink className="h-4 w-4" />
                    </motion.span>
                  </a>
                </Button>
              )}
              {projectData.githubLink ? (
                <Button
                  variant="outline"
                  asChild
                  className="w-full border-white/20 text-white bg-white/5 hover:bg-white/10 transition-all duration-300"
                >
                  <a href={projectData.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                    View Source
                    <Github className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              ) : (
                <p className="text-sm text-indigo-200 text-center italic">
                  Private repository - Code not publicly available
                </p>
              )}
              <Button
                asChild
                className="w-full bg-gradient-to-r from-indigo-500 to-blue-500 hover:from-indigo-600 hover:to-blue-600 transition-all duration-300"
              >
                <Link href="/#contact" className="flex items-center justify-center">
                  Get in Touch
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </motion.span>
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Tabs defaultValue="about" className="w-full">
            <TabsList className="w-full bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-1">
              <TabsTrigger value="about" className="text-white data-[state=active]:bg-white/10">
                About Project
              </TabsTrigger>
              <TabsTrigger value="role" className="text-white data-[state=active]:bg-white/10">
                My Role
              </TabsTrigger>
              <TabsTrigger value="challenges" className="text-white data-[state=active]:bg-white/10">
                Challenges
              </TabsTrigger>
            </TabsList>
            <TabsContent value="about">
              <Card className="bg-white/5 backdrop-blur-md overflow-hidden border border-white/10 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20">
                <CardHeader>
                  <CardTitle className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300">
                    Project Details
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg leading-relaxed text-indigo-200">
                    {projectData.longDescription}
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="role">
              <Card className="bg-white/5 backdrop-blur-md overflow-hidden border border-white/10 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20">
                <CardHeader>
                  <CardTitle className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300">
                    My Contribution
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg leading-relaxed text-indigo-200">
                    {projectData.myRole}
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="challenges">
              <Card className="bg-white/5 backdrop-blur-md overflow-hidden border border-white/10 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20">
                <CardHeader>
                  <CardTitle className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300">
                    Technical Challenges
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg leading-relaxed text-indigo-200">
                    {projectData.challenges || "No specific challenges were documented for this project."}
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <Button
            variant="ghost"
            size="lg"
            className="text-white hover:text-purple-300 transition-colors duration-300 group"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Back to Top 
            <motion.span
              className="ml-2 group-hover:-translate-y-1 transition-transform duration-300"
            >
              <ChevronDown className="h-4 w-4 rotate-180" />
            </motion.span>
          </Button>
        </motion.div>
      </div>

      {/* Floating action button for quick navigation */}
      <AnimatePresence>
        {isScrolled && (
          <motion.div
            className="fixed bottom-8 right-8 z-50"
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            <Button
              variant="secondary"
              size="icon"
              className="rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white shadow-lg"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <motion.span
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ChevronDown className="h-6 w-6 rotate-180" />
              </motion.span>
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
