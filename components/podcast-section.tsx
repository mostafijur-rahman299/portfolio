import Image from "next/image"
import { Card } from "@/components/ui/card"

export function PodcastSection() {
  const episodes = [
    {
      title: "How to Build a Personal Brand",
      guest: "With Special Guest",
      thumbnail: "/placeholder.svg?height=100&width=100",
    },
    {
      title: "Productivity Secrets Revealed",
      guest: "With Industry Expert",
      thumbnail: "/placeholder.svg?height=100&width=100",
    },
    {
      title: "Building a YouTube Empire",
      guest: "With Content Creator",
      thumbnail: "/placeholder.svg?height=100&width=100",
    },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Deep Dive</h2>
            <p className="text-gray-600 mb-6">
              I explore topics like the reality of entrepreneurship, building a thriving personal brand, and how to be
              happy and successful.
            </p>
            <div className="space-y-4">
              {episodes.map((episode, index) => (
                <Card key={index} className="flex items-center p-4">
                  <Image
                    src={episode.thumbnail || "/placeholder.svg"}
                    alt={episode.title}
                    width={100}
                    height={100}
                    className="rounded-lg"
                  />
                  <div className="ml-4">
                    <h3 className="font-semibold">{episode.title}</h3>
                    <p className="text-sm text-gray-600">{episode.guest}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/placeholder.svg?height=400&width=400"
              alt="Podcast Cover"
              width={400}
              height={400}
              className="rounded-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

