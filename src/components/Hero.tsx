
"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Play } from 'lucide-react'

export const Hero: React.FC = () => {
  const videoId = "VbuXGlnUwtY" 

  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-end overflow-hidden">
      {/* Vidéo Cinématique - Configuration Ultra Pro */}
      <div className="absolute inset-0 z-0 bg-night-deep overflow-hidden">
        {/* Bouclier d'interaction : empêche tout clic ou survol de la vidéo */}
        <div className="absolute inset-0 z-10 bg-transparent pointer-events-auto" />
        
        <div className="relative w-full h-full pointer-events-none">
          <iframe
            className="absolute top-[40%] left-1/2 w-[120vw] h-[140vh] -translate-x-1/2 -translate-y-1/2 object-cover border-none scale-150"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&enablejsapi=1&cc_load_policy=0&vq=hd1080&disablekb=1`}
            allow="autoplay; encrypted-media"
            frameBorder="0"
          />
        </div>
        
        {/* Masque de protection inférieur pour garantir une transition douce avec le reste du site */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#010208] to-transparent z-[15]" />
      </div>

      {/* Interface utilisateur - Toujours interactive car z-index > bouclier */}
      <div className="relative z-20 flex flex-col items-center w-full pb-12 max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <button className="group relative px-12 py-5 bg-gold text-night font-bold text-[10px] tracking-[0.5em] uppercase transition-all hover:scale-105 shadow-[0_0_60px_rgba(212,175,55,0.3)] border border-gold/30">
            REJOINDRE LE ROYAUME
          </button>
          <button className="group px-12 py-5 border border-white/10 backdrop-blur-md bg-white/5 text-white/90 font-bold text-[10px] tracking-[0.5em] uppercase hover:bg-white/10 transition-all flex items-center gap-3">
            <Play className="w-3 h-3 fill-white/20" />
            VOIR LE TRAILER
          </button>
        </motion.div>
      </div>

      {/* Indicateur de défilement magique */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-[1px] h-8 bg-gradient-to-b from-gold/60 to-transparent" />
      </motion.div>
    </section>
  )
}
