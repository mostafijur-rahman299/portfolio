"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, Download, Github, Linkedin, Youtube, Twitter, Instagram, Mail, Briefcase, Users, Lightbulb, TrendingUp, Target, Zap, Code } from "lucide-react"
import ProfileImage from "@/public/Profile-Images/profile-pic7.png"

/**
 * Hero component - Main landing section showcasing entrepreneur and software engineer identity
 * Features animated elements, social links, and beautiful yellow-orange design
 */
export function Hero() {
  const socialLinks = [
    { icon: Github, href: "https://github.com/mostafijur-rahman299", label: "GitHub", color: "hover:text-gray-900" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/mostafijurrahman-ln/", label: "LinkedIn", color: "hover:text-blue-600" },
    { icon: Youtube, href: "https://www.youtube.com/@mostafijur-r-sajib", label: "YouTube", color: "hover:text-red-600" },
    { icon: Twitter, href: "https://x.com/mostafijur_", label: "Twitter", color: "hover:text-sky-500" },
    { icon: Instagram, href: "https://www.instagram.com/mostafijur.sajib", label: "Instagram", color: "hover:text-pink-600" },
    { icon: Mail, href: "mailto:hello.mostafijur@gmail.com", label: "Email", color: "hover:text-green-600" }
  ]

  const stats = [
    { label: "Products Built", value: "15+", icon: Target },
    { label: "Problems Solved", value: "100+", icon: Lightbulb },
    { label: "Users Impacted", value: "10K+", icon: Users },
    { label: "Revenue Generated", value: "$500K+", icon: TrendingUp }
  ]

  const floatingElements = [
    { icon: "💡", delay: 0, position: "top-20 left-10" },
    { icon: "🚀", delay: 1, position: "top-40 right-20" },
    { icon: "🎯", delay: 2, position: "bottom-32 left-20" },
    { icon: "📈", delay: 3, position: "bottom-20 right-10" },
    { icon: "⚡", delay: 4, position: "top-60 left-1/3" },
    { icon: "🛠️", delay: 5, position: "bottom-40 right-1/3" }
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large floating shapes */}
        <div className="absolute top-40 -right-40 w-80 h-80 bg-gradient-to-br from-yellow-300 to-orange-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-amber-300 to-orange-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-40 left-1/2 w-80 h-80 bg-gradient-to-br from-yellow-400 to-orange-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{ animationDelay: '4s' }}></div>
        
        {/* Decorative grid */}
        <div className="absolute inset-0 decoration-grid opacity-20"></div>
        
        {/* Floating emoji elements */}
        {floatingElements.map((element, index) => (
          <motion.div
            key={index}
            className={`absolute ${element.position} text-4xl hidden lg:block`}
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 10, -10, 0]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              delay: element.delay,
              ease: "easeInOut"
            }}
          >
            {element.icon}
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 m-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8 text-center lg:text-left"
          >

            {/* Main Heading */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
              >
                <span className="block text-gray-900">Hi, I'm</span>
                <span className="block text-gradient">Mostafijur Rahman</span>
              </motion.h1>

              
            </div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="space-y-4"
            >
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed max-w-2xl">
                I'm passionate about <span className="font-bold text-orange-600">building products that solve real problems</span> and 
                <span className="font-bold text-yellow-600"> make people's lives better</span>. Every product I create starts with 
                understanding genuine user pain points and crafting elegant solutions.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
                From <span className="font-semibold text-orange-500">identifying market gaps</span> to 
                <span className="font-semibold text-yellow-500"> launching successful products</span>, 
                I focus on creating value-driven solutions that users love and businesses thrive on.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                size="lg"
                className="bg-gradient-primary hover:shadow-xl text-white px-8 py-4 rounded-full font-bold shadow-lg transition-all duration-300 hover:-translate-y-1 animate-glow"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Target className="mr-2 w-5 h-5" />
                View My Products
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex items-center justify-center lg:justify-start gap-4"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 bg-white/90 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-gray-600 ${social.color} border border-yellow-200 hover:border-orange-300`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative flex justify-center items-center"
          >
            
            {/* Decorative background */}
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full blur-3xl opacity-20 animate-pulse-slow"></div>
            
            {/* Main image container */}
            <div className="relative z-10">
              <motion.div
                className="relative"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                  <Image
                    src={ProfileImage}
                    alt="Mostafijur Rahman - Entrepreneur & Software Engineer"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
                
                {/* Floating achievement badges */}
                <motion.div
                  className="absolute -top-6 -right-6 bg-white rounded-2xl p-4 shadow-xl border-2 border-yellow-300"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-2">
                      <Lightbulb className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-xs font-bold text-gray-700">Innovator</div>
                  </div>
                </motion.div>

                <motion.div
                  className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl border-2 border-orange-300"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                >
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-2">
                      <Code className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-xs font-bold text-gray-700">Developer</div>
                  </div>
                </motion.div>

                <motion.div
                  className="absolute top-1/2 -left-8 bg-white rounded-2xl p-3 shadow-xl border-2 border-yellow-300"
                  animate={{ x: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: 3 }}
                >
                  <TrendingUp className="w-8 h-8 text-orange-500" />
                </motion.div>
                </motion.div>
            </div>
          </motion.div>
        </div>

        
      </div>
    </section>
  )
}
