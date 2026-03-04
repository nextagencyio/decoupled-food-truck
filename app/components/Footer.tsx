'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <div className="relative">
      <svg className="absolute -top-px w-full" viewBox="0 0 1440 60" preserveAspectRatio="none" style={{ height: '60px' }}>
        <path d="M0,0 C480,60 960,60 1440,0 L1440,60 L0,60 Z" className="fill-primary-950" />
      </svg>
      <footer className="bg-primary-950 text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="font-display text-2xl font-bold text-accent-400 uppercase tracking-wider mb-4">
                Rolling Flame Kitchen
              </h3>
              <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
                Fire-kissed street food served fresh from our truck. Bold flavors, local ingredients, and a passion for bringing people together over great food.
              </p>
              <div className="flex space-x-4">
                {['Facebook', 'Instagram', 'Twitter'].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="w-10 h-10 rounded-lg bg-primary-900 flex items-center justify-center hover:bg-accent-400 hover:text-primary-950 transition-colors duration-200 text-sm font-bold"
                  >
                    {social.charAt(0)}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-display font-semibold text-white uppercase tracking-wider mb-4">Quick Links</h4>
              <ul className="space-y-3 text-gray-400">
                <li><Link href="/menu" className="hover:text-accent-400 transition-colors">Menu Items</Link></li>
                <li><Link href="/schedule" className="hover:text-accent-400 transition-colors">Location Schedules</Link></li>
                <li><Link href="/about" className="hover:text-accent-400 transition-colors">About</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-display font-semibold text-white uppercase tracking-wider mb-4">Contact</h4>
              <ul className="space-y-3 text-gray-400">
                <li>Follow our truck on social!</li>
                <li>Portland, OR Area</li>
                <li>hello@rollingflame.com</li>
                <li>(555) 123-4567</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-primary-800 mt-12 pt-8 text-center text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} Rolling Flame Kitchen. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
