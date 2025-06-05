import { Metadata } from 'next'
import { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Insights & Strategies | IDock Blog',
  description: 'Expert tips, case studies and strategies from India\'s leading automation and e-commerce agency. Grow your online presence with our proven methods.',
  openGraph: {
    title: 'Insights & Strategies | IDock Blog',
    description: 'Expert tips, case studies and strategies from India\'s leading automation and e-commerce agency.',
    url: 'https://IDock.com/blog',
    siteName: 'IDock',
    images: [
      {
        url: 'https://IDock.com/og-blog.jpg',
        width: 1200,
        height: 630,
        alt: 'IDock Blog',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
}

export default function BlogLayout({ children }: { children: ReactNode }) {
  return (
    <main className="min-h-screen bg-gray-50">
      {children}
    </main>
  )
} 