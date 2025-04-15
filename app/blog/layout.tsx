import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Insights & Strategies | HiRank Blog',
  description: 'Expert tips, case studies and strategies from India\'s leading automation and e-commerce agency. Grow your online presence with our proven methods.',
  openGraph: {
    title: 'Insights & Strategies | HiRank Blog',
    description: 'Expert tips, case studies and strategies from India\'s leading automation and e-commerce agency.',
    url: 'https://hirank.com/blog',
    siteName: 'HiRank',
    images: [
      {
        url: 'https://hirank.com/og-blog.jpg',
        width: 1200,
        height: 630,
        alt: 'HiRank Blog',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
    </>
  )
} 