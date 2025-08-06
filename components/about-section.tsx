"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, Code, Briefcase, Lightbulb, Users, Award, Coffee, TrendingUp, Rocket, Target } from "lucide-react"
import BackImage from "@/public/back03.jpg"
import FrontImage from "@/public/front01.jpg"
import FrontImage2 from "@/public/front02.jpg"
import { useRouter } from "next/navigation"
import { AnimatedSection, PremiumCard } from '@/components/ui'

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
    <section className="relative padding-section bg-gradient-to-br from-neutral-50 via-primary-50 to-accent-50 overflow-hidden" id="about">
      
      {/* Enhanced Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[60vw] h-[60vw] md:w-[800px] md:h-[800px] rounded-full bg-gradient-to-br from-primary-200 to-transparent -translate-y-1/2 translate-x-1/2 opacity-30 animate-float" />
        <div className="absolute bottom-0 left-0 w-[45vw] h-[45vw] md:w-[600px] md:h-[600px] rounded-full bg-gradient-to-tr from-accent-200 to-transparent translate-y-1/2 -translate-x-1/2 opacity-30 animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary-100 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-pulse-slow" />
        <div className="absolute inset-0 decoration-dots opacity-10"></div>
      </div>

      <div className="container-custom relative z-10">
        
        {/* Enhanced Section Header */}
        <AnimatedSection animation="fade-in-up" delay={0}>
          <div className="text-center spacing-xl">
            <h2 className="text-heading-1 spacing-sm">
              <span className="text-neutral-900">Building Products That</span>{" "}
              <span className="gradient-text animate-glow">Solve Real Problems</span>
            </h2>
            <p className="text-body-large text-neutral-600 max-w-4xl mx-auto text-pretty">
              I'm passionate about identifying genuine problems and creating elegant solutions. 
              Every product I build starts with understanding user pain points and ends with 
              delivering value that makes a real difference in people's lives.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center spacing-3xl">
          
          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="spacing-lg"
          >
            
            {/* Enhanced Dual Identity */}
            <div className="spacing-md">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-2 gradient-primary text-white px-4 py-2 rounded-full shadow-glow">
                  <Target className="w-5 h-5" />
                  <span className="font-bold">Product Builder</span>
                </div>
                <span className="text-2xl gradient-text">+</span>
                <div className="flex items-center gap-2 gradient-secondary text-white px-4 py-2 rounded-full shadow-glow">
                  <Code className="w-5 h-5" />
                  <span className="font-bold">Technical Expert</span>
                </div>
              </div>
              
              <h3 className="text-heading-2 text-neutral-900">
                Where Product Vision Meets <span className="gradient-text">Technical Excellence</span>
              </h3>
              
              <div className="spacing-sm text-neutral-600 text-body-large">
                <p className="text-pretty">
                  I believe the best products come from deeply understanding both the 
                  <span className="font-semibold text-primary-600">problem you're solving</span> and the 
                  <span className="font-semibold text-accent-600">technology that can solve it</span>. This dual perspective 
                  allows me to build products that are not just technically sound, but genuinely useful.
                </p>
                <p className="text-pretty">
                  My journey started with <span className="font-bold text-accent-500">identifying real problems</span> in everyday life 
                  and business processes. I've built <span className="font-bold text-primary-500">15+ products</span> that have helped 
                  thousands of users streamline their workflows, save time, and achieve their goals more efficiently.
                </p>
                <p className="text-pretty">
                  With <span className="font-semibold text-accent-500">5 years of technical experience</span> backing my product decisions, 
                  I can quickly prototype ideas, validate concepts, and scale solutions that work. Every line of code I write serves 
                  the ultimate goal: <span className="font-semibold text-primary-500">solving problems that matter</span>.
                </p>
              </div>
            </div>

            {/* Enhanced Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                onClick={() => router.push('/projects')}
                className="gradient-primary hover:shadow-glow text-white padding-button rounded-full font-semibold shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-105"
              >
                <Target className="mr-2 w-5 h-5" />
                View My Products
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>

              <Button
                variant="outline"
                onClick={() => router.push('/articles')}
                className="border-2 border-accent-400 hover:border-accent-500 hover:bg-accent-50 padding-button rounded-full font-semibold transition-all duration-300 hover:-translate-y-1 hover:scale-105"
              >
                <Code className="mr-2 w-5 h-5" />
                Read Tech Articles
              </Button>
            </div>

            {/* Enhanced Achievements */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6">
              {achievements.map((achievement, index) => (
                <AnimatedSection
                  key={achievement.label}
                  animation="fade-in-up"
                  delay={index * 100}
                >
                  <PremiumCard 
                    variant="glass" 
                    hover 
                    glow
                    className="text-center group"
                  >
                    <div className="w-10 h-10 gradient-primary rounded-full flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform duration-300 shadow-glow">
                      <achievement.icon className="w-5 h-5 text-white" />
                    </div>
                    <div className={`text-2xl font-bold gradient-text mb-1`}>{achievement.value}</div>
                    <div className="text-xs text-neutral-600 font-medium">{achievement.label}</div>
                  </PremiumCard>
                </AnimatedSection>
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
        <div className="spacing-3xl">
          
          {/* Enhanced Entrepreneurship Skills */}
          <AnimatedSection animation="fade-in-up" delay={0}>
            <div className="spacing-lg">
              <div className="text-center">
                <div className="inline-flex items-center gap-2 gradient-primary text-white px-6 py-3 rounded-full mb-4 shadow-glow">
                  <Briefcase className="w-5 h-5" />
                  <span className="font-bold">Product Building Arsenal</span>
                </div>
                <h3 className="text-heading-2 text-neutral-900 spacing-sm">
                  Product Building <span className="gradient-text">Arsenal</span>
                </h3>
                <p className="text-body-large text-neutral-600 max-w-2xl mx-auto text-pretty">
                  From ideation to execution, I bring a comprehensive entrepreneurial toolkit
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {entrepreneurSkills.map((skill, index) => (
                  <AnimatedSection
                    key={skill.title}
                    animation="fade-in-up"
                    delay={200 + index * 100}
                  >
                    <PremiumCard 
                      variant="glass" 
                      hover 
                      glow
                      className="h-full group"
                    >
                      <div className={`w-12 h-12 bg-gradient-to-r ${skill.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-glow`}>
                        <skill.icon className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="text-lg font-bold text-neutral-900 mb-3">{skill.title}</h4>
                      <p className="text-neutral-600 text-sm leading-relaxed text-pretty">{skill.description}</p>
                    </PremiumCard>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Enhanced Engineering Skills */}
          <AnimatedSection animation="fade-in-up" delay={600}>
            <div className="spacing-lg">
              <div className="text-center">
                <div className="inline-flex items-center gap-2 gradient-secondary text-white px-6 py-3 rounded-full mb-4 shadow-glow">
                  <Code className="w-5 h-5" />
                  <span className="font-bold">Engineering Excellence</span>
                </div>
                <h3 className="text-heading-2 text-neutral-900 spacing-sm">
                  Crafting <span className="gradient-text">Scalable Solutions</span>
                </h3>
                <p className="text-body-large text-neutral-600 max-w-2xl mx-auto text-pretty">
                  Technical expertise that transforms ideas into robust, scalable products
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {engineeringSkills.map((skill, index) => (
                  <AnimatedSection
                    key={skill.title}
                    animation="fade-in-up"
                    delay={800 + index * 100}
                  >
                    <PremiumCard 
                      variant="glass" 
                      hover 
                      glow
                      className="h-full group"
                    >
                      <div className={`w-12 h-12 bg-gradient-to-r ${skill.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-glow`}>
                        <skill.icon className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="text-lg font-bold text-neutral-900 mb-3">{skill.title}</h4>
                      <p className="text-neutral-600 text-sm leading-relaxed text-pretty">{skill.description}</p>
                    </PremiumCard>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
