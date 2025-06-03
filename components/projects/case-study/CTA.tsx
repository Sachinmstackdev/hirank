'use client'

import { FC } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export interface CTAProps {
  heading: string;
  subheading: string;
  primaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  trustPoints?: string[];
}

const CTA: FC<CTAProps> = ({
  heading = "Ready to Transform Your Business?",
  subheading = "Let's discuss how we can help you achieve similar results",
  primaryButtonText = "Start Your Project",
  primaryButtonLink = "/contact",
  secondaryButtonText,
  secondaryButtonLink,
  trustPoints = []
}) => {
  return (
    <section className="bg-gradient-to-br from-gray-900 to-blue-900 py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/dots-pattern.svg')] bg-repeat opacity-5 z-0"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full filter blur-3xl opacity-10"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-500 rounded-full filter blur-3xl opacity-10"></div>
      
      <div className="container mx-auto px-6 md:px-8 lg:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white leading-tight">{heading}</h2>
          <p className="text-lg text-blue-100 mb-12 mx-auto max-w-3xl leading-relaxed">{subheading}</p>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center mb-16">
            <Link
              href={primaryButtonLink}
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-white text-blue-900 font-semibold shadow-lg hover:bg-blue-50 transform hover:translate-y-[-2px] transition-all duration-300"
            >
              {primaryButtonText}
              <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            
            {secondaryButtonText && secondaryButtonLink && (
              <Link
                href={secondaryButtonLink}
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-transparent text-white border border-white/30 font-semibold hover:bg-white/10 transform hover:translate-y-[-2px] transition-all duration-300"
              >
                {secondaryButtonText}
              </Link>
            )}
          </div>
          
          {trustPoints.length > 0 && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col md:flex-row justify-center gap-8 text-sm text-blue-100"
            >
              {trustPoints.map((point, index) => (
                <div key={index} className="flex items-center">
                  <svg className="h-5 w-5 mr-3 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{point}</span>
                </div>
              ))}
            </motion.div>
          )}
          
          {/* Floating clients */}
          <div className="mt-16 flex items-center justify-center">
            <div className="text-gray-400 text-sm mr-4">Trusted by:</div>
            <div className="flex items-center space-x-6">
              <div className="text-white/40 font-semibold">Brand 1</div>
              <div className="text-white/40 font-semibold">Brand 2</div>
              <div className="text-white/40 font-semibold">Brand 3</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTA 