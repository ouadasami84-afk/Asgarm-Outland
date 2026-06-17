
"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Play } from 'lucide-react'

export const Hero: React.FC = () => {
  const videoId = "VbuXGlnUwtY" 

  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-end overflow-hidden">
      {/* Vidéo Cinématique - Zoomée et décalée pour masquer les sous-titres et logos YouTube */}
      <div className="absolute inset-0 z-0 bg-night-deep overflow-hidden">
        <div className="relative w-full h-full pointer-events-none">
          <iframe
            className="absolute top-[45%] left-1/2 w-[115vw] h-[130vh] -translate-x-1/2 -translate-y-1/2 object-cover border-none scale-110"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&enablejsapi=1&cc_load_policy=0&vq=hd1080`}
            allow="autoplay; encrypted-media"
            frameBorder="0"
          />
        </div>
        {/* Masque de protection inférieur pour garantir que rien ne dépasse */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#010208] to-transparent z-10" />
      </div>

      {/* Interface placée au plus bas pour libérer totalement la vidéo */}
      <div className="relative z-20 flex flex-col items-center w-full pb-8 max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <button className="group relative px-10 py-4 bg-gold text-night font-bold text-[9px] tracking-[0.5em] uppercase transition-all hover:scale-105 shadow-[0_0_50px_rgba(212,175,55,0.3)] border border-gold/30">
            REJOINDRE LE ROYAUME
          </button>
          <button className="group px-10 py-4 border border-white/10 backdrop-blur-md bg-white/5 text-white/90 font-bold text-[9px] tracking-[0.5em] uppercase hover:bg-white/10 transition-all flex items-center gap-3">
            <Play className="w-2.5 h-3 fill-white/20" />
            VOIR LE TRAILER
          </button>
        </motion.div>
      </div>

      {/* Indicateur de défilement magique */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-[1px] h-6 bg-gradient-to-b from-gold/60 to-transparent" />
      </motion.div>
    </section>
  )
}
