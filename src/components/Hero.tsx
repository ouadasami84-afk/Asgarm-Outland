"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Sparkles } from 'lucide-react'
import Image from 'next/image'

export const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Cinematic Background Layering */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
          className="relative h-full w-full"
        >
          <Image
            src="https://picsum.photos/seed/magicalcastle/1920/1080"
            alt="Ancient magical castle"
            fill
            className="object-cover opacity-60 brightness-75"
            priority
            data-ai-hint="magical castle"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-[#050505]" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80" />
      </div>

      {/* Floating Dust/Ember Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gold/40 rounded-full"
            initial={{ 
              x: Math.random() * 100 + "%", 
              y: Math.random() * 100 + "%", 
              opacity: 0 
            }}
            animate={{ 
              y: [null, "-20vh"],
              opacity: [0, 0.8, 0],
              scale: [1, 1.5, 1]
            }}
            transition={{ 
              duration: 5 + Math.random() * 5, 
              repeat: Infinity, 
              delay: Math.random() * 5 
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl px-6 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 2 }}
            className="flex items-center justify-center gap-3 mb-8"
          >
            <div className="h-[1px] w-12 bg-gold/40" />
            <Sparkles className="text-gold w-4 h-4" />
            <span className="text-gold tracking-[0.6em] uppercase text-[10px] font-bold">
              The Ancient Seals Have Broken
            </span>
            <Sparkles className="text-gold w-4 h-4" />
            <div className="h-[1px] w-12 bg-gold/40" />
          </motion.div>

          <h1 className="font-headline text-7xl md:text-9xl mb-8 tracking-tighter leading-none">
            <span className="block text-white text-glow-gold mb-2">ARCANUM</span>
            <span className="italic text-silver font-normal">PRIME</span>
          </h1>

          <p className="font-body text-silver/60 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed font-light tracking-wide uppercase text-[12px]">
            Descend into a world of forgotten history. <br />
            Where every shadow tells a story, and every spell leaves a scar.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <button className="group relative overflow-hidden px-12 py-5 bg-gold text-black font-bold text-xs tracking-[0.3em] uppercase transition-all shadow-[0_0_40px_rgba(212,175,55,0.2)] hover:shadow-[0_0_60px_rgba(212,175,55,0.4)]">
              <span className="relative z-10">Step Through the Gate</span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
            </button>
            <button className="px-12 py-5 border border-white/10 text-white font-bold text-xs tracking-[0.3em] uppercase hover:bg-white/5 transition-all">
              Consult the Archive
            </button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 cursor-pointer"
      >
        <span className="text-[9px] tracking-[0.4em] uppercase text-silver/30 font-bold">Descend</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-gold/60 to-transparent relative overflow-hidden">
          <motion.div 
            animate={{ y: [0, 64] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-white"
          />
        </div>
      </motion.div>
    </section>
  )
}