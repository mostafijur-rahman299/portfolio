'use client'

import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

interface PremiumCardProps {
  children: ReactNode
  className?: string
  variant?: 'default' | 'glass' | 'gradient' | 'premium'
  hover?: boolean
  glow?: boolean
  size?: 'sm' | 'md' | 'lg'
}

export function PremiumCard({
  children,
  className,
  variant = 'default',
  hover = true,
  glow = false,
  size = 'md'
}: PremiumCardProps) {
  const baseClasses = 'rounded-xl smooth-hover'
  
  const sizeClasses = {
    sm: 'padding-xs',
    md: 'padding-card',
    lg: 'padding-section'
  }
  
  const variantClasses = {
    default: 'minimal-card',
    glass: 'premium-minimal',
    gradient: 'bg-gradient-primary text-white shadow-lg',
    premium: 'card-primary'
  }
  
  const hoverClasses = hover ? 'lift-hover' : ''
  const glowClasses = glow ? 'glow-hover' : ''
  
  return (
    <div
      className={cn(
        baseClasses,
        sizeClasses[size],
        variantClasses[variant],
        hoverClasses,
        glowClasses,
        className
      )}
    >
      {children}
    </div>
  )
}

export default PremiumCard