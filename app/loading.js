'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function RootLoading() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(timer)
          return 100
        }
        return prevProgress + 10
      })
    }, 200)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-lime-100 via-emerald-200 to-teal-300 flex flex-col items-center justify-center">
      <motion.div
        className="w-64 h-64 rounded-full border-8 border-emerald-200 flex items-center justify-center overflow-hidden"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="text-4xl font-bold text-emerald-600"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {progress}%
        </motion.div>
      </motion.div>
      <motion.div
        className="w-64 h-2 bg-emerald-200 rounded-full mt-8 overflow-hidden"
        initial={{ width: 0, opacity: 0 }}
        animate={{ width: 256, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <motion.div
          className="h-full bg-emerald-600 rounded-full"
          style={{ width: `${progress}%` }}
          transition={{ duration: 0.2 }}
        />
      </motion.div>
      <motion.p
        className="mt-4 text-emerald-700 text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
      >
        Loading your experience...
      </motion.p>
    </div>
  )
}