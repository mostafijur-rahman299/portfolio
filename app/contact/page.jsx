"use client"

import React from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/Card"
import { Button } from "@/components/Button"
import { Input } from "@/components/Input"
import { Textarea } from "@/components/Textarea"
import { User, Mail, Send, Loader, Phone, Linkedin, Twitter } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: ""
  });
  const [errors, setErrors] = React.useState({});
  const [successMessage, setSuccessMessage] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  const validateFields = () => {
    const { name, email, message } = formData;
    const newErrors = {};
    if (!name.trim()) newErrors.name = "Name is required";
    if (!email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "Email is invalid";
    if (!message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formErrors = validateFields();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      setErrors({});
      setIsLoading(true);
      await handleSendEmail();
      setIsLoading(false);
      setSuccessMessage("Message sent successfully!");
      setTimeout(() => setSuccessMessage(""), 5000);
    }
  };

  const handleInputChange = (field, value) => {
    if (errors[field]) {
      setErrors({ ...errors, [field]: undefined });
    }
    setFormData({ ...formData, [field]: value });
  };

  const handleSendEmail = async () => {
    const response = await fetch("/api/sendEmail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 via-gray-600 to-black text-white overflow-hidden flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl w-full space-y-12 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full"
        >
          <h2 className="text-center mt-16 text-5xl font-extrabold text-white mb-6">
            Contact Me
          </h2>
          <p className="text-center text-md text-gray-300 mb-4">
            Have a question or want to work together?
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex gap-12 w-full"
        >
          <Card className="bg-white/10 backdrop-blur-lg border-gray-600 flex-1">
            <CardContent className="pt-8">
              {successMessage && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="bg-green-500/20 border border-green-500 text-green-100 p-6 mb-6 rounded-md"
                  role="alert"
                >
                  <p className="font-bold">Success</p>
                  <p>{successMessage}</p>
                </motion.div>
              )}
              <form className="space-y-8" onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <label htmlFor="name" className="sr-only">Name</label>
                  <div className="relative">
                    <Input
                      id="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      className={`pl-12 bg-white/5 border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-gray-400 ${errors.name ? "border-red-500" : ""}`}
                    />
                    <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
                  </div>
                  {errors.name && <p className="text-red-500 text-sm mt-2">{errors.name}</p>}
                </div>
                <div className="space-y-4">
                  <label htmlFor="email" className="sr-only">Email</label>
                  <div className="relative">
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className={`pl-12 bg-white/5 border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-gray-400 ${errors.email ? "border-red-500" : ""}`}
                    />
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
                  </div>
                  {errors.email && <p className="text-red-500 text-sm mt-2">{errors.email}</p>}
                </div>
                <div className="space-y-4">
                  <label htmlFor="message" className="sr-only">Message</label>
                  <div className="relative">
                    <Textarea
                      id="message"
                      placeholder="Your Message..."
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      className={`bg-white/5 border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-gray-400 ${errors.message ? "border-red-500" : ""}`}
                      rows={6}
                    />
                  </div>
                  {errors.message && <p className="text-red-500 text-sm mt-2">{errors.message}</p>}
                </div>
                <Button
                  type="submit"
                  className="w-full flex justify-center py-3 px-6 border border-transparent rounded-md shadow-sm text-md font-medium text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors duration-300"
                  disabled={isLoading}
                >
                  {isLoading ? <Loader className="w-6 h-6 animate-spin" /> : <Send className="w-6 h-6 mr-3" />}
                  <span>{isLoading ? "Sending..." : "Send Message"}</span>
                </Button>
              </form>
            </CardContent>
          </Card>
          <Card className="bg-white/20 backdrop-blur-xl border-gray-500 flex-1 shadow-lg">
            <CardContent className="p-10 text-center">
              <h3 className="text-2xl font-bold text-white mb-8">Get in Touch</h3>
              <div className="space-y-4">
                <p className="flex items-center justify-center">
                  <Mail className="text-gray-300 w-6 h-6 mr-2" />
                  <span className="text-gray-300">hello.mostafij@gmail.com</span>
                </p>
                <p className="flex items-center justify-center">
                  <Phone className="text-gray-300 w-6 h-6 mr-2" />
                  <span className="text-gray-300">+8801789929182</span>
                </p>
                <p className="flex items-center justify-center">
                  <Linkedin className="text-gray-300 w-6 h-6 mr-2" />
                  <span className="text-gray-300">linkedin.com/in/hello-mostafij/</span>
                </p>
                <p className="flex items-center justify-center">
                  <Twitter className="text-gray-300 w-6 h-6 mr-2" />
                  <span className="text-gray-300">@mostafijur_</span>
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
