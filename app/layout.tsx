import type { Metadata, Viewport } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import type React from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

// Optimized font loading with display swap for better performance
const inter = Inter({ 
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter"
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair"
})

// Enhanced viewport configuration
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fbbf24' },
    { media: '(prefers-color-scheme: dark)', color: '#f59e0b' }
  ]
}

// Comprehensive metadata for SEO optimization
export const metadata: Metadata = {
  title: {
    default: "Mostafijur Rahman - Full Stack Developer & Tech Enthusiast",
    template: "%s | Mostafijur Rahman"
  },
  description: "Full Stack Developer specializing in React, Next.js, Django, and cloud technologies. Sharing insights on web development, programming, and technology trends.",
  keywords: [
    "Mostafijur Rahman",
    "Full Stack Developer",
    "React Developer",
    "Next.js",
    "Django",
    "Web Development",
    "Programming",
    "Technology Blog",
    "Software Engineer",
    "Cloud Computing"
  ],
  authors: [{ name: "Mostafijur Rahman" }],
  creator: "Mostafijur Rahman",
  publisher: "Mostafijur Rahman",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://mostafijur.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mostafijur.com',
    title: 'Mostafijur Rahman - Full Stack Developer & Tech Enthusiast',
    description: 'Full Stack Developer specializing in React, Next.js, Django, and cloud technologies. Sharing insights on web development, programming, and technology trends.',
    siteName: 'Mostafijur Rahman',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Mostafijur Rahman - Full Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mostafijur Rahman - Full Stack Developer & Tech Enthusiast',
    description: 'Full Stack Developer specializing in React, Next.js, Django, and cloud technologies.',
    images: ['/og-image.jpg'],
    creator: '@mostafijur',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#f59e0b' },
    ],
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Mostafijur Rahman",
              "jobTitle": "Full Stack Developer",
              "description": "Full Stack Developer specializing in React, Next.js, Django, and cloud technologies.",
              "url": "https://mostafijur.com",
              "sameAs": [
                "https://github.com/mostafijur",
                "https://linkedin.com/in/mostafijur",
                "https://twitter.com/mostafijur"
              ],
              "knowsAbout": [
                "React",
                "Next.js",
                "Django",
                "JavaScript",
                "TypeScript",
                "Python",
                "Web Development",
                "Cloud Computing"
              ]
            })
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        {/* Skip to main content for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary-600 text-white px-4 py-2 rounded-md z-50"
        >
          Skip to main content
        </a>
        
        <Navbar />
        <main id="main-content">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

