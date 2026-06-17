"use client"

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { generateMagicalLore } from '@/ai/flows/generate-magical-lore-flow'
import { Shield, Book, Loader2, ScrollText, History } from 'lucide-react'

export const LoreWeaverSection: React.FC = () => {
  const [traits, setTraits] = useState('')
  const [lore, setLore] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const handleWeave = async () => {
    if (!traits.trim()) return
    setLoading(true)
    try {
      const result = await generateMagicalLore({ themesOrTraits: traits })
      setLore(result.lore)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="lore-weaver" className="py-32 px-6 bg-[#010208] relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 px-4 py-1 border border-gold/10 bg-gold/5 mb-6">
            <History className="w-3 h-3 text-gold/40" />
            <span className="text-[8px] font-bold text-gold/40 uppercase tracking-[0.3em]">Grand Archive</span>
          </div>
          <h2 className="font-headline text-4xl text-white mb-4">Fragment de Destinée</h2>
          <p className="text-silver/40 text-xs italic tracking-wide">Consultez les écrits anciens pour révéler votre chemin.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="glass-gold p-10 border-gold/10">
            <div className="flex items-center gap-3 mb-8">
              <Shield className="text-gold/30 w-4 h-4" />
              <h3 className="text-xs text-white uppercase tracking-[0.3em] font-bold">Intentions</h3>
            </div>
            <textarea
              className="w-full h-48 bg-black/20 border border-gold/10 p-6 text-silver/80 focus:border-gold/30 outline-none resize-none font-body text-xs leading-relaxed italic"
              placeholder="Un voyageur cherchant la paix dans Asgarm..."
              value={traits}
              onChange={(e) => setTraits(e.target.value)}
            />
            <button
              onClick={handleWeave}
              disabled={loading || !traits.trim()}
              className="mt-8 w-full py-4 bg-gold/90 text-black font-bold uppercase tracking-[0.3em] text-[9px] flex items-center justify-center gap-2 disabled:opacity-20 hover:bg-gold transition-all"
            >
              {loading ? <Loader2 className="w-3 h-3 animate-spin" /> : <ScrollText className="w-3 h-3" />}
              {loading ? "Lecture..." : "Invoquer l'Archive"}
            </button>
          </div>

          <div className="min-h-[400px] flex items-center justify-center bg-black/20 border border-gold/5 p-8 relative">
            <AnimatePresence mode="wait">
              {lore ? (
                <motion.div
                  key="lore-content"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="w-full"
                >
                  <Book className="text-gold/5 w-16 h-16 absolute top-4 right-4" />
                  <span className="text-gold/60 font-headline italic text-lg mb-6 block border-b border-gold/10 pb-4">Le Verdict</span>
                  <div className="max-h-[250px] overflow-y-auto pr-4 custom-scrollbar">
                    <p className="text-silver/50 leading-loose font-body text-xs italic">
                      {lore}
                    </p>
                  </div>
                </motion.div>
              ) : (
                <div className="text-center opacity-20">
                  <Shield className="w-8 h-8 mx-auto mb-4" />
                  <p className="text-[8px] tracking-[0.4em] uppercase">Archive Scellée</p>
                </div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
