import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import { LeadMagnet } from '@/components/lead-magnet/LeadMagnet'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
})

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta-sans',
})

export const metadata: Metadata = {
  title: {
    template: '%s | HiRank Solutions - E-commerce Development & Digital Marketing Agency',
    default: 'HiRank Solutions - E-commerce Development & Digital Marketing Agency',
  },
  description: 'Professional e-commerce development services in WordPress, MERN Stack, and Shopify. Offering product photography, SEO, PPC, and comprehensive digital marketing solutions.',
  metadataBase: new URL('https://hiranksolution.com'),
  openGraph: {
    title: 'HiRank Solutions - E-commerce Development & Digital Marketing Agency',
    description: 'Professional e-commerce development services in WordPress, MERN Stack, and Shopify. Offering product photography, SEO, PPC, and comprehensive digital marketing solutions.',
    url: 'https://hiranksolution.com',
    siteName: 'HiRank Solutions',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'add-your-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakartaSans.variable}`}>
      <body 
        className="font-sans antialiased bg-white text-gray-900"
        suppressHydrationWarning
      >
        {children}
        <LeadMagnet />
      </body>
    </html>
  )
}
