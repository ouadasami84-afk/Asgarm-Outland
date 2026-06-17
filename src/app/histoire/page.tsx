
"use client"

import React, { forwardRef, useState, useEffect, useRef } from 'react'
import dynamic from 'next/dynamic'
import { Navigation } from '@/components/Navigation'
import { Loader2 } from 'lucide-react'
import { motion } from 'framer-motion'

const HTMLFlipBook = dynamic(() => import('react-pageflip'), { 
  ssr: false,
  loading: () => (
    <div className="w-full h-[60vh] flex flex-col items-center justify-center">
      <Loader2 className="w-12 h-12 animate-spin text-gold/20 mb-6" />
      <span className="text-gold/20 text-[10px] tracking-[0.8em] uppercase font-bold text-glow-gold">Infiltration du Grimoire...</span>
    </div>
  )
})

const MagicalText = ({ text, title }: { text: string; title?: string }) => {
  const words = text.split(' ');
  
  const getHighlightClass = (word: string) => {
    const cleanWord = word.replace(/[.,;!?]/g, '');
    const goldKeywords = ['Asgarm', 'Elfes', 'Magie', 'Alaric', 'Thorgrim', 'Melfetys', 'Valerius', 'Alliance', 'Lumière', 'Roi-Mage', 'Grimoire', 'Souveraineté', 'Harmonie', 'Arcanique', 'Équilibre', 'Savoir', 'Rois'];
    const blueKeywords = ['Abysses', 'Cavaliers', 'Apocalypse', 'Mort', 'Ténèbres', 'Chaos', 'Corruption', 'Ombres', 'Obscure', 'Nécromantique', 'Maléfique', 'Invasion', 'Destruction', 'Anéantissement', 'Obscura', 'Mal', 'Sang'];

    if (goldKeywords.some(k => cleanWord.toLowerCase().includes(k.toLowerCase()))) {
      return "text-[#b48d1d] font-bold";
    }
    if (blueKeywords.some(k => cleanWord.toLowerCase().includes(k.toLowerCase()))) {
      return "text-[#0c1b41] font-bold";
    }
    return "";
  };

  return (
    <div className="flex flex-col h-full">
      {title && (
        <motion.h3 
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-[18px] font-headline text-[#4a3721] mb-6 tracking-tight border-b border-[#4a3721]/15 pb-2"
        >
          {title}
        </motion.h3>
      )}
      <div className="flex-1">
        <motion.p className="text-[#3d2b19] font-serif leading-[1.8] text-justify text-[13px] italic">
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, filter: 'blur(8px)', y: 2 }}
              animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: i * 0.01,
                ease: "easeOut"
              }}
              className={`inline-block mr-1 transition-colors duration-1000 ${getHighlightClass(word)}`}
            >
              {word}
            </motion.span>
          ))}
        </motion.p>
      </div>
    </div>
  );
};

const Page = forwardRef<HTMLDivElement, { children: React.ReactNode; number?: number }>(
  ({ children, number }, ref) => (
    <div className="page shadow-2xl relative" ref={ref}>
      <div className="absolute inset-4 border-[0.5px] border-[#4a3721]/10 pointer-events-none z-20" />
      <div className="page-content relative z-10">
        <div className="page-inner-content flex flex-col h-full">
          {children}
          {number && (
            <div className="page-footer font-serif italic text-[#b48d1d] text-[11px] tracking-[0.4em] mt-auto pt-4 text-center font-bold text-glow-gold">
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
  const [isClient, setIsClient] = useState(false)
  const bookRef = useRef<any>(null)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const chapters = [
    { title: "L'Âge d'Harmonie", page: 2 },
    { title: "L'Invasion Abyssale", page: 3 },
    { title: "Le Sacrifice de Melfetys", page: 4 },
    { title: "L'Éveil des Humains", page: 5 },
    { title: "La Forge des Nains", page: 6 },
    { title: "Le Serment de Sang", page: 7 },
    { title: "L'Alliance de la Lumière", page: 8 },
    { title: "Le Crépuscule des Cavaliers", page: 9 },
    { title: "Le Nouvel Équilibre", page: 10 },
  ]

  if (!isClient) return null

  return (
    <main className="relative min-h-screen flex flex-col overflow-hidden bg-transparent">
      <Navigation />
      
      <div className="flex-1 flex flex-col items-center justify-center p-4 pt-28 pb-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -10 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1.2 }} 
          className="text-center mb-10 flex flex-col items-center"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-[1px] w-12 bg-gold/20" />
            <span className="text-gold text-[9px] tracking-[1em] uppercase font-bold text-glow-gold">Chroniques d'Asgarm</span>
            <div className="h-[1px] w-12 bg-gold/20" />
          </div>
          <h1 className="text-4xl font-headline uppercase tracking-tighter mb-4 leading-tight block">
            <span className="shine-text">Les Annales de la Souveraineté</span>
          </h1>
          <p className="text-[10px] tracking-[0.6em] uppercase font-bold opacity-80 block">
            <span className="shine-text">Faites glisser les pages pour explorer les annales</span>
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 1.5, delay: 0.2 }} 
          className="relative max-w-full"
        >
          <div className="flip-book-container bg-transparent flex justify-center">
            <HTMLFlipBook 
              width={450} 
              height={600} 
              size="fixed" 
              minWidth={250}
              maxWidth={450}
              minHeight={300}
              maxHeight={600}
              className="flip-book" 
              ref={bookRef} 
              showCover={false} 
              useMouseEvents={true}
              maxShadowOpacity={0.5}
              flippingTime={1000}
              style={{ margin: '0 auto' }}
              startPage={0}
              drawShadow={true}
              usePortrait={false}
              startZIndex={0}
              autoSize={true}
              clickEventForward={true}
              swipeDistance={30}
              showPageCorners={true}
              disableFlipByClick={false}
            >
              <Page number={1}>
                <div className="h-full flex flex-col pt-6 px-10">
                  <h2 className="text-[20px] font-headline text-[#b48d1d] uppercase tracking-[0.2em] mb-6 border-b border-[#b48d1d]/20 pb-3 w-full text-center text-glow-gold">
                    Sommaire
                  </h2>
                  <div className="flex flex-col gap-1 w-full overflow-y-auto pr-2 custom-scrollbar">
                    {chapters.map((ch, i) => (
                      <div 
                        key={i} 
                        className="flex items-baseline justify-between group cursor-pointer py-2 border-b border-[#4a3721]/5 hover:bg-[#b48d1d]/5 px-3 transition-colors" 
                        onClick={() => bookRef.current.pageFlip().flip(ch.page - 1)}
                      >
                        <span className="text-[11px] font-serif uppercase text-[#0c1b41] group-hover:text-[#b48d1d]">{ch.title}</span>
                        <div className="flex-1 border-b border-dotted border-[#b48d1d]/20 mx-2" />
                        <span className="text-[11px] font-serif text-[#4a3721]/70">{ch.page}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-auto pb-6 flex flex-col items-center">
                    <div className="h-[1px] w-16 bg-[#b48d1d]/30 mb-3" />
                    <p className="text-[#b48d1d] text-[10px] uppercase tracking-[0.4em] italic font-bold text-glow-gold">Archives Royales</p>
                  </div>
                </div>
              </Page>

              <Page number={2}><div className="h-full px-10 pt-6"><MagicalText title="L'Âge d'Harmonie" text="Autrefois, dans un temps que seuls les plus vieux récits murmurent, le monde d'Asgarm respirait en Harmonie. Seuls les Elfes et les Elfes de Lune maniaient la Magie Arcanique et Obscure. Les Nains forgeaient, et les Humains bâtissaient des cités, ignorant tout des arcanes." /></div></Page>
              <Page number={3}><div className="h-full px-10 pt-6"><MagicalText title="L'Invasion Abyssale" text="Mais cet Équilibre fut pulvérisé. Venus des Abysses, les Cavaliers de l'Apocalypse firent irruption. Leur présence Maléfique déstabilisa l'équilibre fragile, créant des tempêtes d'énergie chaotique qui ravageaient les terres d'Asgarm." /></div></Page>
              <Page number={4}><div className="h-full px-10 pt-6"><MagicalText title="Le Sacrifice de Melfetys" text="Acculée, la reine Melfetys brisa le serment et libéra l'essence de la Magie pour toutes les races. Une vague de puissance brute déferla sur le monde, donnant une chance aux mortels de se défendre contre l'Anéantissement." /></div></Page>
              <Page number={5}><div className="h-full px-10 pt-6"><MagicalText title="L'Éveil des Humains" text="Chez les Humains, Alaric canalisa ce flux à travers une branche de chêne, créant la première baguette humaine. Guidés par cet exemple, les humains devinrent une armée redoutable de mages de guerre." /></div></Page>
              <Page number={6}><div className="h-full px-10 pt-6"><MagicalText title="La Forge des Nains" text="Les Nains devinrent les plus grands fabricants de baguettes, alliant bois robustes et métal runique. Ils fournirent l'Alliance naissante, devenant l'armurerie indispensable de la résistance contre l'obscurité." /></div></Page>
              <Page number={7}><div className="h-full px-10 pt-6"><MagicalText title="Le Serment de Sang" text="Les Vampires de Lord Valerius apprirent à manipuler le sang pour restaurer la vie plutôt que de la prendre. Ils devinrent les plus grands guérisseurs de guerre, sauvant d'innombrables vies sur le champ de bataille." /></div></Page>
              <Page number={8}><div className="h-full px-10 pt-6"><MagicalText title="L'Alliance de la Lumière" text="L'Alliance de la Lumière unit Humains, Nains, Elfes et Vampires. Ensemble, ils affrontèrent les Ténèbres. Unis par l'espoir, ces peuples autrefois divisés se battaient comme un seul homme pour la survie d'Asgarm." /></div></Page>
              <Page number={9}><div className="h-full px-10 pt-6"><MagicalText title="Le Crépuscule des Cavaliers" text="La bataille finale eut lieu sur les Plaines Calcinées. Alaric anéantit le Seigneur des Cavaliers. Les Cavaliers étaient vaincus, mais le monde était fracturé et les graines du Chaos étaient semées." /></div></Page>
              <Page number={10}>
                <div className="h-full px-10 pt-6">
                  <MagicalText 
                    title="Le Nouvel Équilibre" 
                    text="Après la grande guerre, les rois des royaumes se sont réunis en conseil souverain. Ils ont décidé de créer le Conclave des Arcanes qui va protéger le monde de sorcier de Asgarm contre toute menace résiduelle. Mais dans l'ombre du trône, deux seigneurs du mal se sont éveillés. Sous le nom de sorciers du mal, ils ont forgé le Royaume du Mal ainsi que le Conclave des Ombres, fondant également l'école de magie noire Obscura pour enseigner les arts interdits de l'ombre et du sang." 
                  />
                </div>
              </Page>
            </HTMLFlipBook>
          </div>
        </motion.div>
      </div>

      <footer className="h-16 border-t border-gold/10 flex items-center justify-center bg-black/60 relative z-20 w-full mt-auto">
        <span className="shine-text text-[10px] tracking-[0.8em] uppercase font-bold">CONCLAVE SUPRÊME — ÉQUILIBRE D'ASGARM V3.1</span>
      </footer>

      <style jsx global>{`
        .page { background-color: #f4ecd8; background-image: url("https://www.transparenttextures.com/patterns/papyrus.png"); width: 450px; height: 600px; }
        .page-content { padding: 1.5rem; height: 100%; }
        .stf__wrapper { background-color: transparent !important; }
        .stf__block { background-color: transparent !important; }
        .custom-scrollbar::-webkit-scrollbar { width: 3px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(180, 141, 29, 0.2); border-radius: 10px; }
        .flip-book { transform-origin: center center; margin: 0 auto; }
      `}</style>
    </main>
  )
}
