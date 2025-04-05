'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Header() {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY
      
      if (currentScrollY > lastScrollY) { // scrolling down
        setIsVisible(false)
      } else { // scrolling up
        setIsVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', controlNavbar)

    // cleanup function
    return () => {
      window.removeEventListener('scroll', controlNavbar)
    }
  }, [lastScrollY])

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/work', label: 'Our Work' },
    { href: '/about', label: 'About Us' },
    { href: '/privacy', label: 'Privacy' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <>
      {/* Animated Header with Navbar */}
      <motion.header 
        className="fixed w-full z-40 flex justify-center pt-6"
        initial={{ y: 0 }}
        animate={{ y: isVisible ? 0 : -100 }}
        transition={{ duration: 0.3 }}
      >
        <div className="bg-white/70 backdrop-blur-md rounded-full px-4 sm:px-6 w-[95%] sm:w-auto">
          <nav className="flex items-center justify-between h-14">
            <Link href="/" className="group">
              <span className="text-xl sm:text-2xl font-semibold transition-all duration-300 group-hover:text-purple-500 group-hover:drop-shadow-[0_0_10px_rgba(168,85,247,0.5)] group-hover:filter-none">
                HiRank
              </span>
            </Link>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex items-center space-x-4 lg:space-x-8 ml-8">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link 
                    href={item.href} 
                    className="text-gray-600 text-sm relative group"
                  >
                    <span className="transition-colors duration-300 group-hover:text-gray-900">
                      {item.label}
                    </span>
                    <span className="absolute -bottom-[18px] left-1/2 -translate-x-1/2 text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300">•</span>
                  </Link>
                </li>
              ))}
              <li className="ml-4">
                <Link 
                  href="/contact"
                  className="bg-gray-900 text-white px-4 py-2 rounded-full text-sm transition-all duration-300 hover:bg-gray-800 hover:scale-105 hover:shadow-md"
                >
                  Get in Touch
                </Link>
              </li>
            </ul>

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
            className="bg-gray-900 text-white px-6 py-3 rounded-full text-lg transition-all duration-300 hover:bg-gray-800 hover:scale-105 hover:shadow-md"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Get in Touch
          </Link>
        </div>
      </motion.div>
    </>
  )
} 