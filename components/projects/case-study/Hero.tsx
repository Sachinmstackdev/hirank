'use client'

import { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

interface ExecutiveSummary {
  title: string;
  description: string;
}

interface HeroProps {
  title: string;
  subtitle: string;
  tagline: string;
  clientName: string;
  industry: string;
  timeframe: string;
  heroImage: string;
  logoImage?: string;
  executiveSummary: ExecutiveSummary[];
}

const Hero: FC<HeroProps> = ({
  title,
  subtitle,
  tagline,
  clientName,
  industry,
  timeframe,
  heroImage,
  logoImage,
  executiveSummary
}) => {
  return (
    <section className="relative min-h-screen bg-gray-900 overflow-hidden">
      {/* Background blur gradient */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-blue-900/20 via-transparent to-transparent opacity-70 z-0"></div>
      
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-repeat opacity-5 z-0"></div>
      
      <div className="container relative z-10 mx-auto px-4 lg:px-8 h-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 h-full py-16 md:py-24 items-center">
          {/* Left Content Column */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1.0] }}
            className="text-left flex flex-col h-full justify-center"
          >
            {/* Logo and context info */}
            <div className="flex items-center mb-6">
              {logoImage && (
                <div className="mr-4">
                  <Image 
                    src={logoImage} 
                    alt={`${clientName} logo`}
                    width={80}
                    height={40}
                    className="h-12 w-auto object-contain"
                  />
                </div>
              )}
              
              <div>
                <span className="text-blue-400 text-sm font-medium tracking-wider uppercase block">{industry}</span>
                <span className="text-gray-400 text-sm">{timeframe}</span>
              </div>
            </div>
            
            {/* Category badge */}
            <div className="mb-6">
              <span className="inline-block px-4 py-1 bg-blue-600/20 text-blue-300 rounded-full text-sm font-medium">
                Case Study
              </span>
            </div>
            
            {/* Main heading with highlighted part */}
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
              {title.split(' ').map((word, i) => 
                i === 0 ? <span key={i} className="text-blue-400">{word} </span> : <span key={i}>{word} </span>
              )}
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl text-gray-300 mb-8 max-w-xl leading-relaxed">
              {subtitle}
            </p>
            
            {/* Metrics highlights */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-gray-800/60 border border-gray-700/50 rounded-lg p-4 backdrop-blur-sm">
                <div className="text-3xl font-bold text-blue-400">+40%</div>
                <div className="text-gray-400 text-sm">Conversion Rate</div>
              </div>
              <div className="bg-gray-800/60 border border-gray-700/50 rounded-lg p-4 backdrop-blur-sm">
                <div className="text-3xl font-bold text-blue-400">3x</div>
                <div className="text-gray-400 text-sm">Faster Site</div>
              </div>
              <div className="hidden md:block bg-gray-800/60 border border-gray-700/50 rounded-lg p-4 backdrop-blur-sm">
                <div className="text-3xl font-bold text-blue-400">27%</div>
                <div className="text-gray-400 text-sm">Higher AOV</div>
              </div>
            </div>
            
            {/* CTA button */}
            <div className="mt-4">
              <Link 
                href="#contact" 
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-500 transition-colors duration-300"
              >
                Transform Your E-Commerce
                <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </motion.div>
          
          {/* Right Image Column */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1.0] }}
            className="relative h-[60vh] lg:h-[80vh]"
          >
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-gray-800">
              <Image 
                src={heroImage} 
                alt={`${title} case study hero image`}
                className="object-cover object-center"
                fill
                priority
                quality={95}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
              
              {/* Executive summary cards */}
              <div className="absolute bottom-0 left-0 w-full p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-2 gap-4">
                {executiveSummary.map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + (index * 0.1) }}
                    className="bg-gray-900/80 backdrop-blur-md p-4 rounded-lg border border-gray-700/50"
                  >
                    <h3 className="text-lg font-bold mb-2 text-white">{item.title}</h3>
                    <p className="text-gray-300 text-sm">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Floating tagline */}
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute -top-4 -right-4 bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded-full shadow-lg"
            >
              {tagline}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero 