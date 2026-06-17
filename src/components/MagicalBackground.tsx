
"use client"

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface Star {
  id: number;
  left: string;
  top: string;
  size: number;
  delay: string;
  duration: string;
  opacity: number;
  color: string;
  driftX: number;
  driftY: number;
}

export const MagicalBackground: React.FC = () => {
  const [stars, setStars] = useState<Star[]>([])

  useEffect(() => {
    // Reduced number for better fluidity while keeping visual density
    const generatedStars = [...Array(200)].map((_, i) => {
      const isGold = Math.random() > 0.8;
      const driftScale = 40; 
      return {
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        size: Math.random() * 1.5 + 0.3,
        delay: `${Math.random() * 5}s`,
        duration: `${6 + Math.random() * 8}s`,
        opacity: Math.random() * 0.6 + 0.2,
        color: isGold ? 'rgba(212, 175, 55, 0.8)' : 'rgba(255, 255, 255, 0.6)',
        driftX: (Math.random() - 0.5) * driftScale,
        driftY: (Math.random() - 0.5) * driftScale,
      }
    })
    setStars(generatedStars)
  }, [])

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#010208]">
      {/* Deep Celestial Base */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_#03051a_0%,_#010208_100%)]" />

      {/* Multilayered Aurora Borealis AAA - Optimized blurring */}
      <div className="absolute inset-0 opacity-30 mix-blend-screen overflow-hidden">
        <motion.div 
          className="absolute -top-[20%] -left-[10%] w-[140%] h-[100%] bg-gradient-to-r from-indigo-500/10 via-emerald-500/10 to-transparent blur-[120px] rounded-full will-change-transform" 
          animate={{
            x: [0, 40, 0],
            y: [0, 20, 0],
          }}
          transition={{ duration: 50, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-[30%] -right-[20%] w-[120%] h-[90%] bg-gradient-to-l from-purple-500/10 via-blue-500/10 to-transparent blur-[140px] rounded-full will-change-transform" 
          animate={{
            x: [0, -30, 0],
            y: [0, 20, 0],
          }}
          transition={{ duration: 45, repeat: Infinity, ease: "easeInOut", delay: -5 }}
        />
      </div>

      {/* Dynamic Star Field with Orbit and Twinkle */}
      <motion.div 
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        {stars.map((star) => (
          <motion.div
            key={star.id}
            className="star will-change-transform"
            style={{
              left: star.left,
              top: star.top,
              width: `${star.size}px`,
              height: `${star.size}px`,
              backgroundColor: star.color,
              boxShadow: star.size > 1.2 ? `0 0 8px ${star.color}` : 'none',
              position: 'absolute',
              borderRadius: '50%',
            } as React.CSSProperties}
            animate={{
              x: [0, star.driftX],
              y: [0, star.driftY],
              opacity: [star.opacity, 0.1, star.opacity],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
            }}
          />
        ))}
      </motion.div>
      
      {/* Heavy Cinematic Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_70%,_rgba(1,2,8,1)_100%)]" />
    </div>
  )
}
