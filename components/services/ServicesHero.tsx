'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

export default function ServicesHero() {
  return (
    <section className="relative pt-40 pb-20 sm:pb-32 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 dark:text-white overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <svg 
          className="absolute right-0 top-0 translate-x-1/2 -translate-y-1/4 text-blue-500/5 dark:text-blue-300/5" 
          width="800" 
          height="800" 
          viewBox="0 0 800 800" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="400" cy="400" r="400" fill="currentColor" />
        </svg>
        <svg 
          className="absolute left-0 bottom-0 -translate-x-1/2 translate-y-1/4 text-indigo-500/5 dark:text-indigo-300/5" 
          width="800" 
          height="800" 
          viewBox="0 0 800 800" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="400" cy="400" r="400" fill="currentColor" />
        </svg>
      </div>

      {/* Hero content */}
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Hero text */}
          <motion.div 
            className="flex-1 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-8">
              <div className="inline-block px-4 py-1.5 mb-6 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 rounded-full text-sm font-medium">
                Our Services
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
                <span className="block">Transform Your</span>
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Digital Presence</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-xl">
                We offer comprehensive digital solutions that help your business 
                grow online, from web development to performance marketing.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Link 
                href="#services" 
                className="px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200"
              >
                Explore Services
              </Link>
              <Link 
                href="/contact" 
                className="px-8 py-3.5 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 font-medium rounded-lg transition-colors duration-200"
              >
                Book a Discovery Call
              </Link>
            </div>
          </motion.div>
          
          {/* Hero image */}
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative h-[400px] sm:h-[500px]">
              <Image 
                src="https://res.cloudinary.com/twosapiens/image/upload/v1744385638/services-hero_pnm3rt.png" 
                alt="Digital Services Illustration" 
                width={700} 
                height={600}
                className="rounded-2xl shadow-xl object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 