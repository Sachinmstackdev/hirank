'use client'

import { FC } from 'react'
import { motion } from 'framer-motion'

interface KeyTakeawaysProps {
  takeaways: string[]
}

const KeyTakeaways: FC<KeyTakeawaysProps> = ({ takeaways }) => {
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
              Key Takeaways
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Project Highlights
            </h2>
            <p className="text-xl text-gray-600">
              Essential learnings and achievements from this project
            </p>
          </div>

          {/* Takeaways Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {takeaways.map((takeaway, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start">
                  {/* Number Badge */}
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-semibold">{index + 1}</span>
                    </div>
                  </div>

                  {/* Takeaway Content */}
                  <div>
                    <p className="text-gray-700 leading-relaxed">{takeaway}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Summary Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16 bg-blue-50 rounded-xl p-8"
          >
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  Continuous Improvement
                </h4>
                <p className="text-gray-600">
                  These learnings have been integrated into our process, making each project better than the last. We continuously refine our approach based on real-world results and feedback.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default KeyTakeaways 