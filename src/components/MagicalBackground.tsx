
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
    // Generate a high-fidelity field of stars with drift components
    const generatedStars = [...Array(300)].map((_, i) => {
      const isGold = Math.random() > 0.85;
      const driftScale = 50; 
      return {
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        size: Math.random() * 2 + 0.3,
        delay: `${Math.random() * 10}s`,
        duration: `${3 + Math.random() * 7}s`,
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

      {/* Multilayered Aurora Borealis AAA */}
      <div className="absolute inset-0 opacity-30 mix-blend-screen overflow-hidden">
        <motion.div 
          className="absolute -top-[20%] -left-[10%] w-[140%] h-[100%] bg-gradient-to-r from-indigo-500/10 via-emerald-500/10 to-transparent blur-[160px] rounded-full" 
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 40, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-[30%] -right-[20%] w-[120%] h-[90%] bg-gradient-to-l from-purple-500/10 via-blue-500/10 to-transparent blur-[180px] rounded-full" 
          animate={{
            x: [0, -40, 0],
            y: [0, 20, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 35, repeat: Infinity, ease: "easeInOut", delay: -5 }}
        />
      </div>

      {/* Dynamic Star Field with Orbit and Twinkle */}
      <motion.div 
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3 }}
      >
        {stars.map((star) => (
          <motion.div
            key={star.id}
            className="star"
            style={{
              left: star.left,
              top: star.top,
              width: `${star.size}px`,
              height: `${star.size}px`,
              backgroundColor: star.color,
              '--twinkle-duration': star.duration,
              '--twinkle-delay': star.delay,
              '--twinkle-opacity': star.opacity,
              boxShadow: star.size > 1.5 ? `0 0 8px ${star.color}` : 'none',
              position: 'absolute',
              borderRadius: '50%',
            } as React.CSSProperties}
            animate={{
              x: [0, star.driftX],
              y: [0, star.driftY],
              opacity: [star.opacity, 0.05, star.opacity],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 50,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
            }}
          />
        ))}
      </motion.div>
      
      {/* Heavy Cinematic Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_60%,_rgba(1,2,8,1)_100%)]" />
    </div>
  )
}
