import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import type React from "react" // Import React
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Mostafijur Rahman",
  description: "My Personal Website for sharing my thoughts and ideas",
  icons: {
    icon: "/favicon.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}

