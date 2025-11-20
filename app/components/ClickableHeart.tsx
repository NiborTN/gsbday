'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

interface ClickableHeartProps {
  size?: number
  className?: string
}

export default function ClickableHeart({ size = 24, className = '' }: ClickableHeartProps) {
  const [clicked, setClicked] = useState(false)
  const [burstParticles, setBurstParticles] = useState<Array<{ id: number; x: number; y: number }>>([])

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setClicked(true)
    
    // Create burst particles
    const particles = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      x: Math.random() * 100 - 50,
      y: Math.random() * 100 - 50
    }))
    setBurstParticles(particles)

    // Reset after animation
    setTimeout(() => {
      setClicked(false)
      setBurstParticles([])
    }, 1000)
  }

  return (
    <div className={`relative inline-block cursor-pointer ${className}`}>
      <motion.div
        onClick={handleClick}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={clicked ? { 
          scale: [1, 1.3, 0.8, 1],
          rotate: [0, 15, -15, 0]
        } : {}}
        transition={{ duration: 0.5 }}
        style={{ fontSize: `${size}px` }}
      >
        💜
      </motion.div>

      {/* Burst particles */}
      {burstParticles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute top-1/2 left-1/2 pointer-events-none"
          initial={{ 
            x: 0, 
            y: 0, 
            scale: 1, 
            opacity: 1 
          }}
          animate={{ 
            x: particle.x, 
            y: particle.y, 
            scale: 0, 
            opacity: 0 
          }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ fontSize: `${size * 0.5}px` }}
        >
          ✨
        </motion.div>
      ))}
    </div>
  )
}