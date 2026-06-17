
"use client"

import React, { useState } from 'react'
import { Navigation } from '@/components/Navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Compass, Shield, Users, Map as MapIcon, ChevronRight } from 'lucide-react'

const atlasData = {
  royaumes: [
    {
      name: "Le Royaume d'Asgarm",
      focus: "LUMIÈRE & JUSTICE",
      desc: "Fondé par les Rois des Royaumes après la Grande Guerre, Asgarm est le bastion de l'ordre arcanique. Ses cités sont protégées par le Conclave des Arcanes et éduquées par l'Excellence d'Ascarnia.",
      color: "from-sky-500/20 to-transparent",
      borderColor: "border-sky-500/20"
    },
    {
      name: "Le Royaume du Mal",
      focus: "OMBRE & SOUVERAINETÉ",
      desc: "Érigé par les deux Seigneurs du Mal, ce royaume refuse les limites imposées par le Conclave. C'est ici que bat le cœur d'Obscura, où la magie noire et du sang sont enseignées librement aux élus.",
      color: "from-red-600/20 to-transparent",
      borderColor: "border-red-600/20"
    }
  ],
  races: [
    {
      name: "Elfes & Elfes de Lune",
      trait: "MAGIE ANCESTRALE",
      desc: "Les premiers gardiens de l'éther. Leur lien avec les astres leur confère une maîtrise inégalée de la magie obscure et arcanique."
    },
    {
      name: "Humains",
      trait: "ADAPTABILITÉ",
      desc: "Bâtisseurs et mages de guerre, ils ont appris à canaliser l'éther après le sacrifice de Melfetys pour protéger leur civilisation."
    },
    {
      name: "Nains",
      trait: "FORGE & RUNES",
      desc: "Maîtres de l'armurerie magique. Ils allient la robustesse des métaux aux énergies runiques pour créer des catalyseurs de puissance."
    },
    {
      name: "Vampires",
      trait: "SANG & GUÉRISON",
      desc: "Autrefois prédateurs, ils ont transcendé leur nature sous l'égide de Lord Valerius pour devenir les plus grands guérisseurs du royaume."
    }
  ],
  clans: [
    {
      name: "Forces Tribales",
      trait: "SAUVAGE",
      desc: "Des structures indépendantes régies par la loi de la nature, alliées à la couronne pour la préservation des cycles anciens."
    },
    {
      name: "Alliances Secrètes",
      trait: "CLANDESTIN",
      desc: "Des groupements d'élite opérant dans les zones reculées, protégeant des artefacts dont l'existence même est un secret d'État."
    }
  ]
}

export default function AtlasPage() {
  const [activeCategory, setActiveCategory] = useState<'royaumes' | 'races' | 'clans'>('royaumes')

  return (
    <main className="relative min-h-screen flex flex-col bg-transparent overflow-hidden">
      <Navigation />
      
      <div className="relative z-10 flex-1 flex flex-col pt-32 px-12 pb-12 max-w-7xl mx-auto w-full">
        
        <header className="mb-20">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-[1px] w-12 bg-gold/40" />
            <span className="text-gold text-[10px] tracking-[1.2em] uppercase font-bold text-glow-gold">Archives Universelles d'Asgarm</span>
          </div>
          <h1 className="text-8xl font-headline text-white uppercase tracking-tighter leading-none mb-8">
            Atlas <br /> <span className="text-gold italic font-light text-glow-gold">Impérial</span>
          </h1>
          <p className="text-silver/50 text-xl italic font-light max-w-3xl leading-relaxed border-l border-gold/20 pl-8">
            "Explorez les fondations du monde. Des sommets d'Asgarm aux profondeurs de l'ombre, chaque race et chaque clan forge le destin de l'éternité."
          </p>
        </header>

        {/* Navigation de Catégorie Atlas */}
        <div className="flex gap-4 mb-16 border-b border-gold/10 pb-8">
          {[
            { id: 'royaumes', label: 'Royaumes', icon: MapIcon },
            { id: 'races', label: 'Races', icon: Users },
            { id: 'clans', label: 'Clans', icon: Shield }
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as any)}
              className={`flex items-center gap-3 px-8 py-4 transition-all duration-500 border ${
                activeCategory === cat.id 
                ? 'bg-gold/10 border-gold/40 text-white' 
                : 'bg-transparent border-white/5 text-silver/40 hover:border-gold/20'
              }`}
            >
              <cat.icon className={`w-4 h-4 ${activeCategory === cat.id ? 'text-gold' : ''}`} />
              <span className="text-[10px] font-bold uppercase tracking-[0.4em]">{cat.label}</span>
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {activeCategory === 'royaumes' && atlasData.royaumes.map((r, i) => (
              <div key={i} className={`group p-12 bg-black/40 border ${r.borderColor} hover:bg-black/60 transition-all duration-700 relative overflow-hidden`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${r.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
                <span className="text-[9px] text-gold/60 font-bold uppercase tracking-[0.4em] mb-4 block">{r.focus}</span>
                <h3 className="text-4xl font-headline text-white uppercase mb-8 group-hover:text-glow-gold transition-all">{r.name}</h3>
                <div className="h-[1px] w-full bg-gold/10 mb-8" />
                <p className="text-silver/40 text-lg leading-relaxed italic font-light relative z-10">
                  {r.desc}
                </p>
              </div>
            ))}

            {activeCategory === 'races' && atlasData.races.map((r, i) => (
              <div key={i} className="group p-10 bg-white/[0.02] border border-white/5 hover:border-gold/30 hover:bg-white/[0.05] transition-all duration-700 flex flex-col">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[9px] text-gold/60 font-bold uppercase tracking-[0.4em]">{r.trait}</span>
                  <ChevronRight className="w-4 h-4 text-gold/20 group-hover:text-gold transition-colors" />
                </div>
                <h3 className="text-2xl font-headline text-white uppercase mb-6 group-hover:text-glow-gold transition-all">{r.name}</h3>
                <div className="h-[1px] w-12 bg-gold/20 mb-8 group-hover:w-full transition-all duration-700" />
                <p className="text-silver/40 text-sm leading-relaxed italic font-light">
                  {r.desc}
                </p>
              </div>
            ))}

            {activeCategory === 'clans' && atlasData.clans.map((c, i) => (
              <div key={i} className="group p-10 bg-white/[0.02] border border-white/5 hover:border-gold/30 transition-all duration-700">
                <div className="flex items-center gap-4 mb-6">
                  <Shield className="w-4 h-4 text-gold/40" />
                  <span className="text-[9px] text-gold/60 font-bold uppercase tracking-[0.4em]">{c.trait}</span>
                </div>
                <h3 className="text-3xl font-headline text-white uppercase mb-6">{c.name}</h3>
                <p className="text-silver/40 text-base leading-relaxed italic font-light border-l border-gold/10 pl-8">
                  {c.desc}
                </p>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        <footer className="mt-auto h-24 flex flex-col items-center justify-center relative z-20">
          <div className="h-[1px] w-24 bg-gold/20 mb-6" />
          <span className="shine-text text-[9px] tracking-[0.8em] uppercase font-bold">
            CONCLAVE SUPRÊME — ÉQUILIBRE D'ASGARM V3.1
          </span>
        </footer>
      </div>

      <style jsx global>{`
        .text-glow-gold {
          text-shadow: 0 0 15px rgba(212, 175, 55, 0.4);
        }
      `}</style>
    </main>
  )
}
