"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CheckCircle, Briefcase, GraduationCap, ArrowRight, Star, Code, Cloud, Cpu, Database, Globe, Twitter, Linkedin, Youtube, Mail, ChevronDown } from "lucide-react";
import profileImage from "@/public/Profile-Images/profile.jpeg";

export default function AboutPage() {
  const quickFacts = [
    {
      fact: "7+ years of coding experience in full-stack development and AI solutions.",
      icon: <CheckCircle className="w-4 h-4 text-emerald-500" />,
    },
    {
      fact: "Led teams for Fortune 100 companies and innovative startups.",
      icon: <CheckCircle className="w-4 h-4 text-emerald-500" />,
    },
    {
      fact: "Active open-source contributor with 1000+ GitHub stars.",
      icon: <CheckCircle className="w-4 h-4 text-emerald-500" />,
    },
    {
      fact: "Based in Tokyo, working with clients across Asia and globally.",
      icon: <CheckCircle className="w-4 h-4 text-emerald-500" />,
    },
    {
      fact: "Fluent in Japanese, English, and multiple programming languages.",
      icon: <CheckCircle className="w-4 h-4 text-emerald-500" />,
    }
  ];

  const skills = [
    {
      category: "Frontend Development",
      items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      icon: <Globe className="w-6 h-6 text-rose-500" />,
      gradient: "from-rose-400/20 to-rose-500/20"
    },
    {
      category: "Backend Development", 
      items: ["Node.js", "Python", "Java", "GraphQL"],
      icon: <Database className="w-6 h-6 text-amber-500" />,
      gradient: "from-amber-400/20 to-amber-500/20"
    },
    {
      category: "AI & Machine Learning",
      items: ["TensorFlow", "PyTorch", "Computer Vision", "NLP"],
      icon: <Cpu className="w-6 h-6 text-violet-500" />,
      gradient: "from-violet-400/20 to-violet-500/20"
    }
  ];

  const experiences = [
    {
      title: "Lead Software Architect",
      company: "Akasi Technologies",
      period: "2021 - Present",
      description: "Leading enterprise AI/cloud solutions development",
      icon: <Code className="w-5 h-5 text-emerald-500" />,
      gradient: "from-emerald-400/10 to-emerald-500/10"
    },
    {
      title: "Senior Software Engineer", 
      company: "Yellow Systems Inc.",
      period: "2019 - 2021",
      description: "Developed fintech solutions for Japanese market",
      icon: <Cloud className="w-5 h-5 text-rose-500" />,
      gradient: "from-rose-400/10 to-rose-500/10"
    },
    {
      title: "Full Stack Developer",
      company: "Akasi Startups",
      period: "2017 - 2019", 
      description: "Built scalable web and mobile applications",
      icon: <Star className="w-5 h-5 text-amber-500" />,
      gradient: "from-amber-400/10 to-amber-500/10"
    },
  ];

  const education = [
    {
      degree: "PhD in Computer Science",
      institution: "Tokyo Institute of Technology",
      year: "2020",
      details: "Deep learning for enterprise systems",
      gradient: "from-purple-400/10 to-purple-500/10"
    },
    {
      degree: "Master of Engineering",
      institution: "Akasi University", 
      year: "2017",
      details: "Distributed systems and cloud computing",
      gradient: "from-blue-400/10 to-blue-500/10"
    },
    {
      degree: "Bachelor of Computer Science",
      institution: "Yellow Valley University",
      year: "2015",
      details: "AI and software engineering focus",
      gradient: "from-cyan-400/10 to-cyan-500/10"
    }
  ];

  return (
    <div className="min-h-screen bg-[#faf9f6] overflow-hidden">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 relative">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-br from-yellow-200/40 via-amber-100/30 to-transparent rounded-full -z-10 blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-emerald-100/30 via-emerald-50/20 to-transparent rounded-full -z-10 blur-3xl animate-pulse" />
        
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div 
              initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
              className="relative w-64 h-64 md:w-72 md:h-72"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 via-amber-400 to-orange-500 rounded-full blur-2xl opacity-20 animate-pulse" />
              <Image
                src={profileImage}
                alt="Profile"
                fill
                className="rounded-full object-cover border-4 border-yellow-400/40 shadow-xl hover:scale-105 transition-transform duration-500 ease-out hover:border-yellow-400/60"
                priority
              />
              
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-center md:text-left flex-1"
            >
              <div className="space-y-5">
                <div className="relative inline-block">
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-slate-900 tracking-tight">
                    Mostafijur <span className="bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">Rahman</span>
                  </h1>
                  <div className="absolute -top-6 -right-6 w-10 h-10 bg-yellow-200 rounded-full opacity-50 animate-ping" />
                </div>
                <p className="text-lg md:text-xl text-slate-700 leading-relaxed max-w-2xl">
                  Software architect and AI specialist transforming complex ideas into elegant digital solutions.
                </p>
                <p className="text-base text-slate-600 leading-relaxed">
                  With over 10 years of experience in software development and AI, I specialize in building scalable enterprise solutions that drive business growth. My expertise spans cloud architecture, machine learning, and full-stack development.
                </p>
                <div className="flex gap-4 justify-center md:justify-start">
                  <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm">
                    <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></span>
                    <span className="text-sm text-slate-600">Available for projects</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm">
                    <span className="w-2.5 h-2.5 bg-blue-500 rounded-full"></span>
                    <span className="text-sm text-slate-600">Remote friendly</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-4">
                  <Button className="bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 transition-all duration-300 text-base py-5 px-6 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1">
                    View Projects
                    <ArrowRight className="ml-2 w-4 h-4 animate-bounce" />
                  </Button>
                  <Button variant="outline" className="border-2 border-yellow-400 text-yellow-600 hover:bg-gradient-to-r hover:from-yellow-50 hover:to-amber-50 transition-all duration-300 text-base py-5 px-6 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1">
                    Download CV
                  </Button>
                </div>
                <div className="flex gap-4 justify-center md:justify-start pt-4">
                  <motion.a 
                    whileHover={{ scale: 1.1 }}
                    href="#" 
                    className="text-slate-600 hover:text-yellow-500 transition-colors p-2 bg-white rounded-full shadow-sm hover:shadow-md"
                  >
                    <Twitter className="w-5 h-5" />
                  </motion.a>
                  <motion.a 
                    whileHover={{ scale: 1.1 }}
                    href="#" 
                    className="text-slate-600 hover:text-yellow-500 transition-colors p-2 bg-white rounded-full shadow-sm hover:shadow-md"
                  >
                    <Linkedin className="w-5 h-5" />
                  </motion.a>
                  <motion.a 
                    whileHover={{ scale: 1.1 }}
                    href="#" 
                    className="text-slate-600 hover:text-yellow-500 transition-colors p-2 bg-white rounded-full shadow-sm hover:shadow-md"
                  >
                    <Youtube className="w-5 h-5" />
                  </motion.a>
                  <motion.a 
                    whileHover={{ scale: 1.1 }}
                    href="#" 
                    className="text-slate-600 hover:text-yellow-500 transition-colors p-2 bg-white rounded-full shadow-sm hover:shadow-md"
                  >
                    <Mail className="w-5 h-5" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
          
        </div>
      </section>

      {/* Quick Facts Grid */}
      <section className="py-16 bg-gradient-to-b from-transparent via-yellow-50/30 to-transparent">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl font-serif text-center text-slate-900 mb-10"
          >
            Quick Facts
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {quickFacts.map((item, i) => (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                key={i} 
                className="flex items-center gap-3 bg-white/80 backdrop-blur-sm p-5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-emerald-100"
              >
                {item.icon}
                <p className="text-sm text-slate-700">{item.fact}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl font-serif text-center text-slate-900 mb-10"
          >
            Skills & Expertise
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {skills.map((skill, i) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                key={i}
                className={`bg-gradient-to-br ${skill.gradient} p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-white rounded-lg shadow-md">
                    {skill.icon}
                  </div>
                  <h3 className="font-medium text-lg text-slate-900">{skill.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, j) => (
                    <motion.span 
                      key={j}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1.5 bg-white/80 backdrop-blur-sm text-slate-700 text-sm rounded-full shadow-sm hover:shadow-md transition-all duration-300"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-16 bg-gradient-to-b from-transparent via-emerald-50/30 to-transparent">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl font-serif text-center text-slate-900 mb-10"
          >
            Experience
          </motion.h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {experiences.map((exp, i) => (
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                key={i} 
                className={`flex gap-4 bg-gradient-to-r ${exp.gradient} p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100`}
              >
                <div className="p-3 bg-white rounded-xl shadow-md">
                  {exp.icon}
                </div>
                <div>
                  <h3 className="font-medium text-lg text-slate-900">{exp.title}</h3>
                  <p className="text-sm text-emerald-600 font-medium">{exp.company} • {exp.period}</p>
                  <p className="text-sm text-slate-600 mt-1">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl font-serif text-center text-slate-900 mb-10"
          >
            Education
          </motion.h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {education.map((edu, i) => (
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                key={i} 
                className={`bg-gradient-to-r ${edu.gradient} p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-white rounded-lg shadow-md">
                    <GraduationCap className="w-5 h-5 text-violet-500" />
                  </div>
                  <h3 className="font-medium text-lg text-slate-900">{edu.degree}</h3>
                </div>
                <p className="text-sm text-violet-600 font-medium">{edu.institution} • {edu.year}</p>
                <p className="text-sm text-slate-600 mt-1">{edu.details}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center bg-gradient-to-br from-emerald-50 to-emerald-100/50 p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-emerald-100"
          >
            <h2 className="text-3xl font-serif text-slate-900 mb-4">Let's Work Together</h2>
            <p className="text-lg text-slate-700 mb-8">
              Looking to build something amazing? I'd love to help bring your ideas to life.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 text-base py-5 px-6 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1">
                Start a Project
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button variant="outline" className="border-2 border-emerald-500 text-emerald-600 hover:bg-emerald-50 transition-all duration-300 text-base py-5 px-6 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1">
                Schedule a Call
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
