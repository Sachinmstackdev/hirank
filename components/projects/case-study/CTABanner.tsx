'use client'

import { FC } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

interface CTABannerProps {
  heading: string
  subheading: string
  primaryButtonText: string
  primaryButtonLink: string
}

const CTABanner: FC<CTABannerProps> = ({
  heading,
  subheading,
  primaryButtonText,
  primaryButtonLink
}) => {
  return (
    <section className="py-20 bg-blue-600">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* CTA Content */}
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {heading}
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            {subheading}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Primary Button */}
            <Link
              href={primaryButtonLink}
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-full font-medium hover:bg-blue-50 transition-colors duration-300"
            >
              {primaryButtonText}
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>

            {/* Secondary Button */}
            <Link
              href="/projects"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-full font-medium hover:bg-white hover:text-blue-600 transition-colors duration-300"
            >
              View All Projects
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </Link>
          </div>

          {/* Trust Badges */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-1">100+</div>
              <div className="text-sm text-blue-100">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-1">50+</div>
              <div className="text-sm text-blue-100">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-1">5★</div>
              <div className="text-sm text-blue-100">Client Rating</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-1">24/7</div>
              <div className="text-sm text-blue-100">Support</div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 text-blue-100">
            <div className="flex items-center">
              <svg className="w-6 h-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>hello@hirank.digital</span>
            </div>
            <div className="flex items-center">
              <svg className="w-6 h-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>+91 (123) 456-7890</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTABanner 