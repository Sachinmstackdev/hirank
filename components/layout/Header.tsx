'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [showHeader, setShowHeader] = useState(true)
  
  useEffect(() => {
    const handleScroll = () => {
      // Show header only when at the very top of the page
      setShowHeader(window.scrollY < 100)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/testimonial', label: 'Testimonial' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <>
      {/* Header that only shows at the top of the page */}
      <motion.header 
        className={`fixed w-full z-40 py-5 ${showHeader ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        transition={{ duration: 0.3 }}
      >
        <div className="container max-w-7xl mx-auto px-6 md:px-8">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <div className="flex items-center justify-center w-8 h-8">
                <svg 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-black"
                >
                  <path d="M13 2L4.09347 12.6356C3.74552 13.0462 3.57155 13.2515 3.56387 13.4278C3.55731 13.5805 3.62498 13.7272 3.7497 13.8281C3.89398 13.9434 4.16267 13.9434 4.70004 13.9434H12L11 22L19.9065 11.3644C20.2545 10.9538 20.4284 10.7485 20.4361 10.5722C20.4427 10.4195 20.375 10.2728 20.2503 10.1719C20.106 10.0566 19.8373 10.0566 19.3 10.0566H12L13 2Z" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="text-xl font-medium">HiRank</span>
            </Link>

            {/* Desktop Navigation - Centered */}
            <ul className="hidden md:flex items-center absolute left-1/2 transform -translate-x-1/2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link 
                    href={item.href} 
                    className="text-[#4B5563] hover:text-[#111827] text-base px-5 font-normal transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Call to Action Button */}
            <div className="hidden md:block">
              <Link 
                href="/contact"
                className="bg-[#4F7DF3] hover:bg-[#3968e7] text-white px-7 py-3 rounded-full text-base font-medium transition-colors inline-flex items-center justify-center gap-2"
              >
                <span>Get started</span>
                <svg className="w-5 h-5 ml-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <div className="space-y-2">
                <span className={`block w-6 h-0.5 bg-gray-600 transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
                <span className={`block w-6 h-0.5 bg-gray-600 transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block w-6 h-0.5 bg-gray-600 transition-transform duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
              </div>
            </button>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isMobileMenuOpen ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className={`fixed inset-0 bg-white/95 backdrop-blur-sm z-30 md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {navItems.map((item) => (
            <Link 
              key={item.href}
              href={item.href}
              className="text-gray-800 text-lg font-medium hover:text-gray-600 transition-colors duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link 
            href="/contact"
            className="bg-[#4F7DF3] hover:bg-[#3968e7] text-white px-7 py-3 rounded-full text-base font-medium transition-colors flex items-center gap-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <span>Get started</span>
            <svg className="w-5 h-5 ml-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </motion.div>
    </>
  )
} 