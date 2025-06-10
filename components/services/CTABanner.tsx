'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'

export default function CTABanner() {
  // For A/B testing different CTA messages
  const [formEmail, setFormEmail] = useState('')
  
  return (
    <section className="py-20 md:py-24 relative overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#4F7DF3] to-[#3968e7] opacity-95"></div>
      
      {/* Background pattern for visual interest */}
      <div className="absolute inset-0 opacity-10">
        <svg className="h-full w-full" width="800" height="800" viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M435.442 229.171C548.17 205.356 643.382 250.891 667.197 363.619C691.012 476.347 645.477 571.559 532.749 595.374C420.021 619.19 324.809 573.654 300.994 460.926C277.179 348.198 322.714 252.986 435.442 229.171Z" stroke="white" strokeWidth="10"/>
          <path d="M149.497 216.917C220.6 201.517 282.619 230.961 298.018 302.064C313.418 373.167 283.974 435.186 212.871 450.586C141.768 465.985 79.7493 436.541 64.3497 365.438C48.9501 294.335 78.3941 232.317 149.497 216.917Z" stroke="white" strokeWidth="10"/>
          <path d="M548.907 76.6884C584.459 69.4885 615.467 84.7108 622.667 120.262C629.867 155.814 614.645 186.822 579.093 194.022C543.541 201.222 512.533 186 505.333 150.448C498.133 114.896 513.355 83.8883 548.907 76.6884Z" stroke="white" strokeWidth="10"/>
        </svg>
      </div>
      
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to Transform Your <br />
              E-Commerce Performance?
            </h2>
            
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Join the 50+ brands seeing measurable growth with our proven e-commerce strategies. Book a free strategy call today.
            </p>
            
            {/* Success metrics for social proof */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">42%</div>
                <p className="text-blue-100">Average Increase in Conversion Rate</p>
              </div>
              
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">3.8x</div>
                <p className="text-blue-100">Average ROAS Improvement</p>
              </div>
              
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">90</div>
                <p className="text-blue-100">Days to See Measurable Results</p>
              </div>
            </div>
            
            {/* Email collection form OR direct CTA button */}
            <div className="max-w-2xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Get Your Free E-Commerce Growth Analysis
                </h3>
                
                <form className="space-y-4 md:space-y-0 md:flex md:gap-4">
                  <div className="flex-1">
                    <label htmlFor="email" className="sr-only">Email address</label>
                    <input 
                      type="email" 
                      id="email" 
                      placeholder="Enter your email" 
                      value={formEmail}
                      onChange={(e) => setFormEmail(e.target.value)}
                      className="w-full px-4 py-4 rounded-full bg-white/90 text-gray-800 placeholder-gray-500 border-0 focus:ring-2 focus:ring-blue-100 focus:bg-white transition-all"
                      required
                    />
                  </div>
                  <div>
                    <button 
                      type="submit" 
                      className="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-[#4F7DF3] to-[#3968e7] hover:from-[#3968e7] hover:to-[#2957d6] text-white font-bold rounded-full transition-all shadow-lg hover:shadow-xl"
                    >
                      Get My Free Analysis
                    </button>
                  </div>
                </form>
                
                <div className="mt-4 text-sm text-blue-100 text-center">
                  No obligation. We respect your privacy.
                </div>
              </div>
            </div>
            
            {/* Alternative CTA */}
            <div className="mt-8 text-center">
              <Link 
                href="/contact"
                className="inline-flex items-center text-white font-medium underline hover:text-blue-100 transition-colors"
              >
                Or schedule a direct call with our strategy team
                <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
            
            {/* Trust badge */}
            <div className="mt-10 text-center text-sm flex items-center justify-center text-blue-100">
              <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              Your data is protected with bank-level security. We never share your information.
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 