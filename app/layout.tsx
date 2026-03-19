import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'AbleSpace — AI-Powered IEP Platform for Special Educators',
  description:
    'Track data, generate AI goals, write notes, and collaborate — all in one place. Trusted by 20,000+ special education professionals. HIPAA & FERPA compliant.',
  keywords: [
    'IEP tracking',
    'special education software',
    'AI goal generation',
    'HIPAA compliant',
    'FERPA compliant',
    'special ed platform',
  ],
  openGraph: {
    title: 'AbleSpace — AI-Powered IEP Platform',
    description: 'The smarter way to manage IEPs. Trusted by 20,000+ special educators.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">{children}</body>
    </html>
  )
}
