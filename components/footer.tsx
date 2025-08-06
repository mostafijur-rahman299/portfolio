"use client"
import { Activity } from "lucide-react"
import { motion } from "framer-motion"
import { Youtube, Instagram, Linkedin, Twitter, Facebook, Github } from "lucide-react"

export function Footer() {
  const moreLinks = [
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Blog", href: "/blog" },
  ]

  const freeContent = [
    { name: "Newsletter", href: "https://mostafijur.substack.com/subscribe" },
    { name: "Articles & Guides", href: "/articles" },
    { name: "Videos", href: "/videos" },
    { name: "Book Notes", href: "/book-notes" },
  ]

  const products = [
    { name: "My Book", href: "/book" },
    { name: "Productivity Lab", href: "/lab" },
    { name: "YouTuber Academy", href: "/academy" },
  ]

  const socialLinks = [
    { icon: Youtube, href: "https://www.youtube.com/@mostafijur-r-sajib" },
    { icon: Instagram, href: "https://www.instagram.com/mostafijur_rahman" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/hello-mostafij/" },
    { icon: Twitter, href: "https://x.com/mostafijur_" },
    { icon: Facebook, href: "https://www.facebook.com/hey.mostafij/" },
    { icon: Github, href: "https://github.com/mostafijur-rahman299" },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 padding-section">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-spacing-xl">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-spacing-lg"
          >
            <div className="flex items-center gap-spacing-sm">
              <Activity className="h-8 w-8 text-brand-primary" />
              <span className="text-heading-3 text-primary-body">Mostafijur Rahman</span>
            </div>
              <span className="text-caption text-muted">(hello.mostafijur@gmail.com)</span>
            <p className="text-body text-secondary-body">© MRS 2025. All rights reserved.</p>
            <div className="flex gap-spacing-md">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  variants={item}
                  href={social.href}
                  target="_blank"
                  className="text-muted hover:text-secondary-body transition-colors"
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <h3 className="text-secondary-heading text-brand-secondary uppercase tracking-wider mb-spacing-md">More</h3>
            <ul className="space-y-spacing-sm">
              {moreLinks.map((link, index) => (
                <motion.li key={link.name} variants={item}>
                  <a href={link.href} target="_blank" className="text-body text-secondary-body hover:text-primary-body transition-colors">
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <h3 className="text-secondary-heading text-brand-secondary uppercase tracking-wider mb-spacing-md">Free Content</h3>
            <ul className="space-y-spacing-sm">
              {freeContent.map((link, index) => (
                <motion.li key={link.name} variants={item}>
                  <a href={link.href} target="_blank" className="text-body text-secondary-body hover:text-primary-body transition-colors">
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Products</h3>
            <ul className="space-y-3">
              {products.map((link, index) => (
                <motion.li key={link.name} variants={item}>
                  <a href={link.href} className="text-gray-600 hover:text-gray-900 transition-colors">
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div> */}
        </div>

        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="pt-8 mt-12 border-t flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0"
        >
          <div className="text-sm text-gray-500">
            Powered by{" "}
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Rockbase
            </a>
          </div>
          <div className="flex space-x-6">
            <a href="/privacy" className="text-sm text-gray-500 hover:text-gray-900">
              Privacy Policy
            </a>
            <a href="/cookies" className="text-sm text-gray-500 hover:text-gray-900">
              Cookie Policy
            </a>
          </div>
        </motion.div> */}
      </div>
    </footer>
  )
}

