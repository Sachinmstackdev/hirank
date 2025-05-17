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
    template: '%s | IDock Solutions - E-commerce Development & Digital Marketing Agency',
    default: 'IDock Solutions - E-commerce Development & Digital Marketing Agency',
  },
  description: 'Professional e-commerce development services in WordPress, MERN Stack, and Shopify. Offering product photography, SEO, PPC, and comprehensive digital marketing solutions.',
  metadataBase: new URL('https://IDocksolution.com'),
  openGraph: {
    title: 'IDock Solutions - E-commerce Development & Digital Marketing Agency',
    description: 'Professional e-commerce development services in WordPress, MERN Stack, and Shopify. Offering product photography, SEO, PPC, and comprehensive digital marketing solutions.',
    url: 'https://IDocksolution.com',
    siteName: 'IDock Solutions',
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
            
            // Safer way to handle Next.js route changes
            // The App Router in Next.js 13+ uses a different approach for navigation events
            if (typeof window !== 'undefined') {
              // Wait for the document to be fully loaded
              document.addEventListener('DOMContentLoaded', () => {
                // Add navigation observer for modern SPA behavior
                const navigationObserver = new MutationObserver(() => {
                  window.scrollTo(0, 0);
                });
                
                // Observe changes to the main content area
                const contentContainer = document.getElementById('__next') || document.body;
                if (contentContainer) {
                  navigationObserver.observe(contentContainer, { 
                    childList: true,
                    subtree: true 
                  });
                }
              });
            }
          `}
        </Script>
      </body>
    </html>
  )
}
