'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface ScrollRevealSectionProps {
  children: React.ReactNode
  className?: string
}

export default function ScrollRevealSection({ children, className = '' }: ScrollRevealSectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })

  // Calculate a pseudo-random horizontal offset based on section position
  const sectionIndex = useRef(Math.random())
  const horizontalOffset = sectionIndex.current > 0.5 ? 50 : -50
  const rotationOffset = sectionIndex.current > 0.5 ? 2 : -2

  return (
    <motion.section
      ref={ref}
      className={`section-container ${className}`}
      initial={{ 
        opacity: 0, 
        y: 100,
        x: horizontalOffset,
        rotateY: rotationOffset,
        scale: 0.9
      }}
      animate={isInView ? { 
        opacity: 1, 
        y: 0,
        x: 0,
        rotateY: 0,
        scale: 1
      } : { 
        opacity: 0, 
        y: 100,
        x: horizontalOffset,
        rotateY: rotationOffset,
        scale: 0.9
      }}
      transition={{
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
        opacity: { duration: 0.6 },
        x: { duration: 1, ease: "easeOut" },
        rotateY: { duration: 1.2, ease: "easeOut" }
      }}
      style={{ perspective: '1000px' }}
    >
      <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6">
        {children}
      </div>
    </motion.section>
  )
}
