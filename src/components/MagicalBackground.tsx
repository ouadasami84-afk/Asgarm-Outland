
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
}

interface ShootingStar {
  id: number;
  left: string;
  top: string;
  delay: string;
}

export const MagicalBackground: React.FC = () => {
  const [stars, setStars] = useState<Star[]>([])
  const [shootingStars, setShootingStars] = useState<ShootingStar[]>([])

  useEffect(() => {
    // Generate a vast field of stars with varying intensities
    const generatedStars = [...Array(400)].map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: Math.random() * 2.5 + 0.5,
      delay: `${Math.random() * 10}s`,
      duration: `${2 + Math.random() * 5}s`,
      opacity: Math.random() * 0.6 + 0.2,
    }))
    setStars(generatedStars)

    // Frequent shooting stars
    const generateShootingStars = () => {
      const count = 12;
      return [...Array(count)].map((_, i) => ({
        id: i,
        left: `${20 + Math.random() * 80}%`,
        top: `${Math.random() * 40}%`,
        delay: `${Math.random() * 40}s`,
      }))
    }
    setShootingStars(generateShootingStars())
  }, [])

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#010208]">
      {/* Deep Space Base */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_#03051a_0%,_#010208_100%)]" />

      {/* High Fidelity Aurora Borealis */}
      <div className="absolute inset-0 opacity-40 mix-blend-screen">
        <motion.div 
          className="absolute -top-[30%] -left-[10%] w-[140%] h-[90%] bg-gradient-to-r from-indigo-500/10 via-emerald-500/10 to-transparent blur-[120px] rounded-full" 
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-[30%] -right-[20%] w-[120%] h-[80%] bg-gradient-to-l from-purple-500/10 via-blue-500/10 to-transparent blur-[140px] rounded-full" 
          animate={{
            x: [0, -40, 0],
            y: [0, 20, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut", delay: -5 }}
        />
      </div>

      {/* Dynamic Star Field with Luminescence */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="star"
          style={{
            left: star.left,
            top: star.top,
            width: `${star.size}px`,
            height: `${star.size}px`,
            '--twinkle-duration': star.duration,
            '--twinkle-delay': star.delay,
            '--twinkle-opacity': star.opacity,
            boxShadow: star.size > 2 ? '0 0 15px rgba(212,175,55,0.6)' : '0 0 8px rgba(255,255,255,0.3)',
          } as React.CSSProperties}
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
            animationDelay: ss.delay,
            animationDuration: '8s',
          }}
        />
      ))}
      
      {/* Cosmic Texture */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-[0.06] mix-blend-overlay" />
      
      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_30%,_rgba(1,2,8,0.9)_100%)]" />
    </div>
  )
}
