'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'

// Project categories
const categories = [
  'All',
  'Web Development',
  'E-Commerce',
  'Branding',
  'Mobile Apps'
]

// Project data
const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform Redesign',
    category: 'E-Commerce',
    image: '/portfolio/ecommerce.jpg',
    technologies: ['Next.js', 'Tailwind CSS', 'Stripe'],
    client: 'Fashion Retailer',
    link: '/projects/ecommerce',
    description: 'Complete redesign of an e-commerce platform with a focus on mobile UX and conversion optimization.'
  },
  {
    id: 2,
    title: 'Corporate Rebrand & Website',
    category: 'Branding',
    image: '/portfolio/branding.jpg',
    technologies: ['React', 'GSAP', 'Figma'],
    client: 'Financial Services',
    link: '/projects/corporate',
    description: 'Full brand identity redesign with website implementation, focusing on trust and professionalism.'
  },
  {
    id: 3,
    title: 'Mobile Food Delivery App',
    category: 'Mobile Apps',
    image: '/portfolio/mobile.jpg',
    technologies: ['React Native', 'Firebase', 'Stripe'],
    client: 'Restaurant Chain',
    link: '/projects/mobile-app',
    description: 'Custom mobile application allowing customers to order food for delivery with real-time tracking.'
  },
  {
    id: 4,
    title: 'SaaS Dashboard Interface',
    category: 'Web Development',
    image: '/portfolio/saas.jpg',
    technologies: ['Vue.js', 'D3.js', 'Node.js'],
    client: 'Tech Startup',
    link: '/projects/saas',
    description: 'Comprehensive dashboard with data visualization for a SaaS platform focused on analytics.'
  },
  {
    id: 5,
    title: 'Multi-vendor Marketplace',
    category: 'E-Commerce',
    image: '/portfolio/marketplace.jpg',
    technologies: ['React', 'GraphQL', 'MongoDB'],
    client: 'Retail Consortium',
    link: '/projects/marketplace',
    description: 'Scalable marketplace platform connecting multiple vendors with customers in a seamless shopping experience.'
  },
  {
    id: 6,
    title: 'Educational Platform',
    category: 'Web Development',
    image: '/portfolio/education.jpg',
    technologies: ['Next.js', 'PostgreSQL', 'AWS'],
    client: 'Online Academy',
    link: '/projects/education',
    description: 'Interactive learning platform with course management, video streaming, and student progress tracking.'
  }
]

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
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

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [isHovering, setIsHovering] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [hasViewed, setHasViewed] = useState(false)

  // Filter projects based on category
  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory)

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

  // Handle category change with smooth transitions
  const handleCategoryChange = (category: string) => {
    setActiveCategory(category)
  }

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50" id="portfolio">
      <div className="container mx-auto px-4" ref={containerRef}>
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial="hidden"
          animate={hasViewed ? "visible" : "hidden"}
          variants={fadeInUp}
        >
          <span className="inline-block py-1 px-3 bg-blue-50 text-blue-600 font-medium rounded-full text-sm mb-4">
            Our Work
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Projects</span>
          </h2>
          <p className="text-lg text-gray-600">
            Explore our portfolio of successful projects that showcase our expertise and creativity.
          </p>
        </motion.div>

        {/* Category filters */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial="hidden"
          animate={hasViewed ? "visible" : "hidden"}
          variants={fadeInUp}
          custom={1}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={cn(
                "px-5 py-2 rounded-full text-sm font-medium transition-all duration-300",
                activeCategory === category
                  ? "bg-blue-600 text-white shadow-md shadow-blue-300"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              )}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          animate={hasViewed ? "visible" : "hidden"}
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                variants={fadeInUp}
                whileHover={{ y: -8 }}
                className="flex flex-col bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
                onMouseEnter={() => setIsHovering(project.id)}
                onMouseLeave={() => setIsHovering(null)}
              >
                {/* Project image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <div className={`absolute inset-0 bg-blue-600 opacity-0 transition-opacity duration-300 z-10 ${isHovering === project.id ? 'opacity-20' : ''}`} />
                  <div className="relative h-full w-full">
                    <Image
                      src={project.image || '/placeholder-project.jpg'}
                      alt={project.title}
                      className="object-cover transition-transform duration-700 transform group-hover:scale-110"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div 
                    className={`absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 z-20 ${isHovering === project.id ? 'opacity-100' : ''}`}
                  >
                    <Link 
                      href={project.link}
                      className="px-6 py-3 bg-white text-blue-600 font-medium rounded-full hover:bg-blue-50 transition-colors"
                    >
                      View Project
                    </Link>
                  </div>
                </div>

                {/* Project content */}
                <div className="p-6 flex-grow">
                  <div className="text-sm text-blue-600 font-medium mb-2">
                    {project.category}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-1">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech} 
                        className="text-xs py-1 px-2 bg-gray-100 text-gray-700 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project footer */}
                <div className="px-6 py-4 border-t border-gray-100 bg-gray-50">
                  <div className="flex justify-between items-center">
                    <div className="text-sm text-gray-500">
                      Client: <span className="font-medium text-gray-700">{project.client}</span>
                    </div>
                    <motion.div 
                      initial={{ x: 0 }} 
                      animate={isHovering === project.id ? { x: 5 } : { x: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Link 
                        href={project.link} 
                        className="text-blue-600 font-medium text-sm flex items-center"
                      >
                        Details
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
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Call to action */}
        <motion.div 
          className="mt-16 text-center"
          initial="hidden"
          animate={hasViewed ? "visible" : "hidden"}
          variants={fadeInUp}
          custom={2}
        >
          <Link 
            href="/projects" 
            className="inline-flex items-center px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full transition-colors"
          >
            View All Projects
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
