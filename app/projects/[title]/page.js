'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, ExternalLink, Github, Calendar, Users, Code } from 'lucide-react'
import { Button } from '@/components/Button'
import { Badge } from '@/components/Badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/Avatar'

// Mock data for the project (replace with actual data fetching in a real application)
const projectData = {
  title: "Neon Nexus",
  description: "A futuristic web platform for digital art exhibitions, pushing the boundaries of online galleries with immersive 3D experiences and real-time collaboration features.",
  longDescription: "Neon Nexus revolutionizes the way digital art is showcased and experienced online. By leveraging cutting-edge web technologies, we've created a platform that not only displays artwork but immerses viewers in a virtual gallery environment. Artists can curate their exhibitions in 3D spaces, while art enthusiasts can explore these spaces as if they were walking through a physical gallery. The platform also features real-time collaboration tools, allowing artists and curators to work together seamlessly, regardless of their physical location.",
  images: [
    "/placeholder.svg?height=600&width=800",
    "/placeholder.svg?height=600&width=800",
    "/placeholder.svg?height=600&width=800",
    "/placeholder.svg?height=600&width=800",
  ],
  link: "#",
  github: "#",
  startDate: "2023-01-15",
  endDate: "2023-12-31",
  skills: ["React", "Three.js", "WebGL", "Node.js", "MongoDB"],
  teamMembers: [
    { name: "Alex Chen", role: "Lead Developer", avatar: "/placeholder.svg?height=40&width=40" },
    { name: "Sam Taylor", role: "UI/UX Designer", avatar: "/placeholder.svg?height=40&width=40" },
    { name: "Jordan Lee", role: "3D Artist", avatar: "/placeholder.svg?height=40&width=40" },
    { name: "Casey Morgan", role: "Backend Developer", avatar: "/placeholder.svg?height=40&width=40" },
  ],
}

export default function Details() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % projectData.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + projectData.images.length) % projectData.images.length)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-lime-100 via-emerald-200 to-teal-300 text-emerald-800">
      <div className="container mx-auto px-4 pt-32 pb-16 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl font-bold mb-6">{projectData.title}</h1>
          <p className="text-xl mb-8">{projectData.description}</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative overflow-hidden rounded-2xl shadow-lg">
              <Image
                src={projectData.images[currentImageIndex]}
                alt={`Project image ${currentImageIndex + 1}`}
                width={800}
                height={600}
                className="w-full h-[400px] object-cover"
              />
              <Button
                variant="secondary"
                size="icon"
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/80 hover:bg-white"
                onClick={prevImage}
              >
                <ArrowLeft className="h-6 w-6" />
              </Button>
              <Button
                variant="secondary"
                size="icon"
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/80 hover:bg-white"
                onClick={nextImage}
              >
                <ArrowRight className="h-6 w-6" />
              </Button>
            </div>
            <div className="flex justify-center mt-4 space-x-2">
              {projectData.images.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full ${
                    index === currentImageIndex ? 'bg-emerald-600' : 'bg-emerald-300'
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
            <div>
              <h2 className="text-2xl font-semibold mb-2">Project Details</h2>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Calendar className="mr-2 h-5 w-5" />
                  <span>
                    {new Date(projectData.startDate).toLocaleDateString()} - {new Date(projectData.endDate).toLocaleDateString()}
                  </span>
                </div>
                <div className="flex items-center">
                  <Users className="mr-2 h-5 w-5" />
                  <span>{projectData.teamMembers.length} Team Members</span>
                </div>
                <div className="flex items-center">
                  <Code className="mr-2 h-5 w-5" />
                  <span>{projectData.skills.length} Technologies Used</span>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-2">Tech Stack</h2>
              <div className="flex flex-wrap gap-2">
                {projectData.skills.map((skill, index) => (
                  <Badge key={index} variant="secondary" className="bg-emerald-100 text-emerald-800">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="flex space-x-4">
              <Button asChild>
                <a href={projectData.link} target="_blank" rel="noopener noreferrer">
                  View Project <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href={projectData.github} target="_blank" rel="noopener noreferrer">
                  GitHub <Github className="ml-2 h-4 w-4" />
                </a>
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
          <h2 className="text-3xl font-semibold mb-4">About the Project</h2>
          <p className="text-lg leading-relaxed">{projectData.longDescription}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h2 className="text-3xl font-semibold mb-6">Team Members</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {projectData.teamMembers.map((member, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-md">
                <Avatar className="w-16 h-16 mb-4">
                  <AvatarImage src={member.avatar} alt={member.name} />
                  <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-emerald-600">{member.role}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
