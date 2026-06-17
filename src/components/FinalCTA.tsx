"use client"

import React from 'react'
import { motion } from 'framer-motion'

export const FinalCTA: React.FC = () => {
  return (
    <section className="relative h-[80vh] flex flex-col items-center justify-center overflow-hidden bg-obsidian border-t border-white/5">
      {/* Portal Background Effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-arcane/20 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-gold/10 blur-[80px] rounded-full" />
      </div>

      <div className="relative z-10 text-center max-w-3xl px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-headline text-5xl md:text-7xl mb-8 tracking-tighter text-glow-gold">
            Your Adventure <br /> Begins Here
          </h2>
          <p className="text-silver/70 font-body text-lg md:text-xl mb-12 leading-relaxed max-w-2xl mx-auto">
            The seals are broken, the gates are open. Will you be the one to reshape the destiny 
            of Arcanum Prime, or will you fade into the whispers of the past?
          </p>
          
          <button className="px-12 py-5 bg-gold text-obsidian rounded-full font-bold text-lg tracking-[0.2em] uppercase hover:scale-105 transition-all shadow-[0_0_50px_rgba(212,175,55,0.4)]">
            Ascend to Mastery
          </button>
        </motion.div>
      </div>

      {/* Floating Sparkles */}
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full opacity-20 animate-float"
          style={{
            top: `${20 + Math.random() * 60}%`,
            left: `${20 + Math.random() * 60}%`,
            animationDelay: `${i * 0.3}s`,
            animationDuration: `${4 + Math.random() * 4}s`
          }}
        />
      ))}
    </section>
  )
}
