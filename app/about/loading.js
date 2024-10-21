'use client'

import React from "react"
import { motion } from "framer-motion"
import { Skeleton } from "@/components/Skeleton"
import { Card, CardContent, CardHeader } from "@/components/Card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/Tabs"

export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-lime-100 via-emerald-200 to-teal-300 text-foreground">
      <div className="container mx-auto px-4 pt-32 pb-16 max-w-6xl">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Skeleton className="h-12 w-48 mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <motion.div
            className="md:col-span-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Skeleton className="w-full aspect-square rounded-lg" />
          </motion.div>

          <motion.div
            className="md:col-span-2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="bg-white bg-opacity-70 backdrop-blur-lg">
              <CardHeader>
                <Skeleton className="h-8 w-1/2 mb-4" />
              </CardHeader>
              <CardContent>
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-3/4" />
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Skeleton className="h-8 w-48 mx-auto mb-6" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(4)].map((_, index) => (
              <Card key={index} className="bg-white bg-opacity-70 backdrop-blur-lg">
                <CardHeader>
                  <Skeleton className="h-6 w-3/4 mb-2" />
                </CardHeader>
                <CardContent>
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="flex items-center space-x-2 mb-2">
                      <Skeleton className="h-8 w-8 rounded-full" />
                      <Skeleton className="h-4 w-24" />
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Skeleton className="h-8 w-48 mx-auto mb-6" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[...Array(2)].map((_, index) => (
              <Card key={index} className="bg-white bg-opacity-70 backdrop-blur-lg">
                <CardHeader>
                  <Skeleton className="h-6 w-3/4 mb-2" />
                  <Skeleton className="h-4 w-1/2" />
                </CardHeader>
                <CardContent>
                  <Skeleton className="h-4 w-full" />
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Skeleton className="h-8 w-64 mx-auto mb-6" />
          <Card className="bg-white bg-opacity-70 backdrop-blur-lg">
            <CardContent className="flex flex-col md:flex-row items-center justify-between p-8">
              <div className="mb-4 md:mb-0 md:mr-8 w-full md:w-1/2">
                <Skeleton className="h-6 w-3/4 mb-2" />
                <Skeleton className="h-4 w-full mb-4" />
                <Skeleton className="h-10 w-40" />
              </div>
              <Skeleton className="w-full md:w-1/2 aspect-video rounded-lg" />
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <Skeleton className="h-8 w-48 mx-auto mb-6" />
          <Tabs defaultValue="tab1" className="w-full">
            <TabsList className="w-full mb-8">
              <TabsTrigger value="tab1" className="w-1/3">
                <Skeleton className="h-4 w-24" />
              </TabsTrigger>
              <TabsTrigger value="tab2" className="w-1/3">
                <Skeleton className="h-4 w-24" />
              </TabsTrigger>
              <TabsTrigger value="tab3" className="w-1/3">
                <Skeleton className="h-4 w-24" />
              </TabsTrigger>
            </TabsList>
            <TabsContent value="tab1">
              <Card className="bg-white bg-opacity-70 backdrop-blur-lg">
                <CardHeader>
                  <Skeleton className="h-6 w-3/4 mb-2" />
                  <Skeleton className="h-4 w-1/2" />
                </CardHeader>
                <CardContent>
                  <Skeleton className="h-48 w-full mb-4" />
                  <Skeleton className="h-10 w-24" />
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <Skeleton className="h-8 w-48 mx-auto mb-6" />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[...Array(6)].map((_, index) => (
              <Skeleton key={index} className="w-full aspect-[4/3] rounded-lg" />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}