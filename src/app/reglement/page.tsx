
"use client"

import React, { useState } from 'react'
import { Navigation } from '@/components/Navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft } from 'lucide-react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const regulationSections = [
  {
    id: "hrp",
    title: "Pacte HRP",
    subtitle: "INTÉGRITÉ TECHNIQUE",
    color: "from-sky-500/20 to-blue-600/5",
    accent: "text-sky-400",
    glow: "text-glow-sky",
    shineClass: "shine-text-blue",
    desc: "Lois fondamentales régissant le comportement communautaire, l'intégrité technique et la diffusion du contenu d'Asgarm.",
    chapters: [
      {
        title: "I. Comportement et Éthique",
        rules: [
          { name: "1.1 Respect et Toxicité", desc: "Tout propos injurieux, raciste, sexiste ou homophobe, sur n'importe quel support (jeu, Discord, MP), entraîne un bannissement définitif immédiat sans préavis." },
          { name: "1.2 Publicité et Démarchage", desc: "La promotion de projets externes ou le détournement de communauté est strictement interdit et lourdement sanctionné par une radiation permanente." },
          { name: "1.3 Harcèlement", desc: "Le harcèlement moral ou sexuel, commis en jeu ou en dehors, est sanctionné par un bannissement immédiat. Nous appliquons une tolérance zéro." },
          { name: "1.4 Image du Serveur", desc: "Les joueurs se doivent de maintenir une attitude digne sur les réseaux sociaux. Tout comportement nuisant gravement à la réputation d'Outland est sanctionnable." }
        ]
      },
      {
        title: "II. Intégrité Technique",
        rules: [
          { name: "2.1 Exploitation de Bugs", desc: "L'utilisation intentionnelle de failles, glitches de collision ou de script pour obtenir un avantage est un motif de bannissement permanent." },
          { name: "2.2 Logiciels Tiers", desc: "L'usage de cheats, macros, crosshairs externes ou tout logiciel modifiant les données du jeu ou offrant un avantage visuel est formellement interdit." },
          { name: "2.3 Double Compte et VPN", desc: "L'usage de plusieurs comptes ou l'utilisation de VPN pour contourner une sanction ou masquer son identité est prohibé." },
          { name: "2.4 Échanges HRP", desc: "La vente ou l'achat d'objets, de monnaie ou de comptes contre de l'argent réel (RMT) est strictement interdite." }
        ]
      },
      {
        title: "III. Meta-Gaming & Stream",
        rules: [
          { name: "3.1 Mix-RP", desc: "Il est strictement interdit de mélanger des informations Hors-RP avec vos actions en jeu. Votre personnage ne sait que ce qu'il a appris en immersion." },
          { name: "3.2 Streamstalking", desc: "L'utilisation des flux de diffusion en direct pour localiser, espionner ou influencer un joueur est sanctionnée par un bannissement immédiat." },
          { name: "3.3 Meta-Gaming en Live", desc: "L'interaction avec le chat ne doit jamais influencer vos décisions RP. Le streamer doit ignorer les informations avantageuses venant de son audience." }
        ]
      },
      {
        title: "IV. Identité & Cohérence",
        rules: [
          { name: "4.1 Noms de Personnages", desc: "Le nom doit être réaliste, noble et cohérent avec le lore d'Asgarm. Les jeux de mots, noms de célébrités ou pseudonymes ridicules sont interdits." },
          { name: "4.2 Apparence (Skins)", desc: "Votre tenue doit correspondre à votre statut social, votre métier et votre race. L'usage de skins non-immersifs est prohibé." },
          { name: "4.3 Background", desc: "Chaque citoyen doit posséder une histoire cohérente validée par les services d'immigration. Le passé doit justifier vos compétences actuelles." }
        ]
      }
    ]
  },
  {
    id: "rp",
    title: "Décrets RP",
    subtitle: "IMMERSION & LORE",
    color: "from-gold/20 to-amber-600/5",
    accent: "text-gold",
    glow: "text-glow-gold",
    shineClass: "shine-text",
    desc: "Recueil des lois d'immersion régissant les interactions, les arcanes et la destinée des citoyens dans le royaume.",
    chapters: [
      {
        title: "I. Fondamentaux de l'Immersion",
        rules: [
          { name: "1.1 Fear RP", desc: "Vous devez simuler une peur réelle face à une menace sérieuse. La vie de votre personnage est précieuse. On ne provoque pas une autorité armée seul et sans défense." },
          { name: "1.2 Pain RP", desc: "Vous devez jouer vos blessures. Une chute, un impact de sort ou une blessure physique nécessite une réaction appropriée (boitements, cris, incapacité temporaire)." },
          { name: "1.3 Win RP & Fair-play", desc: "Le but n'est pas de gagner mais de créer une scène mémorable. Accepter la défaite fait partie de l'expérience narrative." },
          { name: "1.4 Power-Gaming", desc: "Interdiction de réaliser des actions impossibles physiquement ou magiquement (ex: courir en portant un coffre massif ou lancer 10 sorts sans pause)." }
        ]
      },
      {
        title: "II. L'Art des Arcanes",
        rules: [
          { name: "2.1 Temps d'Incantation", desc: "Chaque sortilège majeur nécessite un temps de concentration. Le spam de sorts sans RP verbal (formule) ou gestuel est strictement interdit." },
          { name: "2.2 Effets de Sortilèges", desc: "Si vous subissez un sort de contrôle (immobilisation, aveuglement), vous devez impérativement jouer l'effet subi jusqu'à sa dissipation totale." },
          { name: "2.3 Magie Prohibée", desc: "L'usage de la magie noire ou du sang est un crime capital devant le Conclave. Son utilisation entraîne des conséquences RP majeures (Emprisonnement ou CK)." },
          { name: "2.4 Zones de Paix", desc: "L'Académie et les sanctuaires royaux sont des zones de trêve absolue. Aucun combat offensif n'y est toléré sous peine de bannissement IC immédiat." }
        ]
      },
      {
        title: "III. Conflits & Justice",
        rules: [
          { name: "3.1 Braquages & Vols", desc: "Limités à deux actions criminelles par jour par groupe. Le vol d'objets uniques ou de reliques nécessite une scène construite et validée par le lore." },
          { name: "3.2 Kidnapping", desc: "La durée maximale d'un enlèvement est de 2 heures. Le but doit être la négociation ou l'échange d'information, pas le harcèlement du joueur." },
          { name: "3.3 État de Coma (K.O.)", desc: "Interdiction totale de parler une fois au sol. Vous ne gardez aucun souvenir de la scène si vous n'êtes pas réanimé par un soigneur sur place." },
          { name: "3.4 Character Kill (CK)", desc: "La mort définitive de votre personnage nécessite un dossier solide et une validation de la Haute Administration pour garantir la cohérence narrative." }
        ]
      },
      {
        title: "IV. Vie Civile & Économie",
        rules: [
          { name: "4.1 Arnaques (Scams)", desc: "Les arnaques financières sont limitées à 5000 pièces d'or. Les arnaques sur les reliques, les maisons ou les services de boutique sont formellement interdites." },
          { name: "4.2 Emplois Civils", desc: "Tout citoyen doit exercer une activité légale ou justifiée. Le travail au noir pour des clans criminels est traqué par le Conclave des Arcanes." },
          { name: "4.3 Contrats Magiques", desc: "Les contrats signés en jeu ont une valeur juridique contraignante. Le non-respect peut entraîner des saisies de biens par les Protecteurs du Conclave." }
        ]
      }
    ]
  },
  {
    id: "staff",
    title: "Code Staff",
    subtitle: "HAUTE MAGISTRATURE",
    color: "from-red-600/20 to-black/40",
    accent: "text-red-600",
    glow: "text-glow-red",
    shineClass: "shine-text-red",
    desc: "Protocoles, devoirs de réserve et obligations déontologiques de la haute direction et de la modération d'Asgarm.",
    chapters: [
      {
        title: "I. Déontologie",
        rules: [
          { name: "1.1 Neutralité Absolue", desc: "Le staff doit rester impartial en toutes circonstances. Aucun avantage n'est accordé à un groupe ou un ami personnel." },
          { name: "1.2 Devoir de Réserve", desc: "Les informations confidentielles (événements à venir, dossiers de joueurs, logs techniques) ne doivent jamais être divulguées à des tiers." },
          { name: "1.3 Exemplarité", desc: "Un membre du staff doit incarner l'excellence du RP. Toute erreur de comportement est sanctionnée plus lourdement que pour un joueur." }
        ]
      },
      {
        title: "II. Protocole de Sanction",
        rules: [
          { name: "2.1 Pédagogie", desc: "Sauf faute grave, la discussion et l'explication des règles priment sur la sanction immédiate pour favoriser l'apprentissage." },
          { name: "2.2 Preuves Obligatoires", desc: "Toute sanction (Warn, Kick, Ban) doit être justifiée par des logs, captures d'écran ou témoignages concordants archivés en interne." },
          { name: "2.3 Support & Tickets", desc: "Le staff doit répondre avec courtoisie et professionnalisme. Le spam de tickets par un joueur est sanctionnable pour entrave au travail administratif." }
        ]
      },
      {
        title: "III. Animation & Lore",
        rules: [
          { name: "3.1 Cohérence Narrative", desc: "Les animateurs garantissent que chaque événement respecte l'histoire millénaire d'Asgarm et l'équilibre des forces." },
          { name: "3.2 Gestion des PNJs", desc: "Les personnages non-joueurs sont des outils d'immersion et ne doivent jamais être utilisés pour bloquer injustement la progression des citoyens." },
          { name: "3.3 Équilibre Économique", desc: "Les récompenses offertes lors d'événements ne doivent jamais déstabiliser l'économie globale du royaume." }
        ]
      }
    ]
  }
]

export default function ReglementPage() {
  const [selectedSection, setSelectedSection] = useState<string | null>(null)
  const [hoveredSection, setHoveredSection] = useState<string | null>(null)
  
  const currentSection = regulationSections.find(s => s.id === selectedSection)

  return (
    <main className="relative min-h-screen flex flex-col bg-transparent overflow-hidden">
      <Navigation />
      
      <div className="relative z-10 flex-1 flex flex-col pt-24 max-w-full w-full h-screen overflow-hidden">
        
        <AnimatePresence mode="wait">
          {!selectedSection ? (
            <motion.div
              key="selection"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.6 }}
              className="flex-1 flex h-full"
            >
              {regulationSections.map((section) => (
                <button
                  key={section.id}
                  onMouseEnter={() => setHoveredSection(section.id)}
                  onMouseLeave={() => setHoveredSection(null)}
                  onClick={() => setSelectedSection(section.id)}
                  className={`relative flex-1 flex flex-col items-center justify-center p-12 transition-all duration-700 ease-in-out border-r border-white/5 last:border-0 ${
                    hoveredSection && hoveredSection !== section.id ? 'opacity-40 scale-95' : 'opacity-100'
                  }`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-b ${section.color} opacity-0 pointer-events-none transition-opacity duration-1000`} />
                  
                  <motion.div 
                    animate={{ 
                      opacity: hoveredSection === section.id ? 0.2 : 0.05,
                      scale: hoveredSection === section.id ? 1.2 : 1
                    }}
                    className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-white/10 blur-[120px] rounded-full pointer-events-none`} 
                  />

                  <div className="relative z-20 text-center max-w-md w-full flex flex-col items-center">
                    <div className="flex items-center justify-center gap-4 mb-6">
                      <div className="h-[1px] w-8 bg-white/10" />
                      <span className={`${section.accent} text-[10px] tracking-[0.8em] uppercase font-bold`}>{section.subtitle}</span>
                      <div className="h-[1px] w-8 bg-white/10" />
                    </div>
                    <h2 className={`text-6xl font-headline uppercase tracking-tighter mb-8 leading-none ${section.shineClass}`}>
                      {section.title}
                    </h2>
                    <p className="text-silver/40 italic text-base leading-relaxed mb-12 opacity-0 lg:opacity-100 transition-opacity">
                      {section.desc}
                    </p>
                    <div className="inline-block px-10 py-4 border border-white/10 text-white text-[9px] font-bold uppercase tracking-[0.4em] hover:bg-white hover:text-black transition-all duration-500">
                      Consulter le Codex
                    </div>
                  </div>
                </button>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="content"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.5 }}
              className="flex-1 flex flex-col px-12 pb-12 overflow-y-auto custom-scrollbar"
            >
              <div className="max-w-[1600px] mx-auto w-full pt-12">
                <button 
                  onClick={() => setSelectedSection(null)}
                  className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors mb-12 group w-fit"
                >
                  <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.4em]">Retour au Codex d'Asgarm</span>
                </button>

                <div className="flex flex-col lg:flex-row gap-20 items-start">
                  <div className="lg:w-1/3 lg:sticky lg:top-32">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="h-[1px] w-8 bg-white/10" />
                      <span className={`text-[10px] font-bold uppercase tracking-[0.8em] ${currentSection?.accent}`}>{currentSection?.subtitle}</span>
                    </div>
                    <h2 className={`text-7xl font-headline uppercase tracking-tighter mb-8 leading-none ${currentSection?.shineClass}`}>
                      {currentSection?.title}
                    </h2>
                    <p className="text-silver/50 text-xl italic font-light leading-relaxed border-l border-white/10 pl-8 mb-12">
                      {currentSection?.desc}
                    </p>
                    <div className="p-8 bg-black/40 border border-white/5 shadow-2xl relative overflow-hidden text-center">
                      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
                      <p className="text-silver/40 text-[10px] uppercase tracking-[0.2em] leading-relaxed italic font-bold">
                        LA CONNAISSANCE DE CES DÉCRETS EST IMPÉRATIVE POUR TOUT CITOYEN. LE CONCLAVE SUPRÊME VEILLE À LEUR APPLICATION STRICTE.
                      </p>
                    </div>
                  </div>

                  <div className="flex-1">
                    <Accordion type="single" collapsible className="w-full space-y-6">
                      {currentSection?.chapters.map((chapter, i) => (
                        <AccordionItem 
                          key={i} 
                          value={`chapter-${i}`}
                          className="border border-white/5 bg-white/[0.02] px-8 rounded-none overflow-hidden hover:bg-white/[0.04] transition-all duration-500"
                        >
                          <AccordionTrigger className="hover:no-underline py-8">
                            <span className="text-2xl font-headline text-white uppercase tracking-tight text-left">
                              {chapter.title}
                            </span>
                          </AccordionTrigger>
                          <AccordionContent className="pb-8">
                            <div className="grid grid-cols-1 gap-4 pt-4">
                              {chapter.rules.map((rule, j) => (
                                <div key={j} className="p-6 bg-black/40 border border-white/5 group hover:border-white/20 transition-all duration-500">
                                  <div className="flex items-center gap-4 mb-3">
                                    <div className={`w-1 h-1 rounded-full bg-current ${currentSection?.accent}`} />
                                    <h4 className="text-sm font-bold text-white uppercase tracking-widest">{rule.name}</h4>
                                  </div>
                                  <p className="text-silver/40 text-sm italic font-light leading-relaxed pl-5">
                                    {rule.desc}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <footer className="mt-auto h-24 flex flex-col items-center justify-center relative z-20 border-t border-white/5 bg-black/40">
          <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-gold/10 to-transparent mb-4" />
          <span className="shine-text text-[10px] tracking-[0.8em] uppercase font-bold text-center">
            CONCLAVE SUPRÊME — ÉQUILIBRE D'ASGARM
          </span>
        </footer>
      </div>

      <style jsx global>{`
        .text-glow-sky { text-shadow: 0 0 25px rgba(14, 165, 233, 0.4); }
        .text-glow-gold { text-shadow: 0 0 25px rgba(212, 175, 55, 0.4); }
        .text-glow-red { text-shadow: 0 0 25px rgba(220, 38, 38, 0.4); }
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255, 255, 255, 0.1); border-radius: 10px; }
      `}</style>
    </main>
  )
}
