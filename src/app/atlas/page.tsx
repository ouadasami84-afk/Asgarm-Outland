
"use client"

import React from 'react'
import { Navigation } from '@/components/Navigation'
import { MagicalBackground } from '@/components/MagicalBackground'
import { Footer } from '@/components/Footer'
import { motion } from 'framer-motion'
import { Compass, MapPin, Sparkles } from 'lucide-react'

const sectors = [
  {
    title: "Plaines d'Asgarm",
    desc: "Le cœur battant du monde, où la magie résiduelle fait vibrer chaque brin d'herbe sous un ciel éternellement étoilé.",
    coord: "Sector 01",
    icon: Compass
  },
  {
    title: "Scriptorium Royal",
    desc: "Une tour de savoir suspendue dans l'éther, abritant les parchemins qui régissent les lois d'Outland.",
    coord: "Sector 02",
    icon: Sparkles
  },
  {
    title: "Grottes d'Ether",
    desc: "Des sanctuaires cristallins où le mana pur coule comme de l'eau, illuminant les ténèbres de reflets dorés.",
    coord: "Sector 03",
    icon: MapPin
  }
]

export default function AtlasPage() {
  return (
    <main className="relative min-h-screen bg-night-deep">
      <MagicalBackground />
      <Navigation />
      
      <div className="relative z-10 pt-48 pb-32 px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-32"
          >
            <h1 className="text-6xl font-headline mb-8 text-glow-gold uppercase tracking-tighter">Atlas d'Outland</h1>
            <p className="text-silver/40 max-w-xl mx-auto italic text-lg">Découvrez les secrets géographiques d'Asgarm à travers ses secteurs mystiques.</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {sectors.map((loc, i) => (
              <motion.div
                key={loc.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.2 }}
                className="glass-night p-16 relative overflow-hidden group hover:border-gold/30 transition-all"
              >
                <loc.icon className="absolute top-8 right-8 text-gold/5 w-24 h-24" />
                <div className="relative z-10">
                  <span className="text-gold/40 text-[10px] tracking-[0.4em] uppercase font-bold block mb-4">{loc.coord}</span>
                  <h2 className="text-4xl font-headline mb-8 text-white group-hover:text-gold transition-colors">{loc.title}</h2>
                  <p className="text-silver/40 text-lg italic leading-relaxed mb-12">"{loc.desc}"</p>
                  <button className="text-[10px] tracking-[0.4em] uppercase text-gold hover:text-white transition-all">Explorer le secteur</button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  )
}
