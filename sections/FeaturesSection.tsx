'use client'

import { motion } from 'framer-motion'
import {
  BarChart3, Target, FileText, Calendar, Users, Brain,
  Clipboard, Shield, TrendingUp, Bell, BookOpen, Zap
} from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'
import { fadeInUp, staggerContainer, VIEWPORT } from '@/lib/motion'

const features = [
  {
    icon: Target,
    color: 'text-primary',
    bg: 'bg-primary-50',
    title: 'IEP Goal Tracking',
    desc: 'Track measurable goals with frequency, duration, interval, probe, and rating scale data types. Visual progress charts included.',
    tag: 'Core',
  },
  {
    icon: BarChart3,
    color: 'text-sky-600',
    bg: 'bg-sky-50',
    title: 'Reports & Analytics',
    desc: '20+ built-in report templates. Progress summaries, trend analysis, IEP annual reviews, and parent-friendly reports in one click.',
    tag: 'Popular',
  },
  {
    icon: Brain,
    color: 'text-violet-600',
    bg: 'bg-violet-50',
    title: 'AI Goal Generation',
    desc: 'Generate standards-aligned, measurable IEP goals in seconds. Powered by AI trained on thousands of real IEPs.',
    tag: 'AI',
  },
  {
    icon: Calendar,
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
    title: 'Scheduling & Services',
    desc: 'Manage therapy schedules, track service minutes, and ensure every student receives mandated services on time.',
    tag: 'Core',
  },
  {
    icon: FileText,
    color: 'text-amber-600',
    bg: 'bg-amber-50',
    title: 'AI Progress Notes',
    desc: 'Auto-generate session notes and progress summaries from your data. Spend less time writing, more time teaching.',
    tag: 'AI',
  },
  {
    icon: Users,
    color: 'text-pink-600',
    bg: 'bg-pink-50',
    title: 'Team Collaboration',
    desc: 'Share student data across your entire team. Teachers, therapists, and admins all working from the same source of truth.',
    tag: 'Core',
  },
  {
    icon: Clipboard,
    color: 'text-orange-600',
    bg: 'bg-orange-50',
    title: 'Accommodations Tracker',
    desc: 'Document, monitor, and report on accommodations and modifications. Ensure every accommodation is implemented and tracked.',
    tag: 'Core',
  },
  {
    icon: TrendingUp,
    color: 'text-teal-600',
    bg: 'bg-teal-50',
    title: 'Billing & Documentation',
    desc: 'Accurate service documentation for Medicaid billing. Log every session with the detail payers require.',
    tag: 'Core',
  },
  {
    icon: Bell,
    color: 'text-red-500',
    bg: 'bg-red-50',
    title: 'Compliance Alerts',
    desc: 'Never miss an IEP deadline again. Automated reminders for annual reviews, re-evaluations, and notice requirements.',
    tag: 'Core',
  },
  {
    icon: BookOpen,
    color: 'text-indigo-600',
    bg: 'bg-indigo-50',
    title: 'AI Worksheets',
    desc: 'Generate differentiated worksheets, activity ideas, and instructional materials tailored to each student\'s goals.',
    tag: 'AI',
  },
  {
    icon: Shield,
    color: 'text-green-600',
    bg: 'bg-green-50',
    title: 'HIPAA & FERPA Secure',
    desc: 'Enterprise-grade encryption, role-based access controls, and full audit logs keep student data safe and compliant.',
    tag: 'Security',
  },
  {
    icon: Zap,
    color: 'text-yellow-600',
    bg: 'bg-yellow-50',
    title: 'Fast Data Entry',
    desc: 'Log trials with one tap. Voice input, smart forms, and keyboard shortcuts make data collection faster than ever.',
    tag: 'Core',
  },
]

const tagColors: Record<string, string> = {
  Core: 'bg-gray-100 text-gray-600',
  AI: 'bg-violet-50 text-violet-700',
  Popular: 'bg-primary-50 text-primary-700',
  Security: 'bg-emerald-50 text-emerald-700',
}

export default function FeaturesSection() {
  return (
    <section id="features" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Features"
          heading="A complete platform for<br /><span class='text-gradient'>every need</span>"
          subtext="Everything a special education team needs in one platform. No switching between tools, no missing data, no excuses."
        />

        <motion.div
          variants={staggerContainer(0.06)}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
        >
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                variants={fadeInUp}
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                className="group bg-white rounded-3xl border border-gray-100 shadow-soft p-6 flex flex-col gap-4 hover:shadow-medium hover:border-gray-200 transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-start justify-between">
                  <div className={`w-10 h-10 rounded-2xl ${feature.bg} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={18} className={feature.color} />
                  </div>
                  <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${tagColors[feature.tag]}`}>
                    {feature.tag}
                  </span>
                </div>
                <div className="flex flex-col gap-1.5">
                  <h3 className="text-sm font-bold text-gray-900 group-hover:text-primary transition-colors duration-200">
                    {feature.title}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{feature.desc}</p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="mt-12 text-center"
        >
          <motion.a
            href="#"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-7 py-4 bg-primary text-white font-semibold rounded-2xl shadow-medium hover:shadow-glow hover:bg-primary-700 transition-all duration-200"
          >
            Explore All Features
            <span>→</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
