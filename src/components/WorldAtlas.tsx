"use client"

import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Compass, Sparkles, Wand2, MapPin } from 'lucide-react'

const sectors = [
  {
    title: "Plaines d'Asgarm",
    desc: "Le cœur battant du monde, où la magie résiduelle fait vibrer chaque brin d'herbe sous un ciel éternellement étoilé.",
    icon: Compass,
    coord: "Sector 01"
  },
  {
    title: "Scriptorium Royal",
    desc: "Une tour de savoir suspendue dans l'éther, abritant les parchemins qui régissent les lois d'Outland.",
    icon: Wand2,
    coord: "Sector 02"
  },
  {
    title: "Grottes d'Ether",
    desc: "Des sanctuaires cristallins où le mana pur coule comme de l'eau, illuminant les ténèbres de reflets dorés.",
    icon: Sparkles,
    coord: "Sector 03"
  }
]

export const WorldAtlas: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
  })

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-35%"])

  return (
    <section id="the-world" ref={targetRef} className="relative h-[200vh] bg-transparent">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div className="absolute top-24 left-16 z-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="h-[1px] w-12 bg-gold/20" />
              <p className="text-gold/40 font-body uppercase tracking-[0.5em] text-[10px] font-bold">Chroniques</p>
            </div>
            <h2 className="font-headline text-5xl text-white text-glow-gold">Atlas d'Outland</h2>
          </motion.div>
        </div>
        
        <motion.div style={{ x }} className="flex gap-16 px-16 mt-16">
          {sectors.map((loc, i) => (
            <div
              key={loc.title}
              className="group relative h-[60vh] w-[75vw] md:w-[45vw] glass-gold shrink-0 p-16 flex flex-col justify-between border border-gold/10 hover:border-gold/30 transition-all duration-700 shadow-xl"
            >
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <MapPin className="text-gold/20 w-3 h-3" />
                  <span className="text-gold/30 font-bold tracking-[0.5em] text-[9px] uppercase">{loc.coord}</span>
                </div>
                <h3 className="font-headline text-4xl mb-8 text-white group-hover:text-gold transition-colors duration-500">{loc.title}</h3>
                <p className="text-silver/40 text-lg leading-relaxed font-light italic">
                  "{loc.desc}"
                </p>
              </div>

              <div className="relative z-10 flex items-center gap-6">
                <div className="w-12 h-12 rounded-full border border-gold/20 flex items-center justify-center bg-black/20">
                  <loc.icon className="w-5 h-5 text-gold/40" />
                </div>
                <div className="h-[1px] flex-1 bg-white/5" />
                <button className="text-[10px] tracking-[0.4em] uppercase text-gold/40 hover:text-gold transition-all">
                  Explorer
                </button>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
