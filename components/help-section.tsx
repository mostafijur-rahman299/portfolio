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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          
          {/* YouTube Card */}
          <div className="group bg-gradient-to-br from-[#FAF9F7] to-[#FFF0F0] hover:from-[#FFF0F0] hover:to-[#FAF9F7] rounded-[24px] p-6 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#FF6B6B]/10 rounded-full -mr-12 -mt-12 transition-all duration-300 group-hover:scale-150"></div>
            <div className="relative z-10 h-full flex flex-col justify-between space-y-4">
              <div>
                <div className="w-16 h-16 mb-4 bg-[#FF6B6B] rounded-xl p-3 text-white transform transition-transform duration-300 group-hover:rotate-6">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                  </svg>
                </div>
                <h2 className="text-xl sm:text-2xl font-serif mb-3">Grow a YouTube Channel</h2>
                <p className="text-gray-600 text-sm">Learn how to start a YouTube channel based on my years of experience.</p>
              </div>
              <Link href="#" className="text-[#FF6B6B] font-medium hover:underline transition-all duration-200">Learn more</Link>
            </div>
          </div>

          {/* Productivity Card */}
          <div className="group bg-gradient-to-br from-[#FFD75E] to-[#FFE17E] hover:from-[#FFE17E] hover:to-[#FFD75E] rounded-[24px] p-6 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#FF9500]/10 rounded-full -mr-12 -mt-12 transition-all duration-300 group-hover:scale-150"></div>
            <div className="relative z-10 h-full flex flex-col justify-between space-y-4">
              <div>
                <div className="w-16 h-16 mb-4 bg-[#FF9500] rounded-xl p-3 text-white transform transition-transform duration-300 group-hover:rotate-6">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </div>
                <h2 className="text-xl sm:text-2xl font-serif mb-3">Be More Productive</h2>
                <p className="text-gray-900 text-sm">How to execute efficiently and make time for what matters.</p>
              </div>
              <Link href="#" className="text-[#FF9500] font-medium hover:underline transition-all duration-200">Learn more</Link>
            </div>
          </div>

          {/* Grades Card */}
          <div className="group bg-gradient-to-br from-[#FAF9F7] to-[#F5F0FF] hover:from-[#F5F0FF] hover:to-[#FAF9F7] rounded-[24px] p-6 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#9747FF]/10 rounded-full -mr-12 -mt-12 transition-all duration-300 group-hover:scale-150"></div>
            <div className="relative z-10 h-full flex flex-col justify-between space-y-4">
              <div>
                <div className="w-16 h-16 mb-4 bg-[#9747FF] rounded-xl p-3 text-white transform transition-transform duration-300 group-hover:rotate-6">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <h2 className="text-xl sm:text-2xl font-serif mb-3">Boost Your Grades</h2>
                <p className="text-gray-600 text-sm">How to study effectively with evidence-based techniques.</p>
              </div>
              <Link href="#" className="text-[#9747FF] font-medium hover:underline transition-all duration-200">Learn more</Link>
            </div>
          </div>

          {/* Business Card */}
          <div className="group bg-gradient-to-br from-[#FAF9F7] to-[#E6F7FF] hover:from-[#E6F7FF] hover:to-[#FAF9F7] rounded-[24px] p-6 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#40C1EA]/10 rounded-full -mr-12 -mt-12 transition-all duration-300 group-hover:scale-150"></div>
            <div className="relative z-10 h-full flex flex-col justify-between space-y-4">
              <div>
                <div className="w-16 h-16 mb-4 bg-[#40C1EA] rounded-xl p-3 text-white transform transition-transform duration-300 group-hover:rotate-6">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                  </svg>
                </div>
                <h2 className="text-xl sm:text-2xl font-serif mb-3">Build an Online Business</h2>
                <p className="text-gray-600 text-sm">How to build and scale your online business effectively.</p>
              </div>
              <Link href="#" className="text-[#40C1EA] font-medium hover:underline transition-all duration-200">Learn more</Link>
            </div>
          </div>

          {/* Marketing Card */}
          <div className="group bg-gradient-to-br from-[#FAF9F7] to-[#FFE6E6] hover:from-[#FFE6E6] hover:to-[#FAF9F7] rounded-[24px] p-6 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#FF4D4D]/10 rounded-full -mr-12 -mt-12 transition-all duration-300 group-hover:scale-150"></div>
            <div className="relative z-10 h-full flex flex-col justify-between space-y-4">
              <div>
                <div className="w-16 h-16 mb-4 bg-[#FF4D4D] rounded-xl p-3 text-white transform transition-transform duration-300 group-hover:rotate-6">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                  </svg>
                </div>
                <h2 className="text-xl sm:text-2xl font-serif mb-3">Digital Marketing</h2>
                <p className="text-gray-600 text-sm">Learn effective strategies for online marketing and growth.</p>
              </div>
              <Link href="#" className="text-[#FF4D4D] font-medium hover:underline transition-all duration-200">Learn more</Link>
            </div>
          </div>

          {/* Writing Card */}
          <div className="group bg-gradient-to-br from-[#FAF9F7] to-[#E6FFE6] hover:from-[#E6FFE6] hover:to-[#FAF9F7] rounded-[24px] p-6 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#4CAF50]/10 rounded-full -mr-12 -mt-12 transition-all duration-300 group-hover:scale-150"></div>
            <div className="relative z-10 h-full flex flex-col justify-between space-y-4">
              <div>
                <div className="w-16 h-16 mb-4 bg-[#4CAF50] rounded-xl p-3 text-white transform transition-transform duration-300 group-hover:rotate-6">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"></path>
                    <polygon points="18 2 22 6 12 16 8 16 8 12 18 2"></polygon>
                  </svg>
                </div>
                <h2 className="text-xl sm:text-2xl font-serif mb-3">Content Writing</h2>
                <p className="text-gray-600 text-sm">Master the art of writing engaging content that converts.</p>
              </div>
              <Link href="#" className="text-[#4CAF50] font-medium hover:underline transition-all duration-200">Learn more</Link>
            </div>
          </div>

          {/* Design Card */}
          <div className="group bg-gradient-to-br from-[#FAF9F7] to-[#E6E6FF] hover:from-[#E6E6FF] hover:to-[#FAF9F7] rounded-[24px] p-6 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#5C6BC0]/10 rounded-full -mr-12 -mt-12 transition-all duration-300 group-hover:scale-150"></div>
            <div className="relative z-10 h-full flex flex-col justify-between space-y-4">
              <div>
                <div className="w-16 h-16 mb-4 bg-[#5C6BC0] rounded-xl p-3 text-white transform transition-transform duration-300 group-hover:rotate-6">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
                    <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
                    <path d="M2 2l7.586 7.586"></path>
                    <circle cx="11" cy="11" r="2"></circle>
                  </svg>
                </div>
                <h2 className="text-xl sm:text-2xl font-serif mb-3">UI/UX Design</h2>
                <p className="text-gray-600 text-sm">Create beautiful and functional user interfaces.</p>
              </div>
              <Link href="#" className="text-[#5C6BC0] font-medium hover:underline transition-all duration-200">Learn more</Link>
            </div>
          </div>

          {/* Development Card */}
          <div className="group bg-gradient-to-br from-[#FAF9F7] to-[#FFE6FF] hover:from-[#FFE6FF] hover:to-[#FAF9F7] rounded-[24px] p-6 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#9C27B0]/10 rounded-full -mr-12 -mt-12 transition-all duration-300 group-hover:scale-150"></div>
            <div className="relative z-10 h-full flex flex-col justify-between space-y-4">
              <div>
                <div className="w-16 h-16 mb-4 bg-[#9C27B0] rounded-xl p-3 text-white transform transition-transform duration-300 group-hover:rotate-6">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="16 18 22 12 16 6"></polyline>
                    <polyline points="8 6 2 12 8 18"></polyline>
                  </svg>
                </div>
                <h2 className="text-xl sm:text-2xl font-serif mb-3">Web Development</h2>
                <p className="text-gray-600 text-sm">Learn to build modern, responsive websites.</p>
              </div>
              <Link href="#" className="text-[#9C27B0] font-medium hover:underline transition-all duration-200">Learn more</Link>
            </div>
          </div>

        </div>

        {/* <div className="text-center relative">
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
        </div> */}
      </div>
    </div>
  )
}
