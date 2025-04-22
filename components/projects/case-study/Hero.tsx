'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { FadeIn } from './animations'

interface HeroProps {
  title: string
  tagline: string
  clientName: string
  heroImage: string
  logoImage?: string
}

export default function Hero({
  title,
  tagline,
  clientName,
  heroImage,
  logoImage
}: HeroProps) {
  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-b from-gray-900 to-blue-900 text-white">
      {/* Background pattern overlay */}
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:40px_40px] opacity-20"></div>
      
      {/* Hero content */}
      <div className="container relative z-10 mx-auto px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <motion.div 
            className="flex flex-col space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {logoImage && (
              <div className="mb-6 max-w-[200px]">
                <Image 
                  src={logoImage} 
                  alt={`${clientName} logo`} 
                  width={200} 
                  height={80}
                  className="object-contain"
                />
              </div>
            )}
            
            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
              {title}
            </h1>
            
            <p className="max-w-xl text-xl text-blue-100">
              {tagline}
            </p>
            
            <div className="flex items-center space-x-4">
              <span className="inline-flex items-center rounded-full bg-blue-500/10 px-3 py-1 text-sm font-medium text-blue-200 ring-1 ring-inset ring-blue-500/20">
                Case Study
              </span>
              <span className="inline-flex items-center rounded-full bg-blue-500/10 px-3 py-1 text-sm font-medium text-blue-200 ring-1 ring-inset ring-blue-500/20">
                {clientName}
              </span>
            </div>
          </motion.div>
          
          <motion.div
            className="relative aspect-video h-full max-h-[500px] w-full rounded-xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Image
              src={heroImage}
              alt={title}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-white/10"></div>
          </motion.div>
        </div>
      </div>
    </div>
  )
} 