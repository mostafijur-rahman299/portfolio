"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Twitter, Youtube, Linkedin, Github, Mail, Calendar, MapPin, Briefcase, Star, Heart } from "lucide-react"

export function AboutSection() {
  const stats = [
    { label: "Years Experience", value: "7+", icon: <Briefcase className="w-5 h-5" /> },
    { label: "YouTube Subscribers", value: "4M+", icon: <Youtube className="w-5 h-5" /> },
    { label: "Projects Completed", value: "100+", icon: <Star className="w-5 h-5" /> }, 
    { label: "Happy Clients", value: "500+", icon: <Heart className="w-5 h-5" /> }
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 md:py-32 overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-start">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8 sm:space-y-12"
        >
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-gradient-to-r from-yellow-100 to-yellow-200 text-yellow-800 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              <span className="text-xs sm:text-sm font-semibold">✨ Available for freelance work</span>
            </motion.div>
            
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-400 bg-clip-text text-transparent">
                Hi, I'm
              </span>
              <br />
              <span className="relative inline-block">
                Mostafijur Rahman
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 1, delay: 0.3 }}
                  className="absolute -bottom-2 sm:-bottom-3 left-0 h-2 sm:h-3 bg-gradient-to-r from-yellow-300/60 to-yellow-500/60 rounded-full -z-10"
                />
              </span>
            </h2>
          </div>

          <div className="flex flex-wrap gap-4 sm:gap-6 text-gray-700">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 hover:text-yellow-600 transition-all px-3 sm:px-4 py-2 rounded-lg bg-white shadow-md hover:shadow-lg"
            >
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="text-sm sm:text-base">Bangladesh</span>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 hover:text-yellow-600 transition-all px-3 sm:px-4 py-2 rounded-lg bg-white shadow-md hover:shadow-lg"
            >
              <Briefcase className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="text-sm sm:text-base">Software Engineer</span>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 hover:text-yellow-600 transition-all px-3 sm:px-4 py-2 rounded-lg bg-white shadow-md hover:shadow-lg"
            >
              <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="text-sm sm:text-base">contact@mostafijur.dev</span>
            </motion.div>
          </div>

          <div className="space-y-4 sm:space-y-6 text-gray-700 text-base sm:text-lg leading-relaxed">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="hover:text-gray-900 transition-colors duration-300 bg-white/50 p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-sm hover:shadow-md"
            >
              I'm a passionate software engineer, entrepreneur and author. With over 7 years of experience creating engaging YouTube content, I've built a community of more than 4 million subscribers who share my enthusiasm for technology and learning.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hover:text-gray-900 transition-colors duration-300 bg-white/50 p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-sm hover:shadow-md"
            >
              My journey began at Cambridge University where I combined my medical studies with creating educational content. What started as a way to help others pass entrance exams evolved into a thriving channel with 6 million+ subscribers, demonstrating the power of combining expertise with engaging content delivery.
            </motion.p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-center p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-br from-yellow-50 to-yellow-100 hover:from-yellow-100 hover:to-yellow-200 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="flex justify-center mb-2 sm:mb-3 text-yellow-600">
                  {stat.icon}
                </div>
                <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-yellow-600 to-yellow-500 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-gray-700 mt-1 sm:mt-2 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          <div className="flex items-center gap-4 sm:gap-6 pt-4">
            {[
              { icon: Twitter, href: "https://twitter.com", hoverColor: "hover:text-blue-400" },
              { icon: Youtube, href: "https://youtube.com", hoverColor: "hover:text-red-500" },
              { icon: Linkedin, href: "https://linkedin.com", hoverColor: "hover:text-blue-600" },
              { icon: Github, href: "https://github.com", hoverColor: "hover:text-gray-900" }
            ].map((social, index) => (
              <motion.a
                key={index}
                whileHover={{ y: -5, scale: 1.2 }}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-gray-600 ${social.hoverColor} transition-all p-2 sm:p-3 rounded-full bg-white shadow-md hover:shadow-lg`}
              >
                <social.icon className="w-5 h-5 sm:w-6 sm:h-6" />
              </motion.a>
            ))}
          </div>

          <div className="space-y-6 sm:space-y-8">
            <Button 
              variant="ghost" 
              className="w-full sm:w-auto px-6 sm:px-8 py-2 sm:py-3 font-semibold text-base sm:text-lg group flex items-center justify-center gap-3 hover:bg-yellow-100 text-yellow-700 rounded-xl shadow-md hover:shadow-lg transition-all"
            >
              Read my full story
              <span className="group-hover:translate-x-3 transition-transform duration-300">→</span>
            </Button>

            <div className="flex flex-wrap gap-3 sm:gap-4">
              {["Watch My Videos", "Read My Articles", "Read My Book"].map((text, index) => (
                <motion.div
                  key={text}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="w-full sm:w-auto"
                >
                  <Button 
                    className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600
                      text-white text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl 
                      transform hover:-translate-y-1 transition-all duration-300 font-semibold"
                  >
                    {text}
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative mt-8 lg:mt-0"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-300 via-yellow-400 to-yellow-500 rounded-[2rem] sm:rounded-[3rem] transform -rotate-6 shadow-2xl opacity-80"></div>
          <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            <div className="space-y-6 sm:space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.6 }}
                className="hover:z-10 group"
              >
                <div className="overflow-hidden rounded-xl sm:rounded-2xl shadow-xl bg-white p-2 sm:p-3">
                  <Image
                    src="/placeholder.svg?height=400&width=400"
                    alt="Working at desk"
                    width={400}
                    height={400}
                    className="rounded-lg sm:rounded-xl transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="mt-3 sm:mt-4 text-xs sm:text-sm text-gray-700 font-semibold pl-2">Speaking at TechConf 2023</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="hover:z-10 group"
              >
                <div className="overflow-hidden rounded-xl sm:rounded-2xl shadow-xl bg-white p-2 sm:p-3">
                  <Image
                    src="/placeholder.svg?height=400&width=400"
                    alt="Speaking at event"
                    width={400}
                    height={400}
                    className="rounded-lg sm:rounded-xl transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="mt-3 sm:mt-4 text-xs sm:text-sm text-gray-700 font-semibold pl-2">Live coding session</div>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-0 sm:mt-12 hover:z-10 group"
            >
              <div className="overflow-hidden rounded-xl sm:rounded-2xl shadow-xl bg-white p-2 sm:p-3">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Holding book"
                  width={400}
                  height={400}
                  className="rounded-lg sm:rounded-xl transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="mt-3 sm:mt-4 text-xs sm:text-sm text-gray-700 font-semibold pl-2">Book launch event</div>
            </motion.div>
          </div>
          <div className="absolute inset-0 pointer-events-none">
            <svg
              className="absolute top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2"
              viewBox="0 0 400 400"
            >
              <motion.path
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
                d="M200,50 C300,50 350,150 350,200 C350,250 300,350 200,350 C100,350 50,250 50,200 C50,150 100,50 200,50"
                fill="none"
                stroke="url(#gradient)"
                strokeWidth="3"
                strokeDasharray="8,8"
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#FFD700" />
                  <stop offset="50%" stopColor="#FFA500" />
                  <stop offset="100%" stopColor="#FF8C00" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
