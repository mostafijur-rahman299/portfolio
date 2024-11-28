"use client"

import React from "react"
import { motion } from "framer-motion"
import {
  Card,
  CardContent
} from "@/components/Card"
import { Button } from "@/components/Button"
import { Input } from "@/components/Input"
import { Textarea } from "@/components/Textarea"
import { User, Mail, Send, Loader } from 'lucide-react'

export default function Contact() {
  const [name, setName] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [message, setMessage] = React.useState("")
  const [errors, setErrors] = React.useState({})
  const [successMessage, setSuccessMessage] = React.useState("")
  const [isLoading, setIsLoading] = React.useState(false)

  const validateFields = () => {
    const newErrors = {}
    if (!name.trim()) newErrors.name = "Name is required"
    if (!email.trim()) newErrors.email = "Email is required"
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "Email is invalid"
    if (!message.trim()) newErrors.message = "Message is required"
    return newErrors
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const formErrors = validateFields()
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors)
    } else {
      setErrors({})
      setIsLoading(true)
      await handleSendEmail()
      setIsLoading(false)
      setSuccessMessage("Message sent successfully!")
      setTimeout(() => {
        setSuccessMessage("")
      }, 5000)
    }
  }

  const handleInputChange = (field, value) => {
    if (errors[field]) {
      setErrors({ ...errors, [field]: undefined })
    }
    switch (field) {
      case "name":
        setName(value)
        break
      case "email":
        setEmail(value)
        break
      case "message":
        setMessage(value)
        break
      default:
        break
    }
  }

  const handleSendEmail = async () => {
    const res = await fetch("/api/sendEmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message }),
    })

    const data = await res.json()
    setName("")
    setEmail("")
    setMessage("")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 via-gray-600 to-black text-white overflow-hidden flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mt-6 text-center text-4xl font-extrabold text-white">
            Contact Me
          </h2>
          <p className="mt-2 text-center text-sm text-gray-300">
            Have a question or want to work together?
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="bg-white/10 backdrop-blur-lg border-gray-600">
            <CardContent className="pt-6">
              {successMessage && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="bg-green-500/20 border border-green-500 text-green-100 p-4 mb-4 rounded-md"
                  role="alert"
                >
                  <p className="font-bold">Success</p>
                  <p>{successMessage}</p>
                </motion.div>
              )}
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <label htmlFor="name" className="sr-only">
                    Name
                  </label>
                  <div className="relative">
                    <Input
                      id="name"
                      placeholder="Your Name"
                      value={name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      className={`pl-10 bg-white/5 border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-gray-400 ${
                        errors.name ? "border-red-500" : ""
                      }`}
                    />
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  </div>
                  {errors.name && (
                    <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <div className="relative">
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className={`pl-10 bg-white/5 border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-gray-400 ${
                        errors.email ? "border-red-500" : ""
                      }`}
                    />
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  </div>
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="sr-only">
                    Message
                  </label>
                  <div className="relative">
                    <Textarea
                      id="message"
                      placeholder="Your Message..."
                      value={message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      className={`bg-white/5 border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-gray-400 ${
                        errors.message ? "border-red-500" : ""
                      }`}
                      rows={5}
                    />
                  </div>
                  {errors.message && (
                    <p className="text-red-500 text-xs mt-1">{errors.message}</p>
                  )}
                </div>
                <Button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors duration-200"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <Loader className="w-5 h-5 animate-spin" />
                  ) : (
                    <Send className="w-5 h-5 mr-2" />
                  )}
                  <span>{isLoading ? "Sending..." : "Send Message"}</span>
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
