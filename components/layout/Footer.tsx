import { Twitter, Linkedin, Youtube, Mail, Shield, Lock } from 'lucide-react'

const footerLinks = {
  Product: [
    { label: 'Data Tracking', href: '#' },
    { label: 'Goal Management', href: '#' },
    { label: 'AI Features', href: '#ai-features' },
    { label: 'Reports & Analytics', href: '#' },
    { label: 'Scheduling', href: '#' },
    { label: 'Billing', href: '#' },
  ],
  Resources: [
    { label: 'Documentation', href: '#' },
    { label: 'Help Center', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Webinars', href: '#' },
    { label: 'Case Studies', href: '#' },
    { label: 'Status', href: '#' },
  ],
  Company: [
    { label: 'About Us', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Press', href: '#' },
    { label: 'Partners', href: '#' },
    { label: 'Contact', href: '#' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'HIPAA Policy', href: '#' },
    { label: 'FERPA Policy', href: '#' },
    { label: 'Cookie Policy', href: '#' },
  ],
}

const socials = [
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Youtube, href: '#', label: 'YouTube' },
  { icon: Mail, href: '#', label: 'Email' },
]

const complianceBadges = ['HIPAA Compliant', 'FERPA Compliant', 'ISO 27001', 'SOC 2 Type II']

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-1 flex flex-col gap-6">
            <a href="#" className="flex items-center gap-2.5 w-fit">
              <div className="w-8 h-8 rounded-xl bg-gradient-primary flex items-center justify-center">
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <span className="font-bold text-lg text-white">AbleSpace</span>
            </a>
            <p className="text-sm leading-relaxed text-gray-500">
              The AI-powered IEP platform built for special education teams. Track smarter. Collaborate better.
            </p>
            <div className="flex items-center gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-xl bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary transition-all duration-200"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading} className="flex flex-col gap-4">
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
                {heading}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-500 hover:text-white transition-colors duration-150"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} AbleSpace, Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-2 flex-wrap justify-center">
            {complianceBadges.map((badge) => (
              <span
                key={badge}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-gray-800 text-xs text-gray-400 border border-gray-700"
              >
                <Shield size={11} className="text-emerald-500" />
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
