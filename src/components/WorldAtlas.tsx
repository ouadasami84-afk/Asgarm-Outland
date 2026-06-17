"use client"

import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'

const locations = [
  {
    title: "The Silent Scriptorium",
    desc: "Infinite halls of living parchment that breathe with the knowledge of a thousand fallen empires.",
    img: "https://picsum.photos/seed/library/1200/800",
    color: "from-indigo-950/60"
  },
  {
    title: "The Whispering Glade",
    desc: "Ancient oaks that hum the forgotten melodies of the first wizards, their roots drinking from a river of starlight.",
    img: "https://picsum.photos/seed/enchantedforest/1200/800",
    color: "from-emerald-950/60"
  },
  {
    title: "Aetheria Highspire",
    desc: "An ivory sanctuary suspended in the clouds, where gravity is but a suggestion to the masters of the arcane.",
    img: "https://picsum.photos/seed/academy/1200/800",
    color: "from-violet-950/60"
  },
  {
    title: "The Obsidian Abyss",
    desc: "Deep crystalline caverns where raw magic solidifies into jewels of immense and terrible power.",
    img: "https://picsum.photos/seed/cavern/1200/800",
    color: "from-blue-950/60"
  }
]

export const WorldAtlas: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
  })

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"])

  return (
    <section id="the-world" ref={targetRef} className="relative h-[400vh] bg-[#050505]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div className="absolute top-24 left-16 z-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="font-headline text-7xl text-white text-glow-gold">The Great Map</h2>
            <div className="flex items-center gap-4 mt-4">
              <div className="h-[1px] w-20 bg-gold/30" />
              <p className="text-gold font-body uppercase tracking-[0.4em] text-[10px] font-bold">Explore the Biomes of Arcanum</p>
            </div>
          </motion.div>
        </div>
        
        <motion.div style={{ x }} className="flex gap-12 px-24">
          {locations.map((loc, i) => (
            <div
              key={loc.title}
              className="group relative h-[75vh] w-[85vw] md:w-[65vw] overflow-hidden rounded-none shrink-0 border border-white/5"
            >
              <Image
                src={loc.img}
                alt={loc.title}
                fill
                className="object-cover grayscale-50 group-hover:grayscale-0 transition-all duration-[2000ms] scale-110 group-hover:scale-100 ease-out"
                data-ai-hint="magical environment"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${loc.color} via-transparent to-transparent opacity-90`} />
              <div className="absolute bottom-0 left-0 p-16 max-w-2xl bg-gradient-to-t from-black/80 to-transparent w-full">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <span className="text-gold font-bold tracking-[0.5em] text-[10px] uppercase mb-4 block">Region Protocol 0{i+1}</span>
                  <h3 className="font-headline text-5xl mb-6 text-white group-hover:text-glow-gold transition-all duration-500">{loc.title}</h3>
                  <p className="text-silver/60 text-lg leading-relaxed font-light font-body group-hover:text-silver transition-colors">{loc.desc}</p>
                  
                  <button className="mt-8 text-gold text-[10px] tracking-[0.4em] uppercase font-bold border-b border-gold/20 pb-2 hover:border-gold transition-all">
                    Discover Secrets
                  </button>
                </motion.div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}