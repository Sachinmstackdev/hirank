'use client'

import { FC } from 'react'
import { motion } from 'framer-motion'
import { Feature } from '@/data/projects'

interface SolutionProps {
  solution: string
  features: Feature[]
}

const Solution: FC<SolutionProps> = ({ solution, features }) => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-1.5 mb-6 bg-blue-50 text-blue-600 rounded-full text-sm font-medium">
              <span className="mr-2 bg-blue-600 w-2 h-2 rounded-full"></span>
              Our Solution
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              How We Solved It
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {solution}
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
              >
                {/* Feature Icon */}
                {feature.icon && (
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-blue-600 text-xl">{feature.icon}</span>
                  </div>
                )}

                {/* Feature Image */}
                {feature.image && (
                  <div className="mb-4 rounded-lg overflow-hidden">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-auto"
                    />
                  </div>
                )}

                {/* Feature Content */}
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-16 bg-blue-50 rounded-xl p-8">
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  Why This Approach?
                </h4>
                <p className="text-gray-600">
                  Our solution was carefully crafted to address each challenge while ensuring scalability and long-term success. We focused on creating a foundation that would support future growth and adaptation.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Solution 