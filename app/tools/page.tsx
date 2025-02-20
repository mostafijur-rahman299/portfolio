"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ExternalLink, Search, Sparkles } from "lucide-react"

export default function ToolsSection() {
  const [searchQuery, setSearchQuery] = useState("")

  const tools = [
    {
      title: "VS Code",
      description: "My primary code editor with essential extensions like Prettier, ESLint, GitLens and more.",
      image: "/placeholder.svg?height=200&width=350",
      category: "Development",
      link: "/tools/vscode"
    },
    {
      title: "GitHub Copilot",
      description: "AI pair programmer that helps me write code faster and learn new patterns.",
      image: "/placeholder.svg?height=200&width=350",
      category: "AI Tools", 
      link: "/tools/github-copilot"
    },
    {
      title: "iTerm2 + Oh My Zsh",
      description: "Customized terminal setup with themes, aliases and productivity plugins.",
      image: "/placeholder.svg?height=200&width=350",
      category: "Development",
      link: "/tools/terminal"
    },
    {
      title: "Figma",
      description: "Design tool for creating mockups, prototypes and design systems.",
      image: "/placeholder.svg?height=200&width=350",
      category: "Design",
      link: "/tools/figma"
    },
    {
      title: "Docker Desktop", 
      description: "Container platform for building and running containerized applications.",
      image: "/placeholder.svg?height=200&width=350",
      category: "DevOps",
      link: "/tools/docker"
    },
    {
      title: "Notion",
      description: "All-in-one workspace for notes, docs, projects and task management.",
      image: "/placeholder.svg?height=200&width=350",
      category: "Productivity",
      link: "/tools/notion"
    }
  ]

  const filteredTools = tools.filter(tool =>
    tool.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    tool.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    tool.category.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#faf9f6] via-[#f8f7f4] to-[#faf9f6]">
      <section className="container mx-auto px-4 py-6 sm:py-8 lg:py-12">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl font-serif text-slate-900 mb-4">
            Tools & Technologies
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            A curated list of software and tools I use for development and productivity
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="w-full max-w-lg mx-auto relative mb-8"
        >
          <input
            type="text"
            placeholder="Search tools..."
            className="w-full px-4 py-2.5 rounded-lg bg-white border border-slate-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 outline-none"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
        </motion.div>

        <div className="space-y-6">
          {filteredTools.map((tool, index) => (
            <motion.div
              key={tool.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow p-4 hover:shadow-md transition-shadow"
            >
              <Link href={tool.link} className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <Image
                    src={tool.image}
                    alt={tool.title}
                    width={100}
                    height={100}
                    className="w-24 h-24 object-cover rounded-md"
                  />
                </div>
                <div className="flex-grow">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-slate-900">
                      {tool.title}
                    </h3>
                    <span className="text-xs px-2 py-1 bg-slate-100 text-slate-600 rounded-full">
                      {tool.category}
                    </span>
                  </div>
                  <p className="text-slate-600 mt-1">{tool.description}</p>
                  <div className="mt-2 flex items-center text-blue-500 text-sm">
                    Learn more <ExternalLink className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}
