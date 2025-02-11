"use client"

import { ArrowLeft, ExternalLink, CheckCircle2, Star } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import Image from "next/image"

// This would typically come from a CMS or API
const projectDetails = {
  "api-development": {
    title: "Modern API Development Solutions",
    description: "Crafting robust, scalable and secure APIs that power modern applications. We follow industry best practices and standards to deliver high-performance solutions tailored to your needs.",
    color: "#FF6B6B",
    gradient: "from-[#FAF9F7] via-[#FFF0F0] to-[#FAF9F7]",
    images: [
      "/api-dashboard.jpg",
      "/api-documentation.jpg", 
      "/api-testing.jpg",
      "/api-monitoring.jpg"
    ],
    features: [
      "Custom RESTful API Design & Development with Industry Standards",
      "Modern GraphQL Implementation for Flexible Data Querying",
      "Enterprise-Grade Security with OAuth2 & JWT Authentication",
      "Advanced Performance Optimization & Caching Strategies",
      "Comprehensive API Documentation with OpenAPI/Swagger",
      "Cloud-Native Scalable Architecture Design"
    ],
    highlights: [
      "Seamless Integration with Existing Systems & Third-party Services",
      "Efficient Real-time Data Exchange & Synchronization",
      "Enhanced User Experience with Fast Response Times", 
      "Improved Business Process Automation & Efficiency",
      "Future-Ready Solutions with Modern Tech Stack"
    ],
    technologies: [
      "Node.js & Express",
      "GraphQL & Apollo",
      "RESTful Architecture",
      "MongoDB Atlas",
      "PostgreSQL", 
      "Redis Cache",
      "Docker Containers",
      "Kubernetes",
      "AWS Cloud",
      "CI/CD Pipeline"
    ],
    milestones: [
      {
        title: "Discovery & Requirements Analysis",
        description: "In-depth analysis of your business needs, technical requirements, and project objectives to create a comprehensive development roadmap"
      },
      {
        title: "Architecture & API Design",
        description: "Creating an optimal API structure with efficient endpoints, robust data models, and scalable architecture patterns"
      },
      {
        title: "Development & Implementation", 
        description: "Building your API using modern technologies, implementing security best practices, and ensuring code quality"
      },
      {
        title: "Testing & Quality Assurance",
        description: "Comprehensive testing including unit tests, integration tests, performance testing, and security audits"
      },
      {
        title: "Deployment & Monitoring",
        description: "Secure deployment to production, setting up monitoring tools, analytics, and maintaining high availability"
      }
    ]
  }
  // Add other projects here
}

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const project = projectDetails["api-development" as keyof typeof projectDetails]

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-serif mb-4">Project Not Found</h1>
          <Link 
            href="/projects"
            className="text-blue-600 hover:underline"
          >
            Return to Projects
          </Link>
        </div>
      </div>
    )
  }
  
  return (
    <div className={`min-h-screen bg-gradient-to-br ${project.gradient}`}>
      <div className="container mx-auto px-4 py-16">
        {/* Back Button */}
        <Link 
          href="/projects" 
          className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors mb-8 hover:scale-105 transform duration-200"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Projects
        </Link>

        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif tracking-tight mb-8 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
            {project.title}
            <span 
              className="block h-2 w-48 mx-auto mt-6 rounded-full"
              style={{ backgroundColor: project.color }}
            />
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {project.description}
          </p>
        </motion.div>

        {/* Enhanced Image Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-20 max-w-7xl mx-auto px-4"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {project.images.map((image, index) => (
              <motion.div
                key={index}
                className="group relative h-[300px] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ scale: 1.03 }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                <Image
                  src={image}
                  alt={`Project image ${index + 1}`}
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-20">
                  <h3 className="text-lg font-semibold">
                    {image.split('/').pop()?.split('.')[0].split('-').map(word => 
                      word.charAt(0).toUpperCase() + word.slice(1)
                    ).join(' ')}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Features */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white/90 backdrop-blur-sm rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <h2 className="text-3xl font-serif mb-8 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">Comprehensive Features</h2>
            <div className="space-y-6">
              {project.features.map((feature, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-start hover:translate-x-2 transition-transform duration-200"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <CheckCircle2 
                    className="w-6 h-6 mr-4 flex-shrink-0"
                    style={{ color: project.color }}
                  />
                  <span className="text-gray-700 text-lg">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Highlights */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white/90 backdrop-blur-sm rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <h2 className="text-3xl font-serif mb-8 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">Key Benefits</h2>
            <div className="space-y-6">
              {project.highlights.map((highlight, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-start hover:translate-x-2 transition-transform duration-200"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Star
                    className="w-6 h-6 mr-4 flex-shrink-0"
                    style={{ color: project.color }}
                  />
                  <span className="text-gray-700 text-lg">{highlight}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Project Timeline */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="max-w-5xl mx-auto mt-24"
        >
          <h2 className="text-4xl font-serif text-center mb-16 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">Development Journey</h2>
          <div className="space-y-12">
            {project.milestones.map((milestone, index) => (
              <motion.div 
                key={index} 
                className="flex items-start group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
              >
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0 mr-8 transform group-hover:scale-110 transition-transform duration-200"
                  style={{ backgroundColor: project.color }}
                >
                  {index + 1}
                </div>
                <div className="group-hover:translate-x-2 transition-transform duration-200">
                  <h3 className="text-2xl font-serif mb-3">{milestone.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Technologies */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-24 text-center"
        >
          <h2 className="text-4xl font-serif mb-12 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">Modern Tech Stack</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {project.technologies.map((tech, index) => (
              <motion.span 
                key={index}
                className="px-8 py-4 bg-white/90 backdrop-blur-sm rounded-full text-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-default text-lg font-medium"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center mt-24"
        >
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-16 max-w-3xl mx-auto shadow-2xl hover:shadow-3xl transition-all duration-300">
            <h2 className="text-4xl font-serif mb-8 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">Ready to Transform Your API Infrastructure?</h2>
            <p className="text-gray-600 mb-10 text-xl leading-relaxed">
              Let's collaborate to build a robust, scalable API solution that drives your business forward.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-12 py-6 text-xl font-medium text-white rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105"
              style={{ backgroundColor: project.color }}
            >
              Start Your Project
              <ExternalLink className="ml-3 h-6 w-6" />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}