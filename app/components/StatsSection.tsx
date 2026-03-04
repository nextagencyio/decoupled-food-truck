'use client'

import { DrupalHomepage } from '@/lib/types'

interface StatsSectionProps {
  homepageContent: DrupalHomepage | null | undefined
}

export default function StatsSection({ homepageContent }: StatsSectionProps) {
  const stats = (homepageContent as any)?.stats || (homepageContent as any)?.statsItems || []
  if (!stats || stats.length === 0) return null

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat: any, i: number) => (
            <div key={stat.id || i} className="relative">
              <div className="font-display text-3xl md:text-4xl font-bold bg-gradient-to-r from-accent-500 to-primary-600 bg-clip-text text-transparent">
                {stat.value || stat.statValue}
              </div>
              <div className="text-gray-600 mt-1 font-display uppercase tracking-wide text-sm">
                {stat.label || stat.statLabel || stat.title}
              </div>
              {/* Angled separator */}
              {i < stats.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-gray-200 rotate-12" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
