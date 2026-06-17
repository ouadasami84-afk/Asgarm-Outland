
"use client"

import React, { forwardRef, useState, useEffect, useRef } from 'react'
import dynamic from 'next/dynamic'
import { Navigation } from '@/components/Navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Loader2, ScrollText, Book as BookIcon } from 'lucide-react'
import { generateMagicalLore } from '@/ai/flows/generate-magical-lore-flow'

// Importation dynamique de react-pageflip pour éviter les erreurs SSR (Module not found/window undefined)
const HTMLFlipBook = dynamic(() => import('react-pageflip'), { 
  ssr: false,
  loading: () => (
    <div className="w-[550px] h-[750px] bg-[#05060a] border border-gold/10 flex flex-col items-center justify-center">
      <Loader2 className="w-10 h-10 animate-spin text-gold/40 mb-4" />
      <span className="text-gold/20 text-[10px] tracking-[0.5em] uppercase font-bold">Ouverture du Grimoire...</span>
    </div>
  )
})

const Page = forwardRef<HTMLDivElement, { children: React.ReactNode; number?: number }>(
  ({ children, number }, ref) => (
    <div className="page" ref={ref} data-density="hard">
      <div className="page-content">
        <div className="page-inner-content">
          {children}
          {number && (
            <div className="page-footer">
              <span className="text-gold/20 text-[10px] tracking-[0.5em] font-bold">— {number} —</span>
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

  // Ne rien rendre sur le serveur pour éviter les mismatches d'hydratation avec le flipbook
  if (!isClient) return null

  return (
    <main className="relative h-screen flex flex-col overflow-hidden bg-[#010208]">
      <Navigation />
      
      <div className="flex-1 flex flex-col items-center justify-center p-6 pt-24">
        <div className="relative group">
          {/* Navigation Controls */}
          <button 
            onClick={() => bookRef.current?.pageFlip()?.flipPrev()}
            className="absolute -left-32 top-1/2 -translate-y-1/2 p-4 text-gold/20 hover:text-gold transition-all duration-300 hidden xl:block z-50"
          >
            <ChevronLeft className="w-16 h-16" />
          </button>
          
          <button 
            onClick={() => bookRef.current?.pageFlip()?.flipNext()}
            className="absolute -right-32 top-1/2 -translate-y-1/2 p-4 text-gold/20 hover:text-gold transition-all duration-300 hidden xl:block z-50"
          >
            <ChevronRight className="w-16 h-16" />
          </button>

          {/* FlipBook - Chargé uniquement côté client */}
          <HTMLFlipBook
            width={550}
            height={750}
            size="stretch"
            minWidth={315}
            maxWidth={1000}
            minHeight={400}
            maxHeight={1533}
            maxShadowOpacity={0.5}
            showCover={true}
            mobileScrollSupport={true}
            className="flip-book shadow-[0_50px_100px_-20px_rgba(0,0,0,1)]"
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
            style={{ backgroundColor: '#010208' }}
          >
            {/* Page 1: Couverture */}
            <Page>
              <div className="h-full flex flex-col items-center justify-center text-center p-12 bg-[#05060a] border-[1px] border-gold/10 m-4">
                <div className="w-24 h-24 rounded-full border border-gold/10 flex items-center justify-center mb-12 bg-gold/5">
                  <div className="w-12 h-12 border border-gold/40 rotate-45 flex items-center justify-center">
                    <div className="w-4 h-4 bg-gold animate-pulse" />
                  </div>
                </div>
                <span className="text-gold text-[11px] tracking-[1.2em] uppercase font-bold mb-8">Le Codex Royal</span>
                <h2 className="text-5xl font-headline text-white uppercase tracking-tighter mb-10 text-glow-gold leading-tight">
                  CHRONIQUES<br/>D'ASGARM
                </h2>
                <div className="h-[1px] w-16 bg-gold/20 mb-10" />
                <p className="text-silver/40 text-sm italic font-light leading-relaxed max-w-xs font-serif">
                  "L'éternité gravée dans l'éther et la pierre."
                </p>
              </div>
            </Page>

            {/* Page 2: Préface */}
            <Page number={1}>
              <div className="p-10 h-full flex flex-col">
                <h2 className="text-3xl font-headline text-white uppercase mb-10 border-b border-gold/10 pb-6 text-left">Préface</h2>
                <p className="text-silver/60 text-lg leading-relaxed font-serif italic mb-8">
                  Depuis l'éveil du premier pilier d'éther, Asgarm se dresse comme le phare immuable de la civilisation magique. Ce grimoire est le témoin de notre ascension, de nos conquêtes et des mystères qui régissent encore notre monde.
                </p>
                <div className="mt-auto w-full h-48 bg-gold/[0.02] border border-gold/5 flex items-center justify-center">
                  <BookIcon className="w-16 h-16 text-gold/10" />
                </div>
              </div>
            </Page>

            {/* Page 3: Fondation */}
            <Page number={2}>
              <div className="p-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-[1px] w-10 bg-gold/40" />
                  <span className="text-gold text-[10px] tracking-[0.6em] uppercase font-bold">AN 0 - 250</span>
                </div>
                <h2 className="text-3xl font-headline text-white uppercase mb-10">L'Éveil</h2>
                <p className="text-silver/40 text-base italic leading-relaxed mb-10 font-serif">
                  L'émergence des courants telluriques a permis aux premiers érudits de canaliser l'énergie brute pour ériger les fondations d'Asgarm.
                </p>
                <div className="space-y-8">
                  <div className="border-l border-gold/20 pl-6">
                    <h4 className="text-white text-xs font-bold uppercase tracking-[0.3em] mb-3">Le Premier Souffle</h4>
                    <p className="text-silver/30 text-[12px] leading-relaxed italic font-serif">Découverte des nex de puissance par les mages nomades.</p>
                  </div>
                </div>
              </div>
            </Page>

            {/* Page 4: Âge d'Or */}
            <Page number={3}>
              <div className="p-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-[1px] w-10 bg-gold/40" />
                  <span className="text-gold text-[10px] tracking-[0.6em] uppercase font-bold">AN 251 - 800</span>
                </div>
                <h2 className="text-3xl font-headline text-white uppercase mb-10">L'Apogée</h2>
                <p className="text-silver/40 text-base italic leading-relaxed mb-10 font-serif">
                  Une ère de prospérité inégalée où la magie et l'architecture ont fusionné pour créer les merveilles suspendues d'Asgarm.
                </p>
                <div className="space-y-8">
                  <div className="border-l border-gold/20 pl-6">
                    <h4 className="text-white text-xs font-bold uppercase tracking-[0.3em] mb-3">L'Expansion Royale</h4>
                    <p className="text-silver/30 text-[12px] leading-relaxed italic font-serif">Établissement des grandes académies et des routes éthérées.</p>
                  </div>
                </div>
              </div>
            </Page>

            {/* Page 5: IA Tool Interaction */}
            <Page number={4}>
              <div className="p-10 h-full flex flex-col">
                <div className="flex items-center gap-3 mb-8">
                  <ScrollText className="w-5 h-5 text-gold/40" />
                  <h2 className="text-2xl font-headline text-white uppercase text-glow-gold">Invoquer l'Histoire</h2>
                </div>
                
                {!lore ? (
                  <div className="flex flex-col gap-8 flex-1">
                    <p className="text-silver/50 text-[13px] italic leading-relaxed font-serif">
                      Le grimoire est vivant. Énoncez vos intentions pour que les archives révèlent un fragment de passé oublié...
                    </p>
                    <textarea
                      className="w-full flex-1 bg-black/40 border border-gold/10 p-6 text-silver/80 focus:border-gold/30 outline-none resize-none font-serif text-[13px] italic leading-relaxed placeholder:text-silver/20"
                      placeholder="Décrivez une vision ou un événement d'Asgarm..."
                      value={traits}
                      onChange={(e) => setTraits(e.target.value)}
                    />
                    <button
                      onClick={handleWeave}
                      disabled={loading || !traits.trim()}
                      className="w-full py-5 bg-gold text-night font-bold uppercase tracking-[0.5em] text-[10px] flex items-center justify-center gap-4 hover:scale-[1.02] active:scale-95 transition-all disabled:opacity-20"
                    >
                      {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <ScrollText className="w-4 h-4" />}
                      {loading ? "INVOCATION..." : "TISSER LE DESTIN"}
                    </button>
                  </div>
                ) : (
                  <div className="flex flex-col flex-1 overflow-hidden">
                    <div className="flex-1 overflow-y-auto custom-scrollbar pr-3 mb-8">
                      <p className="text-silver/60 text-[14px] leading-[1.8] italic font-serif">
                        {lore}
                      </p>
                    </div>
                    <button 
                      onClick={() => { setLore(null); setTraits(''); }}
                      className="text-gold text-[9px] uppercase tracking-[0.4em] font-bold border-t border-gold/10 pt-6 hover:opacity-100 opacity-40 transition-opacity"
                    >
                      CONSULTER UN AUTRE FRAGMENT
                    </button>
                  </div>
                )}
              </div>
            </Page>

            {/* Page 6: Quatrième de Couverture */}
            <Page>
              <div className="h-full flex flex-col items-center justify-center bg-[#05060a] border-[1px] border-gold/10 m-4">
                <div className="text-center">
                  <div className="mb-8 opacity-20">
                    <h4 className="text-5xl font-headline text-white uppercase leading-none tracking-tighter">ASGARM</h4>
                    <h4 className="text-2xl font-headline text-white uppercase leading-none tracking-[0.5em] mt-2">CODEX</h4>
                  </div>
                  <div className="w-12 h-[1px] bg-gold/20 mx-auto mb-6" />
                  <span className="text-[10px] text-gold/30 tracking-[0.6em] uppercase font-bold">Archives Scellées</span>
                </div>
              </div>
            </Page>
          </HTMLFlipBook>
        </div>
      </div>

      <footer className="h-12 border-t border-gold/10 flex items-center justify-center bg-black/60 relative z-20">
        <span className="text-[9px] text-gold tracking-[0.8em] uppercase font-bold">
          OUTLAND STUDIOS — PROTOCOLE ASGARM V2.0.9
        </span>
      </footer>

      <style jsx global>{`
        .page {
          background-color: #05060a;
          overflow: hidden;
        }
        .page-content {
          height: 100%;
          display: flex;
          flex-direction: column;
          position: relative;
          background-image: radial-gradient(circle at center, rgba(212, 175, 55, 0.02) 0%, transparent 100%);
        }
        .page-inner-content {
          height: 100%;
          border: 1px solid rgba(212, 175, 55, 0.05);
          margin: 1.5rem;
          position: relative;
        }
        .page-footer {
          position: absolute;
          bottom: 1.5rem;
          left: 0;
          right: 0;
          text-align: center;
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
        .font-serif {
          font-family: 'Alegreya', serif;
        }
      `}</style>
    </main>
  )
}
