
"use client"

import React, { forwardRef, useState, useEffect, useRef } from 'react'
import dynamic from 'next/dynamic'
import { Navigation } from '@/components/Navigation'
import { Loader2, ScrollText, Book as BookIcon } from 'lucide-react'
import { generateMagicalLore } from '@/ai/flows/generate-magical-lore-flow'
import { motion, AnimatePresence } from 'framer-motion'

// Importation dynamique de react-pageflip pour le support client-side uniquement
const HTMLFlipBook = dynamic(() => import('react-pageflip'), { 
  ssr: false,
  loading: () => (
    <div className="w-[550px] h-[750px] bg-[#1a0f05] flex flex-col items-center justify-center border border-gold/10">
      <Loader2 className="w-10 h-10 animate-spin text-gold/40 mb-4" />
      <span className="text-gold/20 text-[10px] tracking-[0.5em] uppercase font-bold">Inspiration des Archives...</span>
    </div>
  )
})

const Page = forwardRef<HTMLDivElement, { children: React.ReactNode; number?: number }>(
  ({ children, number }, ref) => (
    <div className="page" ref={ref}>
      <div className="page-content">
        <div className="page-inner-content">
          {children}
          {number && (
            <div className="page-footer">
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
    <main className="relative h-screen flex flex-col overflow-hidden bg-transparent">
      <Navigation />
      
      {/* Halo de Lumière derrière le livre */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 blur-[120px] rounded-full pointer-events-none z-0" />
      
      <div className="flex-1 flex flex-col items-center justify-center p-6 pt-24 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative"
        >
          {/* Bordure de protection du livre */}
          <div className="absolute -inset-4 border border-gold/5 rounded-sm pointer-events-none" />
          
          <HTMLFlipBook
            width={550}
            height={750}
            size="stretch"
            minWidth={315}
            maxWidth={1000}
            minHeight={400}
            maxHeight={1533}
            maxShadowOpacity={0.6}
            showCover={true}
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
            {/* Couverture */}
            <Page>
              <div className="h-full flex flex-col items-center justify-center text-center border-[12px] border-double border-[#4a3721]/10 m-4">
                <div className="w-20 h-20 border-2 border-[#4a3721] rotate-45 flex items-center justify-center mb-12">
                  <div className="w-10 h-10 border border-[#4a3721] flex items-center justify-center">
                    <div className="w-2 h-2 bg-[#4a3721]" />
                  </div>
                </div>
                <h2 className="text-4xl font-headline uppercase tracking-tighter mb-4 text-[#4a3721] leading-tight">
                  CHRONIQUES<br/>D'ASGARM
                </h2>
                <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-[#4a3721]/40 to-transparent mb-8" />
                <p className="text-[#3d2b19] italic font-serif text-sm tracking-widest uppercase opacity-60">
                  Tome Premier — L'Éther Originel
                </p>
              </div>
            </Page>

            {/* Page 1: Préface */}
            <Page number={1}>
              <div className="mb-10 flex items-center gap-4">
                <div className="h-[1px] flex-1 bg-[#4a3721]/20" />
                <h2 className="text-2xl font-headline text-[#4a3721] uppercase tracking-widest">Préface</h2>
                <div className="h-[1px] flex-1 bg-[#4a3721]/20" />
              </div>
              <p className="text-[#3d2b19] first-letter:text-5xl first-letter:font-headline first-letter:mr-3 first-letter:float-left first-letter:text-[#4a3721]">
                Depuis l'éveil du premier pilier d'éther, Asgarm se dresse comme le phare immuable de la civilisation magique. Ce grimoire est le témoin de notre ascension, de nos conquêtes et des mystères qui régissent encore notre monde. Chaque mot ici gravé a été dicté par les flux de la conscience universelle.
              </p>
              <div className="mt-20 flex justify-center opacity-5">
                <BookIcon className="w-32 h-32 text-[#4a3721]" />
              </div>
            </Page>

            {/* Page 2: L'Éveil */}
            <Page number={2}>
              <h2 className="text-2xl font-headline mb-10 text-[#4a3721] uppercase tracking-widest text-left">L'Éveil</h2>
              <p className="text-[#3d2b19]">
                L'émergence des courants telluriques a permis aux premiers érudits de canaliser l'énergie brute pour ériger les fondations d'Asgarm. Les mages nomades découvrirent alors les premiers nex de puissance.
              </p>
              <p className="text-[#3d2b19] mt-8 italic border-l-2 border-[#4a3721]/10 pl-6 leading-relaxed">
                "C'est dans le silence des premières aubes que la pierre a appris à chanter la gloire des astres."
              </p>
            </Page>

            {/* Page 3: L'Apogée */}
            <Page number={3}>
              <h2 className="text-2xl font-headline mb-10 text-[#4a3721] uppercase tracking-widest text-right">L'Apogée</h2>
              <p className="text-[#3d2b19]">
                Une ère de prospérité inégalée où la magie et l'architecture ont fusionné pour créer les merveilles suspendues d'Asgarm. Les académies royales devinrent les centres mondiaux du savoir ésotérique.
              </p>
              <p className="text-[#3d2b19] mt-6 leading-relaxed">
                Chaque pierre posée était imprégnée de rituels de protection, assurant la pérennité du trône pour les siècles à venir. Le ciel même semblait s'incliner devant notre puissance.
              </p>
            </Page>

            {/* Page 4: IA Tool */}
            <Page number={4}>
              <h2 className="text-xl font-headline mb-8 text-[#4a3721] uppercase tracking-[0.2em] border-b border-[#4a3721]/10 pb-4">Invoquer l'Histoire</h2>
              {!lore ? (
                <div className="flex flex-col gap-6">
                  <p className="text-[#3d2b19] text-sm leading-relaxed italic opacity-80">
                    Énoncez vos intentions pour que les archives révèlent un fragment de passé oublié...
                  </p>
                  <textarea
                    className="w-full h-44 bg-white/40 border border-[#4a3721]/10 p-5 text-[#3d2b19] focus:border-[#4a3721]/30 outline-none resize-none font-serif text-sm leading-relaxed"
                    placeholder="Une vision d'Asgarm, un secret des anciens..."
                    value={traits}
                    onChange={(e) => setTraits(e.target.value)}
                  />
                  <button
                    onClick={handleWeave}
                    disabled={loading || !traits.trim()}
                    className="w-full py-5 bg-[#4a3721] text-[#f4ecd8] font-bold uppercase tracking-[0.4em] text-[10px] flex items-center justify-center gap-3 hover:bg-[#3d2b19] transition-all disabled:opacity-30 group shadow-lg"
                  >
                    {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <ScrollText className="w-4 h-4 group-hover:scale-110 transition-transform" />}
                    {loading ? "COMMUNION..." : "TISSER LE DESTIN"}
                  </button>
                </div>
              ) : (
                <div className="flex flex-col h-full">
                  <div className="flex-1 overflow-y-auto pr-3 custom-scrollbar">
                    <p className="text-[#3d2b19] text-[1.1rem] leading-loose italic font-serif opacity-90">
                      {lore}
                    </p>
                  </div>
                  <button 
                    onClick={() => { setLore(null); setTraits(''); }}
                    className="mt-6 text-[#4a3721] text-[9px] uppercase tracking-[0.5em] font-bold border-t border-[#4a3721]/10 pt-5 hover:opacity-60 transition-opacity"
                  >
                    CONSULTER UN AUTRE FRAGMENT
                  </button>
                </div>
              )}
            </Page>

            {/* Page 5: Fin */}
            <Page>
              <div className="h-full flex flex-col items-center justify-center opacity-20 border border-[#4a3721]/5 m-8">
                <h4 className="text-3xl font-headline text-[#4a3721] uppercase tracking-[0.6em] mb-2">ASGARM</h4>
                <div className="w-16 h-[1px] bg-[#4a3721]/40 my-8" />
                <span className="text-[10px] text-[#4a3721] tracking-[0.4em] font-bold uppercase">Chroniques Eternelles</span>
              </div>
            </Page>
          </HTMLFlipBook>
        </motion.div>
      </div>

      <footer className="h-12 border-t border-gold/10 flex items-center justify-center bg-black/40 backdrop-blur-md relative z-20">
        <span className="text-[9px] text-gold tracking-[0.8em] uppercase font-bold text-glow-gold">
          OUTLAND STUDIOS — PROTOCOLE ASGARM V2.0.9
        </span>
      </footer>

      <style jsx global>{`
        .flip-book { 
          box-shadow: 0 50px 100px -20px rgba(0, 0, 0, 0.8), 0 30px 60px -30px rgba(0, 0, 0, 0.9);
          background-color: #2a1a0a; 
          border-radius: 4px;
        }
        .page { 
          background-color: #f4ecd8; 
          background-image: url("https://www.transparenttextures.com/patterns/papyrus.png"); 
          height: 100%;
          width: 100%;
          border-left: 1px solid rgba(0,0,0,0.1);
          box-shadow: inset 50px 0 50px -50px rgba(0,0,0,0.2);
        }
        .page-content { 
          padding: 4rem 3.5rem; 
          height: 100%;
          display: flex;
          flex-direction: column;
        }
        .page-inner-content {
          height: 100%;
          display: flex;
          flex-direction: column;
        }
        .page-content h2 { 
          font-family: 'Belleza', sans-serif; 
          color: #4a3721; 
        }
        .page-content p { 
          font-family: 'Alegreya', serif; 
          font-size: 1.15rem; 
          line-height: 1.8; 
          color: #3d2b19; 
          text-align: justify;
        }
        .page-footer {
          margin-top: auto;
          text-align: center;
          font-family: 'Belleza', sans-serif;
          font-size: 11px;
          color: #4a3721;
          opacity: 0.4;
          padding-top: 1.5rem;
          letter-spacing: 0.2em;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(74, 55, 33, 0.03);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(74, 55, 33, 0.15);
        }
      `}</style>
    </main>
  )
}
