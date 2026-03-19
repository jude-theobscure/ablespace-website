'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BarChart3, Target, ClipboardList, Brain } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'
import { fadeInUp, scaleIn, staggerContainer, VIEWPORT } from '@/lib/motion'

const tabs = [
  { id: 'overview', label: 'Overview', icon: BarChart3 },
  { id: 'tracking', label: 'Data Tracking', icon: ClipboardList },
  { id: 'reports', label: 'Reports', icon: BarChart3 },
  { id: 'goals', label: 'AI Goals', icon: Brain },
]

const tabContent: Record<string, React.ReactNode> = {
  overview: <OverviewTab />,
  tracking: <TrackingTab />,
  reports: <ReportsTab />,
  goals: <GoalsTab />,
}

function OverviewTab() {
  return (
    <div className="p-5 flex flex-col gap-4">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {[
          { label: 'Active Students', value: '18', trend: '+2 this week', color: 'text-primary' },
          { label: 'IEP Goals', value: '67', trend: '94% on track', color: 'text-emerald-600' },
          { label: 'Sessions Today', value: '12', trend: '3 remaining', color: 'text-sky-600' },
          { label: 'Reports Due', value: '4', trend: 'Due in 3 days', color: 'text-amber-600' },
        ].map((card) => (
          <div key={card.label} className="bg-white rounded-2xl border border-gray-100 p-4 shadow-soft">
            <div className={`text-2xl font-bold ${card.color}`}>{card.value}</div>
            <div className="text-xs font-semibold text-gray-600 mt-1">{card.label}</div>
            <div className="text-xs text-gray-400 mt-0.5">{card.trend}</div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="bg-white rounded-2xl border border-gray-100 p-4">
          <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">Weekly Data Collection</div>
          <div className="flex items-end gap-2 h-20">
            {[60, 80, 55, 95, 70, 85, 90].map((h, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-1">
                <div
                  className="w-full rounded-t-lg bg-primary/20 hover:bg-primary/40 transition-colors"
                  style={{ height: `${h}%` }}
                />
                <span className="text-xs text-gray-400">{['M','T','W','T','F','S','S'][i]}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white rounded-2xl border border-gray-100 p-4">
          <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">Goal Progress by Domain</div>
          {[
            { label: 'Reading', progress: 82, color: 'bg-primary' },
            { label: 'Math', progress: 71, color: 'bg-sky-500' },
            { label: 'Writing', progress: 65, color: 'bg-violet-500' },
            { label: 'Social Skills', progress: 90, color: 'bg-emerald-500' },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-3 mb-2.5">
              <span className="text-xs text-gray-500 w-20 shrink-0">{item.label}</span>
              <div className="flex-1 bg-gray-100 rounded-full h-1.5">
                <div className={`h-1.5 rounded-full ${item.color}`} style={{ width: `${item.progress}%` }} />
              </div>
              <span className="text-xs font-semibold text-gray-600 w-8 text-right">{item.progress}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function TrackingTab() {
  return (
    <div className="p-5 flex flex-col gap-4">
      <div className="bg-white rounded-2xl border border-gray-100 p-4">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h4 className="text-sm font-semibold text-gray-800">Emma R. — Reading Goal</h4>
            <p className="text-xs text-gray-400 mt-0.5">Increase oral reading fluency to 90 WPM</p>
          </div>
          <span className="px-2.5 py-1 bg-emerald-50 text-emerald-700 text-xs font-semibold rounded-lg">On Track</span>
        </div>
        <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">Recent Trials</div>
        <div className="flex flex-col gap-1.5">
          {[
            { date: 'Today', trial: 'Oral Reading', score: '4/5 correct', percent: '80%', tag: 'Mastered' },
            { date: 'Yesterday', trial: 'Comprehension Q', score: '7/10 correct', percent: '70%', tag: 'Emerging' },
            { date: 'Mon', trial: 'Fluency Check', score: '85 WPM', percent: '94%', tag: 'Mastered' },
          ].map((row) => (
            <div key={row.date} className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-gray-50 hover:bg-primary-50 transition-colors">
              <span className="text-xs text-gray-400 w-14 shrink-0">{row.date}</span>
              <span className="text-xs font-medium text-gray-700 flex-1">{row.trial}</span>
              <span className="text-xs text-gray-500">{row.score}</span>
              <span className={`px-2 py-0.5 text-xs font-semibold rounded-md ${row.tag === 'Mastered' ? 'bg-emerald-50 text-emerald-700' : 'bg-amber-50 text-amber-700'}`}>{row.tag}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-3 gap-3">
        {['Frequency', 'Duration', 'Interval', 'Probe', 'Rating Scale', 'Task Analysis'].map((type) => (
          <div key={type} className="bg-white border border-gray-100 rounded-xl p-3 hover:border-primary-200 hover:shadow-soft cursor-pointer transition-all text-center">
            <span className="text-xs font-medium text-gray-600">{type}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function ReportsTab() {
  return (
    <div className="p-5 flex flex-col gap-4">
      <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide">20+ Report Types</div>
      <div className="grid grid-cols-2 gap-3">
        {[
          { name: 'Progress Summary', desc: 'Goal progress by student', status: 'Ready' },
          { name: 'Data Trends', desc: 'Visual trend analysis', status: 'Ready' },
          { name: 'IEP Annual Review', desc: 'Full annual report', status: 'Ready' },
          { name: 'Service Log', desc: 'Billing & session log', status: 'Ready' },
          { name: 'Compliance Report', desc: 'Meeting deadlines', status: 'Ready' },
          { name: 'Parent Report', desc: 'Family-friendly summary', status: 'Ready' },
        ].map((report) => (
          <div key={report.name} className="bg-white border border-gray-100 rounded-xl p-3.5 hover:shadow-soft hover:border-primary-100 cursor-pointer transition-all group">
            <div className="flex items-start justify-between gap-2">
              <div>
                <div className="text-xs font-semibold text-gray-800 group-hover:text-primary transition-colors">{report.name}</div>
                <div className="text-xs text-gray-400 mt-0.5">{report.desc}</div>
              </div>
              <span className="px-1.5 py-0.5 bg-emerald-50 text-emerald-600 text-xs rounded-md shrink-0">{report.status}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function GoalsTab() {
  return (
    <div className="p-5 flex flex-col gap-4">
      <div className="bg-gradient-to-br from-primary-50 to-violet-50 border border-primary-100 rounded-2xl p-4">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-6 h-6 rounded-lg bg-primary flex items-center justify-center">
            <Brain size={13} className="text-white" />
          </div>
          <span className="text-sm font-semibold text-primary-700">AI Goal Generator</span>
        </div>
        <div className="text-xs text-gray-500 mb-3">Student profile loaded: Emma R. · Grade 3 · Reading</div>
        <div className="bg-white rounded-xl border border-primary-100 p-3 text-xs text-gray-600 leading-relaxed">
          <span className="font-semibold text-gray-800">Generated Goal:</span>
          <br />
          "By [annual IEP date], Emma will increase oral reading fluency from 45 WPM to 90 WPM on grade-level passages, as measured by weekly CBM probes, with 80% accuracy across 3 consecutive sessions."
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide">More suggestions</div>
        {[
          'Improve reading comprehension on grade-level texts to 75% accuracy',
          'Increase sight word recognition from 40 to 80 words',
          'Demonstrate phonemic awareness skills with 90% accuracy',
        ].map((goal) => (
          <div key={goal} className="flex items-start gap-2.5 p-3 bg-white border border-gray-100 rounded-xl hover:border-primary-200 cursor-pointer transition-all group">
            <div className="w-4 h-4 rounded-full border-2 border-gray-200 group-hover:border-primary mt-0.5 shrink-0 transition-colors" />
            <span className="text-xs text-gray-600 group-hover:text-gray-800 transition-colors">{goal}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function ProductDemoSection() {
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <section id="product-demo" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="See AbleSpace in Action"
          heading="Everything you need,<br /><span class='text-gradient'>exactly where you need it</span>"
          subtext="A complete workflow from data collection to IEP reporting — built specifically for the way special education professionals work."
        />

        {/* Demo window */}
        <motion.div
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="mt-16 bg-white rounded-3xl border border-gray-200 shadow-large overflow-hidden"
        >
          {/* Tab bar */}
          <div className="flex items-center gap-1 px-4 py-3 bg-gray-50 border-b border-gray-100 overflow-x-auto">
            {tabs.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                  activeTab === id
                    ? 'bg-white text-gray-900 shadow-soft border border-gray-200'
                    : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
                }`}
              >
                <Icon size={14} />
                {label}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="bg-gray-50 min-h-80"
            >
              {tabContent[activeTab]}
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Feature highlights below demo */}
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4"
        >
          {[
            { icon: '📊', label: 'Real-time dashboards', desc: 'See everything at a glance' },
            { icon: '🎯', label: 'Goal tracking', desc: 'Measurable progress data' },
            { icon: '📋', label: '20+ report types', desc: 'Generate in one click' },
            { icon: '🤖', label: 'AI-powered', desc: 'Goals, notes & worksheets' },
          ].map((item) => (
            <motion.div
              key={item.label}
              variants={fadeInUp}
              className="flex flex-col gap-2 p-4 rounded-2xl bg-surface hover:bg-primary-50 hover:border-primary-100 border border-transparent transition-all duration-200 group"
            >
              <span className="text-2xl">{item.icon}</span>
              <span className="text-sm font-semibold text-gray-800 group-hover:text-primary-700 transition-colors">{item.label}</span>
              <span className="text-xs text-gray-400">{item.desc}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
