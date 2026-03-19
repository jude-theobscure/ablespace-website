'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { staggerContainer, fadeInUp, EASE_OUT_EXPO } from '@/lib/motion'

const floatingIcons: {
  src: string
  alt: string
  pos: string
  delay: number
  duration: number
  size: number
}[] = [
  {
    src: '/hero-illustration/icon-ai.svg',
    alt: 'AI-powered',
    pos: 'top-[6%] left-[42%]',
    delay: 0,
    duration: 4.5,
    size: 52,
  },
  {
    src: '/hero-illustration/icon-goal.svg',
    alt: 'Goal tracking',
    pos: 'top-[14%] right-[14%]',
    delay: 0.6,
    duration: 5.2,
    size: 48,
  },
  {
    src: '/hero-illustration/icon-worksheets.svg',
    alt: 'Worksheets',
    pos: 'top-[42%] right-[4%]',
    delay: 1.2,
    duration: 4.8,
    size: 46,
  },
  {
    src: '/hero-illustration/icon-calendar.svg',
    alt: 'Calendar',
    pos: 'bottom-[22%] right-[16%]',
    delay: 1.8,
    duration: 5.6,
    size: 44,
  },
  {
    src: '/hero-illustration/icon-services.svg',
    alt: 'Services',
    pos: 'top-[42%] left-[4%]',
    delay: 0.9,
    duration: 5.0,
    size: 46,
  },
  {
    src: '/hero-illustration/icon-collaboration.svg',
    alt: 'Collaboration',
    pos: 'top-[14%] left-[14%]',
    delay: 1.5,
    duration: 4.2,
    size: 48,
  },
]

const securityBadges: { src: string; alt: string }[] = [
  { src: '/secure-icons/badge-hipaa.png', alt: 'HIPAA Compliant' },
  { src: '/secure-icons/badge-ferpa.png', alt: 'FERPA Compliant' },
  { src: '/secure-icons/badge-iso.png', alt: 'ISO 27001' },
]

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#F8FAFC] pt-24 pb-16">
      {/* Subtle background dot pattern */}
      <div className="absolute inset-0 dot-pattern opacity-25 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* ── LEFT: Text content ── */}
          <motion.div
            variants={staggerContainer(0.12, 0.05)}
            initial="hidden"
            animate="visible"
            className="flex-1 flex flex-col gap-6 text-center lg:text-left max-w-xl mx-auto lg:mx-0"
          >
            {/* Headline */}
            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl lg:text-[56px] font-bold tracking-tight leading-[1.08] text-gray-800"
            >
              Track IEP Goals.
              <br />
              <span className="text-primary">Without the Chaos.</span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              variants={fadeInUp}
              className="text-lg text-gray-500 leading-relaxed"
            >
              Track goals, services, and accommodations — all in one place,
              powered by AI.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row items-center lg:items-start gap-3"
            >
              <motion.a
                href="#"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-primary text-white font-semibold text-base rounded-[10px] shadow-soft hover:bg-primary-700 hover:shadow-medium transition-all duration-200"
              >
                Start for free
                <ArrowRight size={16} />
              </motion.a>

              <motion.a
                href="#"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-gray-700 font-semibold text-base rounded-[10px] border border-gray-200 shadow-soft hover:border-gray-300 hover:shadow-medium transition-all duration-200"
              >
                Book a demo
              </motion.a>
            </motion.div>

            {/* Security badges */}
            <motion.div
              variants={fadeInUp}
              className="flex items-center justify-center lg:justify-start gap-4 pt-2"
            >
              {securityBadges.map((badge) => (
                <Image
                  key={badge.alt}
                  src={badge.src}
                  alt={badge.alt}
                  width={64}
                  height={32}
                  className="h-7 w-auto opacity-50 hover:opacity-70 transition-opacity duration-200"
                />
              ))}
            </motion.div>
          </motion.div>

          {/* ── RIGHT: Illustration ── */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: EASE_OUT_EXPO }}
            className="flex-1 relative flex items-center justify-center w-full max-w-[540px] mx-auto"
            style={{ minHeight: 480 }}
          >
            {/* Line flow — decorative background */}
            <Image
              src="/hero-illustration/line-flow.svg"
              alt=""
              aria-hidden
              width={500}
              height={420}
              className="absolute inset-0 w-full h-full object-contain opacity-[0.15] pointer-events-none select-none"
            />

            {/* Character left — completely static */}
            <Image
              src="/hero-illustration/character-left.svg"
              alt="Special educator"
              width={148}
              height={200}
              className="absolute bottom-0 left-0 z-10 select-none"
            />

            {/* Character right — completely static */}
            <Image
              src="/hero-illustration/character-right.svg"
              alt="Student"
              width={130}
              height={185}
              className="absolute bottom-0 right-0 z-10 select-none"
            />

            {/* Center logo — subtle pulse */}
            <motion.div
              className="relative z-20"
              animate={{ scale: [1, 1.025, 1] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Image
                src="/hero-illustration/center-logo.svg"
                alt="AbleSpace IEP platform"
                width={156}
                height={156}
                className="drop-shadow-[0_4px_16px_rgba(0,0,0,0.08)]"
              />
            </motion.div>

            {/* Floating feature icons */}
            {floatingIcons.map((icon) => (
              <motion.div
                key={icon.src}
                className={`absolute z-30 ${icon.pos} select-none`}
                animate={{ y: [0, -5, 0] }}
                transition={{
                  duration: icon.duration,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: icon.delay,
                }}
              >
                <Image
                  src={icon.src}
                  alt={icon.alt}
                  width={icon.size}
                  height={icon.size}
                  className="drop-shadow-[0_2px_8px_rgba(0,0,0,0.10)]"
                />
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  )
}
