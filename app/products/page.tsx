"use client"

import Image from "next/image"
// Removed Card and Button imports - using enhanced components instead
import { useState, useEffect } from "react"
import { ArrowRight, ExternalLink, Star, Search, Sparkles, Github, Filter, Grid, List, Calendar, Users, Code2, Package } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useRouter } from "next/navigation"
import { AnimatedSection, PremiumCard, PageHeader, EnhancedButton } from "@/components/ui"

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
      <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-neutral-25 to-primary-50/20 flex items-center justify-center">
        <AnimatedSection animation="fade-in" className="text-center">
          <div className="w-16 h-16 border-4 border-primary-200 border-t-primary-500 rounded-full animate-spin mx-auto mb-4 shadow-glow"></div>
          <p className="text-neutral-600 font-medium">Loading amazing products...</p>
        </AnimatedSection>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-neutral-25 to-primary-50/20">
      <section className="container mx-auto padding-section px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Enhanced gradient backgrounds */}
        <div className="absolute top-0 right-0 w-[200px] sm:w-[300px] lg:w-[400px] h-[200px] sm:h-[300px] lg:h-[400px] bg-gradient-to-br from-primary-100/30 via-accent-50/20 to-transparent rounded-full -z-10 blur-2xl animate-float" />
        <div className="absolute bottom-0 left-0 w-[200px] sm:w-[300px] lg:w-[400px] h-[200px] sm:h-[300px] lg:h-[400px] bg-gradient-to-tr from-accent-100/30 via-primary-50/20 to-transparent rounded-full -z-10 blur-2xl animate-pulse-slow" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[400px] lg:w-[500px] h-[300px] sm:h-[400px] lg:h-[500px] bg-gradient-to-br from-neutral-100/20 via-primary-50/10 to-transparent rounded-full -z-10 blur-3xl animate-float" />
        
        {/* Enhanced Header */}
        <PageHeader
          title="Products & Solutions"
          subtitle="Innovative digital products that solve real-world problems and create meaningful impact for users worldwide."
          className="mb-spacing-3xl"
        />

        {/* Product Stats */}
        <AnimatedSection 
          animation="fade-in-up"
          delay={200}
          className="grid grid-cols-1 md:grid-cols-3 gap-spacing-lg mb-spacing-xl"
        >
          <PremiumCard variant="glass" hover className="text-center padding-card">
            <div className="text-heading-1 text-brand-primary mb-spacing-sm">{productsData.length}</div>
            <div className="text-body text-secondary-body">Products</div>
          </PremiumCard>
          <PremiumCard variant="glass" hover className="text-center padding-card">
            <div className="text-heading-1 text-brand-primary mb-spacing-sm">{productsData.filter(p => p.category.includes("mobile-app")).length}</div>
            <div className="text-body text-secondary-body">Mobile Apps</div>
          </PremiumCard>
          <PremiumCard variant="glass" hover className="text-center padding-card">
            <div className="text-heading-1 text-brand-primary mb-spacing-sm">{productsData.filter(p => p.status === "Live").length}</div>
            <div className="text-body text-secondary-body">Live Products</div>
          </PremiumCard>
          <PremiumCard variant="glass" hover className="text-center padding-card">
            <div className="text-heading-1 text-brand-primary mb-spacing-sm">{new Set(productsData.flatMap(p => p.skills)).size}+</div>
            <div className="text-body text-secondary-body">Technologies</div>
          </PremiumCard>
        </AnimatedSection>

        {/* Enhanced Controls Section */}
        <AnimatedSection 
          animation="fade-in-up"
          delay={400}
          className="mb-8 sm:mb-12"
        >
          {/* Search and View Controls */}
          <div className="flex flex-col lg:flex-row gap-spacing-md mb-spacing-lg">
            {/* Search Bar */}
            <div className="flex-1 max-w-2xl mx-auto lg:mx-0 relative">
              <input
                type="text"
                placeholder="Search products by name, description, or technology..."
                className="w-full px-5 py-3 rounded-xl glass border-2 border-primary-200 focus:border-primary-400 focus:ring-4 focus:ring-primary-400/20 outline-none text-body text-secondary-body shadow-premium transition-all duration-300 placeholder:text-neutral-400"
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

            {/* View Mode and Sort Controls */}
            <div className="flex gap-spacing-sm justify-center lg:justify-end">
              {/* View Mode Toggle */}
              <PremiumCard variant="glass" className="flex padding-xs">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`padding-button rounded-md transition-all duration-200 ${
                    viewMode === "grid" 
                      ? "btn-primary" 
                      : "text-secondary-body hover:bg-neutral-100"
                  }`}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`padding-button rounded-md transition-all duration-200 ${
                    viewMode === "list" 
                      ? "btn-primary" 
                      : "text-secondary-body hover:bg-neutral-100"
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
                  className="appearance-none glass border-2 border-primary-200 rounded-lg padding-input pr-8 text-body text-secondary-body shadow-premium focus:border-primary-400 focus:ring-2 focus:ring-primary-400/20 outline-none transition-all duration-200"
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
          <PremiumCard variant="glass" className="padding-card mb-spacing-lg">
            <div className="flex flex-wrap justify-center gap-spacing-sm">
              {filters.map((filter) => (
                <EnhancedButton
                  key={filter.value}
                  variant={selectedFilter === filter.value ? "gradient" : "outline"}
                  size="sm"
                  glow={selectedFilter === filter.value}
                  onClick={() => setSelectedFilter(filter.value)}
                  className="relative"
                >
                  <span className="mr-2">{filter.icon}</span>
                  {filter.label}
                  <span className="ml-2 px-2 py-1 rounded-full text-xs bg-white/20">
                    {filter.count}
                  </span>
                </EnhancedButton>
              ))}
            </div>
          </PremiumCard>
        </AnimatedSection>

        {/* Products Grid */}
        <AnimatedSection 
          animation="fade-in"
          delay={600}
        >
          {filteredProducts.length === 0 ? (
            <div className="text-center padding-section">
              <div className="text-6xl mb-spacing-md">🔍</div>
              <h3 className="text-heading-2 text-primary-body mb-spacing-sm">No products found</h3>
              <p className="text-body text-muted">Try adjusting your search or filter criteria</p>
            </div>
          ) : (
            <div className={`grid gap-spacing-lg ${
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
                    <PremiumCard 
                      variant="premium" 
                      hover 
                      glow
                      className="h-full group overflow-hidden"
                    >
                      <div className="relative">
                        {product.isFirstProduct && (
                          <div className="absolute top-4 left-4 z-10">
                            <span className="gradient-accent text-white px-3 py-1 rounded-full text-xs font-bold shadow-glow">
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
                      
                      <div className="padding-card">
                        <div className="flex items-start justify-between mb-spacing-sm">
                          <h3 className="text-heading-2 text-primary-body group-hover:text-primary-600 transition-colors">
                            {product.title}
                          </h3>
                          <div className="flex items-center gap-2">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              product.status === "Live" 
                                ? "bg-primary-100 text-primary-800" 
                                : "bg-accent-100 text-accent-800"
                            }`}>
                              {product.status}
                            </span>
                          </div>
                        </div>
                        
                        <p className="text-body text-secondary-body mb-spacing-md leading-relaxed text-pretty">
                          {product.description}
                        </p>

                        {/* Product Stats */}
                        <div className="flex items-center gap-spacing-md mb-spacing-md text-caption text-muted">
                          <div className="flex items-center gap-1">
                            <Users className="w-4 h-4" />
                            <span>{product.users}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 fill-accent-400 text-accent-400" />
                            <span>{product.rating}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>{product.launchDate}</span>
                          </div>
                        </div>

                        {/* Skills */}
                        <div className="flex flex-wrap gap-spacing-xs mb-spacing-lg">
                          {product.skills.slice(0, 3).map((skill) => (
                            <span
                              key={skill}
                              className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-caption font-medium"
                            >
                              {skill}
                            </span>
                          ))}
                          {product.skills.length > 3 && (
                            <span className="px-3 py-1 bg-neutral-100 text-neutral-600 rounded-full text-caption font-medium">
                              +{product.skills.length - 3} more
                            </span>
                          )}
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-spacing-sm">
                          <EnhancedButton
                            variant="gradient"
                            size="sm"
                            glow
                            className="flex-1"
                            onClick={() => router.push(`/products/${product.slug}`)}
                          >
                            Learn More
                            <ArrowRight className="ml-2 w-4 h-4" />
                          </EnhancedButton>
                          {product.demoLink && (
                            <EnhancedButton
                              variant="outline"
                              size="sm"
                              asChild
                            >
                              <a href={product.demoLink} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="w-4 h-4" />
                              </a>
                            </EnhancedButton>
                          )}
                        </div>
                      </div>
                    </PremiumCard>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}
        </AnimatedSection>
      </section>
    </div>
  )
}