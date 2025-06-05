import { ReactNode } from 'react'

interface CaseStudiesLayoutProps {
  children: ReactNode
}

export default function CaseStudiesLayout({ children }: CaseStudiesLayoutProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Case Studies</h1>
      <div className="prose max-w-none">
        {children}
      </div>
    </div>
  )
} 