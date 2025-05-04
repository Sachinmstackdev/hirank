'use client'

import { FC, ReactNode } from 'react'
import { motion } from 'framer-motion'

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  from?: 'bottom' | 'top' | 'left' | 'right' | 'none';
}

export const FadeIn: FC<FadeInProps> = ({ 
  children, 
  delay = 0, 
  duration = 0.6,
  className = '',
  from = 'bottom'
}) => {
  // Initial animation values based on direction
  let initialY = 0;
  let initialX = 0;
  
  if (from === 'bottom') initialY = 25;
  if (from === 'top') initialY = -25;
  if (from === 'left') initialX = -25;
  if (from === 'right') initialX = 25;

  return (
    <motion.div
      initial={{ opacity: 0, y: initialY, x: initialX }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: '-75px' }}
      transition={{ 
        duration, 
        delay,
        ease: [0.25, 0.1, 0.25, 1.0] // Cubic bezier for smoother easing
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export const scaleAnimation = {
  initial: { scale: 0.96, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  exit: { scale: 0.96, opacity: 0 },
  transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1.0] }
}

export const fadeAnimation = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.3, ease: 'easeOut' }
} 