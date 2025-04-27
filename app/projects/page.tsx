'use client'

import Link from 'next/link'
import Image from 'next/image'
import Script from 'next/script'
import { useState } from 'react'

// Add this client component import
import WebsiteLink from '../components/WebsiteLink'
import Header from '../../components/layout/Header'
import Footer from '../../components/layout/Footer'
import { motion } from 'framer-motion'

// Project data with enhanced descriptions and success metrics
const projects = [
  {
    id: 1,
    title: 'Two Sapiens E-Commerce Launch',
    tagline: 'From zero to 42% conversion in 90 days',
    category: 'E-Commerce & Marketing',
    image: 'https://res.cloudinary.com/twosapiens/image/upload/v1744980709/Two_sapiens_pu_bag_collection_rfd0xd.png',
    technologies: ['WooCommerce', 'SMM', 'Google Analytics', 'Email Marketing', 'Meta Ads'],
    client: 'Two Sapiens',
    slug: 'two-sapiens',
    website: 'www.twosapiens.in',
    challenge: 'Breaking through in a saturated premium fashion market with no existing digital footprint or brand recognition.',
    solution: 'Crafted a distinctive e-commerce experience with integrated analytics, strategic automation, and hyper-targeted marketing campaigns that connected with ideal customers.',
    results: 'Achieved 42% conversion rate and 3.2x ROAS within first quarter of launch',
    description: 'Launched a premium fashion brand with a custom e-commerce experience. Integrated performance tracking, built email automation, and continue to manage social media and paid ads.'
  },
  {
    id: 2,
    title: 'Corporate Rebrand & Website',
    tagline: '68% more leads through strategic brand evolution',
    category: 'Branding',
    image: 'https://res.cloudinary.com/twosapiens/image/upload/v1744477382/Ambro-bites-logo-banner_d9zmsv.png',
    technologies: ['React', 'GSAP', 'Figma'],
    client: 'Financial Services',
    slug: 'corporate',
    challenge: 'An aging brand identity disconnected from modern audiences, creating a perception gap that was hindering digital growth potential.',
    solution: 'Complete brand identity reimagination with interactive website implementation that resonated with ideal clients and commanded premium positioning.',
    results: '68% increase in lead generation and 5.2x improvement in client perception metrics',
    description: 'Full brand identity redesign with website implementation, focusing on trust and professionalism.'
  },
  {
    id: 3,
    title: 'Hostel Booking System',
    tagline: 'Booking volume increased 135% through digital transformation',
    category: 'Web Apps',
    image: 'https://res.cloudinary.com/twosapiens/image/upload/v1744477383/VK-pg-hostel-logo-banner_emq6ax.png',
    technologies: ['React', 'Node.js', 'MongoDB'],
    client: 'Hostel Owner',
    slug: 'mobile-app',
    challenge: 'Excessive operational costs and consistent guest frustration with unreliable third-party booking platforms and payment processing.',
    solution: 'Custom web application with intuitive real-time availability visualization, frictionless booking flow, and secure payment integration.',
    results: '135% increase in direct bookings and 28% reduction in operational costs',
    description: 'Custom web application allowing customers to book hostel rooms with real-time availability and payment integration.'
  },
  {
    id: 4,
    title: 'Marketing Automation Platform',
    tagline: 'Revolutionized campaign management for 40% efficiency gain',
    category: 'SaaS Development',
    image: 'https://res.cloudinary.com/twosapiens/image/upload/v1745687548/ChatGPT_Image_Apr_26_2025_10_39_21_PM_fr5piu.png',
    technologies: ['MERN Stack', 'AWS', 'API Integrations'],
    client: 'Tech Startup',
    slug: 'saas',
    challenge: 'Complex multi-channel marketing operations with fragmented campaign management causing poor tracking and missed growth opportunities.',
    solution: 'Unified marketing command center with powerful email & WhatsApp campaign orchestration, real-time analytics, and intuitive automation workflows.',
    results: '40% reduction in campaign setup time and 52% increase in engagement metrics across channels',
    description: 'Comprehensive email & WhatsApp marketing platform with campaign management, analytics, and Apollo-inspired automation workflows.'
  },
  {
    id: 5,
    title: 'Gift Wrap',
    tagline: '210% YoY growth through innovative corporate gifting platform',
    category: 'E-Commerce',
    image: 'https://res.cloudinary.com/twosapiens/image/upload/v1745289748/Untitled_design_16_typ8wk.png',
    technologies: ['React', 'GraphQL', 'MongoDB'],
    client: 'Corporate & Office Clients',
    slug: 'marketplace',
    challenge: 'Traditional corporate gifting processes requiring excessive coordination time, manual tracking, and limited personalization options.',
    solution: 'Intuitive gifting platform enabling businesses to effortlessly manage bulk orders, custom packaging, and branded gifts with centralized tracking.',
    results: '210% YoY revenue growth with 85% client retention rate and major enterprise adoption',
    description: 'Built a gifting platform for businesses to easily manage bulk orders, custom packaging, and branded gifts.'
  },
  {
    id: 6,
    title: 'WordPress UI Component Library',
    tagline: 'Development time slashed by 78% for WordPress users',
    category: 'UI Development',
    image: 'https://res.cloudinary.com/twosapiens/image/upload/v1745756816/Ui_Compenents_website_bzrsr9.png',
    technologies: ['HTML', 'Tailwind CSS', 'JavaScript'],
    client: 'WordPress Users',
    slug: 'education',
    challenge: 'WordPress development bottlenecks requiring either expensive page builders or time-consuming custom coding for common UI patterns.',
    solution: 'Premium code-ready UI component system enabling WordPress users to implement sophisticated interfaces without reliance on heavy plugins.',
    results: '78% reduction in development time across pilot users with 4.8/5 satisfaction rating',
    description: 'Code-ready UI components for WordPress users to embed directly in HTML widgets without relying on Elementor or other page builders.'
  }
]

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

// Filter state and animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.5
    }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState('All');
  const categories = ['All', ...new Set(projects.map(project => project.category))];
  
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <>
      <div className="bg-gradient-to-b from-[#f5f8ff] to-white">
        <Header />
        <main className="pt-0">
          {/* Schema.org structured data for SEO */}
          <Script id="structured-data" type="application/ld+json">
            {JSON.stringify(generateStructuredData())}
          </Script>

          <section className="py-36 md:py-52 overflow-hidden relative">
            {/* Background elements */}
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-blue-100 rounded-full opacity-30 blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-purple-100 rounded-full opacity-30 blur-3xl"></div>
            
            <motion.div 
              className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="max-w-5xl mx-auto text-center">
                <motion.h1 
                  className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-[1.1] tracking-tight mb-8"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <div className="mb-3">Turning Bold Ideas into</div>
                  <div className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Unforgettable Business Wins</div>
                </motion.h1>
                <motion.p 
                  className="text-xl sm:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  Explore how visionary brands partnered with HiRank Digital to achieve 
                  transformational success through strategic digital solutions.
                </motion.p>
              </div>
            </motion.div>
          </section>
        </main>
      </div>

      <main className="bg-white">
        {/* Filter section */}
        <section className="py-8 border-b border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-wrap justify-center gap-4">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveFilter(category)}
                    className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      activeFilter === category
                        ? 'bg-blue-600 text-white shadow-md'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-24 md:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {filteredProjects.map((project) => (
                <motion.div 
                  key={project.id} 
                  variants={fadeInUp}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                >
                  <Link
                  href={`/projects/${project.slug}`}
                    className="block h-full"
                >
                    <article
                      className="group bg-white rounded-xl overflow-hidden h-[480px] relative shadow-sm hover:shadow-2xl cursor-pointer transition-all duration-500"
                    >
                      {/* Glass overlay that appears on hover */}
                      <div 
                        className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"
                      ></div>
                      
                      {/* Project image */}
                      <figure className="relative w-full h-full">
                      <Image
                        src={project.image}
                        alt={`${project.title} - ${project.category} case study by HiRank Digital`}
                          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          priority={project.id <= 3}
                          quality={90}
                        />

                        {/* Card content container - always visible but transforms on hover */}
                        <div className="absolute inset-0 flex flex-col justify-end p-8 z-20 transition-all duration-500 group-hover:justify-center">
                          {/* Pre-hover visible content */}
                          <div className="transform transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-8">
                            <span className="text-xs uppercase tracking-wider font-medium text-white/80 bg-blue-600/80 backdrop-blur-sm px-3 py-1 rounded-full mb-4 inline-block">
                              {project.category}
                            </span>
                            <h3 className="text-2xl font-bold text-white mb-2">
                              {project.title}
                            </h3>
                            <p className="text-white/80 text-sm line-clamp-2">
                              {project.description}
                            </p>
                    </div>
                    
                          {/* Post-hover content */}
                          <div className="absolute inset-0 p-8 flex flex-col justify-center opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                            {/* Tagline */}
                            <span className="text-xs uppercase tracking-wider font-semibold text-blue-300 mb-4 inline-block">
                          {project.category}
                        </span>
                      
                            <h3 className="text-2xl font-bold text-white mb-3">
                        {project.title}
                            </h3>
                      
                            <p className="text-lg font-semibold text-blue-200 mb-6">
                              {project.tagline}
                            </p>
                            
                            <div className="text-white/90 text-sm space-y-3 mb-6">
                              <div>
                                <span className="font-semibold text-white text-base block mb-1">Challenge:</span> 
                                <p className="text-white/80 text-sm leading-relaxed line-clamp-2">{project.challenge}</p>
                        </div>
                        <div>
                                <span className="font-semibold text-white text-base block mb-1">Solution:</span>
                                <p className="text-white/80 text-sm leading-relaxed line-clamp-2">{project.solution}</p>
                              </div>
                              <div className="mt-2">
                                <div className="inline-flex items-center bg-emerald-900/30 backdrop-blur-sm border border-emerald-500/20 px-3 py-1.5 rounded-md">
                                  <span className="text-emerald-400 text-xs font-semibold">
                                    <span className="font-bold text-white">Results:</span> {project.results}
                            </span>
                          </div>
                        </div>
                      </div>
                      
                            <div className="flex flex-wrap gap-2 mb-6">
                          {project.technologies.slice(0, 3).map((tech) => (
                            <span 
                              key={tech} 
                                  className="text-xs py-1 px-3 bg-white/10 text-white/90 rounded-full border border-white/10"
                            >
                              {tech}
                            </span>
                          ))}
                          {project.technologies.length > 3 && (
                                <span className="text-xs py-1 px-3 bg-white/10 text-white/90 rounded-full border border-white/10">
                              +{project.technologies.length - 3} more
                            </span>
                          )}
                        </div>
                        
                            <span className="inline-flex items-center mt-2">
                              <span className="text-white font-medium text-sm mr-2 group-hover:mr-3 transition-all">
                                See How We Made It Happen
                          </span>
                            <svg 
                                className="w-5 h-5 text-blue-300 transform group-hover:translate-x-1 transition-transform" 
                              fill="none" 
                                viewBox="0 0 24 24" 
                              stroke="currentColor" 
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                          </span>
                        </div>
                      </div>
                      </figure>
                    </article>
                </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
        
        <section className="py-24 md:py-32 bg-gradient-to-b from-white to-[#f5f8ff] relative overflow-hidden">
          {/* Background elements */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-50 rounded-full opacity-50 blur-3xl -z-10"></div>
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-purple-50 rounded-full opacity-40 blur-3xl -z-10"></div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div 
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="bg-white rounded-2xl shadow-xl p-12 md:p-16 text-center backdrop-blur-sm bg-white/70">
                <motion.h2 
                  className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-[1.2] tracking-tight mb-10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  Your Story Deserves to Be<br />Our Next Success
                </motion.h2>
                <motion.p 
                  className="text-lg sm:text-xl text-gray-600 mb-12 max-w-2xl mx-auto"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  Let's transform your vision into measurable results. Our team combines strategic thinking, cutting-edge design, 
                  and technical expertise to create solutions that drive real business growth.
                </motion.p>
                <motion.div 
                  className="flex flex-col sm:flex-row gap-8 justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Link
                    href="/contact"
                    className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 inline-flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    Schedule Your Free Strategy Session
                    <svg className="w-5 h-5 ml-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Link>
                  <Link
                    href="/services"
                    className="border-2 border-blue-500 hover:bg-blue-50 text-blue-600 px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 inline-flex items-center justify-center gap-2"
                  >
                    Explore Our Services
                  </Link>
                </motion.div>
                <motion.p 
                  className="text-sm text-gray-500 mt-10"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  No obligation. We'll respond within 24 hours.
                </motion.p>
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