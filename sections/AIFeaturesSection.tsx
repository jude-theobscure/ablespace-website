'use client'

import { motion } from 'framer-motion'
import { Brain, FileText, BookOpen, Wand2, MessageSquare, Sparkles, ArrowRight } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'
import { fadeInUp, staggerContainer, scaleIn, VIEWPORT, EASE_OUT_EXPO } from '@/lib/motion'

const aiFeatures = [
  {
    icon: Brain,
    title: 'AI Goal Generation',
    desc: 'Describe a student&apos;s needs and get standards-aligned, measurable IEP goals instantly. Trained on thousands of real IEPs from expert educators.',
    highlight: 'Generate in 5 seconds',
  },
  {
    icon: FileText,
    title: 'Smart Progress Notes',
    desc: 'Your data becomes professional session notes automatically. Edit, approve, and share — no more starting from a blank page.',
    highlight: 'Cut note time by 80%',
  },
  {
    icon: BookOpen,
    title: 'Differentiated Worksheets',
    desc: 'Create custom worksheets, practice activities, and instructional materials tailored to each student\'s specific IEP goals.',
    highlight: 'Infinite variations',
  },
  {
    icon: MessageSquare,
    title: 'Parent Communication',
    desc: 'Draft parent-friendly progress reports and meeting summaries in plain language. Translate complex data into clear updates families understand.',
    highlight: 'Available in 12 languages',
  },
  {
    icon: Wand2,
    title: 'IEP Draft Assistant',
    desc: 'Jumpstart your IEP writing process with AI-drafted sections based on evaluation data, present levels, and previous goals.',
    highlight: 'Full IEP in minutes',
  },
  {
    icon: Sparkles,
    title: 'Accommodation Suggestions',
    desc: 'Get data-driven accommodation and modification recommendations based on a student\'s disability profile and learning needs.',
    highlight: 'Evidence-based',
  },
]

export default function AIFeaturesSection() {
  return (
    <section id="ai-features" className="py-24 lg:py-32 relative overflow-hidden bg-gray-950">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-primary-900/40 to-violet-950/60 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/15 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-violet-500/10 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute inset-0 dot-pattern opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Powered by AI"
          heading="Let AI handle the<br /><span style='background: linear-gradient(135deg, #a78bfa 0%, #c4b5fd 50%, #e9d5ff 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;'>heavy lifting</span>"
          subtext="AbleSpace AI is trained specifically on special education content. Not generic AI — purpose-built for IEPs, therapy goals, and the way special educators work."
          dark
        />

        {/* Feature grid */}
        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {aiFeatures.map((feature) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                variants={fadeInUp}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 flex flex-col gap-4 hover:bg-white/8 hover:border-white/20 transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-start justify-between">
                  <div className="w-11 h-11 rounded-2xl bg-primary/20 border border-primary/30 flex items-center justify-center group-hover:bg-primary/30 group-hover:scale-110 transition-all duration-300">
                    <Icon size={20} className="text-primary-300" />
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-primary/20 text-primary-300 text-xs font-semibold border border-primary/20">
                    {feature.highlight}
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-base font-bold text-white group-hover:text-primary-200 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{feature.desc}</p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* AI Demo preview */}
        <motion.div
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="mt-16 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden"
        >
          <div className="flex items-center gap-3 px-5 py-3.5 border-b border-white/10 bg-white/3">
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-full bg-gray-600" />
              <div className="w-3 h-3 rounded-full bg-gray-600" />
              <div className="w-3 h-3 rounded-full bg-gray-600" />
            </div>
            <span className="text-xs text-gray-500 font-mono">AI Goal Generator</span>
          </div>

          <div className="p-6 sm:p-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Input */}
            <div className="flex flex-col gap-3">
              <label className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Student Profile</label>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-sm text-gray-300 leading-relaxed">
                <div className="flex flex-col gap-2">
                  {[
                    ['Name', 'Emma Rodriguez'],
                    ['Grade', '3rd Grade'],
                    ['Disability', 'Specific Learning Disability'],
                    ['Area of Need', 'Reading / ELA'],
                    ['Current Level', '45 WPM, Grade 1.5 level'],
                    ['Annual Goal', 'Improve reading fluency'],
                  ].map(([key, val]) => (
                    <div key={key} className="flex gap-2">
                      <span className="text-gray-500 w-28 shrink-0 text-xs">{key}:</span>
                      <span className="text-gray-300 text-xs">{val}</span>
                    </div>
                  ))}
                </div>
              </div>
              <motion.div
                animate={{ opacity: [1, 0.7, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="flex items-center gap-2 px-4 py-2.5 bg-primary rounded-xl text-white text-sm font-semibold cursor-pointer w-fit"
              >
                <Sparkles size={14} />
                Generate Goals
              </motion.div>
            </div>

            {/* Output */}
            <div className="flex flex-col gap-3">
              <label className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Generated Goals</label>
              <div className="flex flex-col gap-2.5">
                {[
                  {
                    goal: 'By [annual IEP date], Emma will increase oral reading fluency from 45 to 90 WPM on grade-level passages with 80% accuracy across 3 consecutive sessions.',
                    selected: true,
                  },
                  {
                    goal: 'Emma will correctly identify the main idea and 2 supporting details in a grade-level passage with 75% accuracy on 4 of 5 trials.',
                    selected: false,
                  },
                  {
                    goal: 'Emma will apply decoding strategies to read 40 new sight words with 85% accuracy across 3 data collection sessions.',
                    selected: false,
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className={`flex items-start gap-3 p-3.5 rounded-2xl border text-xs text-gray-300 leading-relaxed cursor-pointer transition-all ${
                      item.selected
                        ? 'bg-primary/15 border-primary/30 text-white'
                        : 'bg-white/3 border-white/8 hover:bg-white/6'
                    }`}
                  >
                    <div className={`w-4 h-4 rounded-full border-2 mt-0.5 shrink-0 ${
                      item.selected ? 'bg-primary border-primary' : 'border-gray-500'
                    }`}>
                      {item.selected && (
                        <div className="w-full h-full flex items-center justify-center text-white text-xs font-bold">✓</div>
                      )}
                    </div>
                    {item.goal}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="mt-12 text-center flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="#"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 px-7 py-4 bg-primary text-white font-semibold rounded-2xl shadow-glow hover:shadow-glow-lg transition-all duration-200"
          >
            <Sparkles size={16} />
            Try AI Features Free
          </motion.a>
          <a href="#" className="flex items-center gap-1.5 text-gray-400 hover:text-white transition-colors text-sm font-medium">
            See how it works <ArrowRight size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
