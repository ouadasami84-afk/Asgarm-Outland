
"use client"

import React, { forwardRef, useState, useEffect, useRef } from 'react'
import dynamic from 'next/dynamic'
import { Navigation } from '@/components/Navigation'
import { Loader2, ChevronRight, ChevronLeft, Sparkles } from 'lucide-react'
import { generateMagicalLore } from '@/ai/flows/generate-magical-lore-flow'
import { motion, AnimatePresence } from 'framer-motion'

// Importation dynamique pour éviter les erreurs SSR
const HTMLFlipBook = dynamic(() => import('react-pageflip'), { 
  ssr: false,
  loading: () => (
    <div className="w-[600px] h-[800px] flex flex-col items-center justify-center">
      <Loader2 className="w-12 h-12 animate-spin text-gold/20 mb-6" />
      <span className="text-gold/20 text-[10px] tracking-[0.8em] uppercase font-bold text-glow-gold">Infiltration du Grimoire...</span>
    </div>
  )
})

const Page = forwardRef<HTMLDivElement, { children: React.ReactNode; number?: number }>(
  ({ children, number }, ref) => (
    <div className="page" ref={ref}>
      <div className="page-content">
        {/* Ornements de coins de page gravés en or bruni */}
        <div className="absolute inset-0 pointer-events-none p-8">
          <div className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-[#4a3721]/15 rounded-tl-sm" />
          <div className="absolute top-8 right-8 w-16 h-16 border-t-2 border-r-2 border-[#4a3721]/15 rounded-tr-sm" />
          <div className="absolute bottom-8 left-8 w-16 h-16 border-b-2 border-l-2 border-[#4a3721]/15 rounded-bl-sm" />
          <div className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-[#4a3721]/15 rounded-br-sm" />
        </div>

        {/* Contenu avec animation d'apparition magique */}
        <motion.div 
          initial={{ opacity: 0, y: 10, filter: 'blur(5px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="page-inner-content relative z-10 flex flex-col h-full"
        >
          {children}
          {number && (
            <div className="page-footer font-serif italic text-[#4a3721]/30 text-[10px] tracking-[0.6em] mt-auto pt-8 text-center border-t border-[#4a3721]/5">
              — {number} —
            </div>
          )}
        </motion.div>
      </div>
    </div>
  )
)
Page.displayName = 'Page'

export default function HistoirePage() {
  const [traits, setTraits] = useState('')
  const [lore, setLore] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [isClient, setIsClient] = useState(false)
  const bookRef = useRef<any>(null)

  useEffect(() => {
    setIsClient(true)
  }, [])

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

  if (!isClient) return null

  return (
    <main className="relative min-h-screen flex flex-col overflow-hidden bg-transparent">
      <Navigation />
      
      {/* Halo d'Éther Pulsant derrière le Grimoire */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-gold/[0.03] blur-[150px] rounded-full pointer-events-none z-0 animate-pulse" />
      
      <div className="flex-1 flex flex-col items-center justify-center p-6 pt-24 pb-12 relative z-10">
        
        {/* Préambule Royal */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-center mb-10 max-w-4xl"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-[1px] w-12 bg-gold/20" />
            <span className="text-gold text-[9px] tracking-[1.2em] uppercase font-bold text-glow-gold">Archives Souveraines</span>
            <div className="h-[1px] w-12 bg-gold/20" />
          </div>
          <h1 className="text-4xl md:text-5xl font-headline text-white uppercase tracking-tighter mb-4 leading-tight">
            Les Chroniques d'Asgarm
          </h1>
          <p className="text-gold/40 text-sm italic font-light tracking-widest max-w-2xl mx-auto leading-relaxed">
            "Ce grimoire contient l'essence même de notre royaume. Parcourez les siècles et découvrez les secrets de notre ascension éternelle."
          </p>
        </motion.div>

        {/* Le Grimoire de Scribe */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="relative group flex items-center justify-center"
        >
          {/* Navigation Subtile */}
          <button 
            onClick={() => bookRef.current.pageFlip().flipPrev()}
            className="absolute -left-24 top-1/2 -translate-y-1/2 p-4 text-gold/10 hover:text-gold transition-all hidden xl:block z-30"
          >
            <ChevronLeft className="w-14 h-14" />
          </button>
          <button 
            onClick={() => bookRef.current.pageFlip().flipNext()}
            className="absolute -right-24 top-1/2 -translate-y-1/2 p-4 text-gold/10 hover:text-gold transition-all hidden xl:block z-30"
          >
            <ChevronRight className="w-14 h-14" />
          </button>

          <div className="flip-book-container relative shadow-[0_60px_120px_rgba(0,0,0,1)] border-[6px] border-[#2a1a0a] rounded-sm overflow-hidden bg-[#2a1a0a]">
            <HTMLFlipBook
              width={550}
              height={750}
              size="stretch"
              minWidth={315}
              maxWidth={1000}
              minHeight={400}
              maxHeight={1533}
              maxShadowOpacity={0.7}
              showCover={false}
              mobileScrollSupport={true}
              className="flip-book"
              ref={bookRef}
              startPage={0}
              drawShadow={true}
              flippingTime={1000}
              usePortrait={false}
              startZIndex={0}
              autoSize={true}
              clickEventForward={true}
              useMouseEvents={true}
              swipeDistance={30}
              showPageCorners={true}
              disableFlipByClick={false}
            >
              {/* Page 1: L'Origine */}
              <Page number={1}>
                <div className="flex flex-col h-full">
                  <h2 className="text-2xl font-headline text-[#4a3721] uppercase tracking-[0.5em] mb-12 text-center border-b border-[#4a3721]/10 pb-6">I. La Fondation</h2>
                  <div className="prose">
                    <p className="text-[#3d2b19] first-letter:text-7xl first-letter:font-headline first-letter:mr-4 first-letter:float-left first-letter:text-[#4a3721] first-letter:leading-none font-serif leading-loose text-justify text-lg mb-8">
                      D'après les textes sacrés de l'Ether, Asgarm ne fut pas simplement bâtie sur la pierre, elle fut extraite du néant par la volonté des premiers Scribes de l'Aube. Un royaume de pure énergie, flottant entre le rêve et la réalité.
                    </p>
                    <div className="p-8 border-l-2 border-[#4a3721]/15 bg-[#4a3721]/5 my-8">
                      <p className="text-[#3d2b19] font-serif italic leading-relaxed text-justify text-md">
                        "Nous avons planté les racines de la souveraineté dans le terreau de l'éternité."
                      </p>
                    </div>
                  </div>
                </div>
              </Page>

              {/* Page 2: Gravure Antique */}
              <Page number={2}>
                <div className="flex flex-col h-full items-center justify-center space-y-8">
                  <div className="h-full w-full border border-[#4a3721]/20 bg-[#4a3721]/5 relative group overflow-hidden shadow-inner">
                    <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/asgarm-history-foundation/800/600')] bg-cover bg-center grayscale contrast-125 opacity-40 group-hover:opacity-60 transition-all duration-1000" />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#f4ecd8]/40" />
                  </div>
                  <span className="text-[#4a3721]/40 text-[9px] tracking-[0.6em] uppercase font-bold italic">
                    — Représentation du Premier Pilier —
                  </span>
                </div>
              </Page>

              {/* Page 3: L'Âge de la Lumière */}
              <Page number={3}>
                <h2 className="text-2xl font-headline text-[#4a3721] uppercase tracking-[0.5em] mb-12 text-center border-b border-[#4a3721]/10 pb-6">II. L'Éveil de l'Ether</h2>
                <div className="space-y-8">
                  <p className="text-[#3d2b19] font-serif leading-loose text-justify text-lg">
                    L'Âge d'Or vit la création des Grandes Académies. C'est durant cette période que la maîtrise de l'éther devint une science exacte, permettant aux cités de s'élever au-delà des nuages, défiant les lois terrestres.
                  </p>
                  <p className="text-[#3d2b19] font-serif leading-loose text-justify text-lg">
                    Les Archivistes rapportent que le ciel lui-même semblait répondre aux chants des mages, se teintant d'aurores boréales permanentes, signe de l'équilibre parfait entre l'homme et la magie.
                  </p>
                </div>
              </Page>

              {/* Page 4: La Fracture */}
              <Page number={4}>
                <h2 className="text-2xl font-headline text-[#4a3721] uppercase tracking-[0.5em] mb-12 text-center border-b border-[#4a3721]/10 pb-6">III. Le Cataclysme</h2>
                <div className="space-y-8">
                  <p className="text-[#3d2b19] font-serif leading-loose text-justify text-lg">
                    Tout empire connaît son hiver. Une soif de pouvoir interdite brisa le Sceau du Vide, libérant des ombres que l'on pensait disparues. Le Grand Cataclysme faillit anéantir Asgarm.
                  </p>
                  <div className="relative py-8 px-6 bg-[#2a1a0a]/5 border-y border-[#4a3721]/10">
                    <p className="text-[#4a3721] font-serif italic text-lg leading-relaxed text-center font-bold">
                      "Dans l'obscurité la plus totale, nous avons redécouvert l'étincelle de notre unité."
                    </p>
                  </div>
                </div>
              </Page>

              {/* Page 5: La Renaissance */}
              <Page number={5}>
                <h2 className="text-2xl font-headline text-[#4a3721] uppercase tracking-[0.5em] mb-12 text-center border-b border-[#4a3721]/10 pb-6">IV. L'Ère d'Outland</h2>
                <div className="space-y-8">
                  <p className="text-[#3d2b19] font-serif leading-loose text-justify text-lg">
                    Des cendres du Cataclysme naquit Outland. Une nouvelle vision, où la technologie ancestrale et la sagesse éternelle fusionnent. Le royaume fut reconstruit non pas sur le passé, mais pour l'avenir.
                  </p>
                  <div className="h-[250px] w-full border border-[#4a3721]/20 bg-[#4a3721]/5 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/asgarm-modern/800/600')] bg-cover bg-center grayscale opacity-30 group-hover:opacity-50 transition-all duration-700" />
                  </div>
                </div>
              </Page>

              {/* Page 6: Invocateur de Destin (IA Tool) */}
              <Page number={6}>
                <div className="h-full flex flex-col pt-4">
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#4a3721]/20 bg-[#4a3721]/5 mb-4">
                      <Sparkles className="w-3 h-3 text-[#4a3721]/40" />
                      <span className="text-[9px] font-bold text-[#4a3721]/60 uppercase tracking-[0.3em]">Rituel d'Accès</span>
                    </div>
                    <h2 className="text-xl font-headline text-[#4a3721] uppercase tracking-[0.4em]">Oracle d'Éther</h2>
                  </div>
                  
                  {!lore ? (
                    <div className="flex flex-col gap-8 flex-1">
                      <p className="text-[#4a3721]/70 text-sm leading-relaxed italic text-center px-4 font-serif">
                        "Énoncez vos intentions pour que les archives révèlent un fragment de votre destinée..."
                      </p>
                      <textarea
                        className="w-full flex-1 bg-black/[0.03] border border-[#4a3721]/15 p-6 text-[#3d2b19] focus:border-[#4a3721]/30 outline-none resize-none font-serif text-lg leading-relaxed shadow-inner placeholder-[#4a3721]/20"
                        placeholder="Une vision de mon ascension..."
                        value={traits}
                        onChange={(e) => setTraits(e.target.value)}
                      />
                      <button
                        onClick={handleWeave}
                        disabled={loading || !traits.trim()}
                        className="w-full py-6 bg-[#2a1a0a] text-gold font-bold uppercase tracking-[0.8em] text-[10px] flex items-center justify-center gap-4 hover:bg-[#1a0f05] transition-all disabled:opacity-20 border border-gold/10 group/btn"
                      >
                        {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : "TISSER LE DESTIN"}
                      </button>
                    </div>
                  ) : (
                    <div className="flex flex-col h-full">
                      <div className="flex-1 overflow-y-auto pr-4 custom-scrollbar mb-6">
                        <p className="text-[#3d2b19] text-md leading-loose italic font-serif opacity-90 text-justify border-l border-[#4a3721]/10 pl-6">
                          {lore}
                        </p>
                      </div>
                      <button 
                        onClick={() => { setLore(null); setTraits(''); }}
                        className="mt-auto py-4 text-[#4a3721] text-[9px] uppercase tracking-[0.8em] font-bold border-t border-[#4a3721]/10 hover:opacity-50 transition-all text-center w-full"
                      >
                        RETOURNER AUX ANNALES
                      </button>
                    </div>
                  )}
                </div>
              </Page>
            </HTMLFlipBook>
          </div>
        </motion.div>

        {/* Aide Navigation */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ delay: 2 }}
          className="mt-10 flex items-center gap-6"
        >
          <div className="h-[1px] w-12 bg-gold/20" />
          <span className="text-gold text-[8px] tracking-[0.6em] uppercase font-bold">Tournez les pages pour explorer l'histoire</span>
          <div className="h-[1px] w-12 bg-gold/20" />
        </motion.div>
      </div>

      <footer className="h-12 border-t border-gold/10 flex items-center justify-center bg-black/90 relative z-20">
        <span className="text-[9px] text-gold tracking-[1em] uppercase font-bold text-glow-gold">
          OUTLAND STUDIOS — PROTOCOLE ASGARM V2.0.9
        </span>
      </footer>

      <style jsx global>{`
        .flip-book { 
          background-color: transparent !important;
        }
        .page { 
          background-color: #f4ecd8; 
          background-image: url("https://www.transparenttextures.com/patterns/papyrus.png"); 
          height: 100%;
          width: 100%;
          box-shadow: inset 100px 0 100px -100px rgba(0,0,0,0.2), 
                      inset -100px 0 100px -100px rgba(0,0,0,0.2);
          position: relative;
        }
        .page-content { 
          padding: 4rem 3.5rem; 
          height: 100%;
          display: flex;
          flex-direction: column;
          position: relative;
        }
        .page-inner-content {
          height: 100%;
          display: flex;
          flex-direction: column;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(74, 55, 33, 0.15);
          border-radius: 10px;
        }
      `}</style>
    </main>
  )
}
