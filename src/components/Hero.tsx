"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Shield, ChevronDown } from 'lucide-react'
import Image from 'next/image'

export const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 8, ease: "easeOut" }}
          className="relative h-full w-full"
        >
          <Image
            src="https://picsum.photos/seed/outland/1920/1080"
            alt="Paysage mystique d'Asgarm"
            fill
            className="object-cover opacity-40 brightness-[0.6] grayscale-[20%]"
            priority
            data-ai-hint="mystical landscape"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#03040a] via-transparent to-[#03040a]" />
        <div className="absolute inset-0 bg-[#03040a]/40" />
      </div>

      <div className="relative z-10 text-center max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-[1px] w-16 bg-gold/20" />
            <Shield className="text-gold/50 w-5 h-5" />
            <span className="text-gold/60 tracking-[0.5em] uppercase text-[10px] font-bold">
              Bienvenue sur Outland
            </span>
            <Shield className="text-gold/50 w-5 h-5" />
            <div className="h-[1px] w-16 bg-gold/20" />
          </div>

          <h1 className="font-headline text-7xl md:text-[10rem] mb-6 tracking-tight leading-none text-white text-glow-gold">
            OUTLAND
          </h1>

          <p className="font-body text-silver/60 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed font-light tracking-[0.2em] uppercase text-[11px]">
            Explorez les terres oubliées d'Asgarm. <br />
            Forgez votre légende dans le sang et la magie.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <button className="group relative px-14 py-5 bg-gold text-black font-bold text-[10px] tracking-[0.4em] uppercase transition-all shadow-[0_0_50px_rgba(212,175,55,0.15)] hover:shadow-[0_0_70px_rgba(212,175,55,0.3)] rounded-sm">
              Commencer l'Aventure
            </button>
            <button className="px-14 py-5 border border-white/10 text-white font-bold text-[10px] tracking-[0.4em] uppercase hover:bg-white/5 transition-all rounded-sm">
              Consulter l'Atlas
            </button>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 cursor-pointer"
      >
        <span className="text-[9px] tracking-[0.5em] uppercase text-silver/30 font-bold">Explorer</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-gold/40 to-transparent" />
      </motion.div>
    </section>
  )
}