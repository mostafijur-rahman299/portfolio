# Page Enhancement Guide

## 1. Overview

This guide provides detailed enhancement specifications for each page of Mostafijur Rahman's personal website. Each page will be transformed to achieve a clean, beautiful, and professional appearance while maintaining consistent design patterns.

## 2. Home Page Enhancements

### 2.1 Enhanced Hero Section

**File: `app/page.tsx`**

```typescript
import { EnhancedHero } from "@/components/enhanced-hero"
import { EnhancedAboutSection } from "@/components/enhanced-about-section"
import { EnhancedExperienceTimeline } from "@/components/enhanced-experience-timeline"
import { FeaturedWork } from "@/components/featured-work"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CTASection } from "@/components/cta-section"

/**
 * Enhanced home page with improved sections and better user experience
 */
export default function HomePage() {
  return (
    <div className="min-h-screen">
      <EnhancedHero />
      <EnhancedAboutSection />
      <FeaturedWork />
      <EnhancedExperienceTimeline />
      <TestimonialsSection />
      <CTASection />
    </div>
  )
}
```

### 2.2 Enhanced About Section

**File: `components/enhanced-about-section.tsx`**

```typescript
"use client"

import { motion } from "framer-motion"
import { Target, Lightbulb, Code, TrendingUp, Users, Award, Briefcase, Rocket } from "lucide-react"
import { AnimatedSection } from "@/components/ui/animated-section"
import { PremiumCard } from "@/components/ui/premium-card"
import { Container } from "@/components/layout/container"

/**
 * Enhanced about section with better visual hierarchy and professional presentation
 */
export function EnhancedAboutSection() {
  const skills = [
    {
      icon: Target,
      title: "Problem Identification",
      description: "Identifying real market gaps and user pain points through research and analysis",
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200"
    },
    {
      icon: Lightbulb,
      title: "Product Strategy",
      description: "Developing comprehensive product roadmaps and go-to-market strategies",
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-200"
    },
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "Building scalable applications with modern technologies and best practices",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200"
    },
    {
      icon: TrendingUp,
      title: "Growth & Scaling",
      description: "Implementing data-driven growth strategies and optimization techniques",
      color: "text-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200"
    }
  ]

  const achievements = [
    { icon: Briefcase, label: "Products Built", value: "15+", description: "From concept to launch" },
    { icon: Users, label: "Users Impacted", value: "10K+", description: "Across all platforms" },
    { icon: TrendingUp, label: "Revenue Generated", value: "$500K+", description: "Through product sales" },
    { icon: Award, label: "Success Rate", value: "90%", description: "Product market fit" }
  ]

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-br from-yellow-200/30 to-orange-300/30 rounded-full mix-blend-multiply filter blur-xl"
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 30, 0]
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-40 left-20 w-32 h-32 bg-gradient-to-br from-orange-200/30 to-yellow-300/30 rounded-full mix-blend-multiply filter blur-xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            x: [0, -30, 0]
          }}
          transition={{ 
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <Container className="relative z-10">
        
        {/* Section Header */}
        <AnimatedSection animation="slideUp" className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-primary text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg mb-6">
            <Rocket className="w-4 h-4" />
            About Me
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="text-gradient">Entrepreneur & Engineer</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            I'm passionate about building products that solve real problems and make people's lives better. 
            My journey combines <span className="font-bold text-orange-600">entrepreneurial vision</span> with 
            <span className="font-bold text-yellow-600">technical expertise</span> to create meaningful solutions.
          </p>
        </AnimatedSection>

        {/* Skills Grid */}
        <AnimatedSection animation="slideUp" delay={0.2} className="mb-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                <PremiumCard className={`text-center h-full ${skill.bgColor} border ${skill.borderColor}`} hover>
                  <div className={`w-16 h-16 ${skill.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4 border-2 ${skill.borderColor}`}>
                    <skill.icon className={`w-8 h-8 ${skill.color}`} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{skill.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{skill.description}</p>
                </PremiumCard>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        {/* Journey Story */}
        <AnimatedSection animation="slideUp" delay={0.4} className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                My <span className="text-gradient">Journey</span>
              </h3>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  My entrepreneurial journey began with a simple observation: <span className="font-semibold text-orange-600">many great ideas fail not because they're bad, but because they don't solve real problems</span>. This insight shaped my approach to product development.
                </p>
                <p>
                  Over the past 5+ years, I've built <span className="font-semibold text-yellow-600">15+ products</span> that have impacted thousands of users. Each project taught me valuable lessons about market validation, user experience, and sustainable growth.
                </p>
                <p>
                  Today, I focus on <span className="font-semibold text-orange-500">identifying genuine pain points</span> and creating solutions that users love and businesses can scale. My technical background allows me to build these solutions from the ground up.
                </p>
              </div>
            </div>
            
            {/* Achievement Stats */}
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                >
                  <PremiumCard className="text-center bg-gradient-to-br from-white to-yellow-50" hover>
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-3">
                      <achievement.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-orange-600 mb-1">{achievement.value}</div>
                    <div className="text-sm font-semibold text-gray-900 mb-1">{achievement.label}</div>
                    <div className="text-xs text-gray-500">{achievement.description}</div>
                  </PremiumCard>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Philosophy */}
        <AnimatedSection animation="slideUp" delay={0.6}>
          <PremiumCard className="text-center bg-gradient-to-br from-yellow-50 to-orange-50 border-2 border-yellow-200" glow>
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                My <span className="text-gradient">Philosophy</span>
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                "<span className="font-bold text-orange-600">Every successful product starts with understanding a real problem</span>. 
                Technology is just the tool – the magic happens when you combine deep user empathy with 
                <span className="font-bold text-yellow-600">relentless execution</span> and 
                <span className="font-bold text-orange-500">continuous learning</span>."
              </p>
              <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                <span>—</span>
                <span className="font-medium">Mostafijur Rahman</span>
                <span>—</span>
              </div>
            </div>
          </PremiumCard>
        </AnimatedSection>
      </Container>
    </section>
  )
}
```

## 3. Projects Page Enhancements

### 3.1 Enhanced Projects Page

**File: `app/projects/page.tsx`**

```typescript
"use client"

import { useState, useMemo } from "react"
import { Search, Filter, Grid, List, Code, ExternalLink } from "lucide-react"
import { PageLayout } from "@/components/layout/page-layout"
import { PageHeader } from "@/components/ui/page-header"
import { Container } from "@/components/layout/container"
import { ProjectCard } from "@/components/ui/project-card"
import { AnimatedSection } from "@/components/ui/animated-section"
import { EnhancedButton } from "@/components/ui/enhanced-button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

/**
 * Enhanced projects page with improved filtering, search, and layout options
 */
export default function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedTech, setSelectedTech] = useState("all")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [sortBy, setSortBy] = useState("featured")

  // Mock projects data - replace with actual data
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A full-stack e-commerce solution with advanced analytics and inventory management.",
      image: "/projects/ecommerce.jpg",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      category: "Web Application",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      featured: true,
      stats: {
        users: "5K+",
        stars: 120,
        date: "2024"
      }
    },
    // Add more projects...
  ]

  const categories = ["all", "Web Application", "Mobile App", "SaaS", "Tool", "API"]
  const technologies = ["all", "React", "Node.js", "Python", "TypeScript", "Next.js"]

  const filteredProjects = useMemo(() => {
    return projects
      .filter(project => {
        const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            project.description.toLowerCase().includes(searchTerm.toLowerCase())
        const matchesCategory = selectedCategory === "all" || project.category === selectedCategory
        const matchesTech = selectedTech === "all" || project.technologies.includes(selectedTech)
        return matchesSearch && matchesCategory && matchesTech
      })
      .sort((a, b) => {
        switch (sortBy) {
          case "featured":
            return b.featured ? 1 : -1
          case "newest":
            return new Date(b.stats?.date || 0).getTime() - new Date(a.stats?.date || 0).getTime()
          case "popular":
            return (b.stats?.stars || 0) - (a.stats?.stars || 0)
          default:
            return 0
        }
      })
  }, [projects, searchTerm, selectedCategory, selectedTech, sortBy])

  return (
    <PageLayout>
      <PageHeader
        title="My Projects"
        subtitle="Portfolio"
        description="A collection of products and solutions I've built to solve real-world problems and explore new technologies."
        icon={<Code className="w-8 h-8 text-white" />}
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <EnhancedButton
            variant="primary"
            onClick={() => window.open('https://github.com/mostafijur-rahman299', '_blank')}
            icon={<ExternalLink className="w-4 h-4" />}
            iconPosition="right"
          >
            View All on GitHub
          </EnhancedButton>
          <EnhancedButton
            variant="outline"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Let's Collaborate
          </EnhancedButton>
        </div>
      </PageHeader>

      <Container className="py-16">
        
        {/* Filters and Search */}
        <AnimatedSection animation="slideUp" className="mb-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-yellow-200 shadow-lg">
            
            {/* Search and View Toggle */}
            <div className="flex flex-col lg:flex-row gap-4 mb-6">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-white border-gray-200 focus:border-orange-400 focus:ring-orange-400"
                />
              </div>
              
              <div className="flex gap-2">
                <EnhancedButton
                  variant={viewMode === "grid" ? "primary" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                  icon={<Grid className="w-4 h-4" />}
                >
                  Grid
                </EnhancedButton>
                <EnhancedButton
                  variant={viewMode === "list" ? "primary" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                  icon={<List className="w-4 h-4" />}
                >
                  List
                </EnhancedButton>
              </div>
            </div>

            {/* Filter Options */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="bg-white border-gray-200">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map(category => (
                    <SelectItem key={category} value={category}>
                      {category === "all" ? "All Categories" : category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedTech} onValueChange={setSelectedTech}>
                <SelectTrigger className="bg-white border-gray-200">
                  <SelectValue placeholder="Technology" />
                </SelectTrigger>
                <SelectContent>
                  {technologies.map(tech => (
                    <SelectItem key={tech} value={tech}>
                      {tech === "all" ? "All Technologies" : tech}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="bg-white border-gray-200">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured First</SelectItem>
                  <SelectItem value="newest">Newest First</SelectItem>
                  <SelectItem value="popular">Most Popular</SelectItem>
                </SelectContent>
              </Select>

              <div className="text-sm text-gray-600 flex items-center justify-center bg-gray-50 rounded-lg px-3 py-2">
                {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''}
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Projects Grid/List */}
        <AnimatedSection animation="slideUp" delay={0.2}>
          {filteredProjects.length > 0 ? (
            <div className={`grid gap-8 ${
              viewMode === "grid" 
                ? "md:grid-cols-2 lg:grid-cols-3" 
                : "grid-cols-1 max-w-4xl mx-auto"
            }`}>
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <ProjectCard {...project} />
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">No projects found</h3>
              <p className="text-gray-600 mb-6">Try adjusting your search or filter criteria.</p>
              <EnhancedButton
                variant="outline"
                onClick={() => {
                  setSearchTerm("")
                  setSelectedCategory("all")
                  setSelectedTech("all")
                }}
              >
                Clear Filters
              </EnhancedButton>
            </div>
          )}
        </AnimatedSection>
      </Container>
    </PageLayout>
  )
}
```

## 4. Products Page Enhancements

### 4.1 Enhanced Products Page

**File: `app/products/page.tsx`**

```typescript
"use client"

import { useState, useMemo } from "react"
import { Briefcase, TrendingUp, Filter, Search } from "lucide-react"
import { PageLayout } from "@/components/layout/page-layout"
import { PageHeader } from "@/components/ui/page-header"
import { Container } from "@/components/layout/container"
import { ProductCard } from "@/components/ui/product-card"
import { AnimatedSection } from "@/components/ui/animated-section"
import { EnhancedButton } from "@/components/ui/enhanced-button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

/**
 * Enhanced products page showcasing business ventures and SaaS products
 */
export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedStatus, setSelectedStatus] = useState("all")

  // Mock products data - replace with actual data
  const products = [
    {
      id: 1,
      title: "SaaS Analytics Platform",
      description: "Comprehensive analytics dashboard for SaaS businesses to track key metrics and growth.",
      image: "/products/analytics.jpg",
      category: "SaaS",
      status: "Live" as const,
      url: "https://example.com",
      featured: true,
      metrics: {
        users: "2.5K+",
        revenue: "$50K+",
        growth: "+150%",
        launched: "2023"
      }
    },
    // Add more products...
  ]

  const categories = ["all", "SaaS", "E-commerce", "Tool", "Service", "Marketplace"]
  const statuses = ["all", "Live", "Beta", "Coming Soon"]

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = selectedCategory === "all" || product.category === selectedCategory
      const matchesStatus = selectedStatus === "all" || product.status === selectedStatus
      return matchesSearch && matchesCategory && matchesStatus
    })
  }, [products, searchTerm, selectedCategory, selectedStatus])

  const totalRevenue = products.reduce((sum, product) => {
    const revenue = product.metrics?.revenue?.replace(/[^0-9]/g, '') || '0'
    return sum + parseInt(revenue)
  }, 0)

  const totalUsers = products.reduce((sum, product) => {
    const users = product.metrics?.users?.replace(/[^0-9]/g, '') || '0'
    return sum + parseInt(users)
  }, 0)

  return (
    <PageLayout>
      <PageHeader
        title="My Products"
        subtitle="Business Ventures"
        description="Products and SaaS solutions I've built that generate revenue and solve real business problems."
        icon={<Briefcase className="w-8 h-8 text-white" />}
      >
        {/* Key Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8 max-w-2xl mx-auto">
          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 border border-yellow-200 text-center">
            <div className="text-2xl font-bold text-orange-600">{products.length}</div>
            <div className="text-sm text-gray-600">Products Built</div>
          </div>
          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 border border-yellow-200 text-center">
            <div className="text-2xl font-bold text-green-600">${totalRevenue}K+</div>
            <div className="text-sm text-gray-600">Revenue Generated</div>
          </div>
          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 border border-yellow-200 text-center">
            <div className="text-2xl font-bold text-blue-600">{totalUsers}K+</div>
            <div className="text-sm text-gray-600">Users Served</div>
          </div>
        </div>
      </PageHeader>

      <Container className="py-16">
        
        {/* Filters */}
        <AnimatedSection animation="slideUp" className="mb-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-yellow-200 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-white border-gray-200 focus:border-orange-400 focus:ring-orange-400"
                />
              </div>

              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="bg-white border-gray-200">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map(category => (
                    <SelectItem key={category} value={category}>
                      {category === "all" ? "All Categories" : category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                <SelectTrigger className="bg-white border-gray-200">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  {statuses.map(status => (
                    <SelectItem key={status} value={status}>
                      {status === "all" ? "All Statuses" : status}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <div className="text-sm text-gray-600 flex items-center justify-center bg-gray-50 rounded-lg px-3 py-2">
                {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Products Grid */}
        <AnimatedSection animation="slideUp" delay={0.2}>
          {filteredProducts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <ProductCard {...product} />
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">No products found</h3>
              <p className="text-gray-600 mb-6">Try adjusting your search or filter criteria.</p>
              <EnhancedButton
                variant="outline"
                onClick={() => {
                  setSearchTerm("")
                  setSelectedCategory("all")
                  setSelectedStatus("all")
                }}
              >
                Clear Filters
              </EnhancedButton>
            </div>
          )}
        </AnimatedSection>
      </Container>
    </PageLayout>
  )
}
```

## 5. Articles Page Enhancements

### 5.1 Enhanced Articles Page

**File: `app/articles/page.tsx`**

```typescript
"use client"

import { useState, useMemo } from "react"
import { BookOpen, Search, Calendar, Clock, Tag } from "lucide-react"
import { PageLayout } from "@/components/layout/page-layout"
import { PageHeader } from "@/components/ui/page-header"
import { Container } from "@/components/layout/container"
import { ArticleCard } from "@/components/ui/article-card"
import { AnimatedSection } from "@/components/ui/animated-section"
import { EnhancedButton } from "@/components/ui/enhanced-button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

/**
 * Enhanced articles page with improved filtering and reading experience
 */
export default function ArticlesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [sortBy, setSortBy] = useState("newest")

  // Mock articles data - replace with actual data
  const articles = [
    {
      id: 1,
      title: "Building Scalable SaaS Applications with Next.js",
      excerpt: "Learn how to build and scale SaaS applications using Next.js, focusing on performance, SEO, and user experience.",
      image: "/articles/nextjs-saas.jpg",
      category: "Development",
      publishedAt: "2024-01-15",
      readTime: "8 min read",
      slug: "building-scalable-saas-nextjs",
      featured: true,
      stats: {
        views: 1250,
        likes: 89
      }
    },
    // Add more articles...
  ]

  const categories = ["all", "Development", "Business", "Product", "Entrepreneurship", "Technology"]

  const filteredArticles = useMemo(() => {
    return articles
      .filter(article => {
        const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            article.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
        const matchesCategory = selectedCategory === "all" || article.category === selectedCategory
        return matchesSearch && matchesCategory
      })
      .sort((a, b) => {
        switch (sortBy) {
          case "newest":
            return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
          case "oldest":
            return new Date(a.publishedAt).getTime() - new Date(b.publishedAt).getTime()
          case "popular":
            return (b.stats?.views || 0) - (a.stats?.views || 0)
          case "featured":
            return b.featured ? 1 : -1
          default:
            return 0
        }
      })
  }, [articles, searchTerm, selectedCategory, sortBy])

  const totalViews = articles.reduce((sum, article) => sum + (article.stats?.views || 0), 0)
  const totalLikes = articles.reduce((sum, article) => sum + (article.stats?.likes || 0), 0)

  return (
    <PageLayout>
      <PageHeader
        title="Articles & Insights"
        subtitle="Knowledge Sharing"
        description="Thoughts on entrepreneurship, product development, and technology. Sharing lessons learned from building products and growing businesses."
        icon={<BookOpen className="w-8 h-8 text-white" />}
      >
        {/* Blog Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8 max-w-2xl mx-auto">
          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 border border-yellow-200 text-center">
            <div className="text-2xl font-bold text-orange-600">{articles.length}</div>
            <div className="text-sm text-gray-600">Articles Published</div>
          </div>
          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 border border-yellow-200 text-center">
            <div className="text-2xl font-bold text-blue-600">{totalViews.toLocaleString()}</div>
            <div className="text-sm text-gray-600">Total Views</div>
          </div>
          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 border border-yellow-200 text-center">
            <div className="text-2xl font-bold text-green-600">{totalLikes}</div>
            <div className="text-sm text-gray-600">Total Likes</div>
          </div>
        </div>
      </PageHeader>

      <Container className="py-16">
        
        {/* Filters */}
        <AnimatedSection animation="slideUp" className="mb-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-yellow-200 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-white border-gray-200 focus:border-orange-400 focus:ring-orange-400"
                />
              </div>

              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="bg-white border-gray-200">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map(category => (
                    <SelectItem key={category} value={category}>
                      {category === "all" ? "All Categories" : category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="bg-white border-gray-200">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest First</SelectItem>
                  <SelectItem value="oldest">Oldest First</SelectItem>
                  <SelectItem value="popular">Most Popular</SelectItem>
                  <SelectItem value="featured">Featured First</SelectItem>
                </SelectContent>
              </Select>

              <div className="text-sm text-gray-600 flex items-center justify-center bg-gray-50 rounded-lg px-3 py-2">
                {filteredArticles.length} article{filteredArticles.length !== 1 ? 's' : ''}
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Articles Grid */}
        <AnimatedSection animation="slideUp" delay={0.2}>
          {filteredArticles.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article, index) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <ArticleCard {...article} />
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">No articles found</h3>
              <p className="text-gray-600 mb-6">Try adjusting your search or filter criteria.</p>
              <EnhancedButton
                variant="outline"
                onClick={() => {
                  setSearchTerm("")
                  setSelectedCategory("all")
                }}
              >
                Clear Filters
              </EnhancedButton>
            </div>
          )}
        </AnimatedSection>
      </Container>
    </PageLayout>
  )
}
```

## 6. Additional Page Enhancements

### 6.1 Business Page

**File: `app/business/page.tsx`**

```typescript
import { PageLayout } from "@/components/layout/page-layout"
import { PageHeader } from "@/components/ui/page-header"
import { Container } from "@/components/layout/container"
import { Briefcase } from "lucide-react"

/**
 * Business insights and entrepreneurship content page
 */
export default function BusinessPage() {
  return (
    <PageLayout>
      <PageHeader
        title="Business & Entrepreneurship"
        subtitle="Insights"
        description="Lessons learned from building products, growing businesses, and navigating the entrepreneurial journey."
        icon={<Briefcase className="w-8 h-8 text-white" />}
      />
      
      <Container className="py-16">
        {/* Business content sections */}
      </Container>
    </PageLayout>
  )
}
```

### 6.2 Tools Page

**File: `app/tools/page.tsx`**

```typescript
import { PageLayout } from "@/components/layout/page-layout"
import { PageHeader } from "@/components/ui/page-header"
import { Container } from "@/components/layout/container"
import { Wrench } from "lucide-react"

/**
 * Development tools and resources page
 */
export default function ToolsPage() {
  return (
    <PageLayout>
      <PageHeader
        title="Tools & Resources"
        subtitle="Development"
        description="Curated collection of tools, frameworks, and resources I use for building products and solving problems."
        icon={<Wrench className="w-8 h-8 text-white" />}
      />
      
      <Container className="py-16">
        {/* Tools content sections */}
      </Container>
    </PageLayout>
  )
}
```

## 7. Implementation Checklist

### Phase 1: Core Components
- [ ] Update global styles and Tailwind config
- [ ] Implement enhanced UI components
- [ ] Create layout components
- [ ] Test component library

### Phase 2: Page Updates
- [ ] Enhance home page with new hero and about sections
- [ ] Update projects page with filtering and search
- [ ] Improve products page with metrics and categories
- [ ] Enhance articles page with better content organization

### Phase 3: Additional Pages
- [ ] Implement business page
- [ ] Create tools page
- [ ] Add videos page
- [ ] Enhance newsletter page
- [ ] Update book notes page

### Phase 4: Testing & Optimization
- [ ] Cross-browser testing
- [ ] Mobile responsiveness testing
- [ ] Performance optimization
- [ ] Accessibility testing
- [ ] SEO optimization

This comprehensive enhancement guide ensures every page maintains consistent design quality while providing unique, valuable content for visitors.