'use client'

import { motion } from 'framer-motion'
import { Building2, GraduationCap, MapPin, TrendingUp } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'
import { fadeInUp, staggerContainer, VIEWPORT } from '@/lib/motion'

const stats = [
  { value: '20,000+', label: 'Special Education Professionals', icon: GraduationCap, color: 'text-primary' },
  { value: '500+', label: 'Schools & Organizations', icon: Building2, color: 'text-sky-600' },
  { value: '50', label: 'States & Growing', icon: MapPin, color: 'text-emerald-600' },
  { value: '98%', label: 'Annual Retention Rate', icon: TrendingUp, color: 'text-violet-600' },
]

const districtTypes = [
  { name: 'Public School Districts', count: '320+' },
  { name: 'Private SPED Schools', count: '85+' },
  { name: 'Therapy Clinics', count: '60+' },
  { name: 'Charter Schools', count: '40+' },
  { name: 'ESAs & Co-ops', count: '25+' },
  { name: 'University Programs', count: '15+' },
]

export default function SchoolsSection() {
  return (
    <section className="py-24 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Districts & Schools"
          heading="Trusted by schools and districts<br /><span class='text-gradient'>nationwide</span>"
          subtext="From small therapy practices to large school districts, AbleSpace scales to meet every team's needs."
        />

        {/* Stats */}
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {stats.map((stat) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                variants={fadeInUp}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-white rounded-3xl border border-gray-100 shadow-card p-6 flex flex-col gap-3 text-center hover:shadow-medium transition-all duration-300"
              >
                <div className="flex justify-center">
                  <div className="w-10 h-10 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center">
                    <Icon size={18} className={stat.color} />
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-900 tracking-tight">{stat.value}</div>
                <div className="text-sm text-gray-500 leading-snug">{stat.label}</div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* District type grid */}
        <motion.div
          variants={staggerContainer(0.07)}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="mt-12"
        >
          <motion.div variants={fadeInUp} className="text-center mb-8">
            <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Used by teams across every setting</p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {districtTypes.map((type) => (
              <motion.div
                key={type.name}
                variants={fadeInUp}
                whileHover={{ y: -2, scale: 1.02, transition: { duration: 0.2 } }}
                className="bg-white rounded-2xl border border-gray-100 p-4 text-center hover:border-primary-200 hover:shadow-soft cursor-pointer transition-all duration-200"
              >
                <div className="text-lg font-bold text-primary-600 mb-1">{type.count}</div>
                <div className="text-xs text-gray-500 leading-tight">{type.name}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* District CTA */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="mt-16 bg-primary-50 border border-primary-100 rounded-3xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div className="flex flex-col gap-2 text-center sm:text-left">
            <h3 className="text-xl font-bold text-gray-900">Ready to bring AbleSpace to your district?</h3>
            <p className="text-gray-500 text-sm max-w-lg">
              We offer volume pricing, custom onboarding, and dedicated support for school districts. Get a personalized demo for your team.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <motion.a
              href="#"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="px-6 py-3 bg-primary text-white font-semibold rounded-2xl text-sm shadow-medium hover:shadow-glow hover:bg-primary-700 transition-all duration-200 text-center"
            >
              Request District Demo
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="px-6 py-3 bg-white text-gray-700 font-semibold rounded-2xl text-sm border border-gray-200 hover:border-gray-300 hover:shadow-soft transition-all duration-200 text-center"
            >
              View Pricing
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
