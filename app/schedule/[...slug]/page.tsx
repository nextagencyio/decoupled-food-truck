import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { headers } from 'next/headers'
import Link from 'next/link'
import { getServerApolloClient } from '@/lib/apollo-client'
import { GET_LOCATION_SCHEDULE_BY_PATH } from '@/lib/queries'
import { DrupalLocationSchedule } from '@/lib/types'
import Header from '../../components/Header'
import ResponsiveImage from '../../components/ResponsiveImage'
import { ArrowLeft } from 'lucide-react'

export const revalidate = 300
export const dynamic = 'force-dynamic'

interface PageProps {
  params: Promise<{ slug: string[] }>
}

interface LocationScheduleByPathData {
  route: {
    entity: DrupalLocationSchedule
  } | null
}

async function getLocationSchedule(path: string): Promise<DrupalLocationSchedule | null> {
  try {
    const requestHeaders = await headers()
    const apolloClient = getServerApolloClient(requestHeaders)
    const { data } = await apolloClient.query<LocationScheduleByPathData>({
      query: GET_LOCATION_SCHEDULE_BY_PATH,
      variables: { path },
      fetchPolicy: 'cache-first',
    })
    return data?.route?.entity || null
  } catch (error) {
    console.error('Error fetching location schedule:', error)
    return null
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const path = `/schedule/${slug.join('/')}`
  const item = await getLocationSchedule(path)

  if (!item) {
    return { title: 'Location Schedule Not Found | Food Truck' }
  }

  return {
    title: `${item.title} | Food Truck`,
    description: ((item as any).body?.processed ? (item as any).body.processed.replace(/<[^>]*>/g, '').substring(0, 160) : '') || `Learn more about ${item.title}.`,
  }
}

export default async function LocationScheduleDetailPage({ params }: PageProps) {
  const { slug } = await params
  const path = `/schedule/${slug.join('/')}`
  const item = await getLocationSchedule(path)

  if (!item) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <section className="bg-gradient-to-br from-red-900 via-red-800 to-red-900 text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/schedule"
            className="inline-flex items-center text-red-200 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Location Schedules
          </Link>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            {item.title}
          </h1>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              {(item as any).image?.url && (
                <div className="relative h-64 md:h-96 rounded-xl overflow-hidden shadow-lg mb-8">
                  <ResponsiveImage
                    src={(item as any).image.url}
                    alt={(item as any).image.alt || item.title}
                    fill
                    className="object-cover"
                    variations={(item as any).image.variations}
                    targetWidth={800}
                  />
                </div>
              )}

              {(item as any).body?.processed && (
                <div className="bg-white rounded-xl shadow-sm p-8">
                  <div
                    className="prose prose-lg max-w-none"
                    dangerouslySetInnerHTML={{ __html: (item as any).body.processed }}
                  />
                </div>
              )}
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Details</h3>
                <dl className="space-y-4">
                  {(item as any).dayOfWeek && (
                    <div>
                      <dt className="text-sm text-gray-500">Day of Week</dt>
                      <dd className="font-semibold text-gray-900">{(item as any).dayOfWeek}</dd>
                    </div>
                  )}
                  {(item as any).locationName && (
                    <div>
                      <dt className="text-sm text-gray-500">Location Name</dt>
                      <dd className="font-semibold text-gray-900">{(item as any).locationName}</dd>
                    </div>
                  )}
                  {(item as any).address && (
                    <div>
                      <dt className="text-sm text-gray-500">Address</dt>
                      <dd className="font-semibold text-gray-900">{(item as any).address}</dd>
                    </div>
                  )}
                  {(item as any).startTime && (
                    <div>
                      <dt className="text-sm text-gray-500">Start Time</dt>
                      <dd className="font-semibold text-gray-900">{(item as any).startTime}</dd>
                    </div>
                  )}
                  {(item as any).endTime && (
                    <div>
                      <dt className="text-sm text-gray-500">End Time</dt>
                      <dd className="font-semibold text-gray-900">{(item as any).endTime}</dd>
                    </div>
                  )}
                  {(item as any).neighborhood && (
                    <div>
                      <dt className="text-sm text-gray-500">Neighborhood</dt>
                      <dd className="font-semibold text-gray-900">{(item as any).neighborhood}</dd>
                    </div>
                  )}
                </dl>
                <div className="mt-8">
                  <Link
                    href="/contact"
                    className="block w-full text-center px-6 py-3 bg-red-700 text-white rounded-lg font-bold hover:bg-red-600 transition-colors"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
