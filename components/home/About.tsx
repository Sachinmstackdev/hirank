'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'

const AboutSection = () => {
  // References for scroll animations
  const containerRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLDivElement>(null)
  const valuesRef = useRef<HTMLDivElement>(null)
  const processRef = useRef<HTMLDivElement>(null)
  
  // Determine if elements are in view for triggering animations
  const isSectionInView = useInView(sectionRef, { once: true, margin: "-50px 0px" })
  const isValuesInView = useInView(valuesRef, { once: true, margin: "-50px 0px" })
  const isProcessInView = useInView(processRef, { once: true, margin: "-50px 0px" })
  
  // Parallax scroll effect
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })
  
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.3, 1, 1, 0.3])

  // Our values/principles
  const valueItems = [
    { 
      title: 'Quality Over Quantity', 
      description: 'We believe in delivering exceptional work rather than rushing through projects.',
      icon: (
        <svg className="w-8 h-8 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
        </svg>
      )
    },
    { 
      title: 'Client Partnership', 
      description: 'We see our clients as partners and collaborate closely throughout the entire process.',
      icon: (
        <svg className="w-8 h-8 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
        </svg>
      )
    },
    { 
      title: 'Innovation', 
      description: 'We embrace new technologies and approaches to deliver cutting-edge solutions.',
      icon: (
        <svg className="w-8 h-8 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
        </svg>
      )
    },
  ]

  // Process steps
  const processSteps = [
    { number: '01', title: 'Discovery', description: 'We start by understanding your business, goals, and challenges.' },
    { number: '02', title: 'Strategy', description: 'We develop a tailored strategy to address your specific needs.' },
    { number: '03', title: 'Design', description: 'Our creative team crafts visually stunning and functional designs.' },
    { number: '04', title: 'Development', description: 'We build robust and scalable digital solutions using modern technologies.' },
    { number: '05', title: 'Launch', description: 'We ensure a smooth deployment and provide ongoing support.' },
  ]

  return (
    <section id="about" className="relative py-20 md:py-32 bg-[#f5f8ff] overflow-hidden">
      <div ref={containerRef} className="container max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Background elements */}
        <motion.div 
          className="absolute -right-40 top-40 w-64 h-64 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"
          style={{ y: y1, opacity }}
        />
        
        {/* About indicator */}
        <div className="flex justify-center mb-6">
          <div className="flex items-center text-blue-500 font-medium">
            <span className="w-2 h-2 rounded-full bg-blue-500 mr-2"></span>
            About Us
          </div>
        </div>
        
        {/* Main about section */}
        <div ref={sectionRef} className="mb-20">
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-[3.25rem] font-medium text-gray-900 leading-[1.2] tracking-tight mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            A fresh approach to <span className="text-blue-500">digital solutions</span>
          </motion.h2>
          
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <motion.div 
              className="w-full md:w-1/2 aspect-video relative rounded-lg overflow-hidden shadow-lg"
              initial={{ opacity: 0, x: -30 }}
              animate={isSectionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Image 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop"
                alt="Team collaboration"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </motion.div>
            
            <motion.div 
              className="w-full md:w-1/2"
              initial={{ opacity: 0, x: 30 }}
              animate={isSectionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <p className="text-lg text-gray-600 mb-4">
                We're a young, passionate digital agency committed to helping businesses establish a strong online presence. Though we're just getting started, our dedication to quality and client satisfaction sets us apart.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our small but talented team brings fresh perspectives and personalized attention to every project. We believe that being small allows us to be more agile, responsive, and connected to our clients' needs.
              </p>
              
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-blue-400 flex items-center justify-center text-white text-xs shadow-md">
                      {['AK', 'JD', 'MR'][i-1]}
                    </div>
                  ))}
                </div>
                <p className="text-sm text-gray-500">Our small but mighty team</p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <div className="bg-white px-4 py-2 rounded-full text-blue-500 text-sm font-medium border border-gray-100">Web Design</div>
                <div className="bg-white px-4 py-2 rounded-full text-blue-500 text-sm font-medium border border-gray-100">Brand Identity</div>
                <div className="bg-white px-4 py-2 rounded-full text-blue-500 text-sm font-medium border border-gray-100">Digital Marketing</div>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Our values section */}
        
        
        {/* Our process section */}
        
      </div>
    </section>
  )
}

export default AboutSection 