'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// FAQ data
const faqItems = [
  {
    id: 1,
    question: "What types of businesses do you work with?",
    answer: "We work with businesses of all sizes, from startups to established enterprises, across various industries including e-commerce, SaaS, healthcare, education, and more. Our solutions are tailored to meet the specific needs and goals of each client."
  },
  {
    id: 2,
    question: "How long does it typically take to complete a project?",
    answer: "Project timelines vary depending on complexity and scope. A basic website might take 2-4 weeks, while a full e-commerce platform with custom features could take 6-12 weeks. During our initial consultation, we'll provide a detailed timeline based on your specific requirements."
  },
  {
    id: 3,
    question: "Do you provide ongoing support after the project is completed?",
    answer: "Yes, we offer various maintenance and support packages to ensure your digital assets continue to perform optimally. These can include technical support, content updates, security monitoring, performance optimization, and strategic guidance for future enhancements."
  },
  {
    id: 4,
    question: "What is your approach to ensuring my website ranks well in search engines?",
    answer: "We implement SEO best practices during development, including proper semantic HTML, optimized page speed, mobile-friendliness, and schema markup. We can also provide comprehensive SEO services including keyword research, content optimization, technical SEO audits, and ongoing optimization strategies."
  },
  {
    id: 5,
    question: "How do you measure the success of digital marketing campaigns?",
    answer: "We track key performance indicators (KPIs) aligned with your business goals, which may include conversion rates, cost per acquisition, return on ad spend (ROAS), engagement metrics, and revenue growth. We provide regular reports and insights to demonstrate campaign performance and guide optimization efforts."
  },
  {
    id: 6,
    question: "What platforms and technologies do you specialize in?",
    answer: "We have expertise in various technologies including WordPress, Shopify, WooCommerce, React, Next.js, Node.js, and more. For digital marketing, we're proficient with Google Ads, Meta Ads, LinkedIn Ads, Google Analytics, and various marketing automation tools. We recommend the most suitable technologies based on your specific requirements."
  }
]

export default function FAQSection() {
  return (
    <section className="py-20 md:py-32 bg-white dark:bg-gray-900 overflow-hidden">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section indicator */}
        <div className="flex justify-center mb-6">
          <div className="flex items-center text-blue-500 dark:text-blue-400 font-medium">
            <span className="w-2 h-2 rounded-full bg-blue-500 dark:bg-blue-400 mr-2"></span>
            Frequently Asked Questions
          </div>
        </div>
        
        {/* Main heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-medium text-gray-900 dark:text-white leading-tight mb-6">
            Common Questions About Our Services
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Get answers to the most frequently asked questions about how we can help your business grow.
          </p>
        </div>
        
        {/* FAQ accordion */}
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqItems.map((item) => (
              <FAQItem 
                key={item.id}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </div>
        </div>
        
        {/* Contact prompt */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Don't see your question here? We're happy to help.
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
          >
            Contact us
            <svg className="ml-2 w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

interface FAQItemProps {
  question: string;
  answer: string;
}

function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <motion.div 
      className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
    >
      <button
        className="flex justify-between items-center w-full px-6 py-5 text-left bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <h3 className="text-lg font-medium text-gray-900 dark:text-white">{question}</h3>
        <span className={`ml-6 flex-shrink-0 text-blue-500 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 9L12 16L5 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 py-5 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
              <p className="text-gray-600 dark:text-gray-300">{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
} 