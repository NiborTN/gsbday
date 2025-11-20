'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

interface SlideshowProps {
  photos: string[]
  autoPlay?: boolean
  interval?: number
}

const isVideo = (src: string) => /\.(mp4|webm|mov|m4v)$/i.test(src)

export default function Slideshow({ photos, autoPlay = true, interval = 4000 }: SlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const [isUserInteracting, setIsUserInteracting] = useState(false)

  useEffect(() => {
    const shouldAutoPlay = autoPlay && !isHovered && !isVideoPlaying && !isUserInteracting
    if (!shouldAutoPlay) return

    const timer = setInterval(() => {
      setDirection(1)
      setCurrentIndex((prev) => (prev + 1) % photos.length)
    }, interval)

    return () => clearInterval(timer)
  }, [autoPlay, interval, photos.length, isHovered, isVideoPlaying, isUserInteracting])

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (dir: number) => ({
      zIndex: 0,
      x: dir < 0 ? 1000 : -1000,
      opacity: 0
    })
  }

  const swipeConfidenceThreshold = 10000
  const swipePower = (offset: number, velocity: number) => Math.abs(offset) * velocity

  const paginate = (newDirection: number) => {
    setDirection(newDirection)
    setCurrentIndex((prev) => {
      if (newDirection === 1) {
        return (prev + 1) % photos.length
      }
      return prev === 0 ? photos.length - 1 : prev - 1
    })
  }

  const current = photos[currentIndex]

  return (
    <div
      className="relative w-full max-w-md mx-auto px-4"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
    >
      <div className="relative h-64 md:h-80 bg-black rounded-2xl shadow-2xl overflow-hidden border-4 border-purple-soft">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragStart={() => setIsUserInteracting(true)}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x)
              if (swipe < -swipeConfidenceThreshold) {
                paginate(1)
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1)
              }
              setIsUserInteracting(false)
            }}
            className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-purple-warm to-purple-pastel"
          >
            {current.startsWith('[') ? (
              <div className="text-center p-8">
                <div className="w-32 h-32 bg-purple-soft rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-4xl">&lt;3</span>
                </div>
                <p className="text-purple-deep font-medium text-sm">
                  {current}
                </p>
              </div>
            ) : isVideo(current) ? (
              <video
                key={current}
                src={current}
                className="w-full h-full object-contain bg-black"
                controls
                playsInline
                preload="metadata"
                onPlay={() => setIsVideoPlaying(true)}
                onPause={() => setIsVideoPlaying(false)}
              />
            ) : (
              <img
                src={current}
                alt={`Slide ${currentIndex + 1}`}
                className="w-full h-full object-contain bg-white"
              />
            )}
          </motion.div>
        </AnimatePresence>

        <button
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg z-10"
          onClick={() => paginate(-1)}
        >
          <span className="text-purple-deep text-xl">❮</span>
        </button>
        
        <button
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg z-10"
          onClick={() => paginate(1)}
        >
          <span className="text-purple-deep text-xl">❯</span>
        </button>
      </div>

      <div className="flex justify-center mt-4 space-x-2">
        {photos.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex ? 'bg-purple-deep' : 'bg-purple-soft/50'
            }`}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1)
              setCurrentIndex(index)
            }}
          />
        ))}
      </div>

      <p className="text-center text-purple-deep/70 text-sm mt-2">
        Swipe or tap arrows to navigate
      </p>
    </div>
  )
}
