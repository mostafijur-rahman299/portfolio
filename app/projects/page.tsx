"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { ArrowRight, ExternalLink, Star, Search, Sparkles, Github } from "lucide-react"
import { projectData } from "@/lib/utils"
import { motion } from "framer-motion"

export default function ProjectsSection() {
  const [selectedFilter, setSelectedFilter] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")

  const projects = projectData

  const filters = [
    { label: "All Projects", value: "all", gradient: "from-amber-400 to-amber-500", icon: "✨" },
    { label: "Web Apps", value: "web-app", gradient: "from-blue-400 to-blue-500", icon: "🌐" },
    { label: "Mobile Apps", value: "mobile-app", gradient: "from-emerald-400 to-emerald-500", icon: "📱" },
    { label: "AI & ML", value: "ai-ml", gradient: "from-purple-400 to-purple-500", icon: "🤖" }
  ]

  const filteredProjects = projects
    .filter(p => 
      (selectedFilter === "all" || p.category === selectedFilter) &&
      (searchQuery === "" ? true : 
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    )

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#faf9f6] via-[#f8f7f4] to-[#faf9f6]">
      <section className="container mx-auto px-4 py-16 relative">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-yellow-200/30 via-amber-100/20 to-transparent rounded-full -z-10 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-gradient-to-tr from-emerald-100/20 via-emerald-50/10 to-transparent rounded-full -z-10 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-r from-purple-200/10 via-pink-100/5 to-transparent rounded-full -z-10 blur-3xl" />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-serif text-slate-900 tracking-tight mb-8 relative inline-block">
            Featured{" "}
            <span className="bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-600 bg-clip-text text-transparent">
              Projects
            </span>
            <div className="absolute -top-6 -right-6 w-12 h-12">
              <Sparkles className="w-full h-full text-yellow-400 opacity-75 animate-pulse" />
            </div>
          </h2>
          <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Explore my portfolio of innovative solutions across web, mobile and desktop development
          </p>
        </motion.div>

        <div className="flex flex-col items-center gap-6 mb-20">
          {/* Search Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full max-w-2xl relative group"
          >
            <input
              type="text"
              placeholder="Search projects by name, description or technology..."
              className="w-full px-6 py-4 rounded-2xl bg-white/90 backdrop-blur-sm border-2 border-slate-200 focus:border-emerald-400 focus:ring-4 focus:ring-emerald-400/20 outline-none text-slate-700 text-base shadow-lg transition-all duration-300"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          </motion.div>

          {/* Filters */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4 justify-center bg-white/60 backdrop-blur-lg p-4 rounded-3xl shadow-lg border border-white/30"
          >
            {filters.map((filter, index) => (
              <motion.div
                key={filter.value}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              >
                <Button
                  onClick={() => setSelectedFilter(filter.value)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 hover:scale-105
                    ${selectedFilter === filter.value 
                      ? `bg-gradient-to-r ${filter.gradient} text-white shadow-lg` 
                      : 'bg-white/90 backdrop-blur-sm text-slate-600 hover:bg-yellow-100'
                    }`}
                >
                  <span className="text-base mr-1.5">{filter.icon}</span>
                  {filter.label}
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              className="h-full group"
            >
              <Card className="h-full bg-white/80 backdrop-blur-sm border-2 border-transparent transition-all duration-300 group-hover:border-emerald-400 group-hover:-translate-y-2 shadow-lg group-hover:shadow-xl overflow-hidden">
                <CardContent className="p-0 h-full flex flex-col">
                  <div className="relative h-64 w-full group-hover:shadow-lg transition-all duration-300">
                    <div className={`absolute inset-0 ${project.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300 z-10`} />
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-2xl font-serif text-slate-900 mb-4 group-hover:text-emerald-600 transition-colors duration-300">{project.title}</h3>
                    <p className="text-slate-600 mb-6 line-clamp-2">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2.5 py-1 bg-white/70 backdrop-blur-sm rounded-full text-xs font-medium text-slate-700 border border-slate-200 hover:bg-emerald-50 hover:border-emerald-200 transition-all duration-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-3 mt-auto">
                      <Button
                        variant="outline"
                        className="flex-1 h-9 border-2 border-slate-200 hover:border-emerald-400 text-slate-700 hover:text-emerald-600 transition-all duration-300 text-sm"
                      >
                        Learn More
                        <ArrowRight className="ml-1.5 w-4 h-4" />
                      </Button>
                      
                      {project.demoLink && (
                        <a
                          href={project.demoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`h-9 px-4 inline-flex items-center justify-center rounded-lg text-sm font-semibold bg-gradient-to-r ${project.color} text-white shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 hover:brightness-110`}
                        >
                          Live Demo
                          <ExternalLink className="ml-1.5 w-4 h-4" />
                        </a>
                      )}
                      {project.githubLink && (
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="h-9 w-9 flex items-center justify-center rounded-lg bg-white/80 text-slate-600 shadow-md hover:bg-yellow-100 transition-all duration-300 hover:scale-105 hover:text-black hover:shadow-xl border-2 border-transparent hover:border-yellow-400"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  )
}
