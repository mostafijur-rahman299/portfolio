"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { ArrowRight, ExternalLink, Star, Search, Sparkles, Github, Filter, Grid, List, Calendar, Users, Code2, Package } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useRouter } from "next/navigation"

/**
 * Products data structure - Contains information about all products
 */
const productsData = [
  {
    id: 1,
    title: "TodoX",
    slug: "todox",
    description: "A powerful task management app that helps users organize their daily tasks and projects efficiently.",
    longDescription: "TodoX is a comprehensive task management application designed to help individuals and teams stay organized and productive. Built with React Native and Django, it offers a seamless experience across mobile devices with features like task categorization, deadline tracking, and progress monitoring.",
    skills: ["Django", "Django Rest Framework", "React Native", "Expo", "PostgreSQL", "Docker"],
    demoLink: null,
    githubLink: null,
    icon: Package,
    color: "from-blue-400 to-indigo-600",
    image: "/projects/todox/banner.jpeg",
    category: ["mobile-app", "productivity"],
    status: "Live",
    price: "Free",
    users: "1K+",
    rating: 4.8,
    features: [
      "Task Creation & Management",
      "Project Organization",
      "Deadline Tracking",
      "Progress Monitoring",
      "Cross-platform Support",
      "Offline Functionality"
    ],
    launchDate: "2021",
    isFirstProduct: true
  }
]

/**
 * Products page component - Displays all products with filtering and search functionality
 */
export default function ProductsPage() {
  const [selectedFilter, setSelectedFilter] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [viewMode, setViewMode] = useState("grid")
  const [sortBy, setSortBy] = useState("newest")
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  // Simulate loading effect
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800)
    return () => clearTimeout(timer)
  }, [])

  const filters = [
    { label: "All Products", value: "all", gradient: "from-amber-400 to-amber-500", icon: "✨", count: productsData.length },
    { label: "Mobile Apps", value: "mobile-app", gradient: "from-emerald-400 to-emerald-500", icon: "📱", count: productsData.filter(p => p.category.includes("mobile-app")).length },
    { label: "Productivity", value: "productivity", gradient: "from-blue-400 to-blue-500", icon: "⚡", count: productsData.filter(p => p.category.includes("productivity")).length },
  ]

  const sortOptions = [
    { label: "Newest First", value: "newest", icon: Calendar },
    { label: "Oldest First", value: "oldest", icon: Calendar },
    { label: "Alphabetical", value: "alphabetical", icon: Code2 },
  ]

  let filteredProducts = productsData
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
    filteredProducts = filteredProducts.sort((a, b) => b.id - a.id)
  } else if (sortBy === "oldest") {
    filteredProducts = filteredProducts.sort((a, b) => a.id - b.id)
  } else if (sortBy === "alphabetical") {
    filteredProducts = filteredProducts.sort((a, b) => a.title.localeCompare(b.title))
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
          <p className="text-slate-600 font-medium">Loading amazing products...</p>
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
                Products
              </span>
              <div className="absolute -top-4 -right-4 w-8 h-8">
                <Sparkles className="w-full h-full text-yellow-400 opacity-75 animate-pulse" />
              </div>
            </h1>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-emerald-400 to-emerald-500 rounded-full"></div>
          </div>
          
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed px-4 mb-8">
            Discover the products I've built to solve real-world problems. Each product represents my journey 
            from idea to implementation, focusing on user experience and practical solutions.
          </p>

          {/* Product Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-6 sm:gap-8 mb-8"
          >
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-emerald-600 mb-1">{productsData.length}</div>
              <div className="text-sm text-slate-600 font-medium">Products</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-1">{productsData.filter(p => p.category.includes("mobile-app")).length}</div>
              <div className="text-sm text-slate-600 font-medium">Mobile Apps</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-purple-600 mb-1">{productsData.filter(p => p.status === "Live").length}</div>
              <div className="text-sm text-slate-600 font-medium">Live Products</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-amber-600 mb-1">{new Set(productsData.flatMap(p => p.skills)).size}+</div>
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
                placeholder="Search products by name, description, or technology..."
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
              </div>
            </div>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {filters.map((filter) => (
              <motion.button
                key={filter.value}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedFilter(filter.value)}
                className={`relative px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 shadow-lg hover:shadow-xl ${
                  selectedFilter === filter.value
                    ? `bg-gradient-to-r ${filter.gradient} text-white shadow-2xl`
                    : "bg-white/80 backdrop-blur-sm text-slate-700 hover:bg-white border border-slate-200"
                }`}
              >
                <span className="mr-2">{filter.icon}</span>
                {filter.label}
                <span className="ml-2 px-2 py-1 rounded-full text-xs bg-white/20">
                  {filter.count}
                </span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Products Grid */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {filteredProducts.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-semibold text-slate-700 mb-2">No products found</h3>
              <p className="text-slate-500">Try adjusting your search or filter criteria</p>
            </div>
          ) : (
            <div className={`grid gap-6 ${
              viewMode === "grid" 
                ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" 
                : "grid-cols-1 max-w-4xl mx-auto"
            }`}>
              <AnimatePresence>
                {filteredProducts.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="group"
                  >
                    <Card className="h-full bg-white/80 backdrop-blur-sm border-2 border-slate-200 hover:border-emerald-300 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 overflow-hidden">
                      <div className="relative">
                        {product.isFirstProduct && (
                          <div className="absolute top-4 left-4 z-10">
                            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                              🎉 First Product
                            </span>
                          </div>
                        )}
                        <div className="aspect-video relative overflow-hidden">
                          <Image
                            src={product.image}
                            alt={product.title}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                      </div>
                      
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-3">
                          <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">
                            {product.title}
                          </h3>
                          <div className="flex items-center gap-2">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              product.status === "Live" 
                                ? "bg-green-100 text-green-800" 
                                : "bg-yellow-100 text-yellow-800"
                            }`}>
                              {product.status}
                            </span>
                          </div>
                        </div>
                        
                        <p className="text-slate-600 mb-4 leading-relaxed">
                          {product.description}
                        </p>

                        {/* Product Stats */}
                        <div className="flex items-center gap-4 mb-4 text-sm text-slate-500">
                          <div className="flex items-center gap-1">
                            <Users className="w-4 h-4" />
                            <span>{product.users}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            <span>{product.rating}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>{product.launchDate}</span>
                          </div>
                        </div>

                        {/* Skills */}
                        <div className="flex flex-wrap gap-2 mb-6">
                          {product.skills.slice(0, 3).map((skill) => (
                            <span
                              key={skill}
                              className="px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-xs font-medium"
                            >
                              {skill}
                            </span>
                          ))}
                          {product.skills.length > 3 && (
                            <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-medium">
                              +{product.skills.length - 3} more
                            </span>
                          )}
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-3">
                          <Button
                            onClick={() => router.push(`/products/${product.slug}`)}
                            className="flex-1 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                          >
                            Learn More
                            <ArrowRight className="ml-2 w-4 h-4" />
                          </Button>
                          {product.demoLink && (
                            <Button
                              variant="outline"
                              className="border-emerald-300 text-emerald-600 hover:bg-emerald-50"
                            >
                              <ExternalLink className="w-4 h-4" />
                            </Button>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}
        </motion.div>
      </section>
    </div>
  )
}