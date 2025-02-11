"use client"

import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { ArrowRight, ExternalLink, Star, Search, Sparkles } from "lucide-react"

export default function ProjectsSection() {
  const [selectedFilter, setSelectedFilter] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")

  const projects = [
    {
      title: "AI Image Generator",
      image: "/placeholder.svg?height=200&width=200",
      description: "A deep learning powered image generation tool built with stable diffusion",
      link: "/projects/ai-image-gen",
      tags: ["AI", "Python", "React", "TensorFlow", "Computer Vision", "Deep Learning"],
      category: "ai",
      gradient: "from-amber-400 to-amber-500",
      bgGradient: "from-amber-400/10 to-amber-500/10",
      iconBg: "bg-amber-400",
      featured: true,
      demoUrl: "https://ai-image-gen.demo.com"
    },
    {
      title: "E-commerce Platform", 
      image: "/placeholder.svg?height=200&width=200",
      description: "Full-stack e-commerce solution with payment processing and inventory management",
      link: "/projects/ecommerce",
      tags: ["Next.js", "Node.js", "MongoDB", "Stripe", "Redux", "TypeScript", "AWS"],
      category: "web",
      gradient: "from-blue-400 to-blue-500", 
      bgGradient: "from-blue-400/10 to-blue-500/10",
      iconBg: "bg-blue-400",
      featured: true,
      demoUrl: "https://ecommerce.demo.com"
    },
    {
      title: "Smart Home IoT",
      image: "/placeholder.svg?height=200&width=200", 
      description: "IoT system for home automation and energy monitoring",
      link: "/projects/iot",
      tags: ["IoT", "Embedded", "Cloud", "MQTT", "Raspberry Pi", "Arduino", "AWS IoT"],
      category: "iot",
      gradient: "from-emerald-400 to-emerald-500",
      bgGradient: "from-emerald-400/10 to-emerald-500/10", 
      iconBg: "bg-emerald-400",
      featured: false,
      demoUrl: "https://smart-home.demo.com"
    },
    {
      title: "Social Media Analytics",
      image: "/placeholder.svg?height=200&width=200",
      description: "Real-time social media analytics and sentiment analysis platform",
      link: "/projects/analytics", 
      tags: ["Data Science", "Machine Learning", "Dashboard", "NLP", "Python", "React", "D3.js"],
      category: "ai",
      gradient: "from-purple-400 to-purple-500",
      bgGradient: "from-purple-400/10 to-purple-500/10",
      iconBg: "bg-purple-400",
      featured: false,
      demoUrl: "https://analytics.demo.com"
    },
    {
      title: "Mobile Fitness App",
      image: "/placeholder.svg?height=200&width=200",
      description: "Cross-platform fitness tracking app with personalized workout plans",
      link: "/projects/fitness",
      tags: ["React Native", "Firebase", "Health", "Redux", "GraphQL", "TypeScript"],
      category: "web",
      gradient: "from-cyan-400 to-cyan-500",
      bgGradient: "from-cyan-400/10 to-cyan-500/10",
      iconBg: "bg-cyan-400",
      featured: false,
      demoUrl: "https://fitness.demo.com"
    },
    {
      title: "Smart Agriculture",
      image: "/placeholder.svg?height=200&width=200",
      description: "IoT-based smart farming system for crop monitoring and automation",
      link: "/projects/agriculture",
      tags: ["IoT", "Sensors", "Data Analytics", "Machine Learning", "Edge Computing"],
      category: "iot", 
      gradient: "from-yellow-400 to-yellow-500",
      bgGradient: "from-yellow-400/10 to-yellow-500/10",
      iconBg: "bg-yellow-400",
      featured: false,
      demoUrl: "https://agriculture.demo.com"
    }
  ]

  const filters = [
    { label: "All Projects", value: "all", gradient: "from-amber-400 to-amber-500", icon: "✨" },
    { label: "AI & ML", value: "ai", gradient: "from-purple-400 to-purple-500", icon: "🤖" },
    { label: "Web Apps", value: "web", gradient: "from-blue-400 to-blue-500", icon: "🌐" },
    { label: "IoT Solutions", value: "iot", gradient: "from-emerald-400 to-emerald-500", icon: "📱" }
  ]

  const filteredProjects = projects
    .filter(p => selectedFilter === "all" ? true : p.category === selectedFilter)
    .filter(p => 
      searchQuery === "" ? true : 
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    )

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#faf9f6] via-[#f8f7f4] to-[#faf9f6] overflow-hidden">
      <section className="container mx-auto px-4 py-16 relative">
        {/* Enhanced animated background gradients with more subtle animations */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-yellow-200/30 via-amber-100/20 to-transparent rounded-full -z-10 blur-3xl animate-[pulse_8s_ease-in-out_infinite]" />
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-gradient-to-tr from-emerald-100/20 via-emerald-50/10 to-transparent rounded-full -z-10 blur-3xl animate-[pulse_10s_ease-in-out_infinite]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-r from-purple-200/10 via-pink-100/5 to-transparent rounded-full -z-10 blur-3xl animate-[pulse_12s_ease-in-out_infinite]" />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-serif text-slate-900 tracking-tight mb-8 relative inline-block">
            Featured{" "}
            <span className="bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-600 bg-clip-text text-transparent animate-gradient">
              Projects
            </span>
            <motion.div 
              className="absolute -top-6 -right-6 w-12 h-12"
              animate={{ 
                rotate: 360,
                scale: [1, 1.2, 1],
              }}
              transition={{ 
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
              }}
            >
              <Sparkles className="w-full h-full text-yellow-400 opacity-75" />
            </motion.div>
          </h2>
          <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Explore my portfolio of innovative solutions across AI, web development, and IoT
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col items-center gap-6 mb-20"
        >
          {/* Enhanced Search Bar */}
          <div className="w-full max-w-2xl relative group">
            <input
              type="text"
              placeholder="Search projects..."
              className="w-full px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl bg-white/90 backdrop-blur-sm border border-slate-200 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 outline-none text-slate-700 text-sm sm:text-base shadow-lg transition-all duration-300 group-hover:shadow-xl"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-slate-400 group-hover:text-emerald-400 transition-colors duration-300" />
          </div>

          {/* Enhanced Filters */}
          <div className="flex flex-wrap gap-4 justify-center bg-white/60 backdrop-blur-lg p-6 rounded-3xl shadow-lg border border-white/30 hover:bg-white/70 transition-colors duration-300">
            {filters.map((filter) => (
              <Button
                key={filter.value}
                onClick={() => setSelectedFilter(filter.value)}
                className={`px-6 py-4 rounded-xl text-base font-medium transition-all duration-500 flex items-center gap-2 hover:transform hover:scale-105
                  ${selectedFilter === filter.value 
                    ? `bg-gradient-to-r ${filter.gradient} text-white shadow-lg scale-105 hover:shadow-xl` 
                    : 'bg-white/90 backdrop-blur-sm text-slate-600 hover:bg-white hover:shadow-md'
                  }`}
              >
                <span className="text-lg">{filter.icon}</span>
                {filter.label}
              </Button>
            ))}
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {filteredProjects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <Card className={`group bg-gradient-to-br ${project.bgGradient} border-none overflow-hidden hover:shadow-2xl transition-all duration-500 relative`}>
                  {project.featured && (
                    <div className="absolute top-4 right-4 z-10">
                      <div className="bg-gradient-to-r from-amber-400 to-amber-500 text-white px-4 py-1.5 rounded-full text-sm font-medium shadow-lg flex items-center gap-2 animate-pulse">
                        <Star className="w-4 h-4" />
                        Featured
                      </div>
                    </div>
                  )}
                  <CardContent className="p-6">
                    <div className="aspect-video relative mb-6 rounded-xl overflow-hidden group-hover:shadow-lg">
                      <div className={`absolute inset-0 ${project.iconBg} opacity-10 group-hover:opacity-20 transition-opacity duration-500`} />
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <Button variant="outline" className="text-white border-white hover:bg-white/20 transform -translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                          View Details
                        </Button>
                      </div>
                    </div>
                    <h3 className="text-2xl font-serif text-slate-900 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-slate-900 group-hover:to-slate-600 transition-all duration-300">{project.title}</h3>
                    <p className="text-slate-600 mb-6 line-clamp-2 group-hover:text-slate-700 transition-colors duration-300">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1.5 bg-white/70 backdrop-blur-sm rounded-full text-sm font-medium text-slate-700 hover:bg-white hover:shadow-sm transition-all duration-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-4">
                      <a
                        href={project.link}
                        className={`flex-1 inline-flex items-center justify-center px-4 py-2.5 rounded-lg text-sm font-medium bg-gradient-to-r ${project.gradient} text-white hover:opacity-90 transition-all duration-300 group shadow-md hover:shadow-lg`}
                      >
                        View Project
                        <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </a>
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-lg bg-white/80 text-slate-600 hover:bg-white hover:text-slate-900 transition-all duration-300 hover:shadow-md"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </AnimatePresence>
      </section>
    </div>
  )
}
