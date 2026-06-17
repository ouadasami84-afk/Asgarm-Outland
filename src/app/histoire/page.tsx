
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

const Page = forwardRef<HTMLDivElement, { children: React.ReactNode; number?: number }>(
  ({ children, number }, ref) => (
    <div className="page" ref={ref}>
      <div className="page-content">
        <div className="absolute inset-0 pointer-events-none p-6">
          <div className="absolute top-8 left-8 w-20 h-20 border-t border-l border-[#4a3721]/20 rounded-tl-3xl" />
          <div className="absolute top-8 right-8 w-20 h-20 border-t border-r border-[#4a3721]/20 rounded-tr-3xl" />
          <div className="absolute bottom-16 left-8 w-20 h-20 border-b border-l border-[#4a3721]/20 rounded-bl-3xl" />
          <div className="absolute bottom-16 right-8 w-20 h-20 border-b border-r border-[#4a3721]/20 rounded-br-3xl" />
        </div>
        <div className="page-inner-content relative z-10">
          {children}
          {number && (
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
      
      {/* Immersive Magical Aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gold/[0.05] blur-[180px] rounded-full pointer-events-none z-0 animate-pulse" />
      
      <div className="flex-1 flex flex-col items-center justify-center p-6 pt-24 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
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
            maxShadowOpacity={0.6}
            showCover={false}
            mobileScrollSupport={true}
            className="flip-book shadow-[0_80px_160px_rgba(0,0,0,0.8)]"
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
            {/* Page 1: Préface */}
            <Page number={1}>
              <div className="mb-20 flex items-center gap-8">
                <div className="h-[1px] flex-1 bg-[#4a3721]/30" />
                <h2 className="text-3xl font-headline text-[#4a3721] uppercase tracking-[0.5em]">Préface Royale</h2>
                <div className="h-[1px] flex-1 bg-[#4a3721]/30" />
              </div>
              <div className="prose prose-stone">
                <p className="text-[#3d2b19] first-letter:text-8xl first-letter:font-headline first-letter:mr-6 first-letter:float-left first-letter:text-[#4a3721] first-letter:leading-[0.8] font-serif leading-loose text-justify text-xl">
                  D'après les textes sacrés de l'Ether, Asgarm ne fut pas bâtie, elle fut invoquée. Ce grimoire contient la somme des connaissances éternelles, le récit de notre ascension et les lois immuables qui régissent notre monde. Chaque citoyen est le gardien de cette mémoire.
                </p>
                <p className="text-[#3d2b19] font-serif leading-loose text-justify text-xl mt-12 italic">
                  "Le temps n'est qu'un fleuve dont nous avons appris à détourner le cours. La souveraineté n'est pas un titre, c'est une responsabilité gravée dans l'âme."
                </p>
              </div>
            </Page>

            {/* Page 2: La Fondation */}
            <Page number={2}>
              <h2 className="text-2xl font-headline mb-14 text-[#4a3721] uppercase tracking-[0.3em] border-b border-[#4a3721]/15 pb-8 text-center">I. La Fondation</h2>
              <div className="space-y-10">
                <p className="text-[#3d2b19] font-serif leading-loose text-justify text-xl">
                  Au commencement, les Scribes de l'Aube ont canalisé les premiers flux d'éther pur pour ériger le Grand Pilier. C'est autour de cette source d'énergie infinie que les quartiers d'Asgarm ont pris racine.
                </p>
                <div className="h-[300px] w-full border border-[#4a3721]/20 bg-[#4a3721]/5 relative group overflow-hidden">
                  <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/asgarm-history-foundation/600/400')] bg-cover bg-center grayscale contrast-125 opacity-40 group-hover:grayscale-0 group-hover:opacity-60 transition-all duration-1000" />
                  <div className="absolute inset-0 border-[16px] border-[#f4ecd8]/40 pointer-events-none" />
                </div>
                <p className="text-[#4a3721]/60 text-[10px] tracking-[0.6em] uppercase text-center font-bold">
                  REPRÉSENTATION DU PREMIER PILIER
                </p>
              </div>
            </Page>

            {/* Page 3: L'Âge d'Or */}
            <Page number={3}>
              <h2 className="text-2xl font-headline mb-14 text-[#4a3721] uppercase tracking-[0.3em] border-b border-[#4a3721]/15 pb-8 text-center">II. L'Âge d'Or</h2>
              <div className="prose prose-stone space-y-10">
                <p className="text-[#3d2b19] font-serif leading-loose text-justify text-xl">
                  Une période de prospérité inégalée où les cités volantes flottaient au-dessus des plaines d'éther. Les Académies formèrent les plus grands maîtres, dont les noms résonnent encore dans les couloirs du palais.
                </p>
                <p className="text-[#3d2b19] font-serif leading-loose text-justify text-xl italic border-l-4 border-[#4a3721]/20 pl-10">
                  "Nous avons appris à murmurer aux étoiles, et elles nous ont répondu par la lumière de la connaissance éternelle."
                </p>
                <div className="h-[250px] w-full bg-[#4a3721]/5 border border-[#4a3721]/10 flex items-center justify-center opacity-40 grayscale">
                   <div className="w-16 h-16 border-2 border-[#4a3721]/40 rotate-45" />
                </div>
              </div>
            </Page>

            {/* Page 4: Le Cataclysme */}
            <Page number={4}>
              <h2 className="text-2xl font-headline mb-14 text-[#4a3721] uppercase tracking-[0.3em] border-b border-[#4a3721]/15 pb-8 text-center">III. Le Grand Cataclysme</h2>
              <div className="space-y-12">
                <p className="text-[#3d2b19] font-serif leading-loose text-justify text-xl">
                  Toute ascension connaît ses épreuves. Le Grand Cataclysme faillit déchirer le voile de la réalité. C'est par le sacrifice des Hauts Conseillers que l'équilibre fut maintenu, scellant les forces obscures au-delà des frontières d'Outland.
                </p>
                <div className="p-8 bg-black/[0.03] border border-[#4a3721]/10">
                  <p className="text-[#4a3721] font-serif italic text-lg leading-relaxed text-center">
                    "Dans les cendres du passé, nous avons forgé les chaînes de notre sécurité future."
                  </p>
                </div>
              </div>
            </Page>

            {/* Page 5: La Renaissance */}
            <Page number={5}>
              <h2 className="text-2xl font-headline mb-14 text-[#4a3721] uppercase tracking-[0.3em] border-b border-[#4a3721]/15 pb-8 text-center">IV. La Renaissance</h2>
              <div className="prose prose-stone space-y-10">
                <p className="text-[#3d2b19] font-serif leading-loose text-justify text-xl">
                  Aujourd'hui, Asgarm se dresse plus forte que jamais. L'alliance entre la technologie éthérée et la magie ancestrale a permis la création d'Outland, le sanctuaire ultime pour les élus du destin.
                </p>
                <div className="h-[300px] w-full border border-[#4a3721]/20 bg-[#4a3721]/5 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/asgarm-modern/600/400')] bg-cover bg-center grayscale opacity-50 group-hover:opacity-80 transition-opacity" />
                </div>
                <p className="text-[#4a3721]/60 text-[10px] tracking-[0.4em] uppercase text-center font-bold">
                  VUE PANORAMIQUE D'OUTLAND — ÈRE MODERNE
                </p>
              </div>
            </Page>

            {/* Page 6: IA Tool - Invocateur de Destinée */}
            <Page number={6}>
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
          box-shadow: inset 60px 0 60px -60px rgba(0,0,0,0.2), 
                      inset -60px 0 60px -60px rgba(0,0,0,0.2);
          position: relative;
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
