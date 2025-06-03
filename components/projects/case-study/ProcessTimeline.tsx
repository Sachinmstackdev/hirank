'use client'

import { FC } from 'react'
import { motion } from 'framer-motion'
import { TimelineItem } from '@/data/projects'

interface ProcessTimelineProps {
  process: TimelineItem[]
}

const ProcessTimeline: FC<ProcessTimelineProps> = ({ process }) => {
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
              Our Process
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How We Got There
            </h2>
            <p className="text-xl text-gray-600">
              A detailed breakdown of our development process
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-200" />

            {/* Timeline Items */}
            {process.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
              >
                {/* Content */}
                <div
                  className={`w-5/12 ${
                    index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'
                  }`}
                >
                  <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                    {/* Phase Badge */}
                    <div className="inline-flex items-center px-3 py-1 mb-4 bg-blue-50 text-blue-600 rounded-full text-sm font-medium">
                      {item.phase}
                    </div>

                    {/* Date */}
                    <div className="text-sm text-gray-500 mb-2">{item.date}</div>

                    {/* Title */}
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>

                {/* Timeline Point */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4">
                  <div className="w-4 h-4 bg-blue-600 rounded-full" />
                  <div className="absolute w-8 h-8 bg-blue-100 rounded-full -m-2" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Process Summary */}
          <div className="mt-16 bg-gray-50 rounded-xl p-8">
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  Quality Assurance at Every Step
                </h4>
                <p className="text-gray-600">
                  Throughout our process, we maintain rigorous quality standards and regular communication with stakeholders to ensure the best possible outcome.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ProcessTimeline 