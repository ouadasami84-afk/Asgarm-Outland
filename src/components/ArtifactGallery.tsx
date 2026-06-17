"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Gem, Shield, Flame, Wind, Star, Eye } from 'lucide-react'

const artifacts = [
  {
    name: "Sceptre de Cristal",
    type: "Catalyseur Légendaire",
    icon: Gem,
    desc: "Un noyau de saphir pur capable de canaliser l'énergie solaire brute d'Asgarm.",
    rarity: "Divin",
    color: "text-blue-400"
  },
  {
    name: "Plastron de Forge",
    type: "Garde Ancien",
    icon: Shield,
    desc: "Infusé de feu de dragon pour résister aux maléfices les plus puissants du serveur.",
    rarity: "Épique",
    color: "text-orange-400"
  },
  {
    name: "Grimoire Eternel",
    type: "Archive Mystique",
    icon: Star,
    desc: "Un livre qui réécrit ses sorts selon les cycles lunaires d'Asgarm.",
    rarity: "Légendaire",
    color: "text-gold"
  },
  {
    name: "Embre de Phoenix",
    type: "Essence Primale",
    icon: Flame,
    desc: "Une étincelle contenue de vie éternelle issue du premier grand brasier d'Outland.",
    rarity: "Mythique",
    color: "text-red-400"
  }
]

export const ArtifactGallery: React.FC = () => {
  return (
    <section id="artifacts" className="py-48 px-6 bg-[#03040a] relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-transparent to-[#03040a] opacity-50" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-16 bg-gold/40" />
              <span className="text-gold/60 text-[10px] tracking-[0.6em] uppercase font-bold">Trésors Royaux</span>
            </div>
            <h2 className="font-headline text-7xl mb-8 text-glow-gold">Reliques de Pouvoir</h2>
            <p className="text-silver/50 font-body text-xl leading-relaxed max-w-2xl italic">
              Découvrez les artefacts forgés par les anciens maîtres d'Arcanum. 
              Chaque objet porte le poids de l'histoire et l'éclat de la magie pure.
            </p>
          </div>
          <div className="text-gold font-body tracking-[0.5em] text-xs border-b border-gold/30 pb-4 flex items-center gap-4 cursor-pointer hover:text-white hover:border-gold transition-all duration-500 group">
            CONSULTER L'ARCHIVE <Wind className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {artifacts.map((artifact, i) => (
            <motion.div
              key={artifact.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 1 }}
              whileHover={{ y: -15 }}
              className="group relative h-[550px] overflow-hidden rounded-[2px] glass-gold p-10 flex flex-col items-center text-center justify-between border-gold/10 hover:border-gold/40 transition-all duration-700 shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 group-hover:via-gold/[0.03] transition-all duration-1000" />
              
              <div className="relative z-10 w-28 h-28 rounded-full bg-black/60 border border-gold/20 flex items-center justify-center mb-10 group-hover:scale-110 group-hover:border-gold/60 transition-all duration-700 shadow-[0_0_30px_rgba(0,0,0,0.4)]">
                <artifact.icon className={`w-12 h-12 ${artifact.color} filter drop-shadow-[0_0_15px_currentColor]`} />
              </div>

              <div className="relative z-10">
                <span className="text-[11px] tracking-[0.5em] uppercase text-gold/60 mb-4 block font-bold">{artifact.rarity}</span>
                <h3 className="font-headline text-3xl mb-4 text-white group-hover:text-gold transition-colors">{artifact.name}</h3>
                <p className="text-gold/40 text-[10px] tracking-[0.4em] uppercase mb-8">{artifact.type}</p>
                <p className="text-silver/60 text-sm leading-relaxed font-light italic">"{artifact.desc}"</p>
              </div>

              <div className="relative z-10 mt-12 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                <button className="px-10 py-3 border border-gold/30 bg-black/40 rounded-none text-[10px] tracking-[0.5em] uppercase hover:bg-gold hover:text-black transition-all flex items-center gap-3">
                  <Eye className="w-4 h-4" />
                  Inspecter
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}