'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

// Enhanced service data with clearer value propositions and results metrics
const services = [
  {
    id: 1,
    title: "Custom E-Commerce Development",
    subtitle: "Shopify & Headless Solutions",
    number: "01",
    description: "Build a high-converting store that outperforms the competition with custom development that prioritizes speed, UX, and conversion optimization.",
    resultsMetric: "42% average increase in conversion rate",
    image: "https://res.cloudinary.com/twosapiens/image/upload/v1744370459/Untitled_design_13_ztrqvt.png",
    bgColor: "#F5F8FF",
    darkBgColor: "#1F2937",
    features: [
      "Custom Shopify theme development",
      "Headless commerce architecture",
      "Mobile-first responsive design",
      "Payment gateway integration",
      "CRM & ERP integrations"
    ],
    cta: {
      text: "Get a Custom Store Audit",
      href: "/contact"
    }
  },
  {
    id: 2,
    title: "Marketplace Growth Solutions",
    subtitle: "Amazon & Multi-Channel Optimization",
    number: "02",
    description: "Expand your reach and boost sales on Amazon, Flipkart, and other marketplaces with optimized listings and growth-focused strategies.",
    resultsMetric: "83% average increase in marketplace sales",
    image: "https://res.cloudinary.com/twosapiens/image/upload/v1744371456/Untitled_design_14_uogmf3.png",
    bgColor: "#F5F8FF",
    darkBgColor: "#1F2937",
    features: [
      "A+ content creation",
      "Optimized product listings",
      "SEO-friendly keyword research",
      "Professional product photography",
      "Data-driven sales optimization"
    ],
    cta: {
      text: "Scale Your Marketplace Presence",
      href: "/contact"
    }
  },
  {
    id: 3,
    title: "Business Process Automation",
    subtitle: "Workflow & E-Commerce Operations",
    number: "03",
    description: "Streamline operations, reduce costs, and improve customer experience with AI-powered automation solutions custom-built for your business.",
    resultsMetric: "65% reduction in operational costs",
    image: "https://res.cloudinary.com/twosapiens/image/upload/v1744385638/Chatbot_1_gpxrdl.png",
    bgColor: "#F5F8FF",
    darkBgColor: "#1E293B",
    features: [
      "Order processing automation",
      "Inventory management systems",
      "Customer service automation",
      "Email & notification workflows",
      "Cross-platform data synchronization"
    ],
    cta: {
      text: "Automate Your E-Commerce",
      href: "/contact"
    }
  },
  {
    id: 4,
    title: "Performance Marketing Campaigns",
    subtitle: "ROI-Focused Digital Advertising",
    number: "04",
    description: "Drive qualified traffic and boost conversions with data-driven marketing strategies that maximize return on ad spend across all channels.",
    resultsMetric: "3.8x average ROAS improvement",
    image: "https://res.cloudinary.com/twosapiens/image/upload/v1745288658/performance-marketing_cjo8hr.png",
    bgColor: "#F5F8FF",
    darkBgColor: "#1E293B",
    features: [
      "Google & Meta Ads management",
      "Conversion-focused landing pages",
      "Remarketing & retargeting",
      "Customer journey optimization",
      "A/B testing & analytics reporting"
    ],
    cta: {
      text: "Maximize Your Ad Performance",
      href: "/contact"
    }
  },
  {
    id: 5,
    title: "Product Photography & Content",
    subtitle: "Conversion-Boosting Visuals & UGC",
    number: "05",
    description: "Turn browsers into buyers with professional product photography, A+ content, and engaging UGC videos that showcase your products effectively.",
    resultsMetric: "48% higher conversion with professional imagery",
    image: "https://res.cloudinary.com/twosapiens/image/upload/v1746097070/ChatGPT_Image_Apr_30_2025_03_31_49_PM_n7prji.png",
    bgColor: "#F5F8FF",
    darkBgColor: "#1F2937",
    features: [
      "Professional product photography",
      "Amazon A+ enhanced content",
      "UGC video production",
      "High-conversion product listings",
      "Brand storytelling content"
    ],
    cta: {
      text: "Elevate Your Product Visuals",
      href: "/contact"
    }
  }
]

export default function ServicesList() {
  // Track hovered service for enhanced interactions
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  
  return (
    <section 
      id="services" 
      className="py-20 md:py-32 bg-[#f5f8ff] dark:bg-gray-900 overflow-hidden"
      aria-labelledby="services-heading"
    >
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Services indicator with improved semantics and accessibility */}
        <div className="flex justify-center mb-6">
          <div className="flex items-center text-[#4F7DF3] dark:text-blue-400 font-medium">
            <span className="w-2 h-2 rounded-full bg-[#4F7DF3] dark:bg-blue-400 mr-2" aria-hidden="true"></span>
            <span>Our Specialized Services</span>
          </div>
        </div>
        
        {/* Main heading with improved typography and SEO */}
        <div className="text-center max-w-5xl mx-auto mb-12 md:mb-20">
          <h2 
            id="services-heading" 
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-[1.2] tracking-tight"
          >
            E-Commerce Growth Solutions<br />
            <span className="bg-gradient-to-r from-[#4F7DF3] to-[#3968e7] bg-clip-text text-transparent">
              Powered by AI & Expertise
            </span>
          </h2>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            End-to-end services designed to help you build, optimize, and scale your e-commerce business with proven strategies that deliver measurable results.
          </p>
        </div>
        
        {/* Service cards with enhanced UI, accessibility and conversion focus */}
        <div className="space-y-24 md:space-y-32 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard 
              key={service.id}
              service={service}
              isHovered={hoveredId === service.id}
              setHovered={(isHovered) => setHoveredId(isHovered ? service.id : null)}
              isEven={index % 2 !== 0}
              index={index}
            />
          ))}
        </div>
        
        {/* FAQ teaser with clear CTA */}
        <div className="mt-24 md:mt-32 text-center">
          <div className="bg-gradient-to-r from-[#f5f8ff] to-[#e6ebff] dark:from-gray-800 dark:to-gray-800/50 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto border border-[#4F7DF3]/10">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Have Questions About Our Services?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Explore our detailed FAQ section for answers to common questions, or reach out directly for a personalized consultation.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link 
                href="#faq" 
                className="px-6 py-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-white font-medium rounded-full transition-colors duration-200 hover:bg-gray-50 dark:hover:bg-gray-600 border border-gray-200 dark:border-gray-600"
              >
                Read Our FAQ
              </Link>
              <Link 
                href="/contact" 
                className="px-6 py-3 bg-gradient-to-r from-[#4F7DF3] to-[#3968e7] hover:from-[#3968e7] hover:to-[#2957d6] text-white font-medium rounded-full transition-all duration-200"
              >
                Get a Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Enhanced TypeScript interface with proper typing
interface ServiceCardProps {
  service: {
    id: number;
    title: string;
    subtitle: string;
    number: string;
    description: string;
    resultsMetric: string;
    image: string;
    bgColor: string;
    darkBgColor: string;
    features: string[];
    cta: {
      text: string;
      href: string;
    }
  };
  isHovered: boolean;
  setHovered: (isHovered: boolean) => void;
  isEven: boolean;
  index: number;
}

function ServiceCard({ service, isHovered, setHovered, isEven, index }: ServiceCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(cardRef, { once: true, margin: "-100px" })
  
  const cardVariants = {
    hover: { 
      y: -5,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
    },
    rest: { 
      y: 0,
      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
    }
  }
  
  // Staggered animation timing for cleaner visual effect
  const animationDelay = index * 0.1
  
  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: animationDelay }}
      className={`flex flex-col ${isEven ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-12 lg:gap-16 items-center`}
    >
      {/* Service image with improved presentation */}
      <div className="w-full md:w-1/2">
        <motion.div 
          className="rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800 shadow-lg"
          animate={isHovered ? "hover" : "rest"}
          variants={cardVariants}
          transition={{ duration: 0.3 }}
        >
          <div className="relative">
            <Image 
              src={service.image} 
              alt={`${service.title} - ${service.subtitle}`} 
              width={600} 
              height={400}
              className="w-full h-auto"
            />
            {/* Results badge for social proof */}
            <div className="absolute bottom-4 left-4 bg-white dark:bg-gray-800 px-4 py-2 rounded-lg shadow-md border border-gray-100 dark:border-gray-700">
              <div className="flex items-center">
                <span className="mr-2 text-green-500">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </span>
                <span className="text-sm font-medium text-gray-900 dark:text-white">{service.resultsMetric}</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Service content with improved conversion elements */}
      <div className="w-full md:w-1/2">
        <motion.div
          onHoverStart={() => setHovered(true)}
          onHoverEnd={() => setHovered(false)}
          className="rounded-3xl p-8 lg:p-10"
          style={{ 
            backgroundColor: `var(--card-bg, ${service.bgColor})`,
          }}
          initial="rest"
          animate={isHovered ? "hover" : "rest"}
          variants={cardVariants}
          transition={{ duration: 0.3 }}
        >
          {/* Service header with improved visual hierarchy */}
          <div className="mb-6 flex items-start justify-between">
            <div>
              <div className="text-sm text-[#4F7DF3] dark:text-blue-400 font-semibold mb-2">
                {service.subtitle}
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">{service.title}</h3>
            </div>
            <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-[#4F7DF3] to-[#3968e7] rounded-full text-white font-medium text-sm flex-shrink-0">
              {service.number}
            </div>
          </div>
          
          {/* Service description with improved readability */}
          <p className="text-gray-600 dark:text-gray-300 text-lg mb-8">
            {service.description}
          </p>
          
          {/* Service features with improved visual design */}
          <div className="mb-8">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Why clients choose this service:</h4>
            <ul className="space-y-3">
              {service.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="inline-flex items-center justify-center h-6 w-6 mr-3 bg-[#4F7DF3]/10 dark:from-blue-900/30 dark:to-indigo-900/30 text-[#4F7DF3] dark:text-blue-400 rounded-full flex-shrink-0">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.6666 3.5L5.24998 9.91667L2.33331 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Enhanced CTA button with clear action text */}
          <Link 
            href={service.cta.href} 
            className="inline-flex items-center px-6 py-3.5 bg-gradient-to-r from-[#4F7DF3] to-[#3968e7] hover:from-[#3968e7] hover:to-[#2957d6] text-white font-medium rounded-full transition-all duration-200 shadow-sm hover:shadow-md group"
          >
            {service.cta.text}
            <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  )
} 