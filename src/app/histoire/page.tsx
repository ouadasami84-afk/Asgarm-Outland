
"use client"

import React, { forwardRef, useState, useEffect, useRef } from 'react'
import HTMLFlipBook from 'react-pageflip'
import { Navigation } from '@/components/Navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Loader2, ScrollText, Book as BookIcon } from 'lucide-react'
import { generateMagicalLore } from '@/ai/flows/generate-magical-lore-flow'

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

  if (!isClient) return null

  return (
    <main className="relative h-screen flex flex-col overflow-hidden bg-[#010208]">
      <Navigation />
      
      <div className="flex-1 flex flex-col items-center justify-center p-6 pt-24">
        <div className="relative group">
          {/* Navigation Controls */}
          <button 
            onClick={() => bookRef.current?.pageFlip()?.flipPrev()}
            className="absolute -left-24 top-1/2 -translate-y-1/2 p-4 text-gold/20 hover:text-gold transition-all duration-300 hidden xl:block"
          >
            <ChevronLeft className="w-12 h-12" />
          </button>
          
          <button 
            onClick={() => bookRef.current?.pageFlip()?.flipNext()}
            className="absolute -right-24 top-1/2 -translate-y-1/2 p-4 text-gold/20 hover:text-gold transition-all duration-300 hidden xl:block"
          >
            <ChevronRight className="w-12 h-12" />
          </button>

          {/* FlipBook */}
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
            style={{}}
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
            {/* Page 1: Cover */}
            <Page>
              <div className="h-full flex flex-col items-center justify-center text-center p-12 bg-night-deep border-[1px] border-gold/10 m-4">
                <div className="w-20 h-20 rounded-full border border-gold/10 flex items-center justify-center mb-10 bg-gold/5">
                  <div className="w-10 h-10 border border-gold/40 rotate-45 flex items-center justify-center">
                    <div className="w-3 h-3 bg-gold animate-pulse" />
                  </div>
                </div>
                <span className="text-gold text-[10px] tracking-[1em] uppercase font-bold mb-6">Le Livre des Origines</span>
                <h2 className="text-4xl font-headline text-white uppercase tracking-tighter mb-8 text-glow-gold leading-tight">
                  Chroniques d'Asgarm
                </h2>
                <div className="h-[1px] w-12 bg-gold/20 mb-8" />
                <p className="text-silver/40 text-sm italic font-light leading-relaxed max-w-xs font-serif">
                  "Une exploration des ères passées, présentes et futures du royaume éternel."
                </p>
              </div>
            </Page>

            {/* Page 2: Intro */}
            <Page number={1}>
              <div className="p-8">
                <h2 className="text-2xl font-headline text-white uppercase mb-8 border-b border-gold/10 pb-4">Préface</h2>
                <p className="text-silver/60 text-lg leading-relaxed font-serif italic mb-6">
                  Depuis la nuit des temps, Asgarm se dresse comme un bastion de lumière et d'éther dans le vide. Ce grimoire contient les secrets de notre ascension et les avertissements de nos chutes.
                </p>
                <div className="w-full h-40 bg-gold/[0.02] border border-gold/5 flex items-center justify-center">
                  <BookIcon className="w-12 h-12 text-gold/10" />
                </div>
              </div>
            </Page>

            {/* Page 3: Era 1 */}
            <Page number={2}>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-[1px] w-8 bg-gold/40" />
                  <span className="text-gold text-[10px] tracking-[0.4em] uppercase font-bold">AN 0 - 250</span>
                </div>
                <h2 className="text-2xl font-headline text-white uppercase mb-8">L'Ère de la Fondation</h2>
                <p className="text-silver/40 text-sm italic leading-relaxed mb-8 font-serif">
                  L'émergence des premiers piliers d'éther. Les anciens maîtres ont canalisé l'énergie brute pour ériger les fondations d'Asgarm.
                </p>
                <div className="space-y-6">
                  <div className="border-l border-gold/20 pl-4">
                    <h4 className="text-white text-[11px] font-bold uppercase tracking-widest mb-2">Le Premier Souffle</h4>
                    <p className="text-silver/30 text-[11px] leading-relaxed italic">Découverte des courants telluriques magiques par les érudits nomades.</p>
                  </div>
                </div>
              </div>
            </Page>

            {/* Page 4: Era 2 */}
            <Page number={3}>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-[1px] w-8 bg-gold/40" />
                  <span className="text-gold text-[10px] tracking-[0.4em] uppercase font-bold">AN 251 - 800</span>
                </div>
                <h2 className="text-2xl font-headline text-white uppercase mb-8">L'Âge d'Or</h2>
                <p className="text-silver/40 text-sm italic leading-relaxed mb-8 font-serif">
                  Apogée de la puissance magique et technologique. La construction des grandes académies et l'expansion du commerce éthéré.
                </p>
                <div className="space-y-6">
                  <div className="border-l border-gold/20 pl-4">
                    <h4 className="text-white text-[11px] font-bold uppercase tracking-widest mb-2">L'Expansion</h4>
                    <p className="text-silver/30 text-[11px] leading-relaxed italic">Rayonnement culturel et scientifique. Création des premières reliques royales.</p>
                  </div>
                </div>
              </div>
            </Page>

            {/* Page 5: Cataclysm */}
            <Page number={4}>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-[1px] w-8 bg-gold/40" />
                  <span className="text-gold text-[10px] tracking-[0.4em] uppercase font-bold">AN 801 - 1024</span>
                </div>
                <h2 className="text-2xl font-headline text-white uppercase mb-8">Le Grand Cataclysme</h2>
                <p className="text-silver/40 text-sm italic leading-relaxed mb-8 font-serif">
                  Instabilité des flux magiques entraînant une fracture de la réalité. Le royaume a dû se réinventer pour survivre.
                </p>
                <div className="space-y-6">
                  <div className="border-l border-gold/20 pl-4">
                    <h4 className="text-white text-[11px] font-bold uppercase tracking-widest mb-2">La Rupture</h4>
                    <p className="text-silver/30 text-[11px] leading-relaxed italic">Effondrement partiel du réseau d'éther et exil des créatures magiques.</p>
                  </div>
                </div>
              </div>
            </Page>

            {/* Page 6: AI Tool Intro */}
            <Page number={5}>
              <div className="p-8 h-full flex flex-col items-center justify-center text-center">
                <ScrollText className="w-12 h-12 text-gold/20 mb-6" />
                <h2 className="text-2xl font-headline text-white uppercase mb-4">Mémoires de l'Ether</h2>
                <p className="text-silver/50 text-xs italic leading-relaxed font-serif">
                  Le grimoire n'est pas figé. Utilisez l'énergie résiduelle pour invoquer vos propres fragments historiques.
                </p>
                <div className="mt-8 px-6 py-2 border border-gold/10 text-gold text-[8px] tracking-[0.3em] uppercase">Tournez la page pour commencer</div>
              </div>
            </Page>

            {/* Page 7: AI Tool Interaction */}
            <Page number={6}>
              <div className="p-8 h-full flex flex-col">
                <h2 className="text-xl font-headline text-white uppercase mb-6 text-glow-gold">Invoquer le Passé</h2>
                
                {!lore ? (
                  <div className="flex flex-col gap-6 flex-1">
                    <textarea
                      className="w-full flex-1 bg-black/40 border border-gold/10 p-4 text-silver/80 focus:border-gold/30 outline-none resize-none font-serif text-[11px] italic leading-relaxed"
                      placeholder="Décrivez un souvenir ou une vision d'Asgarm..."
                      value={traits}
                      onChange={(e) => setTraits(e.target.value)}
                    />
                    <button
                      onClick={handleWeave}
                      disabled={loading || !traits.trim()}
                      className="w-full py-4 bg-gold text-night font-bold uppercase tracking-[0.4em] text-[9px] flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-95 transition-all disabled:opacity-20"
                    >
                      {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <ScrollText className="w-4 h-4" />}
                      {loading ? "INVOCATION..." : "TISSER LE DESTIN"}
                    </button>
                  </div>
                ) : (
                  <div className="flex flex-col flex-1 overflow-hidden">
                    <div className="flex-1 overflow-y-auto custom-scrollbar pr-2 mb-6">
                      <p className="text-silver/60 text-[12px] leading-[1.8] italic font-serif">
                        {lore}
                      </p>
                    </div>
                    <button 
                      onClick={() => { setLore(null); setTraits(''); }}
                      className="text-gold text-[8px] uppercase tracking-[0.3em] font-bold border-t border-gold/10 pt-4 hover:opacity-100 opacity-40 transition-opacity"
                    >
                      UN AUTRE FRAGMENT
                    </button>
                  </div>
                )}
              </div>
            </Page>

            {/* Page 8: Back Cover */}
            <Page>
              <div className="h-full flex flex-col items-center justify-center bg-night-deep border-[1px] border-gold/10 m-4">
                <div className="text-center">
                  <div className="mb-6 opacity-20">
                    <h4 className="text-4xl font-headline text-white uppercase leading-none">ASGARM</h4>
                    <h4 className="text-4xl font-headline text-white uppercase leading-none text-right">CODEX</h4>
                  </div>
                  <span className="text-[9px] text-gold/30 tracking-[0.5em] uppercase font-bold">Archives Scellées</span>
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
        .flip-book {
          box-shadow: 0 50px 100px -20px rgba(0,0,0,1);
          background-color: #010208;
        }
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
          margin: 1rem;
          position: relative;
        }
        .page-footer {
          position: absolute;
          bottom: 1rem;
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
        .font-belleza {
          font-family: 'Belleza', sans-serif;
        }
      `}</style>
    </main>
  )
}
