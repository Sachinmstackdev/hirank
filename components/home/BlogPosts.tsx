'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'

// Blog post data
const blogPosts = [
  {
    title: 'Leveraging AI to Transform Your Business Operations',
    excerpt: 'Discover how artificial intelligence can streamline workflows and boost productivity in your organization.',
    coverImage: '/blog/ai-business.jpg',
    date: 'March 15, 2024',
    slug: 'leveraging-ai-transform-business'
  },
  {
    title: 'The Future of Automation: 2024 Trends and Beyond',
    excerpt: 'Explore the latest automation trends and learn how they will shape the future of work.',
    coverImage: '/blog/automation-trends.jpg',
    date: 'March 10, 2024',
    slug: 'future-automation-trends-2024'
  },
  {
    title: 'Building Scalable Systems with Modern Architecture',
    excerpt: 'Learn best practices for creating robust and scalable systems that grow with your business needs.',
    coverImage: '/blog/scalable-systems.jpg',
    date: 'March 5, 2024',
    slug: 'building-scalable-systems'
  }
]

export default function BlogPosts() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section indicator */}
        <div className="flex justify-center mb-6">
          <div className="flex items-center text-blue-500 font-medium">
            <span className="w-2 h-2 rounded-full bg-blue-500 mr-2"></span>
            Blog
          </div>
        </div>
        
        {/* Main heading */}
        <div className="text-center max-w-4xl mx-auto mb-8">
          <h2 className="text-3xl sm:text-4xl md:text-[3.25rem] font-medium text-gray-900 leading-[1.2] tracking-tight mb-4">
            Insights & Resources
          </h2>
          <p className="text-gray-600 text-lg">
            Stay updated with trends, strategies, and case studies from our team.
          </p>
        </div>
        
        {/* Blog posts scrollable container for mobile and grid for desktop */}
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {blogPosts.map((post, index) => (
            <div key={index} className="flex-shrink-0 snap-center w-[85%] sm:w-[70%] md:w-auto mx-auto md:mx-0">
              <BlogCard {...post} />
            </div>
          ))}
        </div>

        {/* Pagination dots for mobile */}
        <div className="flex justify-center space-x-2 mt-2 mb-10 md:hidden">
          {blogPosts.map((_, index) => (
            <button
              key={index}
              className="w-2 h-2 rounded-full bg-gray-300 hover:bg-blue-500 focus:bg-blue-500"
              aria-label={`Go to blog post ${index + 1}`}
              onClick={() => {
                if (scrollContainerRef.current) {
                  const containerWidth = scrollContainerRef.current.clientWidth;
                  const itemWidth = containerWidth * 0.85; // Adjust to match the width of items
                  scrollContainerRef.current.scrollTo({
                    left: index * itemWidth,
                    behavior: 'smooth'
                  });
                }
              }}
            />
          ))}
        </div>

        {/* View all link */}
        <div className="text-center">
          <Link 
            href="/blog" 
            className="inline-flex items-center text-blue-500 hover:text-blue-600 font-medium transition-colors"
          >
            View All Articles
            <svg 
              className="w-5 h-5 ml-2" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M17 8l4 4m0 0l-4 4m4-4H3" 
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

// Blog card component
interface BlogCardProps {
  title: string
  excerpt: string
  coverImage: string
  date: string
  slug: string
}

function BlogCard({ title, excerpt, coverImage, date, slug }: BlogCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="h-full"
    >
      <Link 
        href={`/blog/${slug}`}
        className="group block bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 h-full"
      >
        <div className="relative h-48 overflow-hidden">
          <Image
            src={coverImage}
            alt={title}
            width={400}
            height={240}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-6">
          <div className="text-sm text-gray-500 mb-2">{date}</div>
          <h3 className="text-xl font-medium text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-500 transition-colors">
            {title}
          </h3>
          <p className="text-gray-600 mb-4 line-clamp-2">
            {excerpt}
          </p>
          <div className="flex items-center text-blue-500 font-medium">
            Read More
            <svg 
              className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M17 8l4 4m0 0l-4 4m4-4H3" 
              />
            </svg>
          </div>
        </div>
      </Link>
    </motion.div>
  )
} 