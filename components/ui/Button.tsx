'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import type { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
  onClick?: () => void
  href?: string
  type?: 'button' | 'submit'
  disabled?: boolean
  icon?: ReactNode
}

const variants = {
  primary:
    'bg-primary text-white shadow-medium hover:shadow-glow hover:bg-primary-700 active:bg-primary-800',
  secondary:
    'bg-white text-gray-800 border border-gray-200 shadow-soft hover:border-primary-300 hover:text-primary hover:shadow-medium',
  ghost:
    'text-gray-600 hover:text-gray-900 hover:bg-gray-50',
  outline:
    'border-2 border-primary text-primary hover:bg-primary hover:text-white',
}

const sizes = {
  sm: 'px-3.5 py-2 text-sm gap-1.5 rounded-xl',
  md: 'px-5 py-2.5 text-sm gap-2 rounded-2xl',
  lg: 'px-6 py-3 text-base gap-2 rounded-2xl',
  xl: 'px-8 py-4 text-base gap-2.5 rounded-2xl',
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className,
  onClick,
  type = 'button',
  disabled,
  icon,
}: ButtonProps) {
  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={cn(
        'inline-flex items-center justify-center font-semibold transition-all duration-200 cursor-pointer select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed',
        variants[variant],
        sizes[size],
        className
      )}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      {children}
    </motion.button>
  )
}
