'use client'

import { FC } from 'react'
import { motion } from 'framer-motion'

interface ClientInfoProps {
  client: string
  description: string
  timeline: {
    start: string
    end: string
  }
  industry: string[]
}

const ClientInfo: FC<ClientInfoProps> = ({
  client,
  description,
  timeline,
  industry
}) => {
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Project Description */}
            <div className="md:col-span-2">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">About {client}</h2>
              <p className="text-gray-600 leading-relaxed">{description}</p>
            </div>

            {/* Project Details */}
            <div className="space-y-8">
              {/* Timeline */}
              <div>
                <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-3">Timeline</h3>
                <div className="flex items-center space-x-3 text-gray-900">
                  <span>{timeline.start}</span>
                  <span className="text-gray-400">→</span>
                  <span>{timeline.end}</span>
                </div>
              </div>

              {/* Industry */}
              <div>
                <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-3">Industry</h3>
                <div className="flex flex-wrap gap-2">
                  {industry.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Services Provided */}
              <div>
                <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-3">Services</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Strategy & Consulting
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Web Development
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Digital Marketing
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ClientInfo 