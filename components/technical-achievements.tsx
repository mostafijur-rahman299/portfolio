"use client"

import { motion } from "framer-motion"
import { Server, Database, Cloud, Shield, Code, Award, Zap, TrendingUp, CheckCircle } from "lucide-react"

/**
 * Technical Achievements component - Showcases technical expertise, architecture knowledge, and professional certifications
 * Features system architecture diagrams, certifications, and technical metrics
 */
export function TechnicalAchievements() {
  const architectureComponents = [
    { name: "Frontend", icon: Code, color: "text-blue-600", position: "top-4 left-4" },
    { name: "API Gateway", icon: Server, color: "text-green-600", position: "top-4 right-4" },
    { name: "Database", icon: Database, color: "text-purple-600", position: "bottom-4 left-4" },
    { name: "Cloud", icon: Cloud, color: "text-orange-600", position: "bottom-4 right-4" },
    { name: "Security", icon: Shield, color: "text-red-600", position: "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" }
  ]

  const certifications = [
    { name: "AWS Certified", level: "Solutions Architect", status: "Active", year: "2023" },
    { name: "Google Cloud", level: "Professional", status: "Active", year: "2023" },
    { name: "React Certified", level: "Advanced", status: "Active", year: "2022" },
    { name: "Kubernetes", level: "Administrator", status: "Active", year: "2023" }
  ]

  const technicalMetrics = [
    { metric: "System Uptime", value: "99.9%", trend: "+0.2%", icon: Zap },
    { metric: "Code Coverage", value: "95%", trend: "+5%", icon: CheckCircle },
    { metric: "Performance Score", value: "98/100", trend: "+3", icon: Award },
    { metric: "Security Rating", value: "A+", trend: "Stable", icon: Shield }
  ]

  return (
    <section className="mobile-spacing bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="mobile-container max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mobile-center mb-12 sm:mb-16"
        >
          <h2 className="responsive-heading-1 font-bold mb-4 sm:mb-6 bg-gradient-to-r from-slate-900 via-blue-600 to-indigo-600 bg-clip-text text-transparent">Technical Excellence</h2>
          <p className="responsive-body text-gray-600 max-w-3xl mx-auto">
            Proven expertise in building scalable, secure, and high-performance systems
            that serve thousands of users worldwide.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 mb-16 sm:mb-20">
          {/* System Architecture Diagram */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="responsive-heading-3 font-bold mb-6 sm:mb-8 text-gray-800">System Architecture</h3>
            <div className="mobile-card card-enterprise relative h-64 sm:h-80">
              {architectureComponents.map((component, index) => (
                <motion.div
                  key={component.name}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                  className={`absolute ${component.position} card-glass p-4 text-center min-w-20`}
                >
                  <component.icon className={`w-6 h-6 mx-auto mb-2 ${component.color}`} />
                  <div className="text-xs font-medium text-gray-700">{component.name}</div>
                </motion.div>
              ))}
              
              {/* Connection Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                <motion.line
                  x1="25%" y1="25%" x2="75%" y2="25%"
                  stroke="#e5e7eb" strokeWidth="2" strokeDasharray="5,5"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 1 }}
                  viewport={{ once: true }}
                />
                <motion.line
                  x1="50%" y1="50%" x2="25%" y2="75%"
                  stroke="#e5e7eb" strokeWidth="2" strokeDasharray="5,5"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 1.2 }}
                  viewport={{ once: true }}
                />
                <motion.line
                  x1="50%" y1="50%" x2="75%" y2="75%"
                  stroke="#e5e7eb" strokeWidth="2" strokeDasharray="5,5"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 1.4 }}
                  viewport={{ once: true }}
                />
              </svg>
            </div>
          </motion.div>

          {/* Professional Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="responsive-heading-3 font-bold mb-6 sm:mb-8 text-gray-800">Certifications</h3>
            <div className="space-y-3 sm:space-y-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="mobile-card card-enterprise flex items-center justify-between group hover:scale-[1.02] transition-all duration-300 interactive-card"
                >
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center">
                      <Award className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-sm sm:text-base">{cert.name}</div>
                      <div className="text-xs sm:text-sm text-gray-600">{cert.level}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="status-success mb-1 text-xs sm:text-sm">{cert.status}</div>
                    <div className="text-xs text-gray-500">{cert.year}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Technical Metrics Dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="responsive-heading-3 font-bold mb-6 sm:mb-8 mobile-center text-gray-800">Performance Metrics</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {technicalMetrics.map((metric, index) => (
              <motion.div
                key={metric.metric}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                viewport={{ once: true }}
                className="mobile-card card-enterprise mobile-center group hover:scale-105 transition-all duration-300 interactive-card"
              >
                <metric.icon className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2 sm:mb-3 text-primary-600" />
                <div className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">{metric.value}</div>
                <div className="text-xs sm:text-sm text-gray-600 mb-1 sm:mb-2">{metric.metric}</div>
                <div className="text-xs font-medium text-success-600">{metric.trend}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}