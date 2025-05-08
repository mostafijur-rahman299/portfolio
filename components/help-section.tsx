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
          
          {/* API Development Card */}
          <div className="group bg-gradient-to-br from-[#FAF9F7] to-[#FFF0F0] hover:from-[#FFF0F0] hover:to-[#FAF9F7] rounded-[24px] p-6 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#FF6B6B]/10 rounded-full -mr-12 -mt-12 transition-all duration-300 group-hover:scale-150"></div>
            <div className="relative z-10 h-full flex flex-col justify-between space-y-4">
              <div>
                <div className="w-16 h-16 mb-4 bg-[#FF6B6B] rounded-xl p-3 text-white transform transition-transform duration-300 group-hover:rotate-6">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 18l6-6-6-6"></path>
                    <path d="M8 6l-6 6 6 6"></path>
                  </svg>
                </div>
                <h2 className="text-xl sm:text-2xl font-serif mb-3">API Development</h2>
                <p className="text-gray-600 text-sm">Custom API development with modern standards and best practices.</p>
              </div>
              {/* <Link href="#" className="text-[#FF6B6B] font-medium hover:underline transition-all duration-200">Learn more</Link> */}
            </div>
          </div>

          {/* Website Development Card */}
          <div className="group bg-gradient-to-br from-[#FFD75E] to-[#FFE17E] hover:from-[#FFE17E] hover:to-[#FFD75E] rounded-[24px] p-6 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#FF9500]/10 rounded-full -mr-12 -mt-12 transition-all duration-300 group-hover:scale-150"></div>
            <div className="relative z-10 h-full flex flex-col justify-between space-y-4">
              <div>
                <div className="w-16 h-16 mb-4 bg-[#FF9500] rounded-xl p-3 text-white transform transition-transform duration-300 group-hover:rotate-6">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                    <line x1="8" y1="21" x2="16" y2="21"></line>
                    <line x1="12" y1="17" x2="12" y2="21"></line>
                  </svg>
                </div>
                <h2 className="text-xl sm:text-2xl font-serif mb-3">Website Development</h2>
                <p className="text-gray-900 text-sm">Full-stack web development with modern frameworks and tools.</p>
              </div>
              {/* <Link href="#" className="text-[#FF9500] font-medium hover:underline transition-all duration-200">Learn more</Link> */}
            </div>
          </div>

          {/* Bug Fixing Card */}
          <div className="group bg-gradient-to-br from-[#FAF9F7] to-[#F5F0FF] hover:from-[#F5F0FF] hover:to-[#FAF9F7] rounded-[24px] p-6 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#9747FF]/10 rounded-full -mr-12 -mt-12 transition-all duration-300 group-hover:scale-150"></div>
            <div className="relative z-10 h-full flex flex-col justify-between space-y-4">
              <div>
                <div className="w-16 h-16 mb-4 bg-[#9747FF] rounded-xl p-3 text-white transform transition-transform duration-300 group-hover:rotate-6">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                  </svg>
                </div>
                <h2 className="text-xl sm:text-2xl font-serif mb-3">Bug Fixing</h2>
                <p className="text-gray-600 text-sm">Expert debugging and problem-solving for your applications.</p>
              </div>
              {/* <Link href="#" className="text-[#9747FF] font-medium hover:underline transition-all duration-200">Learn more</Link> */}
            </div>
          </div>

          {/* Technical Consultation Card */}
          <div className="group bg-gradient-to-br from-[#FAF9F7] to-[#E6F7FF] hover:from-[#E6F7FF] hover:to-[#FAF9F7] rounded-[24px] p-6 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#40C1EA]/10 rounded-full -mr-12 -mt-12 transition-all duration-300 group-hover:scale-150"></div>
            <div className="relative z-10 h-full flex flex-col justify-between space-y-4">
              <div>
                <div className="w-16 h-16 mb-4 bg-[#40C1EA] rounded-xl p-3 text-white transform transition-transform duration-300 group-hover:rotate-6">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                  </svg>
                </div>
                <h2 className="text-xl sm:text-2xl font-serif mb-3">Technical Consultation</h2>
                <p className="text-gray-600 text-sm">Expert advice on architecture, tech stack, and best practices.</p>
              </div>
              {/* <Link href="#" className="text-[#40C1EA] font-medium hover:underline transition-all duration-200">Learn more</Link> */}
            </div>
          </div>

          {/* API Design Card */}
          <div className="group bg-gradient-to-br from-[#FAF9F7] to-[#FFE6E6] hover:from-[#FFE6E6] hover:to-[#FAF9F7] rounded-[24px] p-6 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#FF4D4D]/10 rounded-full -mr-12 -mt-12 transition-all duration-300 group-hover:scale-150"></div>
            <div className="relative z-10 h-full flex flex-col justify-between space-y-4">
              <div>
                <div className="w-16 h-16 mb-4 bg-[#FF4D4D] rounded-xl p-3 text-white transform transition-transform duration-300 group-hover:rotate-6">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"></path>
                    <polygon points="18 2 22 6 12 16 8 16 8 12 18 2"></polygon>
                  </svg>
                </div>
                <h2 className="text-xl sm:text-2xl font-serif mb-3">API Design</h2>
                <p className="text-gray-600 text-sm">RESTful and GraphQL API design with scalability in mind.</p>
              </div>
              {/* <Link href="#" className="text-[#FF4D4D] font-medium hover:underline transition-all duration-200">Learn more</Link> */}
            </div>
          </div>

          {/* Performance Optimization Card */}
          <div className="group bg-gradient-to-br from-[#FAF9F7] to-[#E6FFE6] hover:from-[#E6FFE6] hover:to-[#FAF9F7] rounded-[24px] p-6 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#4CAF50]/10 rounded-full -mr-12 -mt-12 transition-all duration-300 group-hover:scale-150"></div>
            <div className="relative z-10 h-full flex flex-col justify-between space-y-4">
              <div>
                <div className="w-16 h-16 mb-4 bg-[#4CAF50] rounded-xl p-3 text-white transform transition-transform duration-300 group-hover:rotate-6">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
                  </svg>
                </div>
                <h2 className="text-xl sm:text-2xl font-serif mb-3">Performance Optimization</h2>
                <p className="text-gray-600 text-sm">Speed up your applications and improve user experience.</p>
              </div>
              {/* <Link href="#" className="text-[#4CAF50] font-medium hover:underline transition-all duration-200">Learn more</Link> */}
            </div>
          </div>

          {/* Database Design Card */}
          <div className="group bg-gradient-to-br from-[#FAF9F7] to-[#E6E6FF] hover:from-[#E6E6FF] hover:to-[#FAF9F7] rounded-[24px] p-6 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#5C6BC0]/10 rounded-full -mr-12 -mt-12 transition-all duration-300 group-hover:scale-150"></div>
            <div className="relative z-10 h-full flex flex-col justify-between space-y-4">
              <div>
                <div className="w-16 h-16 mb-4 bg-[#5C6BC0] rounded-xl p-3 text-white transform transition-transform duration-300 group-hover:rotate-6">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 5H3v14h18V5zM3 10h18M12 5v14"></path>
                  </svg>
                </div>
                <h2 className="text-xl sm:text-2xl font-serif mb-3">Database Design</h2>
                <p className="text-gray-600 text-sm">Efficient database architecture and optimization.</p>
              </div>
              {/* <Link href="#" className="text-[#5C6BC0] font-medium hover:underline transition-all duration-200">Learn more</Link> */}
            </div>
          </div>

          {/* Cloud Solutions Card */}
          <div className="group bg-gradient-to-br from-[#FAF9F7] to-[#FFE6FF] hover:from-[#FFE6FF] hover:to-[#FAF9F7] rounded-[24px] p-6 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#9C27B0]/10 rounded-full -mr-12 -mt-12 transition-all duration-300 group-hover:scale-150"></div>
            <div className="relative z-10 h-full flex flex-col justify-between space-y-4">
              <div>
                <div className="w-16 h-16 mb-4 bg-[#9C27B0] rounded-xl p-3 text-white transform transition-transform duration-300 group-hover:rotate-6">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"></path>
                    <path d="M8 19v.01"></path>
                    <path d="M8 13v.01"></path>
                    <path d="M16 13v.01"></path>
                    <path d="M12 15v.01"></path>
                    <path d="M12 19v.01"></path>
                    <path d="M16 17v.01"></path>
                  </svg>
                </div>
                <h2 className="text-xl sm:text-2xl font-serif mb-3">Cloud Solutions</h2>
                <p className="text-gray-600 text-sm">AWS, Azure, and GCP deployment and management.</p>
              </div>
              {/* <Link href="#" className="text-[#9C27B0] font-medium hover:underline transition-all duration-200">Learn more</Link> */}
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
