"use client"

import { useState } from "react"
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"

interface Testimonial {
  name: string
  content: string
  rating: number
}

const testimonials: Testimonial[] = [
  {
    name: "Sarah Johnson",
    content:
      "Mostafijur's expertise in AI and software architecture transformed our project. His innovative solutions and attention to detail exceeded our expectations.",
    rating: 5,
  },
  {
    name: "David Lee", 
    content:
      "Working with Mostafijur was a game-changer for our team. His deep knowledge of cloud architecture and machine learning helped us scale our operations efficiently.",
    rating: 5,
  },
  {
    name: "Emily Chen",
    content:
      "Mostafijur's ability to translate complex technical concepts into practical solutions is unparalleled. He's not just a developer, but a true problem solver.",
    rating: 5,
  },
  {
    name: "Michael Brown",
    content:
      "Mostafijur's contributions to our AI project were invaluable. His expertise and dedication significantly accelerated our development timeline.",
    rating: 5,
  },
  {
    name: "Lisa Wong",
    content:
      "Mostafijur's insights into cloud architecture helped us optimize our infrastructure, resulting in substantial cost savings and improved performance.",
    rating: 5,
  },
]

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-8 sm:py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-center text-slate-900 mb-6 sm:mb-8 font-semibold">
          What Clients Say
        </h2>

        <div className="relative max-w-sm sm:max-w-xl md:max-w-2xl mx-auto">
          <TestimonialCard testimonial={testimonials[currentIndex]} />

          {/* Navigation buttons - Hidden on mobile, shown on larger screens */}
          <div className="hidden sm:block">
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 sm:-translate-x-8 md:-translate-x-12 bg-white p-2 rounded-full border border-gray-200 hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-slate-700" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 sm:translate-x-8 md:translate-x-12 bg-white p-2 rounded-full border border-gray-200 hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-slate-700" />
            </button>
          </div>

          {/* Touch swipe indicators - Shown only on mobile */}
          <div className="flex sm:hidden justify-between mt-4 px-2">
            <button
              onClick={prevTestimonial}
              className="flex items-center text-sm text-slate-600 focus:outline-none"
            >
              <ChevronLeft className="w-4 h-4 mr-1" />
              Previous
            </button>
            <button
              onClick={nextTestimonial}
              className="flex items-center text-sm text-slate-600 focus:outline-none"
            >
              Next
              <ChevronRight className="w-4 h-4 ml-1" />
            </button>
          </div>
        </div>

        <div className="flex justify-center mt-4 sm:mt-6 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400 ${
                index === currentIndex ? "bg-slate-600" : "bg-slate-300 hover:bg-slate-400"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

interface TestimonialCardProps {
  testimonial: Testimonial
}

function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-lg p-4 sm:p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
      <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-slate-400 mb-3 sm:mb-4" />
      <p className="text-base sm:text-lg text-slate-700 mb-4 leading-relaxed">"{testimonial.content}"</p>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0">
        <div className="flex flex-col">
          <span className="font-medium text-slate-900 text-sm sm:text-base">{testimonial.name}</span>
          <div className="flex items-center gap-1 mt-1">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current" />
            ))}
          </div>
        </div>
        <div className="text-xs sm:text-sm text-slate-500 font-medium bg-gray-100 px-2 py-1 rounded self-start sm:self-auto">
          Verified Client
        </div>
      </div>
    </div>
  )
}
