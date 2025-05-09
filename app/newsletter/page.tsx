"use client"

import type React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Mail, Sparkles, Check, AlertCircle, ArrowRight, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"

const benefits = [
  { title: "Weekly Insights", description: "Curated articles on the latest tech trends", icon: Zap },
  { title: "Exclusive Tutorials", description: "Step-by-step guides on cutting-edge technologies", icon: Sparkles },
  { title: "Career Growth Tips", description: "Expert advice to accelerate your tech career", icon: ArrowRight },
  { title: "Community Access", description: "Join our vibrant community of tech enthusiasts", icon: Mail },
]

export default function NewsletterPage() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")
    setTimeout(() => {
      if (Math.random() > 0.1) {
        setStatus("success")
        setEmail("")
      } else {
        setStatus("error")
      }
    }, 1500)
  }

  const handleSubscribeSubstack = () => {
    window.open("https://mostafijur.substack.com/subscribe", "_blank")
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl w-full"
      >
        <Card className="overflow-hidden shadow-2xl border border-gray-200">
          <div className="bg-gradient-to-r from-blue-400 to-blue-600 p-8 text-white">
            <h1 className="text-4xl font-bold mb-2">Join My Weekly Newsletter</h1>
            <p className="text-lg opacity-90">Get curated tech news, tutorials, and resources straight to your inbox.</p>
          </div>

          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-10">
              {/* Left Column */}
              <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">Stay Ahead of the Curve</h2>
                <p className="text-gray-600 mb-6">
                  Join thousands of developers and tech professionals who receive our weekly newsletter packed with insider knowledge, career advice, and exclusive insights.
                </p>

                <AnimatePresence mode="wait">
                  {status === "idle" && (
                    <motion.div
                      key="idle"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <Button
                        type="button"
                        onClick={handleSubscribeSubstack}
                        className="w-full bg-gradient-to-r from-indigo-500 to-indigo-600 text-white hover:from-indigo-600 hover:to-indigo-700"
                      >
                        Subscribe Now <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </motion.div>
                  )}
                  {status === "loading" && (
                    <motion.div key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                      <Button disabled className="w-full bg-gray-300 text-gray-700">
                        Subscribing...
                      </Button>
                    </motion.div>
                  )}
                  {status === "success" && (
                    <motion.div key="success" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                      <div className="w-full bg-green-100 text-green-800 px-4 py-2 rounded-md text-center">
                        🎉 Subscribed successfully!
                      </div>
                    </motion.div>
                  )}
                  {status === "error" && (
                    <motion.div key="error" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                      <div className="w-full bg-red-100 text-red-800 px-4 py-2 rounded-md text-center">
                        ❌ Something went wrong. Please try again.
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Right Column */}
              <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">What You'll Get</h2>
                <div className="grid grid-cols-2 gap-4">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all"
                    >
                      <benefit.icon className="w-6 h-6 text-blue-500 mb-2" />
                      <h3 className="font-semibold text-gray-800 mb-1">{benefit.title}</h3>
                      <p className="text-sm text-gray-600">{benefit.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
