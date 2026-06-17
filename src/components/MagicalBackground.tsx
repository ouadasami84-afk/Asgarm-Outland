
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

interface ShootingStar {
  id: number;
  left: string;
  top: string;
  delay: string;
  duration: string;
}

export const MagicalBackground: React.FC = () => {
  const [stars, setStars] = useState<Star[]>([])
  const [shootingStars, setShootingStars] = useState<ShootingStar[]>([])

  useEffect(() => {
    // Generate a vast, high-fidelity field of stars with drift components
    const generatedStars = [...Array(350)].map((_, i) => {
      const isGold = Math.random() > 0.85;
      const driftScale = 60; // Increased drift for more movement
      return {
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        size: Math.random() * 2.5 + 0.3,
        delay: `${Math.random() * 10}s`,
        duration: `${2 + Math.random() * 8}s`,
        opacity: Math.random() * 0.7 + 0.3,
        color: isGold ? 'rgba(212, 175, 55, 0.9)' : 'rgba(255, 255, 255, 0.7)',
        driftX: (Math.random() - 0.5) * driftScale,
        driftY: (Math.random() - 0.5) * driftScale,
      }
    })
    setStars(generatedStars)

    // Frequent, cinematic shooting stars
    const generateShootingStars = () => {
      return [...Array(12)].map((_, i) => ({
        id: i,
        left: `${10 + Math.random() * 80}%`,
        top: `${Math.random() * 40}%`,
        delay: `${Math.random() * 40}s`,
        duration: `${4 + Math.random() * 5}s`,
      }))
    }
    setShootingStars(generateShootingStars())
  }, [])

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#010208]">
      {/* Deep Celestial Base */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_#03051a_0%,_#010208_100%)]" />

      {/* Multilayered Aurora Borealis AAA */}
      <div className="absolute inset-0 opacity-40 mix-blend-screen overflow-hidden">
        <motion.div 
          className="absolute -top-[20%] -left-[10%] w-[140%] h-[100%] bg-gradient-to-r from-indigo-500/10 via-emerald-500/10 to-transparent blur-[160px] rounded-full" 
          animate={{
            x: [0, 80, 0],
            y: [0, 50, 0],
            rotate: [0, 5, 0],
          }}
          transition={{ duration: 40, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-[30%] -right-[20%] w-[120%] h-[90%] bg-gradient-to-l from-purple-500/10 via-blue-500/10 to-transparent blur-[180px] rounded-full" 
          animate={{
            x: [0, -60, 0],
            y: [0, 40, 0],
            opacity: [0.3, 0.6, 0.3],
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
              boxShadow: star.size > 1.8 ? `0 0 10px ${star.color}` : 'none',
            } as React.CSSProperties}
            animate={{
              x: [0, star.driftX],
              y: [0, star.driftY],
              opacity: [star.opacity, 0.1, star.opacity],
            }}
            transition={{
              duration: 60,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
            }}
          />
        ))}
      </motion.div>

      {/* Cinematic Shooting Stars */}
      {shootingStars.map((ss) => (
        <div
          key={ss.id}
          className="shooting-star"
          style={{
            left: ss.left,
            top: ss.top,
            animationDelay: ss.delay,
            animationDuration: ss.duration,
          }}
        />
      ))}
      
      {/* Heavy Cinematic Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_50%,_rgba(1,2,8,1)_100%)]" />
    </div>
  )
}
