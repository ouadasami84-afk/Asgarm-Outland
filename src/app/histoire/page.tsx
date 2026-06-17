
"use client"

import React, { forwardRef, useState, useEffect, useRef } from 'react'
import dynamic from 'next/dynamic'
import { Navigation } from '@/components/Navigation'
import { Loader2, ScrollText, Book as BookIcon } from 'lucide-react'
import { generateMagicalLore } from '@/ai/flows/generate-magical-lore-flow'

// Importation dynamique de react-pageflip pour le support client-side uniquement
const HTMLFlipBook = dynamic(() => import('react-pageflip'), { 
  ssr: false,
  loading: () => (
    <div className="w-[550px] h-[750px] bg-[#2a1a0a] flex flex-col items-center justify-center">
      <Loader2 className="w-10 h-10 animate-spin text-gold/40 mb-4" />
      <span className="text-white/20 text-[10px] tracking-[0.5em] uppercase font-bold">Ouverture du Grimoire...</span>
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
    <main className="relative h-screen flex flex-col overflow-hidden bg-[#010208]">
      <Navigation />
      
      <div className="flex-1 flex flex-col items-center justify-center p-6 pt-24">
        <div className="relative">
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
              <div className="h-full flex flex-col items-center justify-center text-center">
                <div className="w-20 h-20 border-2 border-[#4a3721] rotate-45 flex items-center justify-center mb-12">
                  <div className="w-10 h-10 border border-[#4a3721] flex items-center justify-center">
                    <div className="w-2 h-2 bg-[#4a3721]" />
                  </div>
                </div>
                <h2 className="text-4xl font-headline uppercase tracking-tighter mb-4 text-[#4a3721]">
                  CHRONIQUES<br/>D'ASGARM
                </h2>
                <div className="h-[2px] w-16 bg-[#4a3721]/20 mb-8" />
                <p className="text-[#3d2b19] italic font-serif text-center">
                  "L'éternité gravée dans l'éther et la pierre."
                </p>
              </div>
            </Page>

            {/* Page 1: Préface */}
            <Page number={1}>
              <h2 className="text-3xl font-headline mb-10 text-[#4a3721]">Préface</h2>
              <p className="text-[#3d2b19]">
                Depuis l'éveil du premier pilier d'éther, Asgarm se dresse comme le phare immuable de la civilisation magique. Ce grimoire est le témoin de notre ascension, de nos conquêtes et des mystères qui régissent encore notre monde.
              </p>
              <div className="mt-12 flex justify-center opacity-10">
                <BookIcon className="w-24 h-24 text-[#4a3721]" />
              </div>
            </Page>

            {/* Page 2: L'Éveil */}
            <Page number={2}>
              <h2 className="text-3xl font-headline mb-10 text-[#4a3721]">L'Éveil</h2>
              <p className="text-[#3d2b19]">
                L'émergence des courants telluriques a permis aux premiers érudits de canaliser l'énergie brute pour ériger les fondations d'Asgarm. Les mages nomades découvrirent alors les premiers nex de puissance.
              </p>
              <p className="text-[#3d2b19] mt-6 italic">
                C'est ici que l'histoire commença, sous le regard des astres éternels.
              </p>
            </Page>

            {/* Page 3: L'Apogée */}
            <Page number={3}>
              <h2 className="text-3xl font-headline mb-10 text-[#4a3721]">L'Apogée</h2>
              <p className="text-[#3d2b19]">
                Une ère de prospérité inégalée où la magie et l'architecture ont fusionné pour créer les merveilles suspendues d'Asgarm. Les académies royales devinrent les centres mondiaux du savoir ésotérique.
              </p>
              <p className="text-[#3d2b19] mt-6">
                Chaque pierre posée était imprégnée de rituels de protection, assurant la pérennité du trône pour les siècles à venir.
              </p>
            </Page>

            {/* Page 4: IA Tool */}
            <Page number={4}>
              <h2 className="text-2xl font-headline mb-8 text-[#4a3721]">Invoquer l'Histoire</h2>
              {!lore ? (
                <div className="flex flex-col gap-6">
                  <p className="text-[#3d2b19] text-base">
                    Énoncez vos intentions pour que les archives révèlent un fragment de passé oublié...
                  </p>
                  <textarea
                    className="w-full h-40 bg-white/30 border border-[#4a3721]/20 p-4 text-[#3d2b19] focus:border-[#4a3721]/50 outline-none resize-none font-serif text-sm"
                    placeholder="Décrivez une vision d'Asgarm..."
                    value={traits}
                    onChange={(e) => setTraits(e.target.value)}
                  />
                  <button
                    onClick={handleWeave}
                    disabled={loading || !traits.trim()}
                    className="w-full py-4 bg-[#4a3721] text-[#f4ecd8] font-bold uppercase tracking-[0.3em] text-[10px] flex items-center justify-center gap-2 hover:opacity-90 transition-all disabled:opacity-30"
                  >
                    {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <ScrollText className="w-4 h-4" />}
                    {loading ? "INVOCATION..." : "TISSER LE DESTIN"}
                  </button>
                </div>
              ) : (
                <div className="flex flex-col h-full">
                  <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
                    <p className="text-[#3d2b19] text-base leading-relaxed italic">
                      {lore}
                    </p>
                  </div>
                  <button 
                    onClick={() => { setLore(null); setTraits(''); }}
                    className="mt-6 text-[#4a3721] text-[9px] uppercase tracking-[0.4em] font-bold border-t border-[#4a3721]/10 pt-4"
                  >
                    CONSULTER UN AUTRE FRAGMENT
                  </button>
                </div>
              )}
            </Page>

            {/* Page 5: Fin */}
            <Page>
              <div className="h-full flex flex-col items-center justify-center opacity-40">
                <h4 className="text-3xl font-headline text-[#4a3721] uppercase tracking-[0.5em]">ASGARM</h4>
                <div className="w-12 h-[1px] bg-[#4a3721]/30 my-6" />
                <span className="text-[10px] text-[#4a3721] tracking-[0.3em] font-bold uppercase">Fin du Tome I</span>
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
        .flip-book { 
          box-shadow: 0 0 100px rgba(0, 0, 0, 0.9); 
          background-color: #2a1a0a; 
        }
        .page { 
          background-color: #f4ecd8; 
          background-image: url("https://www.transparenttextures.com/patterns/papyrus.png"); 
          height: 100%;
          width: 100%;
        }
        .page-content { 
          padding: 3.5rem 3rem; 
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
          text-align: center; 
        }
        .page-content p { 
          font-family: 'Alegreya', serif; 
          font-size: 1.2rem; 
          line-height: 1.7; 
          color: #3d2b19; 
        }
        .page-footer {
          margin-top: auto;
          text-align: center;
          font-family: 'Belleza', sans-serif;
          font-size: 12px;
          color: #4a3721;
          opacity: 0.5;
          padding-top: 1rem;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(74, 55, 33, 0.05);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(74, 55, 33, 0.2);
        }
      `}</style>
    </main>
  )
}
