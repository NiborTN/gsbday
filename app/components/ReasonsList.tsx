'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

interface ReasonsListProps {
  reasons: string[]
}

export default function ReasonsList({ reasons }: ReasonsListProps) {
  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold text-purple-deep text-center mb-8"
      >
        10 Reasons I Love You 💜
      </motion.h2>
      
      {reasons.map((reason, index) => (
        <ReasonItem 
          key={index} 
          reason={reason} 
          index={index} 
        />
      ))}
    </div>
  )
}

function ReasonItem({ reason, index }: { reason: string; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50, scale: 0.9 }}
      animate={isInView ? { 
        opacity: 1, 
        x: 0, 
        scale: 1 
      } : {}}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: "easeOut"
      }}
      className="flex items-start space-x-4 group"
    >
      {/* Number Badge */}
      <motion.div
        className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-soft to-purple-deep rounded-full flex items-center justify-center shadow-lg"
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <span className="text-white font-bold text-lg">
          {index + 1}
        </span>
      </motion.div>

      {/* Reason Card */}
      <motion.div
        className="flex-1 bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border-2 border-purple-soft/50 group-hover:border-purple-soft transition-colors"
        whileHover={{ y: -2 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <p className="text-purple-deep text-lg leading-relaxed">
          {reason}
        </p>
        
        {/* Decorative heart */}
        <motion.div
          className="flex justify-end mt-3"
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ delay: index * 0.1 + 0.3 }}
        >
          <motion.span
            className="text-purple-pink text-xl"
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            💜
          </motion.span>
        </motion.div>
      </motion.div>

      {/* Checkmark Animation */}
      <motion.div
        className="flex-shrink-0 w-8 h-8 rounded-full bg-green-500 flex items-center justify-center"
        initial={{ scale: 0, opacity: 0 }}
        animate={isInView ? { 
          scale: [0, 1.2, 1], 
          opacity: 1 
        } : {}}
        transition={{ 
          delay: index * 0.1 + 0.5,
          duration: 0.5,
          ease: "easeOut"
        }}
      >
        <span className="text-white text-sm">✓</span>
      </motion.div>
    </motion.div>
  )
}