
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
              <section className="py-32 px-8 max-w-7xl mx-auto text-center">
                <motion.div 
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                  className="mb-32"
                >
                  <div className="flex items-center justify-center gap-4 mb-8">
                    <div className="h-[1px] w-12 bg-gold/30" />
                    <span className="text-gold text-[10px] tracking-[0.5em] uppercase font-bold text-glow-gold">Ingénierie Propriétaire</span>
                    <div className="h-[1px] w-12 bg-gold/30" />
                  </div>
                  <h2 className="text-6xl font-headline mb-10 text-white uppercase tracking-tighter leading-tight">
                    L'Excellence du <br /> <span className="text-gold italic font-light">Sur-Mesure</span>
                  </h2>
                  <p className="text-silver/40 max-w-3xl mx-auto italic text-lg leading-relaxed font-light">
                    "Le projet Outland ne repose sur aucun artifice pré-conçu. Chaque système, chaque ligne de code 
                    et chaque mécanique de jeu a été intégralement développé par nos modélisateurs et nos développeurs. Nous offrons aux 
                    citoyens d'Asgarm une plateforme unique, où la stabilité technique rencontre une immersion 
                    totale. Ici, l'innovation est au service de votre ascension."
                  </p>
                </motion.div>
                
                {/* Communauté Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32 max-w-4xl mx-auto">
                  <motion.a
                    href="#"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                    className="glass-night p-12 border border-gold/10 group transition-all duration-500"
                  >
                    <div className="text-center">
                      <h4 className="font-headline text-2xl text-white mb-3 group-hover:text-gold transition-colors tracking-tight">Discord Officiel</h4>
                      <div className="w-8 h-[1px] bg-gold/20 mx-auto mb-4 group-hover:w-16 transition-all" />
                      <p className="text-[10px] text-gold/40 uppercase tracking-[0.4em] font-bold">Rejoindre le Quartier Général</p>
                    </div>
                  </motion.a>

                  <motion.a
                    href="#"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                    className="glass-night p-12 border border-gold/10 group transition-all duration-500"
                  >
                    <div className="text-center">
                      <h4 className="font-headline text-2xl text-white mb-3 group-hover:text-gold transition-colors tracking-tight">TikTok Outland</h4>
                      <div className="w-8 h-[1px] bg-gold/20 mx-auto mb-4 group-hover:w-16 transition-all" />
                      <p className="text-[10px] text-gold/40 uppercase tracking-[0.4em] font-bold">Archives Visuelles d'Asgarm</p>
                    </div>
                  </motion.a>
                </div>

                {/* Fin de Page - Licence & Droit d'Auteur - PLUS GROS & DORÉ */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2 }}
                  className="max-w-4xl mx-auto pb-24 border-t border-gold/10 pt-24"
                >
                  <div className="mb-12">
                    <span className="text-gold/60 text-xs tracking-[0.6em] uppercase font-bold block mb-8">Certification de Licence Propriétaire</span>
                    <p className="text-silver/50 text-sm italic leading-loose max-w-2xl mx-auto">
                      L'ensemble des architectures logicielles, scripts dynamiques, modélisations 3D et systèmes immersifs 
                      d'Outland sont protégés par les lois internationales sur la propriété intellectuelle. 
                      Toute tentative de plagiat ou d'utilisation non autorisée du projet Asgarm entraînera des 
                      mesures légales immédiates par notre service juridique.
                    </p>
                  </div>
                  <div className="flex flex-col items-center gap-8">
                    <div className="h-20 w-[1px] bg-gradient-to-b from-gold/40 to-transparent" />
                    <div className="text-center">
                      <span className="font-headline text-2xl text-white/60 tracking-[0.4em] uppercase block mb-3">© 2026 Outland Studios</span>
                      <span className="text-[10px] text-gold/50 tracking-[0.8em] uppercase font-bold">In Éther Veritas - Asgarm Project</span>
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
