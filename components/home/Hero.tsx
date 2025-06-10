'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

// Icon component for the lightning bolt
const LightningIcon = () => (
  <div className="inline-flex items-center justify-center w-16 h-16 bg-black rounded-full mx-2 align-middle">
    <svg 
      width="28" 
      height="28" 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className="text-white"
    >
      <path d="M13 2L4.09347 12.6356C3.74552 13.0462 3.57155 13.2515 3.56387 13.4278C3.55731 13.5805 3.62498 13.7272 3.7497 13.8281C3.89398 13.9434 4.16267 13.9434 4.70004 13.9434H12L11 22L19.9065 11.3644C20.2545 10.9538 20.4284 10.7485 20.4361 10.5722C20.4427 10.4195 20.375 10.2728 20.2503 10.1719C20.106 10.0566 19.8373 10.0566 19.3 10.0566H12L13 2Z" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  </div>
)

// Verified badge component
const VerifiedBadge = () => (
  <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
  </svg>
)

export default function Hero() {
  return (
    <section className="relative bg-[#f5f8ff] py-28 md:py-40 overflow-hidden">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col items-center">
          {/* Client trust indicators */}
          <div className="flex items-center mb-12 gap-4 mt-6">
            <div className="flex -space-x-4">
              <div className="w-12 h-12 rounded-full border-2 border-white overflow-hidden">
                <Image 
                  src="https://res.cloudinary.com/twosapiens/image/upload/v1744477382/Ambro-bites-logo-banner_d9zmsv.png"
                  alt="Customer" 
                  width={48} 
                  height={48} 
                  className="object-cover"
                />
              </div>
              <div className="w-12 h-12 rounded-full border-2 border-white overflow-hidden">
                <Image 
                  src="https://res.cloudinary.com/twosapiens/image/upload/v1744477383/VK-pg-hostel-logo-banner_emq6ax.png" 
                  alt="Customer" 
                  width={48} 
                  height={48}
                  className="object-cover"
                />
              </div>
              <div className="w-12 h-12 rounded-full border-2 border-white overflow-hidden">
                <Image 
                  src="https://res.cloudinary.com/twosapiens/image/upload/v1744477383/Two-Sapiens-logo-banner_efgx9t.png" 
                  alt="Customer" 
                  width={48} 
                  height={48}
                  className="object-cover"
                />
              </div>
            </div>
            <div className="flex flex-col ml-2">
              <div className="flex items-center">
                <span className="text-gray-800 font-medium flex items-center">
                  <VerifiedBadge /> 
                  <span className="ml-1">Trusted by Many brands</span>
                </span>
              </div>
              <p className="text-gray-500 text-sm flex items-center gap-1">
                <span className="font-medium text-green-600">97%</span> satisfaction rate
              </p>
            </div>
          </div>

          {/* Main heading */}
          <div className="text-center max-w-4xl mx-auto mb-10">
            <h1 className="text-3xl sm:text-4xl md:text-[3.25rem] font-medium text-gray-900 leading-[1.2] tracking-tight mb-8">
              <span className="block mb-4">Triple Your E-commerce ROI</span>
              <span className="block">With AI-Powered Optimization</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-16 max-w-2xl mx-auto">
              Intelligence Dock delivers data-driven automation, marketplace optimization, and<br className="hidden md:block" />
              high-converting ad campaigns built specifically for D2C brands and Shopify sellers.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-24">
              <Link
                href="/services"
                className="bg-[#4F7DF3] hover:bg-[#3968e7] text-white px-6 py-3 rounded-full text-lg font-medium transition-all duration-300 inline-flex items-center justify-center gap-2 w-full sm:w-auto"
                prefetch={true}
              >
                <span>Get Your Free AI Growth Audit</span>
                <svg className="w-5 h-5 ml-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </div>

          {/* Partner logos */}
          <div className="relative max-w-5xl mx-auto px-4 sm:px-0">
            <div className="grid grid-cols-2 sm:grid-cols-5 md:gap-10 gap-8 place-items-center">
              <div className="w-32 h-8 sm:h-10 flex items-center justify-center">
                <img 
                  src="/patner-logos/logos--meta.svg" 
                  alt="Meta" 
                  className="max-h-full" 
                />
              </div>
              <div className="w-32 h-8 sm:h-10 flex items-center justify-center">
                <img 
                  src="/patner-logos/logos--google.svg" 
                  alt="Google" 
                  className="max-h-full"
                />
              </div>
              <div className="w-32 h-8 sm:h-10 flex items-center justify-center">
                <img 
                  src="/patner-logos/logos--supabase.svg" 
                  alt="Supabase" 
                  className="max-h-full"
                />
              </div>
              <div className="w-32 h-8 sm:h-10 flex items-center justify-center">
                <img 
                  src="/patner-logos/logos--woocommerce.svg" 
                  alt="WooCommerce" 
                  className="max-h-full"
                />
              </div>
              <div className="w-32 h-8 sm:h-10 flex items-center justify-center col-span-2 sm:col-span-1">
                <img 
                  src="/patner-logos/logos--openai.svg" 
                  alt="OpenAI" 
                  className="max-h-full max-w-[120px] sm:max-w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 