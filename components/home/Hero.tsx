'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'

// Icons
const ArrowRight = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const PlayIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <polygon points="5,3 19,12 5,21" fill="currentColor"/>
  </svg>
)

const TrendingUp = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <polyline points="22,7 13.5,15.5 8.5,10.5 2,17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <polyline points="16,7 22,7 22,13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const Shield = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const ChartIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21 21H4.6C4.03995 21 3.75992 21 3.54601 20.891C3.35785 20.7951 3.20487 20.6422 3.10899 20.454C3 20.2401 3 19.9601 3 19.4V3M20 8L16.0811 12.1827C15.9326 12.3412 15.8584 12.4204 15.7688 12.4614C15.6897 12.4976 15.6026 12.5125 15.516 12.5047C15.4179 12.4958 15.3215 12.4458 15.1287 12.3457L11.8713 10.6543C11.6785 10.5542 11.5821 10.5042 11.484 10.4953C11.3974 10.4875 11.3103 10.5024 11.2312 10.5386C11.1416 10.5796 11.0674 10.6588 10.9189 10.8173L7 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const AutomationIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 8V12L15 15M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const FunnelIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 4C3 3.44772 3.44772 3 4 3H20C20.5523 3 21 3.44772 21 4V6.58579C21 6.851 20.8946 7.10536 20.7071 7.29289L13.2929 14.7071C13.1054 14.8946 13 15.149 13 15.4142V19L11 21V15.4142C11 15.149 10.8946 14.8946 10.7071 14.7071L3.29289 7.29289C3.10536 7.10536 3 6.851 3 6.58579V4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

// Animated Dashboard Component
const DashboardMockup = () => {
  const [activeMetric, setActiveMetric] = useState(0)
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMetric(prev => (prev + 1) % 3)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  const metrics = [
    { label: 'Revenue', value: '$2.4M', change: '+285%', color: 'text-green-500' },
    { label: 'ROAS', value: '4.8x', change: '+127%', color: 'text-blue-500' },
    { label: 'Orders', value: '12,847', change: '+198%', color: 'text-purple-500' }
  ]

  return (
    <div className="bg-white rounded-xl shadow-2xl p-6 w-full h-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <TrendingUp className="w-4 h-4 text-white" />
          </div>
          <h3 className="font-semibold text-gray-900">Performance Dashboard</h3>
        </div>
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-400"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
          <div className="w-3 h-3 rounded-full bg-green-400"></div>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        {metrics.map((metric, index) => (
          <motion.div
            key={metric.label}
            className={`p-4 rounded-lg border-2 transition-all duration-300 ${
              activeMetric === index ? 'border-blue-200 bg-blue-50' : 'border-gray-100 bg-gray-50'
            }`}
            animate={{
              scale: activeMetric === index ? 1.05 : 1,
            }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-xs text-gray-500 mb-1">{metric.label}</div>
            <div className="text-lg font-bold text-gray-900">{metric.value}</div>
            <div className={`text-xs font-medium ${metric.color}`}>{metric.change}</div>
          </motion.div>
        ))}
      </div>

      {/* Chart */}
      <div className="relative h-36 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4">
        <svg className="w-full h-full" viewBox="0 0 300 120">
          <motion.polyline
            points="0,90 50,70 100,55 150,40 200,25 250,15 300,10"
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
              <stop offset="100%" stopColor="#8B5CF6" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute bottom-2 right-2 text-xs text-gray-500">Last 30 days</div>
      </div>

      {/* Live indicator */}
      <div className="flex items-center gap-2 mt-4">
        <motion.div
          className="w-2 h-2 bg-green-500 rounded-full"
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
        <span className="text-xs text-gray-500">Live data • Updated 2s ago</span>
      </div>
    </div>
  )
}

// MacBook Frame Component
const MacBookFrame = ({ children }: { children: React.ReactNode }) => (
  <div className="relative">
    {/* MacBook Screen */}
    <div className="bg-gray-900 rounded-t-xl p-3 shadow-2xl">
      <div className="bg-black rounded-lg p-1 relative overflow-hidden">
        <div className="aspect-[16/10] bg-gray-100 rounded">
          {children}
        </div>
      </div>
    </div>
    
    {/* MacBook Base */}
    <div className="bg-gray-800 h-4 rounded-b-xl shadow-lg"></div>
    
    {/* Keyboard indication */}
    <div className="absolute inset-x-0 -bottom-1 h-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent rounded-full"></div>
  </div>
)

// Performance Chart Component
const PerformanceChart = () => {
  interface Metric {
    label: string
    value: string
    change: string
    color: string
  }

  const metrics: Metric[] = [
    { label: 'ROAS', value: '4.8x', change: '+127%', color: 'text-blue-600' },
    { label: 'AOV', value: '$187', change: '+85%', color: 'text-blue-500' },
    { label: 'CVR', value: '3.2%', change: '+94%', color: 'text-blue-500' }
  ]

  const [activeMetric, setActiveMetric] = useState<number>(0)
  const [isHovered, setIsHovered] = useState(false)
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMetric((prev: number) => (prev + 1) % 3)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div 
      className="bg-white rounded-xl shadow-lg p-6 border border-gray-100"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center justify-between mb-6">
        <div className="space-y-1">
          <h3 className="font-medium text-gray-900">Performance Overview</h3>
          <p className="text-sm text-gray-500">Last 90 days</p>
        </div>
        <div className="flex gap-2">
          <div className="w-2 h-2 rounded-full bg-blue-500"></div>
          <div className="w-2 h-2 rounded-full bg-gray-200"></div>
          <div className="w-2 h-2 rounded-full bg-gray-200"></div>
        </div>
      </div>

      <div className="relative h-[280px]">
        {/* Base Grid */}
        <div className="absolute inset-0 grid grid-cols-6 gap-px">
          {[...Array(7)].map((_, i) => (
            <div key={i} className="border-r border-gray-100" />
          ))}
        </div>
        
        {/* Animated Chart Line */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 180">
          <defs>
            <linearGradient id="chart-gradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgb(59, 130, 246)" stopOpacity="0.2" />
              <stop offset="100%" stopColor="rgb(59, 130, 246)" stopOpacity="0" />
            </linearGradient>
          </defs>
          
          <motion.path
            d="M0,150 C50,150 50,100 100,100 S150,120 200,80 S250,60 300,30"
            fill="none"
            stroke="rgb(59, 130, 246)"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: isHovered ? 0.8 : 1 }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          />
          
          <path
            d="M0,150 C50,150 50,100 100,100 S150,120 200,80 S250,60 300,30 L300,180 L0,180 Z"
            fill="url(#chart-gradient)"
            opacity="0.5"
          />
        </svg>

        {/* Metrics */}
        <div className="absolute bottom-0 left-0 right-0 grid grid-cols-3 gap-4 p-4">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + (index * 0.1) }}
              className="text-center"
            >
              <div className="text-sm font-medium text-gray-900">{metric.value}</div>
              <div className="text-xs text-gray-500">{metric.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] bg-[#f5f8ff] overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-[0.4]"></div>
      
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 sm:pt-36 pb-8 relative">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8 pt-4"
          >
            {/* Founder Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full px-4 py-1.5"
            >
              <span className="flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span className="text-sm font-medium text-gray-600">
                Founder-led • Tactical • Results-focused
              </span>
            </motion.div>

            {/* Main Headline */}
            <div className="space-y-6">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-display text-3xl sm:text-4xl md:text-[3.25rem] font-medium text-gray-900 leading-[1.4] tracking-tight"
              >
                <span className="block mb-2 sm:mb-4">Smart growth systems</span>
                for{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
                  lean eCom brands
                </span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-xl text-gray-600 leading-relaxed max-w-xl"
              >
                We help you scale with proven ads, automation & conversion-focused funnels — without bloated agency fluff.
              </motion.p>
            </div>

            {/* Feature Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-3"
            >
              <div className="flex items-center gap-2 bg-blue-50 rounded-full px-4 py-2 text-sm text-blue-600">
                <ChartIcon className="w-4 h-4" />
                <span>Paid Ads</span>
              </div>
              <div className="flex items-center gap-2 bg-blue-50 rounded-full px-4 py-2 text-sm text-blue-600">
                <AutomationIcon className="w-4 h-4" />
                <span>Automation</span>
              </div>
              <div className="flex items-center gap-2 bg-blue-50 rounded-full px-4 py-2 text-sm text-blue-600">
                <FunnelIcon className="w-4 h-4" />
                <span>Conversion Funnels</span>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium transition-all duration-200 shadow-lg shadow-blue-200 hover:shadow-xl hover:shadow-blue-200 hover:-translate-y-0.5"
              >
                <span>Get Your Free Growth Gameplan</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              
              <Link
                href="/case-studies"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-600 hover:text-gray-900 px-6 py-3 rounded-full font-medium border border-gray-200 transition-all duration-200"
              >
                See How 2 Brands Scaled
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Side - Performance Chart */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative h-[500px]"
          >
            <PerformanceChart />
            
            {/* Floating Stats */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="absolute -left-8 top-12 bg-white rounded-xl p-4 shadow-lg border border-gray-100"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center">
                  <ChartIcon className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-900">Active Growth</div>
                  <div className="text-xs text-gray-500">2 brands scaling</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute -right-8 bottom-12 bg-white rounded-xl p-4 shadow-lg border border-gray-100"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center">
                  <FunnelIcon className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-900">Avg Timeline</div>
                  <div className="text-xs text-gray-500">90 days to scale</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 