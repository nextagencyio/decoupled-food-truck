import { Metadata } from 'next'
import { headers } from 'next/headers'
import { getServerApolloClient } from '@/lib/apollo-client'
import { GET_LOCATION_SCHEDULES } from '@/lib/queries'
import { LocationSchedulesData } from '@/lib/types'
import Header from '../components/Header'
import Footer from '../components/Footer'
import LocationScheduleCard from '../components/LocationScheduleCard'

export const revalidate = 3600
export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Location Schedules | Rolling Flame Kitchen',
  description: 'Find out where Rolling Flame Kitchen will be parked next.',
}

async function getLocationSchedules() {
  try {
    const requestHeaders = await headers()
    const apolloClient = getServerApolloClient(requestHeaders)
    const { data } = await apolloClient.query<LocationSchedulesData>({
      query: GET_LOCATION_SCHEDULES,
      variables: { first: 50 },
      fetchPolicy: 'cache-first',
    })
    return data?.nodeLocationSchedules?.nodes || []
  } catch (error) {
    console.error('Error fetching location schedules:', error)
    return []
  }
}

export default async function LocationSchedulesPage() {
  const items = await getLocationSchedules()

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <section
        className="relative overflow-hidden"
        style={{ clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)' }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary-800 via-primary-900 to-primary-950" />
        <div
          className="absolute top-0 right-0 w-1/3 h-full bg-accent-500/10"
          style={{ clipPath: 'polygon(30% 0, 100% 0, 100% 100%, 0 100%)' }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="text-center">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white uppercase tracking-tight mb-6">
              Find Our Truck
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Check our weekly schedule and find Rolling Flame Kitchen in your neighborhood.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <h2 className="text-2xl font-display font-semibold text-gray-600 mb-2 uppercase tracking-wide">No Location Schedules Yet</h2>
              <p className="text-gray-500">Location schedules will appear here once content is imported.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {items.map((item) => (
                <LocationScheduleCard key={item.id} item={item} />
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  )
}
