"use client"

import React, { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Navigation } from '@/components/Navigation'
import { Hero } from '@/components/Hero'
import { LoreWeaverSection } from '@/components/LoreWeaverSection'
import { ArtifactGallery } from '@/components/ArtifactGallery'
import { RuneDiscovery } from '@/components/RuneDiscovery'
import { WorldAtlas } from '@/components/WorldAtlas'
import { MasteryLedger } from '@/components/MasteryLedger'
import { MagicalBackground } from '@/components/MagicalBackground'
import { FinalCTA } from '@/components/FinalCTA'
import { Footer } from '@/components/Footer'

export default function Home() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <main className="relative min-h-screen bg-[#050505] overflow-x-hidden">
      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 1.5, ease: [0.43, 0.13, 0.23, 0.96] } }}
            className="fixed inset-0 z-[100] bg-black flex items-center justify-center overflow-hidden"
          >
            <div className="text-center relative">
              {/* Outer Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gold/10 blur-[100px] rounded-full animate-pulse" />
              
              <motion.div
                initial={{ scale: 0.8, opacity: 0, letterSpacing: "1em" }}
                animate={{ scale: 1, opacity: 1, letterSpacing: "0.5em" }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="font-headline text-3xl md:text-5xl text-gold uppercase mb-8 relative z-10"
              >
                Arcanum <span className="italic font-normal">Prime</span>
              </motion.div>
              
              <div className="w-64 h-[1px] bg-gold/20 mx-auto relative overflow-hidden">
                <motion.div
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-gold to-transparent"
                />
              </div>
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                transition={{ delay: 1, duration: 1 }}
                className="mt-6 text-[10px] tracking-[0.3em] uppercase text-silver font-bold"
              >
                Awakening the Ancient Resonance
              </motion.p>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
          >
            <MagicalBackground />
            <Navigation />
            
            <div className="relative z-10">
              <Hero />
              
              <WorldAtlas />
              
              <LoreWeaverSection />
              
              <ArtifactGallery />
              
              <RuneDiscovery />
              
              <MasteryLedger />
              
              <FinalCTA />
              
              <Footer />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}
