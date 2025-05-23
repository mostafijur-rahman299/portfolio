import { Hero } from "@/components/hero"
import { Newsletter } from "@/components/newsletter"
import { HelpSection } from "@/components/help-section"
import { ProjectSection } from "@/components/project-section"
import { AboutSection } from "@/components/about-section"
import { ProductsSection } from "@/components/products-section"
import { PodcastSection } from "@/components/podcast-section"
import TestimonialSection from "@/components/testimonials"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#faf9f6]">
      <main>
        <Hero />
        <Newsletter />
        <HelpSection />
        <ProjectSection />
        <TestimonialSection />
        {/* <AboutSection /> */}
        {/* <ProductsSection />
        <PodcastSection /> */}
      </main>
    </div>
  )
}

