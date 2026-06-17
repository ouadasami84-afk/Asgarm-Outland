
"use client"

import React, { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Navigation } from '@/components/Navigation'
import { Hero } from '@/components/Hero'
import { MagicalBackground } from '@/components/MagicalBackground'
import { Footer } from '@/components/Footer'
import { Compass, Book, Shield, Trophy } from 'lucide-react'

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
            <MagicalBackground />
            <Navigation />
            <div className="relative z-10">
              <Hero />
              
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
                    <span className="text-gold text-[10px] tracking-[0.5em] uppercase font-bold">L'Éveil</span>
                    <div className="h-[1px] w-12 bg-gold/30" />
                  </div>
                  <h2 className="text-5xl font-headline mb-10 text-white uppercase tracking-tighter leading-tight">
                    Une Nouvelle Ère <br /> <span className="text-gold italic font-light">Sur Asgarm</span>
                  </h2>
                  <p className="text-silver/40 max-w-2xl mx-auto italic text-lg leading-relaxed font-light">
                    "La magie ne se contente pas d'exister sur Outland. Elle forge le destin de ceux qui osent franchir les portes du royaume sacré."
                  </p>
                </motion.div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                  {[
                    { title: "Atlas", desc: "Explorer Asgarm", href: "/atlas", icon: Compass },
                    { title: "Archive", desc: "Savoir Ancien", href: "/archive", icon: Book },
                    { title: "Reliques", desc: "Trésors Royaux", href: "/reliques", icon: Shield },
                    { title: "Maîtrise", desc: "Ascension", href: "/maitrise", icon: Trophy }
                  ].map((cat, i) => (
                    <motion.a
                      key={cat.title}
                      href={cat.href}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1, duration: 0.8 }}
                      whileHover={{ y: -12 }}
                      className="glass-night p-12 group transition-all duration-500 border border-gold/10 flex flex-col items-center justify-center min-h-[320px] relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                      <cat.icon className="w-10 h-10 text-gold/40 mb-10 group-hover:text-gold group-hover:scale-110 transition-all duration-500" />
                      <h3 className="text-xl font-headline mb-6 group-hover:text-gold transition-colors tracking-[0.3em] uppercase text-white">{cat.title}</h3>
                      <div className="w-12 h-[1px] bg-gold/20 mb-6 group-hover:w-20 transition-all duration-500" />
                      <p className="text-[9px] tracking-[0.4em] uppercase text-silver/40 font-bold group-hover:text-silver/60">{cat.desc}</p>
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
