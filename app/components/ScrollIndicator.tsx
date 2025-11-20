'use client'

import { motion } from 'framer-motion'

export default function ScrollIndicator() {
  return (
    <motion.div
      className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2, duration: 1 }}
    >
      <motion.div
        className="flex flex-col items-center space-y-2 text-purple-deep/70"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-sm font-medium">Scroll for more</span>
        <motion.div
          className="w-6 h-10 border-2 border-purple-deep/50 rounded-full flex justify-center"
          animate={{ 
            borderColor: ["rgba(122, 43, 226, 0.5)", "rgba(122, 43, 226, 1)", "rgba(122, 43, 226, 0.5)"]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-3 bg-purple-deep rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  )
}