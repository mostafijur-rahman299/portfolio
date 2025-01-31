"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Activity, Menu, ChevronDown } from "lucide-react"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const resourceTypes = [
    { icon: "📝", name: "Articles", href: "/articles" },
    { icon: "📚", name: "Book Notes", href: "/book-notes" },
    { icon: "🎥", name: "Videos", href: "/videos" },
    { icon: "🎙️", name: "Podcast", href: "/podcast" },
    { icon: "📧", name: "Newsletter", href: "/newsletter" },
  ]

  const topics = [
    { icon: "⚡", name: "Productivity", href: "/topic/productivity" },
    { icon: "📹", name: "YouTube", href: "/topic/youtube" },
    { icon: "📚", name: "Studying", href: "/topic/studying" },
    { icon: "💼", name: "Online Business", href: "/topic/business" },
    { icon: "🛠️", name: "Tools & Tech", href: "/topic/tools" },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Activity className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-semibold">Ali Abdaal</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link href="/book" legacyBehavior passHref>
                    <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50">
                      My Book
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>Free Resources</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-6 w-[600px] grid-cols-2">
                      <div>
                        <h4 className="text-sm font-medium leading-none mb-3 text-gray-500">Browse by type:</h4>
                        <div className="grid gap-2">
                          {resourceTypes.map((resource) => (
                            <Link
                              key={resource.name}
                              href={resource.href}
                              className="group flex items-center space-x-2 rounded-md p-2 hover:bg-gray-100"
                            >
                              <span className="text-xl">{resource.icon}</span>
                              <span className="text-sm font-medium text-gray-900 group-hover:text-blue-600">
                                {resource.name}
                              </span>
                            </Link>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium leading-none mb-3 text-gray-500">Browse by topic:</h4>
                        <div className="grid gap-2">
                          {topics.map((topic) => (
                            <Link
                              key={topic.name}
                              href={topic.href}
                              className="group flex items-center space-x-2 rounded-md p-2 hover:bg-gray-100"
                            >
                              <span className="text-xl">{topic.icon}</span>
                              <span className="text-sm font-medium text-gray-900 group-hover:text-blue-600">
                                {topic.name}
                              </span>
                            </Link>
                          ))}
                        </div>
                        <Link
                          href="/categories"
                          className="inline-flex items-center space-x-1 text-sm font-medium text-gray-500 hover:text-gray-900 mt-4"
                        >
                          <span>all categories</span>
                          <ChevronDown className="h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/academy" legacyBehavior passHref>
                    <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50">
                      YouTube Academy
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/lab" legacyBehavior passHref>
                    <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50">
                      Productivity Lab
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Button className="bg-[#ff7f5d] hover:bg-[#ff6b4a]">Join 260k+ Subscribers</Button>
          </div>

          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="grid gap-4 py-4">
                  <Link href="/book" className="text-lg font-medium">
                    My Book
                  </Link>
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium text-gray-500">Resources</h4>
                    {resourceTypes.map((resource) => (
                      <Link key={resource.name} href={resource.href} className="block px-2 py-1 text-sm">
                        {resource.icon} {resource.name}
                      </Link>
                    ))}
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium text-gray-500">Topics</h4>
                    {topics.map((topic) => (
                      <Link key={topic.name} href={topic.href} className="block px-2 py-1 text-sm">
                        {topic.icon} {topic.name}
                      </Link>
                    ))}
                  </div>
                  <Link href="/academy" className="text-lg font-medium">
                    YouTube Academy
                  </Link>
                  <Link href="/lab" className="text-lg font-medium">
                    Productivity Lab
                  </Link>
                  <Button className="bg-[#ff7f5d] hover:bg-[#ff6b4a] w-full">Join 260k+ Subscribers</Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}

