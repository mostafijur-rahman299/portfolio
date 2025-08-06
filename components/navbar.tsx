"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, X, ChevronDown, Briefcase, Code } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

/**
 * Navbar component - Navigation with entrepreneur/engineer theme and yellow-orange design
 * Features glass morphism effect, mobile menu, and smooth animations
 */
export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Handle scroll effect for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const resourceTypes = [
    { icon: "📝", name: "Tech Articles", href: "/articles", description: "Engineering insights and tutorials" },
    { icon: "📚", name: "Business Notes", href: "/book-notes", description: "Entrepreneurship learnings" },
    { icon: "🎥", name: "Startup Videos", href: "/videos", description: "Building and scaling content" },
    { icon: "📧", name: "Founder Newsletter", href: "/newsletter", description: "Weekly business & tech insights" },
  ]

  const topics = [
    { icon: "💼", name: "Entrepreneurship", href: "/business", description: "Startup strategy and growth" },
    { icon: "🛠️", name: "Engineering", href: "/tools", description: "Development tools and practices" }
  ]

  const handleSubscribeSubstack = () => {
    window.open("https://mostafijur.substack.com/subscribe", "_blank")
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-xl border-b border-yellow-200/50 shadow-2xl shadow-yellow-500/10' 
          : 'bg-gradient-to-r from-white/10 via-white/5 to-white/10 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                <span className="text-white font-bold text-lg relative z-10">M</span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-brand-primary text-heading-3 font-bold">
                  Mostafijur
                </span>
                <span className="text-muted text-caption -mt-1">Product Builder • Problem Solver</span>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList className="space-x-2">

                {/* Products Link */}
                <NavigationMenuItem>
                  <Link href="/products" legacyBehavior passHref>
                    <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-full padding-button text-body font-medium transition-all duration-300 hover:bg-yellow-50 hover:text-orange-600 focus:bg-yellow-50 focus:text-orange-600 focus:outline-none">
                      Products
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                {/* Projects Link */}
                <NavigationMenuItem>
                  <Link href="/projects" legacyBehavior passHref>
                    <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-full padding-button text-body font-medium transition-all duration-300 hover:bg-yellow-50 hover:text-orange-600 focus:bg-yellow-50 focus:text-orange-600 focus:outline-none">
                      Ventures & Projects
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                {/* Resources Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="rounded-full hover:bg-yellow-50 hover:text-orange-600">
                    Resources
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-spacing-md padding-card w-[600px] grid-cols-2 bg-white/95 backdrop-blur-sm border border-yellow-200">
                      <div className="space-y-spacing-xs">
                        <h4 className="text-secondary-heading text-brand-secondary font-semibold mb-spacing-sm flex items-center gap-2">
                          <Code className="w-4 h-4" />
                          Content & Learning
                        </h4>
                        {resourceTypes.map((resource) => (
                          <Link
                            key={resource.name}
                            href={resource.href}
                            className="group flex items-start space-x-3 rounded-lg p-3 hover:bg-yellow-50 transition-colors duration-200 border border-transparent hover:border-yellow-200"
                          >
                            <span className="text-2xl">{resource.icon}</span>
                            <div>
                              <div className="text-body font-medium text-primary-body group-hover:text-orange-600 transition-colors">
                                {resource.name}
                              </div>
                              <div className="text-caption text-secondary-body mt-1">
                                {resource.description}
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                      <div className="space-y-2">
                        <h4 className="text-secondary-heading text-brand-secondary font-semibold mb-spacing-sm flex items-center gap-2">
                          <Briefcase className="w-4 h-4" />
                          Focus Areas
                        </h4>
                        {topics.map((topic) => (
                          <Link
                            key={topic.name}
                            href={topic.href}
                            className="group flex items-start space-x-3 rounded-lg p-3 hover:bg-orange-50 transition-colors duration-200 border border-transparent hover:border-orange-200"
                          >
                            <span className="text-2xl">{topic.icon}</span>
                            <div>
                              <div className="text-body font-medium text-primary-body group-hover:text-yellow-600 transition-colors">
                                {topic.name}
                              </div>
                              <div className="text-caption text-secondary-body mt-1">
                                {topic.description}
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

              </NavigationMenuList>
            </NavigationMenu>

            {/* CTA Button */}
            <Button 
              className="btn-primary hover:shadow-xl text-white rounded-full padding-button font-bold shadow-lg transition-all duration-300 hover:-translate-y-0.5 border-2 border-transparent hover:border-yellow-300" 
              onClick={handleSubscribeSubstack}
            >
              Join Community
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full hover:bg-yellow-50">
                  <Menu className="h-6 w-6 text-orange-600" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 bg-white/95 backdrop-blur-md border-l border-yellow-200">
                <div className="flex flex-col h-full">
                  
                  {/* Mobile Menu Header */}
                  <div className="flex items-center justify-between py-4 border-b border-yellow-200">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-sm">M</span>
                      </div>
                      <span className="text-heading-3 font-semibold text-primary-body">Menu</span>
                    </div>
                  </div>

                  {/* Mobile Menu Content */}
                  <div className="flex-1 py-6 space-y-6">
                    
                    {/* Main Links */}
                    <div className="space-y-3">
                      <Link 
                        href="/about" 
                        className="block text-body-large font-medium text-primary-body hover:text-orange-600 transition-colors padding-xs rounded-lg hover:bg-yellow-50"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        About Me
                      </Link>
                      <Link 
                        href="/products" 
                        className="block text-body-large font-medium text-primary-body hover:text-orange-600 transition-colors padding-xs rounded-lg hover:bg-yellow-50"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Products
                      </Link>
                      <Link 
                        href="/projects" 
                        className="block text-body-large font-medium text-primary-body hover:text-orange-600 transition-colors padding-xs rounded-lg hover:bg-yellow-50"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Ventures & Projects
                      </Link>
                    </div>

                    {/* Resources Section */}
                    <div className="space-y-3">
                      <h4 className="text-secondary-heading font-semibold text-brand-secondary uppercase tracking-wider flex items-center gap-2">
                        <Code className="w-4 h-4" />
                        Resources
                      </h4>
                      {resourceTypes.map((resource) => (
                        <Link 
                          key={resource.name} 
                          href={resource.href} 
                          className="flex items-center space-x-3 text-primary-body hover:text-orange-600 transition-colors padding-xs rounded-lg hover:bg-yellow-50"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <span className="text-xl">{resource.icon}</span>
                          <span>{resource.name}</span>
                        </Link>
                      ))}
                    </div>

                    {/* Topics Section */}
                    <div className="space-y-3">
                      <h4 className="text-secondary-heading font-semibold text-brand-secondary uppercase tracking-wider flex items-center gap-2">
                        <Briefcase className="w-4 h-4" />
                        Focus Areas
                      </h4>
                      {topics.map((topic) => (
                        <Link 
                          key={topic.name} 
                          href={topic.href} 
                          className="flex items-center space-x-3 text-primary-body hover:text-yellow-600 transition-colors padding-xs rounded-lg hover:bg-orange-50"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <span className="text-xl">{topic.icon}</span>
                          <span>{topic.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Mobile CTA */}
                  <div className="py-4 border-t border-yellow-200">
                    <Button 
                      className="w-full btn-primary hover:shadow-xl text-white rounded-full py-3 font-bold shadow-lg border-2 border-transparent hover:border-yellow-300"
                      onClick={() => {
                        handleSubscribeSubstack()
                        setIsMobileMenuOpen(false)
                      }}
                    >
                      Join Community
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}

