import { Youtube, Zap, Building2, GraduationCap } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function HelpSection() {
  const cards = [
    {
      title: "Grow a YouTube Channel",
      description: "Learn how to start a YouTube channel based on years of experience.",
      icon: Youtube,
    },
    {
      title: "Be More Productive",
      description: "Get practical productivity tips for living the way you want.",
      icon: Zap,
    },
    {
      title: "Build an Online Business",
      description: "Learn how to effectively create free and paid digital products.",
      icon: Building2,
    },
    {
      title: "Boost Your Grades",
      description: "How to study effectively for exams with the best evidence-based techniques.",
      icon: GraduationCap,
    },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl md:text-4xl font-bold mb-12">
        How Can
        <br />I Help You?
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <card.icon className="h-8 w-8 text-blue-400 mb-4" />
              <CardTitle>{card.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">{card.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

