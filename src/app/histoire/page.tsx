
"use client"

import React, { useState } from 'react'
import { Navigation } from '@/components/Navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Loader2, ScrollText, Book as BookIcon } from 'lucide-react'
import { generateMagicalLore } from '@/ai/flows/generate-magical-lore-flow'

const bookPages = [
  {
    type: "cover",
    title: "Chroniques d'Asgarm",
    subtitle: "Le Livre des Origines",
    content: "Une exploration des ères passées, présentes et futures du royaume éternel."
  },
  {
    type: "story",
    era: "AN 0 - 250",
    title: "L'Ère de la Fondation",
    desc: "L'émergence des premiers piliers d'éther. Les anciens maîtres ont canalisé l'énergie brute pour ériger les fondations d'Asgarm.",
    chapters: [
      { t: "Le Premier Souffle", c: "Découverte des courants telluriques magiques par les érudits nomades." },
      { t: "L'Unification", c: "Traité de paix historique entre les clans primordiaux sous la bannière d'Asgarm." }
    ]
  },
  {
    type: "story",
    era: "AN 251 - 800",
    title: "L'Âge d'Or",
    desc: "Apogée de la puissance magique et technologique. La construction des grandes académies et l'expansion du commerce éthéré.",
    chapters: [
      { t: "L'Expansion", c: "Rayonnement culturel et scientifique. Création des premières reliques royales." },
      { t: "La Paix Royale", c: "Cinq siècles de stabilité absolue sous la dynastie des Monarques d'Ether." }
    ]
  },
  {
    type: "story",
    era: "AN 801 - 1024",
    title: "Le Grand Cataclysme",
    desc: "Instabilité des flux magiques entraînant une fracture de la réalité. Le royaume a dû se réinventer pour survivre.",
    chapters: [
      { t: "La Rupture", c: "Effondrement partiel du réseau d'éther et exil des créatures magiques." },
      { t: "La Reconstruction", c: "Mise en place du Protocole Asgarm pour stabiliser les énergies mondiales." }
    ]
  },
  {
    type: "ai",
    title: "Mémoires de l'Ether",
    desc: "Utilisez l'énergie résiduelle des archives pour invoquer vos propres fragments historiques."
  }
]

export default function HistoirePage() {
  const [currentPage, setCurrentPage] = useState(0)
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

  const nextPage = () => currentPage < bookPages.length - 1 && setCurrentPage(currentPage + 1)
  const prevPage = () => currentPage > 0 && setCurrentPage(currentPage - 1)

  return (
    <main className="relative h-screen flex flex-col overflow-hidden bg-[#010208]">
      <Navigation />
      
      <div className="flex-1 flex items-center justify-center p-6 pt-24 perspective-1000">
        <div className="relative w-full max-w-5xl h-[70vh] flex items-center justify-center">
          
          {/* Controls - Left */}
          <button 
            onClick={prevPage}
            disabled={currentPage === 0}
            className="absolute left-0 z-50 p-4 text-gold/40 hover:text-gold transition-colors disabled:opacity-0"
          >
            <ChevronLeft className="w-12 h-12" />
          </button>

          {/* Controls - Right */}
          <button 
            onClick={nextPage}
            disabled={currentPage === bookPages.length - 1}
            className="absolute right-0 z-50 p-4 text-gold/40 hover:text-gold transition-colors disabled:opacity-0"
          >
            <ChevronRight className="w-12 h-12" />
          </button>

          {/* The Grimoire Container */}
          <div className="relative w-[900px] h-full flex shadow-[0_50px_100px_-20px_rgba(0,0,0,1)]">
            
            {/* Left Page (Fixed/Background) */}
            <div className="w-1/2 h-full bg-[#05060a] border-y border-l border-gold/20 relative overflow-hidden">
               <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#010208_100%)] opacity-50" />
               <div className="p-12 h-full flex flex-col justify-center opacity-20 select-none">
                 <span className="text-gold text-[8px] tracking-[0.8em] uppercase font-bold mb-4">Archives Royales</span>
                 <h4 className="text-xl font-headline text-white/50 uppercase">Asgarm Codex</h4>
               </div>
            </div>

            {/* Right Page (Flipping Content) */}
            <div className="w-1/2 h-full bg-[#05060a] border-y border-r border-gold/20 relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#010208_100%)] opacity-50" />
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentPage}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5 }}
                  className="relative z-10 p-12 h-full flex flex-col"
                >
                  {bookPages[currentPage].type === "cover" && (
                    <div className="h-full flex flex-col items-center justify-center text-center">
                      <div className="w-20 h-20 rounded-full border border-gold/20 flex items-center justify-center mb-8 bg-gold/5">
                        <BookIcon className="text-gold w-8 h-8" />
                      </div>
                      <span className="text-gold text-[10px] tracking-[1em] uppercase font-bold mb-4">{bookPages[currentPage].subtitle}</span>
                      <h2 className="text-6xl font-headline text-white uppercase tracking-tighter mb-8 text-glow-gold leading-none">
                        {bookPages[currentPage].title}
                      </h2>
                      <p className="text-silver/40 text-sm italic font-light leading-relaxed max-w-xs">
                        {bookPages[currentPage].content}
                      </p>
                    </div>
                  )}

                  {bookPages[currentPage].type === "story" && (
                    <div className="h-full flex flex-col">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="h-[1px] w-8 bg-gold/40" />
                        <span className="text-gold text-[9px] tracking-[0.8em] uppercase font-bold">{bookPages[currentPage].era}</span>
                      </div>
                      <h3 className="text-4xl font-headline text-white uppercase tracking-tighter mb-6 text-glow-gold">
                        {bookPages[currentPage].title}
                      </h3>
                      <p className="text-silver/50 text-xs italic font-light border-l border-gold/20 pl-4 mb-10">
                        {bookPages[currentPage].desc}
                      </p>
                      <div className="space-y-8 overflow-y-auto custom-scrollbar pr-4">
                        {bookPages[currentPage].chapters?.map((ch, i) => (
                          <div key={i} className="group">
                            <h4 className="text-white text-sm font-bold uppercase tracking-widest mb-2 group-hover:text-gold transition-colors">{ch.t}</h4>
                            <p className="text-silver/30 text-[11px] leading-relaxed italic font-light">{ch.c}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {bookPages[currentPage].type === "ai" && (
                    <div className="h-full flex flex-col">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="h-[1px] w-8 bg-gold/40" />
                        <span className="text-gold text-[9px] tracking-[0.8em] uppercase font-bold">VOTRE RÉCIT</span>
                      </div>
                      <h3 className="text-4xl font-headline text-white uppercase tracking-tighter mb-4 text-glow-gold">
                        {bookPages[currentPage].title}
                      </h3>
                      
                      {!lore ? (
                        <div className="flex flex-col gap-6 mt-4">
                          <textarea
                            className="w-full h-32 bg-black/40 border border-gold/10 p-4 text-silver/80 focus:border-gold/30 outline-none resize-none font-body text-[10px] italic"
                            placeholder="Écrivez un fragment de votre passé..."
                            value={traits}
                            onChange={(e) => setTraits(e.target.value)}
                          />
                          <button
                            onClick={handleWeave}
                            disabled={loading || !traits.trim()}
                            className="w-full py-4 bg-gold text-night font-bold uppercase tracking-[0.4em] text-[9px] flex items-center justify-center gap-3 hover:scale-[1.02] transition-all disabled:opacity-20"
                          >
                            {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <ScrollText className="w-4 h-4" />}
                            {loading ? "Invocation..." : "Tisser le Destin"}
                          </button>
                        </div>
                      ) : (
                        <div className="flex flex-col flex-1">
                          <div className="flex-1 overflow-y-auto custom-scrollbar pr-4 mb-6">
                            <p className="text-silver/60 text-xs leading-loose italic">
                              {lore}
                            </p>
                          </div>
                          <button 
                            onClick={() => { setLore(null); setTraits(''); }}
                            className="text-gold text-[8px] uppercase tracking-[0.4em] font-bold border-t border-gold/10 pt-4 hover:opacity-100 opacity-60 transition-opacity"
                          >
                            Tirer un nouveau fragment
                          </button>
                        </div>
                      )}
                    </div>
                  )}
                  
                  {/* Page Number */}
                  <div className="mt-auto pt-6 flex justify-between items-center border-t border-gold/5">
                    <span className="text-[8px] text-gold/20 tracking-widest uppercase font-bold">Codex Asgarm</span>
                    <span className="text-[8px] text-gold/40 font-bold">{currentPage + 1} / {bookPages.length}</span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Spine Effect */}
            <div className="absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 bg-gold/10 z-20" />
            <div className="absolute left-1/2 top-0 bottom-0 w-8 -translate-x-1/2 bg-gradient-to-r from-black/80 via-transparent to-black/80 z-10 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Footer Protocole Doré */}
      <footer className="h-12 border-t border-gold/10 flex items-center justify-center bg-black/60 relative z-20">
        <span className="text-[9px] text-gold tracking-[0.8em] uppercase font-bold">
          OUTLAND STUDIOS — PROTOCOLE ASGARM V2.0.9
        </span>
      </footer>

      <style jsx global>{`
        .perspective-1000 {
          perspective: 1500px;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 2px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(212, 175, 55, 0.02);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(212, 175, 55, 0.2);
        }
      `}</style>
    </main>
  )
}
