
"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Play } from 'lucide-react'

export const Hero: React.FC = () => {
  // ID de la vidéo Outland
  const videoId = "VbuXGlnUwtY" 

  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-end overflow-hidden bg-background">
      {/* Conteneur Vidéo Ultra Pro */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Bouclier d'interaction absolu : capture tout pour empêcher l'UI YouTube de s'afficher */}
        <div className="absolute inset-0 z-10 bg-transparent cursor-default pointer-events-auto select-none" />
        
        {/* L'Iframe est dimensionnée pour être plus grande que l'écran (cropping) et centrée */}
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
          <iframe
            className="w-[115vw] h-[115vh] max-w-none border-none object-cover"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&enablejsapi=1&cc_load_policy=0&vq=hd1080&disablekb=1&playsinline=1`}
            allow="autoplay; encrypted-media"
            frameBorder="0"
          />
        </div>
        
        {/* Dégradé de finition pour une intégration douce avec le site */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-[15]" />
      </div>

      {/* Interface utilisateur - Placée au plus bas pour ne pas gêner la vue */}
      <div className="relative z-20 flex flex-col items-center w-full pb-16 max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <button className="group relative px-10 py-4 bg-gold text-night font-bold text-[9px] tracking-[0.5em] uppercase transition-all hover:scale-105 shadow-[0_0_40px_rgba(212,175,55,0.2)] border border-gold/30">
            REJOINDRE LE ROYAUME
          </button>
          <button className="group px-10 py-4 border border-white/10 backdrop-blur-md bg-white/5 text-white/80 font-bold text-[9px] tracking-[0.5em] uppercase hover:bg-white/10 transition-all flex items-center gap-3">
            <Play className="w-3 h-3 fill-white/10" />
            VOIR LE TRAILER
          </button>
        </motion.div>
      </div>

      {/* Indicateur de défilement magique discret */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-[1px] h-6 bg-gradient-to-b from-gold/40 to-transparent" />
      </motion.div>
    </section>
  )
}
