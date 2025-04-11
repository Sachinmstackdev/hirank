'use client'

import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

// Case study data
const caseStudies = [
  {
    id: 1,
    title: "E-commerce Conversion Rate Optimization",
    client: "Fashion Retailer",
    stats: {
      conversionIncrease: "87%",
      revenueGrowth: "112%",
      timeframe: "6 months"
    },
    description: "We redesigned the checkout flow and implemented personalized product recommendations, resulting in a substantial increase in conversion rates and revenue.",
    image: "/case-studies/ecommerce-optimization.jpg",
    tags: ["E-commerce", "UX Design", "A/B Testing"],
    link: "/case-studies/ecommerce-optimization"
  },
  {
    id: 2,
    title: "AI-Powered Customer Service Automation",
    client: "SaaS Platform",
    stats: {
      responseTime: "2.5 min",
      resolutionRate: "94%",
      costReduction: "65%"
    },
    description: "Implemented an AI chatbot that handles customer inquiries, reducing response times while maintaining high customer satisfaction scores.",
    image: "/case-studies/ai-customer-service.jpg",
    tags: ["AI", "Customer Service", "Automation"],
    link: "/case-studies/ai-customer-service"
  },
  {
    id: 3,
    title: "Mobile App Engagement Strategy",
    client: "Fitness Brand",
    stats: {
      userRetention: "43%",
      sessionDuration: "+68%",
      subscriptions: "+81%"
    },
    description: "Developed a comprehensive engagement strategy with gamification elements that significantly improved user retention and subscription rates.",
    image: "/case-studies/mobile-engagement.jpg",
    tags: ["Mobile App", "Gamification", "User Retention"],
    link: "/case-studies/mobile-engagement"
  }
]

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
  }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

export default function CaseStudies() {
  const [activeCase, setActiveCase] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [hasViewed, setHasViewed] = useState(false)

  // Use IntersectionObserver to trigger animation when component is in view
  useEffect(() => {
    if (!containerRef.current || hasViewed) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasViewed(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    observer.observe(containerRef.current)
    return () => observer.disconnect()
  }, [hasViewed])

  return (
    <section className="py-20 md:py-32 bg-[#f5f8ff] overflow-hidden" id="case-studies">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 relative z-10" ref={containerRef}>
        {/* Case studies indicator */}
        <div className="flex justify-center mb-6">
          <div className="flex items-center text-blue-500 font-medium">
            <span className="w-2 h-2 rounded-full bg-blue-500 mr-2"></span>
            Case Studies
          </div>
        </div>
        
        {/* Main heading */}
        <div className="text-center max-w-5xl mx-auto mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-[3.25rem] font-medium text-gray-900 leading-[1.2] tracking-tight">
            Results that speak for <span className="text-blue-600">themselves</span>
          </h2>
        </div>
        
        {/* Case studies grid */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          animate={hasViewed ? "visible" : "hidden"}
        >
          {caseStudies.map((study) => (
            <motion.div
              key={study.id}
              variants={fadeInUp}
              whileHover={{ y: -8 }}
              onMouseEnter={() => setActiveCase(study.id)}
              onMouseLeave={() => setActiveCase(null)}
              className="flex flex-col bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
            >
              {/* Case study image */}
              <div className="relative h-52 overflow-hidden">
                <div className={`absolute inset-0 bg-blue-600 opacity-0 transition-opacity duration-300 z-10 ${activeCase === study.id ? 'opacity-20' : ''}`} />
                <div className="relative h-full w-full">
                  <Image
                    src={study.image}
                    alt={study.title}
                    className="object-cover transition-transform duration-700 transform group-hover:scale-110"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div 
                  className={`absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 z-20 ${activeCase === study.id ? 'opacity-100' : ''}`}
                >
                  <Link 
                    href={study.link}
                    className="px-6 py-3 bg-white text-blue-600 font-medium rounded-full hover:bg-blue-50 transition-colors"
                  >
                    View Case Study
                  </Link>
                </div>
              </div>

              {/* Client and title */}
              <div className="p-8">
                <div className="text-sm text-blue-600 font-medium mb-2">
                  {study.client}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {study.title}
                </h3>
                
                {/* Stats highlights */}
                <div className="flex justify-between mb-6 bg-gray-50 p-4 rounded-xl">
                  {Object.entries(study.stats).map(([key, value], index) => (
                    <div key={key} className="flex flex-col items-center">
                      <span className="text-xl font-bold text-blue-600">{value}</span>
                      <span className="text-xs text-gray-500 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                    </div>
                  ))}
                </div>
                
                {/* Description */}
                <p className="text-gray-600 text-sm mb-6">
                  {study.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {study.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="text-xs py-1 px-2 bg-gray-100 text-gray-700 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Footer with link */}
              <div className="mt-auto border-t border-gray-100 p-6 bg-gray-50">
                <motion.div 
                  initial={{ x: 0 }} 
                  animate={activeCase === study.id ? { x: 5 } : { x: 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex justify-end"
                >
                  <Link 
                    href={study.link} 
                    className="text-blue-600 font-medium text-sm flex items-center"
                  >
                    Read full case study
                    <svg
                      className="ml-1 w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Call to action */}
        <motion.div 
          className="mt-16 text-center"
          initial="hidden"
          animate={hasViewed ? "visible" : "hidden"}
          variants={fadeInUp}
        >
          <Link 
            href="/case-studies" 
            className="inline-flex items-center px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full transition-colors"
          >
            View All Case Studies
            <svg 
              className="ml-2 w-5 h-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M14 5l7 7m0 0l-7 7m7-7H3" 
              />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  )
} 