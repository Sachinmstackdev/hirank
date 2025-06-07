'use client'

import Link from 'next/link'
import Image from 'next/image'
import Script from 'next/script'
import { useState } from 'react'
import React from 'react'
import { motion } from "framer-motion";
import { projects, Project } from '@/data/projects'
import { Header, Footer } from '@/components/layout/index'

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

// Improved structured data for SEO
const generateStructuredData = () => {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "headline": "Transformational Digital Projects & Business Success Stories",
    "description": "Explore how visionary brands partnered with HiRank Digital to achieve extraordinary results through strategic digital solutions.",
    "mainEntity": {
    "@type": "ItemList",
    "itemListElement": projects.map((project, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
          "@type": "CreativeWork",
        "name": project.title,
        "description": project.description,
          "url": `https://hirankdigital.com/projects/${project.slug}`,
          "image": project.image,
          "creator": {
            "@type": "Organization",
            "name": "HiRank Digital",
            "url": "https://hirankdigital.com"
          },
          "keywords": [project.category, ...project.technologies].join(", ")
      }
    }))
    }
  };
}

export default function ProjectsPage() {
  // Calculate aggregated success metrics for hero section
  const metrics = {
    avgConversion: '42%',
    avgROAS: '3.8x',
    totalRevenue: '$14.2M+',
    clientRetention: '92%'
  };

  return (
    <>
      <div className="bg-[#f5f8ff]">
        <Header />
        <main className="pt-0">
          {/* Schema.org structured data for SEO */}
          <Script id="structured-data" type="application/ld+json">
            {JSON.stringify(generateStructuredData())}
          </Script>

          <section className="py-28 md:py-40 overflow-hidden relative">
            {/* Background elements */}
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#4F7DF3]/5 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-[#4F7DF3]/5 rounded-full blur-3xl"></div>
            
            <motion.div 
              className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="max-w-5xl mx-auto">
                {/* Client logos strip */}
                <motion.div 
                  className="flex flex-wrap justify-center gap-8 mb-12 opacity-80"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                >
                  <div className="flex flex-col items-center w-full text-center mb-6">
                    <div className="inline-flex items-center px-4 py-1.5 mb-4 bg-[#4F7DF3]/10 text-[#4F7DF3] border border-[#4F7DF3]/20 rounded-full text-sm font-medium">
                      <span className="mr-2 bg-[#4F7DF3] w-2 h-2 rounded-full"></span>
                      Case Studies & Success Stories
                    </div>
                    <div className="flex flex-wrap justify-center gap-8 items-center">
                      <div className="flex -space-x-4">
                        <div className="w-12 h-12 rounded-full border-2 border-white overflow-hidden">
                          <Image 
                            src="https://res.cloudinary.com/twosapiens/image/upload/v1744477382/Ambro-bites-logo-banner_d9zmsv.png"
                            alt="Ambro Bites" 
                            width={48} 
                            height={48} 
                            className="object-cover"
                          />
                        </div>
                        <div className="w-12 h-12 rounded-full border-2 border-white overflow-hidden">
                          <Image 
                            src="https://res.cloudinary.com/twosapiens/image/upload/v1744477383/VK-pg-hostel-logo-banner_emq6ax.png" 
                            alt="VK Hostel" 
                            width={48} 
                            height={48}
                            className="object-cover"
                          />
                        </div>
                        <div className="w-12 h-12 rounded-full border-2 border-white overflow-hidden">
                          <Image 
                            src="https://res.cloudinary.com/twosapiens/image/upload/v1744477383/Two-Sapiens-logo-banner_efgx9t.png" 
                            alt="Two Sapiens" 
                            width={48} 
                            height={48}
                            className="object-cover"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col ml-2">
                        <span className="text-gray-800 font-medium">Trusted by ambitious e-commerce brands</span>
                        <p className="text-gray-500 text-sm flex items-center gap-1">
                          <span className="font-medium text-green-600">97%</span> satisfaction rate
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div className="text-center">
                  <motion.h1 
                    className="text-3xl sm:text-4xl md:text-[3.25rem] font-medium text-gray-900 leading-[1.2] tracking-tight mb-8"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    <span className="block mb-4">We Scale E-Commerce Brands</span>
                    <span className="block text-[#4F7DF3]">With Proven Success Formulas</span>
                  </motion.h1>
                  <motion.p 
                    className="text-lg sm:text-xl text-gray-600 mb-16 max-w-2xl mx-auto"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    Discover how we've helped ambitious e-commerce brands achieve 
                    explosive growth through strategic digital solutions that drive measurable ROI.
                  </motion.p>

                  {/* Success metrics strip */}
                  <motion.div 
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  >
                    <motion.div 
                      className="bg-white rounded-xl p-6 shadow-md relative overflow-hidden group"
                      whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-[#4F7DF3]/10 to-[#4F7DF3]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#4F7DF3]/10 rounded-full"></div>
                      <div className="absolute top-4 right-4">
                        <svg className="w-8 h-8 text-[#4F7DF3]/20" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2a1 1 0 0 1 1 1v3a1 1 0 0 1-2 0V3a1 1 0 0 1 1-1zm0 15a1 1 0 0 1 1 1v3a1 1 0 0 1-2 0v-3a1 1 0 0 1 1-1zm10-5a1 1 0 0 1-1 1h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 1 1zM7 12a1 1 0 0 1-1 1H3a1 1 0 0 1 0-2h3a1 1 0 0 1 1 1zm12.071 7.071a1 1 0 0 1-1.414 0l-2.121-2.121a1 1 0 0 1 1.414-1.414l2.121 2.121a1 1 0 0 1 0 1.414zM8.464 8.464a1 1 0 0 1-1.414 0L4.93 6.344a1 1 0 0 1 1.414-1.415L8.464 7.05a1 1 0 0 1 0 1.414zM4.93 19.071a1 1 0 0 1 0-1.414l2.121-2.121a1 1 0 1 1 1.414 1.414l-2.121 2.121a1 1 0 0 1-1.414 0zM15.536 8.464a1 1 0 0 1 0-1.414l2.12-2.121a1 1 0 0 1 1.415 1.414l-2.121 2.121a1 1 0 0 1-1.414 0z" />
                        </svg>
                      </div>
                      <div className="relative z-10">
                        <div className="text-3xl font-bold text-[#4F7DF3] mb-1 flex items-baseline">
                          <motion.span
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.8 }}
                          >
                            {metrics.avgConversion}
                          </motion.span>
                        </div>
                        <p className="text-sm text-gray-600">Avg. Conversion Rate</p>
                      </div>
                    </motion.div>

                    <motion.div 
                      className="bg-white rounded-xl p-6 shadow-md relative overflow-hidden group"
                      whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-[#4F7DF3]/10 to-[#4F7DF3]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#4F7DF3]/10 rounded-full"></div>
                      <div className="absolute top-4 right-4">
                        <svg className="w-8 h-8 text-[#4F7DF3]/20" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M3 5a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm12 10a1 1 0 100-2 1 1 0 000 2zm-8-4a1 1 0 100-2 1 1 0 000 2zm4 8a1 1 0 100-2 1 1 0 000 2zm-4-4a1 1 0 100-2 1 1 0 000 2zm0-8a1 1 0 100-2 1 1 0 000 2zm8 0a1 1 0 100-2 1 1 0 000 2zm4 4a1 1 0 100-2 1 1 0 000 2z" />
                        </svg>
                      </div>
                      <div className="relative z-10">
                        <div className="text-3xl font-bold text-[#4F7DF3] mb-1 flex items-baseline">
                          <motion.span
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.9 }}
                          >
                            {metrics.avgROAS}
                          </motion.span>
                        </div>
                        <p className="text-sm text-gray-600">Avg. ROAS</p>
                      </div>
                    </motion.div>

                    <motion.div 
                      className="bg-white rounded-xl p-6 shadow-md relative overflow-hidden group"
                      whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-[#4F7DF3]/10 to-[#4F7DF3]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#4F7DF3]/10 rounded-full"></div>
                      <div className="absolute top-4 right-4">
                        <svg className="w-8 h-8 text-[#4F7DF3]/20" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8zm-1-6v2h2v-2h1a3 3 0 0 0 3-3 3 3 0 0 0-3-3h-1V7h-2v1h-1a3 3 0 0 0-3 3 3 3 0 0 0 3 3h1z" />
                        </svg>
                      </div>
                      <div className="relative z-10">
                        <div className="text-3xl font-bold text-[#4F7DF3] mb-1 flex items-baseline">
                          <motion.span
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 1.0 }}
                          >
                            {metrics.totalRevenue}
                          </motion.span>
                        </div>
                        <p className="text-sm text-gray-600">Revenue Generated</p>
                      </div>
                    </motion.div>

                    <motion.div 
                      className="bg-white rounded-xl p-6 shadow-md relative overflow-hidden group"
                      whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-[#4F7DF3]/10 to-[#4F7DF3]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#4F7DF3]/10 rounded-full"></div>
                      <div className="absolute top-4 right-4">
                        <svg className="w-8 h-8 text-[#4F7DF3]/20" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17 9V7c0-2.8-2.2-5-5-5S7 4.2 7 7v2c-1.7 0-3 1.3-3 3v7c0 1.7 1.3 3 3 3h10c1.7 0 3-1.3 3-3v-7c0-1.7-1.3-3-3-3zM9 7c0-1.7 1.3-3 3-3s3 1.3 3 3v2H9V7zm9 12c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1v-7c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v7z" />
                        </svg>
                      </div>
                      <div className="relative z-10">
                        <div className="text-3xl font-bold text-[#4F7DF3] mb-1 flex items-baseline">
                          <motion.span
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 1.1 }}
                          >
                            {metrics.clientRetention}
                          </motion.span>
                        </div>
                        <p className="text-sm text-gray-600">Client Retention</p>
                      </div>
                    </motion.div>
                  </motion.div>

                  {/* Primary CTA */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-24"
                  >
                    <Link
                      href="/contact"
                      className="bg-[#4F7DF3] hover:bg-[#3968e7] text-white px-6 py-3 rounded-full text-lg font-medium transition-all duration-300 inline-flex items-center justify-center gap-2 w-full sm:w-auto"
                    >
                      <span>Get Your Free Growth Strategy</span>
                      <svg className="w-5 h-5 ml-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </Link>
                    <button
                      onClick={() => {
                        const element = document.getElementById('case-studies');
                        element?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="text-gray-500 hover:text-gray-900 px-6 py-3 rounded-full text-lg font-medium transition-all duration-300 inline-flex items-center justify-center gap-2 w-full sm:w-auto"
                    >
                      <span>See The Case Studies</span>
                      <motion.div 
                        animate={{ y: [0, 5, 0] }} 
                        transition={{ repeat: Infinity, duration: 1.5 }}
                      >
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M19 14l-7 7m0 0l-7-7m7 7V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </motion.div>
                    </button>
                  </motion.div>
                  
                  {/* Partner logos */}
                  <motion.div 
                    className="relative max-w-5xl mx-auto px-4 sm:px-0"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.0 }}
                  >
                    <p className="text-sm text-gray-500 mb-6 text-center">Partnered with industry leaders</p>
                    <div className="grid grid-cols-2 sm:grid-cols-5 md:gap-10 gap-8 place-items-center">
                      <div className="w-32 h-8 sm:h-10 flex items-center justify-center">
                        <img 
                          src="/patner-logos/logos--meta.svg" 
                          alt="Meta" 
                          className="max-h-full" 
                        />
                      </div>
                      <div className="w-32 h-8 sm:h-10 flex items-center justify-center">
                        <img 
                          src="/patner-logos/logos--google.svg" 
                          alt="Google" 
                          className="max-h-full"
                        />
                      </div>
                      <div className="w-32 h-8 sm:h-10 flex items-center justify-center">
                        <img 
                          src="/patner-logos/logos--supabase.svg" 
                          alt="Supabase" 
                          className="max-h-full"
                        />
                      </div>
                      <div className="w-32 h-8 sm:h-10 flex items-center justify-center">
                        <img 
                          src="/patner-logos/logos--woocommerce.svg" 
                          alt="WooCommerce" 
                          className="max-h-full"
                        />
                      </div>
                      <div className="w-32 h-8 sm:h-10 flex items-center justify-center col-span-2 sm:col-span-1">
                        <img 
                          src="/patner-logos/logos--openai.svg" 
                          alt="OpenAI" 
                          className="max-h-full max-w-[120px] sm:max-w-full"
                        />
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </section>
        </main>
      </div>

      <main className="bg-white">
        {/* Project intro section */}
        <section className="py-12 md:py-16 border-b border-gray-100 overflow-hidden relative">
          {/* Background elements */}
          <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-[#4F7DF3]/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/4 right-0 w-64 h-64 bg-[#4F7DF3]/5 rounded-full blur-3xl"></div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="max-w-4xl mx-auto text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className="inline-flex items-center px-4 py-1.5 mb-4 bg-[#4F7DF3]/10 text-[#4F7DF3] border border-[#4F7DF3]/20 rounded-full text-sm font-medium">
                <span className="mr-2 bg-[#4F7DF3] w-2 h-2 rounded-full"></span>
                Our Methodology
              </div>
              <h2 className="text-3xl md:text-4xl font-medium mb-4 text-gray-900">Our Success Blueprint</h2>
              <p className="text-gray-600 mb-8 text-lg max-w-2xl mx-auto">
                Each case study demonstrates our systematic approach to growing e-commerce businesses through
                data-driven strategies, conversion-focused design, and ROI-centric campaigns.
              </p>
              
              <div className="relative z-10 mb-8">
                <motion.div 
                  className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <motion.div 
                    className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 relative overflow-hidden border border-gray-100 group"
                    variants={fadeInUp}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  >
                    {/* Decorative elements */}
                    <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#4F7DF3]/10 rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-0 right-0 w-24 h-24 bg-[#4F7DF3]/5 rounded-full -translate-y-1/2 translate-x-1/3"></div>
                    
                    <div className="flex items-center mb-3">
                      {/* Icon for this step */}
                      <div className="w-12 h-12 bg-white text-[#4F7DF3] rounded-full flex items-center justify-center shadow-md relative mr-4">
                        <span className="font-bold text-xl">1</span>
                      </div>
                      <h3 className="font-medium text-lg text-gray-900">Identify the Challenge</h3>
                    </div>
                    
                    <p className="text-gray-600 text-sm mb-3">We diagnose the core obstacles preventing your e-commerce growth</p>
                    
                    {/* Key keywords highlighted */}
                    <div className="flex flex-wrap gap-2">
                      <span className="inline-block px-2 py-1 text-xs bg-[#4F7DF3]/5 text-[#4F7DF3]/90 rounded-full">Data Analysis</span>
                      <span className="inline-block px-2 py-1 text-xs bg-[#4F7DF3]/5 text-[#4F7DF3]/90 rounded-full">UX Audit</span>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 relative overflow-hidden border border-gray-100 group md:mt-6"
                    variants={fadeInUp}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  >
                    {/* Decorative elements */}
                    <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#4F7DF3]/10 rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-0 right-0 w-24 h-24 bg-[#4F7DF3]/5 rounded-full -translate-y-1/2 translate-x-1/3"></div>
                    
                    <div className="flex items-center mb-3">
                      {/* Icon for this step */}
                      <div className="w-12 h-12 bg-white text-[#4F7DF3] rounded-full flex items-center justify-center shadow-md relative mr-4">
                        <span className="font-bold text-xl">2</span>
                      </div>
                      <h3 className="font-medium text-lg text-gray-900">Implement the Solution</h3>
                    </div>
                    
                    <p className="text-gray-600 text-sm mb-3">We apply proven frameworks tailored to your unique business model</p>
                    
                    {/* Key keywords highlighted */}
                    <div className="flex flex-wrap gap-2">
                      <span className="inline-block px-2 py-1 text-xs bg-[#4F7DF3]/5 text-[#4F7DF3]/90 rounded-full">Conversion Rate</span>
                      <span className="inline-block px-2 py-1 text-xs bg-[#4F7DF3]/5 text-[#4F7DF3]/90 rounded-full">Custom Strategy</span>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 relative overflow-hidden border border-gray-100 group"
                    variants={fadeInUp}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  >
                    {/* Decorative elements */}
                    <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#4F7DF3]/10 rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-0 right-0 w-24 h-24 bg-[#4F7DF3]/5 rounded-full -translate-y-1/2 translate-x-1/3"></div>
                    
                    <div className="flex items-center mb-3">
                      {/* Icon for this step */}
                      <div className="w-12 h-12 bg-white text-[#4F7DF3] rounded-full flex items-center justify-center shadow-md relative mr-4">
                        <span className="font-bold text-xl">3</span>
                      </div>
                      <h3 className="font-medium text-lg text-gray-900">Measure the Results</h3>
                    </div>
                    
                    <p className="text-gray-600 text-sm mb-3">We track key metrics to quantify ROI and optimize performance</p>
                    
                    {/* Key keywords highlighted */}
                    <div className="flex flex-wrap gap-2">
                      <span className="inline-block px-2 py-1 text-xs bg-[#4F7DF3]/5 text-[#4F7DF3]/90 rounded-full">Analytics</span>
                      <span className="inline-block px-2 py-1 text-xs bg-[#4F7DF3]/5 text-[#4F7DF3]/90 rounded-full">Optimization</span>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
              
              {/* Quick CTA to view case studies */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="inline-block"
              >
                <button 
                  onClick={() => {
                    const element = document.getElementById('case-studies');
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="group text-[#4F7DF3] font-medium inline-flex items-center gap-2 transition-all duration-300 hover:gap-3"
                >
                  <span>See how we apply this formula</span>
                  <motion.div 
                    animate={{ y: [0, 5, 0] }} 
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19 14l-7 7m0 0l-7-7m7 7V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </motion.div>
                </button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section id="case-studies" className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <h2 className="text-2xl md:text-3xl font-medium text-center mb-12">Our Recent Projects</h2>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {projects.map((project: Project) => (
                <motion.div 
                  key={project.id} 
                  variants={fadeInUp}
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                >
                  <article
                    className="group bg-white rounded-xl overflow-hidden h-auto flex flex-col shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100"
                  >
                    {/* Project header with image and overlay */}
                    <div className="relative h-64">
                      {/* Pre-hover visible gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10"></div>
                      
                      {/* Animated shine effect on hover */}
                      <div className="absolute -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine" />
                      
                      {/* Project image */}
                      <Image
                        src={project.image}
                        alt={`${project.title} - ${project.category} case study by HiRank Digital`}
                        className="object-cover w-full h-full transition-transform duration-700 ease-in-out group-hover:scale-105"
                        width={500}
                        height={300}
                        priority={project.id <= 3}
                        quality={90}
                      />
                      
                      {/* Project title overlay (always visible) */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                        <div className="flex flex-col">
                          <span className="text-xs uppercase tracking-wider font-medium text-white/90 bg-[#4F7DF3]/90 backdrop-blur-sm px-3 py-1 rounded-full mb-3 inline-block w-fit shadow-lg">
                            {project.category}
                          </span>
                          <h3 className="text-xl font-medium text-white group-hover:text-[#4F7DF3]/90 transition-colors duration-300">
                            {project.title}
                          </h3>
                        </div>
                      </div>
                    </div>
                    
                    {/* Results highlight strip */}
                    <div className="bg-gradient-to-r from-emerald-900/90 to-emerald-700/90 p-3 text-white flex items-center justify-center relative overflow-hidden">
                      {/* Animated background pulse */}
                      <div className="absolute inset-0 w-full h-full">
                        <div className="absolute inset-0 bg-emerald-500/20 blur-md transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-700"></div>
                      </div>
                      <span className="font-medium text-center text-sm tracking-wide relative z-10 flex items-center">
                        <svg className="w-4 h-4 mr-2 text-emerald-300" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {project.results}
                      </span>
                    </div>
                    
                    {/* Project content */}
                    <div className="p-6 flex-grow flex flex-col justify-between bg-gradient-to-b from-white to-gray-50/50">
                      {/* Challenge section */}
                      <div className="mb-5">
                        <div className="flex items-center mb-3">
                          <div className="w-8 h-8 rounded-full bg-[#4F7DF3]/10 text-[#4F7DF3] flex items-center justify-center mr-3 shadow-sm">
                            <span className="text-sm font-medium">1</span>
                          </div>
                          <h4 className="font-medium text-gray-900">Challenge</h4>
                        </div>
                        <p className="text-gray-600 text-sm pl-11 leading-relaxed">{project.challenge}</p>
                      </div>
                      
                      {/* Solution section */}
                      <div className="mb-5">
                        <div className="flex items-center mb-3">
                          <div className="w-8 h-8 rounded-full bg-[#4F7DF3]/10 text-[#4F7DF3] flex items-center justify-center mr-3 shadow-sm">
                            <span className="text-sm font-medium">2</span>
                          </div>
                          <h4 className="font-medium text-gray-900">Solution</h4>
                        </div>
                        <p className="text-gray-600 text-sm pl-11 leading-relaxed">{project.solution}</p>
                      </div>
                      
                      {/* Tech stack */}
                      <div className="mt-auto pt-4 border-t border-gray-100">
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.technologies.slice(0, 3).map((tech) => (
                            <span 
                              key={tech} 
                              className="text-xs py-1 px-2 bg-[#4F7DF3]/5 text-[#4F7DF3]/90 rounded-full border border-[#4F7DF3]/10"
                            >
                              {tech}
                            </span>
                          ))}
                          {project.technologies.length > 3 && (
                            <span className="text-xs py-1 px-2 bg-gray-100 text-gray-700 rounded-full">
                              +{project.technologies.length - 3} more
                            </span>
                          )}
                        </div>
                        
                        {/* CTA link */}
                        <Link
                          href={`/projects/${project.slug}`}
                          className="inline-flex items-center text-[#4F7DF3] font-medium group-hover:text-[#3968e7] transition-all duration-300"
                        >
                          <span className="mr-2 relative">
                            See Full Case Study
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#4F7DF3] group-hover:w-full transition-all duration-300"></span>
                          </span>
                          <svg 
                            className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-300" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor" 
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </article>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
        
        <section className="py-24 md:py-32 bg-[#f5f8ff] relative overflow-hidden">
          {/* Background elements */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#4F7DF3]/5 rounded-full opacity-50 blur-3xl -z-10"></div>
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#4F7DF3]/5 rounded-full opacity-40 blur-3xl -z-10"></div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div 
              className="max-w-6xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              {/* Testimonial slider - improved design */}
              <div className="mb-16">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                  <div className="flex flex-col md:flex-row">
                    {/* Testimonial image section */}
                    <div className="md:w-2/5 bg-gradient-to-br from-[#4F7DF3] to-[#3968e7] p-8 md:p-10 flex items-center justify-center relative overflow-hidden">
                      {/* Decorative elements */}
                      <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-white/10 rounded-full"></div>
                      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                      
                      {/* Avatar and company logo */}
                      <div className="relative z-10 text-center">
                        <div className="w-24 h-24 rounded-full border-4 border-white shadow-xl mx-auto mb-6 overflow-hidden bg-white flex items-center justify-center">
                          <Image 
                            src="https://res.cloudinary.com/twosapiens/image/upload/v1744477383/Two-Sapiens-logo-banner_efgx9t.png"
                            alt="Two Sapiens Logo" 
                            width={80} 
                            height={80}
                            className="object-contain"
                          />
                        </div>
                        <div className="inline-flex items-center px-4 py-1.5 mb-4 bg-white/20 text-white backdrop-blur-sm rounded-full text-sm font-medium">
                          <span className="mr-2 bg-white w-2 h-2 rounded-full"></span>
                          Verified Client
                        </div>
                        <div className="flex justify-center mt-4">
                          {/* Star rating */}
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} className="w-5 h-5 text-yellow-300 mr-1" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    {/* Testimonial content section */}
                    <div className="md:w-3/5 p-8 md:p-10 flex flex-col justify-center">
                      <div className="flex mb-6">
                        <svg className="w-10 h-10 text-[#4F7DF3] mr-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                        </svg>
                      </div>
                      <p className="text-xl md:text-2xl text-gray-800 font-medium leading-relaxed mb-8">
                        "HiRank Digital transformed our e-commerce strategy by implementing their proven growth formula. 
                        In just 90 days, we saw our conversion rates climb from 2.5% to over 7%, and ROAS jumped to 4.2x. 
                        They truly understand what drives e-commerce success."
                      </p>
                      
                      {/* Metrics highlight */}
                      <div className="flex flex-wrap gap-4 mb-8">
                        <div className="bg-gray-50 px-4 py-2 rounded-lg">
                          <span className="text-sm text-gray-500">Conversion Rate</span>
                          <div className="text-[#4F7DF3] font-bold flex items-baseline gap-1">
                            <span className="text-xl">7%</span>
                            <span className="text-green-500 text-sm">+180%</span>
                          </div>
                        </div>
                        <div className="bg-gray-50 px-4 py-2 rounded-lg">
                          <span className="text-sm text-gray-500">ROAS</span>
                          <div className="text-[#4F7DF3] font-bold flex items-baseline gap-1">
                            <span className="text-xl">4.2x</span>
                            <span className="text-green-500 text-sm">+108%</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-auto">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium text-gray-900">Sarah Johnson</p>
                            <p className="text-gray-600">CMO, Two Sapiens</p>
                          </div>
                          <Link 
                            href="/projects/two-sapiens" 
                            className="inline-flex items-center text-[#4F7DF3] font-medium group hover:text-[#3968e7] transition-all duration-300"
                          >
                            <span className="mr-2">View Case Study</span>
                            <svg 
                              className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" 
                              fill="none" 
                              viewBox="0 0 24 24" 
                              stroke="currentColor" 
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl shadow-xl p-8 md:p-16 text-center backdrop-blur-sm bg-white/70">
                <motion.h2 
                  className="text-3xl sm:text-4xl md:text-[3.25rem] font-medium text-gray-900 leading-[1.2] tracking-tight mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <span className="block mb-2">Ready to Be Our Next</span>
                  <span className="text-[#4F7DF3]">E-Commerce Success Story?</span>
                </motion.h2>
                <motion.p 
                  className="text-lg sm:text-xl text-gray-600 mb-10 max-w-2xl mx-auto"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  Book your free 30-minute strategy call where we'll analyze your store, identify growth opportunities, 
                  and outline a custom action plan to increase your revenue by at least 30% in the next 90 days.
                </motion.p>
                
                {/* What you'll get section */}
                <motion.div
                  className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-gray-50 p-6 rounded-lg text-left">
                    <div className="w-10 h-10 bg-[#4F7DF3]/10 rounded-full flex items-center justify-center mb-4">
                      <svg className="w-5 h-5 text-[#4F7DF3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="font-medium text-lg mb-3">Store Performance Audit</h3>
                    <p className="text-gray-600 text-sm">We'll analyze your current metrics and identify leaking revenue opportunities</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg text-left">
                    <div className="w-10 h-10 bg-[#4F7DF3]/10 rounded-full flex items-center justify-center mb-4">
                      <svg className="w-5 h-5 text-[#4F7DF3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                      </svg>
                    </div>
                    <h3 className="font-medium text-lg mb-3">Custom Growth Strategy</h3>
                    <p className="text-gray-600 text-sm">Receive a tailored action plan with specific tactics for your unique store</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg text-left">
                    <div className="w-10 h-10 bg-[#4F7DF3]/10 rounded-full flex items-center justify-center mb-4">
                      <svg className="w-5 h-5 text-[#4F7DF3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                      </svg>
                    </div>
                    <h3 className="font-medium text-lg mb-3">ROI Projection</h3>
                    <p className="text-gray-600 text-sm">See exactly what results you can expect with clear timeline and metrics</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex flex-col sm:flex-row items-center justify-center gap-4 mx-auto max-w-3xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Link
                    href="/contact"
                    className="bg-[#4F7DF3] hover:bg-[#3968e7] text-white px-6 py-3 rounded-full text-lg font-medium transition-all duration-300 inline-flex items-center justify-center gap-2 w-full sm:w-auto"
                  >
                    <span>Book Your Free Strategy Call</span>
                    <svg className="w-5 h-5 ml-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Link>
                  <Link
                    href="/services"
                    className="text-gray-500 hover:text-gray-900 px-6 py-3 rounded-full text-lg font-medium transition-all duration-300 inline-flex items-center justify-center gap-2 w-full sm:w-auto"
                  >
                    <span>See Our Services</span>
                  </Link>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  viewport={{ once: true }}
                  className="mt-10"
                >
                  <p className="text-sm text-gray-500 mb-2">
                    No commitment required. Limited spots available each week.
                  </p>
                  <div className="flex items-center justify-center gap-3">
                    <span className="text-xs bg-green-100 text-green-800 px-3 py-1 rounded-full">
                      30-Day Money-Back Guarantee
                    </span>
                    <span className="text-xs bg-[#4F7DF3]/10 text-[#4F7DF3] px-3 py-1 rounded-full">
                      Calendly Protected
                    </span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* Preload critical fonts */}
        <link
          rel="preload"
          href="/fonts/your-main-font.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </main>
      <Footer />
    </>
  )
} 