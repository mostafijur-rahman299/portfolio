'use client'

import { cn } from '@/lib/utils'
import { ReactNode } from 'react'
import AnimatedSection from './animated-section'

interface PageHeaderProps {
  title: string
  subtitle?: string
  description?: string
  children?: ReactNode
  className?: string
  variant?: 'default' | 'gradient' | 'minimal'
  centered?: boolean
  breadcrumbs?: Array<{ label: string; href?: string }>
}

export function PageHeader({
  title,
  subtitle,
  description,
  children,
  className,
  variant = 'default',
  centered = true,
  breadcrumbs
}: PageHeaderProps) {
  const containerClasses = cn(
    'relative py-16 sm:py-20 lg:py-24',
    centered ? 'text-center' : 'text-left',
    variant === 'gradient' && 'bg-gradient-to-br from-primary-50 to-accent-50',
    className
  )

  const titleClasses = cn(
    'text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight',
    variant === 'gradient' ? 'gradient-text' : 'text-neutral-900'
  )

  return (
    <div className={containerClasses}>
      <div className="container-custom">
        {breadcrumbs && (
          <AnimatedSection animation="fade-in" delay={0}>
            <nav className="flex mb-8" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1 md:space-x-3">
                {breadcrumbs.map((crumb, index) => (
                  <li key={index} className="inline-flex items-center">
                    {index > 0 && (
                      <svg
                        className="w-3 h-3 text-neutral-400 mx-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 6 10"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m1 9 4-4-4-4"
                        />
                      </svg>
                    )}
                    {crumb.href ? (
                      <a
                        href={crumb.href}
                        className="text-sm font-medium text-neutral-500 hover:text-primary-600 transition-colors"
                      >
                        {crumb.label}
                      </a>
                    ) : (
                      <span className="text-sm font-medium text-neutral-900">
                        {crumb.label}
                      </span>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
          </AnimatedSection>
        )}

        <AnimatedSection animation="fade-in-up" delay={100}>
          {subtitle && (
            <p className="text-primary-600 font-semibold text-lg mb-4">
              {subtitle}
            </p>
          )}
          
          <h1 className={titleClasses}>
            {title}
          </h1>
        </AnimatedSection>

        {description && (
          <AnimatedSection animation="fade-in-up" delay={200}>
            <p className="mt-6 text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              {description}
            </p>
          </AnimatedSection>
        )}

        {children && (
          <AnimatedSection animation="fade-in-up" delay={300}>
            <div className="mt-8">
              {children}
            </div>
          </AnimatedSection>
        )}
      </div>

      {/* Decorative elements */}
      {variant === 'gradient' && (
        <>
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" />
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '2s' }} />
          </div>
        </>
      )}
    </div>
  )
}

export default PageHeader