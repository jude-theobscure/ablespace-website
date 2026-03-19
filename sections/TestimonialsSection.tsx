'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'
import { fadeInUp, staggerContainer, VIEWPORT } from '@/lib/motion'

const testimonials = [
  {
    quote:
      "AbleSpace has completely transformed how I manage IEPs. What used to take me an entire Sunday now takes 20 minutes. The AI goal generator alone has saved me hours every week.",
    name: 'Sarah K.',
    role: 'Special Education Teacher',
    school: 'Lincoln Elementary School',
    initials: 'SK',
    color: 'bg-primary',
    stars: 5,
  },
  {
    quote:
      "As a school-based SLP, I see 40+ students per week. AbleSpace keeps all my data, notes, and reports in one place. The billing integration saves our district so much time.",
    name: 'Michael T.',
    role: 'Speech-Language Pathologist',
    school: 'Riverside School District',
    initials: 'MT',
    color: 'bg-emerald-500',
    stars: 5,
  },
  {
    quote:
      "We rolled out AbleSpace district-wide last year. The compliance tracking alone was worth it — we went from missing deadlines to 100% on-time IEPs. Admin visibility is incredible.",
    name: 'Jennifer L.',
    role: 'Director of Special Education',
    school: 'Maple Valley USD',
    initials: 'JL',
    color: 'bg-sky-500',
    stars: 5,
  },
  {
    quote:
      "The mobile app is a game changer. I log data right at the table during sessions instead of scribbling notes on paper to enter later. My data collection has never been more accurate.",
    name: 'Rachel M.',
    role: 'ABA Therapist',
    school: 'Sunrise Learning Center',
    initials: 'RM',
    color: 'bg-violet-500',
    stars: 5,
  },
  {
    quote:
      "Parents actually understand their child's progress now because of the visual reports AbleSpace generates. I send them home before every IEP meeting and the conversations are so much richer.",
    name: 'David C.',
    role: 'Resource Room Teacher',
    school: 'Eastview Middle School',
    initials: 'DC',
    color: 'bg-amber-500',
    stars: 5,
  },
  {
    quote:
      "Switching from paper to AbleSpace was the best decision I made this school year. The team collaboration features mean my paras and co-teachers are all on the same page every day.",
    name: 'Amanda B.',
    role: 'Special Education Coordinator',
    school: 'Westfield Unified',
    initials: 'AB',
    color: 'bg-rose-500',
    stars: 5,
  },
]

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={12} className="text-amber-400 fill-amber-400" />
      ))}
    </div>
  )
}

export default function TestimonialsSection() {
  return (
    <section className="py-24 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Testimonials"
          heading="Loved by educators<br /><span class='text-gradient'>across the country</span>"
          subtext="Join 20,000+ special education professionals who use AbleSpace to work smarter, not harder."
        />

        {/* Rating summary */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="mt-8 flex items-center justify-center gap-3"
        >
          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={18} className="text-amber-400 fill-amber-400" />
            ))}
          </div>
          <span className="text-lg font-bold text-gray-900">4.9 / 5.0</span>
          <span className="text-gray-400">·</span>
          <span className="text-gray-500 text-sm">Based on 2,400+ reviews</span>
        </motion.div>

        {/* Testimonial grid */}
        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={fadeInUp}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group bg-white rounded-3xl border border-gray-100 shadow-card p-6 flex flex-col gap-5 hover:shadow-medium hover:border-gray-200 transition-all duration-300"
            >
              {/* Quote icon + stars */}
              <div className="flex items-start justify-between">
                <div className="w-9 h-9 rounded-xl bg-primary-50 border border-primary-100 flex items-center justify-center">
                  <Quote size={15} className="text-primary" />
                </div>
                <StarRating count={t.stars} />
              </div>

              {/* Quote text */}
              <p className="text-sm text-gray-600 leading-relaxed flex-1">&ldquo;{t.quote}&rdquo;</p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-1 border-t border-gray-50">
                <div className={`w-9 h-9 rounded-full ${t.color} flex items-center justify-center text-xs font-bold text-white shrink-0`}>
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-900">{t.name}</div>
                  <div className="text-xs text-gray-400">{t.role}</div>
                  <div className="text-xs text-gray-300">{t.school}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
