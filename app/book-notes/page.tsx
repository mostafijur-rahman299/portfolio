"use client"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import AutomicHabits from "@/public/book-notes/automic-habits/featured.jpg"

const books = [
  {
    title: "Automic Habits by James Clear",
    slug: "automic-habits",
    image: AutomicHabits,
    href: "#die-with-zero",
  }
]

export default function RecentBooks() {
  return (
    <div className="py-16 mx-auto bg-gradient-to-b from-[#FAF9F7] to-white px-6 flex flex-col items-center">
      <div className="mb-12 text-center max-w-2xl mx-auto">
        <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-6 text-[#111111] font-bold tracking-tight leading-tight bg-gradient-to-r from-[#FF6B6B] via-[#4ECDC4] to-[#45B7D1] bg-clip-text text-transparent animate-fade-in">
          Curated Book Notes & Insights
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-[#4b5563] leading-relaxed max-w-xl mx-auto animate-slide-up">
          Deep dive into carefully crafted summaries and key takeaways from transformative books that will expand your mind and change your perspective
        </p>
      </div>
      <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 max-w-7xl w-full">
        {books.map((book) => (
          <div
            key={book.title}
            className="group bg-gradient-to-br from-white to-[#f8f8f8] rounded-lg p-3 hover:shadow-[0_8px_16px_rgba(0,0,0,0.06)] transition-all duration-300 flex flex-col items-center border border-[#F0F0F0]"
          >
            <div className="mb-3 aspect-[4/5] relative w-[65%]">
              <Image
                src={book.image || "/placeholder.svg"}
                alt={book.title}
                fill
                className="object-contain"
                sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                priority
              />
            </div>
            <div className="space-y-2 text-center">
              <a href={book.href} className="block hover:opacity-90 transition-opacity">
                <h2 className="font-serif font-bold text-base sm:text-lg leading-tight tracking-tight text-black hover:text-[#333333] transition-colors">
                  {book.title}                  
                </h2>
              </a>
              <a href={book.href} className="inline-flex items-center justify-center text-xs font-bold text-black hover:text-[#333333] transition-colors">
                Read More
                <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-0.5 transition-transform duration-200" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
