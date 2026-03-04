'use client'

import { DrupalHomepage } from '@/lib/types'

interface CTASectionProps {
  homepageContent: DrupalHomepage | null | undefined
}

export default function CTASection({ homepageContent }: CTASectionProps) {
  const title = (homepageContent as any)?.ctaTitle || 'Get in Touch'
  const description = (homepageContent as any)?.ctaDescription?.processed || ''
  const primaryLabel = (homepageContent as any)?.ctaPrimary || 'Order Now'
  const secondaryLabel = (homepageContent as any)?.ctaSecondary || 'View Menu'

  return (
    <section
      className="relative overflow-hidden"
      style={{ clipPath: 'polygon(0 5%, 100% 0, 100% 100%, 0 100%)' }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary-800 via-primary-900 to-primary-950" />
      <div
        className="absolute top-0 right-0 w-1/3 h-full bg-accent-500/10"
        style={{ clipPath: 'polygon(30% 0, 100% 0, 100% 100%, 0 100%)' }}
      />
      {/* Accent stripe */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-400 via-primary-400 to-accent-400" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center">
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white uppercase tracking-tight mb-4">
          {title}
        </h2>
        {description && (
          <div className="text-primary-200 mb-8 max-w-2xl mx-auto text-lg" dangerouslySetInnerHTML={{ __html: description }} />
        )}
        <div className="flex justify-center gap-4 flex-wrap">
          <a href="/contact" className="px-8 py-4 bg-accent-500 text-white rounded-lg hover:bg-accent-400 transition-colors font-display font-bold uppercase tracking-wide">
            {primaryLabel}
          </a>
          <a href="/menu" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-primary-900 transition-colors font-display font-bold uppercase tracking-wide">
            {secondaryLabel}
          </a>
        </div>
      </div>
    </section>
  )
}
