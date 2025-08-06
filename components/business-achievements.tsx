"use client"

import { motion } from "framer-motion"
import { TrendingUp, Users, Target, Award, Briefcase, DollarSign, Globe, Lightbulb, Rocket, Building } from "lucide-react"
import { PremiumCard } from '@/components/ui'

/**
 * Business Achievements component - Showcases entrepreneurial accomplishments and leadership experience
 * Features business metrics, leadership roles, and entrepreneurial milestones
 */
export function BusinessAchievements() {
  const businessMetrics = [
    { 
      title: "Revenue Generated", 
      value: "$500K+", 
      description: "Across multiple product launches",
      icon: DollarSign,
      color: "text-green-600",
      gradient: "gradient-leadership"
    },
    { 
      title: "Products Launched", 
      value: "15+", 
      description: "From concept to market success",
      icon: Rocket,
      color: "text-blue-600",
      gradient: "gradient-corporate"
    },
    { 
      title: "Users Impacted", 
      value: "10K+", 
      description: "Lives improved through technology",
      icon: Users,
      color: "text-purple-600",
      gradient: "gradient-expertise"
    },
    { 
      title: "Market Reach", 
      value: "Global", 
      description: "Products used worldwide",
      icon: Globe,
      color: "text-orange-600",
      gradient: "gradient-innovation"
    }
  ]

  const leadershipRoles = [
    {
      title: "Founder & CEO",
      company: "Multiple Startups",
      period: "2019 - Present",
      achievements: [
        "Led teams of 5-15 developers and designers",
        "Secured $100K+ in initial funding",
        "Achieved 300% user growth in first year"
      ],
      icon: Building
    },
    {
      title: "Technical Lead",
      company: "Product Development",
      period: "2020 - Present",
      achievements: [
        "Architected scalable systems for 10K+ users",
        "Reduced deployment time by 80%",
        "Mentored 20+ junior developers"
      ],
      icon: Target
    },
    {
      title: "Innovation Director",
      company: "Technology Solutions",
      period: "2021 - Present",
      achievements: [
        "Identified and solved 100+ market problems",
        "Launched 5 successful product lines",
        "Generated $200K+ in new revenue streams"
      ],
      icon: Lightbulb
    }
  ]

  const entrepreneurialMilestones = [
    { year: "2019", milestone: "First Startup Founded", impact: "Validated product-market fit" },
    { year: "2020", milestone: "$50K Revenue Milestone", impact: "Achieved profitability" },
    { year: "2021", milestone: "Team Expansion", impact: "Scaled to 10+ team members" },
    { year: "2022", milestone: "Product Portfolio", impact: "Launched 5 successful products" },
    { year: "2023", milestone: "Market Leadership", impact: "Recognized industry expert" }
  ]

  return (
    <section className="mobile-spacing section-alternate">
      <div className="mobile-container container-enterprise">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mobile-center mb-12 sm:mb-20"
        >
          <h2 className="responsive-heading-1 mb-4 sm:mb-6 text-gradient-corporate">Business Leadership</h2>
          <p className="responsive-body max-w-3xl mx-auto">
            Proven track record of building successful products, leading high-performing teams, 
            and driving innovation in the technology sector.
          </p>
        </motion.div>

        {/* Business Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16 sm:mb-24"
        >
          <h3 className="responsive-heading-3 mb-8 sm:mb-12 mobile-center">Business Impact</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {businessMetrics.map((metric, index) => (
              <motion.div
                key={metric.title}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                viewport={{ once: true }}
                className="mobile-card card-enterprise mobile-center interactive-card"
              >
                <div className={`w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 rounded-2xl ${metric.gradient} flex items-center justify-center`}>
                  <metric.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">{metric.value}</div>
                <div className="text-sm sm:text-base text-gray-800 mb-1 sm:mb-2">{metric.title}</div>
                <div className="text-xs sm:text-sm text-gray-600">{metric.description}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Leadership Experience */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-16 sm:mb-24"
        >
          <h3 className="responsive-heading-3 mb-8 sm:mb-12 mobile-center">Leadership Experience</h3>
          <div className="mobile-grid">
            {leadershipRoles.map((role, index) => (
              <motion.div
                key={role.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                viewport={{ once: true }}
                className="mobile-card card-enterprise hover-enterprise"
              >
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 gradient-corporate rounded-xl flex items-center justify-center">
                    <role.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm sm:text-base font-semibold text-gray-900">{role.title}</div>
                    <div className="text-xs sm:text-sm text-gray-600">{role.company}</div>
                    <div className="text-xs text-gray-500">{role.period}</div>
                  </div>
                </div>
                <div className="space-y-2 sm:space-y-3">
                  {role.achievements.map((achievement, achievementIndex) => (
                    <div key={achievementIndex} className="flex items-start gap-2 sm:gap-3">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary-500 rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                      <div className="text-xs sm:text-sm text-gray-700">{achievement}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Entrepreneurial Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="responsive-heading-3 mb-8 sm:mb-12 mobile-center">Entrepreneurial Journey</h3>
          <div className="relative">
            {/* Timeline Line - Hidden on mobile */}
            <div className="hidden sm:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-500 to-accent-500 rounded-full"></div>
            
            <div className="space-y-8 sm:space-y-12">
              {entrepreneurialMilestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex items-center gap-4 sm:gap-8 ${index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'} flex-col sm:flex-row`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'sm:text-right' : 'sm:text-left'} mobile-center`}>
                    <div className="mobile-card card-enterprise hover-enterprise inline-block">
                      <div className="text-sm sm:text-base font-semibold text-gray-900 mb-1 sm:mb-2">{milestone.milestone}</div>
                      <div className="text-xs sm:text-sm text-gray-600">{milestone.impact}</div>
                    </div>
                  </div>
                  
                  {/* Timeline Node */}
                  <div className="relative z-10 order-first sm:order-none">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 gradient-innovation rounded-full flex items-center justify-center border-2 sm:border-4 border-white shadow-lg">
                      <div className="text-white font-bold text-xs sm:text-sm">{milestone.year}</div>
                    </div>
                  </div>
                  
                  <div className="hidden sm:block flex-1"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}