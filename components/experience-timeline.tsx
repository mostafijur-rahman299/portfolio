"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin, TrendingUp, Users, Code, Rocket, Award, Building } from "lucide-react"

/**
 * Experience Timeline component - Showcasing 5 years of software development and entrepreneurial journey
 * Features premium design with animated timeline and milestone cards
 */
export function ExperienceTimeline() {
  const experiences = [
    {
      year: "2024-Present",
      title: "Product Builder & Problem Solver",
      company: "Independent",
      location: "Remote",
      type: "entrepreneur",
      icon: Rocket,
      description: "Transitioning from software development to product building. Focusing on identifying real problems and creating solutions that matter to users.",
      achievements: [
        "Shifted focus from coding to product building",
        "Researching market problems and user pain points",
        "Building first product with user-centered approach",
        "Learning product management and user research"
      ],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      year: "2025",
      title: "Bachelor's Degree Graduate",
      company: "University",
      location: "Academic",
      type: "education",
      icon: Award,
      description: "Completing bachelor's degree while gaining practical software development experience. Bridging academic knowledge with real-world skills.",
      achievements: [
        "Graduating with Bachelor's degree",
        "Applied theoretical knowledge to practical projects",
        "Completed final year project",
        "Maintained academic excellence while working"
      ],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      year: "2020-2024",
      title: "Software Engineer",
      company: "Various Companies",
      location: "Hybrid/Remote",
      type: "engineer",
      icon: Code,
      description: "4+ years of hands-on software development experience. Built expertise in modern web technologies and delivered multiple successful projects.",
      achievements: [
        "Developed 15+ web applications and products",
        "Mastered React, Node.js, and modern frameworks",
        "Worked with diverse clients and industries",
        "Built scalable and maintainable solutions"
      ],
      gradient: "from-green-500 to-emerald-500"
    },
    {
      year: "2016-2020",
      title: "Diploma in Computer Science",
      company: "Technical Institute",
      location: "Academic",
      type: "education",
      icon: Building,
      description: "Foundation years learning programming fundamentals and computer science principles. Built the technical foundation for future career.",
      achievements: [
        "Completed Diploma in Computer Science",
        "Learned programming fundamentals",
        "Built first projects and applications",
        "Developed passion for technology and problem-solving"
      ],
      gradient: "from-orange-500 to-red-500"
    }
  ]

  const getTypeColor = (type: string) => {
    switch (type) {
      case "entrepreneur":
        return "bg-gradient-to-r from-purple-500 to-pink-500"
      case "hybrid":
        return "bg-gradient-to-r from-blue-500 to-purple-500"
      case "engineer":
        return "bg-gradient-to-r from-green-500 to-blue-500"
      case "education":
        return "bg-gradient-to-r from-orange-500 to-red-500"
      default:
        return "bg-gradient-primary"
    }
  }

  const getTypeLabel = (type: string) => {
    switch (type) {
      case "entrepreneur":
        return "Product Building"
      case "hybrid":
        return "Hybrid Role"
      case "engineer":
        return "Engineering"
      case "education":
        return "Education"
      default:
        return "Professional"
    }
  }

  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-hidden">
      
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-[40vw] h-[40vw] md:w-[600px] md:h-[600px] rounded-full bg-gradient-to-br from-blue-200 to-transparent -translate-y-1/2 -translate-x-1/2 opacity-30" />
        <div className="absolute bottom-0 right-0 w-[35vw] h-[35vw] md:w-[500px] md:h-[500px] rounded-full bg-gradient-to-tl from-purple-200 to-transparent translate-y-1/2 translate-x-1/2 opacity-30" />
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
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full border border-blue-200 shadow-lg mb-6">
            <Calendar className="w-5 h-5 text-blue-600" />
            <span className="font-bold text-gray-700">Professional Journey</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-shadow-premium">
            <span className="text-gray-900">My</span>{" "}
            <span className="premium-text-gradient">Journey</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            From learning fundamentals to building products - an 8-year journey of continuous growth, 
            mastering technology, and transitioning from software development to product building.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 transform md:-translate-x-1/2 rounded-full"></div>

          {/* Experience items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.year}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 w-6 h-6 transform md:-translate-x-1/2 z-10">
                  <div className={`w-full h-full rounded-full ${getTypeColor(exp.type)} shadow-lg flex items-center justify-center`}>
                    <exp.icon className="w-3 h-3 text-white" />
                  </div>
                </div>

                {/* Content card */}
                <div className={`ml-20 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-8 md:text-right' : 'md:ml-8'
                } md:w-1/2`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="premium-card rounded-2xl p-8 luxury-shadow scale-on-hover"
                  >
                    {/* Header */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`px-3 py-1 rounded-full text-xs font-bold text-white ${getTypeColor(exp.type)}`}>
                        {getTypeLabel(exp.type)}
                      </div>
                      <div className="text-2xl font-bold text-gradient">{exp.year}</div>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                      {exp.title}
                    </h3>

                    <div className="flex items-center gap-4 text-gray-600 mb-4">
                      <div className="flex items-center gap-1">
                        <Building className="w-4 h-4" />
                        <span className="font-medium">{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    <p className="text-gray-700 mb-6 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div className="space-y-2">
                      <h4 className="font-bold text-gray-900 mb-3">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-600">
                            <div className="w-1.5 h-1.5 bg-gradient-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { label: "Years Learning", value: "8+", icon: Calendar, color: "text-blue-600" },
            { label: "Products Built", value: "15+", icon: Rocket, color: "text-purple-600" },
            { label: "Technologies Mastered", value: "10+", icon: Code, color: "text-green-600" },
            { label: "Current Focus", value: "Product Building", icon: TrendingUp, color: "text-orange-600" }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center premium-card rounded-xl p-6 luxury-shadow scale-on-hover"
            >
              <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-3">
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
              <div className="text-gray-600 font-medium text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}