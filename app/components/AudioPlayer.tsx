'use client'

import { motion } from 'framer-motion'
import { useState, useRef, useEffect } from 'react'

interface AudioPlayerProps {
  audioUrl: string
}

export default function AudioPlayer({ audioUrl }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const setAudioData = () => {
      setDuration(audio.duration)
      setCurrentTime(audio.currentTime)
    }

    const setAudioTime = () => setCurrentTime(audio.currentTime)

    const handleError = (e: Event) => {
      console.error('Audio loading error:', e)
    }

    audio.addEventListener('loadeddata', setAudioData)
    audio.addEventListener('timeupdate', setAudioTime)
    audio.addEventListener('error', handleError)
    audio.addEventListener('canplaythrough', () => console.log('Audio can play through'))

    return () => {
      audio.removeEventListener('loadeddata', setAudioData)
      audio.removeEventListener('timeupdate', setAudioTime)
      audio.removeEventListener('error', handleError)
    }
  }, [])

  const togglePlayPause = () => {
    const audio = audioRef.current
    if (!audio) return

    if (isPlaying) {
      audio.pause()
    } else {
      audio.play()
    }
    setIsPlaying(!isPlaying)
  }

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current
    if (!audio) return

    const newTime = (parseFloat(e.target.value) / 100) * duration
    audio.currentTime = newTime
    setCurrentTime(newTime)
  }

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  const progress = duration ? (currentTime / duration) * 100 : 0

  return (
    <div className="w-full max-w-md mx-auto">
      {audioUrl.startsWith('[') ? (
        // Placeholder
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border-2 border-purple-soft">
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-soft rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🎵</span>
            </div>
            <p className="text-purple-deep font-medium text-sm mb-4">
              {audioUrl}
            </p>
            <div className="bg-purple-soft/20 rounded-full p-4">
              <span className="text-purple-deep">Audio player will appear here</span>
            </div>
          </div>
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border-2 border-purple-soft"
        >
          <audio ref={audioRef} preload="metadata">
            <source src={audioUrl} type="audio/mp4" />
            <source src={audioUrl.replace('.m4a', '.mp3')} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
          
          {/* Play/Pause Button */}
          <div className="flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={togglePlayPause}
              className="w-16 h-16 bg-gradient-to-br from-purple-soft to-purple-deep rounded-full flex items-center justify-center shadow-lg"
            >
              <span className="text-white text-2xl">
                {isPlaying ? '⏸️' : '▶️'}
              </span>
            </motion.button>

            <div className="flex-1">
              {/* Progress Bar */}
              <div className="relative">
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={progress}
                  onChange={handleSeek}
                  className="w-full h-2 bg-purple-soft/30 rounded-lg appearance-none cursor-pointer"
                  style={{
                    background: `linear-gradient(to right, #A96CFF 0%, #A96CFF ${progress}%, #D4B8FF ${progress}%, #D4B8FF 100%)`
                  }}
                />
              </div>
              
              {/* Time Display */}
              <div className="flex justify-between text-sm text-purple-deep/70 mt-2">
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(duration)}</span>
              </div>
            </div>
          </div>

          {/* Visualizer Effect */}
          <div className="flex justify-center items-end space-x-1 mt-4 h-8">
            {Array.from({ length: 12 }).map((_, i) => (
              <motion.div
                key={i}
                className="w-1 bg-gradient-to-t from-purple-deep to-purple-soft rounded-full"
                animate={isPlaying ? {
                  height: [4, Math.random() * 24 + 8, 4]
                } : {
                  height: 4
                }}
                transition={{
                  duration: 0.5 + Math.random() * 0.5,
                  repeat: isPlaying ? Infinity : 0,
                  repeatType: "reverse"
                }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </div>
  )
}