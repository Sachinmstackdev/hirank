'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function CTABanner() {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-br from-blue-600 to-indigo-700 text-white overflow-hidden">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <svg 
            className="absolute right-0 top-0 translate-x-1/3 -translate-y-1/3 text-white/5" 
            width="800" 
            height="800" 
            viewBox="0 0 800 800" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="400" cy="400" r="400" fill="currentColor" />
          </svg>
          <svg 
            className="absolute left-0 bottom-0 -translate-x-1/3 translate-y-1/3 text-white/5" 
            width="600" 
            height="600" 
            viewBox="0 0 600 600" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="300" cy="300" r="300" fill="currentColor" />
          </svg>
        </div>

        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-8">
              Ready to Transform Your Digital Presence?
            </h2>
            
            <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
              Let's discuss how our services can help you achieve your business goals and drive sustainable growth.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 bg-white text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors duration-200"
              >
                Book a Free Consultation
              </Link>
              
              <Link
                href="tel:+1234567890"
                className="px-8 py-4 bg-transparent border-2 border-white text-white font-medium rounded-lg hover:bg-white/10 transition-colors duration-200"
              >
                Call Us Now
              </Link>
            </div>
            
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8">
              <div className="flex items-center">
                <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>No obligation consultation</span>
              </div>
              
              <div className="flex items-center">
                <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Tailored solutions for your needs</span>
              </div>
              
              <div className="flex items-center">
                <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Transparent pricing</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 