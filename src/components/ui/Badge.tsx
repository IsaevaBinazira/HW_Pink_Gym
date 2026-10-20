import type { HTMLAttributes } from 'react'

export type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  variant?: 'success' | 'warning' | 'error' | 'neutral'
  size?: 'sm' | 'md' | 'lg'
}

export function Badge({
  children,
  variant = 'neutral',
  size = 'md',
  className = '',
  ...props
}: BadgeProps) {
  const variants = {
    success: 'bg-green-100 text-green-700',
    warning: 'bg-yellow-100 text-yellow-700',
    error: 'bg-red-100 text-red-700',
    neutral: 'bg-gray-100 text-gray-700',
  }

  const sizes = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-3 py-1 text-sm',
    lg: 'px-4 py-1.5 text-base',
  }

  return (
    <span
      className={`inline-flex rounded-full font-medium ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </span>
  )
}
