
"use client"

import React, { forwardRef, useState, useEffect, useRef } from 'react'
import dynamic from 'next/dynamic'
import { Navigation } from '@/components/Navigation'
import { Loader2, Sparkles, Book as BookIcon } from 'lucide-react'
import { generateMagicalLore } from '@/ai/flows/generate-magical-lore-flow'
import { motion, AnimatePresence } from 'framer-motion'

// Importation dynamique pour éviter les erreurs SSR
const HTMLFlipBook = dynamic(() => import('react-pageflip'), { 
  ssr: false,
  loading: () => (
    <div className="w-[600px] h-[820px] flex flex-col items-center justify-center">
      <Loader2 className="w-12 h-12 animate-spin text-gold/20 mb-6" />
      <span className="text-gold/20 text-[10px] tracking-[0.8em] uppercase font-bold text-glow-gold">Infiltration du Grimoire...</span>
    </div>
  )
})

const Page = forwardRef<HTMLDivElement, { children: React.ReactNode; number?: number }>(
  ({ children, number }, ref) => (
    <div className="page shadow-2xl" ref={ref}>
      <div className="page-content">
        <div className="page-inner-content relative z-10 flex flex-col h-full">
          {children}
          {number && (
            <div className="page-footer font-serif italic text-[#4a3721]/30 text-[9px] tracking-[0.4em] mt-auto pt-4 text-center border-t border-[#4a3721]/5">
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
      
      <div className="flex-1 flex flex-col items-center justify-center p-6 pt-32 pb-12 relative z-10">
        
        {/* Préambule Royal */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-center mb-10 max-w-4xl"
        >
          <div className="flex items-center justify-center gap-4 mb-3">
            <div className="h-[1px] w-12 bg-gold/20" />
            <span className="text-gold text-[9px] tracking-[1.2em] uppercase font-bold text-glow-gold">Chroniques d'Asgarm</span>
            <div className="h-[1px] w-12 bg-gold/20" />
          </div>
          <h1 className="text-2xl md:text-3xl font-headline text-gold uppercase tracking-tighter mb-3 leading-tight text-glow-gold">
            Les Annales de la Souveraineté
          </h1>
          <p className="text-gold/80 text-[10px] italic font-medium tracking-[0.15em] max-w-2xl mx-auto leading-relaxed text-glow-gold">
            "Le savoir d'Asgarm est scellé dans ce grimoire éternel. Tournez les pages pour explorer les racines de notre destin."
          </p>
        </motion.div>

        {/* Le Grimoire */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="relative group"
        >
          <div className="flip-book-container relative shadow-[0_40px_100px_rgba(0,0,0,0.8)] border-[2px] border-[#1a120a] rounded-sm overflow-hidden bg-[#2a1a0a]">
            <HTMLFlipBook
              width={550}
              height={750}
              size="stretch"
              minWidth={315}
              maxWidth={1200}
              minHeight={400}
              maxHeight={1600}
              maxShadowOpacity={0.5}
              showCover={false}
              mobileScrollSupport={true}
              className="flip-book"
              ref={bookRef}
              startPage={0}
              drawShadow={true}
              flippingTime={800}
              usePortrait={false}
              startZIndex={0}
              autoSize={true}
              clickEventForward={true}
              useMouseEvents={true}
              swipeDistance={30}
              showPageCorners={true}
              disableFlipByClick={false}
            >
              {/* Page de Sommaire */}
              <Page number={1}>
                <div className="h-full flex flex-col items-center pt-6">
                  <BookIcon className="w-6 h-6 text-[#4a3721]/20 mb-6" />
                  <h2 className="text-base font-headline text-[#4a3721] uppercase tracking-[0.4em] mb-8 border-b border-[#4a3721]/10 pb-4 w-full text-center">Sommaire</h2>
                  <div className="flex flex-col gap-4 w-full px-6">
                    {chapters.map((ch, i) => (
                      <div key={i} className="flex items-baseline justify-between group cursor-pointer" onClick={() => bookRef.current.pageFlip().flip(ch.page - 1)}>
                        <span className="text-[10px] font-serif uppercase tracking-widest text-[#4a3721]/60 group-hover:text-[#4a3721] transition-colors">{ch.title}</span>
                        <div className="flex-1 border-b border-dotted border-[#4a3721]/10 mx-2" />
                        <span className="text-[10px] font-serif text-[#4a3721]/40">{ch.page}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-auto pb-8">
                    <p className="text-[#4a3721]/30 text-[8px] uppercase tracking-[0.5em] italic">Archives Royales d'Asgarm</p>
                  </div>
                </div>
              </Page>

              {/* Chapitre 1 */}
              <Page number={2}>
                <h2 className="text-[10px] font-headline text-[#4a3721]/60 uppercase tracking-[0.3em] mb-4 border-b border-[#4a3721]/5 pb-2">Chapitre I</h2>
                <h3 className="text-base font-headline text-[#4a3721] mb-4">L'Âge d'Harmonie</h3>
                <p className="text-[#3d2b19] first-letter:text-4xl first-letter:font-headline first-letter:mr-2 first-letter:float-left first-letter:text-[#4a3721] first-letter:leading-none font-serif leading-relaxed text-justify text-[11px]">
                  Autrefois, dans un temps que seuls les plus vieux récits murmurent, le monde d'Asgarm respirait en harmonie. C'était l'Âge d'Harmonie, un équilibre parfait maintenu par une règle immuable : seuls les Elfes à la peau verdoyante et leurs cousins reclus, les Elfes de Lune à la peau bleutée, pouvaient manier la magie. Les Elfes, avec leur grâce infinie, maîtrisaient la magie arcanique, une force pure et ordonnée, canalisée à travers des baguettes sculptées dans le bois ancestral. Les Elfes de Lune, eux, veillaient en secret sur la magie obscure, une énergie chaotique qu'ils contenaient avec une volonté de fer. Pendant ce temps, dans les montagnes, les Nains à la peau grisée forgeaient des merveilles de métal, et dans les plaines, les Humains à la peau beige ou blanche, jeunes et ambitieux, bâtissaient des cités prospères, ignorant tout des arcanes. La vie était simple, et la paix semblait éternelle.
                </p>
              </Page>

              {/* Chapitre 2 */}
              <Page number={3}>
                <h2 className="text-[10px] font-headline text-[#4a3721]/60 uppercase tracking-[0.3em] mb-4 border-b border-[#4a3721]/5 pb-2">Chapitre II</h2>
                <h3 className="text-base font-headline text-[#4a3721] mb-4">L'Invasion Abyssale</h3>
                <p className="text-[#3d2b19] first-letter:text-4xl first-letter:font-headline first-letter:mr-2 first-letter:float-left first-letter:text-[#4a3721] first-letter:leading-none font-serif leading-relaxed text-justify text-[11px]">
                  Mais cet équilibre millénaire fut pulvérisé. Venus des abysses, les Cavaliers de l'Apocalypse, de terrifiants sorciers de la mort, firent irruption à Asgarm. Leur arrivée ne fut pas qu'une simple invasion ; leur seule présence maléfique déstabilisa l'équilibre fragile entre la magie arcanique des Elfes et la magie obscure des Elfes de Lune, créant des tempêtes d'énergie chaotique qui ravageaient les terres. Les armées d'Asgarm, valeureuses mais impuissantes face à une sorcellerie nécromantique inconnue qui relevait leurs propres morts contre eux, furent balayées. Les cités tombaient les unes après les autres, la terre elle-même semblait mourir sous les pas des envahisseurs. Le désespoir s'installa alors qu'Asgarm était au bord de l'anéantissement total.
                </p>
              </Page>

              {/* Chapitre 3 */}
              <Page number={4}>
                <h2 className="text-[10px] font-headline text-[#4a3721]/60 uppercase tracking-[0.3em] mb-4 border-b border-[#4a3721]/5 pb-2">Chapitre III</h2>
                <h3 className="text-base font-headline text-[#4a3721] mb-4">Le Sacrifice de Melfetys</h3>
                <p className="text-[#3d2b19] first-letter:text-4xl first-letter:font-headline first-letter:mr-2 first-letter:float-left first-letter:text-[#4a3721] first-letter:leading-none font-serif leading-relaxed text-justify text-[11px]">
                  Acculée, la reine des Elfes, Melfetys, accomplit alors l'impensable, un sacrifice qui allait changer le monde à jamais. Le cœur brisé, elle brisa le serment millénaire de son peuple et libéra l'essence de la magie, l'offrant à toutes les races d'Asgarm. Une vague de puissance brute déferla sur le monde, un acte désespéré pour donner une chance aux mortels de se défendre. Mais ce don, si salvateur soit-il, créa un nouveau et profond déséquilibre. La magie, autrefois maîtrisée par quelques élus sages, était désormais entre les mains de tous, pour le meilleur... et surtout pour le pire. La boîte de Pandore était ouverte, libérant un pouvoir aussi merveilleux que destructeur.
                </p>
              </Page>

              {/* Chapitre 4 */}
              <Page number={5}>
                <h2 className="text-[10px] font-headline text-[#4a3721]/60 uppercase tracking-[0.3em] mb-4 border-b border-[#4a3721]/5 pb-2">Chapitre IV</h2>
                <h3 className="text-base font-headline text-[#4a3721] mb-4">L'Éveil des Humains</h3>
                <p className="text-[#3d2b19] first-letter:text-4xl first-letter:font-headline first-letter:mr-2 first-letter:float-left first-letter:text-[#4a3721] first-letter:leading-none font-serif leading-relaxed text-justify text-[11px]">
                  Chez les Humains, ce don se manifesta comme une force brute, une tempête intérieure. Un capitaine de la garde, Alaric, sentit cette puissance s'éveiller en lui. D'abord incapable de la contrôler, il comprit par instinct qu'il lui fallait un catalyseur pour ne pas être consumé. Saisissant une branche de chêne brisée sur le champ de bataille, il tenta de canaliser le flux. La branche crépita, s'illumina, et devint la toute première baguette humaine, projetant un torrent de flammes purificatrices sur ses ennemis. Guidés par son exemple héroïque, les humains se mirent à fabriquer leurs propres baguettes, transformant leurs légions décimées en une armée redoutable de mages de guerre, prêts à reconquérir leur foyer.
                </p>
              </Page>

              {/* Chapitre 5 */}
              <Page number={6}>
                <h2 className="text-[10px] font-headline text-[#4a3721]/60 uppercase tracking-[0.3em] mb-4 border-b border-[#4a3721]/5 pb-2">Chapitre V</h2>
                <h3 className="text-base font-headline text-[#4a3721] mb-4">La Forge des Nains</h3>
                <p className="text-[#3d2b19] first-letter:text-4xl first-letter:font-headline first-letter:mr-2 first-letter:float-left first-letter:text-[#4a3721] first-letter:leading-none font-serif leading-relaxed text-justify text-[11px]">
                  Dans les profondeurs des montagnes, la magie toucha les Nains. Thorgrim Main-de-Pierre, un maître forgeron, sentit la magie vibrer non seulement dans son âme, mais aussi dans la pierre et le métal qu'il travaillait. Appliquant la rigueur et la précision de la forge à ce nouvel art, les Nains devinrent rapidement les plus grands fabricants de baguettes d'Asgarm. Leurs créations, alliant bois robustes, cœurs de créatures magiques et incrustations de métal runique, étaient des chefs-d'œuvre de puissance et de fiabilité. Ils fournirent ces précieuses armes à toute l'Alliance naissante, devenant ainsi l'armurerie indispensable de la résistance.
                </p>
              </Page>

              {/* Chapitre 6 */}
              <Page number={7}>
                <h2 className="text-[10px] font-headline text-[#4a3721]/60 uppercase tracking-[0.3em] mb-4 border-b border-[#4a3721]/5 pb-2">Chapitre VI</h2>
                <h3 className="text-base font-headline text-[#4a3721] mb-4">Le Serment de Sang</h3>
                <p className="text-[#3d2b19] first-letter:text-4xl first-letter:font-headline first-letter:mr-2 first-letter:float-left first-letter:text-[#4a3721] first-letter:leading-none font-serif leading-relaxed text-justify text-[11px]">
                  Même les clans les plus reclus furent touchés. Les Vampires du Domaine Carmin, dirigés par le noble et énigmatique Lord Valerius, découvrirent que leur affinité innée avec le sang pouvait être canalisée à travers des baguettes. Au lieu de prendre la vie, ils apprirent à la manipuler pour la restaurer. Ils devinrent les plus grands guérisseurs de guerre, capables de refermer les blessures les plus mortelles par des sortilèges de sang complexes, des anges improbables sur un champ de bataille infernal. Leur intervention changea le cours de nombreuses batailles, sauvant d'innombrables vies et forgeant leur nouvelle réputation de sauveurs inattendus.
                </p>
              </Page>

              {/* Chapitre 7 */}
              <Page number={8}>
                <h2 className="text-[10px] font-headline text-[#4a3721]/60 uppercase tracking-[0.3em] mb-4 border-b border-[#4a3721]/5 pb-2">Chapitre VII</h2>
                <h3 className="text-base font-headline text-[#4a3721] mb-4">L'Alliance de la Lumière</h3>
                <p className="text-[#3d2b19] first-letter:text-4xl first-letter:font-headline first-letter:mr-2 first-letter:float-left first-letter:text-[#4a3721] first-letter:leading-none font-serif leading-relaxed text-justify text-[11px]">
                  C'est ainsi que naquit l'Alliance de la Lumière. Les armées humaines, menées par le désormais Roi-Mage Alaric, affrontaient les ténèbres avec des volées de sortilèges. Les légions de Nains, équipées des puissantes baguettes de Thorgrim, étaient des remparts infranchissables. Les Vampires de Valerius maintenaient les troupes en vie, tandis que les Elfes de Lune, maîtres de la magie de l'ombre, utilisaient leurs propres baguettes pour frapper en silence au cœur des lignes ennemies. Unis par le désespoir et l'espoir, ces peuples autrefois divisés se battaient enfin comme un seul homme pour la survie d'Asgarm, une fraternité forgée dans le feu du combat.
                </p>
              </Page>

              {/* Chapitre 8 */}
              <Page number={9}>
                <h2 className="text-[10px] font-headline text-[#4a3721]/60 uppercase tracking-[0.3em] mb-4 border-b border-[#4a3721]/5 pb-2">Chapitre VIII</h2>
                <h3 className="text-base font-headline text-[#4a3721] mb-4">Le Crépuscule des Cavaliers</h3>
                <p className="text-[#3d2b19] first-letter:text-4xl first-letter:font-headline first-letter:mr-2 first-letter:float-left first-letter:text-[#4a3721] first-letter:leading-none font-serif leading-relaxed text-justify text-[11px]">
                  La guerre changea de visage. L'avancée des Cavaliers fut stoppée dans le sang et la cendre. La bataille finale eut lieu sur les Plaines Calcinées. Le Seigneur des Cavaliers affronta Alaric en duel. Alors que le roi humain était sur le point de succomber, Thorgrim le Nain s'interposa, son corps et sa volonté de fer encaissant un sort mortel destiné à Alaric. Ce sacrifice héroïque offrit au roi une précieuse seconde. D'un cri de rage, il canalisa toute sa puissance dans sa baguette de chêne et déchaîna un sort qui anéantit le tyran. Les Cavaliers étaient vaincus, mais la faille dans le ciel demeurait.
                </p>
              </Page>

              {/* Chapitre 9 */}
              <Page number={10}>
                <h2 className="text-[10px] font-headline text-[#4a3721]/60 uppercase tracking-[0.3em] mb-4 border-b border-[#4a3721]/5 pb-2">Chapitre IX</h2>
                <h3 className="text-base font-headline text-[#4a3721] mb-4">Le Nouvel Équilibre</h3>
                <p className="text-[#3d2b19] first-letter:text-4xl first-letter:font-headline first-letter:mr-2 first-letter:float-left first-letter:text-[#4a3721] first-letter:leading-none font-serif leading-relaxed text-justify text-[11px]">
                  La guerre était gagnée, mais le monde était fracturé. Sans la sagesse millénaire des Elfes pour les guider, beaucoup de nouveaux manieurs de magie furent séduits par la puissance brute. De cette ambition naquit le Conclave des Ombres, un véritable royaume du mal cherchant à achever ce que les envahisseurs avaient commencé. Pour contrer cette nouvelle menace, l'Académie d'Asgarm et le Conclave des Arcanes furent fondés. Un nouvel équilibre précaire s'est installé. L'Académie forme une nouvelle génération, espérant qu'ils choisiront la lumière. Les pages de ce grimoire s'arrêtent ici, car c'est à vous d'écrire la suite.
                </p>
              </Page>
              
              {/* Page Oracle IA */}
              <Page number={11}>
                <div className="h-full flex flex-col pt-2">
                  <div className="text-center mb-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#4a3721]/20 bg-[#4a3721]/5 mb-2">
                      <Sparkles className="w-3 h-3 text-[#4a3721]/40" />
                      <span className="text-[8px] font-bold text-[#4a3721]/60 uppercase tracking-[0.2em]">Rituel d'Accès</span>
                    </div>
                    <h2 className="text-sm font-headline text-[#4a3721] uppercase tracking-[0.3em]">Oracle d'Éther</h2>
                  </div>
                  
                  {!lore ? (
                    <div className="flex flex-col gap-4 flex-1">
                      <p className="text-[#4a3721]/70 text-[10px] leading-relaxed italic text-center px-4 font-serif">
                        "Énoncez vos intentions pour que les archives révèlent un fragment de votre destinée personnelle..."
                      </p>
                      <textarea
                        className="w-full flex-1 bg-black/[0.01] border border-[#4a3721]/10 p-4 text-[#3d2b19] focus:border-[#4a3721]/20 outline-none resize-none font-serif text-[11px] leading-relaxed placeholder-[#4a3721]/20"
                        placeholder="Une vision de mon ascension..."
                        value={traits}
                        onChange={(e) => setTraits(e.target.value)}
                      />
                      <button
                        onClick={handleWeave}
                        disabled={loading || !traits.trim()}
                        className="w-full py-4 bg-[#2a1a0a] text-gold font-bold uppercase tracking-[0.6em] text-[9px] flex items-center justify-center gap-2 hover:bg-[#1a0f05] transition-all disabled:opacity-20 border border-gold/10"
                      >
                        {loading ? <Loader2 className="w-3 h-3 animate-spin" /> : "TISSER LE DESTIN"}
                      </button>
                    </div>
                  ) : (
                    <div className="flex flex-col h-full">
                      <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar mb-2">
                        <p className="text-[#3d2b19] text-[11px] leading-relaxed italic font-serif opacity-90 text-justify border-l border-[#4a3721]/10 pl-4">
                          {lore}
                        </p>
                      </div>
                      <button 
                        onClick={() => { setLore(null); setTraits(''); }}
                        className="mt-auto py-3 text-[#4a3721] text-[8px] uppercase tracking-[0.6em] font-bold border-t border-[#4a3721]/10 hover:opacity-50 transition-all text-center w-full"
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
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="mt-10 flex items-center gap-6"
        >
          <div className="h-[1px] w-12 bg-gold/40 shadow-[0_0_10px_rgba(212,175,55,0.4)]" />
          <span className="text-gold text-[10px] tracking-[0.6em] uppercase font-bold text-glow-gold">
            Faites glisser les pages pour explorer les annales
          </span>
          <div className="h-[1px] w-12 bg-gold/40 shadow-[0_0_10px_rgba(212,175,55,0.4)]" />
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
          padding: 2rem 2rem; 
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
          background: rgba(74, 55, 33, 0.1);
          border-radius: 10px;
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
