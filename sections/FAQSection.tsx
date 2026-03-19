'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'
import { fadeInUp, staggerContainer, VIEWPORT } from '@/lib/motion'

const faqs = [
  {
    question: 'Is AbleSpace HIPAA and FERPA compliant?',
    answer:
      'Yes. AbleSpace is fully HIPAA and FERPA compliant. We maintain BAAs (Business Associate Agreements) with all districts and healthcare providers, use AES-256 encryption for all data at rest and in transit, and undergo regular third-party security audits. Our platform is also ISO 27001 certified and SOC 2 Type II compliant.',
  },
  {
    question: 'How does the AI goal generation work?',
    answer:
      'Our AI is trained on thousands of real, expert-written IEP goals across all disability categories and grade levels. You enter a student\'s present level of performance, area of need, and grade, and our AI generates multiple measurable, standards-aligned goals in seconds. You review, edit, and approve — the AI is your assistant, not the decision maker.',
  },
  {
    question: 'What data collection types are supported?',
    answer:
      'AbleSpace supports all major data collection types: frequency/event recording, duration recording, interval recording (whole, partial, momentary), probe data, rating scales, task analysis, and anecdotal notes. You can create custom data sheets for any measurement system your team uses.',
  },
  {
    question: 'Can I import data from my current system?',
    answer:
      'Yes! We offer free data migration for all new customers. Our team will help you import student data, goals, and historical progress data from most major IEP platforms and even Excel/CSV files. The migration typically takes 2-5 business days depending on data volume.',
  },
  {
    question: 'How many students and users can I have?',
    answer:
      'Our plans scale from individual therapists with a small caseload to district-wide deployments with hundreds of staff. The Individual plan supports up to 30 students. The Team plan is unlimited. Enterprise plans include custom configurations for large districts — contact us to discuss your needs.',
  },
  {
    question: 'Does AbleSpace work for related service providers (SLPs, OTs, PTs)?',
    answer:
      'Absolutely. AbleSpace was designed for the entire special education team — special ed teachers, SLPs, OTs, PTs, school psychologists, paraprofessionals, and administrators. Each role has tailored views, and billing/Medicaid documentation tools are built in for related service providers.',
  },
  {
    question: 'Is there a free trial?',
    answer:
      'Yes! We offer a 14-day free trial with full access to all features, no credit card required. You can import up to 10 students during the trial. If you need more time or a guided demo, our team is happy to set one up for you.',
  },
  {
    question: 'What kind of support do you offer?',
    answer:
      'All plans include live chat support, an extensive help center, and weekly onboarding webinars. Team and Enterprise plans get a dedicated customer success manager, priority phone support, and custom training sessions for your staff.',
  },
]

function FAQItem({ faq, index }: { faq: typeof faqs[0]; index: number }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      variants={fadeInUp}
      className="border-b border-gray-100 last:border-0"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left group"
      >
        <span className="text-base font-semibold text-gray-900 group-hover:text-primary transition-colors duration-200">
          {faq.question}
        </span>
        <motion.div
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className={`w-7 h-7 rounded-full border flex items-center justify-center shrink-0 transition-colors duration-200 ${
            open
              ? 'bg-primary border-primary text-white'
              : 'bg-gray-50 border-gray-200 text-gray-500 group-hover:border-primary group-hover:text-primary'
          }`}
        >
          <Plus size={14} strokeWidth={2.5} />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-gray-500 leading-relaxed text-sm">{faq.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQSection() {
  return (
    <section id="faq" className="py-24 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="FAQ"
          heading="Frequently asked<br /><span class='text-gradient'>questions</span>"
          subtext="Everything you need to know about AbleSpace. Can't find what you're looking for? Chat with our team."
        />

        <motion.div
          variants={staggerContainer(0.06)}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="mt-16 max-w-3xl mx-auto bg-white rounded-3xl border border-gray-100 shadow-card px-8 py-2 divide-y-0"
        >
          {faqs.map((faq, i) => (
            <FAQItem key={faq.question} faq={faq} index={i} />
          ))}
        </motion.div>

        {/* Still have questions */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="mt-10 text-center"
        >
          <p className="text-gray-500 text-sm">
            Still have questions?{' '}
            <a href="#" className="text-primary font-semibold hover:text-primary-700 transition-colors">
              Chat with our team →
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
