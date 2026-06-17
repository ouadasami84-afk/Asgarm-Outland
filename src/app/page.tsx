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
    const timer = setTimeout(() => setLoading(false), 2500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <main className="relative min-h-screen bg-[#03040a] overflow-x-hidden">
      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 1.2, ease: [0.43, 0.13, 0.23, 0.96] } }}
            className="fixed inset-0 z-[100] bg-[#03040a] flex items-center justify-center overflow-hidden"
          >
            <div className="text-center relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gold/5 blur-[120px] rounded-full animate-pulse" />
              
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="relative z-10"
              >
                <div className="font-headline text-4xl md:text-6xl text-gold uppercase tracking-[0.6em] mb-4">
                  OUTLAND
                </div>
                <div className="w-32 h-[1px] bg-gold/30 mx-auto mb-4" />
                <div className="text-[10px] tracking-[0.5em] uppercase text-silver/40 font-bold">
                  Asgarm vous attend
                </div>
              </motion.div>
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