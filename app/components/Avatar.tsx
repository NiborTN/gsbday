'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import Image from 'next/image'

interface AvatarProps {
  animation?: 'fly-in' | 'wave' | 'playful' | 'glide' | 'sit' | 'listen' | 'final-flight' | 'goodbye'
  position?: 'left' | 'center' | 'right'
  size?: 'sm' | 'md' | 'lg'
}

export default function Avatar({ 
  animation = 'fly-in', 
  position = 'center',
  size = 'md' 
}: AvatarProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const sizeClasses = {
    sm: 'w-20 h-20',
    md: 'w-32 h-32', 
    lg: 'w-48 h-48'
  }

  const positionClasses = {
    left: 'left-4',
    center: 'left-1/2 transform -translate-x-1/2',
    right: 'right-4'
  }

  const animations = {
    'fly-in': {
      initial: { x: -200, y: -100, opacity: 0, rotate: -45 },
      animate: { x: 0, y: 0, opacity: 1, rotate: 0 },
      transition: { duration: 1.5, ease: "easeOut" }
    },
    'wave': {
      initial: { scale: 1 },
      animate: { 
        scale: [1, 1.1, 1],
        rotate: [0, 10, -10, 0]
      },
      transition: { 
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse" as const
      }
    },
    'playful': {
      initial: { y: 0 },
      animate: { 
        y: [-10, 10, -10],
        rotate: [0, 15, -15, 0]
      },
      transition: { 
        duration: 1.5,
        repeat: Infinity,
        repeatType: "reverse" as const
      }
    },
    'glide': {
      initial: { x: -100 },
      animate: { x: [0, 50, 0] },
      transition: { 
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    },
    'sit': {
      initial: { y: 0 },
      animate: { y: [0, -5, 0] },
      transition: { 
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    },
    'listen': {
      initial: { rotate: 0 },
      animate: { 
        rotate: [-5, 5, -5],
        scale: [1, 1.05, 1]
      },
      transition: { 
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse" as const
      }
    },
    'final-flight': {
      initial: { scale: 1, rotate: 0 },
      animate: { 
        scale: [1, 1.2, 0.8, 1.5],
        rotate: [0, 360, 720],
        y: [0, -50, -100, -200]
      },
      transition: { duration: 3, ease: "easeInOut" }
    },
    'goodbye': {
      initial: { x: 0, opacity: 1 },
      animate: { 
        x: 200,
        opacity: 0,
        rotate: [0, 20, 40]
      },
      transition: { duration: 2, ease: "easeInOut" }
    }
  }

  if (!isVisible) return null

  return (
    <motion.div
      className={`fixed ${positionClasses[position]} top-1/2 transform -translate-y-1/2 z-50 pointer-events-none`}
      {...animations[animation]}
    >
      <motion.div 
        className={`${sizeClasses[size]} relative filter drop-shadow-xl`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <Image 
          src="/avatar.svg" 
          alt="Birthday Fairy" 
          fill
          className="object-contain"
          priority
        />
      </motion.div>
      
      {/* Sparkle effects around avatar */}
      <div className="absolute -top-2 -right-2 w-3 h-3 bg-gold-soft rounded-full animate-sparkle blur-[1px]"></div>
      <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-purple-pink rounded-full animate-sparkle blur-[1px]" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute top-1/2 -right-3 w-2 h-2 bg-gold-soft rounded-full animate-sparkle blur-[1px]" style={{ animationDelay: '1s' }}></div>
    </motion.div>
  )
}