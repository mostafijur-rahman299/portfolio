import React, { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, ExternalLink, Github, Calendar, Users, Code, Mouse } from 'lucide-react'
import { Button } from '@/components/Button'
import { Badge } from '@/components/Badge'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/Card'

export default function ProjectDetails({ projectData }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % projectData.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + projectData.images.length) % projectData.images.length)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-700 text-white overflow-hidden">
      {/* Background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/assets/images/circuit-pattern.svg')] opacity-5"></div>
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-3/4 right-0 w-96 h-96 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-32 pb-16 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-pink-200">{projectData.title}</h1>
          <p className="text-xl mb-8 text-indigo-200">{projectData.description}</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="bg-white/10 backdrop-blur-md overflow-hidden border-none transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/20">
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-lg">
                  <Image
                    src={projectData.images[currentImageIndex] || "/placeholder.svg"}
                    alt={`Project image ${currentImageIndex + 1}`}
                    width={800}
                    height={600}
                    className="w-full h-[400px] object-cover"
                  />
                  <Button
                    variant="secondary"
                    size="icon"
                    className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/20 hover:bg-white/30"
                    onClick={prevImage}
                  >
                    <ArrowLeft className="h-6 w-6" />
                  </Button>
                  <Button
                    variant="secondary"
                    size="icon"
                    className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/20 hover:bg-white/30"
                    onClick={nextImage}
                  >
                    <ArrowRight className="h-6 w-6" />
                  </Button>
                </div>
              </CardContent>
            </Card>
            <div className="flex justify-center mt-4 space-x-2">
              {projectData.images.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full ${
                    index === currentImageIndex ? 'bg-pink-500' : 'bg-white/30'
                  }`}
                  onClick={() => setCurrentImageIndex(index)}
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
            <Card className="bg-white/10 backdrop-blur-md overflow-hidden border-none transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/20">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-pink-300">Project Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center text-indigo-200">
                  <Calendar className="mr-2 h-5 w-5" />
                  <span>
                    {projectData.startDate} - {projectData.endDate}
                  </span>
                </div>
                <div className="flex items-center text-indigo-200">
                  <Users className="mr-2 h-5 w-5" />
                  <span>{projectData.teamSize} Team Members</span>
                </div>
                <div className="flex items-center text-indigo-200">
                  <Code className="mr-2 h-5 w-5" />
                  <span>{projectData.skills.length} Technologies Used</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-md overflow-hidden border-none transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/20">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-pink-300">Tech Stack</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {projectData.skills.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="bg-white/20 text-white">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="flex flex-col space-y-4">
              {projectData.demo_link && (
                <Button asChild className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700">
                  <a href={projectData.demo_link} target="_blank" rel="noopener noreferrer">
                    Live Demo <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              )}
              {projectData.github ? (
                <Button variant="outline" asChild className="w-full border-white/40 text-white bg-white/10 hover:bg-white/20">
                  <a href={projectData.github} target="_blank" rel="noopener noreferrer">
                    GitHub <Github className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              ) : (
                <p className="text-sm text-indigo-200">
                  This project is not open source. I&apos;m not allowed to share the code.
                </p>
              )}
              <Button asChild className="bg-gradient-to-r">
                <Link href="/#contact">
                  Contact Me <ArrowRight className="ml-2 h-4 w-4" />
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
          <Card className="bg-white/10 backdrop-blur-md overflow-hidden border-none transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/20">
            <CardHeader>
              <CardTitle className="text-3xl font-semibold text-pink-300">About the Project</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg leading-relaxed text-indigo-200">{projectData.longDescription}</p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Card className="bg-white/10 backdrop-blur-md overflow-hidden border-none transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/20">
            <CardHeader>
              <CardTitle className="text-3xl font-semibold text-pink-300">My Role</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg leading-relaxed text-indigo-200">{projectData.myRole}</p>
            </CardContent>
          </Card>
        </motion.div>
      </div>      
    </div>
  )
}

