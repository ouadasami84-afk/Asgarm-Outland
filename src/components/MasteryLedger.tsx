"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Trophy, ShieldCheck, Zap, ScrollText } from 'lucide-react'

export const MasteryLedger: React.FC = () => {
  return (
    <section id="mastery" className="py-32 px-6 bg-obsidian relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Stats Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            <h2 className="font-headline text-4xl mb-8">Mastery Ledger</h2>
            
            <div className="glass p-6 rounded-2xl border-white/5 space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-silver/60 text-sm uppercase tracking-widest">Global Rank</span>
                <span className="text-gold font-bold">#421</span>
              </div>
              <div className="h-[1px] bg-white/5 w-full" />
              <div className="space-y-2">
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-silver/40">Arcane Proficiency</span>
                  <span className="text-gold">88%</span>
                </div>
                <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: '88%' }}
                    className="h-full bg-gold" 
                  />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-silver/40">Elemental Attunement</span>
                  <span className="text-arcane">65%</span>
                </div>
                <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: '65%' }}
                    className="h-full bg-arcane" 
                  />
                </div>
              </div>
            </div>

            <button className="w-full py-4 glass-gold text-gold rounded-xl font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-2 hover:bg-gold hover:text-obsidian transition-all">
              <ShieldCheck className="w-4 h-4" />
              Claim Weekly Reward
            </button>
          </div>

          {/* Main Dashboard Area */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Ancient Scholar", icon: ScrollText, status: "Complete", xp: "+5000 XP" },
              { title: "Rune Master", icon: Zap, status: "In Progress", xp: "4/5 Collected" },
              { title: "Void Walker", icon: Trophy, status: "Locked", xp: "Level 40 Reqd" },
              { title: "Dragon Tamer", icon: ShieldCheck, status: "Legacy", xp: "Limited Event" }
            ].map((achievement, i) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="glass p-8 rounded-2xl border-white/5 hover:border-gold/20 transition-all group"
              >
                <achievement.icon className="w-10 h-10 text-gold/40 mb-6 group-hover:text-gold transition-colors" />
                <h4 className="font-headline text-xl mb-1">{achievement.title}</h4>
                <p className="text-silver/40 text-xs uppercase tracking-widest mb-4">{achievement.status}</p>
                <div className="text-gold font-bold text-sm">{achievement.xp}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-gold/5 blur-[100px] rounded-full" />
    </section>
  )
}
