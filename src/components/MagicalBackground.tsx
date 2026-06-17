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
    // Generate a vast field of stars
    const generatedStars = [...Array(350)].map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: Math.random() * 2 + 0.5,
      delay: `${Math.random() * 10}s`,
      duration: `${3 + Math.random() * 7}s`,
      opacity: Math.random() * 0.4 + 0.1,
    }))
    setStars(generatedStars)

    // Generate occasional shooting stars
    const generatedShootingStars = [...Array(8)].map((_, i) => ({
      id: i,
      left: `${40 + Math.random() * 60}%`,
      top: `${Math.random() * 40}%`,
      delay: `${Math.random() * 30}s`,
    }))
    setShootingStars(generatedShootingStars)
  }, [])

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#010208]">
      {/* Deep Space Gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_#020412_0%,_#010208_100%)]" />

      {/* Layered Aurora Borealis */}
      <div className="absolute inset-0 opacity-30 mix-blend-screen">
        <div 
          className="absolute -top-[20%] -left-[10%] w-[120%] h-[80%] bg-gradient-to-r from-indigo-900/20 via-blue-800/10 to-transparent blur-[120px] animate-aurora rounded-full" 
          style={{ animationDuration: '35s' }}
        />
        <div 
          className="absolute top-[40%] -right-[10%] w-[100%] h-[70%] bg-gradient-to-l from-emerald-900/15 via-purple-900/10 to-transparent blur-[140px] animate-aurora rounded-full" 
          style={{ animationDuration: '28s', animationDelay: '-12s' }}
        />
        <div 
          className="absolute -bottom-[10%] left-[20%] w-[80%] h-[50%] bg-gradient-to-t from-blue-900/10 via-transparent to-transparent blur-[100px] animate-aurora" 
          style={{ animationDuration: '40s', animationDelay: '-5s' }}
        />
      </div>

      {/* Dynamic Star Field */}
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
            boxShadow: star.size > 1.5 ? '0 0 10px rgba(255,255,255,0.4)' : 'none',
          } as React.CSSProperties}
        />
      ))}

      {/* Shooting Stars (Comets) */}
      {shootingStars.map((ss) => (
        <div
          key={ss.id}
          className="shooting-star"
          style={{
            left: ss.left,
            top: ss.top,
            animationDelay: ss.delay,
          }}
        />
      ))}
      
      {/* Cosmic Dust Texture */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-[0.04] mix-blend-overlay" />
      
      {/* Global Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_40%,_rgba(1,2,8,0.95)_100%)]" />
    </div>
  )
}