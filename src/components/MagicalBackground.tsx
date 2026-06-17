"use client"

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface Star {
  id: number;
  left: string;
  top: string;
  size: number;
  delay: number;
  duration: number;
  opacity: number;
}

interface ShootingStar {
  id: number;
  left: string;
  top: string;
  delay: number;
}

export const MagicalBackground: React.FC = () => {
  const [stars, setStars] = useState<Star[]>([])
  const [shootingStars, setShootingStars] = useState<ShootingStar[]>([])

  useEffect(() => {
    // Generate static stars with varied properties
    const generatedStars = [...Array(250)].map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: Math.random() * 1.8 + 0.4,
      delay: Math.random() * 5,
      duration: 3 + Math.random() * 8,
      opacity: Math.random() * 0.6 + 0.1,
    }))
    setStars(generatedStars)

    // Generate shooting stars with varied timing
    const generatedShootingStars = [...Array(4)].map((_, i) => ({
      id: i,
      left: `${50 + Math.random() * 50}%`,
      top: `${Math.random() * 40}%`,
      delay: Math.random() * 15,
    }))
    setShootingStars(generatedShootingStars)
  }, [])

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#010208]">
      {/* Deep Space Base */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_#020410_0%,_#010208_100%)]" />

      {/* Aurora Borealis Layers */}
      <div className="absolute inset-0 overflow-hidden opacity-30 mix-blend-screen">
        <div className="absolute -top-1/4 -left-1/4 w-[150%] h-[100%] bg-gradient-to-r from-transparent via-blue-900/20 to-emerald-900/20 blur-[120px] animate-aurora rounded-full" />
        <div className="absolute top-1/2 -right-1/4 w-[120%] h-[80%] bg-gradient-to-l from-transparent via-indigo-900/15 to-purple-900/15 blur-[100px] animate-aurora rounded-full" style={{ animationDelay: '-5s' }} />
      </div>

      {/* Twinkling & Drifting Stars Field */}
      {stars.map((star) => (
        <motion.div
          key={star.id}
          initial={{ opacity: star.opacity }}
          animate={{ 
            opacity: [star.opacity, star.opacity + 0.3, star.opacity, 0, star.opacity],
            scale: [1, 1.2, 1],
            x: [0, Math.random() * 20 - 10, 0],
            y: [0, Math.random() * 20 - 10, 0]
          }}
          transition={{
            duration: star.duration * 2,
            repeat: Infinity,
            delay: star.delay,
            ease: "easeInOut"
          }}
          className="absolute bg-white rounded-full"
          style={{
            left: star.left,
            top: star.top,
            width: `${star.size}px`,
            height: `${star.size}px`,
            boxShadow: star.size > 1.2 ? `0 0 10px rgba(255,255,255,0.4)` : 'none',
          }}
        />
      ))}

      {/* Shooting Stars */}
      {shootingStars.map((ss) => (
        <div
          key={ss.id}
          className="shooting-star"
          style={{
            left: ss.left,
            top: ss.top,
            animationDelay: `${ss.delay}s`,
          }}
        />
      ))}
      
      {/* Cosmic Dust / Grain Texture */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-[0.05] mix-blend-overlay" />
      
      {/* Vignette Overlay for Depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_20%,_rgba(1,2,8,0.8)_100%)]" />
    </div>
  )
}