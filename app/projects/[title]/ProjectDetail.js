'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, ExternalLink, Github, Calendar, Users, Code } from 'lucide-react'
import { Button } from '@/components/Button'
import { Badge } from '@/components/Badge'


export default function ProjectDetails({ projectData }) {
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
              <h2 className="text-2xl font-semibold mb-2">Project Project</h2>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Calendar className="mr-2 h-5 w-5" />
                  <span>
                    {projectData.startDate} - {projectData.endDate}
                  </span>
                </div>
                <div className="flex items-center">
                  <Users className="mr-2 h-5 w-5" />
                  <span>{projectData.teamSize} Team Members</span>
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
              {projectData.github ? (
                <Button variant="outline" asChild>
                  <a href={projectData.github} target="_blank" rel="noopener noreferrer">
                    GitHub <Github className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              ): (
                <p className="text-sm text-gray-500">
                  This project is not open source. I&apos;m not allowed to share the code.
                </p>
              )}
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
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="text-3xl font-semibold mb-4">My Role</h2>
          <p className="text-lg leading-relaxed">{projectData.myRole}</p>
        </motion.div>
      </div>
    </div>
  )
}
