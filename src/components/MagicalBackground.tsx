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
  driftX: number;
  driftY: number;
  driftDuration: number;
}

export const MagicalBackground: React.FC = () => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const stars = useMemo(() => {
    if (!mounted) return []
    return [...Array(50)].map((_, i) => {
      const isGold = Math.random() > 0.8;
      return {
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.4 + 0.2,
        color: isGold ? '#D4AF37' : '#FFFFFF',
        duration: 3 + Math.random() * 4,
        driftX: (Math.random() - 0.5) * 100, // Dérive horizontale
        driftY: (Math.random() - 0.5) * 100, // Dérive verticale
        driftDuration: 15 + Math.random() * 20, // Temps de dérive très lent
      }
    })
  }, [mounted])

  if (!mounted) return <div className="fixed inset-0 z-0 bg-[#010208]" />;

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#010208]">
      {/* Gradient de fond profond */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_#03051a_0%,_#010208_100%)]" />

      {/* Brumes éthérées */}
      <div className="absolute inset-0 opacity-20 mix-blend-screen">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-indigo-900/20 via-transparent to-emerald-900/10 blur-[120px]" />
      </div>

      {/* Voûte étoilée animée */}
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
              boxShadow: star.opacity > 0.4 ? `0 0 ${star.size * 2}px ${star.color}` : 'none',
            }}
            animate={{
              opacity: [star.opacity, star.opacity * 1.8, star.opacity],
              scale: [1, 1.3, 1],
              x: [0, star.driftX, 0],
              y: [0, star.driftY, 0],
            }}
            transition={{
              duration: star.driftDuration,
              repeat: Infinity,
              ease: "easeInOut",
              opacity: {
                duration: star.duration,
                repeat: Infinity,
                ease: "easeInOut"
              },
              scale: {
                duration: star.duration,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
          />
        ))}
      </div>
    </div>
  )
}
