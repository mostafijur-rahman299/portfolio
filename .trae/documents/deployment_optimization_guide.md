# Deployment & Optimization Guide

## 1. Overview

This guide provides comprehensive instructions for deploying the enhanced personal website and optimizing it for performance, SEO, and user experience. The deployment strategy focuses on Vercel as the primary platform with performance monitoring and optimization techniques.

## 2. Pre-Deployment Checklist

### 2.1 Code Quality & Testing

```bash
# Install dependencies
npm install

# Run type checking
npm run type-check

# Run linting
npm run lint

# Run tests (if available)
npm run test

# Build the application
npm run build

# Test the production build locally
npm run start
```

### 2.2 Performance Optimization

**File:** **`next.config.mjs`**

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable experimental features for better performance
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
  
  // Image optimization
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    domains: [
      'images.unsplash.com',
      'via.placeholder.com',
      // Add your image domains here
    ],
  },
  
  // Compression
  compress: true,
  
  // Headers for security and performance
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
      {
        source: '/api/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, stale-while-revalidate=86400',
          },
        ],
      },
      {
        source: '/_next/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
  
  // Redirects for SEO
  async redirects() {
    return [
      // Add any necessary redirects here
    ]
  },
  
  // Rewrites for clean URLs
  async rewrites() {
    return [
      // Add any URL rewrites here
    ]
  },
}

export default nextConfig
```

### 2.3 SEO Optimization

**File:** **`app/layout.tsx`**

```typescript
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { EnhancedNavbar } from '@/components/enhanced-navbar'
import { Footer } from '@/components/footer'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Mostafijur Rahman - Entrepreneur & Software Engineer',
    template: '%s | Mostafijur Rahman'
  },
  description: 'Entrepreneur and Software Engineer passionate about building products that solve real problems. 15+ products built, 10K+ users impacted, $500K+ revenue generated.',
  keywords: [
    'Mostafijur Rahman',
    'Entrepreneur',
    'Software Engineer',
    'Product Builder',
    'SaaS',
    'Startup',
    'Full Stack Developer',
    'React',
    'Next.js',
    'TypeScript',
    'Product Development',
    'Business Strategy'
  ],
  authors: [{ name: 'Mostafijur Rahman' }],
  creator: 'Mostafijur Rahman',
  publisher: 'Mostafijur Rahman',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://mostafijur.com'), // Replace with your domain
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mostafijur.com',
    title: 'Mostafijur Rahman - Entrepreneur & Software Engineer',
    description: 'Entrepreneur and Software Engineer passionate about building products that solve real problems. 15+ products built, 10K+ users impacted, $500K+ revenue generated.',
    siteName: 'Mostafijur Rahman',
    images: [
      {
        url: '/og-image.jpg', // Create this image
        width: 1200,
        height: 630,
        alt: 'Mostafijur Rahman - Entrepreneur & Software Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mostafijur Rahman - Entrepreneur & Software Engineer',
    description: 'Entrepreneur and Software Engineer passionate about building products that solve real problems.',
    creator: '@mostafijur_', // Replace with your Twitter handle
    images: ['/og-image.jpg'],
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
  verification: {
    google: 'your-google-verification-code', // Add your Google Search Console verification
    // yandex: 'your-yandex-verification-code',
    // yahoo: 'your-yahoo-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Preload critical fonts */}
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          as="style"
        />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Theme color */}
        <meta name="theme-color" content="#f59e0b" />
        <meta name="msapplication-TileColor" content="#f59e0b" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Mostafijur Rahman",
              "url": "https://mostafijur.com",
              "image": "https://mostafijur.com/profile-image.jpg",
              "sameAs": [
                "https://github.com/mostafijur-rahman299",
                "https://www.linkedin.com/in/mostafijurrahman-ln/",
                "https://x.com/mostafijur_",
                "https://www.youtube.com/@mostafijur-r-sajib"
              ],
              "jobTitle": "Entrepreneur & Software Engineer",
              "worksFor": {
                "@type": "Organization",
                "name": "Independent"
              },
              "knowsAbout": [
                "Software Engineering",
                "Entrepreneurship",
                "Product Development",
                "SaaS",
                "Full Stack Development",
                "React",
                "Next.js",
                "TypeScript"
              ]
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <EnhancedNavbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
```

### 2.4 Sitemap Generation

**File:** **`app/sitemap.ts`**

```typescript
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://mostafijur.com' // Replace with your domain
  
  // Static pages
  const staticPages = [
    '',
    '/products',
    '/projects',
    '/articles',
    '/business',
    '/tools',
    '/videos',
    '/newsletter',
    '/book-notes',
  ]
  
  // Dynamic pages (articles, projects, etc.)
  // You can fetch these from your CMS or database
  const dynamicPages: string[] = [
    // '/articles/example-article',
    // '/projects/example-project',
  ]
  
  const allPages = [...staticPages, ...dynamicPages]
  
  return allPages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: page === '' ? 'daily' : 'weekly',
    priority: page === '' ? 1 : 0.8,
  }))
}
```

### 2.5 Robots.txt

**File:** **`app/robots.ts`**

```typescript
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/'],
    },
    sitemap: 'https://mostafijur.com/sitemap.xml', // Replace with your domain
  }
}
```

## 3. Vercel Deployment

### 3.1 Environment Setup

**File:** **`.env.local`**

```bash
# Analytics
NEXT_PUBLIC_GOOGLE_ANALYTICS=G-XXXXXXXXXX
NEXT_PUBLIC_VERCEL_ANALYTICS=1

# Contact Form (if using)
EMAILJS_SERVICE_ID=your_service_id
EMAILJS_TEMPLATE_ID=your_template_id
EMAILJS_PUBLIC_KEY=your_public_key

# Database (if using)
DATABASE_URL=your_database_url

# Other services
NEXT_PUBLIC_SITE_URL=https://mostafijur.com
```

### 3.2 Vercel Configuration

**File:** **`vercel.json`**

```json
{
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "nextjs",
  "regions": ["iad1"],
  "functions": {
    "app/api/**/*.ts": {
      "maxDuration": 30
    }
  },
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        }
      ]
    }
  ],
  "redirects": [
    {
      "source": "/resume",
      "destination": "/resume/mostafijur.pdf",
      "permanent": false
    }
  ]
}
```

### 3.3 Deployment Steps

1. **Connect to Vercel**

   ```bash
   npm install -g vercel
   vercel login
   vercel
   ```

2. **Configure Environment Variables**

   * Go to Vercel Dashboard

   * Navigate to your project settings

   * Add environment variables from `.env.local`

3. **Set up Custom Domain**

   * Add your custom domain in Vercel dashboard

   * Configure DNS settings

   * Enable SSL certificate

4. **Deploy**

   ```bash
   vercel --prod
   ```

## 4. Performance Monitoring

### 4.1 Core Web Vitals Targets

* **Largest Contentful Paint (LCP)**: < 2.5s

* **First Input Delay (FID)**: < 100ms

* **Cumulative Layout Shift (CLS)**: < 0.1

* **First Contentful Paint (FCP)**: < 1.8s

* **Time to Interactive (TTI)**: < 3.8s

### 4.2 Performance Optimization Techniques

**Image Optimization**

```typescript
// Use Next.js Image component with optimization
import Image from 'next/image'

// Example usage
<Image
  src="/hero-image.jpg"
  alt="Hero image"
  width={800}
  height={600}
  priority // For above-the-fold images
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
  className="rounded-lg"
/>
```

**Code Splitting and Lazy Loading**

```typescript
// Lazy load components
import dynamic from 'next/dynamic'

const HeavyComponent = dynamic(() => import('@/components/heavy-component'), {
  loading: () => <div>Loading...</div>,
  ssr: false // If component doesn't need SSR
})

// Lazy load with Suspense
import { Suspense } from 'react'

function MyPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HeavyComponent />
    </Suspense>
  )
}
```

**Font Optimization**

```typescript
// In layout.tsx
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-inter'
})

// Use CSS variables for better performance
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
```

### 4.3 Bundle Analysis

```bash
# Install bundle analyzer
npm install --save-dev @next/bundle-analyzer

# Add to next.config.mjs
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer(nextConfig)

# Run analysis
ANALYZE=true npm run build
```

## 5. SEO & Analytics Setup

### 5.1 Google Analytics 4

**File:** **`lib/analytics.ts`**

```typescript
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS

// Track page views
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_location: url,
    })
  }
}

// Track events
export const event = ({ action, category, label, value }: {
  action: string
  category: string
  label?: string
  value?: number
}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}
```

### 5.2 Google Search Console

1. **Verify ownership** using HTML tag method
2. **Submit sitemap**: `https://yourdomain.com/sitemap.xml`
3. **Monitor performance** and fix any issues
4. **Set up URL inspection** for important pages

### 5.3 Schema Markup

**File:** **`components/structured-data.tsx`**

```typescript
interface StructuredDataProps {
  type: 'Person' | 'Article' | 'Product' | 'Organization'
  data: any
}

export function StructuredData({ type, data }: StructuredDataProps) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': type,
    ...data
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData)
      }}
    />
  )
}
```

## 6. Security & Best Practices

### 6.1 Security Headers

```typescript
// In next.config.mjs
const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on'
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload'
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block'
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  {
    key: 'Referrer-Policy',
    value: 'origin-when-cross-origin'
  }
]
```

### 6.2 Content Security Policy

```typescript
// Add to security headers
{
  key: 'Content-Security-Policy',
  value: `
    default-src 'self';
    script-src 'self' 'unsafe-eval' 'unsafe-inline' *.googletagmanager.com *.vercel-analytics.com;
    style-src 'self' 'unsafe-inline' *.googleapis.com;
    img-src 'self' blob: data: *.vercel.com *.unsplash.com;
    font-src 'self' *.googleapis.com *.gstatic.com;
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    upgrade-insecure-requests;
  `.replace(/\s{2,}/g, ' ').trim()
}
```

## 7. Monitoring & Maintenance

### 7.1 Error Tracking

```bash
# Install Sentry (optional)
npm install @sentry/nextjs

# Configure in sentry.client.config.js
import * as Sentry from '@sentry/nextjs'

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  tracesSampleRate: 1.0,
})
```

### 7.2 Uptime Monitoring

* Set up monitoring with services like:

  * Vercel Analytics (built-in)

  * UptimeRobot

  * Pingdom

  * StatusCake

### 7.3 Performance Monitoring

```typescript
// Custom performance tracking
export function trackWebVitals(metric: any) {
  switch (metric.name) {
    case 'FCP':
    case 'LCP':
    case 'CLS':
    case 'FID':
    case 'TTFB':
      // Send to analytics
      if (window.gtag) {
        window.gtag('event', metric.name, {
          event_category: 'Web Vitals',
          event_label: metric.id,
          value: Math.round(metric.value),
          non_interaction: true,
        })
      }
      break
    default:
      break
  }
}
```

## 8. Post-Deployment Checklist

### 8.1 Technical Verification

* [ ] SSL certificate is active

* [ ] All pages load correctly

* [ ] Mobile responsiveness works

* [ ] Forms function properly

* [ ] Analytics tracking is working

* [ ] Search console is set up

* [ ] Sitemap is accessible

* [ ] 404 pages work correctly

### 8.2 Performance Testing

* [ ] Google PageSpeed Insights score > 90

* [ ] GTmetrix performance grade A

* [ ] WebPageTest results are satisfactory

* [ ] Core Web Vitals are in green

* [ ] Lighthouse audit passes

### 8.3 SEO Verification

* [ ] Meta tags are correct

* [ ] Open Graph tags work

* [ ] Twitter cards display properly

* [ ] Structured data is valid

* [ ] Internal linking is optimized

* [ ] Image alt tags are present

### 8.4 Accessibility Testing

* [ ] WAVE tool shows no errors

* [ ] Keyboard navigation works

* [ ] Screen reader compatibility

* [ ] Color contrast meets WCAG standards

* [ ] Focus indicators are visible

## 9. Maintenance Schedule

### Weekly

* Monitor Core Web Vitals

* Check for broken links

* Review analytics data

* Update content as needed

### Monthly

* Update dependencies

* Review performance metrics

* Check security headers

* Backup important data

### Quarterly

* Comprehensive SEO audit

* Performance

