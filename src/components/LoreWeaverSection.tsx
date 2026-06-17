"use client"

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { generateMagicalLore } from '@/ai/flows/generate-magical-lore-flow'
import { Sparkles, Wand2, Loader2, BookOpen, ScrollText } from 'lucide-react'

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
    <section id="lore-weaver" className="py-40 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-gold/20 bg-gold/5 mb-8"
          >
            <ScrollText className="w-4 h-4 text-gold" />
            <span className="text-[10px] font-bold text-gold uppercase tracking-[0.4em]">The Archive of Fates</span>
          </motion.div>
          <h2 className="font-headline text-5xl md:text-7xl mb-8 leading-tight">Manifest Your <br /><span className="italic text-silver">True Destiny</span></h2>
          <p className="font-body text-silver/50 max-w-2xl mx-auto leading-loose tracking-wide text-sm">
            Speak your traits into the ether. Our ancient divining stones will read the threads 
            of your potential and weave a history that has always been yours to claim.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Input Side */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className="glass-gold p-10 border-gold/10 relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <Sparkles className="text-gold w-5 h-5" />
                <h3 className="font-headline text-2xl text-white">Declare Your Essence</h3>
              </div>
              <textarea
                className="w-full h-48 bg-black/40 border border-gold/10 p-6 text-silver focus:border-gold/40 focus:ring-0 transition-all outline-none resize-none font-body text-sm leading-relaxed placeholder:text-silver/20"
                placeholder="Declare your lineage, your affinity for the elements, or the scars you carry..."
                value={traits}
                onChange={(e) => setTraits(e.target.value)}
              />
              <button
                onClick={handleWeave}
                disabled={loading || !traits.trim()}
                className="mt-8 w-full py-5 bg-gold text-black font-bold uppercase tracking-[0.3em] text-[11px] flex items-center justify-center gap-3 disabled:opacity-30 hover:bg-[#e6c152] transition-colors relative group overflow-hidden"
              >
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Divining...
                  </>
                ) : (
                  <>
                    <Wand2 className="w-4 h-4" />
                    Begin Divination
                  </>
                )}
              </button>
            </div>
            {/* Decorative Corner Elements */}
            <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-gold/30" />
            <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-gold/30" />
          </motion.div>

          {/* Result Side */}
          <div className="min-h-[500px] flex items-center justify-center relative bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]">
            <AnimatePresence mode="wait">
              {lore ? (
                <motion.div
                  key="lore-content"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="glass p-12 w-full relative group"
                >
                  <div className="absolute top-0 right-0 p-6">
                    <BookOpen className="text-gold/10 w-20 h-20 group-hover:text-gold/20 transition-colors" />
                  </div>
                  <div className="relative z-10">
                    <span className="text-gold font-headline italic text-lg mb-6 block border-b border-gold/10 pb-4">As the prophecy foretold...</span>
                    <div className="max-h-[350px] overflow-y-auto pr-4 custom-scrollbar">
                      <p className="text-silver/80 leading-[2] font-body text-sm first-letter:text-6xl first-letter:font-headline first-letter:text-gold first-letter:mr-4 first-letter:float-left first-letter:leading-none">
                        {lore}
                      </p>
                    </div>
                  </div>
                  <div className="mt-10 pt-6 border-t border-gold/10 flex justify-between items-center">
                    <span className="text-[9px] tracking-[0.4em] text-gold/40 uppercase">Archived in the Halls of Arcanum</span>
                    <button className="text-gold/60 hover:text-gold text-[9px] tracking-[0.3em] uppercase transition-colors">Capture Scroll</button>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="placeholder"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center p-12 border border-dashed border-white/5 bg-white/2"
                >
                  <div className="w-24 h-24 rounded-full border border-gold/10 flex items-center justify-center mx-auto mb-10 relative">
                    <div className="absolute inset-0 rounded-full animate-ping bg-gold/5" />
                    <Loader2 className={`w-10 h-10 text-gold/20 ${loading ? 'animate-spin' : ''}`} />
                  </div>
                  <h4 className="font-headline text-xl text-white/40 mb-4 italic">The Scroll Awaits</h4>
                  <p className="text-silver/20 font-body text-xs tracking-widest uppercase">
                    Your story is currently a whisper in the void.
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