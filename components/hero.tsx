import Image from "next/image"
import ProfileImage from "@/public/Profile-Images/profile-pic7.png"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-yellow-50 to-white py-20 sm:py-32">
      <div className="absolute inset-0 bg-[url('/honeycomb.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative flex justify-center items-center order-1 lg:order-2">
            <div className="absolute -z-10 w-80 h-80 bg-yellow-200 rounded-full blur-3xl opacity-30"></div>
            <div className="absolute -z-10 w-72 h-72 bg-orange-200 rounded-full transform translate-x-10 -translate-y-10 blur-3xl opacity-30"></div>
            <div className="relative">
              <Image
                src={ProfileImage || "/placeholder.svg"}
                alt="Profile Image"
                width={400}
                height={400}
                className="rounded-3xl shadow-2xl"
                priority
              />
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-yellow-500/10 to-orange-500/10"></div>
            </div>
            <div className="absolute top-4 -left-4 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <div className="absolute bottom-4 -right-4 w-16 h-16 bg-orange-400 rounded-full flex items-center justify-center shadow-lg">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                />
              </svg>
            </div>
          </div>

          {/* Text Section */}
          <div className="space-y-8 order-2 lg:order-1">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Hi, Friends!
              <span className="block w-32 h-2 bg-gradient-to-r from-yellow-400 to-orange-400 mt-4 rounded-full"></span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
              I'm <span className="font-semibold">Mostafij</span>, a
              <span className="font-semibold text-yellow-600"> Software Engineer</span> passionate about
              <span className="font-semibold text-yellow-600"> AI</span>,
              <span className="font-semibold text-yellow-600"> Cloud Computing</span>, and
              <span className="font-semibold text-yellow-600"> SaaS Development</span>.
            </p>
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
              I'm building my own
              <span className="font-semibold text-yellow-600"> Web Development Agency</span> while sharing insights as a
              <span className="font-semibold text-yellow-600"> YouTuber</span> and
              <span className="font-semibold text-yellow-600"> Blogger</span>.
            </p>
            <div className="pt-4">
              <a
                href="/about"
                className="inline-flex items-center text-lg font-medium text-yellow-600 hover:text-orange-600 transition-colors duration-300"
              >
                Know more about me
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round" 
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

