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

export const MagicalBackground: React.FC = () => {
  const [stars, setStars] = useState<Star[]>([])

  useEffect(() => {
    // Génération des étoiles après le montage pour éviter les erreurs d'hydratation
    const generatedStars = [...Array(200)].map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: Math.random() * 1.5 + 0.5,
      delay: Math.random() * 5,
      duration: 3 + Math.random() * 7,
      opacity: Math.random() * 0.5 + 0.2,
    }))
    setStars(generatedStars)
  }, [])

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#010208]">
      {/* Nébuleuses éthérées - Profondeur spatiale */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-[#050a24] blur-[180px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-[#020410] blur-[150px] rounded-full" />
        <div className="absolute top-[30%] right-[15%] w-[40%] h-[40%] bg-blue-900/5 blur-[120px] rounded-full" />
      </div>

      {/* Champ d'étoiles avec parallaxe simulée */}
      {stars.map((star) => (
        <motion.div
          key={star.id}
          initial={{ opacity: star.opacity }}
          animate={{ 
            opacity: [star.opacity, star.opacity + 0.4, star.opacity],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            delay: star.delay,
            ease: "easeInOut"
          }}
          className="absolute bg-white rounded-full shadow-[0_0_8px_rgba(255,255,255,0.4)]"
          style={{
            left: star.left,
            top: star.top,
            width: `${star.size}px`,
            height: `${star.size}px`,
          }}
        />
      ))}
      
      {/* Grain de poussière cosmique discret */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-[0.03] mix-blend-overlay" />
      
      {/* Vignette sombre pour focaliser le regard */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#010208_100%)]" />
    </div>
  )
}
