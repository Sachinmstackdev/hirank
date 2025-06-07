'use client'

import { motion } from 'framer-motion'

export default function AboutPage() {
  return (
    <main className="flex-1">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            About Intelligence Dock
          </h1>
          <div className="mt-6 max-w-3xl text-xl text-gray-500">
            <p>
              We are a team of passionate developers, designers, and digital strategists dedicated to helping businesses succeed in the digital age.
            </p>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
