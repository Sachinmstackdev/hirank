'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

const BentoGrid = () => {
  const [isHovered, setIsHovered] = useState<string | null>(null)
  const [isMounted, setIsMounted] = useState(false)
  
  useEffect(() => {
    setIsMounted(true)
  }, [])

  // To prevent hydration mismatch, don't render animations until client-side
  if (!isMounted) {
    return (
      <div className="w-full max-w-7xl mx-auto p-4 md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-4 md:gap-6">
          {/* Static placeholder content */}
          <div className="relative col-span-1 md:col-span-4 lg:col-span-7 row-span-2 rounded-3xl overflow-hidden bg-indigo-600"></div>
          <div className="col-span-1 md:col-span-2 lg:col-span-5 rounded-3xl overflow-hidden relative bg-pink-500"></div>
          <div className="col-span-1 md:col-span-2 lg:col-span-5 row-span-2 rounded-3xl overflow-hidden relative bg-black"></div>
          <div className="col-span-1 md:col-span-2 lg:col-span-4 rounded-3xl overflow-hidden relative bg-pink-600"></div>
          <div className="col-span-1 md:col-span-2 lg:col-span-4 rounded-3xl overflow-hidden relative bg-blue-800"></div>
          <div className="col-span-1 md:col-span-2 lg:col-span-4 rounded-3xl overflow-hidden relative bg-blue-400"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full max-w-7xl mx-auto p-4 md:p-8">
      <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-4 md:gap-6">
        {/* Main Featured Card */}
        <div 
          className="relative col-span-1 md:col-span-4 lg:col-span-7 row-span-2 rounded-3xl overflow-hidden" 
          onMouseEnter={() => setIsHovered('main')} 
          onMouseLeave={() => setIsHovered(null)}
        >
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-indigo-800 z-0"
            animate={{ 
              scale: isHovered === 'main' ? 1.05 : 1,
              filter: isHovered === 'main' ? 'brightness(1.1)' : 'brightness(1)'
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
          
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] z-10"></div>
          
          <div className="relative z-20 h-full flex flex-col p-8 justify-between">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-8">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20">
                  <svg width="24" height="24" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="20" cy="20" r="18" stroke="white" strokeWidth="2.5" strokeDasharray="2 2"/>
                    <path d="M13 27C13 22.5817 16.5817 19 21 19C25.4183 19 29 22.5817 29 27" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
                    <path d="M29 13C29 17.4183 25.4183 21 21 21C16.5817 21 13 17.4183 13 13" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
                  </svg>
                </div>
                
                <div className="flex flex-wrap gap-2 text-xs">
                  <span className="bg-white/20 text-white px-3 py-1 rounded-full">FAST GROWING</span>
                  <span className="bg-white/20 text-white px-3 py-1 rounded-full">2024</span>
                  <span className="bg-white/20 text-white px-3 py-1 rounded-full">AI POWERED</span>
                </div>
              </div>
              
              <h1 className="text-5xl sm:text-6xl font-bold text-white mb-4 leading-tight">
                70% of web<br />traffic is mobile
              </h1>
              
              <p className="text-white/80 max-w-md">
                Ensure your website is optimized for mobile users with detailed device reports from 360°!
              </p>
            </div>
            
            <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="flex items-center gap-4">
                <a href="#" className="inline-flex items-center">
                  <div className="bg-black rounded-lg overflow-hidden flex items-center px-3 py-2">
                    <div className="w-5 h-5 flex items-center justify-center mr-2">
                      <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.3433 10.7168C14.3508 9.16109 15.1633 7.84234 16.4992 7.01859C15.5508 5.6273 14.0308 4.87105 12.2333 4.75855C10.5333 4.64855 8.73328 5.7523 7.97078 5.7523C7.18328 5.7523 5.64828 4.79605 4.29578 4.79605C2.23828 4.8348 0 6.49105 0 9.8723C0 10.8998 0.189222 11.9623 0.567722 13.0548C1.09272 14.5948 2.95828 18.5748 4.91328 18.5098C5.87578 18.482 6.52828 17.7423 7.82078 17.7423C9.07828 17.7423 9.67828 18.5098 10.7608 18.5098C12.7083 18.4773 14.3958 14.8698 14.8958 13.3273C12.3158 12.0248 12.3433 10.7743 12.3433 10.7168H14.3433Z" fill="white"/>
                        <path d="M11.7509 3.54484C12.5884 2.55984 13.0959 1.21484 12.9559 -0.000164032C11.7684 0.0623359 10.3309 0.799836 9.45841 1.78484C8.66341 2.68484 8.05591 4.04984 8.22091 5.24984C9.52341 5.34734 10.8734 4.55984 11.7509 3.54484Z" fill="white"/>
                      </svg>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs text-gray-400">Download on the</span>
                      <span className="text-sm text-white font-medium">App Store</span>
                    </div>
                  </div>
                </a>
                
                <a href="#" className="inline-flex items-center">
                  <div className="bg-black rounded-lg overflow-hidden flex items-center px-3 py-2">
                    <div className="w-5 h-5 flex items-center justify-center mr-2">
                      <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.33398 0.981934C1.11732 1.21527 1 1.54193 1 1.9486V18.0513C1 18.458 1.11732 18.7847 1.33398 19.018L1.40065 19.078L10.8007 9.8646V9.8046V9.7446L1.40065 0.921934L1.33398 0.981934Z" fill="white"/>
                        <path d="M14.1004 13.0913L11.4004 10.458V9.8047V9.1513L14.1004 6.518L14.1804 6.5647L17.3804 8.368C18.3004 8.8813 18.3004 9.7313 17.3804 10.2513L14.1804 12.0513L14.1004 13.0913Z" fill="white"/>
                        <path d="M14.18 12.0513L11.4 9.80469L1.33398 19.018C1.66732 19.3847 2.20065 19.428 2.80065 19.0613L14.18 12.0513Z" fill="white"/>
                        <path d="M14.18 7.558L2.80065 0.548C2.20065 0.1813 1.66732 0.2313 1.33398 0.598L11.4 9.80467L14.18 7.558Z" fill="white"/>
                      </svg>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs text-gray-400">Get it on</span>
                      <span className="text-sm text-white font-medium">Google Play</span>
                    </div>
                  </div>
                </a>
              </div>
              
              <button className="ml-auto bg-white hover:bg-gray-100 transition-colors text-indigo-600 px-6 py-3 rounded-full font-medium inline-flex items-center">
                Get Started
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        {/* Rating Card */}
        <div 
          className="col-span-1 md:col-span-2 lg:col-span-5 rounded-3xl overflow-hidden relative"
          onMouseEnter={() => setIsHovered('rating')} 
          onMouseLeave={() => setIsHovered(null)}
        >
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-pink-500 to-red-500 z-0"
            animate={{ 
              scale: isHovered === 'rating' ? 1.03 : 1 
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
          
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] z-10"></div>
          
          <div className="relative z-20 h-full p-6 flex flex-col justify-between">
            <div className="text-white/80 font-medium">Rating</div>
            
            <div className="flex items-end">
              <div className="text-7xl font-bold text-white">4.8</div>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-300 mb-2 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            
            <div className="flex items-center mt-4">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full border-2 border-white bg-purple-400/80 flex items-center justify-center text-white text-xs">JD</div>
                <div className="w-8 h-8 rounded-full border-2 border-white bg-blue-400/80 flex items-center justify-center text-white text-xs">KL</div>
              </div>
              <div className="ml-2 text-sm text-white/80 font-medium">42k</div>
            </div>
            
            <p className="text-white/90 text-xs mt-4">
              Explore our customers' reviews on App Store
            </p>
          </div>
        </div>
        
        {/* User Testimonial Card */}
        <div 
          className="col-span-1 md:col-span-2 lg:col-span-5 row-span-2 rounded-3xl overflow-hidden relative"
          onMouseEnter={() => setIsHovered('testimonial')} 
          onMouseLeave={() => setIsHovered(null)}
        >
          <motion.div 
            className="absolute inset-0 bg-black z-0"
            animate={{ 
              scale: isHovered === 'testimonial' ? 1.03 : 1 
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
          
          <div className="absolute inset-0 z-10 overflow-hidden">
            <div className="w-full h-full relative">
              <Image 
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop"
                alt="Woman with curly hair"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
                className="opacity-90 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            </div>
          </div>
          
          <div className="relative h-full p-6 z-30 flex flex-col">
            <div className="bg-black/80 text-white px-3 py-1 rounded-full text-xs inline-flex items-center w-fit">
              <div className="bg-white w-3 h-3 rounded-full mr-1"></div>
              360°_webanalytics
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
            
            <div className="mt-auto">
              <h3 className="text-3xl sm:text-4xl font-bold text-white">
                Open new<br />opportunities
              </h3>
            </div>
          </div>
        </div>
        
        {/* Analyze Card */}
        <div 
          className="col-span-1 md:col-span-2 lg:col-span-4 rounded-3xl overflow-hidden relative"
          onMouseEnter={() => setIsHovered('analyze')} 
          onMouseLeave={() => setIsHovered(null)}
        >
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-pink-600 to-purple-700 z-0"
            animate={{ 
              scale: isHovered === 'analyze' ? 1.03 : 1 
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
          
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] z-10"></div>
          
          <div className="relative z-20 h-full p-6 flex flex-col">
            <div className="border border-white/30 text-white/90 px-3 py-1 rounded-full text-xs inline-flex items-center w-fit mb-10">
              BOOST TRAFFIC
            </div>
            
            <div className="text-white space-y-1">
              <h3 className="text-3xl font-bold">Analyze</h3>
              <h3 className="text-3xl font-bold">Optimize</h3>
              <h3 className="text-3xl font-bold">Succeed</h3>
            </div>
            
            <div className="mt-auto text-white/70 text-sm">
              360degrees.com
            </div>
          </div>
        </div>
        
        {/* 3D Logo Card */}
        <div 
          className="col-span-1 md:col-span-2 lg:col-span-4 rounded-3xl overflow-hidden relative"
          onMouseEnter={() => setIsHovered('logo3d')} 
          onMouseLeave={() => setIsHovered(null)}
        >
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-blue-800 to-indigo-900 z-0"
            animate={{ 
              scale: isHovered === 'logo3d' ? 1.03 : 1 
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
          
          <div className="absolute inset-0 bg-[url('/grid.png')] bg-repeat opacity-30 z-10"></div>
          
          <div className="relative z-20 h-full p-6 flex flex-col items-center justify-center">
            <div className="relative w-36 h-36 flex items-center justify-center">
              <div className="text-5xl font-bold text-white/80">360°</div>
            </div>
          </div>
        </div>
        
        {/* Typography Card */}
        <div 
          className="col-span-1 md:col-span-2 lg:col-span-4 rounded-3xl overflow-hidden relative"
          onMouseEnter={() => setIsHovered('typography')} 
          onMouseLeave={() => setIsHovered(null)}
        >
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 z-0"
            animate={{ 
              scale: isHovered === 'typography' ? 1.03 : 1 
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
          
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] z-10"></div>
          
          <div className="relative z-20 h-full p-6 flex flex-col justify-between">
            <div className="text-white/60 text-sm">Body</div>
            <div className="text-white text-2xl font-medium">Epilogue <span className="ml-2 px-2 py-1 bg-white/20 rounded-md text-sm font-normal">Regular</span></div>
            
            <div className="mt-6">
              <div className="text-white/60 text-sm">Title</div>
              <div className="text-white text-2xl font-medium">Whyte Inktrap <span className="ml-2 px-2 py-1 bg-white/20 rounded-md text-sm font-normal">Medium</span></div>
            </div>
            
            <div className="absolute bottom-6 right-6">
              <div className="rounded-full bg-indigo-500/30 p-4 flex items-center justify-center w-20 h-20 text-center">
                <div className="text-[10px] text-white uppercase leading-tight tracking-wider rotate-[30deg]">
                  DISCOVER<br/>→<br/>DESIGN
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BentoGrid 