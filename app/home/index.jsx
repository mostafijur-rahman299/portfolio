"use client"

import React from "react"
import { motion } from "framer-motion"
import { Code, Briefcase, Folder } from 'lucide-react'
import Image from "next/image"
import { Button } from "@/components/Button"
import { MotionPath } from "@/components/MotionPath"
import Profile from "@/public/assets/images/profile-image.jpeg"
import Link from "next/link"

export function HomeComponent() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 via-gray-600 to-black text-white overflow-hidden flex items-center justify-center">
      <MotionPath />

      <main className="relative z-10 container mx-auto px-4 py-8 sm:py-12 md:py-16 lg:py-20 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative inline-block mx-auto md:mx-0">
              <div className="relative">
                <div className="w-full max-w-xs h-full max-h-xs md:max-w-sm md:max-h-sm overflow-hidden rounded-lg shadow-lg transition-transform duration-500 ease-in-out group-hover:scale-105">
                  <Image
                    src={Profile}
                    alt="Demo profile"
                    width={300}
                    height={300}
                    className="object-cover transition-opacity duration-500 ease-in-out group-hover:opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-700 via-gray-800 to-black mix-blend-multiply opacity-80"></div>
                  <div className="absolute inset-0 rounded-lg border-8 border-solid border-white/90"></div>
                </div>
              </div>
              <motion.div
                className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-white rounded-full p-3 sm:p-4 shadow-lg"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  delay: 0.5,
                }}
              >
                <Code className="h-8 w-8 sm:h-12 sm:w-12 text-gray-500" />
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="w-full md:w-1/2 text-center md:text-left"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              delay: 0.2,
            }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-300 to-gray-500">
              Mostafijur Rahman
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-4 sm:mb-6">
              Full-Stack Developer | Tech Innovator
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-6 sm:mb-8">
              Building impactful, high-performance digital solutions that drive success. With 5+ years of experience, I turn complex ideas into user-focused applications that address real-world challenges.
            </p>
            <div className="flex justify-center md:justify-start space-x-4 mt-4">
              <Link href="/contact">
                <Button variant="primary" className="flex items-center text-white font-bold bg-gray-500 hover:bg-gray-600">
                  <Briefcase className="h-6 w-6 mr-2" /> Contact Me
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  )
}
