import { ReactNode } from 'react'

interface IndustryInsightsLayoutProps {
  children: ReactNode
}

export default function IndustryInsightsLayout({ children }: IndustryInsightsLayoutProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Industry Insights</h1>
      <div className="prose max-w-none">
        {children}
      </div>
    </div>
  )
} 