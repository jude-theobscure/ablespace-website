'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, CheckCircle2, Play } from 'lucide-react'
import { staggerContainer, fadeInUp, scaleIn, EASE_OUT_EXPO } from '@/lib/motion'

const trustItems = [
  { label: 'HIPAA Compliant' },
  { label: 'FERPA Compliant' },
  { label: 'ISO 27001' },
  { label: '20,000+ Educators' },
]

const stats = [
  { value: '20K+', label: 'Educators' },
  { value: '500+', label: 'Schools' },
  { value: '50+', label: 'States' },
  { value: '98%', label: 'Retention' },
]

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-hero pt-24 pb-0">
      {/* Background elements */}
      <div className="absolute inset-0 dot-pattern opacity-60 pointer-events-none" />
      <div className="absolute top-1/4 -left-48 w-96 h-96 rounded-full bg-primary/10 blur-3xl pointer-events-none animate-float-slow" />
      <div className="absolute top-1/3 -right-48 w-[500px] h-[500px] rounded-full bg-violet-400/8 blur-3xl pointer-events-none animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-48 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Above-the-fold content */}
        <motion.div
          variants={staggerContainer(0.1, 0.1)}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center gap-6 sm:gap-8"
        >
          {/* Announcement badge */}
          <motion.div variants={fadeInUp}>
            <a
              href="#ai-features"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-primary-100 text-primary-700 text-sm font-medium shadow-soft hover:shadow-medium hover:border-primary-200 transition-all duration-200 group"
            >
              <span className="w-5 h-5 rounded-full bg-primary-50 flex items-center justify-center">
                <Sparkles size={11} className="text-primary" />
              </span>
              New: AI Goal Generation is here
              <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
          </motion.div>

          {/* Headline */}
          <motion.div variants={fadeInUp} className="flex flex-col gap-3">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] text-gray-900">
              The IEP Platform
              <br />
              <span className="text-gradient">Built for Special</span>
              <br />
              <span className="text-gradient">Educators</span>
            </h1>
          </motion.div>

          {/* Subtext */}
          <motion.p
            variants={fadeInUp}
            className="text-lg sm:text-xl text-gray-500 leading-relaxed max-w-2xl"
          >
            Track data, generate AI goals, write progress notes, and collaborate — all in one
            beautiful platform. Trusted by over{' '}
            <span className="text-gray-800 font-medium">20,000 special education professionals</span>{' '}
            nationwide.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center gap-3">
            <motion.a
              href="#"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2.5 px-7 py-4 bg-primary text-white font-semibold text-base rounded-2xl shadow-medium hover:shadow-glow hover:bg-primary-700 transition-all duration-200"
            >
              Start Free Trial
              <ArrowRight size={16} />
            </motion.a>
            <motion.a
              href="#product-demo"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2.5 px-7 py-4 bg-white text-gray-700 font-semibold text-base rounded-2xl border border-gray-200 shadow-soft hover:border-gray-300 hover:shadow-medium transition-all duration-200"
            >
              <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                <Play size={10} className="text-primary ml-0.5" fill="currentColor" />
              </span>
              Watch Demo
            </motion.a>
          </motion.div>

          {/* Trust strip */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-gray-400"
          >
            {trustItems.map((item, i) => (
              <span key={item.label} className="flex items-center gap-1.5">
                {i > 0 && <span className="w-1 h-1 rounded-full bg-gray-200 -ml-3 mr-1.5 hidden sm:block" />}
                <CheckCircle2 size={13} className="text-emerald-500 shrink-0" />
                {item.label}
              </span>
            ))}
          </motion.div>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7, ease: EASE_OUT_EXPO }}
          className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-px bg-gray-100 rounded-3xl overflow-hidden shadow-soft max-w-2xl mx-auto"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="bg-white px-6 py-5 text-center">
              <div className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
                {stat.value}
              </div>
              <div className="text-sm text-gray-400 mt-0.5 font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Dashboard mockup */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.5, ease: EASE_OUT_EXPO }}
          className="mt-16 relative"
        >
          {/* Glow behind mockup */}
          <div className="absolute -inset-8 bg-gradient-to-b from-primary/8 to-transparent rounded-4xl blur-2xl pointer-events-none" />

          {/* Browser frame */}
          <div className="relative bg-white rounded-3xl border border-gray-200 shadow-large overflow-hidden mx-auto max-w-5xl">
            {/* Browser top bar */}
            <div className="flex items-center gap-3 px-4 py-3 bg-gray-50 border-b border-gray-100">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="flex-1 mx-4">
                <div className="bg-white border border-gray-200 rounded-lg px-3 py-1.5 text-xs text-gray-400 font-mono max-w-xs mx-auto text-center">
                  app.ablespace.com
                </div>
              </div>
              <div className="w-16" />
            </div>

            {/* App UI */}
            <div className="flex h-[420px] sm:h-[480px]">
              {/* Sidebar */}
              <div className="w-52 bg-gray-950 flex flex-col p-3 gap-1 shrink-0 hidden sm:flex">
                <div className="px-3 py-2 mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-lg bg-primary flex items-center justify-center">
                      <span className="text-white font-bold text-xs">A</span>
                    </div>
                    <span className="text-white font-semibold text-sm">AbleSpace</span>
                  </div>
                </div>
                {[
                  { label: 'Dashboard', active: false },
                  { label: 'Students', active: true },
                  { label: 'IEP Goals', active: false },
                  { label: 'Data Entry', active: false },
                  { label: 'Reports', active: false },
                  { label: 'Calendar', active: false },
                  { label: 'Billing', active: false },
                  { label: 'AI Assistant', active: false },
                ].map(({ label, active }) => (
                  <div
                    key={label}
                    className={`px-3 py-2 rounded-xl text-sm font-medium cursor-pointer transition-colors ${
                      active
                        ? 'bg-primary text-white'
                        : 'text-gray-400 hover:text-white hover:bg-gray-800'
                    }`}
                  >
                    {label}
                  </div>
                ))}
                <div className="mt-auto px-3 py-2">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-primary/30 flex items-center justify-center text-xs text-white font-semibold">
                      SK
                    </div>
                    <div>
                      <div className="text-white text-xs font-medium">Sarah K.</div>
                      <div className="text-gray-500 text-xs">SPED Teacher</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Main content */}
              <div className="flex-1 bg-gray-50 overflow-hidden">
                {/* Top bar */}
                <div className="flex items-center justify-between px-5 py-3.5 bg-white border-b border-gray-100">
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900">My Students</h3>
                    <p className="text-xs text-gray-400">5 active · 3 goals due this week</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="px-3 py-1.5 bg-primary text-white text-xs font-semibold rounded-lg cursor-pointer">
                      + Add Student
                    </div>
                  </div>
                </div>

                <div className="p-4 flex flex-col gap-4 overflow-y-auto h-full">
                  {/* Quick stats */}
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { label: 'Active IEPs', value: '24', color: 'bg-primary/10 text-primary-700' },
                      { label: 'Goals On Track', value: '89%', color: 'bg-emerald-50 text-emerald-700' },
                      { label: 'Due This Week', value: '6', color: 'bg-amber-50 text-amber-700' },
                    ].map((s) => (
                      <div key={s.label} className="bg-white rounded-xl border border-gray-100 p-3">
                        <div className={`text-lg font-bold ${s.color.split(' ')[1]}`}>{s.value}</div>
                        <div className="text-xs text-gray-400 mt-0.5">{s.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Student list */}
                  <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
                    <div className="px-4 py-2.5 border-b border-gray-50 text-xs font-semibold text-gray-400 uppercase tracking-wide">
                      Student Progress
                    </div>
                    {[
                      { name: 'Emma R.', grade: 'Grade 3', goal: 'Reading', progress: 80, color: 'bg-primary' },
                      { name: 'James T.', grade: 'Grade 2', goal: 'Writing', progress: 62, color: 'bg-sky-500' },
                      { name: 'Maria L.', grade: 'Grade 4', goal: 'Math', progress: 91, color: 'bg-emerald-500' },
                      { name: 'David K.', grade: 'Grade 1', goal: 'Reading', progress: 45, color: 'bg-amber-500' },
                    ].map((student) => (
                      <div
                        key={student.name}
                        className="flex items-center gap-3 px-4 py-2.5 hover:bg-gray-50 transition-colors border-b border-gray-50 last:border-0"
                      >
                        <div className="w-7 h-7 rounded-full bg-primary/15 flex items-center justify-center text-xs font-bold text-primary shrink-0">
                          {student.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-xs font-semibold text-gray-800">{student.name}</span>
                            <span className="text-xs font-bold text-gray-600">{student.progress}%</span>
                          </div>
                          <div className="w-full bg-gray-100 rounded-full h-1.5">
                            <div
                              className={`h-1.5 rounded-full ${student.color} transition-all`}
                              style={{ width: `${student.progress}%` }}
                            />
                          </div>
                        </div>
                        <span className="text-xs text-gray-400 shrink-0">{student.goal}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Fade out at bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
        </motion.div>
      </div>
    </section>
  )
}
