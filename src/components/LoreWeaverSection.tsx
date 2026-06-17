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
    <section id="lore-weaver" className="py-48 px-6 relative overflow-hidden bg-[#03040a]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="inline-flex items-center gap-3 px-6 py-2 border border-gold/15 bg-gold/5 mb-10"
          >
            <History className="w-3.5 h-3.5 text-gold/60" />
            <span className="text-[8px] font-bold text-gold/70 uppercase tracking-[0.4em]">Le Grand Archive d'Asgarm</span>
          </motion.div>
          <h2 className="font-headline text-5xl md:text-7xl mb-8 leading-tight text-white uppercase tracking-tighter">Votre <span className="italic text-gold/90">Fragment</span> de Destinée</h2>
          <p className="font-body text-silver/40 max-w-2xl mx-auto leading-relaxed tracking-wide text-sm md:text-base italic">
            Consultez les écrits anciens pour révéler le chemin qui vous est destiné sur Outland.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className="glass-gold p-10 md:p-14 border-gold/10 relative z-10">
              <div className="flex items-center gap-3 mb-10">
                <Shield className="text-gold/60 w-4 h-4" />
                <h3 className="font-headline text-xl text-white uppercase tracking-[0.2em]">Saisissez vos Intentions</h3>
              </div>
              <textarea
                className="w-full h-64 bg-black/40 border border-gold/10 p-8 text-silver focus:border-gold/30 focus:ring-0 transition-all outline-none resize-none font-body text-sm leading-relaxed placeholder:text-silver/20 italic"
                placeholder="Exemple : Un guerrier maudit cherchant la rédemption dans les plaines d'Asgarm..."
                value={traits}
                onChange={(e) => setTraits(e.target.value)}
              />
              <button
                onClick={handleWeave}
                disabled={loading || !traits.trim()}
                className="mt-10 w-full py-6 bg-gold text-black font-bold uppercase tracking-[0.4em] text-[10px] flex items-center justify-center gap-3 disabled:opacity-30 hover:bg-gold/80 transition-all rounded-sm shadow-lg"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Lecture des Parchemins...
                  </>
                ) : (
                  <>
                    <ScrollText className="w-4 h-4" />
                    Invoquer l'Archive
                  </>
                )}
              </button>
            </div>
            <div className="absolute -top-2 -left-2 w-12 h-12 border-t border-l border-gold/30" />
            <div className="absolute -bottom-2 -right-2 w-12 h-12 border-b border-r border-gold/30" />
          </motion.div>

          <div className="min-h-[550px] flex items-center justify-center relative bg-black/30 border border-white/5 p-1 rounded-sm">
            <AnimatePresence mode="wait">
              {lore ? (
                <motion.div
                  key="lore-content"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="bg-[#050714] p-12 md:p-16 w-full relative h-full border border-gold/10 shadow-inner"
                >
                  <div className="absolute top-10 right-10">
                    <Book className="text-gold/5 w-20 h-20" />
                  </div>
                  <div className="relative z-10">
                    <span className="text-gold/80 font-headline italic text-xl mb-10 block border-b border-gold/10 pb-6 uppercase tracking-widest">Le Verdict des Anciens</span>
                    <div className="max-h-[380px] overflow-y-auto pr-6 custom-scrollbar">
                      <p className="text-silver/60 leading-[2.4] font-body text-base first-letter:text-7xl first-letter:font-headline first-letter:text-gold first-letter:mr-6 first-letter:float-left first-letter:leading-none italic">
                        {lore}
                      </p>
                    </div>
                  </div>
                  <div className="mt-14 pt-8 border-t border-gold/5 flex justify-between items-center">
                    <span className="text-[8px] tracking-[0.5em] text-gold/20 uppercase font-bold">Authentifié par l'Ordre d'Outland</span>
                    <div className="flex gap-4 opacity-20">
                      <Shield className="w-3 h-3 text-gold" />
                      <Shield className="w-3 h-3 text-gold" />
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="placeholder"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center p-16"
                >
                  <div className="w-20 h-20 border border-gold/10 flex items-center justify-center mx-auto mb-10 relative rotate-45">
                    <Shield className="w-8 h-8 text-gold/10 -rotate-45" />
                  </div>
                  <h4 className="font-headline text-lg text-white/20 mb-4 tracking-[0.4em] uppercase">L'Archive est Scellée</h4>
                  <p className="text-silver/20 font-body text-[9px] tracking-[0.5em] uppercase italic">
                    Déposez vos intentions pour libérer la connaissance.
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
