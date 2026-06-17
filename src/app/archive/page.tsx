"use client"

import React, { useState } from 'react'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { motion, AnimatePresence } from 'framer-motion'
import { generateMagicalLore } from '@/ai/flows/generate-magical-lore-flow'
import { Book, Shield, ScrollText, Loader2 } from 'lucide-react'

export default function ArchivePage() {
  const [traits, setTraits] = useState('')
  const [lore, setLore] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const handleWeave = async () => {
    if (!traits.trim()) return
    setLoading(true)
    try {
      const result = await generateMagicalLore({ themesOrTraits: traits })
      setLore(result.lore)
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="relative min-h-screen bg-transparent">
      <Navigation />
      
      <div className="relative z-10 pt-48 pb-32 px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-24"
          >
            <h1 className="text-6xl font-headline mb-8 text-glow-gold uppercase tracking-tighter">Grand Archive</h1>
            <p className="text-silver/40 max-w-xl mx-auto italic text-lg">Invoquez les écrits anciens pour révéler votre chemin dans Asgarm.</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="glass-night p-16">
              <h3 className="text-[10px] text-gold uppercase tracking-[0.4em] font-bold mb-10 flex items-center gap-3">
                <Shield className="w-4 h-4" /> Vos Intentions
              </h3>
              <textarea
                className="w-full h-64 bg-night-deep/40 border border-gold/10 p-8 text-silver/80 focus:border-gold/30 outline-none resize-none font-body text-sm leading-relaxed italic"
                placeholder="Un voyageur cherchant la paix dans Asgarm..."
                value={traits}
                onChange={(e) => setTraits(e.target.value)}
              />
              <button
                onClick={handleWeave}
                disabled={loading || !traits.trim()}
                className="mt-12 w-full py-6 bg-gold text-night font-bold uppercase tracking-[0.4em] text-[10px] flex items-center justify-center gap-3 hover:scale-[1.02] transition-all disabled:opacity-20"
              >
                {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <ScrollText className="w-4 h-4" />}
                {loading ? "L'Archive s'ouvre..." : "Invoquer la Destinée"}
              </button>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="min-h-[500px] flex items-center justify-center glass-night p-16 relative">
              <AnimatePresence mode="wait">
                {lore ? (
                  <motion.div key="lore" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="w-full">
                    <Book className="text-gold/5 w-32 h-32 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                    <span className="text-gold font-headline text-2xl italic mb-10 block border-b border-gold/10 pb-6">Révélation</span>
                    <div className="max-h-[300px] overflow-y-auto pr-6 custom-scrollbar">
                      <p className="text-silver/60 leading-loose font-body text-sm italic">
                        {lore}
                      </p>
                    </div>
                  </motion.div>
                ) : (
                  <div className="text-center opacity-10">
                    <Shield className="w-20 h-20 mx-auto mb-8" />
                    <p className="text-[10px] tracking-[0.6em] uppercase">Archive Scellée</p>
                  </div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  )
}
