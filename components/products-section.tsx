"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

export function ProductsSection() {
  const products = [
    {
      title: "Feel Good Productivity",
      image: "/placeholder.svg?height=200&width=200",
      description:
        "My New York Times Bestselling book about how to do more of what matters to you, while enjoying the journey along the way.",
      link: "/book",
    },
    {
      title: "Productivity Lab",
      image: "/placeholder.svg?height=200&width=200",
      description:
        "My community of ambitious entrepreneurs, creators and professionals. We help you double your productivity while having fun and making friends along the way.",
      link: "/lab",
    },
    {
      title: "YouTuber Academy",
      image: "/placeholder.svg?height=200&width=200",
      description: "My courses and programmes about how to grow a life-changing YouTube channel.",
      link: "/academy",
    },
  ]

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="aspect-square relative mb-6">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.title}
                      fill
                      className="object-cover rounded-xl"
                    />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{product.title}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <a
                    href={product.link}
                    className="text-blue-600 font-medium hover:text-blue-700 inline-flex items-center"
                  >
                    Learn more
                    <span className="ml-2">→</span>
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

