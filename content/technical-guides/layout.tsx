import { ReactNode } from 'react'

interface TechnicalGuidesLayoutProps {
  children: ReactNode
}

export default function TechnicalGuidesLayout({ children }: TechnicalGuidesLayoutProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Technical Guides</h1>
      <div className="prose max-w-none">
        {children}
      </div>
    </div>
  )
} 