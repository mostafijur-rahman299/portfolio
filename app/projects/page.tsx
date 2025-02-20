"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { ArrowRight, ExternalLink, Star, Search, Sparkles, Github } from "lucide-react"
import { projectData } from "@/lib/utils"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"

export default function ProjectsSection() {
  const [selectedFilter, setSelectedFilter] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const router = useRouter()
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
      <section className="container mx-auto px-4 py-6 sm:py-8 lg:py-12 relative">
        {/* Subtle gradient backgrounds */}
        <div className="absolute top-0 right-0 w-[200px] sm:w-[300px] lg:w-[400px] h-[200px] sm:h-[300px] lg:h-[400px] bg-gradient-to-br from-yellow-100/20 via-amber-50/10 to-transparent rounded-full -z-10 blur-2xl" />
        <div className="absolute bottom-0 left-0 w-[200px] sm:w-[300px] lg:w-[400px] h-[200px] sm:h-[300px] lg:h-[400px] bg-gradient-to-tr from-emerald-50/20 via-emerald-50/5 to-transparent rounded-full -z-10 blur-2xl" />
        
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center mb-8 sm:mb-10"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-slate-900 tracking-tight mb-3 relative inline-block">
            Featured{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-emerald-500 bg-clip-text text-transparent">
              Projects
            </span>
            <div className="absolute -top-3 -right-3 w-6 h-6">
              <Sparkles className="w-full h-full text-yellow-400 opacity-75 animate-pulse" />
            </div>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed px-4">
            Explore my portfolio of innovative solutions across web, mobile and desktop development
          </p>
        </motion.div>

        <div className="flex flex-col items-center gap-3 sm:gap-4 mb-8 sm:mb-10">
          {/* Search Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="w-full max-w-lg relative"
          >
            <input
              type="text"
              placeholder="Search projects..."
              className="w-full px-4 py-2.5 rounded-lg bg-white/80 backdrop-blur-sm border border-slate-200 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 outline-none text-sm text-slate-700 shadow-md transition-all duration-200"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          </motion.div>

          {/* Filters */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="flex flex-wrap gap-2 justify-center bg-white/50 backdrop-blur-sm p-2 rounded-xl shadow-md border border-white/20"
          >
            {filters.map((filter, index) => (
              <motion.div
                key={filter.value}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              >
                <Button
                  onClick={() => setSelectedFilter(filter.value)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 hover:scale-102
                    ${selectedFilter === filter.value 
                      ? `bg-gradient-to-r ${filter.gradient} text-white shadow-md` 
                      : 'bg-white/70 backdrop-blur-sm text-slate-600 hover:bg-yellow-50'
                    }`}
                >
                  <span className="text-sm mr-1">{filter.icon}</span>
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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto"
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
                  <div className="relative h-48 sm:h-56 lg:h-64 w-full group-hover:shadow-lg transition-all duration-300">
                    <div className={`absolute inset-0 ${project.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300 z-10`} />
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-4 sm:p-5 lg:p-6 flex-1 flex flex-col">
                    <h3 className="text-xl sm:text-2xl font-serif text-slate-900 mb-2 sm:mb-4 group-hover:text-emerald-600 transition-colors duration-300">{project.title}</h3>
                    <p className="text-sm sm:text-base text-slate-600 mb-4 sm:mb-6 line-clamp-2">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                      {project.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 sm:px-2.5 py-0.5 sm:py-1 bg-white/70 backdrop-blur-sm rounded-full text-xs font-medium text-slate-700 border border-slate-200 hover:bg-emerald-50 hover:border-emerald-200 transition-all duration-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-2 sm:gap-3 mt-auto">
                      <Button
                        variant="outline"
                        className="flex-1 h-8 sm:h-9 text-xs sm:text-sm border-2 border-slate-200"
                        onClick={() => router.push(`/projects/${project.slug}`)}
                      >
                        Learn More
                        <ArrowRight className="ml-1 sm:ml-1.5 w-3 sm:w-4 h-3 sm:h-4" />
                      </Button>
                      
                      {project.demoLink && (
                        <a
                          href={project.demoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="h-8 sm:h-9 px-3 sm:px-4 inline-flex items-center justify-center rounded-lg text-xs sm:text-sm font-semibold bg-transparent text-slate-600 hover:text-emerald-600 transition-all duration-300 hover:scale-105 border-2 border-slate-200 hover:border-emerald-400"
                        >
                          Demo
                          <ExternalLink className="ml-1 sm:ml-1.5 w-3 sm:w-4 h-3 sm:h-4" />
                        </a>
                      )}
                      {project.githubLink && (
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="h-8 sm:h-9 w-8 sm:w-9 flex items-center justify-center rounded-lg bg-white/80 text-slate-600 shadow-md hover:bg-yellow-100 transition-all duration-300 hover:scale-105 hover:text-black hover:shadow-xl border-2 border-transparent hover:border-yellow-400"
                        >
                          <Github className="w-3 sm:w-4 h-3 sm:h-4" />
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
