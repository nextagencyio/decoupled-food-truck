import Link from 'next/link'
import { DrupalLocationSchedule } from '@/lib/types'
import ResponsiveImage from './ResponsiveImage'
import { ArrowRight } from 'lucide-react'

interface LocationScheduleCardProps {
  item: DrupalLocationSchedule
}

export default function LocationScheduleCard({ item }: LocationScheduleCardProps) {
  return (
    <Link
      href={item.path || '#'}
      className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
    >
      {/* Gradient top border */}
      <div className="h-1 bg-gradient-to-r from-primary-600 to-accent-500" />

      <div className="relative h-48 bg-gradient-to-br from-primary-600 to-primary-800">
        {(item as any).image?.url ? (
          <ResponsiveImage
            src={(item as any).image.url}
            alt={(item as any).image.alt || item.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            variations={(item as any).image.variations}
            targetWidth={400}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 text-white/30 text-4xl font-display font-bold">{item.title?.charAt(0)}</div>
          </div>
        )}
      </div>

      <div className="p-6">
        {(item as any).dayOfWeek && (
          <p className="text-sm text-accent-600 font-display font-bold uppercase tracking-wide mb-2">{(item as any).dayOfWeek}</p>
        )}
        <h3 className="font-display text-xl font-bold text-gray-900 uppercase tracking-wide mb-3 group-hover:text-primary-700 transition-colors">
          {item.title}
        </h3>

        {(item as any).body?.processed && (
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {(item as any).body.processed.replace(/<[^>]*>/g, '').substring(0, 150)}
          </p>
        )}

        <div className="flex items-center text-primary-700 font-display font-semibold uppercase tracking-wide text-sm group-hover:text-accent-600 transition-colors">
          Learn more
          <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  )
}
