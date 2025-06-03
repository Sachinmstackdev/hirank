'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

// Service card data
const services = [
  {
    id: 1,
    title: "Launch-ready stores in days",
    number: "01",
    description: "Custom eCommerce sites built on Shopify, WordPress or Framer — optimized for conversions and ready to scale.",
    benefits: [
      "SEO-ready structure",
      "Meta Pixel setup",
      "Speed-optimized builds"
    ],
    caseStudy: "Case Study → Live in 3 days",
    image: "https://res.cloudinary.com/twosapiens/image/upload/v1744370459/Untitled_design_13_ztrqvt.png",
    bgColor: "#FFFFFF"
  },
  {
    id: 2,
    title: "Dominate Amazon, Flipkart & more",
    number: "02",
    description: "We list your products with A+ content, SEO-rich listings & image optimization to win buyer intent.",
    benefits: [
      "SEO-rich copy",
      "Premium images",
      "A+ product listings"
    ],
    caseStudy: "Case Study → 3x sales in 90 days",
    image: "https://res.cloudinary.com/twosapiens/image/upload/v1744371456/Untitled_design_14_uogmf3.png",
    bgColor: "#FFFFFF"
  },
  {
    id: 3,
    title: "Automate ops. Save 10+ hours/week.",
    number: "03",
    description: "We set up custom workflows and AI agents to reduce errors and boost efficiency in your stack.",
    benefits: [
      "AI chatbots + automations",
      "Repetitive task removal",
      "Slack/CRM integrations"
    ],
    caseStudy: "Case Study → 40% cost reduction",
    image: "https://res.cloudinary.com/twosapiens/image/upload/v1744385638/Chatbot_1_gpxrdl.png",
    bgColor: "#F5F8FF"
  },
  {
    id: 4,
    title: "Paid ads that print profits",
    number: "04",
    description: "High-ROI campaigns across Google, Meta, and LinkedIn, built to scale DTC brands without wasted spend.",
    benefits: [
      "Ads + UGC + management",
      "ROAS-focused strategy",
      "Weekly optimization"
    ],
    caseStudy: "Case Study → 4.6x ROAS in 60 days",
    image: "https://res.cloudinary.com/twosapiens/image/upload/v1745288658/performance-marketing_cjo8hr.png",
    bgColor: "#F5F8FF"
  }
]

export default function Services() {
  return (
    <section id="services" className="relative py-20 md:py-32 bg-white overflow-hidden">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Services indicator */}
        <div className="flex justify-center mb-6">
          <div className="flex items-center text-blue-500 font-medium">
            <span className="w-2 h-2 rounded-full bg-blue-500 mr-2"></span>
            Services
          </div>
        </div>
        
        {/* Main heading */}
        <div className="text-center max-w-5xl mx-auto mb-20">
          <h2 className="font-display text-3xl sm:text-4xl md:text-[3.25rem] font-medium text-gray-900 leading-[1.4] tracking-tight">
            <span className="block mb-2 sm:mb-4">Smart services to scale lean eCom brands</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
              —fast, automated, and ROI-driven.
            </span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mt-6">
            From custom platforms to ROI-focused ads, we help early-stage DTC brands scale with less bloat and more results.
          </p>
        </div>
        
        {/* Service cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto grid-flow-row auto-rows-fr">
          {services.map((service) => (
            <ServiceCard 
              key={service.id}
              {...service}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

// Service card component
interface ServiceCardProps {
  title: string;
  number: string;
  description: string;
  benefits: string[];
  caseStudy: string;
  image: string;
  bgColor: string;
}

function ServiceCard({ title, number, description, benefits, caseStudy, image, bgColor }: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link href="/services">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="rounded-3xl overflow-hidden p-8 lg:p-10 cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 transform h-full flex flex-col group"
        style={{ backgroundColor: bgColor }}
      >
        {/* Case Study Tag */}
        <div className="inline-flex mb-6 px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-sm font-medium">
          {caseStudy}
        </div>

        <div className="mb-6 flex items-start justify-between">
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 leading-tight">{title}</h3>
          <div className="flex items-center justify-center w-10 h-10 bg-blue-500 rounded-full text-white font-medium text-sm group-hover:scale-110 transition-transform">
            {number}
          </div>
        </div>
        
        <p className="text-gray-900 text-lg mb-6 flex-grow">
          {description}
        </p>

        {/* Benefits */}
        <div className="space-y-3 mb-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center gap-2 text-gray-700">
              <svg className="w-5 h-5 text-green-500 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>{benefit}</span>
            </div>
          ))}
        </div>
        
        {/* Service image container */}
        <div className="mt-auto">
          {image && (
            <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm transition-transform duration-300 group-hover:scale-[1.02]">
              <Image 
                src={image} 
                alt={title} 
                width={500} 
                height={300}
                className="w-full h-auto"
              />
            </div>
          )}
           
          {/* Learn more indicator */}
          <div className="mt-4 flex items-center text-blue-500 font-medium group">
            <span>Learn more</span>
            <svg xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 ml-1 transform transition-transform group-hover:translate-x-1" 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </motion.div>
    </Link>
  )
}
