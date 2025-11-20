'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import ConfettiTrigger from './ConfettiTrigger'

interface EnvelopeRevealProps {
  message: string
}

export default function EnvelopeReveal({ message }: EnvelopeRevealProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)

  const handleOpen = () => {
    setIsOpen(true)
    setShowConfetti(true)
    setTimeout(() => setShowConfetti(false), 1000)
  }

  return (
    <div className="flex flex-col items-center space-y-8">
      <ConfettiTrigger trigger={showConfetti} />
      
      <motion.div
        className="relative cursor-pointer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleOpen}
      >
        {/* Envelope */}
        <motion.div
          className="w-64 h-40 bg-gradient-to-br from-purple-soft to-purple-deep rounded-lg shadow-xl border-4 border-purple-pink relative overflow-hidden"
          animate={isOpen ? { rotateX: 180 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Envelope flap */}
          <motion.div
            className="absolute top-0 left-0 w-full h-20 bg-gradient-to-br from-purple-lavender to-purple-soft"
            style={{
              clipPath: 'polygon(0 0, 100% 0, 50% 100%)'
            }}
            animate={isOpen ? { rotateX: -180 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          
          {/* Envelope body */}
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-br from-purple-deep to-purple-soft" />
          
          {/* Heart seal */}
          <motion.div
            className="absolute top-8 left-1/2 transform -translate-x-1/2 w-8 h-8"
            animate={isOpen ? { scale: 0, opacity: 0 } : { scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="heart bg-gold-soft" />
          </motion.div>
        </motion.div>

        {!isOpen && (
          <motion.p
            className="text-purple-deep font-semibold mt-4 text-center"
            animate={{ opacity: [1, 0.7, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Tap to open 💌
          </motion.p>
        )}
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -50, scale: 0.8 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border-2 border-purple-soft max-w-md mx-4"
          >
            <motion.p
              className="text-purple-deep text-lg leading-relaxed text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              {message}
            </motion.p>
            
            <motion.div
              className="flex justify-center mt-6"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 1.5 }}
            >
              <span className="text-4xl">💜</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}