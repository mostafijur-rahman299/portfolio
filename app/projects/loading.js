'use client'

import React from "react"
import { motion } from "framer-motion"
import { Skeleton } from "@/components/Skeleton"

export default function Loading() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 via-gray-600 to-black text-white overflow-hidden transition-all duration-500">
      <main className="relative z-10 pt-32 pb-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
          >
            <Skeleton className="h-20 w-72 mx-auto mb-8 rounded-xl bg-gradient-to-r from-gray-300 to-gray-300 animate-pulse" />
            <Skeleton className="h-6 w-3/4 mx-auto mb-4 rounded-full bg-gray-200 animate-pulse" />
            <Skeleton className="h-6 w-1/2 mx-auto rounded-full bg-gray-200 animate-pulse" />
          </motion.div>

          <motion.div
            className="flex flex-wrap justify-center gap-2 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {[...Array(10)].map((_, index) => (
              <Skeleton
                key={index}
                className="h-8 w-20 rounded-full bg-gradient-to-r from-gray-200 to-gray-200 animate-pulse"
              />
            ))}
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {[...Array(6)].map((_, index) => (
              <motion.div
                key={index}
                className="relative group"
                variants={itemVariants}
              >
                <motion.div
                  className="relative overflow-hidden rounded-2xl shadow-lg"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                >
                  <Skeleton className="w-full h-64 bg-gradient-to-br from-gray-300 to-gray-300 animate-pulse" />
                  <div className="absolute inset-0 bg-black bg-opacity-30" />
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <Skeleton className="h-8 w-3/4 mb-2 rounded-lg bg-white bg-opacity-30 animate-pulse" />
                    <Skeleton className="h-4 w-full mb-4 rounded-lg bg-white bg-opacity-20 animate-pulse" />
                    <div className="mb-4 flex flex-wrap gap-2">
                      {[...Array(3)].map((_, skillIndex) => (
                        <Skeleton
                          key={skillIndex}
                          className="h-6 w-16 rounded-full bg-white bg-opacity-20 animate-pulse"
                        />
                      ))}
                    </div>
                    <div className="flex space-x-4">
                      {[...Array(3)].map((_, buttonIndex) => (
                        <Skeleton
                          key={buttonIndex}
                          className="h-10 w-24 rounded-md bg-white bg-opacity-30 animate-pulse"
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </main>
    </div>
  )
}