'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface Heart {
  id: number
  x: number
  y: number
  delay: number
  size: number
}

export default function HeartFloaters({ count = 8 }: { count?: number }) {
  const [hearts, setHearts] = useState<Heart[]>([])

  useEffect(() => {
    const newHearts = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 2,
      size: Math.random() * 10 + 15
    }))
    setHearts(newHearts)
  }, [count])

  return (
    <div className="fixed inset-0 pointer-events-none z-10">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="absolute"
          style={{
            left: `${heart.x}%`,
            top: `${heart.y}%`,
            width: `${heart.size}px`,
            height: `${heart.size}px`,
          }}
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            rotate: [0, 10, -10, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            delay: heart.delay,
            ease: "easeInOut"
          }}
        >
          <div 
            className="heart bg-purple-pink opacity-60"
            style={{
              width: `${heart.size}px`,
              height: `${heart.size}px`,
            }}
          />
        </motion.div>
      ))}
    </div>
  )
}