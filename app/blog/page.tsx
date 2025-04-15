'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState } from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

// Structured data for blog listing with enhanced properties
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "headline": "Insights & Resources",
  "description": "Explore strategies, case studies, and industry trends from our team.",
  "url": "https://hirank.com/blog",
  "publisher": {
    "@type": "Organization",
    "name": "HiRank",
    "logo": {
      "@type": "ImageObject",
      "url": "https://hirank.com/logo.png"
    }
  }
}

// Categories for filter
const categories = [
  "All",
  "SEO & Content Strategy",
  "Content Marketing",
  "Local SEO",
  "SEO Updates",
  "Analytics",
  "Link Building"
]

// Sample blog posts data
const blogPosts = [
  {
    id: 1,
    title: "How to Improve Your Website's SEO Ranking in 2023",
    excerpt: "Learn the latest strategies and tactics to boost your website's visibility and organic traffic in 2023.",
    category: "SEO & Content Strategy",
    date: "Jun 12, 2023",
    imageUrl: "/images/blog/seo-ranking.jpg",
    slug: "improve-seo-ranking-2023",
  },
  {
    id: 2,
    title: "Content Marketing Strategies That Drive Conversion",
    excerpt: "Discover how to create compelling content that not only attracts visitors but converts them into customers.",
    category: "Content Marketing",
    date: "May 28, 2023",
    imageUrl: "/images/blog/content-marketing.jpg",
    slug: "content-marketing-conversion-strategies",
  },
  {
    id: 3,
    title: "The Ultimate Guide to Local SEO for Small Businesses",
    excerpt: "A comprehensive guide to help small businesses dominate local search results and attract nearby customers.",
    category: "Local SEO",
    date: "May 15, 2023",
    imageUrl: "/images/blog/local-seo.jpg",
    slug: "local-seo-small-business-guide",
  },
  {
    id: 4,
    title: "Understanding Google's Latest Algorithm Update",
    excerpt: "Breaking down the recent Google algorithm changes and how they impact your website's performance.",
    category: "SEO Updates",
    date: "Apr 30, 2023",
    imageUrl: "/images/blog/algorithm-update.jpg",
    slug: "google-algorithm-update-analysis",
  },
  {
    id: 5,
    title: "5 Key Metrics to Track for SEO Success",
    excerpt: "Focus on these critical metrics to measure and improve your SEO performance effectively.",
    category: "Analytics",
    date: "Apr 22, 2023",
    imageUrl: "/images/blog/seo-metrics.jpg",
    slug: "key-seo-metrics-tracking",
  },
  {
    id: 6,
    title: "Building Backlinks: Quality vs. Quantity",
    excerpt: "Why focusing on high-quality backlinks is more important than simply accumulating large numbers of links.",
    category: "Link Building",
    date: "Apr 10, 2023",
    imageUrl: "/images/blog/backlinks.jpg",
    slug: "backlinks-quality-vs-quantity",
  },
];

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
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

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")

  // Filter posts based on category and search query
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  // Get recent posts for sidebar
  const recentPosts = [...blogPosts].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  ).slice(0, 5)

  return (
    <>
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <Header />
      
      <main className="pt-24 pb-16 bg-gray-50">
        <div className="container max-w-7xl mx-auto px-6 md:px-8">
          {/* Hero Section */}
          <motion.section 
            className="mb-12 text-center"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-r from-[#667EEA] to-[#764BA2] bg-clip-text text-transparent">
              Insights & Resources
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Explore strategies, case studies, and industry trends from our team.
            </p>

            {/* Search and Filter */}
            <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto mb-12">
              <div className="relative flex-1">
                <input
                  type="search"
                  placeholder="Search articles..."
                  className="w-full px-5 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#667EEA] focus:border-transparent"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  aria-label="Search articles"
                />
                <svg className="w-5 h-5 absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <select
                className="px-5 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#667EEA] focus:border-transparent bg-white"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                aria-label="Filter by category"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </motion.section>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <motion.section 
              className="flex-grow"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post) => (
                  <motion.article 
                    key={post.id} 
                    className="rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-[1.02] bg-white h-full flex flex-col"
                    variants={fadeInUp}
                    whileHover={{ y: -5 }}
                  >
                    {/* Blog Image */}
                    <div className="relative aspect-[16/9] w-full overflow-hidden">
                      <Image
                        src={post.imageUrl}
                        alt={post.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority={post.id <= 3}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <span className="absolute bottom-4 left-4 text-white text-sm font-medium px-3 py-1 bg-black/20 rounded-full backdrop-blur-sm">
                        {post.category}
                      </span>
                    </div>
                    
                    <div className="p-6 flex-grow flex flex-col">
                      <time className="text-sm text-gray-500 mb-2">{post.date}</time>
                      <h2 className="text-xl font-bold mb-3 line-clamp-2 hover:text-[#667EEA] transition-colors">
                        <Link href={`/blog/${post.slug}`}>
                          {post.title}
                        </Link>
                      </h2>
                      <p className="text-gray-600 mb-6 line-clamp-2 text-sm flex-grow">
                        {post.excerpt}
                      </p>
                      <Link 
                        href={`/blog/${post.slug}`}
                        className="text-[#667EEA] font-medium hover:text-[#764BA2] transition-colors inline-flex items-center mt-auto group"
                      >
                        Read Article
                        <svg className="w-4 h-4 ml-1 transform transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </motion.article>
                ))}
              </div>

              {/* Load More Button */}
              {filteredPosts.length > 0 && (
                <div className="flex justify-center mt-12">
                  <button 
                    className="bg-white border-2 border-[#667EEA] text-[#667EEA] px-8 py-3 rounded-full hover:bg-[#667EEA] hover:text-white transition-colors font-medium flex items-center gap-2"
                    aria-label="Load more articles"
                  >
                    Load More Articles
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </button>
                </div>
              )}

              {filteredPosts.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-600">No articles found matching your criteria.</p>
                </div>
              )}
            </motion.section>

            {/* Sidebar */}
            <aside className="w-full lg:w-80 space-y-8">
              {/* Recent Posts */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h2 className="text-xl font-bold mb-4">Recent Posts</h2>
                <div className="space-y-4">
                  {recentPosts.map(post => (
                    <Link 
                      key={post.id}
                      href={`/blog/${post.slug}`}
                      className="flex items-start gap-3 group"
                    >
                      <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                        <Image
                          src={post.imageUrl}
                          alt={post.title}
                          fill
                          className="object-cover"
                          sizes="64px"
                        />
                      </div>
                      <div>
                        <h3 className="font-medium text-sm group-hover:text-[#667EEA] transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                        <time className="text-xs text-gray-500">{post.date}</time>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Categories */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h2 className="text-xl font-bold mb-4">Categories</h2>
                <div className="space-y-2">
                  {categories.filter(cat => cat !== "All").map(category => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`block w-full text-left px-4 py-2 rounded-lg transition-colors ${
                        selectedCategory === category
                          ? 'bg-[#667EEA] text-white'
                          : 'hover:bg-gray-100'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* CTA Box */}
              <div className="bg-gradient-to-r from-[#667EEA] to-[#764BA2] rounded-xl p-6 text-white">
                <h2 className="text-xl font-bold mb-3">Need Help Growing?</h2>
                <p className="text-white/90 mb-4">Let our experts help you achieve your business goals with our proven strategies.</p>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 bg-white text-[#667EEA] rounded-full font-medium hover:bg-opacity-90 transition-colors"
                >
                  Work With Us
                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </aside>
          </div>

          {/* Newsletter CTA */}
          <section className="rounded-2xl bg-gradient-to-r from-[#667EEA] to-[#764BA2] p-10 md:p-16 text-white mt-16">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Want smarter growth? Get free resources monthly.</h2>
                <p className="text-white/80">Join our newsletter and get exclusive tips, case studies, and tools directly to your inbox.</p>
              </div>
              
              <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-1 px-5 py-3 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                  required
                  aria-label="Email address for newsletter"
                />
                <button 
                  type="submit" 
                  className="bg-white text-[#667EEA] px-6 py-3 rounded-full font-medium hover:bg-opacity-90 transition-colors"
                >
                  Subscribe
                </button>
              </form>
              <p className="text-xs text-white/60 text-center mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </>
  )
} 