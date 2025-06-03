'use client'

import { FC } from 'react'
import { motion } from 'framer-motion'

interface TechStackProps {
  technologies: string[]
}

const TechStack: FC<TechStackProps> = ({ technologies }) => {
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
              Tech Stack
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Technologies Used
            </h2>
            <p className="text-xl text-gray-600">
              Cutting-edge tools and technologies that power the solution
            </p>
          </div>

          {/* Tech Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center text-center"
              >
                {/* Tech Icon (placeholder) */}
                <div className="w-16 h-16 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-blue-600 text-2xl">
                    {tech.charAt(0)}
                  </span>
                </div>

                {/* Tech Name */}
                <h3 className="text-gray-900 font-medium">{tech}</h3>
              </motion.div>
            ))}
          </div>

          {/* Tech Categories */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Frontend */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Frontend</h4>
              <ul className="space-y-2">
                {technologies
                  .filter(tech => ['React', 'Next.js', 'Tailwind'].includes(tech))
                  .map((tech, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <svg className="w-4 h-4 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {tech}
                    </li>
                  ))}
              </ul>
            </div>

            {/* Backend */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Backend</h4>
              <ul className="space-y-2">
                {technologies
                  .filter(tech => ['Node.js', 'Express', 'MongoDB'].includes(tech))
                  .map((tech, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <svg className="w-4 h-4 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {tech}
                    </li>
                  ))}
              </ul>
            </div>

            {/* Tools & Services */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Tools & Services</h4>
              <ul className="space-y-2">
                {technologies
                  .filter(tech => ['Git', 'AWS', 'Docker'].includes(tech))
                  .map((tech, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <svg className="w-4 h-4 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {tech}
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TechStack 