"use client"

import React, { forwardRef, useState, useEffect, useRef } from 'react'
import dynamic from 'next/dynamic'
import { Navigation } from '@/components/Navigation'
import { Loader2 } from 'lucide-react'
import { generateMagicalLore } from '@/ai/flows/generate-magical-lore-flow'
import { motion } from 'framer-motion'

// Dynamically import react-pageflip for client-side only rendering
const HTMLFlipBook = dynamic(() => import('react-pageflip'), { 
  ssr: false,
  loading: () => (
    <div className="w-[550px] h-[750px] bg-[#1a0f05] flex flex-col items-center justify-center border border-gold/10 rounded-lg">
      <Loader2 className="w-10 h-10 animate-spin text-gold/20 mb-4" />
      <span className="text-gold/10 text-[9px] tracking-[0.6em] uppercase font-bold text-glow-gold">Inspiration des Archives...</span>
    </div>
  )
})

const Page = forwardRef<HTMLDivElement, { children: React.ReactNode; number?: number; isCover?: boolean }>(
  ({ children, number, isCover }, ref) => (
    <div className={`page ${isCover ? 'cover' : ''}`} ref={ref}>
      <div className="page-content">
        {/* Ancient decorative corner ornaments (No emojis) */}
        {!isCover && (
          <div className="absolute inset-0 pointer-events-none p-6">
            <div className="absolute top-8 left-8 w-20 h-20 border-t border-l border-[#4a3721]/20 rounded-tl-3xl" />
            <div className="absolute top-8 right-8 w-20 h-20 border-t border-r border-[#4a3721]/20 rounded-tr-3xl" />
            <div className="absolute bottom-16 left-8 w-20 h-20 border-b border-l border-[#4a3721]/20 rounded-bl-3xl" />
            <div className="absolute bottom-16 right-8 w-20 h-20 border-b border-r border-[#4a3721]/20 rounded-br-3xl" />
          </div>
        )}
        <div className="page-inner-content relative z-10">
          {children}
          {number && !isCover && (
            <div className="page-footer font-serif italic text-[#4a3721]/40 text-xs tracking-[0.4em] mt-auto pt-10 text-center">
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
      
      {/* Immersive Magical Aura behind the book */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-gold/[0.04] blur-[160px] rounded-full pointer-events-none z-0 animate-pulse" />
      
      <div className="flex-1 flex flex-col items-center justify-center p-6 pt-24 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 120, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <HTMLFlipBook
            width={580}
            height={780}
            size="stretch"
            minWidth={315}
            maxWidth={1000}
            minHeight={400}
            maxHeight={1533}
            maxShadowOpacity={0.8}
            showCover={true}
            mobileScrollSupport={true}
            className="flip-book shadow-[0_60px_120px_rgba(0,0,0,1)]"
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
            {/* Front Cover - Premium Leather and Engraved Gold */}
            <Page isCover={true}>
              <div className="h-full flex flex-col items-center justify-center text-center border-[20px] border-double border-[#3a2a18] bg-[#1a1008] relative overflow-hidden">
                <div className="absolute inset-0 opacity-40 bg-[url('https://www.transparenttextures.com/patterns/leather.png')] pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#000]/30 to-[#000]/70 pointer-events-none" />
                
                <div className="relative mb-24">
                  <div className="w-24 h-24 border-2 border-gold/20 rotate-45 flex items-center justify-center shadow-[0_0_50px_rgba(212,175,55,0.15)]">
                    <div className="w-16 h-16 border border-gold/40 -rotate-12 flex items-center justify-center">
                       <div className="w-6 h-6 bg-gold/80 animate-pulse" />
                    </div>
                  </div>
                </div>

                <h2 className="text-6xl font-headline uppercase tracking-tighter mb-10 text-gold text-glow-gold leading-[0.85] px-6">
                  CODEX<br/>ASGARM
                </h2>
                
                <div className="h-[1px] w-64 bg-gradient-to-r from-transparent via-gold/50 to-transparent mb-16" />
                
                <p className="text-gold/60 italic font-serif text-sm tracking-[1em] uppercase">
                  TOME PREMIER
                </p>
                <span className="text-gold/20 text-[11px] tracking-[0.7em] uppercase mt-6 block">
                  L'Éther Originel
                </span>
                
                <div className="mt-36 text-gold/15 text-[10px] tracking-[1.2em] uppercase font-bold animate-pulse">
                  — OUVRIR LES ARCHIVES —
                </div>
              </div>
            </Page>

            {/* Page 1: Préface Royale */}
            <Page number={1}>
              <div className="mb-20 flex items-center gap-8">
                <div className="h-[1px] flex-1 bg-[#4a3721]/30" />
                <h2 className="text-3xl font-headline text-[#4a3721] uppercase tracking-[0.5em]">Préface</h2>
                <div className="h-[1px] flex-1 bg-[#4a3721]/30" />
              </div>
              <div className="prose prose-stone">
                <p className="text-[#3d2b19] first-letter:text-8xl first-letter:font-headline first-letter:mr-5 first-letter:float-left first-letter:text-[#4a3721] first-letter:leading-[0.8] font-serif leading-loose text-justify text-xl">
                  Depuis l'éveil du premier pilier d'éther, Asgarm se dresse comme le phare immuable de la civilisation magique. Ce grimoire est le témoin de notre ascension, de nos conquêtes et des mystères qui régissent encore notre monde. Chaque mot ici gravé a été dicté par les flux de la conscience universelle.
                </p>
                <p className="text-[#3d2b19] font-serif leading-loose text-justify text-xl mt-10">
                  Que celui qui ouvre ce tome comprenne la responsabilité qui lui incombe. La connaissance n'est pas un don, c'est une conquête.
                </p>
              </div>
            </Page>

            {/* Page 2: L'Éveil avec Gravure */}
            <Page number={2}>
              <h2 className="text-2xl font-headline mb-14 text-[#4a3721] uppercase tracking-[0.25em] border-b border-[#4a3721]/15 pb-8">I. L'Éveil des Flux</h2>
              <div className="space-y-10">
                <p className="text-[#3d2b19] font-serif leading-relaxed text-xl italic">
                  L'émergence des courants telluriques a permis aux premiers érudits de canaliser l'énergie brute pour ériger les fondations d'Asgarm.
                </p>
                <div className="h-[300px] w-full border border-[#4a3721]/20 bg-[#4a3721]/5 relative group overflow-hidden">
                  <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/asgarm-history-1/600/400')] bg-cover bg-center grayscale contrast-125 opacity-40 group-hover:grayscale-0 group-hover:opacity-60 transition-all duration-1000" />
                  <div className="absolute inset-0 border-[16px] border-[#f4ecd8]/40 pointer-events-none" />
                </div>
                <p className="text-[#4a3721]/60 text-[10px] tracking-[0.6em] uppercase text-center font-bold">
                  GRAVURE DU NEXUS ORIGINEL
                </p>
              </div>
            </Page>

            {/* Page 3: L'Apogée Royale */}
            <Page number={3}>
              <h2 className="text-2xl font-headline mb-14 text-[#4a3721] uppercase tracking-[0.25em] border-b border-[#4a3721]/15 pb-8">II. L'Âge de l'Apogée</h2>
              <div className="prose prose-stone space-y-10">
                <p className="text-[#3d2b19] font-serif leading-loose text-justify text-xl">
                  Une ère de prospérité inégalée où la magie et l'architecture ont fusionné pour créer les merveilles suspendues d'Asgarm. Les académies royales devinrent les centres mondiaux du savoir ésotérique.
                </p>
                <p className="text-[#3d2b19] font-serif leading-loose text-justify text-xl italic border-l-4 border-[#4a3721]/20 pl-10">
                  "Chaque pierre posée était imprégnée de rituels de protection, assurant la pérennité du trône. Le ciel même semblait s'incliner devant notre puissance impériale."
                </p>
                <div className="pt-16">
                   <div className="h-[1px] w-16 bg-[#4a3721]/30 mx-auto" />
                </div>
              </div>
            </Page>

            {/* Page 4: IA Tool - Invocateur de Destinée */}
            <Page number={4}>
              <div className="h-full flex flex-col">
                <div className="mb-14 text-center">
                  <h2 className="text-2xl font-headline text-[#4a3721] uppercase tracking-[0.6em] mb-6">Invocateur d'Ether</h2>
                  <div className="h-[1px] w-24 bg-[#4a3721]/30 mx-auto" />
                </div>
                
                {!lore ? (
                  <div className="flex flex-col gap-12">
                    <p className="text-[#4a3721]/80 text-lg leading-relaxed italic text-center px-8 font-serif">
                      Énoncez vos intentions pour que les archives révèlent un fragment de passé oublié...
                    </p>
                    <div className="relative">
                      <textarea
                        className="w-full h-72 bg-transparent border-2 border-[#4a3721]/15 p-10 text-[#3d2b19] focus:border-[#4a3721]/40 outline-none resize-none font-serif text-2xl leading-relaxed shadow-[inset_0_0_30px_rgba(74,55,33,0.06)] placeholder-[#4a3721]/20"
                        placeholder="Une vision d'Asgarm, un secret des anciens..."
                        value={traits}
                        onChange={(e) => setTraits(e.target.value)}
                      />
                    </div>
                    <button
                      onClick={handleWeave}
                      disabled={loading || !traits.trim()}
                      className="w-full py-10 bg-[#2a1a0a] text-gold font-bold uppercase tracking-[0.8em] text-[11px] flex items-center justify-center gap-8 hover:bg-[#1a0f05] transition-all duration-500 disabled:opacity-20 shadow-[0_25px_50px_rgba(0,0,0,0.4)] border border-gold/15"
                    >
                      {loading ? (
                        <Loader2 className="w-5 h-5 animate-spin text-gold" />
                      ) : (
                        "TISSER LE DESTIN"
                      )}
                    </button>
                  </div>
                ) : (
                  <div className="flex flex-col h-full">
                    <div className="flex-1 overflow-y-auto pr-8 custom-scrollbar mb-10">
                      <p className="text-[#3d2b19] text-[1.4rem] leading-loose italic font-serif opacity-95 text-justify">
                        {lore}
                      </p>
                    </div>
                    <button 
                      onClick={() => { setLore(null); setTraits(''); }}
                      className="mt-auto py-8 text-[#4a3721] text-[10px] uppercase tracking-[1em] font-bold border-t border-[#4a3721]/20 pt-10 hover:opacity-50 transition-opacity text-center w-full"
                    >
                      CONSULTER LES ARCHIVES
                    </button>
                  </div>
                )}
              </div>
            </Page>

            {/* Back Cover - Deep Leather Finish */}
            <Page isCover={true}>
              <div className="h-full flex flex-col items-center justify-center bg-[#1a1008] border-[14px] border-double border-[#3a2a18] m-0 relative">
                <div className="absolute inset-0 opacity-25 bg-[url('https://www.transparenttextures.com/patterns/leather.png')] pointer-events-none" />
                <div className="flex flex-col items-center opacity-50">
                  <h4 className="text-4xl font-headline text-gold uppercase tracking-[1.2em] mb-8">ASGARM</h4>
                  <div className="w-20 h-[1px] bg-gold/40 my-12" />
                  <span className="text-[11px] text-gold tracking-[1em] font-bold uppercase">Souveraineté Éternelle</span>
                </div>
              </div>
            </Page>
          </HTMLFlipBook>
        </motion.div>
      </div>

      <footer className="h-16 border-t border-gold/10 flex items-center justify-center bg-black/85 backdrop-blur-3xl relative z-20">
        <span className="text-[10px] text-gold tracking-[1.4em] uppercase font-bold text-glow-gold">
          OUTLAND STUDIOS — PROTOCOLE ASGARM V2.0.9
        </span>
      </footer>

      <style jsx global>{`
        .flip-book { 
          border-radius: 6px;
        }
        .page { 
          background-color: #f4ecd8; 
          background-image: url("https://www.transparenttextures.com/patterns/papyrus.png"); 
          height: 100%;
          width: 100%;
          box-shadow: inset 60px 0 60px -60px rgba(0,0,0,0.25);
          position: relative;
        }
        .page.cover {
          background-color: #1a1008;
          background-image: none;
          box-shadow: none;
        }
        .page-content { 
          padding: 6.5rem 6rem; 
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
          background: rgba(74, 55, 33, 0.25);
          border-radius: 12px;
        }
      `}</style>
    </main>
  )
}