'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

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

export default function Portfolio() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section className="py-16 bg-white" id="portfolio">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-medium text-black mb-4">
            Projects
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-white border border-gray-100 hover:border-transparent transition-all duration-500 rounded-xl overflow-hidden h-[320px] relative shadow-sm hover:shadow-xl hover:-translate-y-2 cursor-pointer"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              style={{
                transition: 'all 0.5s cubic-bezier(0.23, 1, 0.32, 1)'
              }}
            >
              {/* Subtle background glow effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-300 to-purple-600 rounded-xl opacity-0 group-hover:opacity-70 blur-lg group-hover:blur-xl transition-all duration-700 -z-10"></div>
              
              {/* Project image (always visible) */}
              <div className="relative w-full h-full">
                <Image
                  src={project.image || '/placeholder-project.jpg'}
                  alt={project.title}
                  className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-110 group-hover:brightness-[0.25]"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                
                {/* Overlay that appears on hover */}
                <div className="absolute inset-0 flex flex-col justify-center p-8 overflow-hidden z-10">
                  {/* Floating animation for category label */}
                  <div 
                    className="opacity-0 group-hover:opacity-100 transform -translate-y-8 group-hover:translate-y-0 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] mb-2"
                    style={{ transitionDelay: '0.1s' }}
                  >
                    <div className="text-xs text-blue-100 font-medium mb-2 bg-blue-600 bg-opacity-30 backdrop-blur-sm inline-block px-3 py-1 rounded-full border border-blue-400/30">
                      {project.category}
                    </div>
                  </div>
                  
                  {/* Floating animation for title */}
                  <div 
                    className="opacity-0 group-hover:opacity-100 transform -translate-y-8 group-hover:translate-y-0 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]"
                    style={{ transitionDelay: '0.2s' }}
                  >
                    <h3 className="text-xl font-medium text-white mb-3">
                      {project.title}
                    </h3>
                  </div>
                  
                  {/* Floating animation for description */}
                  <div 
                    className="opacity-0 group-hover:opacity-100 transform -translate-y-8 group-hover:translate-y-0 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]"
                    style={{ transitionDelay: '0.3s' }}
                  >
                    <p className="text-blue-50 text-sm mb-5 max-w-[90%]">
                      {project.description}
                    </p>
                  </div>
                  
                  {/* Floating animation for tech tags */}
                  <div 
                    className="opacity-0 group-hover:opacity-100 transform -translate-y-8 group-hover:translate-y-0 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]"
                    style={{ transitionDelay: '0.4s' }}
                  >
                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span 
                          key={tech} 
                          className="text-xs py-1 px-3 bg-white bg-opacity-10 backdrop-blur-sm text-white rounded-full border border-white/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Floating animation for button */}
                  <div 
                    className="opacity-0 group-hover:opacity-100 transform -translate-y-8 group-hover:translate-y-0 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]"
                    style={{ transitionDelay: '0.5s' }}
                  >
                    <Link 
                      href={project.link}
                      className="inline-flex items-center px-5 py-2 bg-white text-blue-600 text-sm font-medium rounded-full transform hover:scale-105 transition-transform duration-300 hover:shadow-md hover:shadow-blue-500/20"
                    >
                      View Project
                      <svg 
                        className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" 
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
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
