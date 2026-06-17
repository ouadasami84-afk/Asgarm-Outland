
"use client"

import React, { useMemo } from 'react'
import { motion } from 'framer-motion'

export const MagicalBackground: React.FC = () => {
  const stars = useMemo(() => {
    return [...Array(150)].map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: Math.random() * 2 + 0.5,
      delay: Math.random() * 5,
      duration: 3 + Math.random() * 4,
    }))
  }, [])

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-night-deep">
      {/* Nébuleuses éthérées */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-night-ethereal/40 blur-[150px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-900/10 blur-[150px] rounded-full" />
      </div>

      {/* Champ d'étoiles */}
      {stars.map((star) => (
        <motion.div
          key={star.id}
          initial={{ opacity: 0.1 }}
          animate={{ opacity: [0.1, 0.8, 0.1], scale: [0.8, 1.1, 0.8] }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            delay: star.delay,
            ease: "easeInOut"
          }}
          className="absolute bg-white rounded-full shadow-[0_0_5px_rgba(255,255,255,0.8)]"
          style={{
            left: star.left,
            top: star.top,
            width: `${star.size}px`,
            height: `${star.size}px`,
          }}
        />
      ))}
      
      {/* Vignette sombre */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#010208_90%)]" />
    </div>
  )
}
