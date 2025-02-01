import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Newsletter } from "@/components/newsletter"
import { HelpSection } from "@/components/help-section"
import { ProjectSection } from "@/components/project-section"
import { AboutSection } from "@/components/about-section"
import { ProductsSection } from "@/components/products-section"
import { PodcastSection } from "@/components/podcast-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#faf9f6]">
      <Navbar />
      <main>
        <Hero />
        {/* <Newsletter /> */}
        <HelpSection />
        <ProjectSection />
        <AboutSection />
        <ProductsSection />
        <PodcastSection />
      </main>
      <Footer />
    </div>
  )
}

