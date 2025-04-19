'use client'

import Link from 'next/link'
import { FadeIn } from './animations'

interface CTAProps {
  heading: string
  subheading?: string
  primaryButtonText: string
  primaryButtonLink: string
  secondaryButtonText?: string
  secondaryButtonLink?: string
}

export default function CTA({
  heading,
  subheading,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
}: CTAProps) {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6">
            {heading}
          </h2>
          
          {subheading && (
            <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
              {subheading}
            </p>
          )}
          
          <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center">
            <Link 
              href={primaryButtonLink}
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white text-blue-600 font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-blue-50"
            >
              {primaryButtonText}
            </Link>
            
            {secondaryButtonText && secondaryButtonLink && (
              <Link 
                href={secondaryButtonLink}
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-transparent text-white border border-white/30 backdrop-blur-sm font-medium hover:bg-white/10 transition-all duration-300"
              >
                {secondaryButtonText}
              </Link>
            )}
          </div>
        </FadeIn>
      </div>
    </section>
  )
} 