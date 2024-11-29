'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Skeleton } from "@/components/Skeleton"
import { Button } from "@/components/Button"
import { Badge } from "@/components/Badge"

export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 via-gray-600 to-black text-white">
      <div className="container mx-auto px-4 pt-32 pb-16 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Skeleton className="h-12 w-3/4 mb-6 bg-gray-100" />
          <Skeleton className="h-6 w-full mb-8 bg-gray-100" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative overflow-hidden rounded-2xl shadow-lg">
              <Skeleton className="w-full h-[400px] bg-gray-100" />
              <Button
                variant="secondary"
                size="icon"
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/80"
                disabled
              >
                <Skeleton className="h-6 w-6 bg-gray-200" />
              </Button>
              <Button
                variant="secondary"
                size="icon"
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/80"
                disabled
              >
                <Skeleton className="h-6 w-6 bg-gray-200" />
              </Button>
            </div>
            <div className="flex justify-center mt-4 space-x-2">
              {[...Array(4)].map((_, index) => (
                <Skeleton key={index} className="w-3 h-3 rounded-full bg-gray-200" />
              ))}
            </div>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div>
              <Skeleton className="h-8 w-48 mb-2 bg-gray-100" />
              <div className="space-y-2">
                {[...Array(3)].map((_, index) => (
                  <div key={index} className="flex items-center">
                    <Skeleton className="h-5 w-5 mr-2 bg-gray-200" />
                    <Skeleton className="h-5 w-40 bg-gray-100" />
                  </div>
                ))}
              </div>
            </div>

            <div>
              <Skeleton className="h-8 w-36 mb-2 bg-gray-100" />
              <div className="flex flex-wrap gap-2">
                {[...Array(5)].map((_, index) => (
                  <Badge key={index} variant="secondary" className="bg-gray-100">
                    <Skeleton className="h-4 w-16" />
                  </Badge>
                ))}
              </div>
            </div>

            <div className="flex space-x-4">
              <Button disabled className="w-36">
                <Skeleton className="h-5 w-full bg-gray-200" />
              </Button>
              <Button disabled variant="outline" className="w-36">
                <Skeleton className="h-5 w-full bg-gray-200" />
              </Button>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Skeleton className="h-10 w-64 mb-4 bg-gray-100" />
          {[...Array(3)].map((_, index) => (
            <Skeleton key={index} className="h-6 w-full mb-2 bg-gray-100" />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Skeleton className="h-10 w-48 mb-6 bg-gray-100" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-md">
                <Skeleton className="w-16 h-16 rounded-full mb-4 bg-gray-100" />
                <Skeleton className="h-6 w-32 mb-2 bg-gray-100" />
                <Skeleton className="h-4 w-24 bg-gray-100" />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}