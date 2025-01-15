"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence, useAnimation } from "framer-motion"
import { Code, GraduationCap, Server, Database, Globe, Cloud, Cpu, GitBranch, Layers, Paintbrush, Smartphone, Briefcase, ChevronDown, ChevronRight } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/Card"
import { Button } from "@/components/Button"
import { Badge } from "@/components/Badge"

const skills = {
  backend: [
    { name: "Python, Django", icon: Server, level: "Advanced", progress: 90 },
    { name: "Django Rest Framework", icon: Server, level: "Intermediate", progress: 75 },
    { name: "PostgreSQL", icon: Database, level: "Intermediate", progress: 70 },
    { name: "MySQL", icon: Database, level: "Intermediate", progress: 65 },
    { name: "GraphQL", icon: Globe, level: "Beginner", progress: 40 },
  ],
  frontend: [
    { name: "React", icon: Code, level: "Advanced", progress: 95 },
    { name: "Next.js", icon: Server, level: "Advanced", progress: 90 },
    { name: "Tailwind CSS", icon: Code, level: "Intermediate", progress: 80 },
    { name: "CSS/SASS", icon: Paintbrush, level: "Advanced", progress: 85 },
    { name: "jQuery", icon: Smartphone, level: "Advanced", progress: 85 },
  ],
  devops: [
    { name: "Docker", icon: Cloud, level: "Intermediate", progress: 70 },
    { name: "CI/CD", icon: GitBranch, level: "Intermediate", progress: 75 },
    { name: "Kubernetes", icon: Layers, level: "Beginner", progress: 45 },
  ],
  other: [
    { name: "Git", icon: GitBranch, level: "Advanced", progress: 90 },
    { name: "Agile", icon: Cpu, level: "Advanced", progress: 85 },
  ],
}

const education = [
  {
    degree: "Bachelor of Science in Computer Science",
    school: "European University Of Bangladesh",
    year: "2020 - 2024",
    description: "Focused on algorithms, data structures, and software engineering principles.",
    courses: ["Advanced Algorithms", "Machine Learning", "Database Systems", "Web Development"],
  },
  {
    degree: "Diploma in Computer Science",
    school: "Thakurgaon Polytechnic Institute",
    year: "2016 - 2020",
    description: "Specialized in computer hardware and software.",
    courses: ["Computer Architecture", "Networking", "Programming Fundamentals", "Operating Systems"],
  },
]

const services = [
  { 
    name: "Full-Stack Development", 
    icon: Code, 
    description: "I develop full-stack applications using the latest technologies, ensuring seamless integration and functionality across all parts of the stack.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "PostgreSQL"],
  },
  { 
    name: "Frontend Development", 
    icon: Paintbrush, 
    description: "I create responsive and dynamic user interfaces with modern JavaScript frameworks and CSS pre-processors.",
    technologies: ["React", "Next.js", "Tailwind CSS", "SASS", "TypeScript"],
  },
  { 
    name: "API Integration", 
    icon: Globe, 
    description: "I integrate APIs to enhance the functionality of applications, focusing on seamless data exchange and system interoperability.",
    technologies: ["RESTful APIs", "GraphQL", "Axios", "Fetch API"],
  },
  { 
    name: "DevOps & Deployment", 
    icon: Cloud, 
    description: "I deploy applications using Docker, Kubernetes, and CI/CD pipelines, emphasizing automation, scalability, and maintainability.",
    technologies: ["Docker", "Kubernetes", "Jenkins", "GitHub Actions", "AWS"],
  },
  { 
    name: "Performance Optimization", 
    icon: Cpu, 
    description: "I optimize applications for performance and scalability, reducing load times and improving user experience.",
    technologies: ["Lazy Loading", "Code Splitting", "Caching", "Database Indexing"],
  },
  { 
    name: "Consulting", 
    icon: Briefcase, 
    description: "I provide expert consulting services to help businesses strategize, implement, and manage their technology solutions effectively.",
    technologies: ["Technical Architecture", "Code Review", "Best Practices", "Team Training"],
  },
]

function AboutComponent() {
  const [activeTab, setActiveTab] = useState("skills")
  const [expandedService, setExpandedService] = useState(null)
  const [hoveredSkill, setHoveredSkill] = useState(null)
  const controls = useAnimation()

  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, staggerChildren: 0.1 }
    })
  }, [activeTab, controls])

  const tabVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  }

  return (
    <>
    <div className="min-h-screen bg-gradient-to-br from-indigo-800 via-purple-700 to-pink-600 text-white overflow-hidden py-16 px-32">
      <div className="container mx-auto px-4 py-16 max-w-6xl relative z-10">
        <motion.h1
          className="text-5xl sm:text-6xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-white to-pink-200"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Know More About Me
        </motion.h1>

        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-xl sm:text-2xl text-indigo-200 mb-6">
            Passionate Full-Stack Developer | Tech Innovator | Problem Solver
          </p>
          <Card className="bg-white/10 backdrop-blur-md overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-6 sm:p-8">
              <p className="text-lg sm:text-xl text-gray-300 mb-4">
                With over 4+ years of experience in the tech industry, I specialize in creating robust, scalable, and user-friendly applications. My expertise spans across the entire development stack, from crafting intuitive front-end interfaces to architecting efficient back-end systems.
              </p>
              <p className="text-lg sm:text-xl text-gray-300">
                I&apos;m driven by the challenge of turning complex problems into elegant solutions, always staying at the forefront of emerging technologies and best practices in software development.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <div className="mb-12">
          <div className="flex justify-center space-x-4 mb-8">
            {["skills", "education", "services"].map((tab) => (
              <Button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-lg capitalize transition-all duration-300 transform hover:scale-105  bg-white/10 overflow-hidden hover:shadow-lg hover:bg-pink-500/20 border-none ${activeTab === tab ? "bg-pink-500/50" : ""}`}
              >
                {tab}
              </Button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {activeTab === "skills" && (
              <motion.div
                key="skills"
                variants={tabVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {Object.entries(skills).map(([category, categorySkills]) => (
                    <Card key={category} className="bg-white/10 backdrop-blur-md overflow-hidden border-none transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/20">
                      <CardHeader>
                        <CardTitle className="text-2xl font-semibold text-pink-300 capitalize">
                          {category}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {categorySkills.map((skill, index) => (
                            <motion.div
                              key={skill.name}
                              variants={itemVariants}
                              className="relative"
                              onHoverStart={() => setHoveredSkill(skill.name)}
                              onHoverEnd={() => setHoveredSkill(null)}
                            >
                              <div className="flex items-center space-x-3 mb-2">
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center transform transition-all duration-300 hover:scale-110">
                                  <skill.icon className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                  <p className="text-sm font-medium text-gray-200">{skill.name}</p>
                                  <Badge variant="secondary" className="mt-1">
                                    {skill.level}
                                  </Badge>
                                </div>
                              </div>
                              {/* <Progress value={skill.progress} className="h-2 bg-gray-700" indicatorClassName="bg-gradient-to-r from-pink-500 to-purple-600" /> */}
                              {hoveredSkill === skill.name && (
                                <motion.div
                                  initial={{ opacity: 0, y: 10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  exit={{ opacity: 0, y: 10 }}
                                  className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs py-1 px-2 rounded"
                                >
                                  {skill.progress}%
                                </motion.div>
                              )}
                            </motion.div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === "education" && (
              <motion.div
                key="education"
                variants={tabVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {education.map((edu, index) => (
                    <Card key={edu.degree} className="bg-white/10 backdrop-blur-md overflow-hidden border-none transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/20">
                      <CardHeader className="relative pb-0">
                        <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-bl-full flex items-center justify-center transform transition-all duration-300 hover:scale-110">
                          <GraduationCap className="text-white w-8 h-8" />
                        </div>
                        <CardTitle className="text-2xl text-gray-200">{edu.degree}</CardTitle>
                        <CardDescription className="text-gray-300 text-lg">
                          {edu.school} | {edu.year}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-300 mb-4">{edu.description}</p>
                        <h4 className="text-lg font-semibold text-pink-300 mb-2">Key Courses:</h4>
                        <ul className="list-disc list-inside text-gray-300">
                          {edu.courses.map((course, idx) => (
                            <motion.li
                              key={idx}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.1 }}
                            >
                              {course}
                            </motion.li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === "services" && (
              <motion.div
                key="services"
                variants={tabVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {services.map((service, index) => (
                    <Card 
                      key={service.name} 
                      className="bg-white/10 backdrop-blur-md overflow-hidden border-none transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/20"
                    >
                      <CardHeader className="relative pb-0">
                        <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center transform transition-all duration-300 hover:scale-110">
                          <service.icon className="w-6 h-6 text-white" />
                        </div>
                        <CardTitle className="text-2xl text-gray-200">{service.name}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <motion.div
                          initial={{ height: 0 }}
                          animate={{ height: expandedService === service.name ? "auto" : "80px" }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <p className="text-gray-300 mb-4">{service.description}</p>
                          {expandedService === service.name && (
                            <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 0.2 }}
                            >
                              <h4 className="text-lg font-semibold text-pink-300 mb-2">Technologies:</h4>
                              <ul className="list-disc list-inside text-gray-300">
                                {service.technologies.map((tech, idx) => (
                                  <motion.li
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                  >
                                    {tech}
                                  </motion.li>
                                ))}
                              </ul>
                            </motion.div>
                          )}
                        </motion.div>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="mt-2"
                          onClick={() => setExpandedService(expandedService === service.name ? null : service.name)}
                        >
                          {expandedService === service.name ? "Read Less" : "Read More"}
                          <ChevronDown className={`ml-2 h-4 w-4 transition-transform duration-200 ${expandedService === service.name ? "rotate-180" : ""}`} />
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-3/4 right-0 w-64 h-64 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-64 h-64 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>
    </div>
    </>
  )
}

export default AboutComponent;