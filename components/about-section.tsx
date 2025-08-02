"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, Code, Briefcase, Lightbulb, Users, Award, Coffee, TrendingUp, Rocket, Target } from "lucide-react"
import BackImage from "@/public/back03.jpg"
import FrontImage from "@/public/front01.jpg"
import FrontImage2 from "@/public/front02.jpg"
import { useRouter } from "next/navigation"

/**
 * About section component - Showcasing entrepreneur and software engineer journey
 * Features animated cards, dual identity highlights, and yellow-orange theme
 */
export function AboutSection() {
  const router = useRouter()

  const entrepreneurSkills = [
    {
      icon: Lightbulb,
      title: "Problem Identification",
      description: "Finding real pain points and validating market needs",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Target,
      title: "Product Strategy",
      description: "Building user-centered products that solve genuine problems",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Users,
      title: "User Research",
      description: "Understanding user behavior and gathering actionable feedback",
      color: "from-amber-500 to-orange-600"
    },
    {
      icon: TrendingUp,
      title: "Growth & Scaling",
      description: "Optimizing products for user adoption and sustainable growth",
      color: "from-yellow-600 to-orange-500"
    }
  ]

  const engineeringSkills = [
    {
      icon: Code,
      title: "Full Stack Development",
      description: "React, Next.js, Node.js, and modern web technologies",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Rocket,
      title: "System Architecture",
      description: "Designing scalable, maintainable software systems",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Award,
      title: "Technical Leadership",
      description: "Mentoring developers and establishing best practices",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Coffee,
      title: "Problem Solving",
      description: "Breaking down complex challenges into elegant solutions",
      color: "from-indigo-500 to-purple-500"
    }
  ]

  const achievements = [
    { icon: Target, label: "Products Built", value: "15+", color: "text-orange-600" },
    { icon: Users, label: "Users Impacted", value: "10K+", color: "text-yellow-600" },
    { icon: Lightbulb, label: "Problems Solved", value: "100+", color: "text-orange-500" },
    { icon: TrendingUp, label: "Revenue Generated", value: "$500K+", color: "text-yellow-500" }
  ]

  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-br from-yellow-50 via-orange-50 to-amber-50 overflow-hidden" id="about">
      
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[60vw] h-[60vw] md:w-[800px] md:h-[800px] rounded-full bg-gradient-to-br from-yellow-200 to-transparent -translate-y-1/2 translate-x-1/2 opacity-30" />
        <div className="absolute bottom-0 left-0 w-[45vw] h-[45vw] md:w-[600px] md:h-[600px] rounded-full bg-gradient-to-tr from-orange-200 to-transparent translate-y-1/2 -translate-x-1/2 opacity-30" />
        <div className="absolute inset-0 decoration-dots opacity-10"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-gray-900">Building Products That</span>{" "}
            <span className="text-gradient">Solve Real Problems</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            I'm passionate about identifying genuine problems and creating elegant solutions. 
            Every product I build starts with understanding user pain points and ends with 
            delivering value that makes a real difference in people's lives.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-20">
          
          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            
            {/* Dual Identity */}
            <div className="space-y-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full">
                  <Target className="w-5 h-5" />
                  <span className="font-bold">Product Builder</span>
                </div>
                <span className="text-2xl">+</span>
                <div className="flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full">
                  <Code className="w-5 h-5" />
                  <span className="font-bold">Technical Expert</span>
                </div>
              </div>
              
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                Where Product Vision Meets Technical Excellence
              </h3>
              
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>
                  I believe the best products come from deeply understanding both the 
                  <span className="font-semibold text-yellow-600">problem you're solving</span> and the 
                  <span className="font-semibold text-orange-600">technology that can solve it</span>. This dual perspective 
                  allows me to build products that are not just technically sound, but genuinely useful.
                </p>
                <p>
                  My journey started with <span className="font-bold text-orange-500">identifying real problems</span> in everyday life 
                  and business processes. I've built <span className="font-bold text-yellow-500">15+ products</span> that have helped 
                  thousands of users streamline their workflows, save time, and achieve their goals more efficiently.
                </p>
                <p>
                  With <span className="font-semibold text-orange-500">5 years of technical experience</span> backing my product decisions, 
                  I can quickly prototype ideas, validate concepts, and scale solutions that work. Every line of code I write serves 
                  the ultimate goal: <span className="font-semibold text-yellow-500">solving problems that matter</span>.
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => router.push('/projects')}
                className="bg-gradient-primary hover:shadow-xl text-white px-8 py-3 rounded-full font-bold shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <Target className="mr-2 w-5 h-5" />
                View My Products
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>

              <Button
                variant="outline"
                onClick={() => router.push('/articles')}
                className="border-2 border-orange-400 hover:border-orange-500 hover:bg-orange-50 px-8 py-3 rounded-full font-bold transition-all duration-300 hover:-translate-y-1"
              >
                <Code className="mr-2 w-5 h-5" />
                Read Tech Articles
              </Button>
            </div>

            {/* Achievements */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-yellow-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-2">
                    <achievement.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className={`text-2xl font-bold ${achievement.color} mb-1`}>{achievement.value}</div>
                  <div className="text-xs text-gray-600 font-medium">{achievement.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Images Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Main image */}
            <div className="relative z-10">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white"
              >
                <Image
                  src={BackImage}
                  alt="Mostafijur working as entrepreneur and engineer"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                  priority
                />
              </motion.div>
            </div>

            {/* Floating images with role indicators */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="absolute -top-8 -right-8 z-20 hidden sm:block"
            >
              <div className="relative">
                <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-xl overflow-hidden shadow-xl border-4 border-white">
                  <Image
                    src={FrontImage}
                    alt="Engineering workspace"
                    width={160}
                    height={160}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-gradient-primary text-white px-2 py-1 rounded-full text-xs font-bold">
                  Engineer
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="absolute -bottom-8 -left-8 z-20 hidden sm:block"
            >
              <div className="relative">
                <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-xl overflow-hidden shadow-xl border-4 border-white">
                  <Image
                    src={FrontImage2}
                    alt="Business strategy session"
                    width={160}
                    height={160}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-gradient-secondary text-white px-2 py-1 rounded-full text-xs font-bold">
                  Entrepreneur
                </div>
              </div>
            </motion.div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-yellow-400 rounded-full opacity-60 animate-bounce-slow"></div>
            <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-orange-400 rounded-full opacity-60 animate-bounce-slow" style={{ animationDelay: '1s' }}></div>
          </motion.div>
        </div>

        {/* Skills Sections */}
        <div className="space-y-16">
          
          {/* Entrepreneurship Skills */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="text-center">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 py-3 rounded-full mb-4">
                <Briefcase className="w-5 h-5" />
                <span className="font-bold">Product Building Arsenal</span>
              </div>
              <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Product Building Arsenal
              </h3>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                From ideation to execution, I bring a comprehensive entrepreneurial toolkit
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {entrepreneurSkills.map((skill, index) => (
                <motion.div
                  key={skill.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                  className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-yellow-200"
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${skill.color} rounded-xl flex items-center justify-center mb-4`}>
                    <skill.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{skill.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{skill.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Engineering Skills */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="text-center">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-full mb-4">
                <Code className="w-5 h-5" />
                <span className="font-bold">Engineering Excellence</span>
              </div>
              <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Crafting Scalable Solutions
              </h3>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Technical expertise that transforms ideas into robust, scalable products
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {engineeringSkills.map((skill, index) => (
                <motion.div
                  key={skill.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                  className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-200"
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${skill.color} rounded-xl flex items-center justify-center mb-4`}>
                    <skill.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{skill.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{skill.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
