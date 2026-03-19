'use client'

import { motion } from 'framer-motion'
import { Shield, Lock, Eye, Server, FileCheck, AlertCircle } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'
import { fadeInUp, staggerContainer, VIEWPORT } from '@/lib/motion'

const complianceBadges = [
  {
    acronym: 'HIPAA',
    full: 'Health Insurance Portability & Accountability Act',
    desc: 'Full HIPAA compliance for protected health information of students receiving related services.',
    color: 'border-blue-200 bg-blue-50 text-blue-700',
    icon: '🏥',
  },
  {
    acronym: 'FERPA',
    full: 'Family Educational Rights and Privacy Act',
    desc: 'FERPA-compliant handling of all student educational records and personally identifiable information.',
    color: 'border-emerald-200 bg-emerald-50 text-emerald-700',
    icon: '📚',
  },
  {
    acronym: 'ISO 27001',
    full: 'International Security Standard',
    desc: 'ISO 27001 certified information security management system. Regular third-party audits.',
    color: 'border-violet-200 bg-violet-50 text-violet-700',
    icon: '🔒',
  },
  {
    acronym: 'SOC 2',
    full: 'Service Organization Control Type II',
    desc: 'SOC 2 Type II certified, demonstrating our ongoing commitment to security, availability, and confidentiality.',
    color: 'border-amber-200 bg-amber-50 text-amber-700',
    icon: '✅',
  },
]

const securityFeatures = [
  {
    icon: Lock,
    title: 'AES-256 Encryption',
    desc: 'All student data encrypted at rest and in transit using military-grade AES-256 encryption.',
  },
  {
    icon: Eye,
    title: 'Role-Based Access',
    desc: 'Granular permissions ensure staff only access the student data relevant to their role.',
  },
  {
    icon: Server,
    title: '99.99% Uptime',
    desc: 'Redundant cloud infrastructure with automatic failover and daily backups across multiple regions.',
  },
  {
    icon: FileCheck,
    title: 'Full Audit Logs',
    desc: 'Every data access, change, and export is logged for compliance and accountability.',
  },
  {
    icon: AlertCircle,
    title: 'Breach Notification',
    desc: 'Automated breach detection with immediate notification protocols as required by HIPAA.',
  },
  {
    icon: Shield,
    title: 'SSO & 2FA',
    desc: 'Single Sign-On with your district\'s identity provider and mandatory two-factor authentication.',
  },
]

export default function SecuritySection() {
  return (
    <section id="security" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Security & Compliance"
          heading="Enterprise-grade security,<br /><span class='text-gradient'>built in from day one</span>"
          subtext="Student data is sacred. AbleSpace meets the highest standards for security and privacy in education — not as an afterthought, but by design."
        />

        {/* Compliance badges */}
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {complianceBadges.map((badge) => (
            <motion.div
              key={badge.acronym}
              variants={fadeInUp}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className={`rounded-3xl border p-6 flex flex-col gap-3 ${badge.color} hover:shadow-medium transition-all duration-300`}
            >
              <div className="flex items-center gap-2">
                <span className="text-2xl">{badge.icon}</span>
                <span className="text-xl font-black">{badge.acronym}</span>
              </div>
              <div>
                <div className="text-xs font-semibold opacity-70 mb-1">{badge.full}</div>
                <p className="text-xs opacity-80 leading-relaxed">{badge.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Security features grid */}
        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {securityFeatures.map((feature) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                variants={fadeInUp}
                className="flex items-start gap-4 p-5 rounded-2xl bg-gray-50 border border-gray-100 hover:bg-primary-50 hover:border-primary-100 transition-all duration-200 group"
              >
                <div className="w-9 h-9 rounded-xl bg-white border border-gray-200 flex items-center justify-center shrink-0 group-hover:border-primary-200 group-hover:bg-primary-50 transition-colors">
                  <Icon size={16} className="text-gray-600 group-hover:text-primary transition-colors" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900 group-hover:text-primary transition-colors">{feature.title}</h4>
                  <p className="text-xs text-gray-500 mt-1 leading-relaxed">{feature.desc}</p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Security CTA */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="mt-12 text-center"
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-700 transition-colors group"
          >
            <Shield size={15} />
            Read our full Security & Compliance documentation
            <span className="group-hover:translate-x-0.5 transition-transform">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
