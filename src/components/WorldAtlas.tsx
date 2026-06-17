"use client"

import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Compass, Sparkles, Wand2 } from 'lucide-react'

const sectors = [
  {
    title: "Les Plaines d'Asgarm",
    desc: "Le cœur battant du monde, où la magie résiduelle des anciens dieux fait vibrer chaque brin d'herbe sous un ciel éternellement étoilé.",
    icon: Compass,
    accent: "shadow-blue-500/10"
  },
  {
    title: "Le Scriptorium Royal",
    desc: "Une tour de savoir suspendue dans l'éther d'Outland, abritant les parchemins interdits qui régissent les lois d'Asgarm.",
    icon: Wand2,
    accent: "shadow-purple-500/10"
  },
  {
    title: "Les Grottes d'Ether",
    desc: "Des sanctuaires cristallins où le mana pur coule comme de l'eau, illuminant les ténèbres de reflets dorés.",
    icon: Sparkles,
    accent: "shadow-gold/10"
  }
]

export const WorldAtlas: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
  })

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"])

  return (
    <section id="the-world" ref={targetRef} className="relative h-[250vh] bg-transparent">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div className="absolute top-24 left-24 z-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="h-[1px] w-20 bg-gold/40" />
              <p className="text-gold font-body uppercase tracking-[0.5em] text-[10px] font-bold">Chroniques d'Asgarm</p>
            </div>
            <h2 className="font-headline text-7xl text-white text-glow-gold">L'Atlas d'Outland</h2>
          </motion.div>
        </div>
        
        <motion.div style={{ x }} className="flex gap-20 px-32">
          {sectors.map((loc, i) => (
            <div
              key={loc.title}
              className={`group relative h-[65vh] w-[75vw] md:w-[50vw] glass-gold shrink-0 p-20 flex flex-col justify-between border border-gold/10 hover:border-gold/30 transition-all duration-1000 ${loc.accent}`}
            >
              <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:opacity-10 transition-opacity">
                <loc.icon className="w-64 h-64 text-gold" />
              </div>

              <div className="relative z-10">
                <span className="text-gold/40 font-bold tracking-[0.8em] text-[10px] uppercase mb-10 block">Archives / Secteur 0{i+1}</span>
                <h3 className="font-headline text-6xl mb-10 text-white group-hover:text-gold transition-colors duration-700">{loc.title}</h3>
                <p className="text-silver/50 text-xl leading-relaxed font-light font-body max-w-xl group-hover:text-silver transition-colors duration-700">{loc.desc}</p>
              </div>

              <div className="relative z-10 flex items-center gap-6">
                <div className="w-12 h-12 rounded-full border border-gold/20 flex items-center justify-center">
                  <loc.icon className="w-5 h-5 text-gold/60" />
                </div>
                <div className="h-[1px] flex-1 bg-gradient-to-r from-gold/20 to-transparent" />
                <button className="text-[10px] tracking-[0.4em] uppercase text-gold/60 hover:text-gold transition-colors">Explorer</button>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
