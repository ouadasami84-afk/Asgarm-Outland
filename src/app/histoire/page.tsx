
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
        {/* Contenu épuré sans traits blancs superflus */}
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
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-gold/[0.04] blur-[150px] rounded-full pointer-events-none z-0 animate-pulse" />
      
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
            "Le savoir d'Asgarm est scellé dans ce grimoire éternel. Tournez les pages pour découvrir les racines de notre destin."
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

          <div className="flip-book-container relative shadow-[0_60px_120px_rgba(0,0,0,1)] border-[8px] border-[#2a1a0a] rounded-sm overflow-hidden bg-[#2a1a0a]">
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
              {/* Chapitre 1 */}
              <Page number={1}>
                <h2 className="text-2xl font-headline text-[#4a3721] uppercase tracking-[0.5em] mb-12 text-center border-b border-[#4a3721]/10 pb-6">I. L'Âge d'Harmonie</h2>
                <p className="text-[#3d2b19] first-letter:text-7xl first-letter:font-headline first-letter:mr-4 first-letter:float-left first-letter:text-[#4a3721] first-letter:leading-none font-serif leading-loose text-justify text-lg">
                  Autrefois, dans un temps que seuls les plus vieux récits murmurent, le monde d'Asgarm respirait en harmonie. C'était l'Âge d'Harmonie, un équilibre parfait maintenu par une règle immuable : seuls les Elfes à la peau verdoyante et leurs cousins reclus, les Elfes de Lune à la peau bleutée, pouvaient manier la magie. Les Elfes, avec leur grâce infinie, maîtrisaient la magie arcanique, une force pure et ordonnée, canalisée à travers des baguettes sculptées dans le bois ancestral.
                </p>
              </Page>

              {/* Chapitre 2 */}
              <Page number={2}>
                <h2 className="text-2xl font-headline text-[#4a3721] uppercase tracking-[0.5em] mb-12 text-center border-b border-[#4a3721]/10 pb-6">II. L'Invasion des Cavaliers</h2>
                <p className="text-[#3d2b19] first-letter:text-7xl first-letter:font-headline first-letter:mr-4 first-letter:float-left first-letter:text-[#4a3721] first-letter:leading-none font-serif leading-loose text-justify text-lg">
                  Mais cet équilibre millénaire fut pulvérisé. Venus des abysses, les Cavaliers de l'Apocalypse, de terrifiants sorciers de la mort, firent irruption à Asgarm. Leur arrivée ne fut pas qu'une simple invasion ; leur seule présence maléfique déstabilisa l'équilibre fragile entre la magie arcanique des Elfes et la magie obscure des Elfes de Lune, créant des tempêtes d'énergie chaotique qui ravageaient les terres.
                </p>
              </Page>

              {/* Chapitre 3 */}
              <Page number={3}>
                <h2 className="text-2xl font-headline text-[#4a3721] uppercase tracking-[0.5em] mb-12 text-center border-b border-[#4a3721]/10 pb-6">III. Le Sacrifice de Melfetys</h2>
                <p className="text-[#3d2b19] first-letter:text-7xl first-letter:font-headline first-letter:mr-4 first-letter:float-left first-letter:text-[#4a3721] first-letter:leading-none font-serif leading-loose text-justify text-lg">
                  Acculée, la reine des Elfes, Melfetys, accomplit alors l'impensable, un sacrifice qui allait changer le monde à jamais. Le cœur brisé, elle brisa le serment millénaire de son peuple et libéra l'essence de la magie, l'offrant à toutes les races d'Asgarm. Une vague de puissance brute déferla sur le monde, un acte désespéré pour donner une chance aux mortels de se défendre.
                </p>
              </Page>

              {/* Chapitre 4 */}
              <Page number={4}>
                <h2 className="text-2xl font-headline text-[#4a3721] uppercase tracking-[0.5em] mb-12 text-center border-b border-[#4a3721]/10 pb-6">IV. L'Éveil d'Alaric</h2>
                <p className="text-[#3d2b19] first-letter:text-7xl first-letter:font-headline first-letter:mr-4 first-letter:float-left first-letter:text-[#4a3721] first-letter:leading-none font-serif leading-loose text-justify text-lg">
                  Chez les Humains, ce don se manifesta comme une force brute, une tempête intérieure. Un capitaine de la garde, Alaric, sentit cette puissance s'éveiller en lui. Saisissant une branche de chêne brisée sur le champ de bataille, il tenta de canaliser le flux. La branche crépita, s'illumina, et devint la toute première baguette humaine, projetant un torrent de flammes purificatrices sur ses ennemis.
                </p>
              </Page>

              {/* Chapitre 5 */}
              <Page number={5}>
                <h2 className="text-2xl font-headline text-[#4a3721] uppercase tracking-[0.5em] mb-12 text-center border-b border-[#4a3721]/10 pb-6">V. La Forge de Thorgrim</h2>
                <p className="text-[#3d2b19] first-letter:text-7xl first-letter:font-headline first-letter:mr-4 first-letter:float-left first-letter:text-[#4a3721] first-letter:leading-none font-serif leading-loose text-justify text-lg">
                  Dans les profondeurs des montagnes, la magie toucha les Nains. Thorgrim Main-de-Pierre sentit la magie vibrer dans la pierre et le métal. Appliquant la rigueur de la forge à ce nouvel art, les Nains devinrent rapidement les plus grands fabricants de baguettes d'Asgarm. Leurs créations, alliant bois robustes et incrustations runiques, étaient des chefs-d'œuvre de puissance et de fiabilité.
                </p>
              </Page>

              {/* Chapitre 6 */}
              <Page number={6}>
                <h2 className="text-2xl font-headline text-[#4a3721] uppercase tracking-[0.5em] mb-12 text-center border-b border-[#4a3721]/10 pb-6">VI. Le Domaine Carmin</h2>
                <p className="text-[#3d2b19] first-letter:text-7xl first-letter:font-headline first-letter:mr-4 first-letter:float-left first-letter:text-[#4a3721] first-letter:leading-none font-serif leading-loose text-justify text-lg">
                  Même les clans les plus reclus furent touchés. Les Vampires du Domaine Carmin, dirigés par Lord Valerius, découvrirent que leur affinité innée avec le sang pouvait être canalisée. Ils apprirent à manipuler l'essence vitale pour la restaurer, devenant les plus grands guérisseurs de guerre, capables de refermer les blessures les plus mortelles par des sortilèges de sang complexes.
                </p>
              </Page>

              {/* Chapitre 7 */}
              <Page number={7}>
                <h2 className="text-2xl font-headline text-[#4a3721] uppercase tracking-[0.5em] mb-12 text-center border-b border-[#4a3721]/10 pb-6">VII. L'Alliance de la Lumière</h2>
                <p className="text-[#3d2b19] first-letter:text-7xl first-letter:font-headline first-letter:mr-4 first-letter:float-left first-letter:text-[#4a3721] first-letter:leading-none font-serif leading-loose text-justify text-lg">
                  C'est ainsi que naquit l'Alliance de la Lumière. Les armées humaines affrontaient les ténèbres avec des volées de sortilèges. Les légions de Nains étaient des remparts infranchissables. Les Vampires de Valerius maintenaient les troupes en vie, tandis que les Elfes de Lune frappaient en silence au cœur des lignes ennemies. Unis par l'espoir, ces peuples se battaient enfin comme un seul homme.
                </p>
              </Page>

              {/* Chapitre 8 */}
              <Page number={8}>
                <h2 className="text-2xl font-headline text-[#4a3721] uppercase tracking-[0.5em] mb-12 text-center border-b border-[#4a3721]/10 pb-6">VIII. La Victoire et la Faille</h2>
                <p className="text-[#3d2b19] first-letter:text-7xl first-letter:font-headline first-letter:mr-4 first-letter:float-left first-letter:text-[#4a3721] first-letter:leading-none font-serif leading-loose text-justify text-lg">
                  La bataille finale eut lieu sur les Plaines Calcinées. Le Seigneur des Cavaliers affronta Alaric en duel. Thorgrim le Nain s'interposa héroïquement, encaissant un sort mortel pour offrir une seconde au roi. D'un cri de rage, Alaric anéantit le tyran. Les Cavaliers étaient vaincus, mais la faille dans le ciel demeurait, une blessure béante prête à tout consumer.
                </p>
              </Page>

              {/* Chapitre 9 */}
              <Page number={9}>
                <h2 className="text-2xl font-headline text-[#4a3721] uppercase tracking-[0.5em] mb-12 text-center border-b border-[#4a3721]/10 pb-6">IX. Un Nouvel Équilibre</h2>
                <p className="text-[#3d2b19] first-letter:text-7xl first-letter:font-headline first-letter:mr-4 first-letter:float-left first-letter:text-[#4a3721] first-letter:leading-none font-serif leading-loose text-justify text-lg">
                  La guerre était gagnée, mais le monde était fracturé. Pour guider les égarés, deux institutions furent fondées : l'Académie d'Asgarm et le Conclave des Arcanes. Un nouvel équilibre précaire s'est installé. Les pages de ce grimoire s'arrêtent ici, car c'est à vous, héros d'Asgarm, d'écrire la suite. Votre histoire commence maintenant.
                </p>
              </Page>

              {/* Page 10: Invocateur de Destin (IA Tool) */}
              <Page number={10}>
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
          animate={{ opacity: 0.5 }}
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
