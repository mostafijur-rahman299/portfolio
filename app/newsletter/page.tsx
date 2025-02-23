"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Mail, Sparkles, Check, AlertCircle, Star, ArrowRight, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const benefits = [
  { title: "Weekly Insights", description: "Curated articles on the latest tech trends", icon: Zap },
  { title: "Exclusive Tutorials", description: "Step-by-step guides on cutting-edge technologies", icon: Sparkles },
  { title: "Career Growth Tips", description: "Expert advice to accelerate your tech career", icon: ArrowRight },
  { title: "Community Access", description: "Join our vibrant community of tech enthusiasts", icon: Mail },
]

const testimonials = [
  {
    name: "Alex Johnson",
    role: "Senior Developer",
    content: "This newsletter has been a game-changer for my career. The insights are invaluable!",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    name: "Sarah Lee",
    role: "Cloud Architect",
    content: "I've learned so much about cloud computing. It's my go-to resource now.",
    avatar: "/placeholder.svg?height=40&width=40",
  },
]

export default function NewsletterPage() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")

    // Simulate API call
    setTimeout(() => {
      if (Math.random() > 0.1) {
        setStatus("success")
        setEmail("")
      } else {
        setStatus("error")
      }
    }, 1500)
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl w-full"
      >
        <Card className="overflow-hidden border-blue-200 shadow-xl">
          <div className="bg-blue-400 p-8 text-white relative">
            
            <h1 className="text-4xl font-bold mb-2">Join My Weekly Newsletter</h1>
            <p className="text-xl text-white">You'll get a weekly email with the latest tech news, tips, and resources.</p>
          </div>

          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-semibold mb-4">Stay Ahead of the Curve</h2>
                <p className="text-gray-600 mb-6">
                  Join thousands of tech professionals who receive our weekly newsletter packed with insider knowledge,
                  career advice, and exclusive insights.
                </p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="relative">
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pr-10 border-blue-300 focus:border-blue-500 focus:ring-blue-500"
                      required
                    />
                    <Mail className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-blue-500" />
                  </div>

                  <AnimatePresence mode="wait">
                    {status === "idle" && (
                      <motion.div key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                        <Button
                          type="submit"
                          className="w-full bg-gradient-to-r from-blue-400 to-blue-500 text-white hover:from-blue-500 hover:to-blue-600"
                        >
                          Subscribe Now <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </motion.div>
                    )}

                    {status === "loading" && (
                      <motion.div key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                        <Button disabled className="w-full bg-blue-100 text-blue-700">
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                            className="mr-2"
                          >
                            <Mail className="w-5 h-5" />
                          </motion.div>
                          Subscribing...
                        </Button>
                      </motion.div>
                    )}

                    {status === "success" && (
                      <motion.div
                        key="success"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="flex items-center space-x-2 text-green-600"
                      >
                        <Check className="w-5 h-5" />
                        <span>Thanks for subscribing! Check your inbox.</span>
                      </motion.div>
                    )}

                    {status === "error" && (
                      <motion.div
                        key="error"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="flex items-center space-x-2 text-red-600"
                      >
                        <AlertCircle className="w-5 h-5" />
                        <span>Oops! Something went wrong. Please try again.</span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </form>
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-4">What You'll Get</h2>
                <div className="grid grid-cols-2 gap-4">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white p-4 rounded-lg shadow-md border border-blue-200"
                    >
                      <benefit.icon className="w-6 h-6 text-blue-500 mb-2" />
                      <h3 className="font-semibold text-blue-700 mb-2">{benefit.title}</h3>
                      <p className="text-sm text-gray-600">{benefit.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* <div className="mt-12">
              <h2 className="text-2xl font-semibold mb-6 text-center text-yellow-700">What Our Subscribers Say</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="bg-white p-6 rounded-lg shadow-md border border-yellow-200"
                  >
                    <div className="flex items-center mb-4">
                      <Avatar className="mr-4 border-2 border-yellow-400">
                        <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                        <AvatarFallback className="bg-yellow-100 text-yellow-700">
                          {testimonial.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold text-yellow-700">{testimonial.name}</p>
                        <p className="text-sm text-gray-600">{testimonial.role}</p>
                      </div>
                    </div>
                    <p className="text-gray-700">{testimonial.content}</p>
                    <div className="mt-2 flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div> */}
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}

