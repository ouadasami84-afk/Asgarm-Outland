
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
      
      <div className="flex-1 flex items-center justify-center p-6 pt-24 perspective-1500">
        <div className="relative w-full max-w-6xl h-[75vh] flex items-center justify-center">
          
          {/* Grimoire Structure */}
          <div className="relative w-full h-full flex items-center justify-center preserve-3d">
            
            {/* Control Left */}
            <button 
              onClick={prevPage}
              disabled={currentPage === 0}
              className="absolute left-4 z-50 p-6 text-gold/30 hover:text-gold transition-all duration-500 disabled:opacity-0 hover:scale-110"
            >
              <ChevronLeft className="w-16 h-16" />
            </button>

            {/* Control Right */}
            <button 
              onClick={nextPage}
              disabled={currentPage === bookPages.length - 1}
              className="absolute right-4 z-50 p-6 text-gold/30 hover:text-gold transition-all duration-500 disabled:opacity-0 hover:scale-110"
            >
              <ChevronRight className="w-16 h-16" />
            </button>

            {/* The Book Container */}
            <div className="relative w-[1000px] h-full flex shadow-[0_50px_100px_-20px_rgba(0,0,0,1)] bg-night border border-gold/10 overflow-hidden">
              
              {/* Left Page (Fixed Base) */}
              <div className="w-1/2 h-full bg-[#05060a] border-r border-gold/5 p-16 flex flex-col">
                <div className="flex items-center gap-4 mb-8 opacity-20">
                  <div className="h-[1px] w-8 bg-gold" />
                  <span className="text-gold text-[8px] tracking-[0.8em] uppercase font-bold">Archives Royales</span>
                </div>
                <div className="flex-1 flex flex-col justify-center opacity-[0.03] select-none pointer-events-none">
                  <h4 className="text-8xl font-headline text-white uppercase leading-none">ASGARM</h4>
                  <h4 className="text-8xl font-headline text-white uppercase leading-none text-right">CODEX</h4>
                </div>
              </div>

              {/* Right Page (The Content Page) */}
              <div className="w-1/2 h-full bg-[#05060a] relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#010208_100%)] opacity-30" />
                
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentPage}
                    initial={{ opacity: 0, rotateY: 90 }}
                    animate={{ opacity: 1, rotateY: 0 }}
                    exit={{ opacity: 0, rotateY: -90 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="relative z-10 p-16 h-full flex flex-col origin-left"
                  >
                    {bookPages[currentPage].type === "cover" && (
                      <div className="h-full flex flex-col items-center justify-center text-center">
                        <div className="w-24 h-24 rounded-full border border-gold/10 flex items-center justify-center mb-10 bg-gold/5">
                          <div className="w-12 h-12 border border-gold/40 rotate-45 flex items-center justify-center">
                             <div className="w-4 h-4 bg-gold animate-pulse" />
                          </div>
                        </div>
                        <span className="text-gold text-[10px] tracking-[1em] uppercase font-bold mb-6">{bookPages[currentPage].subtitle}</span>
                        <h2 className="text-6xl font-headline text-white uppercase tracking-tighter mb-8 text-glow-gold leading-tight">
                          {bookPages[currentPage].title}
                        </h2>
                        <div className="h-[1px] w-12 bg-gold/20 mb-8" />
                        <p className="text-silver/40 text-sm italic font-light leading-relaxed max-w-xs">
                          {bookPages[currentPage].content}
                        </p>
                      </div>
                    )}

                    {bookPages[currentPage].type === "story" && (
                      <div className="h-full flex flex-col">
                        <div className="flex items-center gap-4 mb-8">
                          <div className="h-[1px] w-12 bg-gold/40" />
                          <span className="text-gold text-[10px] tracking-[0.8em] uppercase font-bold">{bookPages[currentPage].era}</span>
                        </div>
                        <h3 className="text-5xl font-headline text-white uppercase tracking-tighter mb-8 text-glow-gold">
                          {bookPages[currentPage].title}
                        </h3>
                        <p className="text-silver/50 text-sm italic font-light border-l-2 border-gold/20 pl-6 mb-12 leading-relaxed">
                          {bookPages[currentPage].desc}
                        </p>
                        <div className="space-y-10 overflow-y-auto custom-scrollbar pr-6">
                          {bookPages[currentPage].chapters?.map((ch, i) => (
                            <div key={i} className="group">
                              <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-3 group-hover:text-gold transition-colors">{ch.t}</h4>
                              <p className="text-silver/30 text-[12px] leading-loose italic font-light">{ch.c}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {bookPages[currentPage].type === "ai" && (
                      <div className="h-full flex flex-col">
                        <div className="flex items-center gap-4 mb-8">
                          <div className="h-[1px] w-12 bg-gold/40" />
                          <span className="text-gold text-[10px] tracking-[0.8em] uppercase font-bold">VOTRE RÉCIT</span>
                        </div>
                        <h3 className="text-5xl font-headline text-white uppercase tracking-tighter mb-6 text-glow-gold">
                          {bookPages[currentPage].title}
                        </h3>
                        
                        {!lore ? (
                          <div className="flex flex-col gap-8 mt-4">
                            <textarea
                              className="w-full h-40 bg-black/40 border border-gold/10 p-6 text-silver/80 focus:border-gold/30 outline-none resize-none font-body text-xs italic leading-relaxed"
                              placeholder="Écrivez un fragment de votre passé pour l'immortaliser..."
                              value={traits}
                              onChange={(e) => setTraits(e.target.value)}
                            />
                            <button
                              onClick={handleWeave}
                              disabled={loading || !traits.trim()}
                              className="w-full py-6 bg-gold text-night font-bold uppercase tracking-[0.5em] text-[10px] flex items-center justify-center gap-4 hover:scale-[1.02] active:scale-95 transition-all disabled:opacity-20 shadow-[0_0_30px_rgba(212,175,55,0.2)]"
                            >
                              {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <ScrollText className="w-5 h-5" />}
                              {loading ? "INVOCATION..." : "TISSER LE DESTIN"}
                            </button>
                          </div>
                        ) : (
                          <div className="flex flex-col flex-1">
                            <div className="flex-1 overflow-y-auto custom-scrollbar pr-6 mb-8">
                              <p className="text-silver/60 text-sm leading-[2] italic">
                                {lore}
                              </p>
                            </div>
                            <button 
                              onClick={() => { setLore(null); setTraits(''); }}
                              className="text-gold text-[9px] uppercase tracking-[0.5em] font-bold border-t border-gold/10 pt-6 hover:opacity-100 opacity-40 transition-opacity"
                            >
                              TIRER UN NOUVEAU FRAGMENT
                            </button>
                          </div>
                        )}
                      </div>
                    )}
                    
                    {/* Page Numbering */}
                    <div className="mt-auto pt-8 flex justify-between items-center border-t border-gold/5">
                      <span className="text-[9px] text-gold/20 tracking-[0.5em] uppercase font-bold">Protocol Asgarm</span>
                      <span className="text-[10px] text-gold/40 font-bold font-headline">{currentPage + 1} / {bookPages.length}</span>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Spine Effect */}
              <div className="absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 bg-gold/10 z-20 shadow-[0_0_15px_rgba(212,175,55,0.5)]" />
              <div className="absolute left-1/2 top-0 bottom-0 w-12 -translate-x-1/2 bg-gradient-to-r from-black/60 via-transparent to-black/60 z-10 pointer-events-none" />
            </div>
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
        .perspective-1500 {
          perspective: 2000px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
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
