"use client"

import React, { forwardRef, useState, useEffect, useRef } from 'react'
import dynamic from 'next/dynamic'
import { Navigation } from '@/components/Navigation'
import { Loader2, ScrollText, Book as BookIcon, Sparkles } from 'lucide-react'
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

const Page = forwardRef<HTMLDivElement, { children: React.ReactNode; number?: number; isCover?: boolean }>(
  ({ children, number, isCover }, ref) => (
    <div className={`page ${isCover ? 'cover' : ''}`} ref={ref}>
      <div className="page-content">
        <div className="page-inner-content">
          {children}
          {number && !isCover && (
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
      
      {/* Book Halo & Particles */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-gold/5 blur-[150px] rounded-full pointer-events-none z-0 animate-pulse" />
      
      <div className="flex-1 flex flex-col items-center justify-center p-6 pt-24 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="relative"
        >
          {/* Decorative Corner Guards */}
          <div className="absolute -top-10 -left-10 w-20 h-20 border-t-2 border-l-2 border-gold/20 rounded-tl-3xl pointer-events-none" />
          <div className="absolute -bottom-10 -right-10 w-20 h-20 border-b-2 border-r-2 border-gold/20 rounded-br-3xl pointer-events-none" />
          
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
            {/* Front Cover - AAA Style */}
            <Page isCover={true}>
              <div className="h-full flex flex-col items-center justify-center text-center border-[15px] border-double border-[#3a2a18] bg-[#2a1a0a] shadow-inner p-10">
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/leather.png')] pointer-events-none" />
                
                <div className="relative mb-16">
                  <div className="w-24 h-24 border-2 border-gold rotate-45 flex items-center justify-center shadow-[0_0_30px_rgba(212,175,55,0.3)]">
                    <Sparkles className="w-10 h-10 text-gold -rotate-45" />
                  </div>
                </div>

                <h2 className="text-5xl font-headline uppercase tracking-tighter mb-6 text-gold text-glow-gold leading-none">
                  CHRONIQUES<br/>D'ASGARM
                </h2>
                
                <div className="h-[2px] w-32 bg-gradient-to-r from-transparent via-gold to-transparent mb-10" />
                
                <p className="text-gold/60 italic font-serif text-sm tracking-[0.5em] uppercase">
                  Tome Premier
                </p>
                <span className="text-gold/40 text-[9px] tracking-[0.8em] uppercase mt-4 block">
                  L'Éther Originel
                </span>
                
                <div className="mt-20 text-gold/20 text-[10px] tracking-widest uppercase animate-pulse">
                  — Touchez pour Ouvrir —
                </div>
              </div>
            </Page>

            {/* Page 1: Préface */}
            <Page number={1}>
              <div className="mb-12 flex items-center gap-6">
                <div className="h-[1px] flex-1 bg-[#4a3721]/30" />
                <h2 className="text-3xl font-headline text-[#4a3721] uppercase tracking-widest">Préface</h2>
                <div className="h-[1px] flex-1 bg-[#4a3721]/30" />
              </div>
              <p className="text-[#3d2b19] first-letter:text-7xl first-letter:font-headline first-letter:mr-4 first-letter:float-left first-letter:text-[#4a3721] first-letter:leading-none">
                Depuis l'éveil du premier pilier d'éther, Asgarm se dresse comme le phare immuable de la civilisation magique. Ce grimoire est le témoin de notre ascension, de nos conquêtes et des mystères qui régissent encore notre monde. Chaque mot ici gravé a été dicté par les flux de la conscience universelle.
              </p>
              <div className="mt-24 flex justify-center opacity-10">
                <BookIcon className="w-32 h-32 text-[#4a3721]" />
              </div>
            </Page>

            {/* Page 2: L'Éveil */}
            <Page number={2}>
              <h2 className="text-2xl font-headline mb-12 text-[#4a3721] uppercase tracking-widest text-left">L'Éveil</h2>
              <p className="text-[#3d2b19] mb-8">
                L'émergence des courants telluriques a permis aux premiers érudits de canaliser l'énergie brute pour ériger les fondations d'Asgarm. Les mages nomades découvrirent alors les premiers nex de puissance.
              </p>
              <div className="h-[200px] w-full border border-[#4a3721]/10 bg-[#4a3721]/5 flex items-center justify-center mb-8 relative group overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/asgarm-awakening/600/400')] bg-cover bg-center grayscale opacity-30 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000" />
                <span className="relative z-10 text-[#4a3721] text-[9px] tracking-[0.5em] font-bold uppercase">Illustration d'Époque</span>
              </div>
              <p className="text-[#3d2b19] italic border-l-4 border-[#4a3721]/20 pl-8 leading-loose">
                "C'est dans le silence des premières aubes que la pierre a appris à chanter la gloire des astres."
              </p>
            </Page>

            {/* Page 3: L'Apogée */}
            <Page number={3}>
              <h2 className="text-2xl font-headline mb-12 text-[#4a3721] uppercase tracking-widest text-right">L'Apogée</h2>
              <p className="text-[#3d2b19] leading-loose">
                Une ère de prospérité inégalée où la magie et l'architecture ont fusionné pour créer les merveilles suspendues d'Asgarm. Les académies royales devinrent les centres mondiaux du savoir ésotérique.
              </p>
              <p className="text-[#3d2b19] mt-10 leading-loose">
                Chaque pierre posée était imprégnée de rituels de protection, assurant la pérennité du trône pour les siècles à venir. Le ciel même semblait s'incliner devant notre puissance impériale.
              </p>
              <div className="mt-16 pt-8 border-t border-[#4a3721]/10">
                <p className="text-[#3d2b19] text-sm italic opacity-60 text-right">
                  — Extrait des Registres de la Tour d'Ivoire
                </p>
              </div>
            </Page>

            {/* Page 4: IA Tool - Invoquer l'Histoire */}
            <Page number={4}>
              <div className="h-full flex flex-col">
                <h2 className="text-xl font-headline mb-8 text-[#4a3721] uppercase tracking-[0.3em] border-b-2 border-[#4a3721]/10 pb-6 text-center">Invoquer l'Histoire</h2>
                
                {!lore ? (
                  <div className="flex flex-col gap-8">
                    <p className="text-[#3d2b19] text-base leading-relaxed italic opacity-80 text-center px-4">
                      Énoncez vos intentions pour que les archives révèlent un fragment de passé oublié...
                    </p>
                    <div className="relative">
                      <textarea
                        className="w-full h-56 bg-white/50 border-2 border-[#4a3721]/10 p-6 text-[#3d2b19] focus:border-[#4a3721]/40 outline-none resize-none font-serif text-lg leading-relaxed shadow-inner"
                        placeholder="Une vision d'Asgarm, un secret des anciens..."
                        value={traits}
                        onChange={(e) => setTraits(e.target.value)}
                      />
                      <div className="absolute top-2 right-2 opacity-10">
                        <ScrollText className="w-12 h-12 text-[#4a3721]" />
                      </div>
                    </div>
                    <button
                      onClick={handleWeave}
                      disabled={loading || !traits.trim()}
                      className="w-full py-6 bg-[#4a3721] text-[#f4ecd8] font-bold uppercase tracking-[0.5em] text-[11px] flex items-center justify-center gap-4 hover:bg-[#3d2b19] transition-all disabled:opacity-30 group shadow-[0_10px_30px_rgba(74,55,33,0.3)] hover:scale-[1.02] active:scale-95"
                    >
                      {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />}
                      {loading ? "COMMUNION..." : "TISSER LE DESTIN"}
                    </button>
                  </div>
                ) : (
                  <div className="flex flex-col h-full">
                    <div className="flex-1 overflow-y-auto pr-4 custom-scrollbar mb-6">
                      <p className="text-[#3d2b19] text-[1.2rem] leading-loose italic font-serif opacity-95 text-justify">
                        {lore}
                      </p>
                    </div>
                    <button 
                      onClick={() => { setLore(null); setTraits(''); }}
                      className="mt-auto py-4 text-[#4a3721] text-[10px] uppercase tracking-[0.6em] font-bold border-t-2 border-[#4a3721]/10 pt-6 hover:opacity-60 transition-opacity text-center w-full"
                    >
                      CONSULTER UN AUTRE FRAGMENT
                    </button>
                  </div>
                )}
              </div>
            </Page>

            {/* Back Cover */}
            <Page isCover={true}>
              <div className="h-full flex flex-col items-center justify-center bg-[#2a1a0a] border-[15px] border-double border-[#3a2a18] m-0">
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/leather.png')] pointer-events-none" />
                <div className="opacity-20 flex flex-col items-center">
                  <h4 className="text-4xl font-headline text-gold uppercase tracking-[0.8em] mb-4">ASGARM</h4>
                  <div className="w-20 h-[1px] bg-gold/50 my-10" />
                  <span className="text-[11px] text-gold tracking-[0.6em] font-bold uppercase">Chroniques Eternelles</span>
                </div>
              </div>
            </Page>
          </HTMLFlipBook>
        </motion.div>
      </div>

      <footer className="h-14 border-t border-gold/10 flex items-center justify-center bg-black/60 backdrop-blur-xl relative z-20">
        <span className="text-[10px] text-gold tracking-[1em] uppercase font-bold text-glow-gold">
          OUTLAND STUDIOS — PROTOCOLE ASGARM V2.0.9
        </span>
      </footer>

      <style jsx global>{`
        .flip-book { 
          box-shadow: 0 70px 150px -30px rgba(0, 0, 0, 0.9);
          border-radius: 8px;
        }
        .page { 
          background-color: #f4ecd8; 
          background-image: url("https://www.transparenttextures.com/patterns/papyrus.png"); 
          height: 100%;
          width: 100%;
          border-left: 1px solid rgba(0,0,0,0.1);
          box-shadow: inset 60px 0 60px -60px rgba(0,0,0,0.3);
        }
        .page.cover {
          background-color: #2a1a0a;
          background-image: none;
          border-left: none;
          box-shadow: none;
        }
        .page-content { 
          padding: 5rem 4rem; 
          height: 100%;
          display: flex;
          flex-direction: column;
        }
        .page-inner-content {
          height: 100%;
          display: flex;
          flex-direction: column;
        }
        .page-footer {
          margin-top: auto;
          text-align: center;
          font-family: 'Belleza', sans-serif;
          font-size: 13px;
          color: #4a3721;
          opacity: 0.5;
          padding-top: 2rem;
          letter-spacing: 0.3em;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(74, 55, 33, 0.05);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(74, 55, 33, 0.2);
          border-radius: 10px;
        }
      `}</style>
    </main>
  )
}
