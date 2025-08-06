# Component Library Documentation

## 1. Overview

This document outlines the reusable UI components designed for Mostafijur Rahman's personal website. These components ensure design consistency, improve development efficiency, and maintain a professional appearance across all pages.

## 2. Core UI Components

### 2.1 PremiumCard Component

**File: `components/ui/premium-card.tsx`**

```typescript
"use client"

import { ReactNode } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface PremiumCardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  glow?: boolean
  gradient?: boolean
  onClick?: () => void
}

/**
 * Premium card component with glassmorphism effects and hover animations
 * Used for showcasing products, projects, and content sections
 */
export function PremiumCard({ 
  children, 
  className, 
  hover = true, 
  glow = false, 
  gradient = false,
  onClick 
}: PremiumCardProps) {
  return (
    <motion.div
      className={cn(
        "premium-card rounded-2xl p-6 transition-all duration-300",
        hover && "premium-card-hover cursor-pointer",
        glow && "shadow-glow",
        gradient && "bg-gradient-to-br from-white/90 to-yellow-50/90",
        className
      )}
      whileHover={hover ? { y: -8, scale: 1.02 } : {}}
      whileTap={onClick ? { scale: 0.98 } : {}}
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  )
}
```

### 2.2 EnhancedButton Component

**File: `components/ui/enhanced-button.tsx`**

```typescript
"use client"

import { ReactNode } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface EnhancedButtonProps {
  children: ReactNode
  variant?: "primary" | "secondary" | "outline" | "ghost"
  size?: "sm" | "md" | "lg"
  className?: string
  onClick?: () => void
  disabled?: boolean
  loading?: boolean
  icon?: ReactNode
  iconPosition?: "left" | "right"
}

/**
 * Enhanced button component with animations and multiple variants
 * Provides consistent styling across the application
 */
export function EnhancedButton({
  children,
  variant = "primary",
  size = "md",
  className,
  onClick,
  disabled = false,
  loading = false,
  icon,
  iconPosition = "left"
}: EnhancedButtonProps) {
  const baseClasses = "font-bold rounded-full transition-all duration-300 focus-ring"
  
  const variantClasses = {
    primary: "bg-gradient-primary hover:shadow-xl text-white shadow-lg hover:-translate-y-1 hover:scale-105 border-2 border-transparent hover:border-yellow-300",
    secondary: "bg-gradient-secondary hover:shadow-xl text-white shadow-lg hover:-translate-y-1 hover:scale-105 border-2 border-transparent hover:border-orange-300",
    outline: "border-2 border-orange-400 hover:border-orange-500 hover:bg-orange-50 text-orange-600 hover:text-orange-700 hover:-translate-y-1 hover:scale-105",
    ghost: "hover:bg-yellow-50 hover:text-orange-600 text-gray-700 hover:-translate-y-1"
  }
  
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  }

  return (
    <motion.div
      whileHover={{ scale: disabled ? 1 : 1.05 }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
    >
      <Button
        className={cn(
          baseClasses,
          variantClasses[variant],
          sizeClasses[size],
          disabled && "opacity-50 cursor-not-allowed",
          className
        )}
        onClick={onClick}
        disabled={disabled || loading}
      >
        {loading ? (
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
            Loading...
          </div>
        ) : (
          <div className="flex items-center gap-2">
            {icon && iconPosition === "left" && icon}
            {children}
            {icon && iconPosition === "right" && icon}
          </div>
        )}
      </Button>
    </motion.div>
  )
}
```

### 2.3 AnimatedSection Component

**File: `components/ui/animated-section.tsx`**

```typescript
"use client"

import { ReactNode } from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  animation?: "fadeIn" | "slideUp" | "slideLeft" | "slideRight" | "scale"
  delay?: number
  duration?: number
}

/**
 * Animated section component that triggers animations when in view
 * Used for page sections and content blocks
 */
export function AnimatedSection({
  children,
  className = "",
  animation = "fadeIn",
  delay = 0,
  duration = 0.6
}: AnimatedSectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const animations = {
    fadeIn: {
      initial: { opacity: 0 },
      animate: { opacity: 1 }
    },
    slideUp: {
      initial: { opacity: 0, y: 50 },
      animate: { opacity: 1, y: 0 }
    },
    slideLeft: {
      initial: { opacity: 0, x: -50 },
      animate: { opacity: 1, x: 0 }
    },
    slideRight: {
      initial: { opacity: 0, x: 50 },
      animate: { opacity: 1, x: 0 }
    },
    scale: {
      initial: { opacity: 0, scale: 0.8 },
      animate: { opacity: 1, scale: 1 }
    }
  }

  return (
    <motion.div
      ref={ref}
      initial={animations[animation].initial}
      animate={isInView ? animations[animation].animate : animations[animation].initial}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
```

### 2.4 PageHeader Component

**File: `components/ui/page-header.tsx`**

```typescript
"use client"

import { ReactNode } from "react"
import { motion } from "framer-motion"
import { AnimatedSection } from "@/components/ui/animated-section"

interface PageHeaderProps {
  title: string
  subtitle?: string
  description?: string
  icon?: ReactNode
  gradient?: boolean
  children?: ReactNode
}

/**
 * Consistent page header component used across all pages
 * Provides title, subtitle, description, and optional content
 */
export function PageHeader({
  title,
  subtitle,
  description,
  icon,
  gradient = true,
  children
}: PageHeaderProps) {
  return (
    <section className={`relative py-20 overflow-hidden ${
      gradient ? 'bg-gradient-hero' : 'bg-white'
    }`}>
      
      {/* Background Elements */}
      {gradient && (
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            className="absolute top-20 -right-20 w-40 h-40 bg-gradient-to-br from-yellow-300/20 to-orange-400/20 rounded-full mix-blend-multiply filter blur-xl"
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360]
            }}
            transition={{ 
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div 
            className="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-br from-amber-300/20 to-orange-500/20 rounded-full mix-blend-multiply filter blur-xl"
            animate={{ 
              scale: [1.2, 1, 1.2],
              rotate: [360, 180, 0]
            }}
            transition={{ 
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>
      )}

      <div className="container-custom relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          
          {/* Icon */}
          {icon && (
            <AnimatedSection animation="scale" delay={0.1}>
              <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl">
                {icon}
              </div>
            </AnimatedSection>
          )}

          {/* Subtitle */}
          {subtitle && (
            <AnimatedSection animation="slideUp" delay={0.2}>
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-yellow-200 rounded-full px-4 py-2 text-sm font-medium text-gray-700 shadow-lg mb-4">
                <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
                {subtitle}
              </div>
            </AnimatedSection>
          )}

          {/* Title */}
          <AnimatedSection animation="slideUp" delay={0.3}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-shadow">
              <span className="text-gradient">{title}</span>
            </h1>
          </AnimatedSection>

          {/* Description */}
          {description && (
            <AnimatedSection animation="slideUp" delay={0.4}>
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto mb-8">
                {description}
              </p>
            </AnimatedSection>
          )}

          {/* Additional Content */}
          {children && (
            <AnimatedSection animation="slideUp" delay={0.5}>
              {children}
            </AnimatedSection>
          )}
        </div>
      </div>
    </section>
  )
}
```

### 2.5 ProjectCard Component

**File: `components/ui/project-card.tsx`**

```typescript
"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ExternalLink, Github, Calendar, Users, Star } from "lucide-react"
import { PremiumCard } from "@/components/ui/premium-card"
import { EnhancedButton } from "@/components/ui/enhanced-button"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
  featured?: boolean
  stats?: {
    users?: string
    stars?: number
    date?: string
  }
}

/**
 * Project card component for displaying projects in grid layouts
 * Features hover effects, technology tags, and action buttons
 */
export function ProjectCard({
  title,
  description,
  image,
  technologies,
  liveUrl,
  githubUrl,
  featured = false,
  stats
}: ProjectCardProps) {
  return (
    <PremiumCard className="group overflow-hidden h-full flex flex-col" hover glow={featured}>
      
      {/* Featured Badge */}
      {featured && (
        <div className="absolute top-4 right-4 z-10 bg-gradient-primary text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg flex items-center gap-1">
          <Star className="w-3 h-3 fill-current" />
          Featured
        </div>
      )}

      {/* Project Image */}
      <div className="relative h-48 mb-4 rounded-xl overflow-hidden bg-gradient-to-br from-yellow-100 to-orange-100">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col">
        
        {/* Title and Description */}
        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
            {title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            {description}
          </p>
        </div>

        {/* Stats */}
        {stats && (
          <div className="flex items-center gap-4 mb-4 text-xs text-gray-500">
            {stats.users && (
              <div className="flex items-center gap-1">
                <Users className="w-3 h-3" />
                {stats.users}
              </div>
            )}
            {stats.stars && (
              <div className="flex items-center gap-1">
                <Star className="w-3 h-3" />
                {stats.stars}
              </div>
            )}
            {stats.date && (
              <div className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {stats.date}
              </div>
            )}
          </div>
        )}

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded-full border border-yellow-200"
            >
              {tech}
            </span>
          ))}
          {technologies.length > 4 && (
            <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full border border-gray-200">
              +{technologies.length - 4} more
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 mt-auto">
          {liveUrl && (
            <EnhancedButton
              variant="primary"
              size="sm"
              className="flex-1"
              onClick={() => window.open(liveUrl, '_blank')}
              icon={<ExternalLink className="w-4 h-4" />}
              iconPosition="right"
            >
              Live Demo
            </EnhancedButton>
          )}
          {githubUrl && (
            <EnhancedButton
              variant="outline"
              size="sm"
              className={liveUrl ? "" : "flex-1"}
              onClick={() => window.open(githubUrl, '_blank')}
              icon={<Github className="w-4 h-4" />}
            >
              {liveUrl ? "" : "View Code"}
            </EnhancedButton>
          )}
        </div>
      </div>
    </PremiumCard>
  )
}
```

### 2.6 ProductCard Component

**File: `components/ui/product-card.tsx`**

```typescript
"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ExternalLink, TrendingUp, Users, DollarSign, Calendar } from "lucide-react"
import { PremiumCard } from "@/components/ui/premium-card"
import { EnhancedButton } from "@/components/ui/enhanced-button"

interface ProductCardProps {
  title: string
  description: string
  image: string
  category: string
  status: "Live" | "Beta" | "Coming Soon"
  url?: string
  metrics?: {
    users?: string
    revenue?: string
    growth?: string
    launched?: string
  }
  featured?: boolean
}

/**
 * Product card component for displaying products and business ventures
 * Features status indicators, metrics, and professional styling
 */
export function ProductCard({
  title,
  description,
  image,
  category,
  status,
  url,
  metrics,
  featured = false
}: ProductCardProps) {
  const statusColors = {
    "Live": "bg-green-100 text-green-800 border-green-200",
    "Beta": "bg-blue-100 text-blue-800 border-blue-200",
    "Coming Soon": "bg-yellow-100 text-yellow-800 border-yellow-200"
  }

  return (
    <PremiumCard className="group overflow-hidden h-full flex flex-col" hover glow={featured}>
      
      {/* Status and Category */}
      <div className="flex justify-between items-start mb-4">
        <span className="px-3 py-1 bg-orange-100 text-orange-800 text-xs font-medium rounded-full border border-orange-200">
          {category}
        </span>
        <span className={`px-3 py-1 text-xs font-medium rounded-full border ${statusColors[status]}`}>
          {status}
        </span>
      </div>

      {/* Product Image */}
      <div className="relative h-40 mb-4 rounded-xl overflow-hidden bg-gradient-to-br from-yellow-100 to-orange-100">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col">
        
        {/* Title and Description */}
        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
            {title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            {description}
          </p>
        </div>

        {/* Metrics */}
        {metrics && (
          <div className="grid grid-cols-2 gap-3 mb-6">
            {metrics.users && (
              <div className="text-center p-3 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg border border-blue-200">
                <Users className="w-4 h-4 text-blue-600 mx-auto mb-1" />
                <div className="text-sm font-bold text-blue-800">{metrics.users}</div>
                <div className="text-xs text-blue-600">Users</div>
              </div>
            )}
            {metrics.revenue && (
              <div className="text-center p-3 bg-gradient-to-br from-green-50 to-green-100 rounded-lg border border-green-200">
                <DollarSign className="w-4 h-4 text-green-600 mx-auto mb-1" />
                <div className="text-sm font-bold text-green-800">{metrics.revenue}</div>
                <div className="text-xs text-green-600">Revenue</div>
              </div>
            )}
            {metrics.growth && (
              <div className="text-center p-3 bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg border border-orange-200">
                <TrendingUp className="w-4 h-4 text-orange-600 mx-auto mb-1" />
                <div className="text-sm font-bold text-orange-800">{metrics.growth}</div>
                <div className="text-xs text-orange-600">Growth</div>
              </div>
            )}
            {metrics.launched && (
              <div className="text-center p-3 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg border border-purple-200">
                <Calendar className="w-4 h-4 text-purple-600 mx-auto mb-1" />
                <div className="text-sm font-bold text-purple-800">{metrics.launched}</div>
                <div className="text-xs text-purple-600">Launched</div>
              </div>
            )}
          </div>
        )}

        {/* Action Button */}
        {url && status === "Live" && (
          <div className="mt-auto">
            <EnhancedButton
              variant="primary"
              size="sm"
              className="w-full"
              onClick={() => window.open(url, '_blank')}
              icon={<ExternalLink className="w-4 h-4" />}
              iconPosition="right"
            >
              Visit Product
            </EnhancedButton>
          </div>
        )}
        
        {status === "Coming Soon" && (
          <div className="mt-auto">
            <EnhancedButton
              variant="outline"
              size="sm"
              className="w-full"
              disabled
            >
              Coming Soon
            </EnhancedButton>
          </div>
        )}
      </div>
    </PremiumCard>
  )
}
```

### 2.7 ArticleCard Component

**File: `components/ui/article-card.tsx`**

```typescript
"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Calendar, Clock, ArrowRight, Eye, Heart } from "lucide-react"
import { PremiumCard } from "@/components/ui/premium-card"

interface ArticleCardProps {
  title: string
  excerpt: string
  image: string
  category: string
  publishedAt: string
  readTime: string
  slug: string
  featured?: boolean
  stats?: {
    views?: number
    likes?: number
  }
}

/**
 * Article card component for blog posts and content
 * Features reading time, category tags, and engagement metrics
 */
export function ArticleCard({
  title,
  excerpt,
  image,
  category,
  publishedAt,
  readTime,
  slug,
  featured = false,
  stats
}: ArticleCardProps) {
  return (
    <PremiumCard className="group overflow-hidden h-full flex flex-col" hover glow={featured}>
      
      {/* Article Image */}
      <div className="relative h-48 mb-4 rounded-xl overflow-hidden bg-gradient-to-br from-yellow-100 to-orange-100">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-orange-600 px-3 py-1 rounded-full text-xs font-bold border border-orange-200">
          {category}
        </div>
        
        {/* Featured Badge */}
        {featured && (
          <div className="absolute top-4 right-4 bg-gradient-primary text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
            Featured
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col">
        
        {/* Meta Information */}
        <div className="flex items-center gap-4 mb-3 text-xs text-gray-500">
          <div className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            {publishedAt}
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {readTime}
          </div>
          {stats && (
            <>
              {stats.views && (
                <div className="flex items-center gap-1">
                  <Eye className="w-3 h-3" />
                  {stats.views}
                </div>
              )}
              {stats.likes && (
                <div className="flex items-center gap-1">
                  <Heart className="w-3 h-3" />
                  {stats.likes}
                </div>
              )}
            </>
          )}
        </div>

        {/* Title and Excerpt */}
        <div className="mb-4 flex-1">
          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors line-clamp-2">
            {title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
            {excerpt}
          </p>
        </div>

        {/* Read More Link */}
        <Link
          href={`/articles/${slug}`}
          className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-medium text-sm transition-colors group/link"
        >
          Read Article
          <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
        </Link>
      </div>
    </PremiumCard>
  )
}
```

## 3. Layout Components

### 3.1 PageLayout Component

**File: `components/layout/page-layout.tsx`**

```typescript
"use client"

import { ReactNode } from "react"
import { EnhancedNavbar } from "@/components/enhanced-navbar"
import { Footer } from "@/components/footer"

interface PageLayoutProps {
  children: ReactNode
  className?: string
}

/**
 * Main page layout component that wraps all pages
 * Provides consistent navigation and footer
 */
export function PageLayout({ children, className = "" }: PageLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <EnhancedNavbar />
      <main className={`flex-1 pt-16 ${className}`}>
        {children}
      </main>
      <Footer />
    </div>
  )
}
```

### 3.2 Container Component

**File: `components/layout/container.tsx`**

```typescript
import { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface ContainerProps {
  children: ReactNode
  className?: string
  size?: "sm" | "md" | "lg" | "xl" | "full"
}

/**
 * Responsive container component with consistent padding and max-widths
 */
export function Container({ children, className, size = "lg" }: ContainerProps) {
  const sizeClasses = {
    sm: "max-w-3xl",
    md: "max-w-5xl",
    lg: "max-w-7xl",
    xl: "max-w-8xl",
    full: "max-w-full"
  }

  return (
    <div className={cn(
      "mx-auto px-4 sm:px-6 lg:px-8",
      sizeClasses[size],
      className
    )}>
      {children}
    </div>
  )
}
```

## 4. Utility Components

### 4.1 LoadingSpinner Component

**File: `components/ui/loading-spinner.tsx`**

```typescript
import { cn } from "@/lib/utils"

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg"
  className?: string
}

/**
 * Loading spinner component with consistent styling
 */
export function LoadingSpinner({ size = "md", className }: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-8 h-8"
  }

  return (
    <div className={cn(
      "border-2 border-orange-200 border-t-orange-600 rounded-full animate-spin",
      sizeClasses[size],
      className
    )} />
  )
}
```

### 4.2 EmptyState Component

**File: `components/ui/empty-state.tsx`**

```typescript
import { ReactNode } from "react"
import { motion } from "framer-motion"

interface EmptyStateProps {
  icon: ReactNode
  title: string
  description: string
  action?: ReactNode
}

/**
 * Empty state component for when no content is available
 */
export function EmptyState({ icon, title, description, action }: EmptyStateProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center py-12"
    >
      <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 text-white">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-6 max-w-md mx-auto">{description}</p>
      {action && action}
    </motion.div>
  )
}
```

## 5. Usage Guidelines

### 5.1 Component Composition

```typescript
// Example: Using components together
import { PageLayout } from "@/components/layout/page-layout"
import { PageHeader } from "@/components/ui/page-header"
import { Container } from "@/components/layout/container"
import { ProjectCard } from "@/components/ui/project-card"
import { AnimatedSection } from "@/components/ui/animated-section"

export default function ProjectsPage() {
  return (
    <PageLayout>
      <PageHeader
        title="My Projects"
        subtitle="Portfolio"
        description="A collection of products and solutions I've built to solve real-world problems."
        icon={<Code className="w-8 h-8 text-white" />}
      />
      
      <Container className="py-16">
        <AnimatedSection animation="slideUp">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
        </AnimatedSection>
      </Container>
    </PageLayout>
  )
}
```

### 5.2 Styling Consistency

- Use the predefined color palette from the Tailwind config
- Apply consistent spacing using the spacing scale
- Use the animation utilities for smooth interactions
- Follow the glassmorphism design pattern for cards and overlays
- Maintain consistent typography hierarchy

### 5.3 Accessibility

- All interactive components include focus states
- Color contrast meets WCAG 2.1 AA standards
- Components support keyboard navigation
- Screen reader friendly markup and ARIA labels

This component library ensures consistent design implementation across all pages while maintaining flexibility for specific use cases.