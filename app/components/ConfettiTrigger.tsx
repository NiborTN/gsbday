'use client'

import { useEffect } from 'react'

interface ConfettiTriggerProps {
  trigger: boolean
  colors?: string[]
  particleCount?: number
}

export default function ConfettiTrigger({ 
  trigger, 
  colors = ['#A96CFF', '#7A2BE2', '#C89CFF', '#FFD6FF', '#F6E27F'],
  particleCount = 100 
}: ConfettiTriggerProps) {
  
  useEffect(() => {
    if (trigger && typeof window !== 'undefined') {
      // Dynamic import to avoid SSR issues
      import('canvas-confetti').then((confetti) => {
        confetti.default({
          particleCount,
          spread: 70,
          origin: { y: 0.6 },
          colors,
          shapes: ['circle', 'square'],
          gravity: 0.8,
          drift: 0.1,
          ticks: 200
        })
        
        // Second burst with different settings
        setTimeout(() => {
          confetti.default({
            particleCount: particleCount / 2,
            spread: 100,
            origin: { y: 0.8 },
            colors,
            shapes: ['circle'],
            gravity: 0.6,
            drift: 0.2,
            ticks: 150
          })
        }, 300)
      })
    }
  }, [trigger, colors, particleCount])

  return null
}