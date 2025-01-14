"use client"

import React, { useState, useEffect } from "react"
import { motion, useAnimation, AnimatePresence } from "framer-motion"
import { Code, Briefcase, ChevronDown, Github, Linkedin, Twitter } from 'lucide-react'
import Image from "next/image"
import { Button } from "@/components/Button"
import Profile from "@/public/assets/images/profile-image.jpeg"
import Link from "next/link"

export function HomeComponent() {
  const [isHovered, setIsHovered] = useState(false)
  const controls = useAnimation()
  const [currentSkill, setCurrentSkill] = useState(0)
  const skills = ["React", "Node.js", "TypeScript", "Next.js", "GraphQL"]

  const handleHover = () => {
    setIsHovered(!isHovered)
    controls.start({
      scale: isHovered ? 1 : 1.05,
      transition: { duration: 0.3 }
    })
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkill((prev) => (prev + 1) % skills.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-800 via-purple-700 to-pink-600 text-white overflow-hidden flex flex-col items-center justify-center relative">
      {/* Fancy background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/assets/images/circuit-pattern.svg')] opacity-10"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <main className="relative z-10 container mx-auto px-4 py-8 sm:py-12 md:py-16 lg:py-20 max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative inline-block mx-auto lg:mx-0">
              <motion.div
                className="relative"
                animate={controls}
                onHoverStart={handleHover}
                onHoverEnd={handleHover}
              >
                <div className="w-full max-w-xs h-full max-h-xs lg:max-w-sm lg:max-h-sm overflow-hidden rounded-lg shadow-lg transition-all duration-500 ease-in-out">
                  <Image
                    src={Profile}
                    alt="Demo profile"
                    width={500}
                    height={500}
                    className="object-cover transition-all duration-500 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-700 via-purple-800 to-pink-900 mix-blend-multiply opacity-60"></div>
                  <div className="absolute inset-0 rounded-lg border-8 border-solid border-white/30 backdrop-blur-sm"></div>
                </div>
              </motion.div>
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
                <Code className="h-8 w-8 sm:h-12 sm:w-12 text-indigo-600" />
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="w-full lg:w-1/2 text-center lg:text-left"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              delay: 0.2,
            }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-pink-200">
              Mostafijur Rahman
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-indigo-200 mb-4 sm:mb-6">
              Full-Stack Developer | Tech Innovator
            </p>
            <div className="text-base sm:text-lg md:text-xl text-indigo-100 mb-6 sm:mb-8">
              <p className="mb-4">
                Building impactful, high-performance digital solutions that drive success. With 5+ years of experience, I turn complex ideas into user-focused applications that address real-world challenges.
              </p>
              <div className="flex items-center justify-center lg:justify-start space-x-2">
                <span className="font-semibold">Skills:</span>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentSkill}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-block bg-indigo-600 text-white px-2 py-1 rounded"
                  >
                    {skills[currentSkill]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4 mt-4">
              <Link href="/contact">
                <Button variant="secondary" className="flex items-center text-indigo-900 font-bold bg-white hover:bg-indigo-100 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  <Briefcase className="h-6 w-6 mr-2" /> Contact Me
                </Button>
              </Link>
              <Button variant="outline" className="flex items-center text-white border-white hover:bg-white/10 transition-colors duration-300">
                <ChevronDown className="h-6 w-6 mr-2" /> Learn More
              </Button>
            </div>
            <div className="mt-8 flex justify-center lg:justify-start space-x-4">
              <motion.a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-white hover:text-indigo-200 transition-colors duration-300"
              >
                <Github className="h-8 w-8" />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-white hover:text-indigo-200 transition-colors duration-300"
              >
                <Linkedin className="h-8 w-8" />
              </motion.a>
              <motion.a
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-white hover:text-indigo-200 transition-colors duration-300"
              >
                <Twitter className="h-8 w-8" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </main>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-indigo-900/50 to-transparent pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>

      {/* Floating particles */}
      <Particles />
    </div>
  )
}

function Particles() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-white rounded-full"
          initial={{
            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
            y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
            scale: Math.random() * 0.5 + 0.5,
          }}
          animate={{
            y: [null, Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000)],
          }}
          transition={{
            duration: Math.random() * 10 + 20,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            opacity: Math.random() * 0.5 + 0.25,
          }}
        />
      ))}
    </div>
  )
}

