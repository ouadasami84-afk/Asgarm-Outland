"use client"

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export const MagicalBackground: React.FC = () => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Deep Atmosphere */}
      <div className="absolute inset-0 bg-[#050505]" />
      
      {/* Ancient Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/black-paper.png')] bg-repeat mix-blend-overlay" />

      {/* Volumetric Magical Glows */}
      <div className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] bg-arcane/15 blur-[180px] rounded-full animate-pulse" />
      <div className="absolute -bottom-[20%] -right-[10%] w-[50%] h-[50%] bg-mystic/10 blur-[180px] rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40%] h-[40%] bg-gold/5 blur-[200px] rounded-full" />

      {/* Floating Arcane Particles (Motes) */}
      {[...Array(25)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-[2px] h-[2px] bg-gold rounded-full"
          initial={{ 
            x: Math.random() * 100 + "%", 
            y: Math.random() * 100 + "%",
            opacity: 0.1 + Math.random() * 0.4 
          }}
          animate={{ 
            y: [null, (Math.random() > 0.5 ? "-" : "+") + (10 + Math.random() * 20) + "vh"],
            x: [null, (Math.random() > 0.5 ? "-" : "+") + (5 + Math.random() * 10) + "vw"],
            opacity: [0.1, 0.4, 0.1]
          }}
          transition={{ 
            duration: 10 + Math.random() * 20, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          style={{
            filter: 'blur(1px)'
          }}
        />
      ))}

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#050505_100%)] opacity-80" />
    </div>
  )
}