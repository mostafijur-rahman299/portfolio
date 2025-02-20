"use client"

import { useState } from "react"
import Image from "next/image"
import {
  ExternalLink,
  Github,
  Calendar,
  Users,
  Code,
  Target,
  Lightbulb,
  Award,
  Rocket,
  CheckCircle
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"

export default function ProjectDetails({ projectData }: { projectData: any }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 lg:py-16 max-w-7xl">
        {/* Project Header */}
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-700 to-yellow-900">
            {projectData.title}
          </h1>
          <p className="text-base sm:text-lg text-yellow-700 max-w-3xl mx-auto leading-relaxed">
            {projectData.description}
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 mb-12">
          {/* Project Images */}
          <div className="lg:col-span-8">
            <Card className="border-2 border-yellow-200 shadow-lg bg-white">
              <CardContent className="p-4 sm:p-6">
                <div className="relative aspect-video rounded-lg overflow-hidden">
                  <Image
                    src={projectData.images[currentImageIndex] || "/placeholder.svg"}
                    alt={`Project image ${currentImageIndex + 1}`}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="flex justify-center mt-4 gap-3">
                  {projectData.images.map((image: string, index: number) => (
                    <button
                      key={index}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === currentImageIndex 
                          ? "bg-yellow-500 ring-2 ring-yellow-300"
                          : "bg-yellow-200 hover:bg-yellow-300"
                      }`}
                      onClick={() => setCurrentImageIndex(index)}
                      aria-label={`View image ${index + 1}`}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Project Goals Card */}
            <Card className="border-2 border-yellow-200 shadow-lg bg-white mt-6">
              <CardHeader className="pb-3">
                <CardTitle className="text-xl text-yellow-800 flex items-center">
                  <Target className="mr-2 h-6 w-6" />
                  Project Goals
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {projectData.project_goals?.map((goal: string, index: number) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-yellow-600 mt-1" />
                    <p className="text-yellow-700">{goal}</p>
                  </div>
                )) || (
                  <p className="text-yellow-600">Project goals not specified</p>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Project Details Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            {/* Overview Card */}
            <Card className="border-2 border-yellow-200 shadow-lg bg-white">
              <CardHeader className="pb-3">
                <CardTitle className="text-xl text-yellow-800">Project Overview</CardTitle>
              </CardHeader>
              <CardContent className="space-y-5">
                <div className="flex items-center text-yellow-700 hover:bg-yellow-50 p-2 rounded-lg transition-colors">
                  <Calendar className="mr-3 h-5 w-5 flex-shrink-0" />
                  <span className="text-sm">{projectData.startDate} - {projectData.endDate}</span>
                </div>
                <div className="flex items-center text-yellow-700 hover:bg-yellow-50 p-2 rounded-lg transition-colors">
                  <Users className="mr-3 h-5 w-5 flex-shrink-0" />
                  <span className="text-sm">{projectData.teamSize} Team Members</span>
                </div>
                <div className="flex items-center text-yellow-700 hover:bg-yellow-50 p-2 rounded-lg transition-colors">
                  <Code className="mr-3 h-5 w-5 flex-shrink-0" />
                  <span className="text-sm">{projectData.skills.length} Technologies Used</span>
                </div>
              </CardContent>
            </Card>

            {/* Tech Stack Card */}
            <Card className="border-2 border-yellow-200 shadow-lg bg-white">
              <CardHeader className="pb-3">
                <CardTitle className="text-xl text-yellow-800">Technologies Used</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {projectData.skills.map((skill: string, index: number) => (
                    <Badge 
                      key={index} 
                      className="bg-yellow-100 text-yellow-800 hover:bg-yellow-200 transition-colors px-3 py-1"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Key Features Card */}
            <Card className="border-2 border-yellow-200 shadow-lg bg-white">
              <CardHeader className="pb-3">
                <CardTitle className="text-xl text-yellow-800 flex items-center">
                  <Lightbulb className="mr-2 h-6 w-6" />
                  Key Features
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {projectData.key_features?.map((feature: string, index: number) => (
                    <li key={index} className="flex items-center text-yellow-700">
                      <CheckCircle className="mr-2 h-4 w-4" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  )) || (
                    <li className="text-yellow-600 text-sm">Features not specified</li>
                  )}
                </ul>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="flex flex-col gap-4">
              {projectData.demoLink && (
                <Button className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white w-full py-6 text-lg shadow-lg">
                  <a
                    href={projectData.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full"
                  >
                    View Live Demo
                    <ExternalLink className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              )}
              
              {projectData.githubLink ? (
                <Button 
                  variant="outline" 
                  className="border-2 border-yellow-500 text-yellow-700 hover:bg-yellow-50 w-full py-6 text-lg"
                >
                  <a
                    href={projectData.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full"
                  >
                    Source Code
                    <Github className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              ) : (
                <p className="text-sm text-yellow-600 text-center bg-yellow-50 p-3 rounded-lg">
                  Private Repository - Source code not available
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Project Details Tabs */}
        <div className="w-full max-w-full overflow-x-hidden">
          <Tabs defaultValue="about" className="w-full">
            <div className="overflow-x-auto">
              <TabsList className="w-full flex flex-nowrap md:flex-wrap gap-1 md:gap-2 justify-start border-b-2 border-yellow-200 mb-6 bg-transparent p-1 min-w-max md:min-w-0">
                <TabsTrigger 
                  value="about" 
                  className="whitespace-nowrap flex-shrink-0 md:flex-1 w-[120px] md:min-w-[100px] md:max-w-[150px] data-[state=active]:bg-yellow-500 data-[state=active]:text-white data-[state=active]:shadow-md px-3 py-2.5 text-xs md:text-sm lg:text-base rounded-md transition-all duration-200 hover:bg-yellow-100"
                >
                  About Project
                </TabsTrigger>
                <TabsTrigger 
                  value="role"
                  className="whitespace-nowrap flex-shrink-0 md:flex-1 w-[120px] md:min-w-[100px] md:max-w-[150px] data-[state=active]:bg-yellow-500 data-[state=active]:text-white data-[state=active]:shadow-md px-3 py-2.5 text-xs md:text-sm lg:text-base rounded-md transition-all duration-200 hover:bg-yellow-100"
                >
                  My Role
                </TabsTrigger>
              </TabsList>
            </div>
            
            <div className="mt-4 space-y-4">
              <TabsContent value="about" className="focus-visible:outline-none">
                <Card className="border-2 border-yellow-200 shadow-lg bg-white transform transition-all duration-300 hover:shadow-xl">
                  <CardContent className="p-3 sm:p-4 md:p-6 lg:p-8">
                    <p className="text-yellow-800 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed">
                      {projectData.longDescription}
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="role" className="focus-visible:outline-none">
                <Card className="border-2 border-yellow-200 shadow-lg bg-white transform transition-all duration-300 hover:shadow-xl">
                  <CardContent className="p-3 sm:p-4 md:p-6 lg:p-8">
                    <p className="text-yellow-800 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed">
                      {projectData.myRole}
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="challenges" className="focus-visible:outline-none">
                <Card className="border-2 border-yellow-200 shadow-lg bg-white transform transition-all duration-300 hover:shadow-xl">
                  <CardContent className="p-3 sm:p-4 md:p-6 lg:p-8">
                    <p className="text-yellow-800 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed">
                      {projectData.challenges || "No specific challenges were documented for this project."}
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="learnings" className="focus-visible:outline-none">
                <Card className="border-2 border-yellow-200 shadow-lg bg-white transform transition-all duration-300 hover:shadow-xl">
                  <CardContent className="p-3 sm:p-4 md:p-6 lg:p-8">
                    <p className="text-yellow-800 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed">
                      {projectData.keyLearnings || "Key learnings for this project are not available."}
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
