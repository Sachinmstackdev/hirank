'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'

// Project data
const projects = [
  {
    id: 1,
    title: 'Two Sapiens E-Commerce Launch',
    category: 'E-Commerce & Marketing',
    image: 'https://res.cloudinary.com/twosapiens/image/upload/v1744980709/Two_sapiens_pu_bag_collection_rfd0xd.png',
    technologies: ['woocommerce', 'SMM', 'Google Analytics', 'Email Marketing', 'Meta Ads'],
    client: 'Two Sapiens',
    link: '/projects/two-sapiens',
    description: 'Integrated performance tracking, built email automation, and continue to manage social media and paid ads.'
  },
  {
    id: 2,
    title: 'Corporate Rebrand & Website',
    category: 'Branding',
    image: 'https://res.cloudinary.com/twosapiens/image/upload/v1744477382/Ambro-bites-logo-banner_d9zmsv.png',
    technologies: ['React', 'GSAP', 'Figma'],
    client: 'Financial Services',
    link: '/projects/corporate',
    description: 'Full brand identity redesign with website implementation, focusing on trust and professionalism.'
  },
  {
    id: 3,
    title: 'Hostel Booking System',
    category: 'Web Apps',
    image: 'https://res.cloudinary.com/twosapiens/image/upload/v1744477383/VK-pg-hostel-logo-banner_emq6ax.png',
    technologies: ['React', 'Node.js', 'MongoDB'],
    client: 'Hostel Owner',
    link: '/projects/hostel-booking',
    description: 'Custom web application allowing customers to book hostel rooms with real-time availability and payment integration.'
  },
  {
    id: 4,
    title: 'Marketing Automation Platform',
    category: 'SaaS Development',
    image: 'https://res.cloudinary.com/twosapiens/image/upload/v1745687548/ChatGPT_Image_Apr_26_2025_10_39_21_PM_fr5piu.png',
    technologies: ['MERN Stack', 'AWS', 'API Integrations'],
    client: 'Tech Startup',
    link: '/projects/marketing-automation',
    description: 'Comprehensive email & WhatsApp marketing platform with campaign management, analytics, and Apollo-inspired automation workflows.'
  },
  {
    id: 5,
    title: 'Gift Wrap',
    category: 'E-Commerce',
    image: 'https://res.cloudinary.com/twosapiens/image/upload/v1745289748/Untitled_design_16_typ8wk.png',
    technologies: ['React', 'GraphQL', 'MongoDB'],
    client: 'Corporate & Office Clients',
    link: '/projects/marketplace',
    description: 'Built a gifting platform for businesses to easily manage bulk orders, custom packaging, and branded gifts.',
  },
  {
    id: 6,
    title: 'WordPress UI Component Library',
    category: 'UI Development',
    image: 'https://res.cloudinary.com/twosapiens/image/upload/v1745756816/Ui_Compenents_website_bzrsr9.png',
    technologies: ['HTML', 'Tailwind CSS', 'JavaScript'],
    client: 'WordPress Users',
    link: '/projects/wp-components',
    description: 'Code-ready UI components for WordPress users to embed directly in HTML widgets without relying on Elementor or other page builders.'
  },
  
]

export default function Portfolio() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  return (
    <section className="py-16 bg-white" id="portfolio">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-medium text-black mb-4">
            Client Wins
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        {/* Projects scrollable container for mobile */}
        <div className="relative">
          <div 
            ref={scrollContainerRef}
            className="overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:overflow-visible md:pb-0"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {projects.map((project) => (
              <Link
                href={project.link}
                key={project.id}
                className="flex-shrink-0 snap-center w-[280px] sm:w-[320px] md:w-auto mx-auto md:mx-0"
              >
                <div
                  className="group bg-white border border-gray-100 hover:border-transparent transition-all duration-500 rounded-xl overflow-hidden h-[320px] relative shadow-sm hover:shadow-xl hover:-translate-y-2 cursor-pointer"
                  onMouseEnter={() => setHoveredId(project.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  style={{
                    transition: 'all 0.5s ease-out'
                  }}
                >
                  {/* Subtle background glow effect */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-300 to-purple-600 rounded-xl opacity-0 group-hover:opacity-70 blur-lg group-hover:blur-xl transition-all duration-700 -z-10"></div>
                  {/* Project image (always visible) */}
                  <div className="relative w-full h-full">
                    <Image
                      src={project.image || '/placeholder-project.jpg'}
                      alt={project.title}
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-110 group-hover:brightness-[0.25]"
                      fill
                      sizes="(max-width: 768px) 280px, (max-width: 1200px) 50vw, 33vw"
                    />

                    {/* Overlay that appears on hover */}
                    <div className="absolute inset-0 flex flex-col justify-center p-8 overflow-hidden z-10">
                      {/* Floating animation for category label */}
                      <div
                        className="opacity-0 group-hover:opacity-100 transform -translate-y-8 group-hover:translate-y-0 transition-all duration-700 ease-out mb-2"
                        style={{ transitionDelay: '0.1s' }}
                      >
                        <div className="text-xs text-blue-100 font-medium mb-2 bg-blue-600 bg-opacity-30 backdrop-blur-sm inline-block px-3 py-1 rounded-full border border-blue-400/30">
                          {project.category}
                        </div>
                      </div>

                      {/* Floating animation for title */}
                      <div
                        className="opacity-0 group-hover:opacity-100 transform -translate-y-8 group-hover:translate-y-0 transition-all duration-700 ease-out"
                        style={{ transitionDelay: '0.2s' }}
                      >
                        <h3 className="text-xl font-medium text-white mb-3">
                          {project.title}
                        </h3>
                      </div>

                      {/* Floating animation for description */}
                      <div
                        className="opacity-0 group-hover:opacity-100 transform -translate-y-8 group-hover:translate-y-0 transition-all duration-700 ease-out"
                        style={{ transitionDelay: '0.3s' }}
                      >
                        <p className="text-blue-50 text-sm mb-5 max-w-[90%]">
                          {project.description}
                        </p>
                      </div>

                      {/* Floating animation for tech tags */}
                      <div
                        className="opacity-0 group-hover:opacity-100 transform -translate-y-8 group-hover:translate-y-0 transition-all duration-700 ease-out"
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
                        className="opacity-0 group-hover:opacity-100 transform -translate-y-8 group-hover:translate-y-0 transition-all duration-700 ease-out"
                        style={{ transitionDelay: '0.5s' }}
                      >
                        <span
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
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        
        {/* Pagination dots for mobile */}
        <div className="flex justify-center space-x-2 mt-6 md:hidden">
          {projects.map((_, index) => (
            <button
              key={index}
              className="w-2 h-2 rounded-full bg-gray-300 hover:bg-blue-500 focus:bg-blue-500"
              aria-label={`Go to project ${index + 1}`}
              onClick={() => {
                if (scrollContainerRef.current) {
                  const container = scrollContainerRef.current;
                  const itemWidth = 280; // Width of each item on mobile
                  container.scrollTo({
                    left: index * itemWidth,
                    behavior: 'smooth'
                  });
                }
              }}
            />
          ))}
        </div>

        {/* View All Projects button */}
        <div className="mt-10 text-center">
          <Link href="/projects">
            <span className="inline-flex items-center text-blue-500 hover:text-blue-600 font-medium transition-colors">
              View All Case Studies
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}
