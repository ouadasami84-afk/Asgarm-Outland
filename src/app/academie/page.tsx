
"use client"

import React, { useState } from 'react'
import { Navigation } from '@/components/Navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function AcademiePage() {
  const [hoveredSchool, setHoveredSchool] = useState<'ascarnia' | 'obscura' | null>(null)

  return (
    <main className="relative h-screen flex flex-col overflow-hidden bg-transparent">
      <Navigation />
      
      <div className="flex-1 flex relative z-10 overflow-hidden pt-24">
        
        {/* Ascarnia — École Arcanique */}
        <div 
          onMouseEnter={() => setHoveredSchool('ascarnia')}
          onMouseLeave={() => setHoveredSchool(null)}
          className={`relative transition-all duration-1000 ease-in-out flex-1 flex flex-col items-center justify-center p-12 overflow-hidden border-r border-gold/5 ${
            hoveredSchool === 'obscura' ? 'opacity-20 blur-md scale-95' : 'opacity-100'
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-gold/5 via-transparent to-white/5 pointer-events-none" />
          <motion.div 
            animate={{ 
              opacity: hoveredSchool === 'ascarnia' ? 0.15 : 0.03,
              scale: hoveredSchool === 'ascarnia' ? 1.1 : 1
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/20 blur-[150px] rounded-full pointer-events-none" 
          />

          <div className="relative z-20 text-center max-w-xl">
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-[1px] w-12 bg-gold/30" />
                <span className="text-gold text-[10px] tracking-[1.2em] uppercase font-bold text-glow-gold">Lumière d'Asgarm</span>
                <div className="h-[1px] w-12 bg-gold/30" />
              </div>
              <h1 className="text-7xl font-headline text-white uppercase tracking-tighter mb-8 text-glow-gold leading-none">
                Académie <br /> <span className="text-gold italic font-light">Ascarnia</span>
              </h1>
              <p className="text-silver/40 italic text-lg leading-relaxed mb-12 max-w-md">
                "Fondée par les Rois des Royaumes après la Grande Guerre pour enseigner l'excellence arcanique. Un cursus de 100 sorts pour protéger l'équilibre d'Asgarm."
              </p>
              <div className="px-12 py-4 border border-gold/20 text-gold text-[10px] font-bold uppercase tracking-[0.5em] hover:bg-gold hover:text-night transition-all duration-500">
                100 Sorts — Débuter l'Apprentissage
              </div>
            </div>
          </div>
        </div>

        {/* Obscura — École de Magie Noire */}
        <div 
          onMouseEnter={() => setHoveredSchool('obscura')}
          onMouseLeave={() => setHoveredSchool(null)}
          className={`relative transition-all duration-1000 ease-in-out flex-1 flex flex-col items-center justify-center p-12 overflow-hidden ${
            hoveredSchool === 'ascarnia' ? 'opacity-20 blur-md scale-95' : 'opacity-100'
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-bl from-indigo-950/20 via-transparent to-purple-950/10 pointer-events-none" />
          <motion.div 
            animate={{ 
              opacity: hoveredSchool === 'obscura' ? 0.2 : 0.03,
              scale: hoveredSchool === 'obscura' ? 1.1 : 1
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/20 blur-[150px] rounded-full pointer-events-none" 
          />

          <div className="relative z-20 text-center max-w-xl">
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-[1px] w-12 bg-indigo-500/30" />
                <span className="text-indigo-400 text-[10px] tracking-[1.2em] uppercase font-bold">Arts Interdits</span>
                <div className="h-[1px] w-12 bg-indigo-500/30" />
              </div>
              <h1 className="text-7xl font-headline text-white uppercase tracking-tighter mb-8 leading-none">
                Académie <br /> <span className="text-indigo-400 italic font-light">Obscura</span>
              </h1>
              <p className="text-silver/40 italic text-lg leading-relaxed mb-12 max-w-md">
                "Forgée par les deux Seigneurs du Mal pour libérer la magie noire et du sang. Un savoir de 40 sorts réservé à ceux repérés par les puissances de l'Ombre."
              </p>
              <div className="px-12 py-4 border border-indigo-500/20 text-indigo-400 text-[10px] font-bold uppercase tracking-[0.5em] hover:bg-indigo-400 hover:text-night transition-all duration-500">
                40 Sorts — Solliciter un Maître
              </div>
            </div>
          </div>
        </div>

      </div>

      <footer className="h-12 border-t border-gold/5 flex items-center justify-center bg-black/60 relative z-20">
        <span className="shine-text text-[9px] tracking-[0.8em] uppercase font-bold">
          CONCLAVE SUPRÊME — ÉQUILIBRE D'ASGARM V3.1
        </span>
      </footer>
    </main>
  )
}
