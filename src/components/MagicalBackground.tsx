
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
  driftX: number;
  driftY: number;
}

export const MagicalBackground: React.FC = () => {
  const stars = useMemo(() => {
    return [...Array(150)].map((_, i) => {
      const isGold = Math.random() > 0.85;
      const driftScale = 30; 
      return {
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        size: Math.random() * 1.2 + 0.3,
        opacity: Math.random() * 0.5 + 0.2,
        color: isGold ? 'rgba(212, 175, 55, 0.7)' : 'rgba(255, 255, 255, 0.5)',
        driftX: (Math.random() - 0.5) * driftScale,
        driftY: (Math.random() - 0.5) * driftScale,
      }
    })
  }, [])

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#010208]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_#03051a_0%,_#010208_100%)]" />

      <div className="absolute inset-0 opacity-20 mix-blend-screen overflow-hidden">
        <motion.div 
          className="absolute -top-[20%] -left-[10%] w-[140%] h-[100%] bg-gradient-to-r from-indigo-500/10 via-emerald-500/10 to-transparent blur-[120px] rounded-full will-change-transform" 
          animate={{ x: [0, 20, 0], y: [0, 10, 0] }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute top-[30%] -right-[20%] w-[120%] h-[90%] bg-gradient-to-l from-purple-500/10 via-blue-500/10 to-transparent blur-[140px] rounded-full will-change-transform" 
          animate={{ x: [0, -15, 0], y: [0, 15, 0] }}
          transition={{ duration: 55, repeat: Infinity, ease: "linear", delay: -5 }}
        />
      </div>

      <div className="absolute inset-0">
        {stars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute rounded-full will-change-transform"
            style={{
              left: star.left,
              top: star.top,
              width: `${star.size}px`,
              height: `${star.size}px`,
              backgroundColor: star.color,
              boxShadow: star.size > 1.0 ? `0 0 5px ${star.color}` : 'none',
            }}
            animate={{
              x: [0, star.driftX],
              y: [0, star.driftY],
              opacity: [star.opacity, star.opacity * 0.3, star.opacity],
            }}
            transition={{
              duration: 20 + Math.random() * 20,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
      
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_70%,_rgba(1,2,8,1)_100%)]" />
    </div>
  )
}
