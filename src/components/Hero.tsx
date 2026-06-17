"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Shield, Play } from 'lucide-react'

export const Hero: React.FC = () => {
  // Remplacez 'YOUR_VIDEO_ID' par l'ID réel de votre vidéo YouTube
  // Exemple: https://www.youtube.com/watch?v=dQw4w9WgXcQ -> ID est dQw4w9WgXcQ
  const videoId = "YOUR_VIDEO_ID" 

  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background Video Layer */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#010208]/60 z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#010208] via-transparent to-[#010208] z-10" />
        
        <div className="relative w-full h-full pointer-events-none">
          <iframe
            className="absolute top-1/2 left-1/2 w-[110vw] h-[110vh] -translate-x-1/2 -translate-y-1/2 object-cover"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1`}
            allow="autoplay; encrypted-media"
            frameBorder="0"
          />
        </div>
      </div>

      <div className="relative z-20 text-center max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center justify-center gap-6 mb-12">
            <div className="h-[1px] w-24 bg-gold/30" />
            <Shield className="text-gold w-6 h-6 animate-pulse" />
            <span className="text-gold/80 tracking-[0.6em] uppercase text-[11px] font-bold">
              Le Destin d'Asgarm
            </span>
            <Shield className="text-gold w-6 h-6 animate-pulse" />
            <div className="h-[1px] w-24 bg-gold/30" />
          </div>

          <h1 className="font-headline text-[8rem] md:text-[14rem] mb-12 tracking-tight leading-none text-white text-glow-gold filter drop-shadow-[0_0_20px_rgba(212,175,55,0.3)]">
            OUTLAND
          </h1>

          <div className="max-w-3xl mx-auto mb-16">
            <p className="font-body text-silver/70 text-sm md:text-base leading-relaxed tracking-[0.3em] uppercase italic">
              Entrez dans la légende d'un monde oublié. <br />
              <span className="text-gold/60">Asgarm</span> vous appelle à travers les âges.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-10">
            <button className="group relative px-16 py-6 bg-gold text-black font-bold text-[11px] tracking-[0.5em] uppercase transition-all shadow-[0_0_60px_rgba(212,175,55,0.2)] hover:shadow-[0_0_80px_rgba(212,175,55,0.4)] hover:scale-105 rounded-[2px] overflow-hidden">
              <span className="relative z-10">Commencer l'Aventure</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </button>
            <button className="group px-16 py-6 border border-gold/30 text-gold font-bold text-[11px] tracking-[0.5em] uppercase hover:bg-gold/10 transition-all rounded-[2px] flex items-center gap-3">
              <Play className="w-4 h-4" />
              <span>Voir le Trailer</span>
            </button>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 2 }}
        className="absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-6"
      >
        <span className="text-[10px] tracking-[0.6em] uppercase text-silver/40 font-bold">Explorer l'Atlas</span>
        <div className="w-[1px] h-20 bg-gradient-to-b from-gold/50 to-transparent animate-bounce" />
      </motion.div>
    </section>
  )
}
