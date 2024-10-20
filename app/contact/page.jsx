"use client"

import React, from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/Card"
import { Button } from "@/components/Button"
import { Input } from "@/components/Input"
import { Textarea } from "@/components/Textarea"
import {User, Mail, MessageSquare, Send } from "lucide-react"

export default function About() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-lime-100 via-emerald-200 to-teal-300 text-foreground">
        <div className="absolute inset-0 overflow-hidden">
                <svg
                    className="absolute w-full h-full"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                >
                    <motion.path
                        d="M0,0 C20,20 50,20 100,0 L100,100 L0,100 Z"
                        fill="rgba(16, 185, 129, 0.1)"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                    />
                    <motion.path
                        d="M0,100 C30,80 70,80 100,100 L100,0 L0,0 Z"
                        fill="rgba(16, 185, 129, 0.05)"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{
                            duration: 1,
                            ease: "easeInOut",
                            delay: 0.1,
                        }}
                    />
                </svg>
            </div>
            
      <div className="container mx-auto px-4 pt-32 pb-16 max-w-6xl">
        <motion.h1 
          id="about"
          className="text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-teal-600"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Contact
        </motion.h1>

        <motion.div
          id="contact"
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Card className="bg-white bg-opacity-70 backdrop-blur-lg overflow-hidden">
            <CardHeader>
              <CardTitle className="text-2xl text-emerald-700">Get in Touch</CardTitle>
              <CardDescription className="text-emerald-600">Have a question or want to work together?</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-emerald-700">Name</label>
                    <div className="relative">
                      <Input id="name" placeholder="Your Name" className="pl-10 bg-white bg-opacity-50 border-emerald-300 focus:border-emerald-500 focus:ring-emerald-500" />
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-emerald-500 w-5 h-5" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-emerald-700">Email</label>
                    <div className="relative">
                      <Input id="email" type="email" placeholder="your@email.com" className="pl-10 bg-white bg-opacity-50 border-emerald-300 focus:border-emerald-500 focus:ring-emerald-500" />
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-emerald-500 w-5 h-5" />
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-emerald-700">Message</label>
                  <div className="relative">
                    <Textarea id="message" placeholder="Your message here..." className="pl-10 pt-10 bg-white bg-opacity-50 border-emerald-300 focus:border-emerald-500 focus:ring-emerald-500" />
                    <MessageSquare className="absolute left-3 top-3 text-emerald-500 w-5 h-5" />
                  </div>
                </div>
                <Button type="submit" className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-semibold py-2 px-4 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
