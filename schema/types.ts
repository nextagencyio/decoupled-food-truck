// Auto-generated TypeScript types from Drupal GraphQL schema.
// Run `decoupled-cli schema sync` to regenerate.

export interface NodeHomepage {
  id: string;
  ctaDescription: { value: string };
  ctaPrimary: string;
  ctaSecondary: string;
  ctaTitle: string;
  featuredItemsTitle: string;
  heroDescription: { value: string };
  heroSubtitle: string;
  heroTitle: string;
  path: string;
  statsItems: any[];
  title: string;
}

export interface ParagraphStatItem {
  id: string;
  label: string;
  number: string;
}

export interface NodeLocationSchedule {
  id: string;
  address: string;
  body: { value: string; summary?: string };
  dayOfWeek: string;
  endTime: string;
  image: { url: string; alt: string; width: number; height: number };
  locationName: string;
  neighborhood: string;
  path: string;
  startTime: string;
  title: string;
}

export interface NodeMenuItem {
  id: string;
  body: { value: string; summary?: string };
  dietaryInfo: string[];
  image: { url: string; alt: string; width: number; height: number };
  isBestseller: boolean;
  menuCategory: any[];
  path: string;
  price: string;
  spiceLevel: string;
  title: string;
}

export interface NodePage {
  id: string;
  body: { value: string; summary?: string };
  path: string;
  title: string;
}
