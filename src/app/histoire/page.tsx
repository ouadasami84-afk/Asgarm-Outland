
"use client"

import React, { forwardRef, useState, useEffect, useRef } from 'react'
import dynamic from 'next/dynamic'
import { Navigation } from '@/components/Navigation'
import { Loader2, BookOpen, ChevronRight, ChevronLeft } from 'lucide-react'
import { generateMagicalLore } from '@/ai/flows/generate-magical-lore-flow'
import { motion, AnimatePresence } from 'framer-motion'

// Importation dynamique pour éviter les erreurs SSR
const HTMLFlipBook = dynamic(() => import('react-pageflip'), { 
  ssr: false,
  loading: () => (
    <div className="w-[600px] h-[800px] bg-[#1a0f05]/80 backdrop-blur-xl flex flex-col items-center justify-center border border-gold/10 rounded-lg shadow-2xl">
      <Loader2 className="w-12 h-12 animate-spin text-gold/20 mb-6" />
      <span className="text-gold/20 text-[10px] tracking-[0.8em] uppercase font-bold text-glow-gold">Invoquant les Annales...</span>
    </div>
  )
})

const Page = forwardRef<HTMLDivElement, { children: React.ReactNode; number?: number }>(
  ({ children, number }, ref) => (
    <div className="page" ref={ref}>
      <div className="page-content">
        {/* Ornements de coins de page */}
        <div className="absolute inset-0 pointer-events-none p-10">
          <div className="absolute top-10 left-10 w-24 h-24 border-t-2 border-l-2 border-[#4a3721]/10 rounded-tl-[40px]" />
          <div className="absolute top-10 right-10 w-24 h-24 border-t-2 border-r-2 border-[#4a3721]/10 rounded-tr-[40px]" />
          <div className="absolute bottom-20 left-10 w-24 h-24 border-b-2 border-l-2 border-[#4a3721]/10 rounded-bl-[40px]" />
          <div className="absolute bottom-20 right-10 w-24 h-24 border-b-2 border-r-2 border-[#4a3721]/10 rounded-br-[40px]" />
        </div>
        <div className="page-inner-content relative z-10">
          {children}
          {number && (
            <div className="page-footer font-serif italic text-[#4a3721]/30 text-xs tracking-[0.6em] mt-auto pt-12 text-center border-t border-[#4a3721]/5">
              — {number} —
            </div>
          )}
        </div>
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
      
      {/* Halo d'Éther derrière le livre */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-gold/[0.03] blur-[200px] rounded-full pointer-events-none z-0 animate-pulse" />
      
      <div className="flex-1 flex flex-col items-center justify-center p-6 pt-32 pb-16 relative z-10">
        
        {/* En-tête de la page */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-center mb-16 max-w-3xl"
        >
          <div className="flex items-center justify-center gap-6 mb-6">
            <div className="h-[1px] w-16 bg-gold/20" />
            <span className="text-gold text-[10px] tracking-[1.2em] uppercase font-bold text-glow-gold">Chroniques Éternelles</span>
            <div className="h-[1px] w-16 bg-gold/20" />
          </div>
          <h1 className="text-5xl md:text-7xl font-headline text-white uppercase tracking-tighter mb-8 leading-tight">
            Les Annales d'Asgarm
          </h1>
          <p className="text-gold/60 text-lg italic font-light tracking-wide max-w-2xl mx-auto leading-relaxed border-b border-gold/10 pb-8">
            "Le savoir est une flamme qui ne s'éteint jamais. <br /> Tournez les pages de ce grimoire pour voyager à travers les époques."
          </p>
        </motion.div>

        {/* Le Grimoire */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="relative group"
        >
          {/* Indicateurs de navigation subtils */}
          <div className="absolute -left-16 top-1/2 -translate-y-1/2 text-gold/20 hidden lg:block group-hover:text-gold/40 transition-colors">
            <ChevronLeft className="w-10 h-10 animate-pulse" />
          </div>
          <div className="absolute -right-16 top-1/2 -translate-y-1/2 text-gold/20 hidden lg:block group-hover:text-gold/40 transition-colors">
            <ChevronRight className="w-10 h-10 animate-pulse" />
          </div>

          <HTMLFlipBook
            width={600}
            height={820}
            size="stretch"
            minWidth={315}
            maxWidth={1000}
            minHeight={400}
            maxHeight={1533}
            maxShadowOpacity={0.7}
            showCover={false}
            mobileScrollSupport={true}
            className="flip-book shadow-[0_100px_200px_rgba(0,0,0,0.95)]"
            ref={bookRef}
            startPage={0}
            drawShadow={true}
            flippingTime={1200}
            usePortrait={false}
            startZIndex={0}
            autoSize={true}
            clickEventForward={true}
            useMouseEvents={true}
            swipeDistance={30}
            showPageCorners={true}
            disableFlipByClick={false}
          >
            {/* Page 1: Préface de Scribe */}
            <Page number={1}>
              <div className="mb-24 flex items-center gap-10">
                <div className="h-[1px] flex-1 bg-[#4a3721]/20" />
                <h2 className="text-3xl font-headline text-[#4a3721] uppercase tracking-[0.6em]">Préface</h2>
                <div className="h-[1px] flex-1 bg-[#4a3721]/20" />
              </div>
              <div className="prose prose-stone">
                <p className="text-[#3d2b19] first-letter:text-9xl first-letter:font-headline first-letter:mr-8 first-letter:float-left first-letter:text-[#4a3721] first-letter:leading-[0.75] font-serif leading-[1.8] text-justify text-2xl">
                  D'après les textes sacrés de l'Ether, Asgarm ne fut pas bâtie, elle fut invoquée. Ce grimoire contient la somme des connaissances éternelles, le récit de notre ascension et les lois immuables qui régissent notre monde. Chaque citoyen est le gardien de cette mémoire sacrée.
                </p>
                <div className="mt-16 p-10 border-l-4 border-[#4a3721]/15 bg-[#4a3721]/5">
                  <p className="text-[#3d2b19] font-serif italic leading-relaxed text-justify text-xl">
                    "Le temps n'est qu'un fleuve dont nous avons appris à détourner le cours. La souveraineté n'est pas un titre, c'est une responsabilité gravée dans l'âme."
                  </p>
                </div>
              </div>
            </Page>

            {/* Page 2: La Genèse */}
            <Page number={2}>
              <h2 className="text-2xl font-headline mb-16 text-[#4a3721] uppercase tracking-[0.4em] border-b border-[#4a3721]/10 pb-10 text-center">I. La Fondation</h2>
              <div className="space-y-12">
                <p className="text-[#3d2b19] font-serif leading-loose text-justify text-2xl">
                  Au commencement, les Scribes de l'Aube ont canalisé les premiers flux d'éther pur pour ériger le Grand Pilier. C'est autour de cette source d'énergie infinie que les quartiers d'Asgarm ont pris racine, défiant les lois de la gravité.
                </p>
                <div className="h-[350px] w-full border-2 border-[#4a3721]/20 bg-[#4a3721]/5 relative group overflow-hidden shadow-inner">
                  <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/asgarm-history-foundation/800/600')] bg-cover bg-center grayscale contrast-125 opacity-40 group-hover:grayscale-0 group-hover:opacity-60 transition-all duration-[2000ms]" />
                  <div className="absolute inset-0 border-[24px] border-[#f4ecd8]/60 pointer-events-none" />
                </div>
                <p className="text-[#4a3721]/50 text-[11px] tracking-[0.8em] uppercase text-center font-bold italic">
                  — Gravure du Premier Pilier —
                </p>
              </div>
            </Page>

            {/* Page 3: L'Âge de l'Éther */}
            <Page number={3}>
              <h2 className="text-2xl font-headline mb-16 text-[#4a3721] uppercase tracking-[0.4em] border-b border-[#4a3721]/10 pb-10 text-center">II. L'Âge d'Or</h2>
              <div className="prose prose-stone space-y-12">
                <p className="text-[#3d2b19] font-serif leading-loose text-justify text-2xl">
                  Une période de prospérité inégalée où les cités volantes flottaient au-dessus des plaines d'éther. Les Académies formèrent les plus grands maîtres, dont les noms résonnent encore dans les couloirs du palais royal.
                </p>
                <div className="p-12 bg-black/[0.02] border border-[#4a3721]/10 rounded-sm">
                  <p className="text-[#3d2b19] font-serif leading-loose text-justify text-2xl italic">
                    "Nous avons appris à murmurer aux étoiles, et elles nous ont répondu par la lumière de la connaissance éternelle. La magie n'était plus un outil, mais un souffle."
                  </p>
                </div>
                <div className="h-[200px] w-full bg-[#4a3721]/5 border border-[#4a3721]/10 flex items-center justify-center opacity-30">
                   <div className="w-20 h-20 border-2 border-[#4a3721]/40 rotate-45 flex items-center justify-center">
                      <div className="w-10 h-10 border border-[#4a3721]/30 rotate-45" />
                   </div>
                </div>
              </div>
            </Page>

            {/* Page 4: L'Épreuve */}
            <Page number={4}>
              <h2 className="text-2xl font-headline mb-16 text-[#4a3721] uppercase tracking-[0.4em] border-b border-[#4a3721]/10 pb-10 text-center">III. Le Cataclysme</h2>
              <div className="space-y-16">
                <p className="text-[#3d2b19] font-serif leading-loose text-justify text-2xl">
                  Toute ascension connaît ses épreuves. Le Grand Cataclysme faillit déchirer le voile de la réalité. C'est par le sacrifice ultime des Hauts Conseillers que l'équilibre fut maintenu, scellant les forces obscures.
                </p>
                <div className="relative py-12 px-10 bg-[#2a1a0a]/5 border-y-2 border-[#4a3721]/15">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#f4ecd8] px-4">
                    <BookOpen className="w-6 h-6 text-[#4a3721]/40" />
                  </div>
                  <p className="text-[#4a3721] font-serif italic text-2xl leading-relaxed text-center font-bold">
                    "Dans les cendres du passé, nous avons forgé les chaînes de notre sécurité future."
                  </p>
                </div>
                <p className="text-[#3d2b19] font-serif leading-loose text-justify text-2xl">
                  Les archives mentionnent une "fracture de l'âme" qui permit la création des premiers Protecteurs.
                </p>
              </div>
            </Page>

            {/* Page 5: L'Ère d'Outland */}
            <Page number={5}>
              <h2 className="text-2xl font-headline mb-16 text-[#4a3721] uppercase tracking-[0.4em] border-b border-[#4a3721]/10 pb-10 text-center">IV. La Renaissance</h2>
              <div className="prose prose-stone space-y-12">
                <p className="text-[#3d2b19] font-serif leading-loose text-justify text-2xl">
                  Aujourd'hui, Asgarm se dresse plus forte que jamais. L'alliance entre la technologie éthérée et la magie ancestrale a permis la création d'Outland, le sanctuaire ultime pour les élus du destin.
                </p>
                <div className="h-[350px] w-full border-2 border-[#4a3721]/20 bg-[#4a3721]/5 relative overflow-hidden group shadow-2xl">
                  <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/asgarm-modern/800/600')] bg-cover bg-center grayscale opacity-40 group-hover:opacity-70 transition-opacity duration-1000" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#f4ecd8]/40 to-transparent" />
                </div>
                <p className="text-[#4a3721]/60 text-[11px] tracking-[0.6em] uppercase text-center font-bold italic">
                  — Outland : La Vision Moderne —
                </p>
              </div>
            </Page>

            {/* Page 6: IA Tool - Invocateur de Destinée */}
            <Page number={6}>
              <div className="h-full flex flex-col">
                <div className="mb-16 text-center">
                  <div className="inline-block px-4 py-1 border border-[#4a3721]/20 bg-[#4a3721]/5 mb-6">
                    <span className="text-[10px] font-bold text-[#4a3721]/60 uppercase tracking-[0.4em]">Rituel d'Accès</span>
                  </div>
                  <h2 className="text-3xl font-headline text-[#4a3721] uppercase tracking-[0.8em] mb-4">L'Oracle d'Éther</h2>
                  <div className="h-[1px] w-32 bg-[#4a3721]/20 mx-auto" />
                </div>
                
                {!lore ? (
                  <div className="flex flex-col gap-14">
                    <p className="text-[#4a3721]/80 text-xl leading-relaxed italic text-center px-10 font-serif">
                      "Énoncez vos intentions, Voyageur, pour que les archives révèlent un fragment de votre destinée dans ce royaume..."
                    </p>
                    <div className="relative">
                      <textarea
                        className="w-full h-80 bg-black/[0.02] border-2 border-[#4a3721]/15 p-12 text-[#3d2b19] focus:border-[#4a3721]/40 outline-none resize-none font-serif text-2xl leading-relaxed shadow-[inset_0_0_40px_rgba(74,55,33,0.08)] placeholder-[#4a3721]/25"
                        placeholder="Une vision de mon ascension, un secret des anciens..."
                        value={traits}
                        onChange={(e) => setTraits(e.target.value)}
                      />
                    </div>
                    <button
                      onClick={handleWeave}
                      disabled={loading || !traits.trim()}
                      className="w-full py-12 bg-[#2a1a0a] text-gold font-bold uppercase tracking-[1em] text-[12px] flex items-center justify-center gap-10 hover:bg-[#1a0f05] transition-all duration-700 disabled:opacity-20 shadow-[0_30px_60px_rgba(0,0,0,0.5)] border border-gold/20 group/btn"
                    >
                      {loading ? (
                        <Loader2 className="w-6 h-6 animate-spin text-gold" />
                      ) : (
                        <>
                          <div className="h-[1px] w-8 bg-gold/40 group-hover/btn:w-12 transition-all" />
                          TISSER LE DESTIN
                          <div className="h-[1px] w-8 bg-gold/40 group-hover/btn:w-12 transition-all" />
                        </>
                      )}
                    </button>
                  </div>
                ) : (
                  <div className="flex flex-col h-full">
                    <div className="flex-1 overflow-y-auto pr-10 custom-scrollbar mb-12">
                      <p className="text-[#3d2b19] text-[1.5rem] leading-loose italic font-serif opacity-95 text-justify border-l-2 border-[#4a3721]/10 pl-10">
                        {lore}
                      </p>
                    </div>
                    <button 
                      onClick={() => { setLore(null); setTraits(''); }}
                      className="mt-auto py-10 text-[#4a3721] text-[11px] uppercase tracking-[1.2em] font-bold border-t border-[#4a3721]/15 pt-12 hover:opacity-50 transition-all text-center w-full"
                    >
                      RETOURNER AUX ANNALES
                    </button>
                  </div>
                )}
              </div>
            </Page>
          </HTMLFlipBook>
        </motion.div>
      </div>

      <footer className="h-20 border-t border-gold/10 flex items-center justify-center bg-black/90 backdrop-blur-3xl relative z-20">
        <span className="text-[11px] text-gold tracking-[1.6em] uppercase font-bold text-glow-gold">
          OUTLAND STUDIOS — PROTOCOLE ASGARM V2.0.9
        </span>
      </footer>

      <style jsx global>{`
        .flip-book { 
          border-radius: 8px;
        }
        .page { 
          background-color: #f4ecd8; 
          background-image: url("https://www.transparenttextures.com/patterns/papyrus.png"); 
          height: 100%;
          width: 100%;
          box-shadow: inset 80px 0 80px -80px rgba(0,0,0,0.25), 
                      inset -80px 0 80px -80px rgba(0,0,0,0.25);
          position: relative;
        }
        .page-content { 
          padding: 8rem 7rem; 
          height: 100%;
          display: flex;
          flex-direction: column;
          position: relative;
        }
        .page-inner-content {
          height: 100%;
          display: flex;
          flex-direction: column;
          z-index: 20;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(74, 55, 33, 0.05);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(74, 55, 33, 0.2);
          border-radius: 20px;
        }
      `}</style>
    </main>
  )
}
