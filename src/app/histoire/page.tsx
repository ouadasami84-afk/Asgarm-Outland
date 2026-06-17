
"use client"

import React, { forwardRef, useState, useEffect, useRef } from 'react'
import dynamic from 'next/dynamic'
import { Navigation } from '@/components/Navigation'
import { Loader2 } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

// Importation dynamique pour éviter les erreurs SSR
const HTMLFlipBook = dynamic(() => import('react-pageflip'), { 
  ssr: false,
  loading: () => (
    <div className="w-[650px] h-[900px] flex flex-col items-center justify-center">
      <Loader2 className="w-12 h-12 animate-spin text-gold/20 mb-6" />
      <span className="text-gold/20 text-[10px] tracking-[0.8em] uppercase font-bold text-glow-gold">Infiltration du Grimoire...</span>
    </div>
  )
})

// Composant pour l'apparition magique des mots (Effet Harry Potter / AAA)
const MagicalText = ({ text, title }: { text: string; title?: string }) => {
  const words = text.split(' ');
  return (
    <div className="flex flex-col gap-2">
      {title && (
        <motion.h3 
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-base font-headline text-[#4a3721] mb-1 tracking-tight border-b border-[#4a3721]/10 pb-1"
        >
          {title}
        </motion.h3>
      )}
      <motion.p className="text-[#3d2b19] font-serif leading-relaxed text-justify text-[13px] italic">
        {words.map((word, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, filter: 'blur(10px)', y: 5 }}
            animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
            transition={{ 
              duration: 1, 
              delay: i * 0.012,
              ease: "easeOut"
            }}
            className="inline-block mr-1"
          >
            {word}
          </motion.span>
        ))}
      </motion.p>
    </div>
  );
};

const Page = forwardRef<HTMLDivElement, { children: React.ReactNode; number?: number }>(
  ({ children, number }, ref) => (
    <div className="page shadow-2xl relative" ref={ref}>
      {/* Bordure Arcanique Dorée */}
      <div className="absolute inset-3 border border-[#4a3721]/10 pointer-events-none z-20" />
      <div className="absolute inset-4 border-[0.5px] border-gold/10 pointer-events-none z-20" />
      
      {/* Coins Ornementaux */}
      <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-gold/30 z-20" />
      <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-gold/30 z-20" />
      <div className="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-gold/30 z-20" />
      <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-gold/30 z-20" />

      <div className="page-content relative z-10">
        <div className="page-inner-content flex flex-col h-full">
          {children}
          {number && (
            <div className="page-footer font-serif italic text-[#4a3721]/40 text-[9px] tracking-[0.4em] mt-auto pt-2 text-center">
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
      
      <div className="flex-1 flex flex-col items-center justify-center p-4 pt-32 pb-8 relative z-10">
        
        {/* Préambule Royal en Or */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-center mb-6 max-w-4xl"
        >
          <div className="flex items-center justify-center gap-4 mb-2">
            <div className="h-[1px] w-12 bg-gold/20 shadow-[0_0_15px_#4f46e5]" />
            <span className="text-gold text-[9px] tracking-[1.2em] uppercase font-bold text-glow-gold">Chroniques d'Asgarm</span>
            <div className="h-[1px] w-12 bg-gold/20 shadow-[0_0_15px_#4f46e5]" />
          </div>
          <h1 className="text-2xl md:text-3xl font-headline text-gold uppercase tracking-tighter mb-2 leading-tight text-glow-gold">
            Les Annales de la Souveraineté
          </h1>
          <p className="text-gold/80 text-[10px] italic font-medium tracking-[0.15em] max-w-2xl mx-auto leading-relaxed text-glow-gold">
            "Le savoir d'Asgarm est scellé dans ce grimoire éternel. Tournez les pages pour explorer les racines de notre destin."
          </p>
        </motion.div>

        {/* Le Grimoire avec lueur magique bleu nuit profonde */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="relative"
        >
          {/* Lueur d'arrière-plan magique bleu nuit profonde (Effet AAA) */}
          <div className="absolute inset-[-40px] bg-indigo-950/30 blur-[120px] rounded-full animate-pulse" />
          <div className="absolute inset-[-20px] bg-gold/5 blur-[80px] rounded-full" />
          
          <div className="flip-book-container relative shadow-[0_50px_120px_rgba(0,0,0,0.95)] border-[3px] border-[#1a120a] rounded-sm overflow-hidden bg-[#2a1a0a] ring-2 ring-gold/10">
            <HTMLFlipBook
              width={650}
              height={900}
              size="stretch"
              minWidth={315}
              maxWidth={1300}
              minHeight={400}
              maxHeight={1800}
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
              swipeDistance={35}
              showPageCorners={true}
              disableFlipByClick={false}
            >
              {/* Page de Sommaire Épurée */}
              <Page number={1}>
                <div className="h-full flex flex-col items-center pt-6 px-12">
                  <h2 className="text-base font-headline text-[#4a3721] uppercase tracking-[0.5em] mb-8 border-b border-[#4a3721]/15 pb-2 w-full text-center">Sommaire des Annales</h2>
                  <div className="flex flex-col gap-2 w-full">
                    {chapters.map((ch, i) => (
                      <div key={i} className="flex items-baseline justify-between group cursor-pointer py-1" onClick={() => bookRef.current.pageFlip().flip(ch.page - 1)}>
                        <span className="text-[12px] font-serif uppercase tracking-[0.2em] text-[#4a3721]/80 group-hover:text-gold transition-colors">{ch.title}</span>
                        <div className="flex-1 border-b border-dotted border-[#4a3721]/20 mx-3" />
                        <span className="text-[12px] font-serif text-[#4a3721]/60">{ch.page}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-auto pb-4">
                    <div className="flex flex-col items-center gap-2">
                      <div className="h-[1.5px] w-8 bg-gold/30" />
                      <p className="text-[#4a3721]/40 text-[9px] uppercase tracking-[0.6em] italic">Archives Royales d'Asgarm</p>
                    </div>
                  </div>
                </div>
              </Page>

              {/* Chapitres avec l'effet de révélation magique */}
              <Page number={2}>
                <div className="px-10 pt-4">
                  <MagicalText title="L'Âge d'Harmonie" text="Autrefois, dans un temps que seuls les plus vieux récits murmurent, le monde d'Asgarm respirait en harmonie. C'était l'Âge d'Harmonie, un équilibre parfait maintenu par une règle immuable : seuls les Elfes à la peau verdoyante et leurs cousins reclus, les Elfes de Lune à la peau bleutée, pouvaient manier la magie. Les Elfes, avec leur grâce infinie, maîtrisaient la magie arcanique, une force pure et ordonnée, canalisée à travers des baguettes sculptées dans le bois ancestral. Les Elfes de Lune, eux, veillaient en secret sur la magie obscure, une énergie chaotique qu'ils contenaient avec une volonté de fer. Pendant ce temps, dans les montagnes, les Nains à la peau grisée forgeaient des merveilles de métal, et dans les plaines, les Humains à la peau beige ou blanche, jeunes et ambitieux, bâtissaient des cités prospères, ignorant tout des arcanes. La vie était simple, et la paix semblait éternelle." />
                </div>
              </Page>

              <Page number={3}>
                <div className="px-10 pt-4">
                  <MagicalText title="L'Invasion Abyssale" text="Mais cet équilibre millénaire fut pulvérisé. Venus des abysses, les Cavaliers de l'Apocalypse, de terrifiants sorciers de la mort, firent irruption à Asgarm. Leur arrivée ne fut pas qu'une simple invasion ; leur seule présence maléfique déstabilisa l'équilibre fragile entre la magie arcanique des Elfes et la magie obscure des Elfes de Lune, créant des tempêtes d'énergie chaotique qui ravageaient les terres. Les armées d'Asgarm, valeureuses mais impuissantes face à une sorcellerie nécromantique inconnue qui relevait leurs propres morts contre eux, furent balayées. Les cités tombaient les unes après les autres, la terre elle-même semblait mourir sous les pas des envahisseurs. Le désespoir s'installa alors qu'Asgarm était au bord de l'anéantissement total." />
                </div>
              </Page>

              <Page number={4}>
                <div className="px-10 pt-4">
                  <MagicalText title="Le Sacrifice de Melfetys" text="Acculée, la reine des Elfes, Melfetys, accomplit alors l'impensable, un sacrifice qui allait changer le monde à jamais. Le cœur brisé, elle brisa le serment millénaire de son peuple et libéra l'essence de la magie, l'offrant à toutes les races d'Asgarm. Une vague de puissance brute déferla sur le monde, un acte désespéré pour donner une chance aux mortels de se défendre. Mais ce don, si salvateur soit-il, créa un nouveau et profond déséquilibre. La magie, autrefois maîtrisée par quelques élus sages, était désormais entre les mains de tous, pour le meilleur... et surtout pour le pire. La boîte de Pandore était ouverte, libérant un pouvoir aussi merveilleux que destructeur." />
                </div>
              </Page>

              <Page number={5}>
                <div className="px-10 pt-4">
                  <MagicalText title="L'Éveil des Humains" text="Chez les Humains, ce don se manifesta comme une force brute, une tempête intérieure. Un capitaine de la garde, Alaric, sentit cette puissance s'éveiller en lui. D'abord incapable de la contrôler, il comprit par instinct qu'il lui fallait un catalyseur pour ne pas être consumé. Saisissant une branche de chêne brisée sur le champ de bataille, il tenta de canaliser le flux. La branche crépita, s'illumina, et devint la toute première baguette humaine, projetant un torrent de flammes purificatrices sur ses ennemis. Guidés par son exemple héroïque, les humains se mirent à fabriquer leurs propres baguettes, transformant leurs légions décimées en une armée redoutable de mages de guerre, prêts à reconquérir leur foyer." />
                </div>
              </Page>

              <Page number={6}>
                <div className="px-10 pt-4">
                  <MagicalText title="La Forge des Nains" text="Dans les profondeurs des montagnes, la magie toucha les Nains. Thorgrim Main-de-Pierre, un maître forgeron, sentit la magie vibrer non seulement dans son âme, mais aussi dans la pierre et le métal qu'il travaillait. Appliquant la rigueur et la précision de la forge à ce nouvel art, les Nains devinrent rapidement les plus grands fabricants de baguettes d'Asgarm. Leurs créations, alliant bois robustes, cœurs de créatures magiques et incrustations de métal runique, étaient des chefs-d'œuvre de puissance et de fiabilité. Ils fournirent ces précieuses armes à toute l'Alliance naissante, devenant ainsi l'armurerie indispensable de la résistance." />
                </div>
              </Page>

              <Page number={7}>
                <div className="px-10 pt-4">
                  <MagicalText title="Le Serment de Sang" text="Même les clans les plus reclus furent touchés. Les Vampires du Domaine Carmin, à la peau sombre comme la nuit ou rouge comme le sang, dirigés par le noble et énigmatique Lord Valerius, découvrirent que leur affinité innée avec le sang pouvait être canalisée à travers des baguettes. Au lieu de prendre la vie, ils apprirent à la manipuler pour la restaurer. Ils devinrent les plus grands guérisseurs de guerre, capables de refermer les blessures les plus mortelles par des sortilèges de sang complexes, des anges improbables sur un champ de bataille infernal. Leur intervention changea le cours de nombreuses batailles, sauvant d'innombrables vies et forgeant leur nouvelle réputation de sauveurs inattendus." />
                </div>
              </Page>

              <Page number={8}>
                <div className="px-10 pt-4">
                  <MagicalText title="L'Alliance de la Lumière" text="C'est ainsi que naquit l'Alliance de la Lumière. Les armées humaines, menées par le désormais Roi-Mage Alaric, affrontaient les ténèbres avec des volées de sortilèges. Les légions de Nains, équipées des puissantes baguettes de Thorgrim, étaient des remparts infranchissables. Les Vampires de Valerius maintenaient les troupes en vie, tandis que les Elfes de Lune, maîtres de la magie de l'ombre, utilisaient leurs propres baguettes pour frapper en silence au cœur des lignes ennemies. Unis par le désespoir et l'espoir, ces peuples autrefois divisés se battaient enfin comme un seul homme pour la survie d'Asgarm, une fraternité forgée dans le feu du combat." />
                </div>
              </Page>

              <Page number={9}>
                <div className="px-10 pt-4">
                  <MagicalText title="Le Crépuscule des Cavaliers" text="La guerre changea de visage. L'avancée des Cavaliers fut stoppée dans le sang et la cendre. La bataille finale eut lieu sur les Plaines Calcinées. Le Seigneur des Cavaliers, une entité d'une puissance colossale, affronta Alaric en duel. Alors que le roi humain était sur le point de succomber, Thorgrim le Nain s'interposa, son corps et sa volonté de fer encaissant un sort mortel destiné à Alaric. Ce sacrifice héroïque offrit au roi une précieuse seconde. D'un cri de rage, il canalisa toute sa puissance dans sa baguette de chêne et déchaîna un sort qui anéantit le tyran. Les Cavaliers étaient vaincus, mais la faille dans le ciel demeurait, une blessure béante prête à tout consumer." />
                </div>
              </Page>

              <Page number={10}>
                <div className="px-10 pt-4">
                  <MagicalText title="Le Nouvel Équilibre" text="La guerre était gagnée, mais le monde était fracturé. Le don de Melfetys avait sauvé Asgarm, mais il avait aussi semé les graines du chaos. Sans la sagesse millénaire des Elfes pour les guider, beaucoup de nouveaux manieurs de magie furent séduits par la puissance brute et la corruption. Fascinés par le pouvoir des Cavaliers de la mort, ils se tournèrent vers les arts les plus sombres. De cette ambition naquit le Conclave des Ombres, un véritable royaume du mal cherchant à achever ce que les envahisseurs avaient commencé. Pour contrer cette nouvelle menace et guider les égarés, deux institutions furent fondées : l'Académie d'Asgarm et le Conclave des Arcanes, une pour enseigner, l'autre pour faire respecter la loi. Un nouvel équilibre précaire s'est installé. Les pages de ce grimoire s'arrêtent ici, car c'est à vous, héros d'Asgarm, d'écrire la suite." />
                </div>
              </Page>
            </HTMLFlipBook>
          </div>
        </motion.div>

        {/* Aide Navigation Dorée Éclatante */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2 }}
          className="mt-6 flex items-center gap-8"
        >
          <div className="h-[1px] w-16 bg-gold/40 shadow-[0_0_15px_#4f46e5]" />
          <span className="text-gold text-[10px] tracking-[0.8em] uppercase font-bold text-glow-gold text-center">
            Faites glisser les pages pour explorer les annales
          </span>
          <div className="h-[1px] w-16 bg-gold/40 shadow-[0_0_15px_#4f46e5]" />
        </motion.div>
      </div>

      <style jsx global>{`
        .flip-book { 
          background-color: transparent !important;
        }
        .page { 
          background-color: #f4ecd8; 
          background-image: url("https://www.transparenttextures.com/patterns/papyrus.png"); 
          height: 100%;
          width: 100%;
          position: relative;
        }
        .page-content { 
          padding: 1.5rem 2.5rem; 
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
        .stf__block {
          background-color: transparent !important;
        }
        .stf__wrapper {
          background-color: transparent !important;
        }
      `}</style>
    </main>
  )
}
