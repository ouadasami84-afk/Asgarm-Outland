
"use client"

import React from 'react'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { motion } from 'framer-motion'
import { Trophy, Zap, ScrollText, ShieldCheck } from 'lucide-react'

export default function MaitrisePage() {
  return (
    <main className="relative min-h-screen bg-transparent">
      <Navigation />
      
      <div className="relative z-10 pt-48 pb-32 px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-24">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-[1px] w-12 bg-gold/20" />
              <span className="text-gold text-[9px] tracking-[1.2em] uppercase font-bold text-glow-gold">Registre de Souveraineté</span>
              <div className="h-[1px] w-12 bg-gold/20" />
            </div>
            <h1 className="text-6xl font-headline mb-8 text-glow-gold uppercase tracking-tighter">Votre Maîtrise</h1>
            <p className="text-silver/40 max-w-xl mx-auto italic text-lg leading-relaxed">
              "Suivez votre progression et vos exploits au sein d'Asgarm. Chaque acte résonne dans l'éther."
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -20 }} 
              animate={{ opacity: 1, x: 0 }} 
              className="lg:col-span-1 p-12 bg-indigo-950/10 backdrop-blur-xl border border-gold/10"
            >
              <h2 className="text-2xl font-headline mb-10 text-white">Registre Global</h2>
              <div className="space-y-12">
                <div className="flex justify-between items-center">
                  <span className="text-silver/40 text-[10px] uppercase tracking-[0.4em]">Rang Actuel</span>
                  <span className="text-gold font-bold text-3xl text-glow-gold">#421</span>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between text-[10px] text-silver/40 uppercase tracking-[0.4em]">
                    <span>Proficience Arcane</span>
                    <span className="text-gold">88%</span>
                  </div>
                  <div className="h-[2px] bg-white/5 w-full overflow-hidden">
                    <motion.div initial={{ width: 0 }} animate={{ width: '88%' }} transition={{ duration: 2 }} className="h-full bg-gold shadow-[0_0_15px_rgba(212,175,55,0.5)]" />
                  </div>
                </div>
                <button className="w-full py-5 bg-gold/10 border border-gold/20 text-gold text-[10px] font-bold uppercase tracking-[0.4em] hover:bg-gold hover:text-night transition-all duration-500">
                  Récupérer Récompenses
                </button>
              </div>
            </motion.div>

            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: "Érudit Ancien", icon: ScrollText, status: "Accompli", xp: "+5000 XP" },
                { title: "Maître des Runes", icon: Zap, status: "En Cours", xp: "4/5" },
                { title: "Marcheur du Vide", icon: Trophy, status: "Verrouillé", xp: "Lvl 40" },
                { title: "Gardien d'Asgarm", icon: ShieldCheck, status: "Évent", xp: "Édition Limitée" }
              ].map((ach, i) => (
                <motion.div
                  key={ach.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="p-10 bg-indigo-950/10 backdrop-blur-xl border border-white/5 flex flex-col items-center text-center group hover:border-gold/20 transition-all duration-500"
                >
                  <ach.icon className="w-8 h-8 text-gold/30 mb-8 group-hover:text-gold group-hover:scale-110 transition-all duration-500" />
                  <h4 className="text-xl font-headline mb-4 text-white group-hover:text-glow-gold">{ach.title}</h4>
                  <span className="text-[10px] tracking-[0.4em] uppercase text-gold/40 mb-4 font-bold">{ach.status}</span>
                  <div className="text-silver/20 font-bold text-xs tracking-[0.2em]">{ach.xp}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  )
}
