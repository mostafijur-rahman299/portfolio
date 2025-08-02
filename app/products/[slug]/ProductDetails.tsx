"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Users, ExternalLink, Github, Star, Package, Smartphone, Award } from "lucide-react"

/**
 * ProductDetails component - Displays comprehensive information about a specific product
 * @param productData - The product data object containing all product information
 */
export default function ProductDetails({ productData }: { productData: any }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 lg:py-16 max-w-7xl">
        
        {/* Product Header */}
        <div className="text-center mb-8 md:mb-12">
          {productData.isFirstProduct && (
            <div className="mb-4">
              <span className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                <Award className="w-4 h-4" />
                🎉 My First Product
              </span>
            </div>
          )}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-emerald-700 to-emerald-900">
            {productData.title}
          </h1>
          <p className="text-base sm:text-lg text-emerald-700 max-w-3xl mx-auto leading-relaxed">
            {productData.description}
          </p>
          
          {/* Product Stats */}
          <div className="flex flex-wrap justify-center gap-6 mt-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-emerald-600">{productData.users}</div>
              <div className="text-sm text-gray-600">Users</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-1">
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                <span className="text-2xl font-bold text-emerald-600">{productData.rating}</span>
              </div>
              <div className="text-sm text-gray-600">Rating</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-emerald-600">{productData.price}</div>
              <div className="text-sm text-gray-600">Price</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-emerald-600">{productData.status}</div>
              <div className="text-sm text-gray-600">Status</div>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 mb-12">
          
          {/* Product Image */}
          <div className="lg:col-span-8">
            <Card className="border-2 shadow-lg bg-white overflow-hidden">
              <div className="relative aspect-video">
                <Image
                  src={productData.images[currentImageIndex]}
                  alt={`${productData.title} screenshot ${currentImageIndex + 1}`}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
              </div>
              
              {productData.images.length > 1 && (
                <div className="flex justify-center mt-4 gap-3">
                  {productData.images.map((image: string, index: number) => (
                    <button
                      key={index}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === currentImageIndex 
                          ? "bg-emerald-500 ring-2 ring-emerald-300"
                          : "bg-gray-300 hover:bg-gray-400"
                      }`}
                      onClick={() => setCurrentImageIndex(index)}
                    />
                  ))}
                </div>
              )}
            </Card>
          </div>

          {/* Product Details Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Overview Card */}
            <Card className="border-2 shadow-lg bg-white">
              <CardHeader className="pb-3">
                <CardTitle className="text-xl text-emerald-800 flex items-center gap-2">
                  <Package className="w-5 h-5" />
                  Product Overview
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-5">
                <div className="flex items-center text-emerald-700 hover:bg-emerald-50 p-2 rounded-lg transition-colors">
                  <Calendar className="mr-3 h-5 w-5 flex-shrink-0" />
                  <span className="text-sm">{productData.startDate} - {productData.endDate}</span>
                </div>
                <div className="flex items-center text-emerald-700 hover:bg-emerald-50 p-2 rounded-lg transition-colors">
                  <Users className="mr-3 h-5 w-5 flex-shrink-0" />
                  <span className="text-sm">{productData.teamSize}</span>
                </div>
                <div className="flex items-center text-emerald-700 hover:bg-emerald-50 p-2 rounded-lg transition-colors">
                  <Smartphone className="mr-3 h-5 w-5 flex-shrink-0" />
                  <span className="text-sm">Mobile Application</span>
                </div>
              </CardContent>
            </Card>

            {/* Technologies Card */}
            <Card className="border-2 shadow-lg bg-white">
              <CardHeader className="pb-3">
                <CardTitle className="text-xl text-emerald-800">Technologies Used</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {productData.skills.map((skill: string, index: number) => (
                    <Badge 
                      key={index} 
                      className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200 transition-colors px-3 py-1"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="space-y-3">
              {productData.demoLink && (
                <Button className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white w-full py-6 text-lg shadow-lg">
                  <a
                    href={productData.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full"
                  >
                    Try Live Demo
                    <ExternalLink className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              )}
              
              {productData.githubLink && (
                <Button variant="outline" className="w-full py-6 text-lg border-emerald-300 text-emerald-600 hover:bg-emerald-50">
                  <a
                    href={productData.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full"
                  >
                    <Github className="mr-2 h-5 w-5" />
                    View Source Code
                  </a>
                </Button>
              )}
              
              {!productData.demoLink && !productData.githubLink && (
                <div className="text-center p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                  <p className="text-yellow-800 text-sm">
                    This product is currently in development or not publicly available.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Detailed Information Tabs */}
        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="about" className="w-full">
            <div className="overflow-x-auto">
              <TabsList className="w-full flex flex-nowrap md:flex-wrap gap-1 md:gap-2 justify-start mb-6 bg-transparent p-1 min-w-max md:min-w-0">
                <TabsTrigger 
                  value="about" 
                  className="whitespace-nowrap flex-shrink-0 md:flex-1 w-[120px] md:min-w-[100px] md:max-w-[150px] data-[state=active]:bg-emerald-500 data-[state=active]:text-white data-[state=active]:shadow-md px-3 py-2.5 text-xs md:text-sm lg:text-base rounded-md transition-all duration-200 hover:bg-emerald-100"
                >
                  About Product
                </TabsTrigger>
                <TabsTrigger 
                  value="features"
                  className="whitespace-nowrap flex-shrink-0 md:flex-1 w-[120px] md:min-w-[100px] md:max-w-[150px] data-[state=active]:bg-emerald-500 data-[state=active]:text-white data-[state=active]:shadow-md px-3 py-2.5 text-xs md:text-sm lg:text-base rounded-md transition-all duration-200 hover:bg-emerald-100"
                >
                  Key Features
                </TabsTrigger>
                <TabsTrigger 
                  value="role"
                  className="whitespace-nowrap flex-shrink-0 md:flex-1 w-[120px] md:min-w-[100px] md:max-w-[150px] data-[state=active]:bg-emerald-500 data-[state=active]:text-white data-[state=active]:shadow-md px-3 py-2.5 text-xs md:text-sm lg:text-base rounded-md transition-all duration-200 hover:bg-emerald-100"
                >
                  My Role
                </TabsTrigger>
                <TabsTrigger 
                  value="learnings"
                  className="whitespace-nowrap flex-shrink-0 md:flex-1 w-[120px] md:min-w-[100px] md:max-w-[150px] data-[state=active]:bg-emerald-500 data-[state=active]:text-white data-[state=active]:shadow-md px-3 py-2.5 text-xs md:text-sm lg:text-base rounded-md transition-all duration-200 hover:bg-emerald-100"
                >
                  Key Learnings
                </TabsTrigger>
              </TabsList>
            </div>

            <div className="mt-6">
              <TabsContent value="about" className="focus-visible:outline-none">
                <Card className="border-2 shadow-lg bg-white transform transition-all duration-300 hover:shadow-xl">
                  <CardContent className="p-3 sm:p-4 md:p-6 lg:p-8">
                    <p className="text-emerald-800 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed">
                      {productData.longDescription}
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="features" className="focus-visible:outline-none">
                <Card className="border-2 shadow-lg bg-white transform transition-all duration-300 hover:shadow-xl">
                  <CardContent className="p-3 sm:p-4 md:p-6 lg:p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {productData.keyFeatures.map((feature: string, index: number) => (
                        <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-emerald-50 transition-colors">
                          <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-emerald-800 text-sm md:text-base">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="role" className="focus-visible:outline-none">
                <Card className="border-2 shadow-lg bg-white transform transition-all duration-300 hover:shadow-xl">
                  <CardContent className="p-3 sm:p-4 md:p-6 lg:p-8">
                    <p className="text-emerald-800 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed">
                      {productData.myRole}
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="learnings" className="focus-visible:outline-none">
                <Card className="border-2 shadow-lg bg-white transform transition-all duration-300 hover:shadow-xl">
                  <CardContent className="p-3 sm:p-4 md:p-6 lg:p-8">
                    <p className="text-emerald-800 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed">
                      {productData.keyLearnings}
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