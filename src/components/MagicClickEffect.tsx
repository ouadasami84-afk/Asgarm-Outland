"use client"

import React, { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Spark {
  id: number
  x: number
  y: number
  color: string
  angle: number
  velocity: number
}

export const MagicClickEffect: React.FC = () => {
  const [sparks, setSparks] = useState<Spark[]>([])

  const spawnMagic = useCallback((e: MouseEvent) => {
    const sparkCount = 8
    const newSparks: Spark[] = []
    const now = Date.now()

    for (let i = 0; i < sparkCount; i++) {
      newSparks.push({
        id: now + i,
        x: e.clientX,
        y: e.clientY,
        color: Math.random() > 0.5 ? '#D4AF37' : '#FFFFFF',
        angle: (i * (360 / sparkCount) + Math.random() * 20) * (Math.PI / 180),
        velocity: 2 + Math.random() * 3
      })
    }

    setSparks(prev => [...prev, ...newSparks])

    // Cleanup after animation
    setTimeout(() => {
      setSparks(prev => prev.filter(s => !newSparks.find(ns => ns.id === s.id)))
    }, 1000)
  }, [])

  useEffect(() => {
    window.addEventListener('mousedown', spawnMagic)
    return () => window.removeEventListener('mousedown', spawnMagic)
  }, [spawnMagic])

  return (
    <div className="fixed inset-0 z-[9999] pointer-events-none overflow-hidden">
      <AnimatePresence>
        {sparks.map((spark) => (
          <motion.div
            key={spark.id}
            initial={{ 
              x: spark.x, 
              y: spark.y, 
              scale: 1, 
              opacity: 1 
            }}
            animate={{ 
              x: spark.x + Math.cos(spark.angle) * (spark.velocity * 40),
              y: spark.y + Math.sin(spark.angle) * (spark.velocity * 40),
              scale: 0,
              opacity: 0
            }}
            transition={{ 
              duration: 0.8, 
              ease: "easeOut" 
            }}
            className="absolute w-1 h-1 rounded-full"
            style={{ 
              backgroundColor: spark.color,
              boxShadow: `0 0 10px ${spark.color}`
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  )
}
