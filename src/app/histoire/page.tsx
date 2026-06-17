
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
  const words = text.split(/\s+/);
  
  const getHighlightClass = (word: string) => {
    const cleanWord = word.replace(/[.,;!?()]/g, '');
    const goldKeywords = ['Asgarm', 'Elfes', 'Magie', 'Alaric', 'Thorgrim', 'Melfetys', 'Valerius', 'Alliance', 'Lumière', 'Roi-Mage', 'Grimoire', 'Souveraineté', 'Harmonie', 'Arcanique', 'Équilibre', 'Savoir', 'Rois', 'Ascarnia', 'Reliques', 'Prophétie', 'Sceau', 'Cristal', 'Aethel', 'Fer', 'Carmin', 'Val\'Theris'];
    const blueKeywords = ['Abysses', 'Cavaliers', 'Apocalypse', 'Mort', 'Ténèbres', 'Chaos', 'Corruption', 'Ombres', 'Obscure', 'Nécromantique', 'Maléfique', 'Invasion', 'Destruction', 'Anéantissement', 'Obscura', 'Mal', 'Sang', 'Cendres', 'Faille', 'Monstres', 'Menace', 'Inquiétants', 'Prophète Noir'];

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
          className="text-[16px] font-headline text-[#4a3721] mb-4 tracking-tight border-b border-[#4a3721]/15 pb-2 uppercase"
        >
          {title}
        </motion.h3>
      )}
      <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar-inner">
        <motion.p className="text-[#3d2b19] font-serif leading-[1.6] text-justify text-[11px] italic">
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
    { title: "L'Âge d'Harmonie", page: 2 },
    { title: "L'Invasion Abyssale", page: 3 },
    { title: "Le Sacrifice de Melfetys", page: 4 },
    { title: "L'Éveil des Humains", page: 5 },
    { title: "La Forge des Nains", page: 6 },
    { title: "Le Serment de Sang", page: 7 },
    { title: "L'Alliance de la Lumière", page: 8 },
    { title: "Le Crépuscule des Cavaliers", page: 9 },
    { title: "Le Nouvel Équilibre", page: 10 },
    { title: "L'Âge des Cendres", page: 11 },
    { title: "La Dernière Prophétie", page: 12 },
    { title: "Pacte des Cinq Couronnes", page: 13 },
    { title: "La Cité dans le Ciel", page: 14 },
    { title: "Les Quatre Maisons", page: 15 },
    { title: "Le Retour des Ombres", page: 16 },
    { title: "L'Année 874", page: 17 },
    { title: "Secret des Fondateurs", page: 18 },
    { title: "Les Reliques d'Alaric", page: 19 },
    { title: "La Guerre Silencieuse", page: 20 },
    { title: "Les Portes Interdites", page: 21 },
    { title: "Enfants de la Prophétie", page: 22 },
    { title: "L'Éveil", page: 23 },
    { title: "La Nuit des Cent Étoiles", page: 24 },
    { title: "Conseil des Couronnes", page: 25 },
    { title: "Ombres en Marche", page: 26 },
    { title: "La Huitième Relique", page: 27 },
    { title: "Ascarnia se Prépare", page: 28 },
    { title: "Le Jour du Présage", page: 29 },
    { title: "Rentrée de l'An 876", page: 30 },
    { title: "Aube d'une Ère Nouvelle", page: 31 },
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
              <Page number={1}>
                <div className="h-full flex flex-col pt-6 px-10">
                  <h2 className="text-[18px] font-headline text-[#b48d1d] uppercase tracking-[0.2em] mb-4 border-b border-[#b48d1d]/20 pb-3 w-full text-center text-glow-gold">
                    Sommaire
                  </h2>
                  <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
                    <div className="flex flex-col gap-1 w-full">
                      {chapters.map((ch, i) => (
                        <div 
                          key={i} 
                          className="flex items-baseline justify-between group cursor-pointer py-1.5 border-b border-[#4a3721]/5 hover:bg-[#b48d1d]/5 px-3 transition-colors" 
                          onClick={() => bookRef.current.pageFlip().flip(ch.page - 1)}
                        >
                          <span className="text-[10px] font-serif uppercase text-[#0c1b41] group-hover:text-[#b48d1d] truncate pr-4">{ch.title}</span>
                          <div className="flex-1 border-b border-dotted border-[#b48d1d]/20 mx-2" />
                          <span className="text-[10px] font-serif text-[#4a3721]/70">{ch.page}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="mt-4 pb-6 flex flex-col items-center">
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
              <Page number={10}><div className="h-full px-10 pt-6"><MagicalText title="Le Nouvel Équilibre" text="Après la grande guerre, les rois des royaumes se sont réunis en conseil souverain. Ils ont décidé de créer le Conclave des Arcanes qui va protéger le monde de sorcier de Asgarm contre toute menace résiduelle. Mais dans l'ombre du trône, deux seigneurs du mal se sont éveillés. Sous le nom de sorciers du mal, ils ont forgé le Royaume du Mal ainsi que le Conclave des Ombres, fondant également l'école de magie noire Obscura pour enseigner les arts interdits de l'ombre et du sang." /></div></Page>
              <Page number={11}><div className="h-full px-10 pt-6"><MagicalText title="L'Âge des Cendres" text="La victoire sur les Cavaliers de l'Apocalypse ne marqua pas la fin des souffrances. Elle ne fut que le commencement. Lorsque le Seigneur des Cavaliers fut détruit sur les Plaines Calcinées, l'explosion magique provoquée par sa mort déchira le tissu même de la réalité. Durant plusieurs jours, le ciel resta ouvert au-dessus du champ de bataille. Une immense cicatrice lumineuse traversait les nuages comme une blessure infligée au monde. Des pluies d'énergie arcanique tombèrent sur tout Asgarm. Des forêts entières mutèrent. Des montagnes se fendirent. Des villages disparurent. Des créatures inconnues commencèrent à apparaître dans les régions les plus touchées. Les survivants appelèrent cette époque l'Âge des Cendres. Pendant près d'un siècle, aucun royaume ne prospéra. Les routes étaient dangereuses. Les récoltes mouraient. Les monstres se multipliaient. Les anciennes alliances se fragilisaient. Même le grand Alaric vieillissait. Chaque année, le Roi-Mage parcourait les terres ravagées afin de contenir les failles magiques laissées par la guerre. Mais il savait que sa mort approchait. Et il savait surtout qu'Asgarm n'était pas prêt." /></div></Page>
              <Page number={12}><div className="h-full px-10 pt-6"><MagicalText title="La Dernière Prophétie" text="À la fin de sa vie, Alaric convoqua les dirigeants des cinq peuples. Les Seigneurs Nains. Les Hauts Elfes. Les Elfes de Lune. Les Vampires du Domaine Carmin. Les Royaumes Humains. Ils se réunirent dans la cité sacrée de Val'Theris. Là, devant tous les souverains, Alaric prononça ses dernières paroles. 'Les Cavaliers ne furent pas la source des ténèbres.' Le silence s'abattit. Puis le vieux roi poursuivit. 'Ils n'étaient que les serviteurs d'une puissance plus ancienne encore.' Personne n'osa répondre. Alaric révéla alors les visions qui le hantaient depuis des années. Dans chacune d'elles, il voyait une ombre gigantesque prisonnière derrière la faille. Une présence qui observait le monde. Qui attendait. Qui grandissait. Et qui finirait un jour par revenir. Quelques heures après cette révélation, Alaric mourut. Ses dernières paroles furent gravées dans la pierre. Pendant des siècles, elles deviendraient connues sous le nom de Prophétie du Dernier Roi." /></div></Page>
              <Page number={13}><div className="h-full px-10 pt-6"><MagicalText title="Le Pacte des Cinq Couronnes" text="La mort d'Alaric terrifia les royaumes. Pour la première fois, tous comprirent que la victoire n'était peut-être que temporaire. Les dirigeants des peuples décidèrent alors de créer une alliance permanente. Après trois années de négociations, le Pacte des Cinq Couronnes fut signé. Les frontières restaient indépendantes. Les armées restaient souveraines. Mais la magie serait désormais placée sous une surveillance commune. De cette décision naquit le Conclave des Arcanes. Ses membres étaient choisis parmi les plus puissants sorciers du continent. Ils n'obéissaient à aucun roi. À aucune reine. À aucun clan. Leur seule loyauté allait à l'équilibre du monde. Durant les siècles qui suivirent, le Conclave devint l'autorité magique suprême d'Asgarm." /></div></Page>
              <Page number={14}><div className="h-full px-10 pt-6"><MagicalText title="La Cité dans le Ciel" text="Rapidement, un nouveau problème apparut. Depuis le sacrifice de Melfetys, les enfants naissaient avec un potentiel magique toujours plus grand. Beaucoup perdaient le contrôle. Certains incendiaient des maisons sans le vouloir. D'autres ouvraient des portails. Quelques-uns disparaissaient mystérieusement. Le Conclave comprit qu'il fallait créer un lieu unique consacré au savoir. Un lieu où toutes les races pourraient apprendre ensemble. Un lieu neutre. Un lieu protégé. Les plus grands maîtres d'Asgarm entreprirent alors une œuvre gigantesque. Au centre du continent se trouvait une montagne creuse appelée Arcania. Dans ses profondeurs reposait un ancien cristal laissé par les premiers Elfes. Après vingt années de travaux, le cristal fut éveillé. Son énergie arracha le sommet de la montagne à la terre. La roche s'éleva dans les cieux. Une île flottante venait de naître. C'est là que fut construite Ascarnia. L'École Suprême des Arts Magiques." /></div></Page>
              <Page number={15}><div className="h-full px-10 pt-6"><MagicalText title="Les Quatre Grandes Maisons" text="Afin d'éviter les rivalités entre peuples, les fondateurs d'Ascarnia créèrent quatre maisons. Aetheris. La maison de la sagesse. Drakarys. La maison du courage. Umbrael. La maison de l'ambition. Sylvaris. La maison de l'harmonie. Chaque élève était choisi non selon sa race ou son origine, mais selon son âme. Ainsi, un vampire pouvait rejoindre Sylvaris. Un elfe pouvait intégrer Umbrael. Un humain pouvait appartenir à Aetheris. Cette décision transforma profondément la société d'Asgarm. Pour la première fois, les générations futures grandissaient ensemble." /></div></Page>
              <Page number={16}><div className="h-full px-10 pt-6"><MagicalText title="Le Retour des Ombres" text="Alors que les siècles passaient, Ascarnia devint le cœur du savoir magique. Mais quelque part dans l'obscurité... D'autres forces agissaient. Les disciples des anciens Cavaliers avaient survécu. Ils s'étaient cachés. Ils avaient infiltré des royaumes. Corrompu des nobles. Volé des reliques. Manipulé des guerres. Peu à peu, ils se regroupèrent sous une nouvelle bannière. Le Conclave des Ombres. Leur objectif n'était pas la conquête. Mais l'ouverture complète de la faille. Car derrière celle-ci reposait encore l'entité aperçue par Alaric avant sa mort. Une entité dont même les Cavaliers avaient peur." /></div></Page>
              <Page number={17}><div className="h-full px-10 pt-6"><MagicalText title="L'Année 874" text="Aujourd'hui, huit cent soixante-quatorze années se sont écoulées depuis la Grande Guerre. Les royaumes semblent prospères. Les cités brillent. Les routes sont sûres. Les marchés débordent de richesses. Ascarnia accueille une nouvelle génération d'élèves. Pourtant, partout dans le monde, des signes inquiétants apparaissent. Des créatures inconnues émergent des anciennes failles. Des artefacts maudits refont surface. Des membres du Conclave disparaissent. Et chaque nuit, la cicatrice céleste laissée par les Cavaliers semble grandir un peu plus. Dans les profondeurs oubliées du monde, les Ombres se rassemblent. Quelque chose approche. Quelque chose qui n'aurait jamais dû se réveiller. Et tandis que les portes d'Ascarnia s'ouvrent à une nouvelle promotion d'étudiants... Le destin d'Asgarm s'apprête une nouvelle fois à basculer. Car les héros qui décideront de l'avenir du monde ne sont pas encore des légendes. Ils ne sont encore que des élèves." /></div></Page>
              <Page number={18}><div className="h-full px-10 pt-6"><MagicalText title="Le Secret des Fondateurs" text="Pendant des siècles, les élèves d'Ascarnia apprirent une version incomplète de l'histoire. Le Conclave des Arcanes affirmait que l'école avait été fondée afin d'enseigner la magie et de préserver la paix. Cette affirmation était vraie. Mais elle ne représentait qu'une partie de la réalité. Un secret bien plus ancien reposait sous l'école. Un secret que seuls les Grands Maîtres du Conclave connaissaient. Au cœur de l'île flottante se trouvait le Cristal Originel. La source même ayant permis à Ascarnia de s'élever dans les cieux. Les archives interdites racontaient que ce cristal ne provenait pas d'Asgarm. Il était tombé du ciel plusieurs milliers d'années avant la naissance des royaumes. Les premiers Elfes l'avaient découvert enfoui sous une montagne. En l'étudiant, ils comprirent une vérité terrifiante. Le cristal n'était pas une source de magie. Il était un sceau. Une prison. Et quelque chose était enfermé derrière lui. Les fondateurs d'Ascarnia construisirent l'école autour de ce sceau afin de le surveiller. Jour et nuit. Génération après génération. Mais avec le temps, cette vérité fut dissimulée. Les témoins moururent. Et le secret fut presque oublié. Presque." /></div></Page>
              <Page number={19}><div className="h-full px-10 pt-6"><MagicalText title="Les Sept Reliques d'Alaric" text="Avant sa mort, Alaric savait que les ténèbres reviendraient. Les visions qui l'avaient conduit à sa prophétie devenaient de plus en plus précises. Il voyait des armées d'ombre. Des royaumes en flammes. La chute d'Ascarnia. Et une silhouette gigantesque se levant derrière la faille. Pour préparer les générations futures, il fit créer sept reliques. Sept objets capables de contenir une puissance immense. Sept artefacts destinés à n'être réunis qu'en cas d'extrême nécessité. Le Sceptre du Premier Roi. La Couronne des Flammes Éternelles. L'Orbe des Étoiles. Le Miroir de Vérité. L'Épée de l'Aurore. La Clé du Néant. Et le Cœur d'Asgarm. Après leur création, les reliques furent dispersées. Certaines furent confiées aux royaumes. D'autres furent cachées. Une disparut totalement. Avec les siècles, beaucoup considérèrent ces récits comme des légendes. Pourtant, dans les profondeurs du Conclave des Ombres, certains continuaient de les rechercher. Car une ancienne prophétie annonçait que celui qui réunirait les sept reliques pourrait soit sauver le monde... Soit le condamner définitivement." /></div></Page>
              <Page number={20}><div className="h-full px-10 pt-6"><MagicalText title="La Guerre Silencieuse" text="Officiellement, les siècles suivants furent des siècles de paix. Officieusement, une guerre invisible faisait rage. Dans les capitales humaines. Dans les citadelles naines. Dans les forêts elfiques. Dans les couloirs mêmes d'Ascarnia. Les agents du Conclave des Ombres infiltraient progressivement toutes les institutions. Certains devenaient marchands. D'autres nobles. D'autres encore professeurs. Ils ne cherchaient pas la conquête immédiate. Ils semaient le doute. La corruption. La peur. Leurs victoires étaient discrètes. Un manuscrit disparu. Un témoin assassiné. Une relique volée. Un étudiant recruté. Une âme corrompue. Peu à peu, les Ombres tissaient leur toile. Et le Conclave des Arcanes commençait à perdre du terrain sans même s'en apercevoir." /></div></Page>
              <Page number={21}><div className="h-full px-10 pt-6"><MagicalText title="Les Portes Interdites" text="Sous Ascarnia existaient des lieux que les élèves ignoraient totalement. Des tunnels plus anciens que l'école. Des salles oubliées. Des bibliothèques condamnées. Des laboratoires abandonnés. Les plus anciennes cartes mentionnaient même l'existence de Sept Portes. D'immenses structures runiques enfouies sous l'île flottante. Personne ne savait qui les avait construites. Ni pourquoi. Chaque porte était protégée par des centaines de sceaux magiques. Et chacune possédait son propre gardien. Des créatures immortelles chargées de surveiller ce qui se trouvait derrière. Durant près de huit siècles, aucun incident ne fut signalé. Jusqu'à récemment. Car certains gardiens commencèrent à disparaître." /></div></Page>
              <Page number={22}><div className="h-full px-10 pt-6"><MagicalText title="Les Enfants de la Prophétie" text="L'année 874 marqua un tournant. Partout à travers Asgarm, des enfants exceptionnels commencèrent à naître. Leur magie était différente. Plus puissante. Plus instable. Certains maîtrisaient les éléments naturellement. D'autres voyaient des événements avant qu'ils ne se produisent. Quelques-uns parlaient des langues oubliées sans jamais les avoir apprises. Les érudits d'Ascarnia furent incapables d'expliquer ce phénomène. Les prophètes du Conclave des Arcanes, eux, comprirent immédiatement. La prophétie d'Alaric était en marche. Quelque chose s'éveillait. Et le monde préparait déjà ses futurs défenseurs. Ou ses futurs destructeurs." /></div></Page>
              <Page number={23}><div className="h-full px-10 pt-6"><MagicalText title="L'Éveil" text="La même année, au cœur de la nuit, un événement survint. La cicatrice céleste laissée par les Cavaliers s'illumina pour la première fois depuis huit siècles. Des milliers de personnes observèrent le phénomène. Dans tous les royaumes. Le ciel sembla se fissurer. Puis une voix traversa le monde. Une voix ancienne. Immense. Inhumaine. Une voix que personne ne comprit. Mais que tout le monde entendit. Les océans s'agitèrent. Les montagnes tremblèrent. Les créatures magiques fuirent leurs habitats. Même les dragons disparurent des cieux. Au sommet de la Tour Astrale d'Ascarnia, les plus grands maîtres observaient le phénomène en silence. Car ils venaient de comprendre une vérité terrible. La prison était en train de céder. Et derrière elle... Quelque chose essayait de revenir. Ainsi débute l'Ère de l'Éveil. L'époque la plus dangereuse de toute l'histoire d'Asgarm. L'époque où les anciens secrets vont ressurgir. L'époque où les Sept Reliques seront recherchées. L'époque où les héros et les monstres naîtront côte à côte. L'époque où Ascarnia deviendra le centre du destin du monde. Car désormais, chaque choix comptera. Chaque alliance. Chaque trahison. Chaque sort lancé. Et nul ne pourra échapper au rôle que le destin lui a réservé." /></div></Page>
              <Page number={24}><div className="h-full px-10 pt-6"><MagicalText title="La Nuit des Cent Étoiles" text="Deux années s'écoulèrent après l'Éveil. Les royaumes tentèrent de rassurer leurs populations. Le Conclave des Arcanes publia des déclarations officielles. Les érudits affirmèrent que le phénomène céleste n'était qu'une anomalie passagère. Mais ils mentaient. Car partout dans Asgarm, les signes se multipliaient. Des animaux naissaient avec des marques runiques naturelles. Des enfants développaient leurs pouvoirs à un âge anormalement jeune. Des ruines oubliées réapparaissaient là où il n'existait auparavant que des plaines désertes. Puis vint la Nuit des Cent Étoiles. Cette nuit-là, cent traînées lumineuses traversèrent le ciel simultanément. Certaines s'écrasèrent dans les océans. D'autres dans les montagnes. D'autres encore au cœur même des royaumes. Les astrologues d'Ascarnia furent unanimes. Il ne s'agissait pas d'étoiles. Mais d'objets. Des objets venus d'ailleurs. Des fragments du même matériau que le Cristal Originel. Le même matériau que le sceau protégeant le monde. Une peur silencieuse s'empara alors des dirigeants d'Asgarm. Car si le sceau se fragmentait... La prison s'affaiblissait." /></div></Page>
              <Page number={25}><div className="h-full px-10 pt-6"><MagicalText title="Le Conseil des Cinq Couronnes" text="Face à l'aggravation de la situation, les souverains furent convoqués. Pour la première fois depuis plus de deux siècles, le Conseil des Cinq Couronnes se réunit en urgence. Les débats furent houleux. Certains réclamaient la guerre. D'autres voulaient fermer les frontières. Quelques-uns proposaient même d'interdire l'enseignement de certaines magies. Mais le Grand Maître du Conclave, Arthus Veldor, refusa. « Ce n'est pas le moment de diviser les peuples. » Sa voix résonna dans la salle. « Si la prophétie est réelle, nous aurons besoin de chaque sorcier, chaque érudit et chaque guerrier capable de défendre ce monde. » Après plusieurs jours de discussion, une décision historique fut prise. Ascarnia recevrait davantage d'élèves que jamais auparavant. Toutes les nations enverraient leurs meilleurs jeunes talents. L'école deviendrait le cœur de la préparation du monde. Une nouvelle génération allait devoir prendre la relève." /></div></Page>
              <Page number={26}><div className="h-full px-10 pt-6"><MagicalText title="Les Ombres se mettent en marche" text="Dans le même temps, le Conclave des Ombres célébrait sa plus grande victoire. Après huit siècles de patience, plusieurs de leurs agents avaient atteint des postes influents. Des nobles. Des officiers. Des marchands. Des chercheurs. Même certains membres du Conclave des Arcanes avaient secrètement prêté allégeance aux ténèbres. Leur maître, connu seulement sous le nom de Prophète Noir, observait les événements depuis une forteresse oubliée. Pour lui, le retour de l'entité n'était plus une hypothèse. Mais une certitude. Son objectif n'était plus de préparer son arrivée. Son objectif était désormais d'accélérer le processus. Les Ombres commencèrent alors à rechercher les Sept Reliques. Et elles n'étaient plus les seules." /></div></Page>
              <Page number={27}><div className="h-full px-10 pt-6"><MagicalText title="Le Mystère de la Huitième Relique" text="Les archives les plus anciennes d'Ascarnia furent réexaminées. Des centaines d'érudits travaillèrent pendant des mois. C'est alors qu'une découverte bouleversa le monde. Les Sept Reliques d'Alaric n'étaient pas au nombre de sept. Un document effacé mentionnait un huitième artefact. Un objet dont l'existence avait été volontairement supprimée. Son nom n'apparaissait qu'une seule fois. L'Héritage du Premier Roi. Personne ne savait de quoi il s'agissait. Une arme ? Un livre ? Un être vivant ? Les textes restaient silencieux. Mais une phrase accompagnait cette découverte. « Lorsque les Sept seront recherchées, la Huitième devra être trouvée avant toutes les autres. » Le document s'arrêtait là. Le mystère demeurait entier." /></div></Page>
              <Page number={28}><div className="h-full px-10 pt-6"><MagicalText title="Ascarnia se prépare" text="À mesure que les menaces grandissaient, l'école changeait. Les protections furent renforcées. Les remparts enchantés réactivés. Les anciens gardiens rappelés. De nouveaux professeurs furent recrutés parmi les plus grands mages du continent. Les programmes d'enseignement furent modifiés. La magie de combat revint dans plusieurs cursus. L'étude des créatures obscures devint obligatoire. Les élèves ignorèrent la plupart de ces changements. Mais les enseignants savaient. Ils savaient que les temps paisibles touchaient à leur fin. Et qu'ils formaient peut-être la dernière génération capable de défendre Asgarm." /></div></Page>
              <Page number={29}><div className="h-full px-10 pt-6"><MagicalText title="Le Jour du Présage" text="Puis arriva le jour qui changea tout. Au sommet de la Tour Astrale, les observateurs détectèrent une activité magique sans précédent. Toutes les failles connues du monde s'activaient simultanément. Les cristaux de surveillance explosèrent. Les cartes runiques s'embrasèrent. Les prophètes tombèrent à genoux. Une onde traversa l'ensemble du continent. Pendant quelques secondes, chaque être vivant ressentit la même chose. Une présence. Immense. Ancienne. Affamée. Puis tout redevint silencieux. Mais le message était clair. La prison faiblissait. Le temps était compté." /></div></Page>
              <Page number={30}><div className="h-full px-10 pt-6"><MagicalText title="La Rentrée de l'Année 876" text="Malgré les inquiétudes, la vie devait continuer. Comme chaque année, les nouveaux élèves furent invités à rejoindre Ascarnia. Des milliers de lettres enchantées furent envoyées aux quatre coins du continent. Dans les villages humains. Dans les cités naines. Dans les forêts elfiques. Dans les domaines vampiriques. Partout. Des jeunes sorciers découvrirent qu'ils avaient été acceptés au sein de la plus prestigieuse école du monde. Pour eux, il ne s'agissait que du début d'une nouvelle vie. Ils ignoraient encore les dangers qui les attendaient. Ils ignoraient les secrets cachés sous l'école. Ils ignoraient les complots du Conclave des Ombres. Ils ignoraient l'existence des Reliques. Ils ignoraient la vérité sur la faille. Mais le destin, lui, les connaissait déjà." /></div></Page>
              <Page number={31}><div className="h-full px-10 pt-6"><MagicalText title="L'Aube d'une Nouvelle Ère" text="Le soleil se leva sur Ascarnia. Suspendue dans les cieux au-dessus des nuages, l'île flottante brillait sous la lumière du matin. Les dirigeables accostaient. Les portails s'ouvraient. Les navettes magiques arrivaient de tout Asgarm. Des centaines de nouveaux élèves franchissaient les portes de l'école. Certains rêvaient de devenir guérisseurs. D'autres souhaitaient rejoindre le Conclave des Arcanes. Certains cherchaient la gloire. D'autres simplement leur place dans le monde. Aucun d'eux ne savait que l'histoire était déjà en marche. Dans les profondeurs d'Ascarnia, quelque chose s'éveillait. Dans l'ombre, les ennemis se préparaient. Dans les royaumes, les anciennes prophéties se réalisaient. Et quelque part, au-delà de la faille qui déchirait encore le ciel depuis la Grande Guerre... Une entité ouvrit lentement les yeux. Ainsi commence l'Année 876. Ainsi commence l'histoire de ceux qui décideront du destin d'Asgarm. Ainsi commencent les Chroniques d'Ascarnia. Et c'est ici que votre histoire débute." /></div></Page>
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
    