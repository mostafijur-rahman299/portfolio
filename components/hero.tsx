"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, Github, Linkedin, Youtube, Twitter, Instagram, Mail, Users, Lightbulb, TrendingUp, Target, Code, Terminal, Cloud, Cpu, GitBranch, Award } from "lucide-react"
import ProfileImage from "@/public/Profile-Images/profile-pic7.png"
import { AnimatedSection, EnhancedButton, PremiumCard } from '@/components/ui'

/**
 * Hero component - Main landing section showcasing entrepreneur and software engineer identity
 * Features animated elements, social links, and beautiful yellow-orange design with glassmorphism effects
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

  const techStack = [
    { name: "React/Next.js", level: 95, color: "from-blue-500 to-cyan-500" },
    { name: "Python/Django", level: 90, color: "from-green-500 to-emerald-500" },
    { name: "TypeScript", level: 88, color: "from-blue-600 to-indigo-600" },
    { name: "AWS/Cloud", level: 85, color: "from-orange-500 to-red-500" }
  ]

  const achievements = [
    { title: "5+ Years", subtitle: "Experience", icon: Award, color: "text-blue-600" },
    { title: "50K+", subtitle: "Lines of Code", icon: Code, color: "text-green-600" },
    { title: "99.9%", subtitle: "Uptime", icon: Cloud, color: "text-purple-600" },
    { title: "15+", subtitle: "Technologies", icon: Cpu, color: "text-orange-600" }
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
      
      {/* Enhanced background elements with glassmorphism */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large floating shapes with glass effect */}
        <div className="absolute top-20 sm:top-40 -right-20 sm:-right-40 w-48 sm:w-80 h-48 sm:h-80 bg-gradient-to-br from-primary-300 to-accent-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float glass"></div>
        <div className="absolute -bottom-20 sm:-bottom-40 -left-20 sm:-left-40 w-48 sm:w-80 h-48 sm:h-80 bg-gradient-to-br from-primary-400 to-accent-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float glass" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-20 sm:top-40 left-1/2 w-48 sm:w-80 h-48 sm:h-80 bg-gradient-to-br from-primary-300 to-accent-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float glass" style={{ animationDelay: '4s' }}></div>
        
        {/* Enhanced decorative grid */}
        <div className="absolute inset-0 decoration-grid opacity-20 glass"></div>
        
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

      <div className="mobile-container container-custom relative z-10 padding-section">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* Enhanced Content Section */}
          <AnimatedSection animation="fade-in-up" delay={0}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="spacing-lg text-center lg:text-left"
            >

            {/* Main Heading */}
            <div className="spacing-sm">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-display"
              >
                <span className="block text-gray-900 font-light text-2xl sm:text-3xl lg:text-4xl">Hi, I'm</span>
                <span className="block text-gradient font-bold responsive-display">Mostafijur Rahman</span>
              </motion.h1>
            </div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="spacing-md max-w-2xl"
            >
              <p className="responsive-body text-gray-700">
                I'm passionate about <span className="font-semibold text-orange-600">building products that solve real problems</span> and 
                <span className="font-semibold text-yellow-600">make people's lives better</span>. Every product I create starts with 
                understanding genuine user pain points and crafting elegant solutions.
              </p>
              <p className="responsive-body text-gray-600">
                From <span className="font-medium text-orange-500">identifying market gaps</span> to
                <span className="font-medium text-yellow-500">launching successful products</span>, 
                I focus on creating value-driven solutions that users love and businesses thrive on.
              </p>
            </motion.div>

            {/* Enhanced CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-3 mobile-center lg:justify-start"
            >
              <EnhancedButton
                 variant="gradient"
                 size="lg"
                 glow
                 icon={<ArrowRight className="w-5 h-5" />}
                 iconPosition="right"
                 className="padding-button rounded-full font-semibold hover-lift"
                 onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
               >
                 <Target className="mr-2 w-5 h-5" />
                 View My Products
               </EnhancedButton>
            </motion.div>

            {/* Enhanced Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex items-center mobile-center lg:justify-start gap-3"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`touch-friendly p-2 sm:p-3 glass rounded-full hover-lift hover-glow transition-all duration-300 text-gray-600 ${social.color} border border-primary-200 hover:border-accent-300 interactive-icon`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                >
                  <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.a>
              ))}
            </motion.div>
            </motion.div>
          </AnimatedSection>

          {/* Enhanced Image Section */}
          <AnimatedSection animation="slide-in-right" delay={300}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="relative flex justify-center items-center"
            >
              
              {/* Enhanced decorative background */}
              <div className="absolute inset-0 gradient-primary rounded-full blur-3xl opacity-20 animate-pulse-slow"></div>
              
              {/* Main image container with glass effect */}
              <div className="relative z-10">
                <motion.div
                  className="relative"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Glass frame */}
                  <div className="absolute inset-4 glass rounded-full"></div>
                  
                  <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white shadow-premium">
                    <Image
                      src={ProfileImage}
                      alt="Mostafijur Rahman - Entrepreneur & Software Engineer"
                      width={400}
                      height={400}
                      className="w-full h-full object-cover animate-float"
                      priority
                    />
                  </div>
                
                {/* Enhanced floating achievement badges with glass effect */}
                 <motion.div
                   className="absolute -top-6 -right-6"
                   animate={{ y: [0, -10, 0] }}
                   transition={{ duration: 3, repeat: Infinity }}
                 >
                   <PremiumCard 
                     variant="glass" 
                     className="p-4 border-2 border-primary-300 hover-glow"
                   >
                     <div className="text-center">
                       <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center mx-auto mb-2">
                         <Lightbulb className="w-6 h-6 text-white" />
                       </div>
                       <div className="text-xs font-bold text-neutral-700">Innovator</div>
                     </div>
                   </PremiumCard>
                 </motion.div>
 
                 <motion.div
                   className="absolute -bottom-6 -left-6"
                   animate={{ y: [0, 10, 0] }}
                   transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                 >
                   <PremiumCard 
                     variant="glass" 
                     className="p-4 border-2 border-accent-300 hover-glow"
                   >
                     <div className="text-center">
                       <div className="w-12 h-12 gradient-secondary rounded-full flex items-center justify-center mx-auto mb-2">
                         <Code className="w-6 h-6 text-white" />
                       </div>
                       <div className="text-xs font-bold text-neutral-700">Developer</div>
                     </div>
                   </PremiumCard>
                 </motion.div>
 
                 <motion.div
                   className="absolute top-1/2 -left-8"
                   animate={{ x: [0, -10, 0] }}
                   transition={{ duration: 4, repeat: Infinity, delay: 3 }}
                 >
                   <PremiumCard 
                     variant="glass" 
                     className="p-3 border-2 border-primary-300 hover-glow"
                   >
                     <TrendingUp className="w-8 h-8 text-accent-500" />
                   </PremiumCard>
                 </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>

        
        {/* Technical Credibility Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-20 lg:mt-32"
        >
          {/* Professional Metrics */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                className="card-enterprise p-6 text-center group hover:scale-105 transition-all duration-300"
              >
                <achievement.icon className={`w-8 h-8 mx-auto mb-3 ${achievement.color}`} />
                <div className="text-2xl font-bold text-gray-900 mb-1">{achievement.title}</div>
                <div className="text-sm text-gray-600 font-medium">{achievement.subtitle}</div>
              </motion.div>
            ))}
          </div>

          {/* Tech Stack Visualization */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
            >
              <h3 className="text-heading-3 mb-8 text-center lg:text-left">Technical Expertise</h3>
              <div className="space-y-6">
                {techStack.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 1.8 + index * 0.1 }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-body font-medium text-gray-700">{tech.name}</span>
                      <span className="text-sm font-bold text-gray-900">{tech.level}%</span>
                    </div>
                    <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${tech.color} rounded-full`}
                        initial={{ width: 0 }}
                        animate={{ width: `${tech.level}%` }}
                        transition={{ duration: 1.5, delay: 2 + index * 0.2, ease: "easeOut" }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Code Snippet Showcase */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.8 }}
              className="card-enterprise p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <Terminal className="w-5 h-5 text-tech-600" />
                <h4 className="text-heading-6 text-gray-900">Latest Code</h4>
                <div className="flex gap-1 ml-auto">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
              </div>
              <div className="text-code-block">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 2, delay: 2.2 }}
                >
                  <div className="text-green-400">// Building scalable solutions</div>
                  <div className="text-blue-400">const</div> <div className="text-yellow-400">buildProduct</div> = <div className="text-purple-400">(</div><div className="text-orange-400">idea</div><div className="text-purple-400">) =&gt; &#123;</div>
                  <div className="ml-4 text-gray-300">return &#123;</div>
                  <div className="ml-8 text-cyan-400">innovation</div>: <div className="text-green-300">'cutting-edge'</div>,
                  <div className="ml-8 text-cyan-400">impact</div>: <div className="text-green-300">'life-changing'</div>,
                  <div className="ml-8 text-cyan-400">scale</div>: <div className="text-green-300">'global'</div>
                  <div className="ml-4 text-gray-300">&#125;</div>
                  <div className="text-purple-400">&#125;</div>
                </motion.div>
              </div>
              <div className="flex items-center gap-2 mt-4 pt-4 border-t border-gray-200">
                <GitBranch className="w-4 h-4 text-gray-500" />
                <span className="text-xs text-gray-500">main branch • 2 hours ago</span>
                <div className="status-success ml-auto">Active</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
