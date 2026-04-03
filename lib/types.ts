export type SiteType = 'portfolio' | 'business' | 'saas' | 'blog' | 'agency' | 'ecommerce'
export type SectionType = 'hero' | 'features' | 'about' | 'services' | 'portfolio' | 'testimonials' | 'pricing' | 'contact' | 'cta' | 'team' | 'faq'

export interface ColorPalette {
  primary: string
  secondary: string
  accent: string
  background: string
  surface: string
  text: string
  textMuted: string
}

export interface Typography {
  headingFont: string
  bodyFont: string
  baseSize: string
}

export interface SectionContent {
  headline?: string
  subheadline?: string
  body?: string
  cta?: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
  items?: Array<{ title: string; description: string; icon?: string }>
  list?: string[]
}

export interface Section {
  id: string
  type: SectionType
  order: number
  content: SectionContent
}

export interface WebsiteSchema {
  siteName: string
  tagline: string
  siteType: SiteType
  description: string
  palette: ColorPalette
  typography: Typography
  sections: Section[]
  metadata: {
    title: string
    description: string
    keywords: string[]
  }
}

export interface Version {
  id: string
  number: number
  createdAt: string
  prompt: string
  schema: WebsiteSchema
  changeDescription?: string
}

export interface Project {
  id: string
  name: string
  type: 'website'
  createdAt: string
  updatedAt: string
  currentVersionId: string
  versions: Version[]
}
