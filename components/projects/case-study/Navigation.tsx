'use client'

import { FC, useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

interface NavigationProps {
  projectTitle: string;
  liveUrl: string;
}

const Navigation: FC<NavigationProps> = ({ projectTitle, liveUrl }) => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  
  useEffect(() => {
    const handleScroll = (): void => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <>
      {/* Fixed Navigation */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <span className={`font-bold text-lg transition-colors duration-300 ${
                isScrolled ? 'text-blue-600' : 'text-white'
              }`}>
                Intelligence Dock
              </span>
            </Link>
            
            <div className="flex items-center space-x-4">
              <Link 
                href="/projects" 
                className={`font-medium transition-colors duration-300 ${
                  isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-gray-200 hover:text-white'
                }`}
              >
                All Projects
              </Link>
              
              <AnimatePresence>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="hidden md:block"
                >
                  <Link
                    href={liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center space-x-1 px-4 py-2 rounded-full transition-colors duration-300 ${
                      isScrolled 
                        ? 'bg-blue-600 text-white hover:bg-blue-700' 
                        : 'bg-white/10 backdrop-blur-sm text-white hover:bg-white/20'
                    }`}
                  >
                    <span>Visit {projectTitle}</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </Link>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </header>
      
      {/* Back to top button */}
      <AnimatePresence>
        {isScrolled && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed bottom-6 right-6 bg-blue-600 text-white p-3 rounded-full shadow-lg z-50 hover:bg-blue-700 transition-colors duration-300"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navigation 