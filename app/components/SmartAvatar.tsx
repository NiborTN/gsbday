'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

interface SmartAvatarProps {
  currentSection: number
}

export default function SmartAvatar({ currentSection }: SmartAvatarProps) {
  // Define the state for each section
  const sectionStates = [
    { animation: 'fly-in', position: 'center', size: 'lg' },      // 0: Intro
    { animation: 'wave', position: 'right', size: 'md' },         // 1: Cute Message
    { animation: 'playful', position: 'left', size: 'md' },       // 2: Playful
    { animation: 'glide', position: 'center', size: 'md' },       // 3: Romantic
    { animation: 'sit', position: 'center', size: 'md' },         // 4: Emotional
    { animation: 'peek', position: 'right', size: 'sm' },         // 5: Reveal (New state)
    { animation: 'camera', position: 'left', size: 'md' },        // 6: Slideshow (New state)
    { animation: 'float', position: 'right', size: 'md' },        // 7: Reasons
    { animation: 'listen', position: 'left', size: 'md' },        // 8: Audio
    { animation: 'final-flight', position: 'center', size: 'lg' },// 9: Surprise
    { animation: 'goodbye', position: 'center', size: 'lg' },     // 10: Ending
  ]

  // Get current state or default to the last defined one if out of bounds
  const currentState = sectionStates[currentSection] || sectionStates[sectionStates.length - 1]

  const sizeClasses = {
    sm: 'w-24 h-24',
    md: 'w-40 h-40', 
    lg: 'w-64 h-64'
  }

  const positionClasses = {
    left: 'left-[10%] md:left-[15%]',
    center: 'left-1/2 -translate-x-1/2',
    right: 'right-[10%] md:right-[15%] auto-left' // auto-left to reset left property if needed
  }

  // Animation variants
  const variants = {
    'fly-in': { x: [-500, 0], y: [-200, 0], rotate: [-45, 0], opacity: [0, 1] },
    'wave': { rotate: [0, 15, -5, 10, 0], transition: { repeat: Infinity, duration: 2 } },
    'playful': { y: [0, -30, 0], rotate: [0, 10, -10, 0], transition: { repeat: Infinity, duration: 1.5 } },
    'glide': { x: [0, 50, -50, 0], y: [0, 20, 0], transition: { repeat: Infinity, duration: 4, ease: "easeInOut" } },
    'sit': { y: [0, 5, 0], scale: [1, 1.02, 1], transition: { repeat: Infinity, duration: 3 } },
    'peek': { x: [100, 0], rotate: [20, 0], transition: { type: "spring" } },
    'camera': { scale: [1, 1.2, 1], rotate: [0, -5, 5, 0], transition: { repeat: Infinity, duration: 3 } },
    'float': { y: [0, -40, 0], rotate: [0, 5, -5, 0], transition: { repeat: Infinity, duration: 5, ease: "easeInOut" } },
    'listen': { scale: [1, 1.1, 1], rotate: [0, -5, 0], transition: { repeat: Infinity, duration: 2 } },
    'final-flight': { y: [0, -100, -50], scale: [1, 1.5, 1], rotate: [0, 360], transition: { duration: 3 } },
    'goodbye': { opacity: [1, 0], scale: [1, 0], y: [0, -200], transition: { duration: 2 } }
  }

  return (
    <motion.div
      className={`fixed top-1/2 -translate-y-1/2 z-50 pointer-events-none transition-all duration-1000 ease-in-out ${
        currentState.position === 'center' ? 'left-1/2 -translate-x-1/2' : 
        currentState.position === 'left' ? 'left-[10%]' : 'right-[10%]'
      }`}
      animate={currentState.animation}
      variants={variants}
      initial={false} // Prevent re-animating on mount if possible, or handle smoothly
    >
      <motion.div 
        className={`${sizeClasses[currentState.size as keyof typeof sizeClasses]} relative filter drop-shadow-2xl`}
        layoutId="avatar-container"
      >
        <Image 
          src="/gsbday/Fairy-avatar.webp" 
          alt="Birthday Fairy" 
          fill
          className="object-contain"
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
          unoptimized
        />
      </motion.div>
      
      {/* Persistent Sparkles */}
      <motion.div 
        className="absolute -top-4 -right-4 w-6 h-6 bg-yellow-300 rounded-full blur-sm"
        animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </motion.div>
  )
}
