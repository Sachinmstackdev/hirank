'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Enhanced FAQ data with more e-commerce specific questions and better answers
const faqs = [
  {
    id: 1,
    question: "What makes your e-commerce solutions different from other agencies?",
    answer: "Unlike generalist agencies, we specialize exclusively in e-commerce growth with proven expertise across Shopify, headless commerce, and marketplace optimization. Our approach combines technical development with conversion-focused design and data-driven marketing strategies, consistently delivering 30-70% conversion rate improvements. We've built and scaled 50+ successful e-commerce brands with our comprehensive methodology."
  },
  {
    id: 2,
    question: "How long does it take to build a custom e-commerce store?",
    answer: "A complete custom e-commerce store typically takes 6-10 weeks from concept to launch, depending on complexity and requirements. Our process includes strategy/planning (1-2 weeks), design (2-3 weeks), development (3-4 weeks), and testing/optimization (1 week). For businesses needing to launch faster, we offer accelerated timelines with our rapid-deployment framework that can deliver a fully functional store in as little as 3-4 weeks."
  },
  {
    id: 3,
    question: "Do you work with established stores or only new businesses?",
    answer: "We work with both established e-commerce stores looking to scale and new businesses launching their first online presence. For established stores, we offer specialized optimization services to improve conversion rates, enhance user experience, and increase average order value. Our proven growth framework has helped businesses at all stages, from pre-revenue startups to established brands generating $10M+ in annual revenue."
  },
  {
    id: 4,
    question: "What e-commerce platforms do you specialize in?",
    answer: "We specialize in Shopify, Shopify Plus, headless commerce solutions (using Next.js, React), WooCommerce, and marketplace optimization for Amazon, Etsy, and Walmart. Each platform has its strengths, and we recommend the best fit based on your specific business needs, growth goals, and operational requirements. Our technical team has deep expertise across all these platforms to deliver exceptional results."
  },
  {
    id: 5,
    question: "How do you approach performance marketing for e-commerce?",
    answer: "Our data-driven approach to e-commerce marketing focuses on maximizing ROAS (Return on Ad Spend) through comprehensive channel strategies. We begin with customer research and conversion funnel analysis, then implement targeted campaigns across Google, Meta, TikTok and other platforms. Our clients typically see a 2.5-4x improvement in ROAS within 90 days through our systematic optimization process, A/B testing, and audience refinement strategies."
  },
  {
    id: 6,
    question: "What ongoing support do you provide after launch?",
    answer: "After launch, we offer flexible support options including dedicated maintenance packages, growth partnerships, and on-demand technical assistance. Our post-launch services include performance monitoring, conversion optimization, feature enhancements, technical support, and strategic guidance. Many clients choose our comprehensive growth partnership, which includes regular optimization, technical support, and strategic consulting to continuously improve results."
  },
  {
    id: 7,
    question: "How do your pricing models work?",
    answer: "We offer transparent, value-based pricing with three main models: project-based fixed pricing for defined scope work, monthly retainers for ongoing services, and performance partnerships for certain marketing services. Project fees typically range from $5,000-$50,000 depending on scope and complexity, while retainers start at $2,500/month. We provide detailed proposals with clear deliverables and timelines, and never surprise clients with hidden costs."
  }
]

export default function FAQSection() {
  // Track expanded item for accordion functionality
  const [expandedId, setExpandedId] = useState<number | null>(null)
  
  // Toggle accordion item
  const toggleItem = (id: number) => {
    setExpandedId(expandedId === id ? null : id)
  }
  
  return (
    <section id="faq" className="py-20 md:py-32 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
        {/* Section header with clear value proposition */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-1.5 mb-4 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 dark:from-blue-600/20 dark:to-indigo-600/20 text-blue-600 dark:text-blue-300 border border-blue-200 dark:border-blue-800/30 rounded-full text-sm font-medium">
            <span className="mr-2 bg-blue-600 dark:bg-blue-500 w-2 h-2 rounded-full"></span>
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white leading-tight mb-4">
            Everything You Need to Know About <br />
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Our E-Commerce Services
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Get answers to commonly asked questions about our process, pricing, and approach to helping e-commerce brands succeed online.
          </p>
        </div>
        
        {/* FAQ items with enhanced accessibility and animation */}
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.id} className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
              <motion.button
                onClick={() => toggleItem(faq.id)}
                className="flex justify-between items-center w-full px-6 py-5 text-left bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                initial={false}
                aria-expanded={expandedId === faq.id}
                aria-controls={`faq-content-${faq.id}`}
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {faq.question}
                </h3>
                <span className="ml-6 flex-shrink-0 text-blue-600 dark:text-blue-400">
                  <svg 
                    className={`w-6 h-6 transition-transform duration-200 ${expandedId === faq.id ? 'transform rotate-180' : ''}`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </motion.button>
              
              <AnimatePresence initial={false}>
                {expandedId === faq.id && (
                  <motion.div
                    id={`faq-content-${faq.id}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-gray-200 dark:border-gray-700 overflow-hidden"
                  >
                    <div className="px-6 py-5 bg-white dark:bg-gray-800">
                      <p className="text-gray-600 dark:text-gray-300">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
        
        {/* CTA section to drive conversions */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 md:p-12 shadow-xl">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Still Have Questions?
            </h3>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Our e-commerce specialists are available to discuss your specific needs and how we can help your business grow online.
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center px-8 py-3.5 bg-white hover:bg-gray-100 text-gray-900 font-medium rounded-full transition-all duration-200"
            >
              Schedule a Free Strategy Call
              <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
        
        {/* Trust signals section to boost credibility */}
        <div className="mt-20">
          <div className="text-center mb-10">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Trusted by Leading E-Commerce Brands
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Join hundreds of successful online stores who trust our expertise
            </p>
          </div>
          
          {/* Testimonial grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Testimonial 1 */}
            <motion.div 
              className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm"
              whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[1, 2, 3, 4, 5].map(star => (
                    <svg key={star} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <blockquote className="text-gray-700 dark:text-gray-300 mb-4">
                "After trying two other agencies, we found this team to be the only ones who truly understood e-commerce. They rebuilt our Shopify store and increased our conversion rate by 43% in just 60 days. The ROI has been incredible."
              </blockquote>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-700 mr-3"></div>
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">Sarah Johnson</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Founder, EcoLuxe</p>
                </div>
              </div>
            </motion.div>
            
            {/* Testimonial 2 */}
            <motion.div 
              className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm"
              whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[1, 2, 3, 4, 5].map(star => (
                    <svg key={star} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <blockquote className="text-gray-700 dark:text-gray-300 mb-4">
                "Their performance marketing team transformed our advertising strategy. We went from struggling with a 1.2x ROAS to consistently hitting 4.5x ROAS on our campaigns. They're now an essential part of our growth strategy."
              </blockquote>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-700 mr-3"></div>
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">Michael Chen</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Marketing Director, TechGear</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
} 