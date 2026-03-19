'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, Sparkles } from 'lucide-react'
import { cn } from '@/lib/utils'

const navLinks = [
  {
    label: 'Features',
    href: '#features',
    children: [
      { label: 'Data Tracking', href: '#features', desc: 'Track every goal and trial' },
      { label: 'AI Goals', href: '#ai-features', desc: 'Generate IEP goals with AI' },
      { label: 'Reports', href: '#features', desc: '20+ built-in report types' },
      { label: 'Scheduling', href: '#features', desc: 'Manage services & billing' },
    ],
  },
  { label: 'AI', href: '#ai-features' },
  { label: 'Mobile', href: '#mobile' },
  { label: 'Security', href: '#security' },
  { label: 'FAQ', href: '#faq' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled
            ? 'bg-white/90 backdrop-blur-xl border-b border-gray-100/80 shadow-soft py-3'
            : 'bg-transparent py-5'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2.5 group">
              <div className="w-8 h-8 rounded-xl bg-gradient-primary flex items-center justify-center shadow-medium group-hover:shadow-glow transition-shadow duration-300">
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <span className="font-bold text-lg text-gray-900 tracking-tight">
                AbleSpace
              </span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => link.children && setActiveDropdown(link.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <a
                    href={link.href}
                    className="flex items-center gap-1 px-4 py-2 rounded-xl text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-all duration-150"
                  >
                    {link.label}
                    {link.children && (
                      <ChevronDown
                        size={14}
                        className={cn(
                          'transition-transform duration-200',
                          activeDropdown === link.label && 'rotate-180'
                        )}
                      />
                    )}
                  </a>

                  {/* Dropdown */}
                  <AnimatePresence>
                    {link.children && activeDropdown === link.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.97 }}
                        transition={{ duration: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="absolute top-full left-0 mt-2 w-56 bg-white rounded-2xl border border-gray-100 shadow-large p-2 origin-top-left"
                      >
                        {link.children.map((child) => (
                          <a
                            key={child.label}
                            href={child.href}
                            className="flex flex-col px-3 py-2.5 rounded-xl hover:bg-primary-50 group transition-colors duration-150"
                          >
                            <span className="text-sm font-semibold text-gray-800 group-hover:text-primary transition-colors">
                              {child.label}
                            </span>
                            <span className="text-xs text-gray-400 mt-0.5">{child.desc}</span>
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Desktop CTAs */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="#"
                className="text-sm font-medium text-gray-600 hover:text-gray-900 px-3 py-2 transition-colors"
              >
                Log in
              </a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 px-4 py-2.5 bg-primary text-white text-sm font-semibold rounded-2xl shadow-medium hover:shadow-glow hover:bg-primary-700 transition-all duration-200"
              >
                <Sparkles size={14} />
                Get Demo
              </motion.a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded-xl text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[60px] z-40 bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-large md:hidden"
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 rounded-2xl text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3 mt-1 border-t border-gray-100 flex flex-col gap-2">
                <a
                  href="#"
                  className="px-4 py-3 rounded-2xl text-base font-medium text-gray-700 hover:bg-gray-50 transition-colors text-center"
                >
                  Log in
                </a>
                <a
                  href="#"
                  className="px-4 py-3.5 bg-primary text-white font-semibold rounded-2xl text-center shadow-medium"
                >
                  Get Demo
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
