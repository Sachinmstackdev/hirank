'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

// Service data with extended features
const services = [
  {
    id: 1,
    title: "Custom Platform Development",
    subtitle: "Build your business online with powerful platforms",
    number: "01",
    description: "We create custom websites and e-commerce platforms that drive results, with thoughtful user experiences and robust functionality.",
    image: "https://res.cloudinary.com/twosapiens/image/upload/v1744370459/Untitled_design_13_ztrqvt.png",
    bgColor: "#FFFFFF",
    darkBgColor: "#1F2937",
    features: [
      "Custom WordPress & Shopify development",
      "MERN stack applications",
      "Mobile-responsive design",
      "Payment gateway integration",
      "CRM & ERP integrations"
    ],
    cta: {
      text: "Start Your Project",
      href: "/contact"
    }
  },
  {
    id: 2,
    title: "Marketplace Growth Solutions",
    subtitle: "Expand your reach on major marketplaces",
    number: "02",
    description: "We optimize your product listings on Amazon, Flipkart, and other marketplaces to increase visibility and drive more sales.",
    image: "https://res.cloudinary.com/twosapiens/image/upload/v1744371456/Untitled_design_14_uogmf3.png",
    bgColor: "#FFFFFF",
    darkBgColor: "#1F2937",
    features: [
      "A+ content creation",
      "Optimized product listings",
      "SEO-friendly keywords",
      "Professional product photography",
      "Sales analytics & optimization"
    ],
    cta: {
      text: "Grow Your Marketplace Presence",
      href: "/contact"
    }
  },
  {
    id: 3,
    title: "Business Process Automation",
    subtitle: "Save time and reduce errors with automation",
    number: "03",
    description: "We build custom automation solutions that streamline your workflows, eliminate repetitive tasks, and boost operational efficiency.",
    image: "https://res.cloudinary.com/twosapiens/image/upload/v1744385638/Chatbot_1_gpxrdl.png",
    bgColor: "#F5F8FF",
    darkBgColor: "#1E293B",
    features: [
      "Custom workflow automation",
      "API integrations",
      "Document processing",
      "Email & notification systems",
      "Data synchronization solutions"
    ],
    cta: {
      text: "Streamline Your Business",
      href: "/contact"
    }
  },
  {
    id: 4,
    title: "Performance Marketing Campaigns",
    subtitle: "Drive growth with data-driven marketing",
    number: "04",
    description: "Our ROI-focused advertising strategies combine paid media with expert social management to grow your brand consistently.",
    image: "https://res.cloudinary.com/twosapiens/image/upload/v1744385390/performance-marketing_ooosur.png",
    bgColor: "#F5F8FF",
    darkBgColor: "#1E293B",
    features: [
      "Google & Meta Ads management",
      "Funnel optimization",
      "Retargeting campaigns",
      "Conversion tracking",
      "Detailed performance reporting"
    ],
    cta: {
      text: "Boost Your ROI",
      href: "/contact"
    }
  },
  {
    id: 5,
    title: "AI-Powered Solutions",
    subtitle: "Leverage AI to transform your business",
    number: "05",
    description: "We implement cutting-edge AI technologies to enhance customer experiences, automate tasks, and provide valuable business insights.",
    image: "https://res.cloudinary.com/twosapiens/image/upload/v1744385638/ai-solutions_wqrszb.png",
    bgColor: "#FFFFFF",
    darkBgColor: "#1F2937",
    features: [
      "AI chatbots & virtual assistants",
      "Predictive analytics",
      "Natural language processing",
      "Image recognition systems",
      "Marketing automation with AI"
    ],
    cta: {
      text: "Explore AI Solutions",
      href: "/contact"
    }
  }
]

export default function ServicesList() {
  // Track hovered service for enhanced interactions
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  
  return (
    <section id="services" className="py-20 md:py-32 bg-white dark:bg-gray-900 overflow-hidden">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Services indicator */}
        <div className="flex justify-center mb-6">
          <div className="flex items-center text-blue-500 dark:text-blue-400 font-medium">
            <span className="w-2 h-2 rounded-full bg-blue-500 dark:bg-blue-400 mr-2"></span>
            Our Core Services
          </div>
        </div>
        
        {/* Main heading */}
        <div className="text-center max-w-5xl mx-auto mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-[3.25rem] font-medium text-gray-900 dark:text-white leading-[1.2] tracking-tight">
            AI-powered digital solutions<br />tailored for your business
          </h2>
        </div>
        
        {/* Service cards */}
        <div className="space-y-16 md:space-y-24 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard 
              key={service.id}
              service={service}
              isHovered={hoveredId === service.id}
              setHovered={(isHovered) => setHoveredId(isHovered ? service.id : null)}
              isEven={index % 2 !== 0}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

interface ServiceCardProps {
  service: {
    id: number;
    title: string;
    subtitle: string;
    number: string;
    description: string;
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
}

function ServiceCard({ service, isHovered, setHovered, isEven }: ServiceCardProps) {
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
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className={`flex flex-col ${isEven ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-12 lg:gap-16 items-center`}
    >
      {/* Service image */}
      <div className="w-full md:w-1/2">
        <motion.div 
          className="rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800 shadow-sm"
          animate={isHovered ? "hover" : "rest"}
          variants={cardVariants}
          transition={{ duration: 0.3 }}
        >
          <Image 
            src={service.image} 
            alt={service.title} 
            width={600} 
            height={400}
            className="w-full h-auto"
          />
        </motion.div>
      </div>
      
      {/* Service content */}
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
          {/* Service header */}
          <div className="mb-6 flex items-start justify-between">
            <div>
              <div className="text-sm text-blue-600 dark:text-blue-400 font-medium mb-2">
                {service.subtitle}
              </div>
              <h3 className="text-2xl md:text-3xl font-medium text-gray-900 dark:text-white">{service.title}</h3>
            </div>
            <div className="flex items-center justify-center w-10 h-10 bg-blue-500 rounded-full text-white font-medium text-sm">
              {service.number}
            </div>
          </div>
          
          {/* Service description */}
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            {service.description}
          </p>
          
          {/* Service features */}
          <div className="mb-8">
            <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-4">What's included:</h4>
            <ul className="space-y-2">
              {service.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="inline-flex items-center justify-center h-6 w-6 mr-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full flex-shrink-0">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* CTA button */}
          <Link 
            href={service.cta.href} 
            className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200"
          >
            {service.cta.text}
          </Link>
        </motion.div>
      </div>
    </motion.div>
  )
} 