'use client'

import { motion } from 'framer-motion'
import { CheckCircle2, Smartphone, WifiOff, Bell, Mic } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'
import { slideInLeft, slideInRight, staggerContainer, fadeInUp, VIEWPORT } from '@/lib/motion'

const mobileFeatures = [
  {
    icon: CheckCircle2,
    color: 'text-primary',
    title: 'One-Tap Data Entry',
    desc: 'Log trials, record data, and mark sessions complete in seconds — right from your phone during sessions.',
  },
  {
    icon: WifiOff,
    color: 'text-emerald-600',
    title: 'Works Offline',
    desc: "No Wi-Fi? No problem. AbleSpace syncs automatically when you're back online. Never lose a data point.",
  },
  {
    icon: Bell,
    color: 'text-amber-600',
    title: 'Smart Notifications',
    desc: 'Get reminded about upcoming IEP dates, missing data, and team messages — without the noise.',
  },
  {
    icon: Mic,
    color: 'text-violet-600',
    title: 'Voice to Notes',
    desc: 'Dictate session notes and observations with your voice. AI transcribes and formats them automatically.',
  },
]

export default function MobileExperienceSection() {
  return (
    <section id="mobile" className="py-24 lg:py-32 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Content */}
          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            className="flex flex-col gap-8"
          >
            <div className="flex flex-col gap-5">
              <motion.span
                variants={fadeInUp}
                className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wide uppercase border bg-primary-50 text-primary-600 border-primary-100 w-fit"
              >
                <Smartphone size={12} />
                On the Go
              </motion.span>
              <motion.h2
                variants={fadeInUp}
                className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1] text-gray-900"
              >
                Powerful on{' '}
                <span className="text-gradient">every device</span>
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-lg text-gray-500 leading-relaxed">
                AbleSpace follows you from the classroom to the hallway to the therapy room. A native mobile experience designed for how special educators actually work.
              </motion.p>
            </div>

            <motion.div
              variants={staggerContainer(0.1)}
              className="flex flex-col gap-4"
            >
              {mobileFeatures.map((feature) => {
                const Icon = feature.icon
                return (
                  <motion.div
                    key={feature.title}
                    variants={fadeInUp}
                    whileHover={{ x: 4, transition: { duration: 0.2 } }}
                    className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-gray-100 shadow-soft hover:shadow-medium hover:border-gray-200 transition-all duration-200 cursor-pointer"
                  >
                    <div className="w-10 h-10 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center shrink-0">
                      <Icon size={18} className={feature.color} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-gray-900">{feature.title}</h4>
                      <p className="text-sm text-gray-500 mt-0.5 leading-relaxed">{feature.desc}</p>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>

            <motion.div variants={fadeInUp} className="flex items-center gap-3">
              <motion.a
                href="#"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 px-5 py-3 bg-gray-900 text-white font-semibold rounded-2xl text-sm hover:bg-gray-800 transition-colors"
              >
                <span>⬛</span> App Store
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 px-5 py-3 bg-gray-900 text-white font-semibold rounded-2xl text-sm hover:bg-gray-800 transition-colors"
              >
                <span>▶</span> Google Play
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right: Phone mockup */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glow */}
              <div className="absolute -inset-8 bg-primary/10 blur-3xl rounded-full pointer-events-none" />

              {/* Phone frame */}
              <div className="relative w-[280px] sm:w-[300px] bg-gray-950 rounded-[3rem] p-3 shadow-2xl border-4 border-gray-800">
                {/* Notch */}
                <div className="absolute top-6 left-1/2 -translate-x-1/2 w-20 h-6 bg-gray-950 rounded-full z-10" />

                {/* Screen */}
                <div className="bg-gray-50 rounded-[2.4rem] overflow-hidden h-[580px] sm:h-[620px] relative">
                  {/* Status bar */}
                  <div className="flex items-center justify-between px-6 pt-10 pb-3 bg-white">
                    <span className="text-xs font-semibold text-gray-600">9:41</span>
                    <div className="flex items-center gap-1">
                      <div className="w-4 h-2 rounded-sm bg-gray-300 relative">
                        <div className="absolute inset-y-0 left-0 w-3/4 bg-gray-700 rounded-sm" />
                      </div>
                    </div>
                  </div>

                  {/* App header */}
                  <div className="px-4 pb-3 bg-white border-b border-gray-100">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-sm font-bold text-gray-900">Today&apos;s Sessions</h3>
                        <p className="text-xs text-gray-400">Thursday, March 19</p>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-primary/15 flex items-center justify-center">
                        <span className="text-xs font-bold text-primary">SK</span>
                      </div>
                    </div>
                  </div>

                  {/* Session list */}
                  <div className="p-3 flex flex-col gap-2 overflow-hidden">
                    {[
                      { name: 'Emma R.', time: '9:00 AM', service: 'Reading', status: 'done', score: '4/5' },
                      { name: 'James T.', time: '10:00 AM', service: 'Writing', status: 'active', score: '' },
                      { name: 'Maria L.', time: '11:00 AM', service: 'Math', status: 'upcoming', score: '' },
                      { name: 'David K.', time: '1:00 PM', service: 'Social Skills', status: 'upcoming', score: '' },
                    ].map((session) => (
                      <div
                        key={session.name}
                        className={`flex items-center gap-3 p-3 rounded-2xl border ${
                          session.status === 'active'
                            ? 'bg-primary-50 border-primary-200'
                            : 'bg-white border-gray-100'
                        }`}
                      >
                        <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 text-xs font-bold ${
                          session.status === 'done' ? 'bg-emerald-100 text-emerald-700' :
                          session.status === 'active' ? 'bg-primary text-white' :
                          'bg-gray-100 text-gray-400'
                        }`}>
                          {session.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-xs font-semibold text-gray-800">{session.name}</div>
                          <div className="text-xs text-gray-400">{session.time} · {session.service}</div>
                        </div>
                        {session.status === 'done' && (
                          <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-lg">
                            {session.score}
                          </span>
                        )}
                        {session.status === 'active' && (
                          <span className="w-2 h-2 rounded-full bg-primary animate-pulse-slow" />
                        )}
                      </div>
                    ))}

                    {/* Quick data entry panel */}
                    <div className="mt-1 bg-white border border-gray-100 rounded-2xl p-3">
                      <div className="text-xs font-semibold text-gray-500 mb-2">Quick Log — James T.</div>
                      <div className="flex items-center gap-2">
                        <div className="flex-1 grid grid-cols-5 gap-1">
                          {['+', '+', '+', '−', '+'].map((symbol, i) => (
                            <div
                              key={i}
                              className={`h-8 rounded-xl flex items-center justify-center text-xs font-bold ${
                                symbol === '+' ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-600'
                              }`}
                            >
                              {symbol}
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-xs text-gray-400">4/5 correct — 80%</span>
                        <span className="text-xs font-semibold text-primary bg-primary-50 px-2 py-0.5 rounded-lg">Save</span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom nav */}
                  <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-4 py-3 flex items-center justify-around">
                    {['🏠', '👥', '📋', '📊', '⚙️'].map((icon, i) => (
                      <div
                        key={i}
                        className={`flex flex-col items-center gap-0.5 ${i === 2 ? 'text-primary' : 'text-gray-400'}`}
                      >
                        <span className="text-base">{icon}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating notification */}
              <motion.div
                initial={{ opacity: 0, x: 20, y: -10 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                className="absolute -right-4 top-20 bg-white rounded-2xl shadow-large border border-gray-100 p-3 w-48"
              >
                <div className="flex items-start gap-2">
                  <div className="w-7 h-7 rounded-xl bg-amber-100 flex items-center justify-center shrink-0">
                    <Bell size={12} className="text-amber-600" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-gray-800">IEP Due Soon</div>
                    <div className="text-xs text-gray-400 mt-0.5">Emma R. in 3 days</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
