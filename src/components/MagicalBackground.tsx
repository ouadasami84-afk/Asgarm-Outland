"use client"

import React, { useState, useEffect, useMemo } from 'react'
import { motion } from 'framer-motion'

interface Star {
  id: number;
  left: string;
  top: string;
  size: number;
  opacity: number;
  color: string;
  duration: number;
}

export const MagicalBackground: React.FC = () => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const stars = useMemo(() => {
    if (!mounted) return []
    return [...Array(40)].map((_, i) => {
      const isGold = Math.random() > 0.8;
      return {
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        size: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.3 + 0.1,
        color: isGold ? '#D4AF37' : '#FFFFFF',
        duration: 3 + Math.random() * 4,
      }
    })
  }, [mounted])

  if (!mounted) return <div className="fixed inset-0 z-0 bg-[#010208]" />;

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#010208]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_#03051a_0%,_#010208_100%)]" />

      <div className="absolute inset-0 opacity-10 mix-blend-screen">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-indigo-900/20 via-transparent to-emerald-900/10 blur-[120px]" />
      </div>

      <div className="absolute inset-0">
        {stars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute rounded-full will-change-transform"
            style={{
              left: star.left,
              top: star.top,
              width: star.size,
              height: star.size,
              backgroundColor: star.color,
            }}
            animate={{
              opacity: [star.opacity, star.opacity * 2, star.opacity],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: star.duration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </div>
  )
}
