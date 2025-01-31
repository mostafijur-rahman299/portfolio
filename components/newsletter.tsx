import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Send } from "lucide-react"

export function Newsletter() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Subscribe to
              <br />
              LifeNotes
              <Send className="inline-block ml-2 h-8 w-8 text-blue-400 -rotate-45" />
            </h2>
            <p className="text-gray-600 mb-4">
              Join a growing community of more than
              <br />
              <span className="font-semibold">260,000 friendly readers.</span>
            </p>
          </div>
          <div className="space-y-4">
            <p className="text-gray-600">
              I share actionable productivity tips, practical life advice, and high-quality insights from across the
              web, directly to your inbox.
            </p>
            <div className="flex gap-2">
              <Input type="email" placeholder="Your email" className="flex-1" />
              <Button className="bg-blue-400 hover:bg-blue-500">Subscribe</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

