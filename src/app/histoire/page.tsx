
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

const MagicalText = ({ text, title, tome }: { text: string; title?: string; tome?: string }) => {
  const words = text.split(/\s+/);
  
  const getHighlightClass = (word: string) => {
    const cleanWord = word.replace(/[.,;!?()]/g, '');
    const goldKeywords = ['Asgarm', 'Elfes', 'Magie', 'Alaric', 'Thorgrim', 'Melfetys', 'Valerius', 'Alliance', 'Lumière', 'Roi-Mage', 'Grimoire', 'Souveraineté', 'Harmonie', 'Arcanique', 'Équilibre', 'Savoir', 'Rois', 'Ascarnia', 'Reliques', 'Prophétie', 'Sceau', 'Cristal', 'Aethel', 'Fer', 'Carmin', 'Val\'Theris', 'Aerendil', 'Elarion', 'Khaz\'Tor', 'Valerian', 'Arkanor'];
    const blueKeywords = ['Abysses', 'Cavaliers', 'Apocalypse', 'Mort', 'Ténèbres', 'Chaos', 'Corruption', 'Ombres', 'Obscure', 'Nécromantique', 'Maléfique', 'Invasion', 'Destruction', 'Anéantissement', 'Obscura', 'Mal', 'Sang', 'Cendres', 'Faille', 'Monstres', 'Menace', 'Inquiétants', 'Prophète Noir', 'Nyr\'Vael', 'Abîme'];

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
      {tome && (
        <span className="text-[8px] text-[#b48d1d]/60 font-bold tracking-[0.4em] uppercase mb-1">
          {tome}
        </span>
      )}
      {title && (
        <motion.h3 
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-[14px] font-headline text-[#4a3721] mb-4 tracking-tight border-b border-[#4a3721]/15 pb-2 uppercase"
        >
          {title}
        </motion.h3>
      )}
      <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar-inner">
        <motion.p className="text-[#3d2b19] font-serif leading-[1.6] text-justify text-[10px] italic">
          {words.map((word, i) => (
            <span
              key={i}
              className={`inline-block mr-1 transition-colors duration-1000 ${getHighlightClass(word)}`}
            >
              {word}
            </span>
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
            <div className="page-footer font-serif italic text-[#b48d1d] text-[10px] tracking-[0.4em] mt-auto pt-4 text-center font-bold text-glow-gold">
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
    // TOME I
    { tome: "TOME I", title: "Avant les Royaumes", page: 2 },
    { tome: "TOME I", title: "Naissance des Elfes", page: 3 },
    { tome: "TOME I", title: "Veines Arcaniques", page: 4 },
    { tome: "TOME I", title: "Baguettes Anciennes", page: 5 },
    { tome: "TOME I", title: "Cités de Lumière", page: 6 },
    { tome: "TOME I", title: "Murmures de l'Ombre", page: 7 },
    // TOME II
    { tome: "TOME II", title: "Les Deux Visions", page: 8 },
    { tome: "TOME II", title: "Cercle du Voile", page: 9 },
    { tome: "TOME II", title: "Miroirs Noirs", page: 10 },
    { tome: "TOME II", title: "Jugement de Val'Theris", page: 11 },
    { tome: "TOME II", title: "Exode Argenté", page: 12 },
    { tome: "TOME II", title: "Cités Lunaires", page: 13 },
    { tome: "TOME II", title: "Guerre des Frères", page: 14 },
    { tome: "TOME II", title: "Pacte Lune Blanche", page: 15 },
    { tome: "TOME II", title: "Héritage Nyr'Vael", page: 16 },
    { tome: "TOME II", title: "Premiers Présages", page: 17 },
    // TOME III
    { tome: "TOME III", title: "Aube des Mortels", page: 18 },
    { tome: "TOME III", title: "Enfants Montagnes", page: 19 },
    { tome: "TOME III", title: "Domaine Carmin", page: 20 },
    { tome: "TOME III", title: "Cinq Civilisations", page: 21 },
    { tome: "TOME III", title: "Grandes Découvertes", page: 22 },
    { tome: "TOME III", title: "Prophètes Étoiles", page: 23 },
    { tome: "TOME III", title: "Guerres Couronnes", page: 24 },
    { tome: "TOME III", title: "Profondeurs Interdites", page: 25 },
    { tome: "TOME III", title: "Dernier Avertissement", page: 26 },
    { tome: "TOME III", title: "Ciel se Déchire", page: 27 },
    // TOME IV
    { tome: "TOME IV", title: "Ciel Mourut", page: 28 },
    { tome: "TOME IV", title: "Armées Abîme", page: 29 },
    { tome: "TOME IV", title: "Premier Cavalier", page: 30 },
    { tome: "TOME IV", title: "Chute des Humains", page: 31 },
    { tome: "TOME IV", title: "Dernier Conseil Elfes", page: 32 },
    { tome: "TOME IV", title: "Marche des Nains", page: 33 },
    { tome: "TOME IV", title: "Silence Domaine", page: 34 },
    { tome: "TOME IV", title: "Batailles Ouest", page: 35 },
    { tome: "TOME IV", title: "Quatre Cavaliers", page: 36 },
    { tome: "TOME IV", title: "Aube des Héros", page: 37 },
    // TOME V
    { tome: "TOME V", title: "Chute Val'Theris", page: 38 },
    { tome: "TOME V", title: "Dernier Conseil", page: 39 },
    { tome: "TOME V", title: "Secret Premiers Elfes", page: 40 },
    { tome: "TOME V", title: "Reine Face au Destin", page: 41 },
    { tome: "TOME V", title: "Le Sacrifice", page: 42 },
    { tome: "TOME V", title: "Éveil des Humains", page: 43 },
    { tome: "TOME V", title: "Premier Sorcier", page: 44 },
    { tome: "TOME V", title: "Thorgrim Main-de-Pierre", page: 45 },
    { tome: "TOME V", title: "Valerius Sang Vivant", page: 46 },
    { tome: "TOME V", title: "Mort de la Reine", page: 47 },
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
            <span className="text-gold text-[9px] tracking-[1em] uppercase font-bold text-glow-gold">Archives d'Asgarm</span>
            <div className="h-[1px] w-12 bg-gold/20" />
          </div>
          <h1 className="text-4xl font-headline uppercase tracking-tighter mb-4 leading-tight block">
            <span className="shine-text">Les Annales de la Souveraineté</span>
          </h1>
          <p className="text-[10px] tracking-[0.6em] uppercase font-bold opacity-80 block">
            <span className="shine-text">Explorez le Grimoire pour révéler notre histoire</span>
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.99 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 1, delay: 0.2 }} 
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
              maxShadowOpacity={0.4}
              flippingTime={800}
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
              {/* PAGE 1 - SOMMAIRE */}
              <Page number={1}>
                <div className="h-full flex flex-col pt-6 px-10">
                  <h2 className="text-[18px] font-headline text-[#b48d1d] uppercase tracking-[0.2em] mb-4 border-b border-[#b48d1d]/20 pb-3 w-full text-center text-glow-gold">
                    Sommaire
                  </h2>
                  <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
                    <div className="flex flex-col gap-1 w-full pb-8">
                      {chapters.map((ch, i) => (
                        <div 
                          key={i} 
                          className="flex items-baseline justify-between group cursor-pointer py-1.5 border-b border-[#4a3721]/5 hover:bg-[#b48d1d]/5 px-3 transition-colors" 
                          onClick={() => bookRef.current.pageFlip().flip(ch.page - 1)}
                        >
                          <div className="flex flex-col">
                            <span className="text-[7px] text-[#b48d1d]/60 font-bold uppercase tracking-[0.1em]">{ch.tome}</span>
                            <span className="text-[9px] font-serif uppercase text-[#0c1b41] group-hover:text-[#b48d1d] truncate pr-4">{ch.title}</span>
                          </div>
                          <div className="flex-1 border-b border-dotted border-[#b48d1d]/20 mx-2" />
                          <span className="text-[9px] font-serif text-[#4a3721]/70">{ch.page}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="mt-4 pb-4 flex flex-col items-center">
                    <div className="h-[1px] w-16 bg-[#b48d1d]/30 mb-3" />
                    <p className="text-[#b48d1d] text-[10px] uppercase tracking-[0.4em] italic font-bold text-glow-gold">Archives Royales</p>
                  </div>
                </div>
              </Page>

              {/* TOME I */}
              <Page number={2}><div className="h-full px-10 pt-6"><MagicalText tome="TOME I" title="Avant les Royaumes" text="Bien avant que les Hommes ne bâtissent leurs cités. Bien avant que les Nains ne creusent leurs forteresses. Bien avant même que les premiers royaumes ne portent un nom. Asgarm existait déjà. À cette époque reculée, le continent était méconnaissable. D'immenses forêts recouvraient les terres jusqu'à l'horizon. Les montagnes étaient plus hautes. Les océans plus vastes. Les saisons elles-mêmes semblaient différentes. La magie parcourait librement le monde. Elle n'était enfermée dans aucune baguette. Elle n'obéissait à aucune loi. Elle coulait naturellement à travers chaque rivière, chaque arbre, chaque pierre." /></div></Page>
              <Page number={3}><div className="h-full px-10 pt-6"><MagicalText tome="TOME I" title="La Naissance des Premiers Elfes" text="Nul ne sait exactement comment apparurent les premiers Elfes. Certains affirment qu'ils furent créés par les étoiles. D'autres prétendent qu'ils naquirent directement des Veines Arcaniques qui traversent le monde. Les plus anciens récits racontent qu'un arbre gigantesque se dressait autrefois au centre du continent. Un arbre si immense que son sommet disparaissait dans les nuages. Ses racines s'étendaient sous les océans. Son feuillage brillait la nuit comme une constellation. Les Elfes l'appelaient Elarion. L'Arbre-Monde." /></div></Page>
              <Page number={4}><div className="h-full px-10 pt-6"><MagicalText tome="TOME I" title="Les Veines Arcaniques" text="Les premiers érudits elfiques découvrirent rapidement que la magie ne se trouvait pas partout de manière égale. Sous la surface du monde circulaient d'immenses courants invisibles. Ils les appelèrent les Veines Arcaniques. Ces veines parcouraient tout Asgarm. Certaines traversaient les montagnes. D'autres serpentaient sous les océans. Quelques-unes convergaient en des points particuliers où la magie devenait extrêmement puissante. Ces lieux furent appelés Nœuds Arcaniques." /></div></Page>
              <Page number={5}><div className="h-full px-10 pt-6"><MagicalText tome="TOME I" title="Les Baguettes Anciennes" text="Durant plusieurs générations, les Elfes utilisaient la magie uniquement par la pensée. Mais cette méthode présentait des limites. Les sortilèges les plus complexes demandaient une concentration immense. C'est alors qu'apparut le mage Aerendil. Considéré aujourd'hui comme le père de toutes les baguettes. Aerendil remarqua que certains bois réagissaient naturellement aux flux arcaniques. Il façonna alors un simple bâton. Lorsqu'il lança un sort à travers celui-ci, la magie répondit avec une précision inégalée. La première baguette venait de naître." /></div></Page>
              <Page number={6}><div className="h-full px-10 pt-6"><MagicalText tome="TOME I" title="Les Cités de Lumière" text="Les siècles passèrent. Les villages devinrent des villes. Parmi elles, une cité surpassait toutes les autres. Val'Theris. La Cité de Lumière. Construite autour du plus grand Nœud Arcanique connu. Ses tours de cristal pouvaient être aperçues à plusieurs jours de voyage. Ses bibliothèques contenaient davantage de savoir que n'importe quel autre lieu du monde. Les plus grands mages y vivaient. Pour beaucoup, Val'Theris représentait le sommet de la civilisation." /></div></Page>
              <Page number={7}><div className="h-full px-10 pt-6"><MagicalText tome="TOME I" title="Les Murmures de l'Ombre" text="Parmi les érudits de Val'Theris se trouvait un groupe particulier. Ils ne s'intéressaient pas à la lumière. Ils étudiaient les rêves. Les cauchemars. La mort. Les ombres. Au début, leurs recherches furent encouragées. Mais certaines expériences commencèrent à inquiéter les Hauts Mages. Des créatures étranges furent invoquées. Des accidents se multiplièrent. Sans le savoir, les premières graines de la future séparation venaient d'être semées." /></div></Page>

              {/* TOME II */}
              <Page number={8}><div className="h-full px-10 pt-6"><MagicalText tome="TOME II" title="Les Deux Visions" text="Durant plusieurs siècles, les Elfes vécurent dans une prospérité sans précédent. Mais sous cette apparente perfection, une fracture grandissait. À Val'Theris, deux visions du monde s'opposaient désormais. La première était portée par les Hauts Mages Arcaniques. Selon eux, la magie devait servir l'harmonie. La seconde était défendue par les Chercheurs du Voile. Pour eux, aucune connaissance ne devait être interdite." /></div></Page>
              <Page number={9}><div className="h-full px-10 pt-6"><MagicalText tome="TOME II" title="Le Cercle du Voile" text="Parmi les Chercheurs du Voile se trouvait un mage exceptionnel. Son nom était Nyr'Vael. Même ses adversaires reconnaissaient son génie. Nyr'Vael était convaincu qu'une immense partie de la magie restait inconnue. Autour de lui se forma progressivement un cercle d'érudits partageant ses idées. Ce groupe prit le nom de Cercle du Voile. Leurs recherches devinrent de plus en plus secrètes. Ils explorèrent la mort." /></div></Page>
              <Page number={10}><div className="h-full px-10 pt-6"><MagicalText tome="TOME II" title="La Nuit des Miroirs Noirs" text="L'événement qui changea tout survint durant la Nuit des Miroirs Noirs. Dans les profondeurs de Val'Theris, le Cercle du Voile réalisa une expérience interdite. Une onde magique traversa toute la cité. Le ciel devint noir. Pendant plusieurs heures, les habitants virent leurs propres reflets agir indépendamment d'eux. Lorsque le phénomène prit fin, plusieurs centaines d'elfes avaient disparu sans laisser de trace." /></div></Page>
              <Page number={11}><div className="h-full px-10 pt-6"><MagicalText tome="TOME II" title="Le Jugement de Val'Theris" text="La catastrophe provoqua une onde de choc. Nyr'Vael fut convoqué devant le Conseil des Sages. Le verdict tomba : le Cercle du Voile était déclaré responsable. Toutes les recherches liées aux ombres furent interdites. Nyr'Vael fut banni. Devant le Conseil, il prononça : 'Vous craignez ce que vous ne comprenez pas. Un jour, cette peur vous condamnera.' Puis il quitta Val'Theris avec des milliers de partisans." /></div></Page>
              <Page number={12}><div className="h-full px-10 pt-6"><MagicalText tome="TOME II" title="L'Exode Argenté" text="L'exil dura plusieurs années. Les bannis atteignirent les régions septentrionales du continent. Là où les nuits étaient plus longues. Progressivment, leur apparence commença à changer. Leur peau prit une teinte bleutée. Leurs yeux devinrent argentés. Les générations suivantes furent différentes de leurs ancêtres. Un nouveau peuple venait de naître. Les Elfes de Lune." /></div></Page>
              <Page number={13}><div className="h-full px-10 pt-6"><MagicalText tome="TOME II" title="Les Cités Lunaires" text="Les Elfes de Lune bâtirent de magnifiques cités sous les étoiles. Leurs palais étaient sculptés dans des cristaux sombres. Leurs bibliothèques contenaient des savoirs oubliés. Contrairement aux rumeurs, ils ne devinrent pas des monstres. Ils restaient des érudits. Mais leur magie était différente. Ils comprenaient des forces que les autres peuples préféraient ignorer." /></div></Page>
              <Page number={14}><div className="h-full px-10 pt-6"><MagicalText tome="TOME II" title="La Guerre des Frères" text="Malheureusement, la paix ne dura pas. Des incidents frontaliers éclatèrent entre les royaumes elfes et plusieurs cités lunaires. Pendant cinquante ans, les combats ravagèrent les frontières. Cette période fut baptisée la Guerre des Frères. Car pour la première fois de leur histoire, les Elfes combattaient leurs propres cousins." /></div></Page>
              <Page number={15}><div className="h-full px-10 pt-6"><MagicalText tome="TOME II" title="Le Pacte de la Lune Blanche" text="Après cinquante années de souffrance, les dirigeants comprirent qu'aucune victoire n'était possible. Le Pacte de la Lune Blanche fut signé. Les frontières furent reconnues. Les hostilités cessèrent. Le monde retrouva un équilibre fragile, bien que la méfiance demeure entre les deux lignées elfiques." /></div></Page>
              <Page number={16}><div className="h-full px-10 pt-6"><MagicalText tome="TOME II" title="L'Héritage de Nyr'Vael" text="Les siècles passèrent, mais l'héritage de Nyr'Vael demeura. Les Elfes de Lune devinrent les gardiens des connaissances obscures. Ils étudièrent les malédictions et les rêves. De nombreux peuples les craignaient, mais tous reconnaissaient leur puissance. Ainsi naquirent les deux grandes traditions : la Voie Arcannique et la Voie Lunaire." /></div></Page>
              <Page number={17}><div className="h-full px-10 pt-6"><MagicalText tome="TOME II" title="Les Premiers Présages" text="Alors que les relations se reconstruisaient, des événements étranges apparurent. Des étoiles disparaissaient. Des créatures inconnues étaient aperçues aux frontières. Partout, les prophètes faisaient les mêmes cauchemars : un ciel déchiré, une ombre gigantesque. Quelque chose approchait du monde d'Asgarm." /></div></Page>

              {/* TOME III */}
              <Page number={18}><div className="h-full px-10 pt-6"><MagicalText tome="TOME III" title="L'Aube des Mortels" text="Dans les plaines du sud apparurent les premiers peuples humains. Contrairement aux Elfes, leur existence était brève. Pourtant, ils possédaient un don précieux : l'adaptation. Leurs villages se transformaient rapidement en cités. Leurs chefs devenaient des rois. Aucun elfe ne pouvait imaginer qu'ils deviendraient un jour la puissance dominante du continent." /></div></Page>
              <Page number={19}><div className="h-full px-10 pt-6"><MagicalText tome="TOME III" title="Les Enfants des Montagnes" text="À l'est d'Asgarm, sous les sommets enneigés, une autre civilisation prenait forme : les Nains. Les Nains étaient les bâtisseurs et les forgerons. Leur premier royaume fut Khaz'Tor. Une immense cité souterraine aux forges brûlantes. Rapidement, ils gagnèrent une réputation unique de maîtres architectes." /></div></Page>
              <Page number={20}><div className="h-full px-10 pt-6"><MagicalText tome="TOME III" title="Le Domaine Carmin" text="À l'ouest naquit le Domaine Carmin. Les Vampires possédaient une société raffinée, loin des monstres décrits par les légendes. Le premier souverain fut Valerian le Sage. Son règne posa les fondations d'une culture fondée sur la connaissance et la discipline. Le Domaine Carmin demeura longtemps isolé, observant les autres peuples." /></div></Page>
              <Page number={21}><div className="h-full px-10 pt-6"><MagicalText tome="TOME III" title="Les Cinq Civilisations" text="Le temps poursuivit son œuvre. Peu à peu, cinq civilisations dominèrent Asgarm : Humains, Nains, Elfes, Elfes de Lune et Vampires. Pour la première fois, plusieurs peuples partageaient le même continent. Des routes commerciales apparurent et le monde entra dans une longue période de prospérité." /></div></Page>
              <Page number={22}><div className="h-full px-10 pt-6"><MagicalText tome="TOME III" title="Les Grandes Découvertes" text="Cette époque fut le Premier Âge de la Connaissance. Les Elfes perfectionnèrent les Veines Arcaniques, les Nains créèrent des mécanismes éternels, et les Vampires réalisèrent d'importantes découvertes médicales. Beaucoup pensaient alors que le monde avait atteint son apogée. Ils avaient tort." /></div></Page>
              <Page number={23}><div className="h-full px-10 pt-6"><MagicalText tome="TOME III" title="Les Prophètes des Étoiles" text="Les Veilleurs Stellaires remarquèrent que les constellations se déformaient. Ils commencèrent à faire les mêmes rêves décrivant une immense fissure dans le ciel et quatre silhouettes avançant à travers les flammes. Leurs avertissements furent ignorés par les rois, car la paix semblait trop solide." /></div></Page>
              <Page number={24}><div className="h-full px-10 pt-6"><MagicalText tome="TOME III" title="Les Guerres des Couronnes" text="Malgré la prospérité, les royaumes humains commencèrent à s'affronter pour le contrôle des terres. Ces guerres forgèrent de grands chefs et de futurs héros. Parmi les familles qui émergèrent se trouvait la lignée des Arkanor, dont descendrait un jour le célèbre Alaric." /></div></Page>
              <Page number={25}><div className="h-full px-10 pt-6"><MagicalText tome="TOME III" title="Les Profondeurs Interdites" text="Dans les montagnes, les Nains découvrirent des galeries inconnues plus anciennes que toutes les cités. Le Haut Conseil décida de sceller ces découvertes et de classer les archives secrètes. Ce qu'ils y trouvèrent concernant une civilisation oubliée était terrifiant." /></div></Page>
              <Page number={26}><div className="h-full px-10 pt-6"><MagicalText tome="TOME III" title="Le Dernier Avertissement" text="Un siècle avant la catastrophe, les Veilleurs Stellaires publièrent un dernier rapport affirmant que quelque chose capable de traverser les dimensions approchait. Peu de dirigeants y prêtèrent attention, préférant jouir de l'abondance. Cette erreur allait coûter très cher à Asgarm." /></div></Page>
              <Page number={27}><div className="h-full px-10 pt-6"><MagicalText tome="TOME III" title="Le Ciel se Déchire" text="Puis vint le jour où le ciel se déchira. Une immense fissure apparut au-dessus du continent. À travers la faille apparurent des tempêtes noires et quatre silhouettes montées sur des destriers d'ombre. Les Cavaliers de l'Apocalypse étaient arrivés. L'Âge de la Guerre commençait." /></div></Page>

              {/* TOME IV */}
              <Page number={28}><div className="h-full px-10 pt-6"><MagicalText tome="TOME IV" title="Le Jour où le Ciel Mourut" text="Le ciel perdit sa couleur. Une immense déchirure noire traversa les nuages. Alors, quelque chose commença à sortir. Les tempêtes magiques dévastèrent les côtes et les montagnes tremblèrent. C'était la fin de la tranquillité pour tous les peuples d'Asgarm." /></div></Page>
              <Page number={29}><div className="h-full px-10 pt-6"><MagicalText tome="TOME IV" title="Les Armées de l'Abîme" text="Des milliers de créatures inconnues envahirent Asgarm. Elles ne parlaient pas, ne négociaient pas. Elles avançaient. Partout où elles passaient, la mort suivait. Les villages furent rasés en quelques heures et le continent sombra progressivement dans le chaos le plus total." /></div></Page>
              <Page number={30}><div className="h-full px-10 pt-6"><MagicalText tome="TOME IV" title="Le Premier Cavalier" text="Un cavalier gigantesque sur un destrier noir apparut. Partout où il passait, les morts se relevaient. Leurs yeux étaient vides, leurs âmes avaient disparu. Ils servaient désormais le Cavalier de la Mort. C'était le premier des Quatre, le héraut de l'anéantissement." /></div></Page>
              <Page number={31}><div className="h-full px-10 pt-6"><MagicalText tome="TOME IV" title="La Chute des Royaumes Humains" text="Les royaumes humains furent les premiers touchés. Malgré leur courage, ils étaient dépassés. Les cités comme Aldor et Kareth tombèrent l'une après l'autre. Des millions de réfugiés submergèrent les routes, fuyant une armée qui ne connaissait ni la fatigue ni la pitié." /></div></Page>
              <Page number={32}><div className="h-full px-10 pt-6"><MagicalText tome="TOME IV" title="Le Dernier Conseil des Elfes" text="À Val'Theris, la reine Melfetys convoqua le plus grand conseil. La conclusion fut amère : les armées traditionnelles ne suffiraient pas. Les Cavaliers maîtrisaient une magie capable de corrompre la vie elle-même. Pour survivre, il faudrait accomplir l'impensable." /></div></Page>
              <Page number={33}><div className="h-full px-10 pt-6"><MagicalText tome="TOME IV" title="La Marche des Nains" text="Le Haut Roi Durnak ordonna la mobilisation générale. Toutes les forges furent réquisitionnées pour forger des armes capables de blesser les créatures de l'Abîme. Jamais l'histoire naine n'avait connu un tel effort de guerre. L'acier coulait à flots dans les profondeurs." /></div></Page>
              <Page number={34}><div className="h-full px-10 pt-6"><MagicalText tome="TOME IV" title="Le Silence du Domaine Carmin" text="Les Vampires restèrent mystérieusement silencieux pendant des mois. Dans l'ombre, ils étudiaient la magie des Cavaliers pour comprendre comment ils manipulaient les âmes. Ce qu'ils découvrirent terrifia même les plus braves : les envahisseurs ne tuaient pas, ils effaçaient l'existence." /></div></Page>
              <Page number={35}><div className="h-full px-10 pt-6"><MagicalText tome="TOME IV" title="Les Batailles de l'Ouest" text="Les grandes offensives échouèrent. Les Cavaliers semblaient avoir un coup d'avance, comme s'ils lisaient dans les pensées de leurs adversaires. La peur se répandit et beaucoup commencèrent à croire que la fin du monde était inévitable." /></div></Page>
              <Page number={36}><div className="h-full px-10 pt-6"><MagicalText tome="TOME IV" title="Les Quatre Cavaliers" text="Mort, Ruine, Famine et Désespoir. Chacun possédait sa propre armée et ses propres pouvoirs. Lorsqu'ils apparaissaient ensemble, des villes entières disparaissaient de la carte. Même les plus grands mages elfiques se sentaient impuissants face à leur puissance brute." /></div></Page>
              <Page number={37}><div className="h-full px-10 pt-6"><MagicalText tome="TOME IV" title="L'Aube des Héros" text="Alors que tout semblait perdu, trois destins se croisèrent. Alaric, un capitaine humain ; Thorgrim, un maître forgeron nain ; et Valerius, un érudit vampire. Personne ne connaissait leurs noms à l'époque, mais ils allaient bientôt devenir les piliers de la résistance d'Asgarm." /></div></Page>

              {/* TOME V */}
              <Page number={38}><div className="h-full px-10 pt-6"><MagicalText tome="TOME V" title="La Chute de Val'Theris" text="Le siège de Val'Theris dura cent jours. Mais au cent-unième jour, les remparts de cristal tombèrent. La Cité de Lumière, cœur du savoir magique, était envahie. Ce fut le moment le plus sombre de la guerre, car si la capitale des Elfes tombait, Asgarm n'avait plus d'espoir." /></div></Page>
              <Page number={39}><div className="h-full px-10 pt-6"><MagicalText tome="TOME V" title="Le Dernier Conseil" text="Melfetys réunit les derniers mages survivants. Si rien ne changeait, Asgarm disparaîtrait à jamais. Elle décida alors de révéler le secret gardé depuis des millénaires : les Elfes n'étaient que les gardiens de la magie, et le moment était venu de la libérer pour tous." /></div></Page>
              <Page number={40}><div className="h-full px-10 pt-6"><MagicalText tome="TOME V" title="Le Secret des Premiers Elfes" text="L'Essence Arcannique était une source de pouvoir capable d'éveiller la magie chez tout être vivant. Les souverains avaient juré de la protéger, craignant les conséquences de sa libération. Mais face à l'apocalypse, Melfetys comprit qu'il fallait briser ce serment ancestral." /></div></Page>
              <Page number={41}><div className="h-full px-10 pt-6"><MagicalText tome="TOME V" title="Une Reine Face au Destin" text="Libérer l'Essence Arcannique exigerait le sacrifice ultime. Melfetys savait qu'elle devrait donner sa propre vie pour ouvrir le Cœur Arcannique. À l'aube, sa décision était prise : elle se sacrifierait pour offrir une arme à l'humanité et aux autres peuples." /></div></Page>
              <Page number={42}><div className="h-full px-10 pt-6"><MagicalText tome="TOME V" title="Le Sacrifice" text="Le rituel commença. Melfetys posa ses mains sur le Cœur Arcannique et le monde fut submergé par une vague de magie pure. L'énergie traversa les montagnes et les forêts, éveillant le don magique chez des millions d'êtres qui n'en avaient jamais possédé." /></div></Page>
              <Page number={43}><div className="h-full px-10 pt-6"><MagicalText tome="TOME V" title="L'Éveil des Humains" text="À des kilomètres de là, Alaric sentit une chaleur immense. Pour la première fois, il pouvait voir les flux de magie. Il n'était pas le seul : partout, les Humains s'éveillaient. Ils avaient enfin la puissance nécessaire pour combattre les armées de l'Abîme." /></div></Page>
              <Page number={44}><div className="h-full px-10 pt-6"><MagicalText tome="TOME V" title="Le Premier Sorcier Humain" text="Alaric saisit une branche de chêne et y concentra son énergie. La branche s'illumina et des runes apparurent : la première baguette humaine était née. Il projeta un torrent de flammes, prouvant que les mortels pouvaient désormais manier les arcanes." /></div></Page>
              <Page number={45}><div className="h-full px-10 pt-6"><MagicalText tome="TOME V" title="Thorgrim Main-de-Pierre" text="Thorgrim comprit que le métal pouvait stabiliser cette nouvelle énergie. Il forgea les premières baguettes métalliques, capables de supporter une puissance bien supérieure. Ses créations allaient bientôt équiper les nouvelles armées de sorciers du continent." /></div></Page>
              <Page number={46}><div className="h-full px-10 pt-6"><MagicalText tome="TOME V" title="Valerius et le Sang Vivant" text="Les Vampires découvrirent une affinité avec la magie du sang pour guérir. Valerius sauva des milliers de blessés, restaurant des membres et guérissant des maux incurables. La magie n'était plus seulement une arme, mais aussi un rempart pour préserver la vie." /></div></Page>
              <Page number={47}><div className="h-full px-10 pt-6"><MagicalText tome="TOME V" title="La Mort de la Reine" text="Melfetys disparut dans une lumière éclatante, son énergie se mêlant aux Veines Arcaniques du monde. Elle n'était plus, mais elle avait offert une chance à Asgarm. Ainsi débuta l'ère des trois héros : Alaric, Thorgrim et Valerius, unis pour la bataille finale." /></div></Page>
            </HTMLFlipBook>
          </div>
        </motion.div>
      </div>

      <footer className="h-16 border-t border-gold/10 flex items-center justify-center bg-black/60 relative z-20 w-full mt-auto">
        <span className="shine-text text-[10px] tracking-[0.8em] uppercase font-bold">CONCLAVE SUPRÊME — ÉQUILIBRE D'ASGARM</span>
      </footer>

      <style jsx global>{`
        .page { background-color: #f4ecd8; background-image: url("https://www.transparenttextures.com/patterns/papyrus.png"); width: 450px; height: 600px; }
        .page-content { padding: 1.5rem; height: 100%; }
        .custom-scrollbar::-webkit-scrollbar { width: 3px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(180, 141, 29, 0.2); border-radius: 10px; }
        .custom-scrollbar-inner::-webkit-scrollbar { width: 2px; }
        .custom-scrollbar-inner::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar-inner::-webkit-scrollbar-thumb { background: rgba(180, 141, 29, 0.1); border-radius: 10px; }
        .flip-book { transform-origin: center center; margin: 0 auto; }
      `}</style>
    </main>
  )
}
    