"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function AboutSection() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <h2 className="text-5xl md:text-6xl font-bold leading-tight">
            Hi, I'm
            <br />
            Ali Abdaal
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "8rem" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-2 bg-blue-400 mt-6 rounded-full"
            />
          </h2>
          <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
            <p>
              I'm an ex-doctor turned YouTuber, Podcaster, entrepreneur and author. I've been creating YouTube videos
              for over 7 years and have a following of over 4 million over on my main channel.
            </p>
            <p>
              My YouTube journey started over 7 years ago when I was studying medicine at Cambridge University, I was
              creating videos to help people pass the entrance exams (This is when I started my first business too).
              Since then, the channel has grown to over 6 million subscribers.
            </p>
          </div>
          <Button variant="link" className="px-0 font-semibold text-lg group flex items-center gap-2">
            Read my full story
            <span className="group-hover:translate-x-2 transition-transform">→</span>
          </Button>
          <div className="flex flex-wrap gap-4 pt-6">
            {["Watch My Videos", "Read My Articles", "Read My Book"].map((text, index) => (
              <motion.div
                key={text}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Button className="bg-blue-400 hover:bg-blue-500 text-lg px-8 py-6 rounded-2xl">{text}</Button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-[#FFE169] rounded-[3rem] transform -rotate-6"></div>
          <div className="relative grid grid-cols-2 gap-6">
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  alt="Working at desk"
                  width={300}
                  height={300}
                  className="rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  alt="Speaking at event"
                  width={300}
                  height={300}
                  className="rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300"
                />
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12"
            >
              <Image
                src="/placeholder.svg?height=300&width=300"
                alt="Holding book"
                width={300}
                height={300}
                className="rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300"
              />
            </motion.div>
          </div>
          <div className="absolute inset-0 pointer-events-none">
            <svg
              className="absolute top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2"
              viewBox="0 0 400 400"
            >
              <motion.path
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                d="M200,50 C300,50 350,150 350,200 C350,250 300,350 200,350 C100,350 50,250 50,200 C50,150 100,50 200,50"
                fill="none"
                stroke="#FF7F5D"
                strokeWidth="2"
                strokeDasharray="5,5"
              />
            </svg>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

