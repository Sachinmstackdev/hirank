'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

// Service navigation items
const navItems = [
  {
    id: "platform-development",
    label: "Platform Development",
    icon: "/icons/ecommerce.svg"
  },
  {
    id: "marketplace-onboarding",
    label: "Marketplace Onboarding",
    icon: "/icons/marketplace.svg"
  },
  {
    id: "seo-analytics",
    label: "SEO & Analytics",
    icon: "/icons/seo.svg"
  },
  {
    id: "performance-marketing",
    label: "Performance Marketing",
    icon: "/icons/marketing.svg"
  },
  {
    id: "product-photography",
    label: "Product Photography",
    icon: "/icons/photography.svg"
  },
  {
    id: "conversion-boosting",
    label: "Conversion-Boosting",
    icon: "/icons/infographics.svg"
  }
]

const serviceCategories = [
  {
    id: 1,
    title: "E-Commerce Platform Development",
    icon: "/icons/ecommerce.svg",
    description: "We craft high-performing online stores tailored for your brand.",
    features: [
      "Shopify, WooCommerce & Magento Development",
      "Custom-Built E-commerce Platforms (Laravel, React, Next.js)",
      "Conversion-Optimized & Mobile-Friendly Designs",
      "Speed & SEO-Optimized for Higher Search Rankings"
    ]
  },
  {
    id: 2,
    title: "Marketplace Onboarding & Product Listing",
    icon: "/icons/marketplace.svg",
    description: "We streamline your business setup on leading e-commerce platforms like Amazon, Flipkart, Meesho, eBay, Walmart & More",
    features: [
      "Account Registration & Business Verification",
      "Bulk Product Upload & SEO-Optimized Listings",
      "High-Quality Product Descriptions & A+ Content",
      "Multi-Platform Integration for Unified Management"
    ]
  },
  {
    id: 3,
    title: "SEO & Analytics – Rank Higher, Sell More",
    icon: "/icons/seo.svg", 
    description: "We drive organic traffic by ranking your store & products on Google, Bing & Yahoo",
    features: [
      "Audience Research & Keyword Optimization",
      "On-Page & Technical SEO Fixes",
      "Backlink Building & Off-Page SEO",
      "Advanced Analytics & Performance Tracking"
    ]
  },
  {
    id: 4,
    title: "Performance Marketing & Advertising",
    icon: "/icons/marketing.svg",
    description: "We run high-ROI ad campaigns tailored to your brand's goals.",
    features: [
      "Search Ads (Google & Bing) – Capture intent-driven buyers",
      "Social Media Ads (Meta, TikTok, LinkedIn, X) – Drive brand awareness",
      "Video & YouTube Ads – Boost engagement & storytelling",
      "Shopping Ads & Retargeting – Reconvert visitors into customers"
    ]
  },
  {
    id: 5,
    title: "Product Photography & Visual Content",
    icon: "/icons/photography.svg",
    description: "Your product's first impression makes or breaks a sale. We create stunning visuals.",
    features: [
      "Studio & White Background Photography – Marketplace-approved images",
      "Lifestyle & Contextual Shots – Build emotional connections",
      "360° Product Photography – Interactive & engaging views",
      "Macro & High-Detail Shots – Show every intricate feature"
    ]
  },
  {
    id: 6,
    title: "Conversion-Boosting Product Infographics",
    icon: "/icons/infographics.svg",
    description: "We transform product details into visual stories that convert.",
    features: [
      "Amazon A+ Content & Enhanced Listings",
      "Social Media Graphics for Ads & Engagement",
      "Animated GIFs & Motion Graphics for High CTR",
      "Typography & Color-Psychology Based Design"
    ]
  }
]

// Define interface for ServiceContent props
interface ServiceContentProps {
  title: string;
  description: string;
  features: string[];
}

export default function Services() {
  const [activeNav, setActiveNav] = useState("platform-development")
  const [progress, setProgress] = useState(0)
  const [nextNavIndex, setNextNavIndex] = useState(1) // Track the next nav index
  const progressInterval = useRef<NodeJS.Timeout | null>(null)
  const rotationInterval = useRef<NodeJS.Timeout | null>(null)

  // Setup auto-rotation with 20-second duration
  useEffect(() => {
    // Clear any existing intervals when changing active nav
    if (progressInterval.current) clearInterval(progressInterval.current)
    if (rotationInterval.current) clearTimeout(rotationInterval.current)
    
    // Reset progress
    setProgress(0)
    
    // Calculate the next nav index
    const currentIndex = navItems.findIndex(item => item.id === activeNav)
    const nextIndex = (currentIndex + 1) % navItems.length
    setNextNavIndex(nextIndex)
    
    // Update progress every 200ms (100 steps for smooth animation)
    const stepDuration = 200
    const totalSteps = 100
    progressInterval.current = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + (100 / totalSteps)
        if (newProgress >= 100) {
          // When progress reaches 100%, trigger the click on next button
          setActiveNav(navItems[nextIndex].id)
          return 0
        }
        return newProgress
      })
    }, stepDuration)
    
    // Cleanup on unmount
    return () => {
      if (progressInterval.current) clearInterval(progressInterval.current)
      if (rotationInterval.current) clearTimeout(rotationInterval.current)
    }
  }, [activeNav])
  
  return (
    <section id="services" className="relative py-20 md:py-32 bg-white overflow-hidden">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Main heading */}
        <div className="text-center max-w-5xl mx-auto mb-16">
          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight"
          >
            HiRank Give you End to End E-commerce Solutions
          </motion.h1>
        </div>
        
        {/* Two-column layout */}
        <div className="flex flex-col lg:flex-row max-w-6xl mx-auto gap-10 lg:gap-16">
          {/* Left sidebar navigation */}
          <div className="w-full lg:w-64 flex flex-row lg:flex-col gap-3 lg:gap-4 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => setActiveNav(item.id)}
                className={`flex items-center gap-3 px-5 py-4 rounded-full whitespace-nowrap transition-all relative ${
                  activeNav === item.id 
                    ? 'bg-[#111827] text-white shadow-md' 
                    : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50'
                }`}
              >
                {/* Progress border for next button - only show on the next button */}
                {index === nextNavIndex && (
                  <div 
                    className="absolute inset-0 rounded-full border-2 border-black z-10" 
                    style={{
                      clipPath: `polygon(0 0, ${progress}% 0, ${progress}% 100%, 0 100%)`,
                      opacity: 0.9
                    }}
                  />
                )}
                
                {item.id === "platform-development" && (
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke={activeNav === item.id ? "white" : "currentColor"} 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="flex-shrink-0"
                  >
                    <circle cx="9" cy="21" r="1" />
                    <circle cx="20" cy="21" r="1" />
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                  </svg>
                )}
                {item.id !== "platform-development" && (
                  <div className="w-6 h-6 flex-shrink-0 flex items-center justify-center">
                    <Image 
                      src={item.icon} 
                      alt={item.label} 
                      width={20} 
                      height={20} 
                      className={`w-5 h-5 ${activeNav === item.id ? 'text-white brightness-0 invert' : ''}`}
                    />
                  </div>
                )}
                <span className="font-medium text-sm">{item.label}</span>
              </button>
            ))}
          </div>
          
          {/* Right content area */}
          <div className="flex-1">
            {activeNav === "platform-development" && (
              <ServiceContent 
                title="E-Commerce Platform Development"
                description="We craft high-performing online stores tailored for your brand with seamless user experiences and optimized conversion rates."
                features={serviceCategories[0].features}
              />
            )}
            
            {activeNav === "marketplace-onboarding" && (
              <ServiceContent 
                title="Marketplace Onboarding & Product Listing"
                description="We streamline your business setup on leading e-commerce platforms like Amazon, Flipkart, Meesho, eBay, Walmart & more."
                features={serviceCategories[1].features}
              />
            )}
            
            {activeNav === "seo-analytics" && (
              <ServiceContent 
                title="SEO & Analytics – Rank Higher, Sell More"
                description="We drive organic traffic by ranking your store & products on Google, Bing & Yahoo with data-driven optimization."
                features={serviceCategories[2].features}
              />
            )}
            
            {activeNav === "performance-marketing" && (
              <ServiceContent 
                title="Performance Marketing & Advertising"
                description="We run high-ROI ad campaigns tailored to your brand's goals across search, social, and shopping platforms."
                features={serviceCategories[3].features}
              />
            )}
            
            {activeNav === "product-photography" && (
              <ServiceContent 
                title="Product Photography & Visual Content"
                description="Your product's first impression makes or breaks a sale. We create stunning visuals that convert visitors into customers."
                features={serviceCategories[4].features}
              />
            )}
            
            {activeNav === "conversion-boosting" && (
              <ServiceContent 
                title="Conversion-Boosting Product Infographics"
                description="We transform product details into visual stories that convert with engaging graphics and animations."
                features={serviceCategories[5].features}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

// Component for displaying service content
function ServiceContent({ title, description, features }: ServiceContentProps) {
  return (
    <div className="grid md:grid-cols-2 gap-8 items-center">
      {/* Preview image */}
      <div className="order-2 md:order-1">
        <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm max-w-md mx-auto">
          <div className="aspect-w-16 aspect-h-9 bg-gradient-to-r from-gray-50 to-gray-100 flex items-center justify-center p-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-gray-200 p-4">
                  <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 rounded-full"></div>
                </div>
              </div>
              <ul className="space-y-2 text-left max-w-xs mx-auto">
                {features.map((feature: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="order-1 md:order-2">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900">
          {title}
        </h2>
        <p className="text-gray-600 mb-8 text-lg">
          {description}
        </p>
        
        <Link
          href="/contact"
          className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
        >
          Explore This Service
          <svg 
            className="ml-2 w-5 h-5" 
            viewBox="0 0 20 20" 
            fill="currentColor"
          >
            <path 
              fillRule="evenodd" 
              d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" 
              clipRule="evenodd" 
            />
          </svg>
        </Link>
      </div>
    </div>
  )
}
