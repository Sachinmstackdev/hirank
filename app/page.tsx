import { Suspense } from 'react'
import Hero from '@/components/home/Hero'
import About from '@/components/home/About'
import Services from '@/components/home/Services'
import Portfolio from '@/components/home/Portfolio'
import WhyChooseUs from '@/components/home/WhyChooseUs'
import Testimonials from '@/components/home/Testimonials'
import FAQSection from '@/components/home/FAQSection'
import CTASection from '@/components/home/CTASection'
import Loading from '@/components/Loading'
import { Header, Footer } from '@/components/layout/index'
import type { Metadata } from 'next'
import { testSupabaseConnection } from '@/lib/supabaseTest'
  
// Metadata for SEO
export const metadata: Metadata = {
  title: 'IDock Solutions | E-commerce Development & Digital Marketing Agency',
  description: 'Transform your business with IDock Solutions. Expert e-commerce development using WordPress, MERN & Shopify. Complete digital marketing solutions including SEO, PPC & Social Media.',
  openGraph: {
    title: 'IDock Solutions | E-commerce Development & Digital Marketing Agency',
    description: 'Expert e-commerce development and digital marketing solutions',
    url: 'https://IDocksolution.com',
    siteName: 'IDock Solutions',
    images: [
      {
        url: 'https://IDocksolution.com/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}

export default async function Home() {
  // Test Supabase connection
  const isConnected = await testSupabaseConnection()
  console.log('Supabase connection test result:', isConnected)

  return (
    <>
      <Header />
      <main className="flex-1">
        <Suspense fallback={<Loading />}>
          <Hero />
          <About />
          <Services />
          <Portfolio />
          <WhyChooseUs />
          <Testimonials />
          <FAQSection />
          <CTASection />
        </Suspense>
      </main>
      <Footer />
    </>
  )
}
