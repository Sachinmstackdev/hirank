'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import { Globe } from "@/registry/magicui/globe"

// Text animation variants
const textVariants = {
  hidden: { opacity: 0 },
  visible: (i: number) => ({
    opacity: 1,
    transition: {
      delay: 0.2 + i * 0.1,
    },
  }),
}

const gradientTextVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.4,
      duration: 0.6,
      ease: "easeOut"
    }
  }
}

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center bg-gradient-to-br from-white via-blue-50 to-purple-50 overflow-hidden pt-16 sm:pt-20 px-4">
      {/* Background blur effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] bg-blue-200/30 rounded-full blur-[80px] sm:blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] bg-purple-200/30 rounded-full blur-[80px] sm:blur-[100px]" />
      </div>

      {/* Content */}
      <div className="container mx-auto z-10">
        <div className="max-w-[85vw] sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto text-center">
          {/* Main content */}
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-gray-900 leading-tight"
          >
            <motion.span 
              className="inline-block"
              initial="hidden"
              animate="visible"
              custom={0}
              variants={textVariants}
            >
              Automate 
            </motion.span>{" "}
            <motion.span 
              className="inline-block"
              initial="hidden"
              animate="visible"
              custom={1}
              variants={textVariants}
            >
              Profits 
            </motion.span>{" "}
            <motion.span 
              className="inline-block"
              initial="hidden"
              animate="visible"
              custom={2}
              variants={textVariants}
            >
              with
            </motion.span>
            <motion.span 
              className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 block mt-1"
              initial="hidden"
              animate="visible"
              variants={gradientTextVariants}
            >
              AI-Powered e-Commerce
            </motion.span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
          >
            Scale your business effortlessly with cutting-edge AI automation, smart chatbots, and data-driven marketing.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-8 py-4 rounded-full text-base font-medium hover:bg-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 w-full sm:w-auto"
            >
              Get Started
            </Link>
            <Link
              href="/portfolio"
              className="px-8 py-4 rounded-full text-gray-600 hover:text-gray-900 transition-colors border border-gray-300 hover:border-gray-400 w-full sm:w-auto"
            >
              View Portfolio
            </Link>
          </motion.div>
        </div>

        {/* Globe Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mt-16 sm:mt-20 mb-12"
        >
         
        </motion.div>

        {/* Service cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="max-w-xs xs:max-w-sm sm:max-w-2xl md:max-w-4xl lg:max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4 mt-8 sm:mt-12"
        >
          
        </motion.div>
      </div>
    </section>
  )
} 