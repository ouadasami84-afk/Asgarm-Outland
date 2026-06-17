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
      <div className="absolute inset-0 bg-[#03040a]" />
      <div className="absolute inset-0 opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] animate-pan" />

      <div className="absolute -top-[10%] -left-[5%] w-[50%] h-[50%] bg-blue-900/10 blur-[150px] rounded-full" />
      <div className="absolute -bottom-[10%] -right-[5%] w-[40%] h-[40%] bg-indigo-900/10 blur-[150px] rounded-full" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-gold/[0.02] blur-[200px] rounded-full" />

      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-[1px] h-[1px] bg-gold/30 rounded-full"
          initial={{ 
            x: Math.random() * 100 + "%", 
            y: Math.random() * 100 + "%",
            opacity: 0.1 
          }}
          animate={{ 
            y: [null, (Math.random() > 0.5 ? "-" : "+") + "15vh"],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{ 
            duration: 15 + Math.random() * 15, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
      ))}
      
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_20%,_#03040a_100%)]" />
    </div>
  )
}