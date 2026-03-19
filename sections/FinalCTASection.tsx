'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, CheckCircle2, Calendar } from 'lucide-react'
import { fadeInUp, staggerContainer, VIEWPORT } from '@/lib/motion'

const bullets = [
  '14-day free trial, no credit card required',
  'Free data migration from your current system',
  'Onboarding support included',
  'Cancel anytime',
]

export default function FinalCTASection() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden bg-gray-950">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-primary-900/30 to-violet-950/50 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-primary/12 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-violet-500/8 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-primary/8 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute inset-0 dot-pattern opacity-20 pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="flex flex-col items-center gap-8"
        >
          {/* Label */}
          <motion.span
            variants={fadeInUp}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/8 border border-white/15 text-white/80 text-sm font-medium"
          >
            <Sparkles size={14} className="text-primary-300" />
            Start your free trial today
          </motion.span>

          {/* Heading */}
          <motion.h2
            variants={fadeInUp}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]"
          >
            Ready to transform your
            <br />
            <span style={{
              background: 'linear-gradient(135deg, #a78bfa 0%, #c4b5fd 50%, #e9d5ff 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              special ed workflow?
            </span>
          </motion.h2>

          {/* Subtext */}
          <motion.p
            variants={fadeInUp}
            className="text-lg text-gray-400 leading-relaxed max-w-xl"
          >
            Join 20,000+ special education professionals who have reclaimed their time, improved their documentation, and made a bigger impact for students.
          </motion.p>

          {/* Bullets */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2"
          >
            {bullets.map((bullet) => (
              <span key={bullet} className="flex items-center gap-2 text-sm text-gray-400">
                <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />
                {bullet}
              </span>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <motion.a
              href="#"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2.5 px-8 py-4 bg-white text-gray-900 font-bold text-base rounded-2xl shadow-large hover:shadow-xl transition-all duration-200"
            >
              <Sparkles size={18} className="text-primary" />
              Start Free Trial
              <ArrowRight size={16} />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2.5 px-8 py-4 bg-white/8 text-white font-semibold text-base rounded-2xl border border-white/15 hover:bg-white/12 hover:border-white/25 transition-all duration-200"
            >
              <Calendar size={16} />
              Schedule a Demo
            </motion.a>
          </motion.div>

          {/* Social proof */}
          <motion.div
            variants={fadeInUp}
            className="flex items-center gap-4 pt-2"
          >
            {/* Avatar stack */}
            <div className="flex items-center -space-x-2">
              {['SK', 'MT', 'JL', 'RM', 'AB'].map((initials, i) => (
                <div
                  key={initials}
                  className="w-8 h-8 rounded-full border-2 border-gray-900 flex items-center justify-center text-xs font-bold text-white"
                  style={{ background: ['#6C47FF', '#10b981', '#0ea5e9', '#7c3aed', '#f59e0b'][i] }}
                >
                  {initials}
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-400">
              <span className="text-white font-semibold">20,000+</span> educators trust AbleSpace
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
