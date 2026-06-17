
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
          className={`relative transition-all duration-1000 ease-in-out flex-1 flex flex-col items-center justify-center p-12 overflow-hidden ${
            hoveredSide === 'ombres' ? 'opacity-40 scale-98' : 'opacity-100'
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-sky-500/10 via-transparent to-white/5 pointer-events-none" />
          <motion.div 
            animate={{ 
              opacity: hoveredSide === 'arcanes' ? 0.2 : 0.05,
              scale: hoveredSide === 'arcanes' ? 1.1 : 1
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-400/20 blur-[150px] rounded-full pointer-events-none" 
          />

          <div className="relative z-20 text-center max-w-xl">
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-[1px] w-12 bg-sky-400/30" />
                <span className="text-sky-400 text-[10px] tracking-[1.2em] uppercase font-bold text-glow-sky">Justice Magique</span>
                <div className="h-[1px] w-12 bg-sky-400/30" />
              </div>
              <h1 className="text-7xl font-headline text-white uppercase tracking-tighter mb-8 text-glow-sky leading-none">
                Conclave des <br /> <span className="text-sky-400 italic font-light">Arcanes</span>
              </h1>
              <p className="text-silver/40 italic text-lg leading-relaxed mb-12 max-w-md">
                "Nous combattons la magie noire et la magie du sang. Seule la magie arcanique est autorisée sous notre règne."
              </p>
              <div className="px-12 py-4 border border-sky-500/20 text-sky-400 text-[10px] font-bold uppercase tracking-[0.5em] hover:bg-sky-500 hover:text-white transition-all duration-500">
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
            hoveredSide === 'arcanes' ? 'opacity-40 scale-98' : 'opacity-100'
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-bl from-red-950/20 via-transparent to-black pointer-events-none" />
          <motion.div 
            animate={{ 
              opacity: hoveredSide === 'ombres' ? 0.2 : 0.03,
              scale: hoveredSide === 'ombres' ? 1.1 : 1
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/20 blur-[150px] rounded-full pointer-events-none" 
          />

          <div className="relative z-20 text-center max-w-xl">
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-[1px] w-12 bg-red-600/30" />
                <span className="text-red-600 text-[10px] tracking-[1.2em] uppercase font-bold text-glow-red">Puissance Occulte</span>
                <div className="h-[1px] w-12 bg-red-600/30" />
              </div>
              <h1 className="text-7xl font-headline text-white uppercase tracking-tighter mb-8 leading-none">
                Conclave des <br /> <span className="text-red-600 italic font-light">Ombres</span>
              </h1>
              <p className="text-silver/40 italic text-lg leading-relaxed mb-12 max-w-md">
                "La magie reste de la magie. Nous embrassons la magie noire et du sang pour forger notre propre destin."
              </p>
              <div className="px-12 py-4 border border-red-600/20 text-red-600 text-[10px] font-bold uppercase tracking-[0.5em] hover:bg-red-600 hover:text-white transition-all duration-500">
                Accéder au Conclave des Ombres
              </div>
            </div>
          </div>
        </Link>

      </div>

      <footer className="h-12 flex items-center justify-center bg-black/60 relative z-20">
        <span className="shine-text text-[9px] tracking-[0.8em] uppercase font-bold">
          CONCLAVE SUPRÊME — ÉQUILIBRE D'ASGARM V3.1
        </span>
      </footer>

      <style jsx global>{`
        .text-glow-sky {
          text-shadow: 0 0 15px rgba(14, 165, 233, 0.4);
        }
        .text-glow-red {
          text-shadow: 0 0 15px rgba(220, 38, 38, 0.4);
        }
      `}</style>
    </main>
  )
}
