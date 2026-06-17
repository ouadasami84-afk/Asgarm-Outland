
"use client"

import React from 'react'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { motion } from 'framer-motion'
import { Gem, Shield, Star, Flame, Eye } from 'lucide-react'

const artifacts = [
  { name: "Sceptre Cristal", icon: Gem, rarity: "Divin", desc: "Canalise l'énergie solaire brute d'Asgarm." },
  { name: "Garde Ancien", icon: Shield, rarity: "Épique", desc: "Infusé de feu de dragon pour résister aux maléfices." },
  { name: "Grimoire Lunaire", icon: Star, rarity: "Légendaire", desc: "Réécrit ses sorts selon les cycles de l'éther." },
  { name: "Essence Phoenix", icon: Flame, rarity: "Mythique", desc: "Une étincelle de vie éternelle d'Outland." }
]

export default function ReliquesPage() {
  return (
    <main className="relative min-h-screen bg-transparent">
      <Navigation />
      
      <div className="relative z-10 pt-48 pb-32 px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-32">
            <h1 className="text-6xl font-headline mb-8 text-glow-gold uppercase tracking-tighter">Trésors Royaux</h1>
            <p className="text-silver/40 max-w-xl mx-auto italic text-lg">Reliques forgées par les anciens maîtres de la magie d'Asgarm.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {artifacts.map((artifact, i) => (
              <motion.div
                key={artifact.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="glass-night p-12 text-center group hover:scale-[1.02] transition-all"
              >
                <div className="w-24 h-24 rounded-full border border-gold/10 flex items-center justify-center mx-auto mb-10 bg-night-deep/40 group-hover:border-gold/30 transition-all">
                  <artifact.icon className="w-10 h-10 text-gold/60" />
                </div>
                <span className="text-[10px] tracking-[0.4em] uppercase text-gold/40 mb-3 block font-bold">{artifact.rarity}</span>
                <h3 className="font-headline text-2xl mb-6 text-white">{artifact.name}</h3>
                <p className="text-silver/40 text-sm italic mb-10 leading-relaxed">"{artifact.desc}"</p>
                <button className="w-full py-4 border border-gold/20 text-[10px] tracking-[0.4em] uppercase hover:bg-gold hover:text-night transition-all flex items-center justify-center gap-2 font-bold">
                  <Eye className="w-4 h-4" /> Inspecter
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  )
}
