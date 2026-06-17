"use client"

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export const Hero: React.FC = () => {
  const videoId = "VbuXGlnUwtY" 

  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-end overflow-hidden bg-background">
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 z-10 bg-transparent cursor-default select-none" />
        
        <div className="absolute inset-0 flex items-center justify-center scale-110">
          <iframe
            className="w-[110vw] h-[110vh] max-w-none border-none object-cover will-change-transform pointer-events-none opacity-40"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&enablejsapi=1&cc_load_policy=0&vq=hd1080&disablekb=1&playsinline=1`}
            allow="autoplay; encrypted-media"
            frameBorder="0"
          />
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-background via-background/60 to-transparent z-[15]" />
      </div>

      <div className="relative z-20 flex flex-col items-center w-full pb-20 max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex items-center justify-center w-full"
        >
          <Link href="/guide">
            <button className="group relative px-16 py-6 font-bold text-[10px] tracking-[0.6em] uppercase transition-all hover:scale-105 active:scale-95 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-gold via-gold/80 to-white/10 backdrop-blur-sm" />
              <div className="absolute inset-0 border border-gold/30 group-hover:border-gold/60 transition-colors" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
              <span className="relative z-10 text-black">
                Suivre le Guide Arrivant
              </span>
              <div className="absolute -inset-1 bg-gold/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          </Link>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-gold/60 to-transparent" />
      </motion.div>
    </section>
  )
}
