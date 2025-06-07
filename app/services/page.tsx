import type { Metadata } from 'next'
import { Suspense } from 'react'
import Loading from '@/components/Loading'
import ServicesHero from '@/components/services/ServicesHero'
import ServicesList from '@/components/services/ServicesList'
import HowWeWork from '@/components/services/HowWeWork'
import FAQSection from '@/components/services/FAQSection'
import CTABanner from '@/components/services/CTABanner'
import { Header, Footer } from '@/components/layout/index'

// Generate metadata with structured data for SEO
export function generateMetadata(): Metadata {
  // Base metadata
  const metadata: Metadata = {
    title: 'E-Commerce Growth Services | Custom Development & Marketing Solutions',
    description: 'Transform your e-commerce business with our high-converting development, marketplace optimization, and performance marketing solutions. 30-70% conversion rate improvement.',
    openGraph: {
      title: 'E-Commerce Growth Services | Custom Development & Marketing Solutions',
      description: 'Transform your online store with our results-driven e-commerce services that deliver 30-70% conversion rate improvements',
      url: 'https://IDocksolution.com/services',
      siteName: 'IDock Solutions',
      images: [
        {
          url: 'https://IDocksolution.com/services-og-image.jpg',
          width: 1200,
          height: 630,
          alt: 'E-Commerce Growth Solutions by IDock Solutions',
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'E-Commerce Growth Services | Custom Development & Marketing Solutions',
      description: 'Transform your online store with our results-driven e-commerce services',
      images: ['https://IDocksolution.com/services-og-image.jpg'],
    },
    alternates: {
      canonical: 'https://IDocksolution.com/services',
    },
  }

  // Create the JSON-LD schema for the service page
  const jsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'E-Commerce Growth Services',
    provider: {
      '@type': 'Organization',
      name: 'IDock Solutions',
      url: 'https://IDocksolution.com',
    },
    description: 'Comprehensive e-commerce growth services including custom development, marketplace optimization, and performance marketing with proven results.',
    areaServed: 'Worldwide',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'E-Commerce Services',
      itemListElement: [
        {
          '@type': 'Offer',
          name: 'Custom E-Commerce Development',
          description: 'Build a high-converting store that outperforms the competition',
        },
        {
          '@type': 'Offer',
          name: 'Marketplace Growth Solutions',
          description: 'Optimize your product listings on Amazon, Flipkart, and other marketplaces',
        },
        {
          '@type': 'Offer',
          name: 'Performance Marketing',
          description: 'Data-driven marketing strategies to maximize ROAS and conversions',
        },
      ],
    },
  })

  // Add structured data to metadata
  return {
    ...metadata,
    other: {
      'script:jsonld': jsonLd,
    },
  }
}

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="flex flex-col min-h-screen">
        <Suspense fallback={<Loading />}>
          {/* Core sections with enhanced components for better conversion */}
          <ServicesHero />
          <ServicesList />
          <HowWeWork />
          
          {/* Added strategic CTABanner before FAQ for better conversion flow */}
          <CTABanner />
          
          {/* Enhanced FAQ with better positioning */}
          <FAQSection />
        </Suspense>
      </main>
      <Footer />
    </>
  )
} 