"use client"

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export const RuneDiscovery: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section id="discovery" className="relative h-[80vh] bg-obsidian flex flex-col items-center justify-center overflow-hidden border-y border-white/5">
      {/* Particle System Following Mouse */}
      <div 
        className="fixed pointer-events-none transition-transform duration-300 ease-out z-20"
        style={{ left: mousePos.x, top: mousePos.y }}
      >
        <div className="absolute -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gold/10 blur-3xl rounded-full" />
        <div className="absolute -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-gold/20 blur-xl rounded-full animate-pulse" />
      </div>

      <div className="max-w-4xl px-6 text-center relative z-10">
        <h2 className="font-headline text-5xl md:text-7xl mb-12 tracking-tight">Rune Discovery</h2>
        
        <div className="relative flex items-center justify-center py-20">
          {/* Central Rune Circle */}
          <div className="relative w-64 h-64 md:w-96 md:h-96">
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 border-2 border-dashed border-gold/20 rounded-full" 
            />
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute inset-[10%] border border-gold/30 rounded-full" 
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 bg-gold/5 rounded-full blur-xl animate-pulse" />
              <div className="text-gold font-headline text-4xl opacity-50 select-none">𖡹</div>
            </div>
            
            {/* Floating Runes */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-12 h-12 flex items-center justify-center text-gold/40 text-2xl font-serif"
                style={{
                  top: '50%',
                  left: '50%',
                  marginTop: '-24px',
                  marginLeft: '-24px',
                  transform: `rotate(${i * 60}deg) translateY(-140px) rotate(-${i * 60}deg)`
                }}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.7, 0.3],
                }}
                transition={{
                  duration: 3 + i,
                  repeat: Infinity,
                  delay: i * 0.5
                }}
              >
                {['ᚠ', 'ᚢ', 'ᚦ', 'ᚨ', 'ᚱ', 'ᚲ'][i]}
              </motion.div>
            ))}
          </div>
        </div>

        <p className="font-body text-silver/60 text-lg mt-12 max-w-xl mx-auto italic">
          "Wave your spirit through the ether to reveal the ancient geometry of power."
        </p>
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#080808_70%)] pointer-events-none" />
    </section>
  )
}
