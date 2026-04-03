
export interface ImageVariation {
  name: string
  url: string
  width: number
  height: number
}

export interface DrupalImage {
  url: string
  alt: string
  width?: number
  height?: number
  variations?: ImageVariation[]
}

export interface DrupalNode {
  id: string
  title: string
  path: string
  created: {
    timestamp: number
  }
  changed: {
    timestamp: number
  }
}

export interface DrupalPage extends DrupalNode {
  body?: {
    processed: string
  }
}

export interface DrupalStatItem {
  id: string
  number?: string
  label?: string
}

export interface DrupalHomepage extends DrupalNode {
  heroTitle?: string
  heroSubtitle?: string
  heroDescription?: {
    processed: string
  }
  statsItems?: DrupalStatItem[]
  featuredItemsTitle?: string
  ctaTitle?: string
  ctaDescription?: {
    processed: string
  }
  ctaPrimary?: string
  ctaSecondary?: string
}

export interface HomepageData {
  nodeHomepages: {
    nodes: DrupalHomepage[]
  }
}

// Feature color type
export type FeatureColor = 'blue' | 'green' | 'purple' | 'yellow' | 'red' | 'indigo'
export interface DrupalMenuItem {
  id: string
  title: string
  path?: string
  body?: { processed: string; summary?: string }
  price?: string
  menuCategory?: string
  spiceLevel?: string
  dietaryInfo?: string
  isBestseller?: string
  image?: { url: string; alt: string; width?: number; height?: number; variations?: { name: string; url: string; width: number; height: number }[] }
}

export interface MenuItemsData {
  nodeMenuItems: {
    nodes: DrupalMenuItem[]
  }
}

export interface DrupalLocationSchedule {
  id: string
  title: string
  path?: string
  body?: { processed: string; summary?: string }
  dayOfWeek?: string
  locationName?: string
  address?: string
  startTime?: string
  endTime?: string
  neighborhood?: string
  image?: { url: string; alt: string; width?: number; height?: number; variations?: { name: string; url: string; width: number; height: number }[] }
}

export interface LocationSchedulesData {
  nodeLocationSchedules: {
    nodes: DrupalLocationSchedule[]
  }
}
