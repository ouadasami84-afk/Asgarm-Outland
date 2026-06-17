"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Gem, Shield, Flame, Star, Eye } from 'lucide-react'

const artifacts = [
  {
    name: "Sceptre Cristal",
    type: "Catalyseur",
    icon: Gem,
    desc: "Canalise l'énergie solaire brute d'Asgarm.",
    rarity: "Divin",
    color: "text-blue-400"
  },
  {
    name: "Garde Ancien",
    type: "Défense",
    icon: Shield,
    desc: "Infusé de feu de dragon pour résister aux maléfices.",
    rarity: "Épique",
    color: "text-orange-400"
  },
  {
    name: "Grimoire",
    type: "Archive",
    icon: Star,
    desc: "Réécrit ses sorts selon les cycles lunaires.",
    rarity: "Légendaire",
    color: "text-gold"
  },
  {
    name: "Essence Phoenix",
    type: "Primal",
    icon: Flame,
    desc: "Une étincelle de vie éternelle d'Outland.",
    rarity: "Mythique",
    color: "text-red-400"
  }
]

export const ArtifactGallery: React.FC = () => {
  return (
    <section id="artifacts" className="py-32 px-6 relative bg-[#010208]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-[1px] w-12 bg-gold/20" />
            <span className="text-gold/40 text-[9px] tracking-[0.5em] uppercase font-bold">Reliquaire</span>
            <div className="h-[1px] w-12 bg-gold/20" />
          </div>
          <h2 className="font-headline text-5xl text-white mb-6 tracking-tight">Trésors Royaux</h2>
          <p className="text-silver/40 text-sm italic max-w-lg mx-auto">Reliques forgées par les anciens maîtres d'Arcanum.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {artifacts.map((artifact, i) => (
            <motion.div
              key={artifact.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="group relative p-10 glass-gold border-gold/10 hover:border-gold/30 transition-all duration-500 text-center"
            >
              <div className="w-20 h-20 rounded-full border border-gold/10 flex items-center justify-center mx-auto mb-8 bg-black/40 group-hover:scale-110 transition-transform">
                <artifact.icon className={`w-8 h-8 ${artifact.color} opacity-70`} />
              </div>
              <span className="text-[8px] tracking-[0.4em] uppercase text-gold/30 mb-2 block font-bold">{artifact.rarity}</span>
              <h3 className="font-headline text-xl mb-4 text-white">{artifact.name}</h3>
              <p className="text-silver/40 text-xs leading-relaxed italic mb-8">"{artifact.desc}"</p>
              <button className="w-full py-3 border border-gold/10 text-[8px] tracking-[0.3em] uppercase hover:bg-gold hover:text-black transition-all flex items-center justify-center gap-2">
                <Eye className="w-3 h-3" />
                Inspecter
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
