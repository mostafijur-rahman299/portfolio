"use client"

import { useState } from "react"
import { ArrowLeft, ExternalLink, CheckCircle2, Code, Zap, Clock, GitBranch } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// This would typically come from a CMS or API
const projectDetails = {
  "api-development": {
    title: "RESTful API Development",
    description: "A scalable and secure API solution for a fintech application",
    overview:
      "We developed a high-performance RESTful API to power a next-generation fintech platform. The API was designed with scalability, security, and developer experience in mind, leveraging modern architectural patterns and best practices in API design.",
    color: "#0EA5E9",
    gradient: "from-sky-50 via-white to-sky-50",
    images: ["/api-architecture.png", "/api-documentation.png", "/api-testing.png"],
    features: [
      "RESTful endpoints following OpenAPI 3.0 specification",
      "OAuth2 and JWT for secure authentication",
      "Rate limiting and request throttling",
      "Comprehensive logging and monitoring",
      "Automated testing suite with 95% code coverage",
      "Containerized deployment for easy scaling",
    ],
    techStack: [
      { name: "Node.js", icon: "nodejs.svg" },
      { name: "Express", icon: "express.svg" },
      { name: "PostgreSQL", icon: "postgresql.svg" },
      { name: "Redis", icon: "redis.svg" },
      { name: "Docker", icon: "docker.svg" },
      { name: "Kubernetes", icon: "kubernetes.svg" },
      { name: "Jest", icon: "jest.svg" },
      { name: "Swagger", icon: "swagger.svg" },
    ],
    challenges: [
      "Ensuring high availability and low latency for global users",
      "Implementing robust security measures for sensitive financial data",
      "Designing a flexible architecture to accommodate future feature additions",
      "Optimizing database queries for large datasets",
    ],
    timeline: [
      { month: 1, milestone: "Requirements gathering and API design" },
      { month: 2, milestone: "Core API development and security implementation" },
      { month: 3, milestone: "Integration with existing systems and testing" },
      { month: 4, milestone: "Performance optimization and documentation" },
      { month: 5, milestone: "User acceptance testing and refinements" },
      { month: 6, milestone: "Deployment and monitoring setup" },
    ],
    projectDuration: "6 months",
    teamSize: "5 developers",
    clientIndustry: "FinTech",
  },
  // Add other projects here
}

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const project = projectDetails["api-development" as keyof typeof projectDetails]
  const [activeTab, setActiveTab] = useState("overview")

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link href="/projects" className="text-blue-600 hover:underline">
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
        <Button variant="ghost" asChild className="mb-8 hover:bg-sky-100">
          <Link href="/projects">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Projects
          </Link>
        </Button>

        {/* Project Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-sky-700 to-sky-500 bg-clip-text text-transparent">
            {project.title}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{project.description}</p>
        </div>

        {/* Project Details Tabs */}
        <Tabs defaultValue="overview" className="mb-12">
          <TabsList className="grid w-full grid-cols-4 lg:w-[600px] lg:mx-auto">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="features">Features</TabsTrigger>
            <TabsTrigger value="tech">Tech Stack</TabsTrigger>
            <TabsTrigger value="timeline">Timeline</TabsTrigger>
          </TabsList>
          <TabsContent value="overview">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
                <p className="text-gray-700 mb-6">{project.overview}</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 mr-2 text-sky-600" />
                    <span>Duration: {project.projectDuration}</span>
                  </div>
                  <div className="flex items-center">
                    <GitBranch className="w-5 h-5 mr-2 text-sky-600" />
                    <span>Team Size: {project.teamSize}</span>
                  </div>
                  <div className="flex items-center">
                    <Zap className="w-5 h-5 mr-2 text-sky-600" />
                    <span>Industry: {project.clientIndustry}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="features">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 mr-2 text-green-500 flex-shrink-0 mt-1" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="tech">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-4">Tech Stack</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                  {project.techStack.map((tech, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <div className="w-16 h-16 rounded-full bg-sky-100 flex items-center justify-center mb-2">
                        <Image src={`/${tech.icon}`} alt={tech.name} width={32} height={32} />
                      </div>
                      <span className="text-sm text-center">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="timeline">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-4">Project Timeline</h2>
                <div className="space-y-4">
                  {project.timeline.map((item, index) => (
                    <div key={index} className="flex">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-sky-500 flex items-center justify-center text-white font-bold">
                        {item.month}
                      </div>
                      <div className="ml-4">
                        <p className="text-lg font-medium">{item.milestone}</p>
                        <p className="text-gray-600">Month {item.month}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Challenges Section */}
        <Card className="mb-12">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Project Challenges</h2>
            <ul className="space-y-2">
              {project.challenges.map((challenge, index) => (
                <li key={index} className="flex items-start">
                  <Code className="w-5 h-5 mr-2 text-sky-600 flex-shrink-0 mt-1" />
                  <span>{challenge}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Project Images */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Project Visuals</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {project.images.map((image, index) => (
              <div key={index} className="relative aspect-video rounded-lg overflow-hidden">
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`Project visual ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <Card className="bg-sky-600 text-white">
          <CardContent className="p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Build Your Next API?</h2>
            <p className="mb-6 text-lg">
              Let's collaborate on creating a robust and scalable API solution for your project.
            </p>
            <Button asChild size="lg" variant="secondary" className="bg-white text-sky-600 hover:bg-sky-100">
              <Link href="/contact">
                Start Your Project
                <ExternalLink className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

