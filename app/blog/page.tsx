'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { supabase } from '@/lib/supabase'
import Head from 'next/head'
import { allPosts } from 'contentlayer/generated'
import { compareDesc } from 'date-fns'

// Structured data for blog listing with enhanced properties
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "headline": "eCommerce Growth Insights & Resources",
  "description": "Expert strategies, case studies, and actionable advice to scale your eCommerce business.",
  "url": "https://IDock.com/blog",
  "publisher": {
    "@type": "Organization",
    "name": "IDock",
    "logo": {
      "@type": "ImageObject",
      "url": "https://IDock.com/logo.png"
    }
  }
}

// Categories optimized for eCommerce focus
const categories = [
  "All",
  "eCommerce Strategy",
  "Conversion Optimization",
  "Shopify Development",
  "Headless Commerce",
  "Tech Stack",
  "Customer Journey",
  "Growth Marketing",
  "UX Design",
  "Automation"
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

export const metadata = {
  title: 'Blog - Your Site Name',
  description: 'Read our latest blog posts and articles',
}

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [subscribeMessage, setSubscribeMessage] = useState<{text: string, type: 'success' | 'error'} | null>(null)
  const [hasScrolled, setHasScrolled] = useState(false)
  const newsletterRef = useRef<HTMLDivElement>(null)
  const featuredPostRef = useRef<HTMLDivElement>(null)

  const posts = allPosts
    .filter((post) => post.published)
    .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))

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

  // Track scroll behavior for analytics and performance optimization
  useEffect(() => {
    // Track when user has scrolled down enough to see content
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      
      if (scrollTop > 300 && !hasScrolled) {
        setHasScrolled(true)
        // You could send an analytics event here
        console.log('User scrolled significantly')
      }
      
      // Check if newsletter is in view and track if needed
      if (newsletterRef.current) {
        const rect = newsletterRef.current.getBoundingClientRect()
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          console.log('Newsletter section in view')
          // Track newsletter impression
        }
      }
    }
    
    // Optimize image lazy loading based on viewport
    const handleResize = () => {
      // Adjust sizes property for Image components based on viewport
      // This is a placeholder for actual dynamic adjustment logic
      console.log('Window resized')
    }
    
    // Add event listeners with throttling for performance
    let scrollTimer: NodeJS.Timeout | null = null
    const throttledScroll = () => {
      if (scrollTimer === null) {
        scrollTimer = setTimeout(() => {
          handleScroll()
          scrollTimer = null
        }, 200)
      }
    }
    
    window.addEventListener('scroll', throttledScroll)
    window.addEventListener('resize', handleResize)
    
    return () => {
      window.removeEventListener('scroll', throttledScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [hasScrolled])

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email) return
    
    setIsSubmitting(true)
    setSubscribeMessage(null)
    
    try {
      // Insert data into the newsletter_subscribers table
      const { error } = await supabase
        .from('newsletter_subscribers')
        .insert([{ 
          email,
          source: 'blog_page',
          created_at: new Date().toISOString()
        }])
      
      if (error) {
        // Check if it's a duplicate email error
        if (error.code === '23505') {
          setSubscribeMessage({
            text: 'You are already subscribed to our newsletter.',
            type: 'error'
          })
        } else {
          console.error('Error submitting email:', error)
          setSubscribeMessage({
            text: 'Something went wrong. Please try again.',
            type: 'error'
          })
        }
      } else {
        setEmail('')
        setSubscribeMessage({
          text: 'Thank you for subscribing!',
          type: 'success'
        })
        
        // You could send an event to analytics here
        console.log('New newsletter subscription')
      }
    } catch (error) {
      console.error('Exception when submitting email:', error)
      setSubscribeMessage({
        text: 'Something went wrong. Please try again.',
        type: 'error'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  // Meta tags
  const pageTitle = "eCommerce Growth Insights & Resources | IDock"
  const pageDescription = "Expert strategies, case studies, and actionable advice to scale your eCommerce business. Explore our guides on Shopify, headless commerce, UX, and growth."
  const pageUrl = "https://IDock.com/blog"
  const pageImage = "https://IDock.com/images/blog/blog-meta-image.jpg"

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={pageImage} />
        <meta property="og:image:alt" content="IDock eCommerce Blog" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={pageImage} />
        <link rel="canonical" href={pageUrl} />
      </Head>
      
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <Header />
      
      <main className="pt-24 pb-16 bg-[#f5f8ff]" id="main-content">
        <div className="container max-w-7xl mx-auto px-6 md:px-8">
          {/* Breadcrumbs for SEO and navigation */}
          <nav className="mb-8" aria-label="Breadcrumbs">
            <ol className="flex flex-wrap items-center text-sm text-gray-500">
              <li className="flex items-center">
                <Link href="/" className="hover:text-[#4F7DF3] transition-colors">
                  Home
                </Link>
                <svg className="w-3 h-3 mx-2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </li>
              <li>
                <span className="text-gray-700 font-medium">Blog</span>
              </li>
            </ol>
          </nav>
          
          {/* Hero Section */}
          <motion.section 
            className="mb-12 text-center"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <span className="inline-block px-4 py-1 mb-4 text-sm font-medium text-[#4F7DF3] bg-[#4F7DF3]/10 rounded-full">
              For eCommerce Founders & Growth Teams
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-[3.25rem] font-medium text-gray-900 leading-[1.2] tracking-tight mb-6">
              eCommerce Growth Insights & Resources
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Expert strategies, case studies, and actionable advice to scale your eCommerce business.
            </p>
            
            {/* Category Pills */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                    selectedCategory === category
                      ? 'bg-[#4F7DF3] text-white'
                      : 'bg-white hover:bg-gray-100 text-gray-700'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative max-w-xl mx-auto mb-8">
              <input
                type="search"
                placeholder="Search for eCommerce topics, tactics, or tools..."
                className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#4F7DF3] focus:border-transparent shadow-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search articles"
              />
              <svg className="w-5 h-5 absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </motion.section>

          {/* Featured Article */}
          {filteredPosts.length > 0 && selectedCategory === "All" && !searchQuery && (
            <motion.div 
              ref={featuredPostRef}
              className="mb-16 rounded-2xl bg-white shadow-md overflow-hidden"
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
            >
              <div className="flex flex-col md:flex-row">
                <div className="relative md:w-1/2 aspect-video md:aspect-auto">
                  <Image
                    src={filteredPosts[0].imageUrl}
                    alt={filteredPosts[0].title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent md:bg-gradient-to-r md:from-black/60 md:via-black/30 md:to-transparent" />
                  <span className="absolute top-4 left-4 text-white text-sm font-medium px-3 py-1 bg-[#4F7DF3] rounded-full">
                    Featured Post
                  </span>
                </div>
                
                <div className="p-8 md:w-1/2 flex flex-col justify-center">
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-[#4F7DF3]/10 text-[#4F7DF3] rounded-full mb-4">
                    {filteredPosts[0].category}
                  </span>
                  <time className="text-sm text-gray-500 mb-2">{filteredPosts[0].date}</time>
                  <h2 className="text-2xl md:text-3xl font-medium text-gray-900 mb-4">
                    <Link href={`/blog/${filteredPosts[0].slug}`} className="hover:text-[#4F7DF3] transition-colors">
                      {filteredPosts[0].title}
                    </Link>
                  </h2>
                  <p className="text-lg text-gray-600 mb-6">
                    {filteredPosts[0].excerpt}
                  </p>
                  <Link 
                    href={`/blog/${filteredPosts[0].slug}`}
                    className="inline-flex items-center px-6 py-3 bg-[#4F7DF3] hover:bg-[#3968e7] text-white rounded-full font-medium transition-all duration-300 self-start"
                  >
                    Read Full Article
                    <svg className="w-5 h-5 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <motion.section 
              className="flex-grow"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              {/* View toggle */}
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-xl font-medium text-gray-800">
                  {searchQuery ? `Search Results for "${searchQuery}"` : 
                   selectedCategory !== "All" ? `${selectedCategory} Articles` : 
                   "Latest Articles"}
                  <span className="text-sm font-normal text-gray-500 ml-2">
                    {filteredPosts.length} {filteredPosts.length === 1 ? 'article' : 'articles'}
                  </span>
                </h2>
                
                <div className="flex items-center gap-2 border border-gray-200 rounded-lg p-1 bg-white">
                  <button 
                    className="p-2 rounded-md bg-[#4F7DF3] text-white"
                    aria-label="Grid view"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                    </svg>
                  </button>
                  <button 
                    className="p-2 rounded-md text-gray-500 hover:bg-gray-100"
                    aria-label="List view"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPosts.map((post) => (
                  <motion.article 
                    key={post.id} 
                    className="rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px] bg-white h-full flex flex-col"
                    variants={fadeInUp}
                  >
                    {/* Blog Image */}
                    <Link href={`/blog/${post.slug}`} className="block relative aspect-[16/9] w-full overflow-hidden">
                      <Image
                        src={post.imageUrl}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority={post.id <= 3}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    </Link>
                    
                    <div className="p-6 flex-grow flex flex-col">
                      <div className="flex items-center justify-between mb-3">
                        <span className="px-3 py-1 text-xs font-medium bg-[#4F7DF3]/10 text-[#4F7DF3] rounded-full">
                          {post.category}
                        </span>
                        <time className="text-sm text-gray-500">{post.date}</time>
                      </div>
                      
                      <h2 className="text-xl font-medium mb-3 line-clamp-2 text-gray-900">
                        <Link href={`/blog/${post.slug}`} className="hover:text-[#4F7DF3] transition-colors">
                          {post.title}
                        </Link>
                      </h2>
                      
                      <p className="text-gray-600 mb-6 line-clamp-3 text-base flex-grow">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                        <Link 
                          href={`/blog/${post.slug}`}
                          className="text-[#4F7DF3] font-medium hover:text-[#3968e7] transition-colors inline-flex items-center group"
                        >
                          Read Article
                          <svg className="w-4 h-4 ml-1 transform transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                          </svg>
                        </Link>
                        
                        <button 
                          className="text-gray-400 hover:text-[#4F7DF3] transition-colors"
                          aria-label="Bookmark this article"
                        >
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>

              {/* Load More Button */}
              {filteredPosts.length > 0 && (
                <div className="flex justify-center mt-12">
                  <button 
                    className="bg-white border-2 border-[#4F7DF3] text-[#4F7DF3] px-8 py-3 rounded-full hover:bg-[#4F7DF3] hover:text-white transition-colors font-medium flex items-center gap-2 shadow-sm"
                    aria-label="Load more articles"
                  >
                    Load More Articles
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </button>
                </div>
              )}

              {/* Empty State */}
              {filteredPosts.length === 0 && (
                <div className="text-center py-12 bg-white rounded-xl shadow-sm">
                  <svg className="w-16 h-16 mx-auto text-gray-300 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <p className="text-gray-600 mb-2">No articles found matching your criteria.</p>
                  <button 
                    onClick={() => {setSearchQuery(''); setSelectedCategory('All')}}
                    className="text-[#4F7DF3] font-medium hover:text-[#3968e7] transition-colors inline-flex items-center"
                  >
                    Clear filters and see all articles
                  </button>
                </div>
              )}
            </motion.section>

            {/* Sidebar */}
            <aside className="w-full lg:w-96 space-y-8">
              {/* eCommerce Lead Magnet */}
              <div className="bg-white rounded-xl overflow-hidden shadow-md">
                <div className="relative h-36">
                  <Image
                    src="/images/blog/ecommerce-guide-header.jpg"
                    alt="eCommerce Growth Guide" 
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-[#4F7DF3]/80 flex items-center justify-center">
                    <span className="bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-medium">
                      Free eCommerce Resource
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-medium mb-3 text-gray-900">2024 eCommerce Tech Stack Guide</h3>
                  <p className="text-gray-600 text-base mb-4">
                    The complete framework for selecting the right technology to scale your eCommerce business in 2024.
                  </p>
                  <form className="flex flex-col space-y-3">
                    <input 
                      type="email" 
                      placeholder="Enter your email" 
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#4F7DF3] focus:border-transparent"
                      required
                    />
                    <button 
                      type="submit" 
                      className="w-full bg-[#4F7DF3] hover:bg-[#3968e7] text-white px-4 py-3 rounded-lg font-medium transition-all duration-300"
                    >
                      Get Free Guide
                    </button>
                  </form>
                </div>
              </div>

              {/* Recent Posts */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h2 className="text-xl font-medium mb-6 flex items-center text-gray-900">
                  <svg className="w-5 h-5 mr-2 text-[#4F7DF3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Recent Posts
                </h2>
                <div className="space-y-6">
                  {recentPosts.map(post => (
                    <Link 
                      key={post.id}
                      href={`/blog/${post.slug}`}
                      className="flex items-start gap-4 group"
                    >
                      <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                        <Image
                          src={post.imageUrl}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                          sizes="80px"
                        />
                      </div>
                      <div>
                        <span className="text-xs text-[#4F7DF3] font-medium">{post.category}</span>
                        <h3 className="font-medium text-sm group-hover:text-[#4F7DF3] transition-colors line-clamp-2 text-gray-800">
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
                <h2 className="text-xl font-medium mb-6 flex items-center text-gray-900">
                  <svg className="w-5 h-5 mr-2 text-[#4F7DF3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                  </svg>
                  eCommerce Topics
                </h2>
                <div className="space-y-2">
                  {categories.filter(cat => cat !== "All").map(category => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`flex items-center justify-between w-full px-4 py-3 rounded-lg transition-colors ${
                        selectedCategory === category
                          ? 'bg-[#4F7DF3] text-white'
                          : 'hover:bg-gray-100 text-gray-700'
                      }`}
                    >
                      <span>{category}</span>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        selectedCategory === category
                          ? 'bg-white/20'
                          : 'bg-gray-100'
                      }`}>
                        {blogPosts.filter(post => post.category === category).length}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Our Expertise */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h2 className="text-xl font-medium mb-6 flex items-center text-gray-900">
                  <svg className="w-5 h-5 mr-2 text-[#4F7DF3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                  Our eCommerce Expertise
                </h2>
                <div className="space-y-4">
                  {[
                    { name: "Headless Commerce", icon: "📱" },
                    { name: "Shopify Development", icon: "🛒" },
                    { name: "Custom eCommerce", icon: "🔧" },
                    { name: "UI/UX Design", icon: "🎨" },
                    { name: "Performance Optimization", icon: "⚡" }
                  ].map(service => (
                    <Link
                      key={service.name}
                      href={`/services/${service.name.toLowerCase().replace(/\s+/g, '-')}`}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <span className="text-xl">{service.icon}</span>
                      <span className="font-medium text-gray-800">{service.name}</span>
                    </Link>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <Link 
                    href="/services"
                    className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-gray-50 hover:bg-gray-100 rounded-lg text-[#4F7DF3] font-medium transition-colors"
                  >
                    View All Services
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>

              {/* CTA Box */}
              <div className="bg-[#4F7DF3] rounded-xl p-6 text-white">
                <div className="flex gap-4 items-center mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h2 className="text-xl font-medium">Need Help Growing?</h2>
                </div>
                <p className="text-white/90 mb-5">Let our experts help you achieve your eCommerce goals with our proven strategies.</p>
                <div className="space-y-3">
                  <Link
                    href="/contact"
                    className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-white text-[#4F7DF3] rounded-full font-medium hover:bg-opacity-90 transition-colors"
                  >
                    Schedule a Strategy Call
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </Link>
                  <Link
                    href="/case-studies"
                    className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-transparent border border-white/30 text-white rounded-full font-medium hover:bg-white/10 transition-colors"
                  >
                    View Case Studies
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </Link>
                </div>
              </div>
            </aside>
          </div>

          {/* Newsletter CTA */}
          <section 
            ref={newsletterRef}
            className="rounded-2xl bg-[#4F7DF3] p-10 md:p-16 text-white mt-16"
          >
            <div className="max-w-5xl mx-auto">
              <div className="flex flex-col md:flex-row gap-10 items-center">
                <div className="md:w-2/3">
                  <span className="px-3 py-1 text-xs font-semibold bg-white/20 rounded-full backdrop-blur-sm inline-block mb-4">
                    EXCLUSIVE INSIGHTS
                  </span>
                  <h2 className="text-2xl md:text-3xl font-medium mb-4">Get eCommerce Growth Tactics Delivered Monthly</h2>
                  <p className="text-lg text-white/80 mb-6">
                    Join 3,500+ eCommerce founders and marketers getting actionable strategies, tech reviews, and growth tactics that aren't shared anywhere else.
                  </p>
                  
                  <div className="flex flex-wrap gap-3 mb-6">
                    {["Conversion Tactics", "Tech Stack Reviews", "Case Studies", "Industry Benchmarks"].map(item => (
                      <span key={item} className="flex items-center text-sm">
                        <svg className="w-4 h-4 mr-1.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        {item}
                      </span>
                    ))}
                  </div>
                  
                  <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-xl">
                    <input 
                      type="email" 
                      placeholder="Your email address" 
                      className="flex-1 px-5 py-3 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-white shadow-sm"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={isSubmitting}
                      aria-label="Email address for newsletter"
                    />
                    <button 
                      type="submit" 
                      className="bg-white text-[#4F7DF3] px-6 py-3 rounded-full font-medium hover:bg-opacity-90 transition-colors shadow-sm disabled:opacity-70 whitespace-nowrap"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Subscribing...' : 'Subscribe Free'}
                    </button>
                  </form>
                  
                  {subscribeMessage && (
                    <p className={`text-sm mt-4 ${
                      subscribeMessage.type === 'success' ? 'text-white' : 'text-red-200'
                    }`}>
                      {subscribeMessage.text}
                    </p>
                  )}
                  
                  <p className="text-xs text-white/60 mt-4 flex items-center">
                    <svg className="w-4 h-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    We respect your privacy. Unsubscribe at any time.
                  </p>
                </div>

                <div className="hidden md:block md:w-1/3">
                  <div className="relative h-64 w-full">
                    <Image 
                      src="/images/blog/newsletter-preview.jpg"
                      alt="Newsletter Preview"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
      
      {/* Generate LD+JSON for BlogPosting Schema */}
      {filteredPosts.map(post => (
        <script
          key={post.id}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              "headline": post.title,
              "description": post.excerpt,
              "image": `https://IDock.com${post.imageUrl}`,
              "datePublished": post.date,
              "author": {
                "@type": "Organization",
                "name": "IDock"
              },
              "publisher": {
                "@type": "Organization",
                "name": "IDock",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://IDock.com/logo.png"
                }
              },
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": `https://IDock.com/blog/${post.slug}`
              }
            })
          }}
        />
      ))}
    </>
  )
} 