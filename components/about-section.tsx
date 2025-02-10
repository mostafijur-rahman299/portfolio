"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, Twitter, Youtube, Linkedin } from "lucide-react"
import BackImage from "@/public/back03.jpg"
import FrontImage from "@/public/front01.jpg"
import FrontImage2 from "@/public/front02.jpg"
import { useRouter } from "next/navigation"

export function AboutSection() {
  const router = useRouter()
  return (
    <section className="w-full bg-[#FAF9F6] relative overflow-hidden" id="about">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-[60vw] h-[60vw] md:w-[800px] md:h-[800px] rounded-full bg-gradient-to-br from-[#FFF8F6] to-transparent -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[45vw] h-[45vw] md:w-[600px] md:h-[600px] rounded-full bg-gradient-to-tr from-[#F0F9FF] to-transparent translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-24 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6 sm:space-y-8"
          >
            {/* Title Section */}
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-3xl xs:text-4xl sm:text-5xl font-bold tracking-tight text-gray-900">
                Hi, I'm
                <br />
                <span className="relative inline-block mt-1 sm:mt-2 text-[#7CD0FF]">
                  Mostafijur Rahman
                </span>
              </h1>
            </div>

            {/* Description Text */}
            <div className="space-y-3 sm:space-y-4 text-[#4A4A4A] text-sm sm:text-base md:text-lg leading-relaxed max-w-xl">
              <p>
                I'm a passionate Full Stack Developer with expertise in React, Next.js, and Node.js. With over 3 years of experience,
                I specialize in building modern web applications that combine beautiful design with powerful functionality.
              </p>
              <p className="hidden sm:block">
                My journey in tech began with a deep curiosity for creating things that make a difference. I've worked on various
                projects from e-commerce platforms to complex enterprise applications, always focusing on writing clean, maintainable
                code and creating intuitive user experiences.
              </p>
            </div>

            {/* Read More Link */}
            <div>
              <Button
                variant="link"
                className="text-[#4A4A4A] hover:text-black p-0 h-auto font-medium text-xs sm:text-sm md:text-base flex items-center gap-1 sm:gap-2 transition-colors duration-200 group"
              >
                Know More About Me
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-2 sm:gap-3">
                <Button
                  onClick={() => window.scrollTo({
                    top: document.getElementById('projects')?.offsetTop,
                    behavior: 'smooth'
                  })}
                  className={`
                    rounded-full px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 text-xs sm:text-sm font-medium transition-all duration-200 
                    shadow-sm hover:shadow-md hover:-translate-y-0.5
                    ${"bg-yellow-400 hover:bg-[#yellow-500] text-white"}
                  `}
                >
                  View Projects
                </Button>

                <Button
                  onClick={() => router.push('/articles')}
                  className={`
                    rounded-full px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 text-xs sm:text-sm font-medium transition-all duration-200 
                    shadow-sm hover:shadow-md hover:-translate-y-0.5
                    ${"bg-white text-[#4A4A4A] hover:bg-gray-50"}
                  `}
                >
                  Read My Blog
                </Button>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-2 sm:space-x-3">
              {[Twitter, Youtube, Linkedin].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="p-1.5 sm:p-2 bg-white rounded-full shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5"
                  whileHover={{ scale: 1.05 }}
                >
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#4A4A4A]" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Images */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative mt-8 lg:mt-0"
          >
            {/* Decorative curved line */}
            <svg className="absolute w-full h-full hidden sm:block" viewBox="0 0 500 500">
              <path
                d="M100,250 C100,150 150,50 250,50 C350,50 400,150 400,250 C400,350 350,450 250,450 C150,450 100,350 100,250"
                stroke="#FF9B71"
                strokeWidth="1.5"
                strokeDasharray="4 4"
                fill="none"
              />
              {/* Decorative dots */}
              <circle cx="90" cy="200" r="4" fill="#D9D6FE" />
              <circle cx="410" cy="300" r="4" fill="#D9D6FE" />
              <circle cx="250" cy="460" r="4" fill="#D9D6FE" />
            </svg>

            {/* Main image grid */}
            <div className="relative grid grid-cols-1 gap-4 sm:gap-6">
              {/* Large center image */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="relative z-10"
              >
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-white p-2 sm:p-3 shadow-lg">
                  <Image
                    src={BackImage}
                    alt="Mostafijur working at desk"
                    width={600}
                    height={400}
                    className="rounded-xl sm:rounded-2xl w-full h-auto"
                    priority
                  />
                </div>
              </motion.div>

              {/* Top right floating image - Hidden on mobile */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="absolute -right-4 top-1/4 z-20 hidden sm:block"
              >
                <div className="rounded-xl sm:rounded-2xl overflow-hidden bg-white p-1.5 sm:p-2 shadow-lg">
                  <Image
                    src={FrontImage}
                    alt="Mostafijur coding"
                    width={180}
                    height={180}
                    className="rounded-lg sm:rounded-xl w-[120px] h-[120px] sm:w-[180px] sm:h-[180px]"
                  />
                </div>
              </motion.div>

              {/* Bottom left floating image - Hidden on mobile */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute -bottom-4 left-1/4 z-20 hidden sm:block"
              >
                <div className="rounded-xl sm:rounded-2xl overflow-hidden bg-white p-1.5 sm:p-2 shadow-lg ml-12">
                  <Image
                    src={FrontImage2}
                    alt="Featured project showcase"
                    width={180}
                    height={180}
                    className="rounded-lg sm:rounded-xl w-[120px] h-[120px] sm:w-[180px] sm:h-[180px]"
                  />
                </div>
              </motion.div>

              {/* Decorative elements - Adjusted sizes for mobile */}
              <div className="absolute -top-4 -left-4 w-6 h-6 sm:w-8 sm:h-8 bg-[#D9D6FE] rounded-full opacity-20" />
              <div className="absolute bottom-1/2 -right-4 w-4 h-4 sm:w-6 sm:h-6 bg-[#FFD6CC] rounded-full opacity-20" />
              <div className="absolute -bottom-4 left-1/2 w-8 h-8 sm:w-10 sm:h-10 bg-[#7CD0FF] rounded-full opacity-20" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
