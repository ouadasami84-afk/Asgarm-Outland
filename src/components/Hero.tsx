
"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Compass, Play } from 'lucide-react'

export const Hero: React.FC = () => {
  const videoId = "VbuXGlnUwtY" 

  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
      {/* Couche Vidéo Cinématique */}
      <div className="absolute inset-0 z-0 bg-night-deep">
        <div className="absolute inset-0 bg-gradient-to-t from-night-deep via-transparent to-night-deep/60 z-10" />
        <div className="absolute inset-0 bg-night-deep/30 z-10" />
        
        <div className="relative w-full h-full pointer-events-none">
          <iframe
            className="absolute top-1/2 left-1/2 w-[115vw] h-[115vh] -translate-x-1/2 -translate-y-1/2 object-cover opacity-80"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&enablejsapi=1`}
            allow="autoplay; encrypted-media"
            frameBorder="0"
          />
        </div>
      </div>

      {/* Overlay Minimaliste & Boutons Déplacés vers le bas */}
      <div className="relative z-20 flex flex-col items-center justify-end h-full w-full pb-32 max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="flex flex-col items-center gap-12"
        >
          {/* Badge discret Asgarm */}
          <div className="flex items-center gap-4 opacity-40">
            <div className="h-[1px] w-12 bg-gold" />
            <span className="text-[10px] tracking-[0.6em] uppercase text-white font-medium">Asgarm</span>
            <div className="h-[1px] w-12 bg-gold" />
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <button className="group relative px-12 py-5 bg-gold text-night font-bold text-[11px] tracking-[0.4em] uppercase transition-all hover:scale-105 shadow-[0_0_30px_rgba(212,175,55,0.2)]">
              REJOINDRE L'ÉLITE
            </button>
            <button className="group px-12 py-5 border border-white/10 backdrop-blur-xl bg-white/5 text-white/90 font-bold text-[11px] tracking-[0.4em] uppercase hover:bg-white/10 transition-all flex items-center gap-3">
              <Play className="w-4 h-4 fill-white/20" />
              VOIR LE TRAILER
            </button>
          </div>
        </motion.div>
      </div>

      {/* Indicateur de défilement */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-30"
      >
        <span className="text-[9px] tracking-[0.4em] uppercase text-white">Découvrir l'univers</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-gold to-transparent" />
      </motion.div>
    </section>
  )
}
