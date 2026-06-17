
"use client"

import React, { useState } from 'react'
import { Navigation } from '@/components/Navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Map as MapIcon, Users, Shield, ChevronRight, Compass } from 'lucide-react'

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
      
      <div className="relative z-10 flex-1 flex flex-col pt-32 px-12 pb-12 max-w-7xl mx-auto w-full">
        
        {/* Hero Section Atlas */}
        <header className="mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="h-[1px] w-12 bg-gold/40" />
              <span className="text-gold text-[10px] tracking-[1.2em] uppercase font-bold text-glow-gold">Chroniques Universelles</span>
            </div>
            <h1 className="text-8xl font-headline text-white uppercase tracking-tighter leading-none mb-8">
              Atlas <br /> <span className="shine-text italic font-light">Impérial</span>
            </h1>
            <p className="text-silver/50 text-xl italic font-light max-w-3xl leading-relaxed border-l border-gold/20 pl-8">
              "Voyagez à travers les fondations de notre monde. Des sommets de la justice aux abysses de l'ombre, chaque entité dessine le visage de l'éternité."
            </p>
          </motion.div>
        </header>

        {/* Navigation Inter-Atlas */}
        <div className="flex flex-wrap gap-4 mb-16 border-b border-white/5 pb-8">
          {[
            { id: 'royaumes', label: 'Les Royaumes', icon: Compass },
            { id: 'races', label: 'Les Races', icon: Users },
            { id: 'clans', label: 'Les Clans', icon: Shield }
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as any)}
              className={`flex items-center gap-4 px-10 py-5 transition-all duration-700 border ${
                activeCategory === cat.id 
                ? 'bg-gold/10 border-gold/40 text-white' 
                : 'bg-white/[0.02] border-white/5 text-silver/40 hover:border-gold/20'
              }`}
            >
              <cat.icon className={`w-4 h-4 ${activeCategory === cat.id ? 'text-gold' : ''}`} />
              <span className="text-[10px] font-bold uppercase tracking-[0.5em]">{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Zone de Contenu Dynamique */}
        <div className="flex-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, scale: 0.98, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 1.02, y: -10 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            >
              {activeCategory === 'royaumes' && atlasData.royaumes.map((r, i) => (
                <div key={i} className={`group relative p-12 bg-black/40 border ${r.border} overflow-hidden transition-all duration-700 hover:bg-black/60`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${r.color} opacity-0 group-hover:opacity-100 transition-opacity duration-1000`} />
                  <span className="text-[9px] text-gold/60 font-bold uppercase tracking-[0.4em] mb-6 block">{r.focus}</span>
                  <h3 className={`text-4xl font-headline text-white uppercase mb-8 ${r.glow} group-hover:tracking-wider transition-all`}>
                    {r.name}
                  </h3>
                  <div className="h-[1px] w-full bg-white/5 mb-8" />
                  <p className="text-silver/40 text-lg leading-relaxed italic font-light relative z-10">
                    "{r.desc}"
                  </p>
                </div>
              ))}

              {activeCategory === 'races' && atlasData.races.map((r, i) => (
                <div key={i} className="group p-10 bg-white/[0.01] border border-white/5 hover:border-gold/30 hover:bg-white/[0.03] transition-all duration-700 flex flex-col">
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-[9px] text-gold/60 font-bold uppercase tracking-[0.4em]">{r.trait}</span>
                    <ChevronRight className="w-4 h-4 text-gold/20 group-hover:text-gold transition-all" />
                  </div>
                  <h3 className="text-3xl font-headline text-white uppercase mb-6 group-hover:text-glow-gold transition-all">{r.name}</h3>
                  <p className="text-silver/40 text-base leading-relaxed italic font-light border-l border-gold/10 pl-8">
                    {r.desc}
                  </p>
                </div>
              ))}

              {activeCategory === 'clans' && atlasData.clans.map((c, i) => (
                <div key={i} className="group p-12 bg-black/40 border border-white/5 hover:border-gold/40 transition-all duration-700 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="flex items-center gap-4 mb-8">
                    <Shield className="w-5 h-5 text-gold/30 group-hover:text-gold transition-colors" />
                    <span className="text-[9px] text-gold/60 font-bold uppercase tracking-[0.4em]">{c.trait}</span>
                  </div>
                  <h3 className="text-4xl font-headline text-white uppercase mb-6">{c.name}</h3>
                  <p className="text-silver/40 text-lg leading-relaxed italic font-light">
                    {c.desc}
                  </p>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <footer className="mt-24 h-24 flex flex-col items-center justify-center relative z-20">
          <div className="h-[1px] w-24 bg-gold/20 mb-6" />
          <span className="shine-text text-[9px] tracking-[0.8em] uppercase font-bold">
            CONCLAVE SUPRÊME — ÉQUILIBRE D'ASGARM V3.1
          </span>
        </footer>
      </div>

      <style jsx global>{`
        .text-glow-blue {
          text-shadow: 0 0 15px rgba(14, 165, 233, 0.4);
        }
        .text-glow-red {
          text-shadow: 0 0 15px rgba(220, 38, 38, 0.4);
        }
        .text-glow-gold {
          text-shadow: 0 0 15px rgba(212, 175, 55, 0.4);
        }
      `}</style>
    </main>
  )
}
