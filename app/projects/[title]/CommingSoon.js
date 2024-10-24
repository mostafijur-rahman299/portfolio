"use client"

import React from "react"
import { motion } from "framer-motion"
import { Rocket, Github } from "lucide-react"
import { Button } from "@/components/Button"
import { Badge } from "@/components/Badge"
import { allProjects } from "@/app/projects/page"

export default function ComingSoon({ projectTitle }) {
  const projectData = allProjects.find(
    (project) => project.title === decodeURIComponent(projectTitle)
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-lime-100 via-emerald-200 to-teal-300 text-emerald-800 flex items-center justify-center">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl font-bold mb-6">{projectData?.title}</h1>
          <p className="text-xl mb-8">{projectData?.description}</p>

          <div className="flex justify-center flex-wrap gap-4 mb-8">
            {projectData?.skills?.map((skill, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="bg-emerald-100 text-emerald-800"
              >
                {skill}
              </Badge>
            ))}
          </div>

          <motion.div
            className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg mb-8"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Rocket className="w-16 h-16 mx-auto mb-4 text-emerald-600" />
            <h2 className="text-3xl font-semibold mb-4">Coming Soon</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button variant="outline" asChild>
              <a
                href={projectData?.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center"
              >
                <Github className="w-4 h-4 mr-2" />
                Follow on GitHub
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}