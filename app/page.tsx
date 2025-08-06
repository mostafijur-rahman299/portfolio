import { Hero } from "@/components/hero"
import { AboutSection } from "@/components/about-section"
import { ExperienceTimeline } from "@/components/experience-timeline"
import { TechnicalAchievements } from "@/components/technical-achievements"
import { BusinessAchievements } from "@/components/business-achievements"

/**
 * Home page component - Premium landing page showcasing 5 years of experience and entrepreneurial journey
 * Features hero, about, experience timeline, skills, projects, testimonials, and newsletter sections
 */
export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <main className="space-y-0">
        <Hero />
        <TechnicalAchievements />
        <BusinessAchievements />
        <AboutSection />
        <ExperienceTimeline />
      </main>
    </div>
  )
}

