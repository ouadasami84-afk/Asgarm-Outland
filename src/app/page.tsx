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
              
              {/* Introduction au Royaume */}
              <section className="py-48 px-8 max-w-7xl mx-auto text-center">
                <motion.div 
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                  className="mb-40"
                >
                  <div className="flex items-center justify-center gap-4 mb-8">
                    <div className="h-[1px] w-12 bg-gold/30" />
                    <span className="text-gold text-[10px] tracking-[0.5em] uppercase font-bold text-glow-gold">Le Projet Asgarm</span>
                    <div className="h-[1px] w-12 bg-gold/30" />
                  </div>
                  <h2 className="text-6xl font-headline mb-10 text-white uppercase tracking-tighter leading-tight">
                    Dominez la Terre <br /> <span className="text-gold italic font-light">D'Asgarm</span>
                  </h2>
                  <p className="text-silver/40 max-w-2xl mx-auto italic text-lg leading-relaxed font-light">
                    "Outland n'est pas qu'un serveur, c'est une ascension. Sur la map d'Asgarm, 
                    chaque pas est un défi, chaque alliance une nécessité."
                  </p>
                </motion.div>
                
                {/* Communauté Section - SANS LOGOS */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-40 max-w-4xl mx-auto">
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
                      <p className="text-[10px] text-gold/40 uppercase tracking-[0.4em] font-bold">Rejoindre la Phalange</p>
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
                      <p className="text-[10px] text-gold/40 uppercase tracking-[0.4em] font-bold">Les Chroniques d'Asgarm</p>
                    </div>
                  </motion.a>
                </div>
                
                {/* Navigation Rapide - SANS LOGOS */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                  {[
                    { title: "Atlas", desc: "La Map Asgarm", href: "/atlas" },
                    { title: "Archive", desc: "Savoir Ancien", href: "/archive" },
                    { title: "Reliques", desc: "Trésors Royaux", href: "/reliques" },
                    { title: "Maîtrise", desc: "Ascension", href: "/maitrise" }
                  ].map((cat, i) => (
                    <motion.a
                      key={cat.title}
                      href={cat.href}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1, duration: 0.8 }}
                      whileHover={{ y: -12 }}
                      className="glass-night p-14 group transition-all duration-500 border border-gold/10 flex flex-col items-center justify-center min-h-[300px] relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                      <h3 className="text-2xl font-headline mb-6 group-hover:text-gold transition-colors tracking-[0.2em] uppercase text-white">{cat.title}</h3>
                      <div className="w-12 h-[1px] bg-gold/20 mb-6 group-hover:w-20 transition-all duration-500" />
                      <p className="text-[9px] tracking-[0.5em] uppercase text-silver/40 font-bold group-hover:text-silver/60">{cat.desc}</p>
                    </motion.a>
                  ))}
                </div>
              </section>

              <Footer />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}
