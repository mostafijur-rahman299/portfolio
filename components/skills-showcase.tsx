"use client"

import { motion } from "framer-motion"
import { Lightbulb, Brain, Users, Zap, Target, Rocket, TrendingUp, Search, Heart, Palette, BarChart } from "lucide-react"

/**
 * Skills Showcase component - Premium display of product building and problem-solving skills
 * Features animated skill cards with proficiency levels and modern design
 */
export function SkillsShowcase() {
  const productSkills = [
    {
      category: "Problem Discovery",
      icon: Search,
      skills: [
        { name: "User Research", level: 92, color: "from-yellow-500 to-orange-500" },
        { name: "Market Analysis", level: 88, color: "from-orange-500 to-red-500" },
        { name: "Pain Point Identification", level: 90, color: "from-amber-500 to-yellow-500" },
        { name: "Opportunity Assessment", level: 85, color: "from-yellow-600 to-orange-600" }
      ],
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      category: "Product Strategy",
      icon: Target,
      skills: [
        { name: "Product Vision", level: 94, color: "from-orange-500 to-red-500" },
        { name: "Roadmap Planning", level: 91, color: "from-yellow-500 to-orange-500" },
        { name: "Feature Prioritization", level: 89, color: "from-amber-500 to-orange-500" },
        { name: "Go-to-Market Strategy", level: 87, color: "from-orange-600 to-red-500" }
      ],
      gradient: "from-orange-500 to-red-500"
    },
    {
      category: "User Experience",
      icon: Heart,
      skills: [
        { name: "User Journey Mapping", level: 88, color: "from-yellow-400 to-orange-400" },
        { name: "Usability Testing", level: 85, color: "from-orange-400 to-red-400" },
        { name: "Design Thinking", level: 90, color: "from-amber-400 to-yellow-500" },
        { name: "Customer Feedback", level: 92, color: "from-yellow-500 to-orange-500" }
      ],
      gradient: "from-yellow-400 to-orange-400"
    },
    {
      category: "Growth & Analytics",
      icon: BarChart,
      skills: [
        { name: "Product Analytics", level: 86, color: "from-orange-600 to-yellow-600" },
        { name: "A/B Testing", level: 83, color: "from-yellow-600 to-amber-600" },
        { name: "Growth Metrics", level: 88, color: "from-amber-600 to-orange-600" },
        { name: "Performance Optimization", level: 85, color: "from-orange-500 to-red-500" }
      ],
      gradient: "from-orange-600 to-yellow-600"
    }
  ]

  const SkillCard = ({ category, icon: Icon, skills, gradient }: any) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="premium-card rounded-2xl p-8 luxury-shadow scale-on-hover"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className={`w-12 h-12 bg-gradient-to-r ${gradient} rounded-xl flex items-center justify-center`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-xl font-bold text-gray-900">{category}</h3>
      </div>

      <div className="space-y-4">
        {skills.map((skill: any, index: number) => (
          <div key={skill.name} className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="font-medium text-gray-700">{skill.name}</span>
              <span className="text-sm font-bold text-gray-600">{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 1, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`h-2 bg-gradient-to-r ${skill.color} rounded-full`}
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  )

  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-br from-yellow-50 via-orange-50 to-white overflow-hidden">
      
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-0 w-[50vw] h-[50vw] md:w-[700px] md:h-[700px] rounded-full bg-gradient-to-br from-yellow-200 to-transparent -translate-y-1/2 translate-x-1/2 opacity-20" />
        <div className="absolute bottom-1/4 left-0 w-[40vw] h-[40vw] md:w-[600px] md:h-[600px] rounded-full bg-gradient-to-tr from-orange-200 to-transparent translate-y-1/2 -translate-x-1/2 opacity-20" />
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
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full border border-orange-200 shadow-lg mb-6">
            <Brain className="w-5 h-5 text-orange-600" />
            <span className="font-bold text-gray-700">Product Building Skills</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-shadow-premium">
            <span className="text-gray-900">Building Products</span>{" "}
            <span className="text-gradient">That Solve Problems</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            A comprehensive skill set focused on identifying real problems and building user-centered solutions. 
            Developed through years of hands-on product development and user research.
          </p>
        </motion.div>

        {/* Product Building Skills Section */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-6 py-3 rounded-full mb-4">
              <Target className="w-5 h-5" />
              <span className="font-bold">Product Expertise</span>
            </div>
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              End-to-End Product Development
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From problem discovery to solution delivery - building products that users love and businesses need
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {productSkills.map((skillGroup, index) => (
              <SkillCard key={skillGroup.category} {...skillGroup} />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="premium-card rounded-2xl p-8 max-w-2xl mx-auto luxury-shadow">
            <Lightbulb className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Have a Problem That Needs Solving?
            </h3>
            <p className="text-gray-600 mb-6">
              Let's work together to identify the real pain points and build a product that truly makes a difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-primary hover:shadow-xl text-white px-8 py-3 rounded-full font-bold shadow-lg transition-all duration-300 hover:-translate-y-1">
                Discuss Your Problem
              </button>
              <button className="border-2 border-orange-400 hover:border-orange-500 hover:bg-orange-50 px-8 py-3 rounded-full font-bold transition-all duration-300 hover:-translate-y-1">
                View My Products
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}