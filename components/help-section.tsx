import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function HelpSection() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <div className="space-y-16">
        <h1 className="text-6xl sm:text-7xl md:text-[80px] leading-[1.1] tracking-tight max-w-md font-serif">
          How Can{" "}
          <span className="relative inline-block">
            I Help You
            <span className="absolute -bottom-2 left-0 h-3 w-full bg-[#40C1EA]/40 -rotate-1 rounded-full" />
          </span>
          <span className="text-[#40C1EA]">?</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          
          {/* YouTube Card */}
          <div className="group bg-gradient-to-br from-[#FAF9F7] to-[#FFF0F0] hover:from-[#FFF0F0] hover:to-[#FAF9F7] rounded-[32px] p-8 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF6B6B]/10 rounded-full -mr-16 -mt-16 transition-all duration-300 group-hover:scale-150"></div>
            <div className="relative z-10 h-full flex flex-col justify-between space-y-6">
              <div>
                <div className="w-20 h-20 mb-6 bg-[#FF6B6B] rounded-2xl p-4 text-white transform transition-transform duration-300 group-hover:rotate-6">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                  </svg>
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-[32px] font-serif mb-4">Grow a YouTube Channel</h2>
                <p className="text-gray-600 text-base sm:text-lg">
                  Learn how to start a YouTube channel based on my years of experience.
                </p>
              </div>
              <Link href="#" className="text-[#FF6B6B] font-medium hover:underline transition-all duration-200">
                Learn more
              </Link>
            </div>
          </div>

          {/* Productivity Card */}
          <div className="group bg-gradient-to-br from-[#FFD75E] to-[#FFE17E] hover:from-[#FFE17E] hover:to-[#FFD75E] rounded-[32px] p-8 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 md:mt-24 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF9500]/10 rounded-full -mr-16 -mt-16 transition-all duration-300 group-hover:scale-150"></div>
            <div className="relative z-10 h-full flex flex-col justify-between space-y-6">
              <div>
                <div className="w-20 h-20 mb-6 bg-[#FF9500] rounded-2xl p-4 text-white transform transition-transform duration-300 group-hover:rotate-6">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-[32px] font-serif mb-4">Be More Productive</h2>
                <p className="text-gray-900 text-base sm:text-lg">
                  How to execute efficiently, make time for what matters and have fun along the way.
                </p>
              </div>
              <Link href="#" className="text-[#FF9500] font-medium hover:underline transition-all duration-200">
                Learn more
              </Link>
            </div>
          </div>

          {/* Grades Card */}
          <div className="group bg-gradient-to-br from-[#FAF9F7] to-[#F5F0FF] hover:from-[#F5F0FF] hover:to-[#FAF9F7] rounded-[32px] p-8 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#9747FF]/10 rounded-full -mr-16 -mt-16 transition-all duration-300 group-hover:scale-150"></div>
            <div className="relative z-10 h-full flex flex-col justify-between space-y-6">
              <div>
                <div className="w-20 h-20 mb-6 bg-[#9747FF] rounded-2xl p-4 text-white transform transition-transform duration-300 group-hover:rotate-6">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-[32px] font-serif mb-4">Boost Your Grades</h2>
                <p className="text-gray-600 text-base sm:text-lg">
                  How to study effectively for exams, with the best evidence-based techniques.
                </p>
              </div>
              <Link href="#" className="text-[#9747FF] font-medium hover:underline transition-all duration-200">
                Learn more
              </Link>
            </div>
          </div>

          {/* Business Card */}
          <div className="group bg-gradient-to-br from-[#FAF9F7] to-[#E6F7FF] hover:from-[#E6F7FF] hover:to-[#FAF9F7] rounded-[32px] p-8 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 md:mt-24 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#40C1EA]/10 rounded-full -mr-16 -mt-16 transition-all duration-300 group-hover:scale-150"></div>
            <div className="relative z-10 h-full flex flex-col justify-between space-y-6">
              <div>
                <div className="w-20 h-20 mb-6 bg-[#40C1EA] rounded-2xl p-4 text-white transform transition-transform duration-300 group-hover:rotate-6">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                  </svg>
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-[32px] font-serif mb-4">Build an Online Business</h2>
                <p className="text-gray-600 text-base sm:text-lg">
                  How to execute efficiently, make time for what matters and have fun along the way.
                </p>
              </div>
              <Link href="#" className="text-[#40C1EA] font-medium hover:underline transition-all duration-200">
                Learn more
              </Link>
            </div>
          </div>
        </div>

        <div className="text-center relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-64 h-64 bg-gradient-to-r from-[#FFD75E]/30 via-[#40C1EA]/30 to-[#FF6B6B]/30 rounded-full filter blur-3xl opacity-70"></div>
          </div>
          <div className="relative z-10">
            
            <Link
              href="#"
              className="group inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-[#FFD75E] to-[#FFA500] rounded-full transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1.5 hover:scale-105 overflow-hidden relative border border-yellow-400/30"
            >
              <span className="relative z-10">Explore More Services</span>
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-2" />
              <span className="absolute inset-0 bg-gradient-to-r from-[#FFD75E] to-[#FFA500] opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-[1px]"></span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

