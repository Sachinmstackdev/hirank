import type { Metadata } from 'next'
import { Suspense } from 'react'
import Loading from '@/components/Loading'
import ServicesHero from '@/components/services/ServicesHero'
import ServicesList from '@/components/services/ServicesList'
import HowWeWork from '@/components/services/HowWeWork'
import Testimonials from '@/components/home/Testimonials'
import FAQSection from '@/components/services/FAQSection'
import CTABanner from '@/components/services/CTABanner'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

// Metadata for SEO
export const metadata: Metadata = {
  title: 'Professional Digital Services | IDock Solutions',
  description: 'Transform your business with our comprehensive digital services including web development, e-commerce, automation, and performance marketing solutions.',
  openGraph: {
    title: 'Professional Digital Services | IDock Solutions',
    description: 'Comprehensive digital services for modern businesses',
    url: 'https://IDocksolution.com/services',
    siteName: 'IDock Solutions',
    images: [
      {
        url: 'https://IDocksolution.com/services-og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Suspense fallback={<Loading />}>
        <ServicesHero />
        <ServicesList />
        <HowWeWork />
        <Testimonials />
        <FAQSection />
        <CTABanner />
      </Suspense>
      <Footer />
    </main>
  )
} 