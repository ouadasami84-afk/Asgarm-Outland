
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
                className="font-headline text-5xl text-gold uppercase tracking-[0.6em] mb-4 text-glow-gold"
              >
                OUTLAND
              </motion.div>
              <div className="w-48 h-[1px] bg-gold/20 mx-auto" />
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <MagicalBackground />
            <Navigation />
            <div className="relative z-10">
              <Hero />
              
              {/* Teaser Sections for other categories */}
              <section className="py-40 px-8 max-w-7xl mx-auto text-center">
                <div className="mb-20">
                  <h2 className="text-4xl font-headline mb-6 text-glow-gold">L'Éveil d'une Nouvelle Ère</h2>
                  <p className="text-silver/40 max-w-2xl mx-auto italic text-lg leading-relaxed">
                    Sur les terres sacrées d'Asgarm, la magie ne se contente pas d'exister. 
                    Elle respire, elle forge le destin de ceux qui osent Outland.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {[
                    { title: "Atlas", desc: "Explorez Asgarm", href: "/atlas" },
                    { title: "Archive", desc: "Lore Weaver AI", href: "/archive" },
                    { title: "Reliques", desc: "Trésors Royaux", href: "/reliques" },
                    { title: "Maîtrise", desc: "Votre Destinée", href: "/maitrise" }
                  ].map((cat) => (
                    <motion.a
                      key={cat.title}
                      href={cat.href}
                      whileHover={{ y: -10 }}
                      className="glass-night p-12 group transition-all"
                    >
                      <h3 className="text-xl font-headline mb-4 group-hover:text-gold transition-colors">{cat.title}</h3>
                      <p className="text-[10px] tracking-[0.3em] uppercase text-silver/40">{cat.desc}</p>
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
