'use client'

import { cn } from '@/lib/utils'
import { ReactNode, ButtonHTMLAttributes } from 'react'
import { Loader2 } from 'lucide-react'

interface EnhancedButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'gradient'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  loading?: boolean
  icon?: ReactNode
  iconPosition?: 'left' | 'right'
  glow?: boolean
  className?: string
}

export function EnhancedButton({
  children,
  variant = 'primary',
  size = 'md',
  loading = false,
  icon,
  iconPosition = 'left',
  glow = false,
  className,
  disabled,
  ...props
}: EnhancedButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center rounded-lg font-medium smooth-hover focus-ring disabled:opacity-50 disabled:cursor-not-allowed'
  
  const sizeClasses = {
    sm: 'padding-xs text-caption gap-spacing-xs',
    md: 'padding-button text-body gap-spacing-sm',
    lg: 'padding-input text-body-large gap-spacing-sm',
    xl: 'px-8 py-4 text-heading-3 gap-spacing-md'
  }
  
  const variantClasses = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    outline: 'border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white scale-hover',
    ghost: 'btn-ghost',
    gradient: 'bg-gradient-primary text-white shadow-lg scale-hover'
  }
  
  const glowClasses = glow ? 'glow-hover' : ''
  
  const isDisabled = disabled || loading
  
  return (
    <button
      className={cn(
        baseClasses,
        sizeClasses[size],
        variantClasses[variant],
        glowClasses,
        className
      )}
      disabled={isDisabled}
      {...props}
    >
      {loading && (
        <Loader2 className="h-4 w-4 animate-spin" />
      )}
      
      {!loading && icon && iconPosition === 'left' && (
        <span className="flex-shrink-0">{icon}</span>
      )}
      
      <span>{children}</span>
      
      {!loading && icon && iconPosition === 'right' && (
        <span className="flex-shrink-0">{icon}</span>
      )}
    </button>
  )
}

export default EnhancedButton