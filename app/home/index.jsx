"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  Mail,
  Github,
  Linkedin,
  Twitter,
  Code,
} from "lucide-react";
import { Button } from "@/components/Button";
import Image from "next/image";
import Link from "next/link";

export function HomeComponent() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-lime-100 via-emerald-200 to-teal-300 text-foreground overflow-hidden flex items-center justify-center">
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
            transition={{ duration: 2, ease: "easeInOut" }}
          />
          <motion.path
            d="M0,100 C30,80 70,80 100,100 L100,0 L0,0 Z"
            fill="rgba(16, 185, 129, 0.05)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              delay: 0.5,
            }}
          />
        </svg>
      </div>

      <main className="relative z-10 container mx-auto px-4 py-8 sm:py-12 md:py-16 lg:py-20 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative inline-block mx-auto md:mx-0">
              <Image
                src="/placeholder.svg?height=500&width=500&text=Your+Photo"
                alt="Your Name"
                width={500}
                height={500}
                className="rounded-full border-8 border-emerald-500 shadow-2xl w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96"
              />
              <motion.div
                className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-white rounded-full p-3 sm:p-4 shadow-lg"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  delay: 0.5,
                }}
              >
                <Code className="h-8 w-8 sm:h-12 sm:w-12 text-emerald-500" />
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="w-full md:w-1/2 text-center md:text-left"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              delay: 0.2,
            }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-teal-600">
              Your Name
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-emerald-700 mb-4 sm:mb-6">
              Full-Stack Developer & Tech Innovator
            </p>
            <p className="text-base sm:text-lg md:text-xl text-emerald-600 mb-6 sm:mb-8">
              Crafting cutting-edge digital experiences and pushing the boundaries of technology. Passionate about creating innovative solutions that make a difference.
            </p>
            <div className="flex justify-center md:justify-start space-x-4 sm:space-x-6 mb-6 sm:mb-8">
              <SocialIcon Icon={Github} href="#" />
              <SocialIcon Icon={Linkedin} href="#" />
              <SocialIcon Icon={Twitter} href="#" />
              <SocialIcon Icon={Mail} href="#" />
            </div>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <Button size="lg" asChild className="w-full sm:w-auto">
                <Link href="/about">
                  Learn More
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="w-full sm:w-auto">
                <Link href="/contact">
                  Get In Touch
                  <Mail className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </main>

      <motion.div
        className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <ChevronDown className="h-6 w-6 sm:h-8 sm:w-8 text-emerald-700 animate-bounce" />
      </motion.div>
    </div>
  );
}

const SocialIcon = ({ Icon, href }) => (
  <motion.a
    href={href}
    className="text-emerald-700 hover:text-emerald-900 transition-colors duration-300"
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.2, rotate: 5 }}
    whileTap={{ scale: 0.9 }}
  >
    <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
  </motion.a>
);
