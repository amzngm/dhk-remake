'use client'

import { motion, AnimatePresence } from 'framer-motion'

export default function MouseFollower({ x, y, isVisible, children }) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            left: x,
            top: y,
            position: 'absolute',
            zIndex: 50,
            transform: 'translate(-50%, -50%)',
          }}
          className="text-text whitespace-nowrap px-4 py-2 ps-38 pb-6 pointer-events-none"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
