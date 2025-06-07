import { MDXRemoteSerializeResult } from 'next-mdx-remote'

export interface Challenge {
  title: string
  description: string
  beforeState?: string
  icon?: string
}

export interface Solution {
  title: string
  description: string
  icon?: string
}

export interface Technology {
  name: string
  icon?: string
}

export interface Outcome {
  title: string
  value: string
  description?: string
}

export interface ProcessStep {
  title: string
  description: string
  outcomeText?: string
  icon?: string
}

export interface ExecutiveSummary {
  title: string
  description: string
}

export interface Testimonial {
  name: string
  role: string
  company: string
  image: string
  quote: string
}

export interface MiniTestimonial {
  name: string
  role: string
  quote: string
}

export interface RelatedCaseStudy {
  title: string
  description: string
  image: string
  slug: string
}

export interface ProjectData {
  title: string
  subtitle: string
  description: string
  tagline: string
  clientName: string
  industry: string
  timeframe: string
  heroImage: string
  logoImage?: string
  liveUrl: string
  executiveSummary: ExecutiveSummary[]
  clientDescription: string
  challenges: Challenge[]
  approach: string
  solutions: Solution[]
  technologies: Technology[]
  process: ProcessStep[]
  outcomes: Outcome[]
  keyTakeaways: string[]
  galleryImages: string[]
  testimonial: Testimonial
  relatedCaseStudies: RelatedCaseStudy[]
  miniTestimonials: MiniTestimonial[]
}

// This is the simplified version used in the project listing
export interface ProjectListItem {
  id: number
  title: string
  tagline: string
  category: string
  image: string
  technologies: string[]
  client: string
  slug: string
  website?: string
  challenge: string
  solution: string
  results: string
  description: string
} 