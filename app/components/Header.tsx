'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import clsx from 'clsx'
import { Menu, X, Flame, Phone, Mail, Clock } from 'lucide-react'

const navigationItems = [
  { name: 'Home', href: '/' },
  { name: 'Menu Items', href: '/menu' },
  { name: 'Location Schedules', href: '/schedule' },
  { name: 'About', href: '/about' },
]

export default function Header() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [bannerHeight, setBannerHeight] = useState(0)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const banner = document.querySelector('[class*="bg-amber-500"]')
    if (banner) {
      setBannerHeight(banner.getBoundingClientRect().height)
      const observer = new MutationObserver(() => {
        if (!document.querySelector('[class*="bg-amber-500"]')) setBannerHeight(0)
      })
      observer.observe(document.body, { childList: true, subtree: true })
      return () => { observer.disconnect() }
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const getActiveTab = () => {
    if (pathname === '/') return 'Home'
    for (const item of navigationItems) {
      if (item.href !== '/' && pathname.startsWith(item.href)) {
        return item.name
      }
    }
    return null
  }

  const activeTab = getActiveTab()

  return (
    <header
      className={clsx(
        'sticky z-50 transition-shadow duration-300',
        scrolled && 'shadow-lg'
      )}
      style={{ top: `${bannerHeight}px` }}
    >
      {/* Utility Bar */}
      <div className="bg-primary-900 text-white text-xs py-1.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="hidden sm:flex items-center space-x-4">
              <span className="flex items-center gap-1">
                <Phone className="w-3 h-3" />
                (555) 123-4567
              </span>
              <span className="flex items-center gap-1">
                <Mail className="w-3 h-3" />
                hello@rollingflame.com
              </span>
            </div>
            <div className="flex items-center gap-1 ml-auto">
              <Clock className="w-3 h-3" />
              <span>Tue-Sun: 11AM-9PM | Catering Available</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity duration-200">
              <div className="flex-shrink-0 w-10 h-10 bg-primary-900 rounded-lg flex items-center justify-center" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)' }}>
                <Flame className="w-6 h-6 text-accent-400" />
              </div>
              <span className="font-display text-lg font-bold text-primary-900 uppercase tracking-wide hidden sm:block">
                Rolling Flame Kitchen
              </span>
            </Link>

            <nav className="hidden lg:flex items-center space-x-1">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={clsx(
                    'px-4 py-2 rounded-lg text-sm font-display font-medium uppercase tracking-wide transition-colors',
                    activeTab === item.name
                      ? 'bg-primary-50 text-primary-900'
                      : 'text-gray-600 hover:text-primary-900 hover:bg-gray-50'
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            <div className="flex items-center space-x-4">
              <Link
                href="/contact"
                className="hidden sm:inline-flex items-center bg-accent-500 text-white px-5 py-2 rounded-lg hover:bg-accent-400 transition-colors duration-200 font-display font-bold text-sm uppercase tracking-wide"
              >
                Order Now
              </Link>

              <button
                type="button"
                className="lg:hidden inline-flex items-center justify-center p-2 rounded-lg text-gray-600 hover:text-primary-900 hover:bg-gray-100"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <span className="sr-only">Open menu</span>
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {mobileMenuOpen && (
            <div className="lg:hidden border-t border-gray-200 py-4">
              <nav className="flex flex-col space-y-1">
                {navigationItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={clsx(
                      'px-4 py-3 rounded-lg text-sm font-display font-medium uppercase tracking-wide transition-colors',
                      activeTab === item.name
                        ? 'bg-primary-50 text-primary-900'
                        : 'text-gray-600 hover:text-primary-900 hover:bg-gray-50'
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="mx-4 mt-2 text-center bg-accent-500 text-white px-5 py-3 rounded-lg font-display font-bold text-sm uppercase tracking-wide"
                >
                  Order Now
                </Link>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
