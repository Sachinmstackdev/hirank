'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

// Service card data
const services = [
  {
    id: 1,
    title: "Platform development",
    number: "01",
    description: "We build  platforms using WordPress, Shopify, Framer, or custom-coded e-commerce solutions tailored for your business needs.",
    image: "https://res.cloudinary.com/twosapiens/image/upload/v1744370459/Untitled_design_13_ztrqvt.png",
    bgColor: "#FFFFFF"
  },
  {
    id: 2,
    title: "Marketplace Product Listing",
    number: "02",
    description: "We list your products on Amazon, Flipkart, Myntra, and Blinkit with A+ content, Premium  images , and seo friendly buyer intant keywords. ",
    image: "https://res.cloudinary.com/twosapiens/image/upload/v1744371456/Untitled_design_14_uogmf3.png",
    bgColor: "#FFFFFF"
  },
  {
    id: 3,
    title: "Workflow automations",
    number: "03",
    description: "We automate repetitive tasks to improve operational efficiency, grow productivity, errors, and save time.",
    image: "https://res.cloudinary.com/twosapiens/image/upload/v1744385638/Chatbot_1_gpxrdl.png",
    bgColor: "#F5F8FF"
  },
  {
    id: 4,
    title: "ROI-focused ad campaigns",
    number: "04",
    description: "Our strategies focus on ROI, scalability, and customer acquisition, combining paid media with expert social media management to grow your brand across every channel.",
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
          <h2 className="text-3xl sm:text-4xl md:text-[3.25rem] font-medium text-gray-900 leading-[1.2] tracking-tight">
            AI solutions tailored for your business needs
          </h2>
        </div>
        
        {/* Service cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto grid-flow-row auto-rows-fr">
          {services.map((service) => (
            <ServiceCard 
              key={service.id}
              title={service.title}
              number={service.number}
              description={service.description}
              image={service.image}
              bgColor={service.bgColor}
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
  image: string;
  bgColor: string;
}

function ServiceCard({ title, number, description, image, bgColor }: ServiceCardProps) {
  return (
    <Link href="/services">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="rounded-3xl overflow-hidden p-8 lg:p-10 cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 transform h-full flex flex-col"
        style={{ backgroundColor: bgColor }}
      >
        <div className="mb-6 flex items-start justify-between">
          <h3 className="text-2xl md:text-3xl font-medium text-gray-900">{title}</h3>
          <div className="flex items-center justify-center w-10 h-10 bg-blue-500 rounded-full text-white font-medium text-sm">
            {number}
          </div>
        </div>
        
        <p className="text-gray-600 mb-8 flex-grow">
          {description}
        </p>
        
        {/* Service image container */}
        <div className="mt-auto">
          {image && (
            <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
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
          <div className="mt-4 flex items-center text-blue-500 font-medium">
            <span>Learn more</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </motion.div>
    </Link>
  )
}
