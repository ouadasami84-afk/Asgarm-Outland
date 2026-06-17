"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Trophy, ShieldCheck, Zap, ScrollText } from 'lucide-react'

export const MasteryLedger: React.FC = () => {
  return (
    <section id="mastery" className="py-32 px-6 bg-[#010208] relative">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          <div className="lg:col-span-1">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-[1px] w-8 bg-gold/20" />
              <h2 className="font-headline text-3xl text-white">Registre</h2>
            </div>
            
            <div className="glass-gold p-8 border-gold/10 space-y-8">
              <div className="flex justify-between items-center">
                <span className="text-silver/40 text-[9px] uppercase tracking-widest">Rang Global</span>
                <span className="text-gold font-bold text-lg">#421</span>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between text-[8px] text-silver/40 uppercase tracking-widest">
                  <span>Proficience Arcane</span>
                  <span className="text-gold">88%</span>
                </div>
                <div className="h-[2px] bg-white/5 w-full">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: '88%' }}
                    className="h-full bg-gold/60" 
                  />
                </div>
              </div>

              <button className="w-full py-4 border border-gold/20 text-gold/60 text-[8px] font-bold uppercase tracking-widest hover:bg-gold hover:text-black transition-all">
                Récompense Hebdomadaire
              </button>
            </div>
          </div>

          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: "Érudit Ancien", icon: ScrollText, status: "Terminé", xp: "+5000 XP" },
              { title: "Maître des Runes", icon: Zap, status: "En Cours", xp: "4/5" },
              { title: "Marcheur du Vide", icon: Trophy, status: "Verrouillé", xp: "Lvl 40" },
              { title: "Dresseur de Dragon", icon: ShieldCheck, status: "Évent", xp: "Limité" }
            ].map((achievement, i) => (
              <motion.div
                key={achievement.title}
                className="p-8 border border-white/5 bg-white/[0.02] hover:border-gold/20 transition-all text-center"
              >
                <achievement.icon className="w-6 h-6 text-gold/30 mx-auto mb-6" />
                <h4 className="font-headline text-lg mb-2 text-white/80">{achievement.title}</h4>
                <p className="text-gold/40 text-[8px] uppercase tracking-widest mb-4">{achievement.status}</p>
                <div className="text-silver/20 font-bold text-[10px] tracking-widest">{achievement.xp}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
