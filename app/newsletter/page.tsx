"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Sparkles } from "lucide-react"

export default function NewsletterPage() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")
    
    // Simulate API call
    setTimeout(() => {
      setStatus("success")
      setEmail("")
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#faf9f6] via-[#f8f7f4] to-[#faf9f6]">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h1 className="text-4xl font-serif text-slate-900 tracking-tight mb-3 relative inline-block">
            Subscribe to my{" "}
            <span className="bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">
              Newsletter
            </span>
            <div className="absolute -top-3 -right-3 w-6 h-6">
              <Sparkles className="w-full h-full text-yellow-400 opacity-75 animate-pulse" />
            </div>
          </h1>
          <p className="text-lg text-slate-600 mb-8">
            Get weekly insights on cloud computing, web development, and tech career growth
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="bg-white p-8 rounded-xl shadow-lg"
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 outline-none"
                  required
                />
                <Mail className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 rounded-lg font-medium hover:from-blue-600 hover:to-blue-700 transition-all duration-200 disabled:opacity-50"
              >
                {status === "loading" ? "Subscribing..." : "Subscribe Now"}
              </button>
            </form>

            {status === "success" && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-4 text-green-600"
              >
                Thanks for subscribing! Check your email to confirm.
              </motion.p>
            )}

            {status === "error" && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-4 text-red-600"
              >
                Oops! Something went wrong. Please try again.
              </motion.p>
            )}

            <div className="mt-6 text-sm text-gray-500">
              <p>By subscribing, you agree to receive weekly emails with:</p>
              <ul className="mt-2 space-y-1 list-disc list-inside">
                <li>Latest tech tutorials and guides</li>
                <li>Cloud computing insights</li>
                <li>Career development tips</li>
                <li>Exclusive resources and tools</li>
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
