'use client'

import { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Metric } from '@/data/projects'

export interface HeroProps {
  title: string
  client: string
  image: string
  logo?: string
  metrics: Metric[]
  subtitle?: string
}

const Hero: FC<HeroProps> = ({
  title,
  client,
  image,
  logo,
  metrics = [],
  subtitle
}) => {
  return (
    <section className="pt-32 pb-16 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          {/* Client Logo */}
          {logo && (
            <div className="mb-8">
              <Image
                src={logo}
                alt={`${client} logo`}
                width={120}
                height={40}
                className="mx-auto"
              />
            </div>
          )}

          {/* Client Badge */}
          <div className="inline-flex items-center px-4 py-1.5 mb-6 bg-blue-50 text-blue-600 rounded-full text-sm font-medium">
            <span className="mr-2 bg-blue-600 w-2 h-2 rounded-full"></span>
            {client}
          </div>

          {/* Title & Subtitle */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">{title}</h1>
          {subtitle && (
            <p className="text-xl text-gray-600 leading-relaxed">{subtitle}</p>
          )}
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative rounded-xl overflow-hidden shadow-2xl mb-16"
        >
          <Image
            src={image}
            alt={title}
            width={1200}
            height={675}
            className="w-full h-auto"
            priority
          />
        </motion.div>

        {/* Metrics Grid */}
        {metrics && metrics.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-4xl mx-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {metrics.map((metric, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    {metric.prefix}{metric.value}{metric.suffix}
                  </div>
                  <p className="text-gray-600">{metric.label}</p>
                  {metric.change && (
                    <div className="mt-2 text-sm text-green-600 font-medium">
                      +{metric.change}% increase
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors duration-300"
          >
            Work With Us
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero 