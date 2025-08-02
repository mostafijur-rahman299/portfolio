"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { ArrowRight, ExternalLink, Star, Search, Sparkles, Github, Filter, Grid, List, Calendar, Users, Code2 } from "lucide-react"
import { projectData } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"
import { useRouter } from "next/navigation"

export default function ProjectsSection() {
  const [selectedFilter, setSelectedFilter] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [viewMode, setViewMode] = useState("grid") // grid or list
  const [sortBy, setSortBy] = useState("newest") // newest, oldest, alphabetical
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()
  const projects = projectData

  // Simulate loading effect
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800)
    return () => clearTimeout(timer)
  }, [])

  const filters = [
    { label: "All Projects", value: "all", gradient: "from-amber-400 to-amber-500", icon: "✨", count: projects.length },
    { label: "Web Apps", value: "web-app", gradient: "from-blue-400 to-blue-500", icon: "🌐", count: projects.filter(p => p.category.includes("web-app")).length },
    { label: "Mobile Apps", value: "mobile-app", gradient: "from-emerald-400 to-emerald-500", icon: "📱", count: projects.filter(p => p.category.includes("mobile-app")).length },
  ]

  const sortOptions = [
    { label: "Newest First", value: "newest", icon: Calendar },
    { label: "Oldest First", value: "oldest", icon: Calendar },
    { label: "Alphabetical", value: "alphabetical", icon: Code2 },
  ]

  let filteredProjects = projects
    .filter(p => 
      (selectedFilter === "all" || p.category.includes(selectedFilter)) &&
      (searchQuery === "" ? true : 
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    )

  // Apply sorting
  if (sortBy === "newest") {
    filteredProjects = filteredProjects.sort((a, b) => b.id - a.id)
  } else if (sortBy === "oldest") {
    filteredProjects = filteredProjects.sort((a, b) => a.id - b.id)
  } else if (sortBy === "alphabetical") {
    filteredProjects = filteredProjects.sort((a, b) => a.title.localeCompare(b.title))
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#faf9f6] via-[#f8f7f4] to-[#faf9f6] flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <div className="w-16 h-16 border-4 border-emerald-200 border-t-emerald-500 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-slate-600 font-medium">Loading amazing projects...</p>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#faf9f6] via-[#f8f7f4] to-[#faf9f6]">
      <section className="container mx-auto px-4 py-6 sm:py-8 lg:py-12 relative">
        {/* Enhanced gradient backgrounds */}
        <div className="absolute top-0 right-0 w-[200px] sm:w-[300px] lg:w-[400px] h-[200px] sm:h-[300px] lg:h-[400px] bg-gradient-to-br from-yellow-100/20 via-amber-50/10 to-transparent rounded-full -z-10 blur-2xl" />
        <div className="absolute bottom-0 left-0 w-[200px] sm:w-[300px] lg:w-[400px] h-[200px] sm:h-[300px] lg:h-[400px] bg-gradient-to-tr from-emerald-50/20 via-emerald-50/5 to-transparent rounded-full -z-10 blur-2xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[400px] lg:w-[500px] h-[300px] sm:h-[400px] lg:h-[500px] bg-gradient-to-br from-blue-50/10 via-purple-50/5 to-transparent rounded-full -z-10 blur-3xl" />
        
        {/* Enhanced Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 mt-32"
        >
          <div className="relative inline-block mb-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-slate-900 tracking-tight mb-4 relative">
              My{" "}
              <span className="bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-600 bg-clip-text text-transparent">
                Projects
              </span>
              <div className="absolute -top-4 -right-4 w-8 h-8">
                <Sparkles className="w-full h-full text-yellow-400 opacity-75 animate-pulse" />
              </div>
            </h1>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-emerald-400 to-emerald-500 rounded-full"></div>
          </div>
          
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed px-4 mb-8">
            Discover my journey through innovative solutions, from web applications to mobile experiences. 
            Each project represents a unique challenge solved with creativity and technical expertise.
          </p>

          {/* Project Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-6 sm:gap-8 mb-8"
          >
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-emerald-600 mb-1">{projects.length}+</div>
              <div className="text-sm text-slate-600 font-medium">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-1">{projects.filter(p => p.category.includes("web-app")).length}</div>
              <div className="text-sm text-slate-600 font-medium">Web Apps</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-purple-600 mb-1">{projects.filter(p => p.category.includes("mobile-app")).length}</div>
              <div className="text-sm text-slate-600 font-medium">Mobile Apps</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-amber-600 mb-1">{new Set(projects.flatMap(p => p.skills)).size}+</div>
              <div className="text-sm text-slate-600 font-medium">Technologies</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Enhanced Controls Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-8 sm:mb-12"
        >
          {/* Search and View Controls */}
          <div className="flex flex-col lg:flex-row gap-4 mb-6">
            {/* Search Bar */}
            <div className="flex-1 max-w-2xl mx-auto lg:mx-0 relative">
              <input
                type="text"
                placeholder="Search projects by name, description, or technology..."
                className="w-full px-5 py-3 rounded-xl bg-white/80 backdrop-blur-sm border-2 border-slate-200 focus:border-emerald-400 focus:ring-4 focus:ring-emerald-400/20 outline-none text-slate-700 shadow-lg transition-all duration-300 placeholder:text-slate-400"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-12 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 hover:text-slate-600 transition-colors"
                >
                  ×
                </button>
              )}
            </div>

            {/* View Mode and Sort Controls */}
            <div className="flex gap-2 justify-center lg:justify-end">
              {/* View Mode Toggle */}
              <div className="flex bg-white/80 backdrop-blur-sm rounded-lg p-1 shadow-md border border-slate-200">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded-md transition-all duration-200 ${
                    viewMode === "grid" 
                      ? "bg-emerald-500 text-white shadow-md" 
                      : "text-slate-600 hover:bg-slate-100"
                  }`}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 rounded-md transition-all duration-200 ${
                    viewMode === "list" 
                      ? "bg-emerald-500 text-white shadow-md" 
                      : "text-slate-600 hover:bg-slate-100"
                  }`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>

              {/* Sort Dropdown */}
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-white/80 backdrop-blur-sm border-2 border-slate-200 rounded-lg px-4 py-2 pr-8 text-sm font-medium text-slate-700 shadow-md focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 outline-none transition-all duration-200"
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Filters */}
          <div className="flex flex-wrap gap-3 justify-center bg-white/60 backdrop-blur-sm p-4 rounded-2xl shadow-lg border border-white/30">
            {filters.map((filter, index) => (
              <motion.div
                key={filter.value}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
              >
                <Button
                  onClick={() => setSelectedFilter(filter.value)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg group relative overflow-hidden
                    ${selectedFilter === filter.value 
                      ? `bg-gradient-to-r ${filter.gradient} text-white shadow-lg border-2 border-transparent` 
                      : 'bg-white/80 backdrop-blur-sm text-slate-700 hover:bg-white border-2 border-slate-200 hover:border-emerald-300'
                    }`}
                >
                  <span className="text-base mr-2">{filter.icon}</span>
                  <span>{filter.label}</span>
                  <span className={`ml-2 px-2 py-0.5 rounded-full text-xs font-bold ${
                    selectedFilter === filter.value 
                      ? 'bg-white/20 text-white' 
                      : 'bg-slate-100 text-slate-600'
                  }`}>
                    {filter.count}
                  </span>
                </Button>
              </motion.div>
            ))}
          </div>

          {/* Results Summary */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.8 }}
            className="text-center mt-6"
          >
            <p className="text-slate-600 font-medium">
              {filteredProjects.length === 0 ? (
                <span className="text-amber-600">No projects found matching your criteria</span>
              ) : (
                <>
                  Showing <span className="font-bold text-emerald-600">{filteredProjects.length}</span> 
                  {filteredProjects.length === 1 ? ' project' : ' projects'}
                  {searchQuery && (
                    <span> matching "<span className="font-semibold text-slate-800">{searchQuery}</span>"</span>
                  )}
                </>
              )}
            </p>
          </motion.div>
        </motion.div>

        {/* Projects Display */}
        <AnimatePresence mode="wait">
          {filteredProjects.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="text-center py-16"
            >
              <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-slate-100 to-slate-200 rounded-full flex items-center justify-center">
                <Search className="w-10 h-10 text-slate-400" />
              </div>
              <h3 className="text-2xl font-serif text-slate-700 mb-3">No Projects Found</h3>
              <p className="text-slate-500 mb-6 max-w-md mx-auto">
                Try adjusting your search terms or filters to find what you're looking for.
              </p>
              <Button
                onClick={() => {
                  setSearchQuery("")
                  setSelectedFilter("all")
                }}
                className="bg-emerald-500 hover:bg-emerald-600 text-white"
              >
                Clear Filters
              </Button>
            </motion.div>
          ) : (
            <motion.div 
              key={`${viewMode}-${selectedFilter}-${sortBy}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className={
                viewMode === "grid" 
                  ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto"
                  : "space-y-6 max-w-5xl mx-auto"
              }
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 100
                  }}
                  className="group"
                >
                  {viewMode === "grid" ? (
                    // Grid View Card
                    <Card className="h-full bg-white/90 backdrop-blur-sm border-2 border-slate-200 transition-all duration-500 group-hover:border-emerald-400 group-hover:-translate-y-3 group-hover:shadow-2xl overflow-hidden relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/0 via-emerald-50/0 to-emerald-100/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                      <CardContent className="p-0 h-full flex flex-col relative z-10">
                        <div className="relative h-48 sm:h-56 lg:h-64 w-full overflow-hidden">
                          <div className={`absolute inset-0 bg-gradient-to-br ${project.color.replace('from-', 'from-').replace('to-', 'to-')} opacity-10 group-hover:opacity-20 transition-opacity duration-500 z-10`} />
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          <div className="absolute top-4 right-4 z-20">
                            <div className="bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                              <ExternalLink className="w-4 h-4 text-emerald-600" />
                            </div>
                          </div>
                        </div>
                        <div className="p-6 flex-1 flex flex-col">
                          <h3 className="text-xl sm:text-2xl font-serif text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors duration-300 line-clamp-2">
                            {project.title}
                          </h3>
                          <p className="text-slate-600 mb-4 line-clamp-3 leading-relaxed">
                            {project.description}
                          </p>
                          
                          <div className="flex flex-wrap gap-2 mb-6">
                            {project.skills.slice(0, 4).map((skill) => (
                              <span
                                key={skill}
                                className="px-3 py-1 bg-slate-100 hover:bg-emerald-100 rounded-full text-xs font-medium text-slate-700 hover:text-emerald-700 transition-all duration-300 cursor-default"
                              >
                                {skill}
                              </span>
                            ))}
                            {project.skills.length > 4 && (
                              <span className="px-3 py-1 bg-slate-200 rounded-full text-xs font-medium text-slate-600">
                                +{project.skills.length - 4} more
                              </span>
                            )}
                          </div>

                          <div className="flex items-center gap-3 mt-auto">
                            <Button
                              variant="outline"
                              className="flex-1 h-10 text-sm border-2 border-slate-200 hover:border-emerald-400 hover:bg-emerald-50 transition-all duration-300"
                              onClick={() => router.push(`/projects/${project.slug}`)}
                            >
                              Learn More
                              <ArrowRight className="ml-2 w-4 h-4" />
                            </Button>
                            
                            {project.demoLink && (
                              <a
                                href={project.demoLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="h-10 px-4 inline-flex items-center justify-center rounded-lg text-sm font-semibold bg-emerald-500 text-white hover:bg-emerald-600 transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg"
                              >
                                Demo
                                <ExternalLink className="ml-2 w-4 h-4" />
                              </a>
                            )}
                            {project.githubLink && (
                              <a
                                href={project.githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="h-10 w-10 flex items-center justify-center rounded-lg bg-slate-100 text-slate-600 hover:bg-slate-800 hover:text-white transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg"
                              >
                                <Github className="w-4 h-4" />
                              </a>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ) : (
                    // List View Card
                    <Card className="bg-white/90 backdrop-blur-sm border-2 border-slate-200 transition-all duration-500 group-hover:border-emerald-400 group-hover:shadow-xl overflow-hidden">
                      <CardContent className="p-0">
                        <div className="flex flex-col md:flex-row">
                          <div className="relative w-full md:w-80 h-48 md:h-auto overflow-hidden">
                            <div className={`absolute inset-0 bg-gradient-to-br ${project.color.replace('from-', 'from-').replace('to-', 'to-')} opacity-10 group-hover:opacity-20 transition-opacity duration-500 z-10`} />
                            <Image
                              src={project.image}
                              alt={project.title}
                              fill
                              className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                          </div>
                          <div className="flex-1 p-6">
                            <div className="flex flex-col h-full">
                              <h3 className="text-2xl font-serif text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors duration-300">
                                {project.title}
                              </h3>
                              <p className="text-slate-600 mb-4 leading-relaxed">
                                {project.description}
                              </p>
                              
                              <div className="flex flex-wrap gap-2 mb-6">
                                {project.skills.map((skill) => (
                                  <span
                                    key={skill}
                                    className="px-3 py-1 bg-slate-100 hover:bg-emerald-100 rounded-full text-xs font-medium text-slate-700 hover:text-emerald-700 transition-all duration-300 cursor-default"
                                  >
                                    {skill}
                                  </span>
                                ))}
                              </div>

                              <div className="flex items-center gap-3 mt-auto">
                                <Button
                                  variant="outline"
                                  className="h-10 text-sm border-2 border-slate-200 hover:border-emerald-400 hover:bg-emerald-50 transition-all duration-300"
                                  onClick={() => router.push(`/projects/${project.slug}`)}
                                >
                                  Learn More
                                  <ArrowRight className="ml-2 w-4 h-4" />
                                </Button>
                                
                                {project.demoLink && (
                                  <a
                                    href={project.demoLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="h-10 px-4 inline-flex items-center justify-center rounded-lg text-sm font-semibold bg-emerald-500 text-white hover:bg-emerald-600 transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg"
                                  >
                                    Live Demo
                                    <ExternalLink className="ml-2 w-4 h-4" />
                                  </a>
                                )}
                                {project.githubLink && (
                                  <a
                                    href={project.githubLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="h-10 w-10 flex items-center justify-center rounded-lg bg-slate-100 text-slate-600 hover:bg-slate-800 hover:text-white transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg"
                                  >
                                    <Github className="w-4 h-4" />
                                  </a>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )}
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </div>
  )
}
