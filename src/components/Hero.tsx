"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Shield, Play } from 'lucide-react'

export const Hero: React.FC = () => {
  const videoId = "VbuXGlnUwtY" 

  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background Video Layer with Professional Cinematic Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#010208]/40 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#010208] via-transparent to-[#010208]/40 z-10" />
        
        <div className="relative w-full h-full pointer-events-none">
          <iframe
            className="absolute top-1/2 left-1/2 w-[115vw] h-[115vh] -translate-x-1/2 -translate-y-1/2 object-cover grayscale-[0.2] contrast-[1.1]"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&enablejsapi=1`}
            allow="autoplay; encrypted-media"
            frameBorder="0"
          />
        </div>
      </div>

      <div className="relative z-20 text-center max-w-5xl px-6 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Subtle Royal Badge */}
          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="h-[1px] w-8 bg-gold/20" />
            <div className="flex items-center gap-3">
              <Shield className="text-gold/60 w-4 h-4" />
              <span className="text-gold/50 tracking-[0.8em] uppercase text-[9px] font-bold">
                Le Royaume d'Asgarm
              </span>
            </div>
            <div className="h-[1px] w-8 bg-gold/20" />
          </div>

          {/* Refined Title - Elegant & Subtle */}
          <h1 className="font-headline text-4xl md:text-6xl mb-6 tracking-[0.3em] leading-tight text-white text-glow-gold uppercase">
            OUTLAND
          </h1>

          <div className="max-w-xl mx-auto mb-12">
            <p className="font-body text-silver/50 text-[10px] md:text-xs leading-relaxed tracking-[0.6em] uppercase italic">
              L'éveil d'une nouvelle ère sur les terres sacrées
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="group relative px-10 py-4 border border-gold/30 bg-gold text-black font-bold text-[10px] tracking-[0.4em] uppercase transition-all hover:scale-105 rounded-none shadow-[0_0_30px_rgba(212,175,55,0.1)]">
              REJOINDRE
            </button>
            <button className="group px-10 py-4 border border-white/10 backdrop-blur-md bg-white/5 text-white/80 font-bold text-[10px] tracking-[0.4em] uppercase hover:bg-white/10 transition-all rounded-none flex items-center gap-3">
              <Play className="w-3 h-3 fill-white/20" />
              VOIR LE TRAILER
            </button>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 cursor-pointer group"
        onClick={() => document.getElementById('the-world')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="text-[8px] tracking-[0.6em] uppercase text-silver/20 font-bold group-hover:text-gold/40 transition-colors">Découvrir l'Atlas</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-gold/20 to-transparent" />
      </motion.div>
    </section>
  )
}
