'use client'

import React from 'react'
import { useParams } from 'next/navigation'
import ProductDetails from './ProductDetails'

/**
 * Product data structure - Contains detailed information about each product
 */
const productData = [
  {
    id: 1,
    title: "TodoX",
    slug: "todox",
    description: "A powerful task management app that helps users organize their daily tasks and projects efficiently.",
    longDescription: "TodoX is a comprehensive task management application designed to help individuals and teams stay organized and productive. Built with React Native and Django, it offers a seamless experience across mobile devices with features like task categorization, deadline tracking, and progress monitoring. The app focuses on simplicity while providing powerful features that help users manage their daily workflow effectively.",
    myRole: "As the founder and lead developer of TodoX, I conceptualized, designed, and built this task management application from the ground up. I handled the complete development cycle including backend API development with Django, mobile app development with React Native, database design, and deployment. This was my first product launch, teaching me valuable lessons about product development, user experience design, and the importance of solving real user problems.",
    keyFeatures: [
      "Intuitive task creation and management",
      "Project organization and categorization", 
      "Deadline tracking with smart notifications",
      "Progress monitoring and analytics",
      "Cross-platform mobile support",
      "Offline functionality for uninterrupted productivity",
      "Clean and minimalist user interface",
      "Secure data synchronization"
    ],
    keyLearnings: "Building TodoX taught me the fundamentals of product development from ideation to launch. I learned the importance of user research, iterative design, and the technical challenges of building cross-platform mobile applications. This project helped me understand user behavior patterns in productivity apps and the significance of creating intuitive user experiences. It also gave me hands-on experience with mobile app deployment, user feedback collection, and product iteration based on real user needs.",
    images: [
      "/projects/todox/banner.jpeg",
    ],
    demoLink: null,
    githubLink: null,
    teamSize: "1 (Solo Project)",
    startDate: "April 2020",
    endDate: "November 2021",
    skills: ["Django", "Django Rest Framework", "React Native", "Expo", "PostgreSQL", "Docker"],
    status: "Live",
    users: "1K+",
    rating: 4.8,
    price: "Free",
    category: ["mobile-app", "productivity"],
    isFirstProduct: true
  }
]

/**
 * Product page component - Displays individual product details based on slug
 */
export default function ProductPage() {
  const params = useParams()
  const slug = params.slug as string
  
  const product = productData.find(p => p.slug === slug)
  
  if (!product) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <p className="text-gray-600 mb-8">The product you're looking for doesn't exist.</p>
          <a href="/products" className="text-emerald-600 hover:text-emerald-700 font-medium">
            ← Back to Products
          </a>
        </div>
      </div>
    )
  }

  return <ProductDetails productData={product} />
}