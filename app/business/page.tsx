"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Briefcase, ExternalLink, Search, Sparkles } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function BusinessPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const articles = []

  const filteredArticles = articles.filter(article =>
    article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    article.description.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#faf9f6] via-[#f8f7f4] to-[#faf9f6]">
      <section className="container mx-auto px-4 py-6 sm:py-8 lg:py-12 relative">
        {/* Subtle gradient backgrounds */}
        <div className="absolute top-0 right-0 w-[200px] sm:w-[300px] lg:w-[400px] h-[200px] sm:h-[300px] lg:h-[400px] bg-gradient-to-br from-purple-100/20 via-purple-50/10 to-transparent rounded-full -z-10 blur-2xl" />
        <div className="absolute bottom-0 left-0 w-[200px] sm:w-[300px] lg:w-[400px] h-[200px] sm:h-[300px] lg:h-[400px] bg-gradient-to-tr from-blue-50/20 via-blue-50/5 to-transparent rounded-full -z-10 blur-2xl" />
        
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center mb-8 sm:mb-10"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-slate-900 tracking-tight mb-3 relative inline-block">
            Business{" "}
            <span className="bg-gradient-to-r from-purple-400 to-purple-500 bg-clip-text text-transparent">
              Insights
            </span>
            <div className="absolute -top-3 -right-3 w-6 h-6">
              <Sparkles className="w-full h-full text-yellow-400 opacity-75 animate-pulse" />
            </div>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed px-4">
            Explore articles on entrepreneurship, startup growth, and business strategy
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="w-full max-w-lg mx-auto relative mb-8 sm:mb-10"
        >
          <input
            type="text"
            placeholder="Search articles..."
            className="w-full px-4 py-2.5 rounded-lg bg-white/80 backdrop-blur-sm border border-slate-200 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 outline-none text-sm text-slate-700 shadow-md transition-all duration-200"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">

          {filteredArticles.length === 0 && (
            <div className="text-center text-slate-600 text-2xl font-bold">
              <p>We are working on it. Articles will be available soon.</p>
            </div>
          )}

          {filteredArticles.map((article, index) => (
            <motion.div
              key={article.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200"
            >
              <Link href={article.link} className="block">
                <div className="relative">
                  <Image
                    src={article.image}
                    alt={article.title}
                    width={350}
                    height={200}
                    className="w-full h-48 object-cover rounded-t-xl"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-200">
                    <Briefcase className="w-12 h-12 text-white" />
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2 flex items-center gap-2">
                    {article.title}
                    <ExternalLink className="w-4 h-4 text-slate-400" />
                  </h3>
                  <p className="text-slate-600 text-sm mb-3">{article.description}</p>
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span>{article.date}</span>
                    <span>{article.readTime}</span>
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
