"use client"

import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'

const locations = [
  {
    title: "Les Plaines d'Asgarm",
    desc: "Le cœur battant du monde, où la magie résiduelle des anciens dieux fait vibrer chaque brin d'herbe.",
    img: "https://picsum.photos/seed/asgarm1/1200/800",
    color: "from-blue-950/60"
  },
  {
    title: "Le Scriptorium d'Outland",
    desc: "Une tour de savoir suspendue entre deux réalités, abritant les parchemins interdits de la création.",
    img: "https://picsum.photos/seed/asgarm2/1200/800",
    color: "from-indigo-950/60"
  },
  {
    title: "Les Grottes d'Ether",
    desc: "Des cristaux de mana pur illuminent ces profondeurs où seuls les plus braves osent s'aventurer.",
    img: "https://picsum.photos/seed/asgarm3/1200/800",
    color: "from-slate-900/60"
  }
]

export const WorldAtlas: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
  })

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"])

  return (
    <section id="the-world" ref={targetRef} className="relative h-[300vh] bg-[#03040a]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div className="absolute top-24 left-16 z-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="font-headline text-6xl text-white text-glow-gold">L'Atlas d'Asgarm</h2>
            <div className="flex items-center gap-4 mt-4">
              <div className="h-[1px] w-20 bg-gold/30" />
              <p className="text-gold font-body uppercase tracking-[0.4em] text-[9px] font-bold italic">Cartographie Interdite</p>
            </div>
          </motion.div>
        </div>
        
        <motion.div style={{ x }} className="flex gap-16 px-24">
          {locations.map((loc, i) => (
            <div
              key={loc.title}
              className="group relative h-[70vh] w-[80vw] md:w-[60vw] overflow-hidden shrink-0 border border-gold/10 hover:border-gold/30 transition-colors duration-700"
            >
              <Image
                src={loc.img}
                alt={loc.title}
                fill
                className="object-cover brightness-[0.7] group-hover:scale-105 transition-transform duration-[3000ms] ease-out"
                data-ai-hint="magical location"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${loc.color} via-transparent to-transparent opacity-80`} />
              <div className="absolute bottom-0 left-0 p-16 max-w-2xl bg-gradient-to-t from-black/90 to-transparent w-full">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                >
                  <span className="text-gold font-bold tracking-[0.6em] text-[9px] uppercase mb-4 block italic">Secteur 0{i+1}</span>
                  <h3 className="font-headline text-5xl mb-6 text-white group-hover:text-glow-gold transition-all duration-500">{loc.title}</h3>
                  <p className="text-silver/60 text-lg leading-relaxed font-light font-body group-hover:text-silver/80 transition-colors">{loc.desc}</p>
                </motion.div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}