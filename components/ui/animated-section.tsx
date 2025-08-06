'use client'

import { cn } from '@/lib/utils'
import { ReactNode, useEffect, useRef, useState } from 'react'

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  animation?: 'fade-in' | 'fade-in-up' | 'slide-in-left' | 'slide-in-right' | 'float'
  delay?: number
  duration?: number
  threshold?: number
}

export function AnimatedSection({
  children,
  className,
  animation = 'fade-in-up',
  delay = 0,
  duration = 600,
  threshold = 0.1
}: AnimatedSectionProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true)
          }, delay)
        }
      },
      {
        threshold,
        rootMargin: '50px'
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [delay, threshold])

  const animationClasses = {
    'fade-in': 'animate-fade-in',
    'fade-in-up': 'animate-fade-in-up',
    'slide-in-left': 'animate-slide-in-left',
    'slide-in-right': 'animate-slide-in-right',
    'float': 'animate-float'
  }

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all',
        isVisible ? 'opacity-100' : 'opacity-0',
        isVisible && animationClasses[animation],
        className
      )}
      style={{
        animationDuration: `${duration}ms`,
        animationFillMode: 'both'
      }}
    >
      {children}
    </div>
  )
}

export default AnimatedSection