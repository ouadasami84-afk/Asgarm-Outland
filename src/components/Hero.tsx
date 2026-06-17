"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Shield, Play, ChevronDown } from 'lucide-react'

export const Hero: React.FC = () => {
  const videoId = "VbuXGlnUwtY" 

  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background Video Layer with Deep Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#010208]/70 z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#010208] via-transparent to-[#010208] z-10" />
        
        <div className="relative w-full h-full pointer-events-none">
          <iframe
            className="absolute top-1/2 left-1/2 w-[115vw] h-[115vh] -translate-x-1/2 -translate-y-1/2 object-cover grayscale-[0.2] contrast-[1.1]"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&enablejsapi=1`}
            allow="autoplay; encrypted-media"
            frameBorder="0"
          />
        </div>
      </div>

      <div className="relative z-20 text-center max-w-6xl px-6 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center justify-center gap-8 mb-16">
            <div className="h-[1px] w-24 bg-gold/40 shadow-[0_0_10px_rgba(212,175,55,0.3)]" />
            <div className="relative">
              <Shield className="text-gold w-8 h-8 animate-pulse" />
              <div className="absolute inset-0 bg-gold/20 blur-xl rounded-full" />
            </div>
            <span className="text-gold/90 tracking-[0.8em] uppercase text-[12px] font-bold text-glow-gold">
              Le Royaume d'Asgarm
            </span>
            <div className="relative">
              <Shield className="text-gold w-8 h-8 animate-pulse" />
              <div className="absolute inset-0 bg-gold/20 blur-xl rounded-full" />
            </div>
            <div className="h-[1px] w-24 bg-gold/40 shadow-[0_0_10px_rgba(212,175,55,0.3)]" />
          </div>

          <h1 className="font-headline text-[7rem] md:text-[13rem] mb-12 tracking-tight leading-none text-white text-glow-gold filter drop-shadow-[0_0_30px_rgba(212,175,55,0.4)]">
            OUTLAND
          </h1>

          <div className="max-w-4xl mx-auto mb-20">
            <p className="font-body text-silver/80 text-base md:text-lg leading-relaxed tracking-[0.4em] uppercase italic">
              Écrivez votre légende sur les terres sacrées d'<span className="text-gold font-bold">Asgarm</span>. <br />
              <span className="text-gold/50 text-sm mt-4 block">Une expérience immersive sans précédent</span>
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-12">
            <button className="group relative px-20 py-7 bg-gold text-black font-bold text-[12px] tracking-[0.6em] uppercase transition-all shadow-[0_0_60px_rgba(212,175,55,0.3)] hover:shadow-[0_0_100px_rgba(212,175,55,0.5)] hover:scale-105 rounded-[2px] overflow-hidden">
              <span className="relative z-10">Rejoindre l'Élite</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </button>
            <button className="group px-20 py-7 border border-gold/30 backdrop-blur-md bg-black/20 text-gold font-bold text-[12px] tracking-[0.6em] uppercase hover:bg-gold/10 hover:border-gold/60 transition-all rounded-[2px] flex items-center gap-4">
              <Play className="w-5 h-5 fill-gold/20" />
              <span>L'Archive Vidéo</span>
            </button>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-8 cursor-pointer group"
        onClick={() => document.getElementById('the-world')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="text-[11px] tracking-[0.8em] uppercase text-silver/40 font-bold group-hover:text-gold/60 transition-colors">Explorer Asgarm</span>
        <div className="relative w-[1px] h-24 bg-gradient-to-b from-gold/60 to-transparent overflow-hidden">
          <motion.div 
            animate={{ y: [0, 96] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="w-full h-1/2 bg-gold"
          />
        </div>
      </motion.div>
    </section>
  )
}
