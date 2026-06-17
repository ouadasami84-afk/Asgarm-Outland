"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Shield, Play, ChevronDown } from 'lucide-react'

export const Hero: React.FC = () => {
  const videoId = "VbuXGlnUwtY" 

  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background Video Layer with Professional Cinematic Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#010208]/60 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#010208] via-transparent to-[#010208]/80 z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_20%,_#010208_100%)] z-10 opacity-60" />
        
        <div className="relative w-full h-full pointer-events-none">
          <iframe
            className="absolute top-1/2 left-1/2 w-[115vw] h-[115vh] -translate-x-1/2 -translate-y-1/2 object-cover grayscale-[0.1] contrast-[1.05]"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&enablejsapi=1`}
            allow="autoplay; encrypted-media"
            frameBorder="0"
          />
        </div>
      </div>

      <div className="relative z-20 text-center max-w-5xl px-6 pt-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Subtle Royal Badge */}
          <div className="flex items-center justify-center gap-6 mb-12">
            <div className="h-[1px] w-12 bg-gold/30" />
            <div className="relative flex items-center gap-3">
              <Shield className="text-gold/80 w-5 h-5" />
              <span className="text-gold/70 tracking-[0.6em] uppercase text-[10px] font-bold">
                Asgarm Saga
              </span>
            </div>
            <div className="h-[1px] w-12 bg-gold/30" />
          </div>

          {/* Refined Title - Smaller and more elegant */}
          <h1 className="font-headline text-6xl md:text-9xl mb-8 tracking-[0.2em] leading-tight text-white text-glow-gold uppercase">
            OUTLAND
          </h1>

          <div className="max-w-2xl mx-auto mb-16">
            <div className="h-[1px] w-24 bg-gold/40 mx-auto mb-8" />
            <p className="font-body text-silver/70 text-sm md:text-base leading-relaxed tracking-[0.4em] uppercase italic">
              Écrivez votre légende sur les terres sacrées d_<span className="text-gold">Asgarm</span>
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <button className="group relative px-14 py-5 bg-gold text-black font-bold text-[11px] tracking-[0.5em] uppercase transition-all shadow-[0_0_40px_rgba(212,175,55,0.2)] hover:shadow-[0_0_60px_rgba(212,175,55,0.4)] hover:scale-105 rounded-sm overflow-hidden">
              <span className="relative z-10">Rejoindre l'Élite</span>
              <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </button>
            <button className="group px-14 py-5 border border-gold/20 backdrop-blur-md bg-black/30 text-gold/80 font-bold text-[11px] tracking-[0.5em] uppercase hover:bg-gold/10 hover:border-gold/50 transition-all rounded-sm flex items-center gap-3">
              <Play className="w-4 h-4 fill-gold/20" />
              <span>Voir le Trailer</span>
            </button>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-6 cursor-pointer group"
        onClick={() => document.getElementById('the-world')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="text-[9px] tracking-[0.7em] uppercase text-silver/30 font-bold group-hover:text-gold/50 transition-colors">Découvrir l'Atlas</span>
        <div className="relative w-[1px] h-16 bg-gradient-to-b from-gold/40 to-transparent overflow-hidden">
          <motion.div 
            animate={{ y: [0, 64] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
            className="w-full h-1/2 bg-gold/60"
          />
        </div>
      </motion.div>
    </section>
  )
}