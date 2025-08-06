"use client"

import Image from "next/image"
// Removed Card imports - using PremiumCard instead
// Removed Button import - using EnhancedButton instead
import { useState, useEffect } from "react"
import { ArrowRight, ExternalLink, Star, Search, Sparkles, Github, Filter, Grid, List, Calendar, Users, Code2 } from "lucide-react"
import { projectData } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"
import { useRouter } from "next/navigation"
import { AnimatedSection, PremiumCard, PageHeader, EnhancedButton } from '@/components/ui'

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
      <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-primary-50 to-accent-50 flex items-center justify-center">
        <AnimatedSection animation="fade-in" delay={0}>
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-primary-200 border-t-primary-500 rounded-full animate-spin mx-auto mb-spacing-md shadow-glow"></div>
            <p className="text-secondary-body font-medium">Loading amazing projects...</p>
          </div>
        </AnimatedSection>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-primary-50 to-accent-50 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary-100 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-pulse-slow" />
      </div>
      
      <section className="container-custom relative z-10 padding-section">
        
        {/* Enhanced Header */}
        <PageHeader 
          title="My Projects"
          subtitle="Discover my journey through innovative solutions, from web applications to mobile experiences. Each project represents a unique challenge solved with creativity and technical expertise."
          variant="gradient"
          centered
          className="mb-spacing-3xl mt-32"
        >
          <div className="absolute -top-4 -right-4 w-8 h-8">
            <Sparkles className="w-full h-full text-primary-400 opacity-75 animate-pulse" />
          </div>
        </PageHeader>

        {/* Enhanced Project Stats */}
        <AnimatedSection animation="fade-in-up" delay={200}>
          <div className="flex flex-wrap justify-center gap-spacing-lg mb-spacing-xl">
            <PremiumCard variant="glass" className="text-center padding-card">
              <div className="text-heading-1 font-bold gradient-text mb-spacing-xs">{projects.length}+</div>
              <div className="text-body text-secondary-body font-medium">Projects</div>
            </PremiumCard>
            <PremiumCard variant="glass" className="text-center padding-card">
              <div className="text-heading-1 font-bold gradient-text mb-spacing-xs">{projects.filter(p => p.category.includes("web-app")).length}</div>
              <div className="text-body text-secondary-body font-medium">Web Apps</div>
            </PremiumCard>
            <PremiumCard variant="glass" className="text-center padding-card">
              <div className="text-heading-1 font-bold gradient-text mb-spacing-xs">{projects.filter(p => p.category.includes("mobile-app")).length}</div>
              <div className="text-body text-secondary-body font-medium">Mobile Apps</div>
            </PremiumCard>
            <PremiumCard variant="glass" className="text-center padding-card">
              <div className="text-heading-1 font-bold gradient-text mb-spacing-xs">{new Set(projects.flatMap(p => p.skills)).size}+</div>
              <div className="text-body text-secondary-body font-medium">Technologies</div>
            </PremiumCard>
          </div>
        </AnimatedSection>

        {/* Enhanced Controls Section */}
        <AnimatedSection animation="fade-in-up" delay={400}>
          <div className="mb-spacing-3xl">
            {/* Search and View Controls */}
            <div className="flex flex-col lg:flex-row gap-spacing-md mb-spacing-lg">
              {/* Enhanced Search Bar */}
              <div className="flex-1 max-w-2xl mx-auto lg:mx-0 relative">
                <input
                  type="text"
                  placeholder="Search projects by name, description, or technology..."
                  className="w-full padding-input rounded-xl glass border-2 border-primary-200 focus:border-primary-400 focus:ring-4 focus:ring-primary-400/20 outline-none text-primary-body shadow-premium transition-all duration-300 placeholder:text-muted"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-12 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400 hover:text-neutral-600 transition-colors"
                  >
                    ×
                  </button>
                )}
              </div>

              {/* Enhanced View Mode and Sort Controls */}
              <div className="flex gap-spacing-xs justify-center lg:justify-end">
                {/* View Mode Toggle */}
                <PremiumCard variant="glass" className="flex padding-xs">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`p-2 rounded-md transition-all duration-200 ${
                      viewMode === "grid" 
                        ? "gradient-primary text-white shadow-glow" 
                        : "text-neutral-600 hover:bg-neutral-100"
                    }`}
                  >
                    <Grid className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    className={`p-2 rounded-md transition-all duration-200 ${
                      viewMode === "list" 
                        ? "gradient-primary text-white shadow-glow" 
                        : "text-neutral-600 hover:bg-neutral-100"
                    }`}
                  >
                    <List className="w-4 h-4" />
                  </button>
                </PremiumCard>

                {/* Sort Dropdown */}
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="appearance-none glass border-2 border-primary-200 rounded-lg padding-button pr-8 text-body font-medium text-primary-body shadow-premium focus:border-primary-400 focus:ring-2 focus:ring-primary-400/20 outline-none transition-all duration-200"
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
             <PremiumCard variant="glass" className="padding-card">
               <div className="flex flex-wrap gap-spacing-sm justify-center">
                 {filters.map((filter, index) => (
                   <AnimatedSection
                     key={filter.value}
                     animation="fade-in-up"
                     delay={500 + index * 100}
                   >
                     <EnhancedButton
                       onClick={() => setSelectedFilter(filter.value)}
                       variant={selectedFilter === filter.value ? "gradient" : "outline"}
                       size="sm"
                       glow={selectedFilter === filter.value}
                       className="group relative overflow-hidden"
                     >
                       <span className="text-base mr-2">{filter.icon}</span>
                       <span>{filter.label}</span>
                       <span className={`ml-2 px-2 py-0.5 rounded-full text-caption font-bold ${
                         selectedFilter === filter.value 
                           ? 'bg-white/20 text-white' 
                           : 'bg-neutral-100 text-secondary-body'
                       }`}>
                         {filter.count}
                       </span>
                     </EnhancedButton>
                   </AnimatedSection>
                 ))}
               </div>
             </PremiumCard>

             {/* Enhanced Results Summary */}
             <AnimatedSection animation="fade-in" delay={800}>
               <div className="text-center mt-spacing-lg">
                 <p className="text-secondary-body font-medium">
                   {filteredProjects.length === 0 ? (
                     <span className="text-accent-warm">No projects found matching your criteria</span>
                   ) : (
                     <>
                       Showing <span className="font-bold gradient-text">{filteredProjects.length}</span> 
                       {filteredProjects.length === 1 ? ' project' : ' projects'}
                       {searchQuery && (
                         <span> matching "<span className="font-semibold text-primary-body">{searchQuery}</span>"</span>
                       )}
                     </>
                   )}
                 </p>
               </div>
             </AnimatedSection>
           </div>
         </AnimatedSection>

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
              <h3 className="text-heading-2 font-serif text-primary-body mb-spacing-sm">No Projects Found</h3>
              <p className="text-secondary-body mb-spacing-lg max-w-md mx-auto">
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
                  ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-spacing-lg lg:gap-spacing-xl max-w-7xl mx-auto"
                  : "space-y-spacing-lg max-w-5xl mx-auto"
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
                    // Enhanced Grid View Card
                    <PremiumCard 
                      variant="premium" 
                      hover 
                      glow
                      className="h-full group overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/0 via-primary-50/0 to-primary-100/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                      <div className="p-0 h-full flex flex-col relative z-10">
                        <div className="relative h-48 sm:h-56 lg:h-64 w-full overflow-hidden">
                          <div className={`absolute inset-0 bg-gradient-to-br ${project.color.replace('from-', 'from-').replace('to-', 'to-')} opacity-10 group-hover:opacity-20 transition-opacity duration-500 z-10`} />
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          <div className="absolute top-4 right-4 z-20">
                            <div className="glass rounded-full p-2 shadow-glow opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                              <ExternalLink className="w-4 h-4 text-primary-600" />
                            </div>
                          </div>
                        </div>
                        <div className="padding-card flex-1 flex flex-col">
                          <h3 className="text-heading-2 font-serif text-primary-body mb-spacing-sm group-hover:text-primary-600 transition-colors duration-300 line-clamp-2">
                            {project.title}
                          </h3>
                          <p className="text-body text-secondary-body mb-spacing-md line-clamp-3 leading-relaxed text-pretty">
                            {project.description}
                          </p>
                          
                          <div className="flex flex-wrap gap-spacing-xs mb-spacing-lg">
                            {project.skills.slice(0, 4).map((skill) => (
                              <span
                                key={skill}
                                className="px-3 py-1 bg-neutral-100 hover:bg-primary-100 rounded-full text-caption font-medium text-secondary-body hover:text-primary-700 transition-all duration-300 cursor-default"
                              >
                                {skill}
                              </span>
                            ))}
                            {project.skills.length > 4 && (
                              <span className="px-3 py-1 bg-neutral-200 rounded-full text-caption font-medium text-muted">
                                +{project.skills.length - 4} more
                              </span>
                            )}
                          </div>

                          <div className="flex items-center gap-spacing-sm mt-auto">
                            <EnhancedButton
                              variant="outline"
                              size="sm"
                              className="flex-1"
                              onClick={() => router.push(`/projects/${project.slug}`)}
                            >
                              Learn More
                              <ArrowRight className="ml-2 w-4 h-4" />
                            </EnhancedButton>
                            
                            {project.demoLink && (
                              <EnhancedButton
                                variant="gradient"
                                size="sm"
                                glow
                                asChild
                              >
                                <a
                                  href={project.demoLink}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  Demo
                                  <ExternalLink className="ml-2 w-4 h-4" />
                                </a>
                              </EnhancedButton>
                            )}
                            {project.githubLink && (
                              <a
                                href={project.githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="h-10 w-10 flex items-center justify-center rounded-lg bg-neutral-100 text-neutral-600 hover:bg-neutral-800 hover:text-white transition-all duration-300 hover:scale-105 shadow-premium hover:shadow-glow"
                              >
                                <Github className="w-4 h-4" />
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </PremiumCard>
                  ) : (
                    // Enhanced List View Card
                    <PremiumCard 
                      variant="premium" 
                      hover 
                      glow
                      className="group overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/0 via-primary-50/0 to-primary-100/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                      <div className="p-0 relative z-10">
                        <div className="flex flex-col md:flex-row">
                          <div className="relative w-full md:w-80 h-48 md:h-auto overflow-hidden">
                            <div className={`absolute inset-0 bg-gradient-to-br ${project.color.replace('from-', 'from-').replace('to-', 'to-')} opacity-10 group-hover:opacity-20 transition-opacity duration-500 z-10`} />
                            <Image
                              src={project.image}
                              alt={project.title}
                              fill
                              className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute top-4 right-4 z-20">
                              <div className="glass rounded-full p-2 shadow-glow opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                                <ExternalLink className="w-4 h-4 text-primary-600" />
                              </div>
                            </div>
                          </div>
                          <div className="flex-1 padding-card">
                            <div className="flex flex-col h-full">
                              <h3 className="text-heading-2 font-serif text-primary-body mb-spacing-sm group-hover:text-primary-600 transition-colors duration-300">
                                {project.title}
                              </h3>
                              <p className="text-body text-secondary-body mb-spacing-md leading-relaxed text-pretty">
                                {project.description}
                              </p>
                              
                              <div className="flex flex-wrap gap-spacing-xs mb-spacing-lg">
                                {project.skills.map((skill) => (
                                  <span
                                    key={skill}
                                    className="px-3 py-1 bg-neutral-100 hover:bg-primary-100 rounded-full text-caption font-medium text-secondary-body hover:text-primary-700 transition-all duration-300 cursor-default"
                                  >
                                    {skill}
                                  </span>
                                ))}
                              </div>

                              <div className="flex items-center gap-spacing-sm mt-auto">
                                <EnhancedButton
                                  variant="outline"
                                  size="sm"
                                  onClick={() => router.push(`/projects/${project.slug}`)}
                                >
                                  Learn More
                                  <ArrowRight className="ml-2 w-4 h-4" />
                                </EnhancedButton>
                                
                                {project.demoLink && (
                                  <EnhancedButton
                                    variant="gradient"
                                    size="sm"
                                    glow
                                    asChild
                                  >
                                    <a
                                      href={project.demoLink}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                    >
                                      Demo
                                      <ExternalLink className="ml-2 w-4 h-4" />
                                    </a>
                                  </EnhancedButton>
                                )}
                                {project.githubLink && (
                                  <a
                                    href={project.githubLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="h-10 w-10 flex items-center justify-center rounded-lg bg-neutral-100 text-secondary-body hover:bg-neutral-800 hover:text-white transition-all duration-300 hover:scale-105 shadow-premium hover:shadow-glow"
                                  >
                                    <Github className="w-4 h-4" />
                                  </a>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </PremiumCard>
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
