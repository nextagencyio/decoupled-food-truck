'use client'

import { DrupalHomepage } from '@/lib/types'

interface HeroSectionProps {
  homepageContent: DrupalHomepage | null | undefined
}

export default function HeroSection({ homepageContent }: HeroSectionProps) {
  const title = (homepageContent as any)?.heroTitle || (homepageContent as any)?.title || 'Welcome'
  const subtitle = (homepageContent as any)?.heroSubtitle || ''
  const description = (homepageContent as any)?.heroDescription?.processed || ''

  return (
    <section
      className="relative overflow-hidden"
      style={{ clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)' }}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(https://images.unsplash.com/photo-1565123409695-7b5ef63a2efb?w=1920&q=80&fit=crop)` }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-primary-950/75" />
      {/* Accent diagonal stripe */}
      <div
        className="absolute top-0 right-0 w-1/3 h-full bg-accent-500/10"
        style={{ clipPath: 'polygon(30% 0, 100% 0, 100% 100%, 0 100%)' }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36 lg:py-44">
        <div className="max-w-3xl">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white uppercase tracking-tight mb-6">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xl md:text-2xl text-primary-100 mb-8 max-w-2xl">{subtitle}</p>
          )}
          {description && (
            <div className="text-lg text-primary-200 max-w-2xl mb-8" dangerouslySetInnerHTML={{ __html: description }} />
          )}
          <div className="flex flex-wrap gap-4">
            <a
              href="/menu"
              className="inline-flex items-center px-8 py-4 bg-accent-500 text-white font-display font-bold uppercase tracking-wide rounded-lg hover:bg-accent-400 transition-colors duration-200"
            >
              View Menu
            </a>
            <a
              href="/schedule"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-display font-bold uppercase tracking-wide rounded-lg hover:bg-white hover:text-primary-900 transition-colors duration-200"
            >
              Find Us
            </a>
          </div>
        </div>
      </div>

      {/* Accent line at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 via-accent-400 to-primary-500" />
    </section>
  )
}
