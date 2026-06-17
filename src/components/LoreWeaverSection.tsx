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
    <section id="lore-weaver" className="py-40 px-6 relative overflow-hidden bg-[#03040a]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="inline-flex items-center gap-3 px-8 py-2 border border-gold/20 bg-gold/5 mb-8"
          >
            <History className="w-4 h-4 text-gold/60" />
            <span className="text-[9px] font-bold text-gold/80 uppercase tracking-[0.5em]">L'Archive d'Outland</span>
          </motion.div>
          <h2 className="font-headline text-5xl md:text-7xl mb-8 leading-tight">Écrivez votre <br /><span className="italic text-silver">Histoire Divine</span></h2>
          <p className="font-body text-silver/40 max-w-2xl mx-auto leading-loose tracking-wide text-sm">
            Déposez vos intentions dans le puits des âmes. Nos archives résonneront avec vos traits 
            pour révéler le destin qui vous est promis sur les terres d'Asgarm.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className="glass-gold p-12 border-gold/20 relative z-10">
              <div className="flex items-center gap-3 mb-10">
                <Shield className="text-gold w-5 h-5" />
                <h3 className="font-headline text-2xl text-white uppercase tracking-wider">Vos Caractéristiques</h3>
              </div>
              <textarea
                className="w-full h-56 bg-black/50 border border-gold/10 p-8 text-silver focus:border-gold/40 focus:ring-0 transition-all outline-none resize-none font-body text-sm leading-relaxed placeholder:text-silver/20"
                placeholder="Exemple : Paladin déchu, maniant le feu céleste, en quête de rédemption sur Asgarm..."
                value={traits}
                onChange={(e) => setTraits(e.target.value)}
              />
              <button
                onClick={handleWeave}
                disabled={loading || !traits.trim()}
                className="mt-10 w-full py-6 bg-gold text-black font-bold uppercase tracking-[0.4em] text-[10px] flex items-center justify-center gap-3 disabled:opacity-30 hover:bg-gold/80 transition-all rounded-sm"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Invocation en cours...
                  </>
                ) : (
                  <>
                    <ScrollText className="w-4 h-4" />
                    Consulter les Archives
                  </>
                )}
              </button>
            </div>
            <div className="absolute -top-3 -left-3 w-10 h-10 border-t-2 border-l-2 border-gold/40" />
            <div className="absolute -bottom-3 -right-3 w-10 h-10 border-b-2 border-r-2 border-gold/40" />
          </motion.div>

          <div className="min-h-[550px] flex items-center justify-center relative bg-black/20 border border-white/5 p-1">
            <AnimatePresence mode="wait">
              {lore ? (
                <motion.div
                  key="lore-content"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  className="bg-[#060816] p-12 w-full relative h-full border border-gold/10 shadow-2xl"
                >
                  <div className="absolute top-8 right-8">
                    <Book className="text-gold/10 w-16 h-16" />
                  </div>
                  <div className="relative z-10">
                    <span className="text-gold font-headline italic text-lg mb-8 block border-b border-gold/10 pb-4">Fragment de Destinée</span>
                    <div className="max-h-[350px] overflow-y-auto pr-6 custom-scrollbar">
                      <p className="text-silver/70 leading-[2.2] font-body text-sm first-letter:text-7xl first-letter:font-headline first-letter:text-gold first-letter:mr-5 first-letter:float-left first-letter:leading-none italic">
                        {lore}
                      </p>
                    </div>
                  </div>
                  <div className="mt-12 pt-8 border-t border-gold/10 flex justify-between items-center">
                    <span className="text-[9px] tracking-[0.4em] text-gold/30 uppercase">Sceau Royal d'Outland</span>
                    <div className="flex gap-4">
                      <Shield className="w-4 h-4 text-gold/20" />
                      <Shield className="w-4 h-4 text-gold/20" />
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
                  <div className="w-24 h-24 border border-gold/10 flex items-center justify-center mx-auto mb-12 relative rotate-45">
                    <Shield className="w-10 h-10 text-gold/10 -rotate-45" />
                  </div>
                  <h4 className="font-headline text-xl text-white/30 mb-4 tracking-widest uppercase">L'Archive est Muette</h4>
                  <p className="text-silver/20 font-body text-[10px] tracking-[0.5em] uppercase">
                    Déclarez vos traits pour briser le silence.
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