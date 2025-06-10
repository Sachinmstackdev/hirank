'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'

// A/B testing variants for headlines and CTAs
const headlines = [
  {
    main: "Transform Your E-Commerce",
    highlight: "Into a Revenue Machine",
    variant: "A"
  },
  {
    main: "Scale Your E-Commerce",
    highlight: "With Proven Strategies",
    variant: "B"
  }
]

const ctaVariants = [
  {
    primary: "Get a Free Growth Audit",
    secondary: "Book a Strategy Call",
    variant: "A"
  },
  {
    primary: "See How We Grow Brands",
    secondary: "Schedule a Discovery Call",
    variant: "B"
  }
]

export default function ServicesHero() {
  // Choose a random variant for A/B testing (in production, use a proper A/B testing solution)
  const [headlineVariant] = useState(headlines[Math.floor(Math.random() * headlines.length)])
  const [ctaVariant] = useState(ctaVariants[Math.floor(Math.random() * ctaVariants.length)])
  
  return (
    <section 
      id="services-hero" 
      className="relative bg-[#f5f8ff] pt-28 sm:pt-32 md:pt-40 pb-20 sm:pb-32 overflow-hidden"
      aria-labelledby="services-heading"
    >
      {/* Background patterns */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Abstract Shapes */}
        <svg 
          className="absolute right-0 top-0 translate-x-1/3 -translate-y-1/4 text-[#4F7DF3]/5" 
          width="800" 
          height="800" 
          viewBox="0 0 800 800" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <circle cx="400" cy="400" r="400" fill="currentColor" />
        </svg>
        <svg 
          className="absolute left-0 bottom-0 -translate-x-1/3 translate-y-1/4 text-[#4F7DF3]/5" 
          width="800" 
          height="800" 
          viewBox="0 0 800 800" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <circle cx="400" cy="400" r="400" fill="currentColor" />
        </svg>
        
        {/* Additional modern shapes */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#4F7DF3]/10 rounded-full blur-3xl" aria-hidden="true"></div>
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-[#4F7DF3]/5 rounded-full blur-3xl" aria-hidden="true"></div>
      </div>

      {/* Hero content with improved structure */}
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Center-aligned hero content without image */}
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-8">
              {/* Badge for visual emphasis */}
              <div className="inline-flex items-center px-4 py-1.5 mb-6 bg-[#4F7DF3]/10 text-[#4F7DF3] border border-[#4F7DF3]/20 rounded-full text-sm font-medium">
                <span className="mr-2 bg-[#4F7DF3] w-2 h-2 rounded-full"></span>
                Full-Service E-Commerce Agency
              </div>
              
              {/* A/B tested Headline with improved hierarchy and SEO */}
              <h1 className="text-3xl sm:text-4xl md:text-[3.25rem] font-medium text-gray-900 leading-[1.2] tracking-tight mb-6">
                <span className="block mb-2">{headlineVariant.main}</span>
                <span className="text-[#4F7DF3]">{headlineVariant.highlight}</span>
              </h1>
              
              {/* Enhanced value proposition with social proof trigger */}
              <p className="text-lg sm:text-xl text-gray-600 mb-4">
                Trusted by 50+ brands to build, optimize, and scale high-converting 
                e-commerce experiences that <span className="font-semibold">outperform the competition</span>.
              </p>
              
              {/* Results-focused subtext with micro-commitment */}
              <p className="text-gray-600 mb-10">
                Our clients see <span className="font-medium text-green-600">30-70% conversion lift</span> within 90 days
              </p>
            </div>
            
            {/* Enhanced CTA section with A/B testing */}
            <div className="flex flex-wrap gap-4 justify-center mb-10">
              <Link 
                href="/contact" 
                className="inline-flex items-center px-8 py-3.5 bg-[#4F7DF3] hover:bg-[#3968e7] text-white font-medium rounded-full transition-all duration-300 shadow-md hover:shadow-lg group"
              >
                {ctaVariant.primary}
                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
              <Link 
                href="#services" 
                className="inline-flex items-center px-8 py-3.5 bg-white hover:bg-gray-100 text-gray-900 border border-gray-200 font-medium rounded-full transition-all duration-300"
              >
                {ctaVariant.secondary}
              </Link>
            </div>
            
            {/* Trust signals */}
            <div className="flex justify-center">
              <div className="max-w-lg">
                <p className="text-sm text-gray-500 mb-3 text-center">Trusted by innovative brands:</p>
                <div className="flex flex-wrap items-center justify-center gap-6">
                  {/* Add 3-5 client logos here (grayscale for design consistency) */}
                  <div className="h-8 w-auto opacity-70 grayscale">
                    <div className="h-8 w-32 bg-gray-200 rounded animate-pulse"></div>
                  </div>
                  <div className="h-8 w-auto opacity-70 grayscale">
                    <div className="h-8 w-24 bg-gray-200 rounded animate-pulse"></div>
                  </div>
                  <div className="h-8 w-auto opacity-70 grayscale">
                    <div className="h-8 w-28 bg-gray-200 rounded animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Scroll cue */}
        <div className="flex justify-center mt-16">
          <Link 
            href="#services" 
            className="flex flex-col items-center text-gray-400 hover:text-gray-900 transition-colors"
            aria-label="Scroll to services section"
          >
            <span className="text-sm mb-2">Explore Our Services</span>
            <motion.div 
              animate={{ y: [0, 10, 0] }} 
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </motion.div>
          </Link>
        </div>
      </div>
    </section>
  )
} 