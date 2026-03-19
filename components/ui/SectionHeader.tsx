'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { fadeInUp, staggerContainer, VIEWPORT } from '@/lib/motion'

interface SectionHeaderProps {
  label?: string
  heading: string
  subtext?: string
  align?: 'left' | 'center'
  headingClassName?: string
  dark?: boolean
}

export default function SectionHeader({
  label,
  heading,
  subtext,
  align = 'center',
  headingClassName,
  dark = false,
}: SectionHeaderProps) {
  return (
    <motion.div
      variants={staggerContainer(0.12)}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      className={cn(
        'flex flex-col gap-4',
        align === 'center' && 'items-center text-center'
      )}
    >
      {label && (
        <motion.span
          variants={fadeInUp}
          className={cn(
            'inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wide uppercase border w-fit',
            dark
              ? 'bg-white/10 text-white/80 border-white/20'
              : 'bg-primary-50 text-primary-600 border-primary-100'
          )}
        >
          {label}
        </motion.span>
      )}

      <motion.h2
        variants={fadeInUp}
        className={cn(
          'text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1]',
          dark ? 'text-white' : 'text-gray-900',
          headingClassName
        )}
        dangerouslySetInnerHTML={{ __html: heading }}
      />

      {subtext && (
        <motion.p
          variants={fadeInUp}
          className={cn(
            'text-lg leading-relaxed max-w-2xl',
            dark ? 'text-white/70' : 'text-gray-500',
            align === 'center' && 'mx-auto'
          )}
        >
          {subtext}
        </motion.p>
      )}
    </motion.div>
  )
}
