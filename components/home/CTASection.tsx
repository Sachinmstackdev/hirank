'use client'

import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'

// Analytics Dashboard Component
const AnalyticsDashboard = () => {
  const [activeMetric, setActiveMetric] = useState(0)
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMetric(prev => (prev + 1) % 3)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  const metrics = [
    { label: 'Avg. Growth', value: '+285%', period: '90 Days', color: 'from-green-500 to-emerald-600' },
    { label: 'ROAS', value: '4.8x', period: 'Last Month', color: 'from-blue-500 to-indigo-600' },
    { label: 'Revenue', value: '$2.4M', period: 'Generated', color: 'from-purple-500 to-pink-600' }
  ]

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 w-full">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">Client Success Metrics</h3>
            <p className="text-sm text-gray-500">Real results, real growth</p>
          </div>
        </div>
        <div className="flex gap-1">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                activeMetric === i ? 'bg-blue-500' : 'bg-gray-200'
              }`}
            />
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {metrics.map((metric, index) => (
          <motion.div
            key={metric.label}
            className={`p-4 rounded-xl transition-all duration-300 ${
              activeMetric === index 
                ? 'bg-gradient-to-br ' + metric.color + ' text-white shadow-lg' 
                : 'bg-gray-50 border border-gray-100'
            }`}
            animate={{
              scale: activeMetric === index ? 1.05 : 1,
            }}
            transition={{ duration: 0.3 }}
          >
            <div className={`text-sm ${activeMetric === index ? 'text-white/80' : 'text-gray-500'} mb-1`}>
              {metric.label}
            </div>
            <div className="text-2xl font-bold mb-1">{metric.value}</div>
            <div className={`text-sm ${activeMetric === index ? 'text-white/80' : 'text-gray-500'}`}>
              {metric.period}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="relative h-32 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-4">
        <svg className="w-full h-full" viewBox="0 0 300 100">
          <motion.path
            d="M0,50 C100,20 200,80 300,50"
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="3"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#6366F1" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute bottom-2 right-2 text-xs text-gray-500">Last 12 months</div>
      </div>
    </div>
  )
}

export default function CTASection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-50px 0px" })

  return (
    <section className="py-20 md:py-32 bg-[#f5f8ff] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-[0.4]"></div>
      
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        <div ref={sectionRef} className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Analytics Dashboard */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <AnalyticsDashboard />
          </motion.div>

          {/* Right side - CTA Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            {/* Section indicator */}
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-500"></span>
              <span className="text-sm font-medium text-gray-600">Ready to Scale?</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-[3.25rem] font-medium text-gray-900 leading-[1.2] tracking-tight mb-6">
              Transform your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">growth trajectory</span>
            </h2>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Join successful brands that have achieved exponential growth with our proven strategies and expert solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-medium transition-all duration-200 shadow-lg shadow-blue-200 hover:shadow-xl hover:shadow-blue-200 hover:-translate-y-0.5"
              >
                Get Your Free Growth Plan
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>

              <Link
                href="/case-studies"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-600 hover:text-gray-900 px-8 py-4 rounded-full font-medium border border-gray-200 transition-all duration-200"
              >
                View Case Studies
              </Link>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span className="text-sm font-medium text-gray-600">90-Day Growth Guarantee</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <span className="text-sm font-medium text-gray-600">Dedicated Growth Team</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  <span className="text-sm font-medium text-gray-600">Data-Driven Strategy</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 