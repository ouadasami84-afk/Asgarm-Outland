"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import Image from 'next/image'

export const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden pt-20">
      {/* Background with Parallax/Mist */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://picsum.photos/seed/magicalcastle/1920/1080"
          alt="Ancient magical castle"
          fill
          className="object-cover opacity-50 scale-110"
          priority
          data-ai-hint="magical castle"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-obsidian/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <span className="text-gold tracking-[0.4em] uppercase text-sm mb-6 block font-medium animate-pulse">
            The Legend Awakens
          </span>
          <h1 className="font-headline text-6xl md:text-8xl lg:text-9xl mb-8 tracking-tight text-glow-gold">
            Enter the <br />
            <span className="italic text-silver">Arcane World</span>
          </h1>
          <p className="font-body text-silver/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            Unveil the mysteries of a forgotten era. Master the elements, weave your own legacy, 
            and explore the heights of ancient wizardry in an immersive world beyond imagination.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="w-full sm:w-auto px-10 py-4 bg-gold text-obsidian rounded-full font-bold text-sm tracking-widest uppercase hover:scale-105 transition-transform shadow-[0_0_30px_rgba(212,175,55,0.3)]">
              Begin Adventure
            </button>
            <button className="w-full sm:w-auto px-10 py-4 glass-gold text-white rounded-full font-bold text-sm tracking-widest uppercase hover:bg-white/10 transition-all">
              Discover More
            </button>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase text-silver/40">Scroll to Explore</span>
        <ChevronDown className="text-gold w-4 h-4 animate-bounce" />
      </motion.div>
    </section>
  )
}
