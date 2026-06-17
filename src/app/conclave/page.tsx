
"use client"

import React, { useState } from 'react'
import { Navigation } from '@/components/Navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Sun, Moon, Shield, Sword, Sparkles, Flame, Eye, Crown } from 'lucide-react'

export default function ConclavePage() {
  const [hoveredSide, setHoveredSide] = useState<'light' | 'shadow' | null>(null)

  return (
    <main className="relative h-screen flex flex-col overflow-hidden bg-transparent">
      <Navigation />
      
      <div className="flex-1 flex relative z-10 overflow-hidden pt-24">
        
        {/* L'Alliance de la Lumière (Le Bien) */}
        <section 
          onMouseEnter={() => setHoveredSide('light')}
          onMouseLeave={() => setHoveredSide(null)}
          className={`relative transition-all duration-700 ease-in-out flex-1 flex flex-col items-center justify-center p-12 overflow-hidden border-r border-gold/10 ${
            hoveredSide === 'shadow' ? 'opacity-30 blur-sm scale-95' : 'opacity-100'
          }`}
        >
          {/* Background FX Light */}
          <div className="absolute inset-0 bg-gradient-to-tr from-gold/5 via-transparent to-white/5 pointer-events-none" />
          <motion.div 
            animate={{ 
              opacity: hoveredSide === 'light' ? 0.2 : 0.05,
              scale: hoveredSide === 'light' ? 1.2 : 1
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/10 blur-[120px] rounded-full pointer-events-none" 
          />

          <div className="relative z-20 text-center max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col items-center"
            >
              <Sun className="w-16 h-16 text-gold mb-8 text-glow-gold animate-pulse" />
              <div className="flex items-center gap-4 mb-4">
                <div className="h-[1px] w-12 bg-gold/30" />
                <span className="text-gold text-[10px] tracking-[1.2em] uppercase font-bold text-glow-gold">Souveraineté Divine</span>
                <div className="h-[1px] w-12 bg-gold/30" />
              </div>
              <h1 className="text-6xl font-headline text-white uppercase tracking-tighter mb-8 text-glow-gold">
                L'Alliance de <br /> <span className="text-gold italic font-light">la Lumière</span>
              </h1>
              <p className="text-silver/50 italic text-lg leading-relaxed mb-12">
                "Ceux qui marchent dans l'éther pur, guidés par l'équilibre et le serment ancestral de protection d'Asgarm."
              </p>

              <div className="grid grid-cols-2 gap-4 w-full">
                {[
                  { title: "Gardiens du Trône", icon: Crown, desc: "Souverains et Protecteurs" },
                  { title: "Érudits Stellaires", icon: Sparkles, desc: "Maîtres de la Magie Pure" }
                ].map((role, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    className="p-6 bg-gold/5 border border-gold/10 backdrop-blur-xl group cursor-pointer"
                  >
                    <role.icon className="w-5 h-5 text-gold/40 group-hover:text-gold mb-4 transition-colors" />
                    <h3 className="text-xs font-bold text-white uppercase tracking-widest mb-1">{role.title}</h3>
                    <p className="text-[10px] text-silver/40 italic">{role.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Le Conclave des Ombres (Le Mal) */}
        <section 
          onMouseEnter={() => setHoveredSide('shadow')}
          onMouseLeave={() => setHoveredSide(null)}
          className={`relative transition-all duration-700 ease-in-out flex-1 flex flex-col items-center justify-center p-12 overflow-hidden ${
            hoveredSide === 'light' ? 'opacity-30 blur-sm scale-95' : 'opacity-100'
          }`}
        >
          {/* Background FX Shadow */}
          <div className="absolute inset-0 bg-gradient-to-bl from-indigo-950/20 via-transparent to-purple-950/10 pointer-events-none" />
          <motion.div 
            animate={{ 
              opacity: hoveredSide === 'shadow' ? 0.3 : 0.05,
              scale: hoveredSide === 'shadow' ? 1.2 : 1
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none" 
          />

          <div className="relative z-20 text-center max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col items-center"
            >
              <Moon className="w-16 h-16 text-indigo-400 mb-8 shadow-[0_0_30px_rgba(129,140,248,0.3)]" />
              <div className="flex items-center gap-4 mb-4">
                <div className="h-[1px] w-12 bg-indigo-500/30" />
                <span className="text-indigo-400 text-[10px] tracking-[1.2em] uppercase font-bold">Puissance Occulte</span>
                <div className="h-[1px] w-12 bg-indigo-500/30" />
              </div>
              <h1 className="text-6xl font-headline text-white uppercase tracking-tighter mb-8 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                Le Conclave <br /> <span className="text-indigo-400 italic font-light">des Ombres</span>
              </h1>
              <p className="text-silver/50 italic text-lg leading-relaxed mb-12">
                "La main invisible d'Asgarm. Ceux qui manipulent les arcanes interdits pour la domination et la survie absolue."
              </p>

              <div className="grid grid-cols-2 gap-4 w-full">
                {[
                  { title: "Lames Silencieuses", icon: Sword, desc: "Exécuteurs d'Élite" },
                  { title: "Maîtres du Vide", icon: Flame, desc: "Sorcier de Magie Noire" }
                ].map((role, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    className="p-6 bg-indigo-950/20 border border-indigo-500/10 backdrop-blur-xl group cursor-pointer"
                  >
                    <role.icon className="w-5 h-5 text-indigo-400/40 group-hover:text-indigo-400 mb-4 transition-colors" />
                    <h3 className="text-xs font-bold text-white uppercase tracking-widest mb-1">{role.title}</h3>
                    <p className="text-[10px] text-silver/40 italic">{role.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

      </div>

      <footer className="h-12 border-t border-gold/10 flex items-center justify-center bg-black/60 relative z-20">
        <span className="text-[9px] text-gold tracking-[0.8em] uppercase font-bold">
          CONCLAVE SUPRÊME — ÉQUILIBRE D'ASGARM V3.1
        </span>
      </footer>

      <style jsx global>{`
        .text-glow-gold {
          text-shadow: 0 0 20px rgba(212, 175, 55, 0.4);
        }
      `}</style>
    </main>
  )
}
