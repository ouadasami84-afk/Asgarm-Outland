"use client"

import React from 'react'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { motion } from 'framer-motion'

const roles = [
  {
    title: "Citoyen d'Outland",
    focus: "Souveraineté & Économie",
    desc: "En tant que citoyen, vous êtes le pilier de la société d'Asgarm. Participez à l'essor commercial, forgez des alliances et développez votre influence au sein des cités.",
    actions: ["Commerce sur-mesure", "Gestion de domaines", "Vie sociale immersive"]
  },
  {
    title: "Gardien de l'Éther",
    focus: "Protection & Justice",
    desc: "Bras armé du royaume, le Gardien assure la stabilité. Maîtrisez les systèmes de combat exclusifs pour protéger les terres sacrées contre les menaces extérieures.",
    actions: ["Patrouille de secteur", "Défense de zone", "Application du Codex"]
  },
  {
    title: "Érudit des Plaines",
    focus: "Mystères & Savoir",
    desc: "Explorez les recoins cachés de la map Asgarm. Votre rôle est de décoder les anciens parchemins et de découvrir les secrets technologiques enfouis par nos modélisateurs.",
    actions: ["Recherche archéologique", "Cartographie avancée", "Maîtrise des runes"]
  }
]

export default function GuidePage() {
  return (
    <main className="relative min-h-screen bg-transparent">
      <Navigation />
      
      <div className="relative z-10 pt-48 pb-32 px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header de la page Guide */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-32"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-[1px] w-8 bg-gold/30" />
              <span className="text-gold text-[9px] tracking-[0.5em] uppercase font-bold text-glow-gold">Protocole d'Intégration</span>
              <div className="h-[1px] w-8 bg-gold/30" />
            </div>
            <h1 className="text-6xl font-headline mb-8 text-glow-gold uppercase tracking-tighter leading-tight">
              Guide d'Arrivée <br /> <span className="text-gold italic font-light">Sur Asgarm</span>
            </h1>
            <p className="text-silver/40 max-w-2xl mx-auto italic text-lg leading-relaxed font-light">
              "Chaque citoyen d'Outland est l'architecte de sa propre légende. Voici les clés pour comprendre votre place dans le royaume."
            </p>
          </motion.div>

          {/* Section des Rôles */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-32">
            {roles.map((role, i) => (
              <motion.div
                key={role.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.2 }}
                className="glass-night p-16 relative overflow-hidden group hover:border-gold/30 transition-all border-gold/10"
              >
                <div className="relative z-10">
                  <span className="text-gold/40 text-[9px] tracking-[0.4em] uppercase font-bold block mb-4">{role.focus}</span>
                  <h2 className="text-4xl font-headline mb-8 text-white group-hover:text-gold transition-colors">{role.title}</h2>
                  <p className="text-silver/40 text-base italic leading-relaxed mb-12">"{role.desc}"</p>
                  
                  <div className="space-y-4">
                    <span className="text-[8px] text-gold/60 uppercase tracking-[0.3em] font-bold block mb-4">Capacités Déployées :</span>
                    {role.actions.map((action, j) => (
                      <div key={j} className="flex items-center gap-3">
                        <div className="h-[1px] w-3 bg-gold/40" />
                        <span className="text-white/60 text-xs italic">{action}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mécaniques Propriétaires */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-night p-16 border-gold/10 text-center max-w-4xl mx-auto"
          >
            <h3 className="text-gold text-[10px] tracking-[0.6em] uppercase font-bold mb-8">Souveraineté Technique</h3>
            <p className="text-white/80 text-xl italic leading-relaxed font-light mb-12">
              Le serveur Outland utilise des systèmes de jeu intégralement conçus par nos équipes. De la récolte de ressources au système de combat, chaque interaction a été pensée pour une fluidité et une immersion d'élite sur la map Asgarm.
            </p>
            <div className="h-[1px] w-24 bg-gold/30 mx-auto" />
          </motion.div>

        </div>
      </div>
      
      <Footer />
    </main>
  )
}
