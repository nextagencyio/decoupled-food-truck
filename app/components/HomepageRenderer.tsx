'use client'

import Link from 'next/link'
import Header from './Header'
import HeroSection from './HeroSection'
import StatsSection from './StatsSection'
import CTASection from './CTASection'
import Footer from './Footer'
import ErrorBoundary from './ErrorBoundary'
import { DrupalHomepage } from '@/lib/types'
import { Truck, Flame, UtensilsCrossed, MapPin, Clock, Star } from 'lucide-react'

interface HomepageRendererProps {
  homepageContent: DrupalHomepage | null | undefined
}

const whyFeatures = [
  { icon: Truck, title: 'Mobile & Fresh', description: 'We bring the kitchen to you. Hot, fresh food made right at your location.' },
  { icon: Flame, title: 'Fire-Grilled', description: 'Real flame cooking gives every dish that signature smoky, charred flavor.' },
  { icon: UtensilsCrossed, title: 'Scratch-Made', description: 'Every sauce, marinade, and tortilla is handmade daily with quality ingredients.' },
  { icon: MapPin, title: 'Local Favorites', description: 'We source from local farms and markets to keep flavors fresh and seasonal.' },
  { icon: Clock, title: 'Fast & Friendly', description: 'Street food speed with restaurant quality. Ready in minutes, not hours.' },
  { icon: Star, title: 'Community Love', description: 'Rated #1 food truck three years running by local food lovers.' },
]

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=600&q=80&fit=crop', alt: 'Tacos being prepared' },
  { src: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=600&q=80&fit=crop', alt: 'Food truck service' },
  { src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80&fit=crop', alt: 'Grilled dishes' },
  { src: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&q=80&fit=crop', alt: 'Street food platter' },
]

export default function HomepageRenderer({ homepageContent }: HomepageRendererProps) {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <ErrorBoundary>
        <HeroSection homepageContent={homepageContent} />
      </ErrorBoundary>

      <ErrorBoundary>
        <StatsSection homepageContent={homepageContent} />
      </ErrorBoundary>

      {/* Featured Menu Items Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary-900 uppercase tracking-tight mb-4">
              Fan Favorites
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              The dishes that keep our regulars coming back for more, every single time.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Flame-Kissed Tacos', desc: 'Char-grilled protein with house salsa, pickled onion, and cilantro-lime crema on fresh tortillas.', href: '/menu' },
              { name: 'Loaded Fire Bowl', desc: 'Smoky rice bowl loaded with grilled veggies, your choice of protein, and our signature flame sauce.', href: '/menu' },
              { name: 'Street Corn Elote', desc: 'Fire-roasted sweet corn slathered in chili-lime mayo, cotija cheese, and tajin seasoning.', href: '/menu' },
            ].map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                {/* Gradient top border */}
                <div className="h-1 bg-gradient-to-r from-primary-500 to-accent-400" />
                <div className="p-8">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center mb-5">
                    {i === 0 && <Flame className="w-7 h-7 text-white" />}
                    {i === 1 && <UtensilsCrossed className="w-7 h-7 text-white" />}
                    {i === 2 && <Star className="w-7 h-7 text-white" />}
                  </div>
                  <h3 className="font-display text-xl font-bold text-gray-900 uppercase tracking-wide mb-3 group-hover:text-primary-700 transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{item.desc}</p>
                  <span className="text-primary-700 font-display font-semibold uppercase tracking-wide text-sm group-hover:text-accent-600 transition-colors">
                    View Menu &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Rolling Flame Section */}
      <section className="relative py-24 bg-white overflow-hidden">
        {/* Angled top separator */}
        <div
          className="absolute top-0 left-0 right-0 h-20 bg-gray-100"
          style={{ clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 100%)' }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-14">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary-900 uppercase tracking-tight mb-4">
              Why Rolling Flame
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              More than a food truck. A flame-fueled mission to serve bold, honest street food.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyFeatures.map((feature, i) => {
              const Icon = feature.icon
              return (
                <div key={i} className="text-center p-6 group">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-gray-900 uppercase tracking-wide mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="relative py-20 bg-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary-900 uppercase tracking-tight mb-4">
              From Our Kitchen
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              A glimpse at the fire, the flavors, and the food that fuels the flame.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((img, i) => (
              <div
                key={i}
                className="relative group overflow-hidden rounded-xl aspect-square"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${img.src})` }}
                />
                {/* Angled overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary-950/70 via-primary-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white font-display font-semibold uppercase tracking-wide text-sm">{img.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ErrorBoundary>
        <CTASection homepageContent={homepageContent} />
      </ErrorBoundary>

      <Footer />
    </div>
  )
}
