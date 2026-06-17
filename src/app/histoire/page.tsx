"use client"

import React, { useState } from 'react'
import { Navigation } from '@/components/Navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRight, Loader2, ScrollText, Book } from 'lucide-react'
import { generateMagicalLore } from '@/ai/flows/generate-magical-lore-flow'

const eras = [
  {
    id: "fondation",
    name: "Ère de la Fondation",
    period: "AN 0 - 250",
    desc: "L'émergence des premiers piliers d'éther. Les anciens maîtres ont canalisé l'énergie brute pour ériger les fondations d'Asgarm.",
    chapters: [
      { title: "Le Premier Souffle", content: "Découverte des courants telluriques magiques par les érudits nomades." },
      { title: "L'Unification", content: "Traité de paix historique entre les clans primordiaux sous la bannière d'Asgarm." }
    ]
  },
  {
    id: "or",
    name: "L'Âge d'Or",
    period: "AN 251 - 800",
    desc: "Apogée de la puissance magique et technologique. La construction des grandes académies et l'expansion du commerce éthéré.",
    chapters: [
      { title: "L'Expansion", content: "Rayonnement culturel et scientifique. Création des premières reliques royales." },
      { title: "La Paix Royale", content: "Cinq siècles de stabilité absolue sous la dynastie des Monarques d'Ether." }
    ]
  },
  {
    id: "cataclysme",
    name: "Le Grand Cataclysme",
    period: "AN 801 - 1024",
    desc: "Instabilité des flux magiques entraînant une fracture de la réalité. Le royaume a dû se réinventer pour survivre.",
    chapters: [
      { title: "La Rupture", content: "Effondrement partiel du réseau d'éther et exil des créatures magiques." },
      { title: "La Reconstruction", content: "Mise en place du Protocole Asgarm pour stabiliser les énergies mondiales." }
    ]
  },
  {
    id: "chroniques",
    name: "Mémoires de l'Ether",
    period: "VOTRE HISTOIRE",
    desc: "Utilisez l'énergie résiduelle des archives pour découvrir vos propres fragments historiques dans Asgarm.",
    isAI: true
  }
]

export default function HistoirePage() {
  const [activeEra, setActiveEra] = useState(eras[0].id)
  const era = eras.find(e => e.id === activeEra) || eras[0]
  
  // States for AI interaction
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
    <main className="relative h-screen flex flex-col overflow-hidden bg-[#010208]">
      <Navigation />
      
      <div className="flex-1 flex pt-24 pb-4 px-6 gap-6 relative z-10 overflow-hidden">
        
        {/* Barre Latérale Chronologique */}
        <aside className="w-80 flex flex-col gap-2 flex-none">
          <div className="mb-6 pl-4">
            <span className="text-gold text-[9px] tracking-[0.8em] uppercase font-bold block mb-1">Chronologies</span>
            <h1 className="text-3xl font-headline text-white uppercase tracking-tighter">HISTOIRE</h1>
          </div>
          
          <nav className="flex flex-col gap-1.5 overflow-y-auto custom-scrollbar pr-2">
            {eras.map((e) => (
              <button
                key={e.id}
                onClick={() => {
                  setActiveEra(e.id)
                  setLore(null)
                  setTraits('')
                }}
                className={`group relative flex items-center justify-between p-4 transition-all duration-500 border ${
                  activeEra === e.id 
                  ? 'bg-gold/10 border-gold/40' 
                  : 'bg-white/[0.01] border-white/5 hover:border-gold/20'
                }`}
              >
                <div className="text-left">
                  <span className={`text-[8px] tracking-[0.3em] uppercase block font-bold mb-1 ${activeEra === e.id ? 'text-gold' : 'text-silver/20'}`}>
                    {e.period}
                  </span>
                  <span className={`text-xs font-bold uppercase tracking-[0.2em] ${activeEra === e.id ? 'text-white' : 'text-silver/40 group-hover:text-silver/60'}`}>
                    {e.name}
                  </span>
                </div>
                {activeEra === e.id && (
                  <motion.div layoutId="active-era" className="text-gold">
                    <ChevronRight className="w-4 h-4" />
                  </motion.div>
                )}
              </button>
            ))}
          </nav>

          <div className="mt-auto p-5 border border-gold/10 bg-gold/[0.02]">
            <p className="text-[8px] text-gold uppercase tracking-[0.4em] leading-relaxed font-bold text-center">
              Sélectionnez une institution pour consulter ses prérogatives et ses grades officiels
            </p>
          </div>
        </aside>

        {/* Zone de Récit Principale */}
        <section className="flex-1 flex flex-col glass-night border border-gold/20 relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={era.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col h-full p-12"
            >
              {/* En-tête de l'Ère */}
              <div className="mb-10 flex flex-col">
                <div className="flex items-center gap-4 mb-3">
                  <div className="h-[1px] w-8 bg-gold/40" />
                  <span className="text-gold text-[10px] tracking-[1em] uppercase font-bold">{era.period}</span>
                </div>
                <h2 className="text-6xl font-headline text-white uppercase tracking-tighter leading-none mb-6 text-glow-gold">
                  {era.name}
                </h2>
                <p className="text-silver/50 text-base italic font-light border-l-2 border-gold/20 pl-6 leading-relaxed max-w-3xl">
                  "{era.desc}"
                </p>
              </div>

              {/* Contenu de l'Ère */}
              <div className="flex-1 overflow-y-auto pr-4 custom-scrollbar pb-10">
                {!era.isAI ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {era.chapters?.map((chapter, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="p-8 bg-gold/[0.01] border border-gold/5 hover:border-gold/20 transition-all duration-500"
                      >
                        <h3 className="text-xl text-white font-headline uppercase mb-4 tracking-tight">
                          {chapter.title}
                        </h3>
                        <div className="h-[1px] w-12 bg-gold/20 mb-4" />
                        <p className="text-silver/40 text-sm leading-relaxed italic font-light">
                          {chapter.content}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  /* Interface de Tissage de Lore (Mémoires de l'Ether) */
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start h-full">
                    <div className="space-y-8">
                      <div className="p-8 bg-white/[0.01] border border-white/5">
                        <h3 className="text-[10px] text-gold uppercase tracking-[0.4em] font-bold mb-6">
                          Saisir vos fragments de mémoire
                        </h3>
                        <textarea
                          className="w-full h-48 bg-night-deep/40 border border-gold/10 p-6 text-silver/80 focus:border-gold/30 outline-none resize-none font-body text-xs italic leading-relaxed"
                          placeholder="Un récit sur la chute des premiers mages..."
                          value={traits}
                          onChange={(e) => setTraits(e.target.value)}
                        />
                        <button
                          onClick={handleWeave}
                          disabled={loading || !traits.trim()}
                          className="mt-8 w-full py-4 bg-gold text-night font-bold uppercase tracking-[0.4em] text-[10px] flex items-center justify-center gap-3 hover:scale-[1.02] transition-all disabled:opacity-20"
                        >
                          {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <ScrollText className="w-4 h-4" />}
                          {loading ? "Recherche dans l'Ether..." : "Invoquer les Mémoires"}
                        </button>
                      </div>
                    </div>

                    <div className="h-full min-h-[400px] flex items-center justify-center bg-white/[0.01] border border-white/5 p-12 relative overflow-hidden">
                      <AnimatePresence mode="wait">
                        {lore ? (
                          <motion.div key="lore" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="w-full">
                            <Book className="text-gold/5 w-32 h-32 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                            <span className="text-gold font-headline text-2xl italic mb-10 block border-b border-gold/10 pb-6">Révélation</span>
                            <div className="max-h-[350px] overflow-y-auto pr-6 custom-scrollbar">
                              <p className="text-silver/60 leading-loose font-body text-xs italic">
                                {lore}
                              </p>
                            </div>
                          </motion.div>
                        ) : (
                          <div className="text-center opacity-10">
                            <ScrollText className="w-20 h-20 mx-auto mb-8" />
                            <p className="text-[10px] tracking-[0.6em] uppercase">Fragment Perdu</p>
                          </div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </section>
      </div>

      {/* Footer Protocole Doré */}
      <footer className="h-12 border-t border-gold/10 flex items-center justify-center bg-black/60 relative z-20">
        <span className="text-[9px] text-gold tracking-[0.8em] uppercase font-bold">
          OUTLAND STUDIOS — PROTOCOLE ASGARM V2.0.9
        </span>
      </footer>
    </main>
  )
}
