"use client"

import React, { useEffect, useState, useMemo } from 'react'
import { motion } from 'framer-motion'

interface Star {
  id: number
  x: number
  y: number
  size: number
  duration: number
  delay: number
}

export const MagicalBackground: React.FC = () => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const stars = useMemo(() => {
    return [...Array(100)].map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      duration: 3 + Math.random() * 4,
      delay: Math.random() * 5
    }))
  }, [])

  if (!mounted) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#010208]">
      {/* Deep Space Gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_#050a24_0%,_#010208_100%)]" />
      
      {/* Twinkling Stars Layer */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: 0.1,
            animation: `twinkle ${star.duration}s ease-in-out infinite`,
            animationDelay: `${star.delay}s`
          }}
        />
      ))}

      {/* Magical Nebula Clouds */}
      <div className="absolute -top-[10%] -left-[5%] w-[60%] h-[60%] bg-blue-900/10 blur-[180px] rounded-full" />
      <div className="absolute -bottom-[10%] -right-[5%] w-[50%] h-[50%] bg-indigo-900/10 blur-[180px] rounded-full" />
      <div className="absolute top-1/4 left-1/3 w-[40%] h-[40%] bg-gold/[0.03] blur-[220px] rounded-full" />

      {/* Global Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_40%,_#010208_100%)]" />
    </div>
  )
}
