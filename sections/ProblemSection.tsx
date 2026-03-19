'use client'

import { motion } from 'framer-motion'
import { AlertTriangle, Clock, Users, Database, ArrowRight } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'
import { fadeInUp, staggerContainer, VIEWPORT } from '@/lib/motion'

const problems = [
  {
    icon: AlertTriangle,
    color: 'text-red-500',
    bg: 'bg-red-50',
    border: 'border-red-100',
    title: 'Manual Data Entry',
    before: 'Spending hours recording data in spreadsheets, binders, and sticky notes — only to lose track of progress.',
    after: 'Log data in seconds with smart forms, voice input, and one-tap trial recording from any device.',
    stat: '3+ hours saved weekly',
  },
  {
    icon: Clock,
    color: 'text-amber-500',
    bg: 'bg-amber-50',
    border: 'border-amber-100',
    title: 'Missed Deadlines',
    before: 'IEP annual reviews, evaluation deadlines, and progress reports fall through the cracks without a system.',
    after: 'Automated reminders, compliance calendars, and deadline tracking keep every team member on schedule.',
    stat: '100% deadline compliance',
  },
  {
    icon: Users,
    color: 'text-blue-500',
    bg: 'bg-blue-50',
    border: 'border-blue-100',
    title: 'Poor Collaboration',
    before: 'Therapists, teachers, and administrators working in silos — no shared visibility into student progress.',
    after: 'Real-time collaboration tools let every team member see the same data, add notes, and stay aligned.',
    stat: 'One source of truth',
  },
  {
    icon: Database,
    color: 'text-purple-500',
    bg: 'bg-purple-50',
    border: 'border-purple-100',
    title: 'Data Loss Risk',
    before: 'Critical student data locked in local drives, paper binders, and personal email — vulnerable to loss.',
    after: 'HIPAA-compliant cloud storage with automatic backups ensures student data is always safe and accessible.',
    stat: '99.99% uptime guarantee',
  },
]

export default function ProblemSection() {
  return (
    <section className="py-24 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="The Problem"
          heading="Special ed teams are drowning<br />in <span class='text-gradient'>paperwork</span>"
          subtext="The average special education teacher spends 40% of their time on administrative tasks instead of supporting students. AbleSpace changes that."
        />

        <motion.div
          variants={staggerContainer(0.1, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-5"
        >
          {problems.map((problem) => {
            const Icon = problem.icon
            return (
              <motion.div
                key={problem.title}
                variants={fadeInUp}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-white rounded-3xl border border-gray-100 shadow-card p-7 flex flex-col gap-5 group hover:shadow-medium transition-shadow duration-300"
              >
                {/* Header */}
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-2xl ${problem.bg} ${problem.border} border flex items-center justify-center shrink-0`}>
                    <Icon size={18} className={problem.color} />
                  </div>
                  <h3 className="text-base font-bold text-gray-900">{problem.title}</h3>
                </div>

                {/* Before / After */}
                <div className="flex flex-col gap-3">
                  <div className="p-4 rounded-2xl bg-red-50/60 border border-red-100/80">
                    <div className="flex items-center gap-1.5 mb-2">
                      <span className="w-4 h-4 rounded-full bg-red-100 flex items-center justify-center text-red-500 text-xs font-bold">✕</span>
                      <span className="text-xs font-semibold text-red-600 uppercase tracking-wide">Before</span>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">{problem.before}</p>
                  </div>

                  <div className="flex items-center justify-center">
                    <div className="flex items-center gap-1.5 text-xs text-gray-300">
                      <div className="w-8 h-px bg-gray-200" />
                      <ArrowRight size={12} className="text-gray-300" />
                      <div className="w-8 h-px bg-gray-200" />
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-100/80">
                    <div className="flex items-center gap-1.5 mb-2">
                      <span className="w-4 h-4 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 text-xs font-bold">✓</span>
                      <span className="text-xs font-semibold text-emerald-600 uppercase tracking-wide">With AbleSpace</span>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">{problem.after}</p>
                  </div>
                </div>

                {/* Stat */}
                <div className="mt-auto flex items-center gap-2">
                  <span className="text-xs font-bold text-primary-700 bg-primary-50 border border-primary-100 px-3 py-1.5 rounded-full">
                    → {problem.stat}
                  </span>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
