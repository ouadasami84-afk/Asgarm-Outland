
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
        <Link 
          href="/academie/ascarnia"
          onMouseEnter={() => setHoveredSchool('ascarnia')}
          onMouseLeave={() => setHoveredSchool(null)}
          className={`relative transition-all duration-1000 ease-in-out flex-1 flex flex-col items-center justify-center p-12 overflow-hidden border-r border-gold/5 ${
            hoveredSchool === 'obscura' ? 'opacity-20 blur-md scale-95' : 'opacity-100'
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-sky-500/10 via-transparent to-white/5 pointer-events-none" />
          <motion.div 
            animate={{ 
              opacity: hoveredSchool === 'ascarnia' ? 0.2 : 0.05,
              scale: hoveredSchool === 'ascarnia' ? 1.1 : 1
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-400/20 blur-[150px] rounded-full pointer-events-none" 
          />

          <div className="relative z-20 text-center max-w-xl">
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-[1px] w-12 bg-sky-400/30" />
                <span className="text-sky-400 text-[10px] tracking-[1.2em] uppercase font-bold">Lumière d'Asgarm</span>
                <div className="h-[1px] w-12 bg-sky-400/30" />
              </div>
              <h1 className="text-7xl font-headline text-white uppercase tracking-tighter mb-8 leading-none">
                Académie <br /> <span className="text-sky-400 italic font-light">Ascarnia</span>
              </h1>
              <p className="text-silver/40 italic text-lg leading-relaxed mb-12 max-w-md">
                "Fondée par les Rois des Royaumes pour enseigner l'excellence arcanique. 100 sorts pour protéger l'équilibre."
              </p>
              <div className="px-12 py-4 border border-sky-500/20 text-sky-400 text-[10px] font-bold uppercase tracking-[0.5em] hover:bg-sky-500 hover:text-white transition-all duration-500">
                Accéder à l'Excellence Arcanique
              </div>
            </div>
          </div>
        </Link>

        {/* Obscura — École de Magie Noire */}
        <Link 
          href="/academie/obscura"
          onMouseEnter={() => setHoveredSchool('obscura')}
          onMouseLeave={() => setHoveredSchool(null)}
          className={`relative transition-all duration-1000 ease-in-out flex-1 flex flex-col items-center justify-center p-12 overflow-hidden ${
            hoveredSchool === 'ascarnia' ? 'opacity-20 blur-md scale-95' : 'opacity-100'
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-bl from-red-950/20 via-transparent to-black pointer-events-none" />
          <motion.div 
            animate={{ 
              opacity: hoveredSchool === 'obscura' ? 0.2 : 0.03,
              scale: hoveredSchool === 'obscura' ? 1.1 : 1
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/20 blur-[150px] rounded-full pointer-events-none" 
          />

          <div className="relative z-20 text-center max-w-xl">
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-[1px] w-12 bg-red-600/30" />
                <span className="text-red-600 text-[10px] tracking-[1.2em] uppercase font-bold text-glow-red">Arts Interdits</span>
                <div className="h-[1px] w-12 bg-red-600/30" />
              </div>
              <h1 className="text-7xl font-headline text-white uppercase tracking-tighter mb-8 leading-none">
                Académie <br /> <span className="text-red-600 italic font-light">Obscura</span>
              </h1>
              <p className="text-silver/40 italic text-lg leading-relaxed mb-12 max-w-md">
                "Forgée par les deux Seigneurs du Mal pour libérer la magie noire. 40 sorts réservés à l'élite de l'Ombre."
              </p>
              <div className="px-12 py-4 border border-red-600/20 text-red-600 text-[10px] font-bold uppercase tracking-[0.5em] hover:bg-red-600 hover:text-white transition-all duration-500">
                Solliciter un Maître
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

      <style jsx global>{`
        .text-glow-red {
          text-shadow: 0 0 15px rgba(220, 38, 38, 0.4);
        }
      `}</style>
    </main>
  )
}
