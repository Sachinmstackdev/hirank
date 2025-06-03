'use client'

import { FC } from 'react'
import { motion } from 'framer-motion'

interface ChallengesProps {
  challenges: string[]
}

const Challenges: FC<ChallengesProps> = ({ challenges }) => {
  return (
    <section className="py-20 bg-gray-50">
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
              The Challenge
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Problems We Needed to Solve
            </h2>
            <p className="text-xl text-gray-600">
              Key challenges that needed to be addressed for project success
            </p>
          </div>

          {/* Challenges Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {challenges.map((challenge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-semibold">{index + 1}</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-700 leading-relaxed">{challenge}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Visual Indicator */}
          <div className="mt-16 flex justify-center">
            <div className="inline-flex space-x-2">
              {challenges.map((_, index) => (
                <div
                  key={index}
                  className="w-2 h-2 rounded-full bg-blue-600 opacity-50"
                  style={{
                    opacity: index === 0 ? 1 : 0.5
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Challenges 