'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import confetti from 'canvas-confetti'

interface FinalSurpriseProps {
  surpriseMessage: string
}

export default function FinalSurprise({ surpriseMessage }: FinalSurpriseProps) {
  const [isRevealed, setIsRevealed] = useState(false)

  const handleReveal = () => {
    setIsRevealed(true)
    triggerMagicBurst()
  }

  const triggerMagicBurst = () => {
    const duration = 3000
    const animationEnd = Date.now() + duration
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 }

    const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min

    const interval: any = setInterval(function() {
      const timeLeft = animationEnd - Date.now()

      if (timeLeft <= 0) {
        return clearInterval(interval)
      }

      const particleCount = 50 * (timeLeft / duration)
      
      // Golden Stars
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        colors: ['#FFD700', '#FFA500'],
        shapes: ['star'],
        scalar: 1.2
      })
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        colors: ['#FFD700', '#FFA500'],
        shapes: ['star'],
        scalar: 1.2
      })

      // Magical Dust (Purple/Pink circles)
      confetti({
        ...defaults,
        particleCount: particleCount * 2,
        origin: { x: randomInRange(0.1, 0.9), y: Math.random() - 0.2 },
        colors: ['#A855F7', '#EC4899', '#8B5CF6'],
        shapes: ['circle'],
        scalar: 0.8
      })
    }, 250)
  }

  return (
    <div className="flex flex-col items-center space-y-8">
      
      <AnimatePresence mode="wait">
        {!isRevealed ? (
          <motion.div
            key="button"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="text-center"
          >
            <motion.button
              onClick={handleReveal}
              className="relative px-8 sm:px-12 py-4 sm:py-6 min-h-[44px] min-w-[44px] bg-gradient-to-r from-emerald-600 via-purple-600 to-emerald-600 rounded-full text-white font-bold text-lg sm:text-xl shadow-[0_0_30px_rgba(16,185,129,0.4)] border-2 border-emerald-400/50 overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              }}
              transition={{
                backgroundPosition: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }
              }}
            >
              {/* Sparkle overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                animate={{ x: [-100, 300] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              
              <span className="relative z-10 flex items-center gap-2">
                <span>✨</span> Tap for Magic <span>✨</span>
              </span>
            </motion.button>
            
            <motion.p
              className="text-purple-200/70 mt-4 text-lg font-serif italic"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              A magical surprise awaits...
            </motion.p>
          </motion.div>
        ) : (
          <motion.div
            key="surprise"
            initial={{ opacity: 0, scale: 0.5, rotateY: -90 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ 
              duration: 1,
              ease: "easeOut",
              rotateY: { duration: 0.8 }
            }}
            className="text-center max-w-2xl mx-auto"
          >
            {/* Surprise Container */}
            <motion.div
              className="bg-purple-950/60 backdrop-blur-xl rounded-[2rem] p-10 shadow-[0_0_50px_rgba(168,85,247,0.3)] border border-purple-400/40 relative overflow-hidden"
              animate={{
                boxShadow: ["0 0 50px rgba(168,85,247,0.3)", "0 0 80px rgba(168,85,247,0.5)", "0 0 50px rgba(168,85,247,0.3)"]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              {/* Floating sparkles inside card */}
              {Array.from({ length: 12 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1.5 h-1.5 bg-yellow-300 rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    scale: [0, 1, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.2,
                    ease: "easeInOut"
                  }}
                />
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <motion.h2
                  className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-purple-200 to-yellow-200 mb-6 font-serif"
                  animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  🎉 SURPRISE! 🎉
                </motion.h2>
                
                <motion.p
                  className="text-xl text-purple-100 leading-relaxed mb-6 font-light"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 1 }}
                >
                  {surpriseMessage}
                </motion.p>
                
                <motion.div
                  className="flex justify-center space-x-4 text-4xl"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.5, duration: 0.5 }}
                >
                  <motion.span
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 1, repeat: Infinity, delay: 0 }}
                  >
                    💜
                  </motion.span>
                  <motion.span
                    animate={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
                  >
                    🎂
                  </motion.span>
                  <motion.span
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
                  >
                    🎈
                  </motion.span>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}