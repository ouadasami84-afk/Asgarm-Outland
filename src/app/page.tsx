
"use client"

import React, { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Navigation } from '@/components/Navigation'
import { Hero } from '@/components/Hero'
import { Footer } from '@/components/Footer'

export default function Home() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <main className="relative min-h-screen bg-transparent">
      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-[#010208] flex items-center justify-center"
          >
            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="font-headline text-4xl text-gold uppercase tracking-[1em] mb-6 text-glow-gold"
              >
                OUTLAND
              </motion.div>
              <div className="w-48 h-[1px] bg-gold/20 mx-auto relative overflow-hidden">
                <motion.div 
                  initial={{ x: '-100%' }}
                  animate={{ x: '100%' }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 bg-gold/60"
                />
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            <Navigation />
            <div className="relative z-10">
              <Hero />
              
              {/* Manifeste de Qualité */}
              <section className="py-16 px-8 max-w-7xl mx-auto text-center border-b border-gold/5">
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="mb-16"
                >
                  <div className="flex items-center justify-center gap-4 mb-6">
                    <div className="h-[1px] w-8 bg-gold/30" />
                    <span className="text-gold text-[9px] tracking-[0.5em] uppercase font-bold text-glow-gold">Ingénierie de Pointe</span>
                    <div className="h-[1px] w-8 bg-gold/30" />
                  </div>
                  <h2 className="text-5xl font-headline mb-8 text-white uppercase tracking-tighter leading-tight">
                    L'Excellence du <br /> <span className="text-gold italic font-light">Sur-Mesure</span>
                  </h2>
                  <p className="text-silver/40 max-w-2xl mx-auto italic text-lg leading-relaxed font-light">
                    "Outland repose sur une architecture logicielle exclusive. Chaque système et chaque mécanique de jeu a été intégralement conçu par nos modélisateurs et nos développeurs. Nous offrons aux citoyens d'Asgarm une plateforme unique, où la souveraineté technique rencontre une immersion totale."
                  </p>
                </motion.div>

                {/* Section Roadmap / Chronologie */}
                <div className="max-w-4xl mx-auto mb-16 text-left">
                  <div className="flex flex-col gap-12 relative">
                    <motion.div 
                      initial={{ height: 0 }}
                      whileInView={{ height: '100%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: "easeInOut" }}
                      className="absolute left-[7px] top-0 w-[1px] bg-gradient-to-b from-gold/40 via-gold/10 to-transparent hidden md:block" 
                    />
                    
                    {[
                      {
                        phase: "Phase I : Inauguration",
                        title: "Juillet 2026 — Lancement V1",
                        desc: "Ouverture officielle des portes d'Outland. Déploiement de notre infrastructure initiale et des premiers systèmes propriétaires."
                      },
                      {
                        phase: "Phase II : Évolution Technique",
                        title: "Ascension V2",
                        desc: "Mise à jour majeure prévue peu après la sortie initiale. Intégration de mécaniques avancées et optimisation de l'expérience."
                      },
                      {
                        phase: "Phase III : Terre Promise",
                        title: "Map Asgarm Officielle",
                        desc: "La consécration. Sortie de la carte exclusive Asgarm, entièrement modélisée par nos équipes pour un univers à la mesure de notre ambition.",
                        highlight: true
                      }
                    ].map((item, index) => (
                      <motion.div 
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2, duration: 0.8 }}
                        className="relative pl-0 md:pl-16"
                      >
                        <div className={`absolute left-0 top-3 w-4 h-4 rounded-full border ${item.highlight ? 'border-gold bg-gold/20' : 'border-gold/40 bg-night'} hidden md:block`} />
                        <span className="text-gold/40 text-[9px] tracking-[0.4em] uppercase font-bold block mb-2">{item.phase}</span>
                        <h3 className={`text-3xl font-headline mb-3 uppercase tracking-tight ${item.highlight ? 'text-gold text-glow-gold' : 'text-white'}`}>
                          {item.title}
                        </h3>
                        <p className="text-silver/40 italic text-base leading-relaxed max-w-xl">
                          {item.desc}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
                
                {/* Communauté Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 max-w-4xl mx-auto">
                  <motion.a
                    href="#"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                    className="glass-night p-10 border border-gold/10 group transition-all duration-500"
                  >
                    <div className="text-center">
                      <h4 className="font-headline text-2xl text-white mb-2 group-hover:text-gold transition-colors tracking-tight">Discord Officiel</h4>
                      <div className="w-8 h-[1px] bg-gold/40 mx-auto mb-3 group-hover:w-16 transition-all" />
                      <p className="text-[9px] text-gold/60 uppercase tracking-[0.4em] font-bold">Rejoindre le Quartier Général</p>
                    </div>
                  </motion.a>

                  <motion.a
                    href="#"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className="glass-night p-10 border border-gold/10 group transition-all duration-500"
                  >
                    <div className="text-center">
                      <h4 className="font-headline text-2xl text-white mb-2 group-hover:text-gold transition-colors tracking-tight">TikTok Outland</h4>
                      <div className="w-8 h-[1px] bg-gold/40 mx-auto mb-3 group-hover:w-16 transition-all" />
                      <p className="text-[9px] text-gold/60 uppercase tracking-[0.4em] font-bold">Archives Visuelles d'Asgarm</p>
                    </div>
                  </motion.a>
                </div>

                {/* Fin de Page - Licence & Droit d'Auteur */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                  className="max-w-5xl mx-auto pt-12 border-t border-gold/10"
                >
                  <div className="mb-8">
                    <span className="text-gold text-xl tracking-[0.4em] uppercase font-bold block mb-6 text-glow-gold">Certification de Licence Propriétaire</span>
                    <p className="text-white/80 text-xl italic leading-relaxed max-w-3xl mx-auto font-light">
                      L'ensemble des architectures logicielles et modélisations 3D d'Outland sont protégés. Toute utilisation non autorisée entraînera des mesures légales immédiates.
                    </p>
                  </div>
                  <div className="flex flex-col items-center gap-6">
                    <div className="h-12 w-[1px] bg-gradient-to-b from-gold/40 to-transparent" />
                    <div className="text-center">
                      <span className="font-headline text-4xl text-gold tracking-[0.3em] uppercase block mb-2 text-glow-gold">© 2026 Outland Studios</span>
                      <span className="text-xs text-gold/60 tracking-[0.6em] uppercase font-bold">L'Excellence d'Asgarm</span>
                    </div>
                  </div>
                </motion.div>
              </section>

              <Footer />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}
