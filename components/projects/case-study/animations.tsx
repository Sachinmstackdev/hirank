'use client'

import { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface FadeInProps {
  children: ReactNode
  delay?: number
  duration?: number
  y?: number
  x?: number
  className?: string
}

export function FadeIn({ 
  children, 
  delay = 0, 
  duration = 0.5, 
  y = 20, 
  x = 0,
  className = ""
}: FadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y, x }}
      animate={{ opacity: 1, y: 0, x: 0 }}
      transition={{ duration, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

export const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5
    }
  }
} 