
"use client"

import React, { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Navigation } from '@/components/Navigation'
import { Hero } from '@/components/Hero'
import { MagicalBackground } from '@/components/MagicalBackground'
import { Footer } from '@/components/Footer'

export default function Home() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <main className="relative min-h-screen bg-night-deep">
      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-night-deep flex items-center justify-center"
          >
            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="font-headline text-4xl text-gold uppercase tracking-[0.8em] mb-4 text-glow-gold"
              >
                OUTLAND
              </motion.div>
              <div className="w-32 h-[1px] bg-gold/30 mx-auto" />
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            <MagicalBackground />
            <Navigation />
            <div className="relative z-10">
              <Hero />
              
              <section className="py-48 px-8 max-w-7xl mx-auto text-center">
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="mb-32"
                >
                  <h2 className="text-4xl font-headline mb-8 text-glow-gold uppercase tracking-tighter">L'Éveil d'une Nouvelle Ère</h2>
                  <p className="text-silver/40 max-w-2xl mx-auto italic text-lg leading-relaxed font-light">
                    Sur les terres sacrées d'Asgarm, la magie ne se contente pas d'exister. 
                    Elle respire, elle forge le destin de ceux qui osent Outland.
                  </p>
                </motion.div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                  {[
                    { title: "Atlas", desc: "Le Monde d'Asgarm", href: "/atlas" },
                    { title: "Archive", desc: "Écrits Anciens", href: "/archive" },
                    { title: "Reliques", desc: "Trésors Royaux", href: "/reliques" },
                    { title: "Maîtrise", desc: "Votre Destinée", href: "/maitrise" }
                  ].map((cat, i) => (
                    <motion.a
                      key={cat.title}
                      href={cat.href}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      whileHover={{ y: -8, borderColor: 'rgba(212, 175, 55, 0.4)' }}
                      className="glass-night p-12 group transition-all duration-500 border border-gold/10 flex flex-col items-center justify-center min-h-[280px]"
                    >
                      <h3 className="text-xl font-headline mb-6 group-hover:text-gold transition-colors tracking-widest uppercase">{cat.title}</h3>
                      <div className="w-8 h-[1px] bg-gold/20 mb-6 group-hover:w-16 transition-all" />
                      <p className="text-[9px] tracking-[0.4em] uppercase text-silver/30 font-bold">{cat.desc}</p>
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
