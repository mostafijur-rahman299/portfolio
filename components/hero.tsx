import Image from "next/image"

export function Hero() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="absolute inset-0 bg-[#FFE169] rounded-full transform -rotate-6"></div>
          <Image
            src="https://sjc.microlink.io/dCEUHOcQu8_gU2Z19zaJOdwqja6tjMcFXvDO10y2KEmGXooCkhJdWWQMMEcu0oVhpTM2juEO4n_8gMBi1UzVcw.jpeg"
            alt="Profile Image"
            width={500}
            height={500}
            className="relative rounded-full"
            priority
          />
        </div>
        <div className="space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold">
            Hey Friends!
            <span className="block h-1 w-32 bg-blue-400 mt-2"></span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700">
            I'm a Doctor turned Entrepreneur, Content Creator, and the author of the New York Times bestseller,
            <span className="font-semibold"> Feel-Good Productivity</span>.
          </p>
        </div>
      </div>
    </div>
  )
}

