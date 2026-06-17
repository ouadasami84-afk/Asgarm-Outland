"use client"

import React, { useEffect, useState, useMemo } from 'react'

export const MagicalBackground: React.FC = () => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const stars = useMemo(() => {
    return [...Array(120)].map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 1.5 + 0.5,
      duration: 2 + Math.random() * 6,
      delay: Math.random() * 10,
      opacity: 0.1 + Math.random() * 0.4
    }))
  }, [])

  if (!mounted) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#010208]">
      {/* Deep Space Foundation */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_#050a24_0%,_#010208_100%)]" />
      
      {/* Dynamic Star Field */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            animation: `starTwinkle ${star.duration}s ease-in-out infinite`,
            animationDelay: `${star.delay}s`
          }}
        />
      ))}

      {/* Atmospheric Nebulas */}
      <div className="absolute -top-[20%] -left-[10%] w-[80%] h-[80%] bg-blue-950/20 blur-[200px] rounded-full animate-pulse" style={{ animationDuration: '15s' }} />
      <div className="absolute -bottom-[20%] -right-[10%] w-[70%] h-[70%] bg-indigo-950/20 blur-[200px] rounded-full animate-pulse" style={{ animationDuration: '20s' }} />
      <div className="absolute top-1/4 left-1/3 w-[50%] h-[50%] bg-gold/[0.04] blur-[250px] rounded-full" />

      {/* Vignette for Cinematic Focus */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_30%,_#010208_100%)] opacity-80" />

      <style jsx global>{`
        @keyframes starTwinkle {
          0%, 100% { opacity: 0.1; transform: scale(0.8); }
          50% { opacity: 0.8; transform: scale(1.1); }
        }
      `}</style>
    </div>
  )
}
