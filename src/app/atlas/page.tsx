
"use client"

import React, { useState } from 'react'
import { Navigation } from '@/components/Navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Compass, Users, Shield, ChevronRight, MapPin, Search } from 'lucide-react'

const atlasData = {
  royaumes: [
    {
      name: "Le Royaume d'Asgarm",
      focus: "LUMIÈRE & JUSTICE",
      desc: "Bastion de l'ordre arcanique protégé par le Conclave. Ici, l'éther est pur et la loi des Rois garantit l'équilibre universel.",
      color: "from-sky-500/20 to-transparent",
      border: "border-sky-500/20",
      glow: "text-glow-blue",
      shine: "shine-text-blue"
    },
    {
      name: "Le Royaume du Mal",
      focus: "OMBRE & SOUVERAINETÉ",
      desc: "Érigé par les deux Seigneurs du Mal. Un territoire de liberté absolue où la magie noire et du sang sont les piliers de la puissance.",
      color: "from-red-600/20 to-transparent",
      border: "border-red-600/20",
      glow: "text-glow-red",
      shine: "shine-text-red"
    }
  ],
  races: [
    {
      name: "Elfes de Lune",
      trait: "MAGIE ANCESTRALE",
      desc: "Gardiens des cycles stellaires, ils possèdent une affinité naturelle pour les flux d'éther les plus complexes."
    },
    {
      name: "Humains",
      trait: "ADAPTABILITÉ",
      desc: "Bâtisseurs et mages de guerre, ils ont su dompter l'éther pour ériger les cités les plus majestueuses d'Asgarm."
    },
    {
      name: "Nains des Forges",
      trait: "RUNES & MÉTAUX",
      desc: "Maîtres de l'armurerie magique, ils allient la force brute des montagnes aux énergies runiques sacrées."
    },
    {
      name: "Vampires de Valerius",
      trait: "SANG & GUÉRISON",
      desc: "Anciens prédateurs devenus les plus grands guérisseurs, ils manipulent l'essence vitale pour préserver l'existence."
    }
  ],
  clans: [
    {
      name: "Forces Tribales",
      trait: "SAUVAGE",
      desc: "Indépendants et farouches, ils protègent les zones reculées en suivant les lois immuables de la nature."
    },
    {
      name: "Alliances Secrètes",
      trait: "CLANDESTIN",
      desc: "Des groupements d'élite opérant dans l'ombre du trône pour protéger les artefacts les plus dangereux."
    }
  ]
}

export default function AtlasPage() {
  const [activeCategory, setActiveCategory] = useState<'royaumes' | 'races' | 'clans'>('royaumes')

  return (
    <main className="relative min-h-screen flex flex-col bg-transparent overflow-hidden">
      <Navigation />
      
      {/* Cinematic Background Overlays */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,_rgba(212,175,55,0.05)_0%,_transparent_50%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_100%_100%,_rgba(14,165,233,0.03)_0%,_transparent_40%)]" />
      </div>

      <div className="relative z-10 flex-1 flex flex-col pt-36 px-8 md:px-12 pb-12 max-w-[1600px] mx-auto w-full">
        
        {/* Cinematic Header */}
        <header className="mb-24 relative">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="flex flex-col items-start"
          >
            <div className="flex items-center gap-6 mb-6">
              <div className="h-[1px] w-20 bg-gradient-to-r from-gold/60 to-transparent" />
              <span className="text-gold text-[11px] tracking-[1.2em] uppercase font-bold text-glow-gold">Chroniques Universelles</span>
            </div>
            
            <h1 className="text-8xl md:text-9xl font-headline text-white uppercase tracking-tighter leading-none mb-10">
              Atlas <br /> 
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 1.5 }}
                className="shine-text italic font-light ml-20 md:ml-40 block"
              >
                Impérial
              </motion.span>
            </h1>

            <div className="max-w-3xl border-l-2 border-gold/10 pl-10 ml-4 py-2">
              <p className="text-silver/40 text-2xl italic font-light leading-relaxed">
                "Voyagez à travers les fondations de notre monde. Des sommets de la justice aux abysses de l'ombre, chaque entité dessine le visage de l'éternité."
              </p>
            </div>
          </motion.div>

          {/* Floating Element for Atmosphere */}
          <motion.div 
            animate={{ 
              y: [0, -20, 0],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 right-0 w-96 h-96 bg-gold/5 blur-[120px] rounded-full"
          />
        </header>

        {/* Cinematic Navigation Tabs */}
        <div className="flex flex-wrap gap-2 mb-20 border-b border-white/5 pb-10">
          {[
            { id: 'royaumes', label: 'Les Royaumes', icon: Compass },
            { id: 'races', label: 'Les Races', icon: Users },
            { id: 'clans', label: 'Les Clans', icon: Shield }
          ].map((cat, idx) => (
            <motion.button
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + idx * 0.1 }}
              onClick={() => setActiveCategory(cat.id as any)}
              className={`group flex items-center gap-6 px-12 py-6 transition-all duration-1000 relative overflow-hidden ${
                activeCategory === cat.id 
                ? 'text-white' 
                : 'text-silver/30 hover:text-silver/60'
              }`}
            >
              {activeCategory === cat.id && (
                <motion.div 
                  layoutId="tab-bg"
                  className="absolute inset-0 bg-white/[0.03] border-t border-gold/20"
                />
              )}
              <cat.icon className={`w-4 h-4 transition-colors duration-700 ${activeCategory === cat.id ? 'text-gold' : 'text-current'}`} />
              <span className="text-[10px] font-bold uppercase tracking-[0.6em] relative z-10">{cat.label}</span>
            </motion.button>
          ))}
        </div>

        {/* Cinematic Content Zone */}
        <div className="flex-1 relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, scale: 0.99, filter: 'blur(10px)' }}
              animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              exit={{ opacity: 0, scale: 1.01, filter: 'blur(10px)' }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-10"
            >
              {activeCategory === 'royaumes' && atlasData.royaumes.map((r, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className={`group relative p-16 bg-black/40 border ${r.border} overflow-hidden transition-all duration-1000 hover:bg-black/60 shadow-2xl`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${r.color} opacity-0 group-hover:opacity-100 transition-opacity duration-1000`} />
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-10">
                      <MapPin className="w-3 h-3 text-gold/40" />
                      <span className="text-[10px] text-gold/60 font-bold uppercase tracking-[0.5em]">{r.focus}</span>
                    </div>

                    <h3 className={`text-5xl font-headline text-white uppercase mb-10 ${r.shine} group-hover:tracking-wider transition-all duration-1000 leading-none`}>
                      {r.name}
                    </h3>
                    
                    <div className="h-[1px] w-full bg-white/5 mb-10" />
                    
                    <p className="text-silver/40 text-xl leading-relaxed italic font-light">
                      "{r.desc}"
                    </p>

                    <div className="mt-12 flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                      <div className="h-[1px] w-12 bg-gold/20" />
                      <span className="text-[8px] text-gold/40 uppercase tracking-[0.4em] font-bold">Infiltration autorisée</span>
                    </div>
                  </div>
                </motion.div>
              ))}

              {activeCategory === 'races' && atlasData.races.map((r, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.05 }}
                  className="group p-12 bg-white/[0.01] border border-white/5 hover:border-gold/30 hover:bg-white/[0.03] transition-all duration-1000 flex flex-col relative"
                >
                  <div className="flex items-center justify-between mb-10">
                    <span className="text-[10px] text-gold/60 font-bold uppercase tracking-[0.5em]">{r.trait}</span>
                    <div className="w-10 h-[1px] bg-gold/10 group-hover:w-20 transition-all duration-1000" />
                  </div>
                  
                  <h3 className="text-4xl font-headline text-white uppercase mb-8 group-hover:text-glow-gold transition-all duration-700">{r.name}</h3>
                  
                  <p className="text-silver/40 text-lg leading-relaxed italic font-light border-l border-gold/10 pl-10 py-2">
                    {r.desc}
                  </p>
                </motion.div>
              ))}

              {activeCategory === 'clans' && atlasData.clans.map((c, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="group p-16 bg-black/40 border border-white/5 hover:border-gold/40 transition-all duration-1000 relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                  
                  <div className="flex items-center gap-6 mb-10">
                    <div className="p-4 rounded-full border border-gold/10 bg-gold/5">
                      <Shield className="w-5 h-5 text-gold/40 group-hover:text-gold transition-colors duration-700" />
                    </div>
                    <span className="text-[10px] text-gold/60 font-bold uppercase tracking-[0.5em]">{c.trait}</span>
                  </div>

                  <h3 className="text-5xl font-headline text-white uppercase mb-10 tracking-tight group-hover:tracking-normal transition-all duration-1000">{c.name}</h3>
                  
                  <p className="text-silver/40 text-xl leading-relaxed italic font-light border-l border-gold/5 pl-10">
                    {c.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Global Footer Decoration */}
        <footer className="mt-32 h-32 flex flex-col items-center justify-center relative z-20">
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 100 }}
            viewport={{ once: true }}
            className="h-[1px] bg-gold/20 mb-10" 
          />
          <span className="shine-text text-[10px] tracking-[1em] uppercase font-bold text-center">
            CONCLAVE SUPRÊME — ÉQUILIBRE D'ASGARM V3.1
          </span>
        </footer>
      </div>

      <style jsx global>{`
        .text-glow-blue {
          text-shadow: 0 0 20px rgba(14, 165, 233, 0.4);
        }
        .text-glow-red {
          text-shadow: 0 0 20px rgba(220, 38, 38, 0.4);
        }
        .text-glow-gold {
          text-shadow: 0 0 20px rgba(212, 175, 55, 0.4);
        }
      `}</style>
    </main>
  )
}
