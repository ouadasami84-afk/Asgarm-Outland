"use client"

import React, { useRef, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'

const locations = [
  {
    title: "The Grand Library",
    desc: "Infinite corridors of ancient knowledge floating in the void.",
    img: "https://picsum.photos/seed/library/1200/800",
    color: "from-blue-900/40"
  },
  {
    title: "Whispering Woods",
    desc: "Trees that hum the melodies of forgotten civilizations.",
    img: "https://picsum.photos/seed/enchantedforest/1200/800",
    color: "from-green-900/40"
  },
  {
    title: "Skyward Academy",
    desc: "Where the elite masters of the arcane study among the clouds.",
    img: "https://picsum.photos/seed/academy/1200/800",
    color: "from-purple-900/40"
  },
  {
    title: "Crystal Abyss",
    desc: "Deep caverns filled with raw magic in its crystalline form.",
    img: "https://picsum.photos/seed/cavern/1200/800",
    color: "from-cyan-900/40"
  }
]

export const WorldAtlas: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
  })

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"])

  return (
    <section id="the-world" ref={targetRef} className="relative h-[400vh] bg-obsidian">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div className="absolute top-20 left-10 z-20">
          <h2 className="font-headline text-6xl text-glow-gold">World Atlas</h2>
          <p className="text-silver/40 font-body uppercase tracking-[0.5em] text-xs mt-2">Explore the Biomes</p>
        </div>
        
        <motion.div style={{ x }} className="flex gap-4 px-20">
          {locations.map((loc, i) => (
            <div
              key={loc.title}
              className="group relative h-[70vh] w-[80vw] md:w-[60vw] overflow-hidden rounded-3xl shrink-0"
            >
              <Image
                src={loc.img}
                alt={loc.title}
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                data-ai-hint="magical environment"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${loc.color} to-transparent opacity-80`} />
              <div className="absolute bottom-0 left-0 p-12 max-w-xl">
                <span className="text-gold font-body tracking-widest text-xs uppercase mb-2 block">Region 0{i+1}</span>
                <h3 className="font-headline text-5xl mb-4">{loc.title}</h3>
                <p className="text-silver/80 text-lg leading-relaxed">{loc.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
