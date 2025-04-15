import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import { LeadMagnet } from '@/components/lead-magnet/LeadMagnet'
import Script from 'next/script'

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
    <html lang="en" className={`${inter.variable} ${plusJakartaSans.variable} scroll-smooth`}>
      <head>
        {/* Force scroll top on page load/refresh */}
        <script 
          dangerouslySetInnerHTML={{
            __html: `
              if (history.scrollRestoration) {
                history.scrollRestoration = 'manual';
              }
              window.scrollTo(0, 0);
            `
          }} 
        />
      </head>
      <body 
        className="font-sans antialiased bg-white text-gray-900"
        suppressHydrationWarning
      >
        {children}
        <LeadMagnet />
        
        {/* More robust script to force scroll to top */}
        <Script id="scroll-to-top" strategy="afterInteractive">
          {`
            // Set scroll restoration to manual immediately
            if (history.scrollRestoration) {
              history.scrollRestoration = 'manual';
            }
            
            // Force scroll to top on page load
            window.addEventListener('load', function() {
              setTimeout(() => {
                window.scrollTo(0, 0);
              }, 0);
            });
            
            // Handle refresh and navigation
            document.addEventListener('DOMContentLoaded', function() {
              setTimeout(() => {
                window.scrollTo(0, 0);
              }, 0);
            });
            
            // Also handle Next.js route changes
            if (typeof window !== 'undefined') {
              if (window.next && window.next.router) {
                window.next.router.events.on('routeChangeComplete', () => {
                  window.scrollTo(0, 0);
                });
              }
            }
          `}
        </Script>
      </body>
    </html>
  )
}
