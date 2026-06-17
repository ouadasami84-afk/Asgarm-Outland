"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Gem, Shield, Flame, Wind, Star } from 'lucide-react'

const artifacts = [
  {
    name: "Crystalline Scepter",
    type: "Legendary Catalyst",
    icon: Gem,
    desc: "A pure sapphire core capable of channeling raw solar energy.",
    rarity: "Divine",
    color: "text-blue-400"
  },
  {
    name: "Sunforge Plate",
    type: "Ancient Guard",
    icon: Shield,
    desc: "Infused with dragon fire to withstand even the strongest hexes.",
    rarity: "Epic",
    color: "text-orange-400"
  },
  {
    name: "Everlight Tome",
    type: "Mystic Archive",
    icon: Star,
    desc: "A book that rewrites its spells based on the phase of the moon.",
    rarity: "Legendary",
    color: "text-gold"
  },
  {
    name: "Phoenix Ember",
    type: "Primal Essence",
    icon: Flame,
    desc: "A contained spark of eternal life from the first great fire.",
    rarity: "Mythical",
    color: "text-red-400"
  }
]

export const ArtifactGallery: React.FC = () => {
  return (
    <section id="artifacts" className="py-32 px-6 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="font-headline text-5xl mb-6">Enchanted Artifacts</h2>
            <p className="text-silver/60 font-body">
              Discover relics of immense power forged by the ancient masters of Arcanum. 
              Each item carries the weight of history and the spark of raw magic.
            </p>
          </div>
          <div className="text-gold font-body tracking-widest text-sm border-b border-gold/30 pb-2 flex items-center gap-2 cursor-pointer hover:text-white transition-colors">
            VIEW ALL RELICS <Wind className="w-4 h-4" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {artifacts.map((artifact, i) => (
            <motion.div
              key={artifact.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative h-[450px] overflow-hidden rounded-2xl glass p-8 flex flex-col items-center text-center justify-between border-white/5 hover:border-gold/30 transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-obsidian/60 group-hover:via-gold/5 transition-all" />
              
              <div className="relative z-10 w-24 h-24 rounded-full bg-obsidian border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-gold/50 transition-all shadow-xl">
                <artifact.icon className={`w-10 h-10 ${artifact.color}`} />
              </div>

              <div className="relative z-10">
                <span className="text-[10px] tracking-[0.3em] uppercase text-gold/60 mb-2 block">{artifact.rarity}</span>
                <h3 className="font-headline text-2xl mb-2 text-white">{artifact.name}</h3>
                <p className="text-silver/40 text-xs tracking-widest uppercase mb-4">{artifact.type}</p>
                <p className="text-silver/70 text-sm leading-relaxed">{artifact.desc}</p>
              </div>

              <div className="relative z-10 mt-8 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="px-6 py-2 border border-white/10 rounded-full text-[10px] tracking-widest uppercase hover:bg-white hover:text-black transition-all">
                  Inspect Item
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
