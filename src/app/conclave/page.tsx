"use client"

import React, { useState } from 'react'
import { Navigation } from '@/components/Navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function ConclavePage() {
  const [hoveredSide, setHoveredSide] = useState<'arcanes' | 'ombres' | null>(null)

  return (
    <main className="relative h-screen flex flex-col overflow-hidden bg-transparent">
      <Navigation />
      
      <div className="flex-1 flex relative z-10 overflow-hidden pt-24">
        
        {/* Voie des Arcanes (Justice / Ordre) */}
        <Link 
          href="/conclave/arcanes"
          onMouseEnter={() => setHoveredSide('arcanes')}
          onMouseLeave={() => setHoveredSide(null)}
          className={`relative transition-all duration-1000 ease-in-out flex-1 flex flex-col items-center justify-center p-12 overflow-hidden border-r border-gold/5 ${
            hoveredSide === 'ombres' ? 'opacity-20 blur-md scale-95' : 'opacity-100'
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-gold/5 via-transparent to-white/5 pointer-events-none" />
          <motion.div 
            animate={{ 
              opacity: hoveredSide === 'arcanes' ? 0.15 : 0.03,
              scale: hoveredSide === 'arcanes' ? 1.1 : 1
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/20 blur-[150px] rounded-full pointer-events-none" 
          />

          <div className="relative z-20 text-center max-w-xl">
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-[1px] w-12 bg-gold/30" />
                <span className="text-gold text-[10px] tracking-[1.2em] uppercase font-bold text-glow-gold">Justice Magique</span>
                <div className="h-[1px] w-12 bg-gold/30" />
              </div>
              <h1 className="text-7xl font-headline text-white uppercase tracking-tighter mb-8 text-glow-gold leading-none">
                Conclave des <br /> <span className="text-gold italic font-light">Arcanes</span>
              </h1>
              <p className="text-silver/40 italic text-lg leading-relaxed mb-12 max-w-md">
                "Nous combattons la magie noire et la magie du sang. Seule la magie arcanique est autorisée sous notre règne."
              </p>
              <div className="px-12 py-4 border border-gold/20 text-gold text-[10px] font-bold uppercase tracking-[0.5em] hover:bg-gold hover:text-night transition-all duration-500">
                Accéder au Conclave des Arcanes
              </div>
            </div>
          </div>
        </Link>

        {/* Voie des Ombres (Liberté / Pouvoir) */}
        <Link 
          href="/conclave/ombres"
          onMouseEnter={() => setHoveredSide('ombres')}
          onMouseLeave={() => setHoveredSide(null)}
          className={`relative transition-all duration-1000 ease-in-out flex-1 flex flex-col items-center justify-center p-12 overflow-hidden ${
            hoveredSide === 'arcanes' ? 'opacity-20 blur-md scale-95' : 'opacity-100'
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-bl from-indigo-950/20 via-transparent to-purple-950/10 pointer-events-none" />
          <motion.div 
            animate={{ 
              opacity: hoveredSide === 'ombres' ? 0.2 : 0.03,
              scale: hoveredSide === 'ombres' ? 1.1 : 1
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/20 blur-[150px] rounded-full pointer-events-none" 
          />

          <div className="relative z-20 text-center max-w-xl">
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-[1px] w-12 bg-indigo-500/30" />
                <span className="text-indigo-400 text-[10px] tracking-[1.2em] uppercase font-bold">Puissance Occulte</span>
                <div className="h-[1px] w-12 bg-indigo-500/30" />
              </div>
              <h1 className="text-7xl font-headline text-white uppercase tracking-tighter mb-8 leading-none">
                Conclave des <br /> <span className="text-indigo-400 italic font-light">Ombres</span>
              </h1>
              <p className="text-silver/40 italic text-lg leading-relaxed mb-12 max-w-md">
                "La magie reste de la magie. Nous embrassons la magie noire et du sang pour forger notre propre destin."
              </p>
              <div className="px-12 py-4 border border-indigo-500/20 text-indigo-400 text-[10px] font-bold uppercase tracking-[0.5em] hover:bg-indigo-400 hover:text-night transition-all duration-500">
                Accéder au Conclave des Ombres
              </div>
            </div>
          </div>
        </Link>

      </div>

      <footer className="h-12 border-t border-gold/5 flex items-center justify-center bg-black/60 relative z-20">
        <span className="shine-text text-[9px] tracking-[0.8em] uppercase font-bold">
          CONCLAVE SUPRÊME — ÉQUILIBRE D'ASGARM V3.1
        </span>
      </footer>
    </main>
  )
}
