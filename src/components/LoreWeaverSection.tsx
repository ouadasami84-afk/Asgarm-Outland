"use client"

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { generateMagicalLore } from '@/ai/flows/generate-magical-lore-flow'
import { Sparkles, Wand2, Loader2, BookOpen } from 'lucide-react'

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
    <section id="lore-weaver" className="py-32 px-6 bg-obsidian relative">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-arcane/30 bg-arcane/10 mb-6"
          >
            <Wand2 className="w-4 h-4 text-arcane" />
            <span className="text-xs font-bold text-arcane uppercase tracking-widest">Arcane Intelligence</span>
          </motion.div>
          <h2 className="font-headline text-5xl md:text-6xl mb-6">Lore Weaver Tool</h2>
          <p className="font-body text-silver/60 max-w-2xl mx-auto leading-relaxed">
            Summon your destiny. Provide a few keywords or character traits, and let our arcane intelligence weave a unique backstory for your journey in Arcanum Prime.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Input Side */}
          <div className="glass-gold p-8 rounded-2xl border-gold/10">
            <h3 className="font-headline text-2xl mb-6 flex items-center gap-2">
              <Sparkles className="text-gold w-5 h-5" />
              Manifest Traits
            </h3>
            <textarea
              className="w-full h-40 bg-obsidian/50 border border-white/10 rounded-xl p-4 text-silver focus:border-gold/50 focus:ring-1 focus:ring-gold/20 transition-all outline-none resize-none font-body text-sm"
              placeholder="e.g. Shadow-born, Master of Frost, Ancient Noble Lineage, Seeker of Lost Runes..."
              value={traits}
              onChange={(e) => setTraits(e.target.value)}
            />
            <button
              onClick={handleWeave}
              disabled={loading || !traits.trim()}
              className="mt-6 w-full py-4 bg-gold text-obsidian rounded-xl font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-2 disabled:opacity-50 hover:scale-[1.02] transition-transform active:scale-95 shadow-lg shadow-gold/10"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Weaving Lore...
                </>
              ) : (
                <>
                  <Wand2 className="w-4 h-4" />
                  Weave My Story
                </>
              )}
            </button>
          </div>

          {/* Result Side */}
          <div className="min-h-[400px] flex items-center justify-center relative">
            <AnimatePresence mode="wait">
              {lore ? (
                <motion.div
                  key="lore-content"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="glass p-8 rounded-2xl border-white/5 w-full relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 p-4">
                    <BookOpen className="text-gold/20 w-12 h-12" />
                  </div>
                  <h4 className="font-headline text-xl text-gold mb-4 italic">A Tale Revealed...</h4>
                  <div className="max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
                    <p className="text-silver/80 leading-loose font-body text-sm first-letter:text-4xl first-letter:font-headline first-letter:text-gold first-letter:mr-3 first-letter:float-left">
                      {lore}
                    </p>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="placeholder"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center"
                >
                  <div className="w-20 h-20 rounded-full border border-dashed border-white/20 flex items-center justify-center mx-auto mb-6">
                    <Loader2 className={`w-8 h-8 text-white/20 ${loading ? 'animate-spin' : ''}`} />
                  </div>
                  <p className="text-silver/40 font-body text-sm italic">
                    The pages are empty, awaiting your traits...
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
