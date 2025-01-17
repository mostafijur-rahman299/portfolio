"use client"

import React, { useRef, useEffect } from "react"
import { Button } from "@/components/Button"
import { Mail, Send, Loader, Phone, MapPin } from 'lucide-react'
import { Input } from "@/components/Input";
import { Textarea } from "@/components/Textarea";
import {
  motion,
  useAnimation,
  useInView,
} from "framer-motion";

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const controls = useAnimation();

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


  useEffect(() => {
      if (isInView) {
          controls.start("visible");
      }
  }, [isInView, controls]);

  return (
      <section
          ref={ref}
          className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-900 to-purple-800"
          id="contact"
      >
          <motion.div
              initial="hidden"
              animate={controls}
              variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.5, staggerChildren: 0.1 },
                  },
              }}
              className="max-w-4xl mx-auto"
          >
              <h2 className="text-4xl font-bold text-center mb-2 bg-clip-text text-transparent bg-gradient-to-r from-pink-300 to-indigo-300">
                  Get in Touch
              </h2>
              <p className="text-xl font-semibold text-pink-300 text-center mb-12">
                Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <motion.div
                      variants={{
                          hidden: { opacity: 0, x: -50 },
                          visible: { opacity: 1, x: 0 },
                      }}
                  >
                      <h3 className="text-2xl font-semibold mb-4 text-pink-300">
                          Contact Information
                      </h3>
                      <div className="space-y-4">
                          <div className="flex items-center space-x-3">
                              <Mail className="w-6 h-6 text-indigo-300" />
                              <span>hello.mostafij@gmail.com</span>
                          </div>
                          <div className="flex items-center space-x-3">
                              <Phone className="w-6 h-6 text-indigo-300" />
                              <span>+88 (017) 89-929182</span>
                          </div>
                          <div className="flex items-center space-x-3">
                              <MapPin className="w-6 h-6 text-indigo-300" />
                              <span>B-Block, Mirpur-01, Dhaka, Bangladesh</span>
                          </div>
                      </div>
                  </motion.div>
                  <motion.form
                      variants={{
                          hidden: { opacity: 0, x: 50 },
                          visible: { opacity: 1, x: 0 },
                      }}
                      className="space-y-4"
                      onSubmit={handleSubmit}
                  >
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
                      
                      <Input
                          type="text"
                          placeholder="Your Name"
                          value={formData.name}
                          name="name"
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          className={`bg-white/10 border-white/20 text-white placeholder-white/5 ${errors?.name ? "border-red-500" : ""}`}
                      />
                      {errors.name && <p className="text-red-500 text-sm mt-2">{errors.name}</p>}
                      <Input
                          type="email"
                          placeholder="Your Email"
                          value={formData.email}
                          name="email"
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          className={`bg-white/10 border-white/20 text-white placeholder-white/50 ${errors?.email ? "border-red-500" : ""}`}
                      />
                      {errors.email && <p className="text-red-500 text-sm mt-2">{errors.email}</p>}
                      <Textarea
                          name="message"
                          value={formData.message}
                          onChange={(e) => handleInputChange("message", e.target.value)}
                          placeholder="Your Message"
                          className={`bg-white/10 border-white/20 text-white placeholder-white/50 ${errors?.name ? "border-red-500" : ""}`}
                          rows={4}
                      />
                      {errors.message && <p className="text-red-500 text-sm mt-2">{errors.message}</p>}
                      <Button
                          type="submit"
                          disabled={isLoading}
                          className="w-full bg-gradient-to-r from-pink-500 to-indigo-500 hover:from-pink-600 hover:to-indigo-600 transition-all duration-300"
                      >
                          {isLoading ? <Loader className="w-6 h-6 animate-spin" /> : <Send className="w-6 h-6 mr-3" />}
                          Send Message
                      </Button>
                  </motion.form>
              </div>
          </motion.div>
      </section>
  );
}
