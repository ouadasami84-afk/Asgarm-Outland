"use client"

import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Compass, Sparkles, Wand2, MapPin } from 'lucide-react'

const sectors = [
  {
    title: "Les Plaines d'Asgarm",
    desc: "Le cœur battant du monde, où la magie résiduelle des anciens dieux fait vibrer chaque brin d'herbe sous un ciel éternellement étoilé.",
    icon: Compass,
    coord: "52°N, 12°E"
  },
  {
    title: "Le Scriptorium Royal",
    desc: "Une tour de savoir suspendue dans l'éther d'Outland, abritant les parchemins interdits qui régissent les lois d'Asgarm.",
    icon: Wand2,
    coord: "Celestial Axis"
  },
  {
    title: "Les Grottes d'Ether",
    desc: "Des sanctuaires cristallins où le mana pur coule comme de l'eau, illuminant les ténèbres de reflets dorés.",
    icon: Sparkles,
    coord: "Deep Core"
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
        <div className="absolute top-32 left-32 z-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <div className="flex items-center gap-6 mb-6">
              <div className="h-[1px] w-24 bg-gold/40" />
              <p className="text-gold font-body uppercase tracking-[0.7em] text-[11px] font-bold">Chroniques d'Asgarm</p>
            </div>
            <h2 className="font-headline text-8xl text-white text-glow-gold tracking-tight">L'Atlas d'Outland</h2>
          </motion.div>
        </div>
        
        <motion.div style={{ x }} className="flex gap-24 px-32 mt-20">
          {sectors.map((loc, i) => (
            <div
              key={loc.title}
              className="group relative h-[65vh] w-[80vw] md:w-[55vw] glass-gold shrink-0 p-24 flex flex-col justify-between border border-gold/15 hover:border-gold/40 transition-all duration-1000 shadow-[0_0_50px_rgba(0,0,0,0.5)]"
            >
              {/* Abstract Background Element */}
              <div className="absolute top-0 right-0 p-16 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-1000">
                <loc.icon className="w-80 h-80 text-gold" />
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-12">
                  <MapPin className="text-gold/40 w-4 h-4" />
                  <span className="text-gold/40 font-bold tracking-[1em] text-[11px] uppercase">Secteur 0{i+1} / {loc.coord}</span>
                </div>
                <h3 className="font-headline text-7xl mb-12 text-white group-hover:text-gold transition-colors duration-1000 leading-tight">{loc.title}</h3>
                <p className="text-silver/50 text-2xl leading-relaxed font-light font-body max-w-2xl group-hover:text-silver/80 transition-colors duration-1000 italic">
                  "{loc.desc}"
                </p>
              </div>

              <div className="relative z-10 flex items-center gap-10">
                <div className="w-16 h-16 rounded-full border border-gold/30 flex items-center justify-center bg-black/40 group-hover:border-gold/60 transition-colors">
                  <loc.icon className="w-7 h-7 text-gold/60" />
                </div>
                <div className="h-[1px] flex-1 bg-gradient-to-r from-gold/30 via-gold/10 to-transparent" />
                <button className="text-[12px] tracking-[0.6em] uppercase text-gold/60 hover:text-gold transition-all hover:translate-x-4">
                  Explorer les Mystères
                </button>
              </div>
              
              {/* Inner Glow Decorative */}
              <div className="absolute inset-0 bg-gradient-to-tr from-gold/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}