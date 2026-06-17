
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
          { name: "1.2 Publicité et Démarchage", desc: "La promotion de projets externes ou le détournement de communauté est strictement interdit et lourdement sanctionné." },
          { name: "1.3 Harcèlement", desc: "Le harcèlement moral ou sexuel, qu'il soit commis en jeu ou en dehors, est sanctionné par une radiation permanente." },
          { name: "1.4 Image du Serveur", desc: "Les joueurs se doivent de maintenir une attitude digne sur les réseaux sociaux. Tout comportement nuisant gravement à la réputation d'Outland est sanctionnable." }
        ]
      },
      {
        title: "II. Intégrité Technique",
        rules: [
          { name: "2.1 Exploitation de Bugs", desc: "L'utilisation intentionnelle de failles, glitches de collision ou de script pour obtenir un avantage est un motif de bannissement permanent." },
          { name: "2.2 Logiciels Tiers", desc: "L'usage de cheats, macros, crosshairs externes ou tout logiciel modifiant les données du jeu est formellement interdit." },
          { name: "2.3 Double Compte et VPN", desc: "L'usage de plusieurs comptes ou l'utilisation de VPN pour contourner une sanction ou masquer son identité est prohibé." },
          { name: "2.4 Échanges HRP", desc: "La vente ou l'achat d'objets, de monnaie ou de comptes contre de l'argent réel est strictement interdite." }
        ]
      },
      {
        title: "III. Meta-Gaming & Stream",
        rules: [
          { name: "3.1 Mix-RP", desc: "Il est strictement interdit de mélanger des informations Hors-RP avec vos actions en jeu. Votre personnage ne sait que ce qu'il a appris en immersion." },
          { name: "3.2 Streamstalking", desc: "L'utilisation des flux de diffusion en direct pour localiser ou influencer un joueur est sanctionnée par un bannissement immédiat." },
          { name: "3.3 Meta-Gaming en Live", desc: "L'interaction avec le chat (dons, messages) ne doit jamais influencer vos décisions RP. Le streamer doit ignorer les informations avantageuses venant de son audience." }
        ]
      },
      {
        title: "IV. Identité & Cohérence",
        rules: [
          { name: "4.1 Noms de Personnages", desc: "Le nom doit être réaliste et cohérent avec le lore d'Asgarm. Les jeux de mots, noms de célébrités ou pseudonymes sont interdits." },
          { name: "4.2 Apparence (Skins)", desc: "Votre tenue doit correspondre à votre statut social et à votre race. L'usage de skins 'troll' ou non-immersifs est prohibé." },
          { name: "4.3 Background", desc: "Chaque citoyen doit posséder une histoire cohérente validée par les services d'immigration si nécessaire." }
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
          { name: "1.1 Fear RP", desc: "Simulez une peur réelle face à une menace sérieuse. On ne provoque pas un sorcier du Conclave lorsqu'on est seul et désarmé." },
          { name: "1.2 Pain RP", desc: "Jouez vos blessures. Une chute de balai ou un impact de sort nécessite une réaction physique (gémissements, boitements)." },
          { name: "1.3 Win RP & Fair-play", desc: "Le but n'est pas de gagner mais de créer une scène de qualité. Accepter la défaite fait partie de l'expérience." },
          { name: "1.4 Power-Gaming", desc: "Interdiction de réaliser des actions impossibles (ex: lancer un sort complexe en courant ou porter une armure de 50kg sans effort)." }
        ]
      },
      {
        title: "II. L'Art des Arcanes",
        rules: [
          { name: "2.1 Temps d'Incantation", desc: "Chaque sort majeur nécessite un temps de concentration. Le spam de sorts sans RP verbal ou gestuel est interdit." },
          { name: "2.2 Effets de Sortilèges", desc: "Si vous recevez un sort d'aveuglement ou d'immobilisation, vous devez impérativement jouer l'effet subi sans exception." },
          { name: "2.3 Magie Prohibée", desc: "L'usage de la magie noire ou du sang est un crime capital. Son utilisation en public entraîne des conséquences RP majeures (Emprisonnement/CK)." },
          { name: "2.4 Zones de Paix", desc: "L'Académie est un sanctuaire. Aucun combat offensif n'y est toléré, sauf événement narratif encadré." }
        ]
      },
      {
        title: "III. Justice & Destinée",
        rules: [
          { name: "3.1 Braquages & Vols", desc: "Limités à deux par jour et par groupe. Le vol d'objets uniques nécessite une scène construite et motivée." },
          { name: "3.2 Enlèvements (Kidnapping)", desc: "Durée maximale de 2 heures. Le but doit être une négociation ou un échange d'information, pas le harcèlement du joueur." },
          { name: "3.3 État de Coma (K.O.)", desc: "Interdiction de parler une fois au sol. Vous ne vous souvenez pas de la scène si vous êtes réanimé par des soins externes." },
          { name: "3.4 Character Kill (CK)", desc: "La mort définitive nécessite un dossier solide et une validation de la Haute Administration." }
        ]
      },
      {
        title: "IV. Vie Sociale & Économique",
        rules: [
          { name: "4.1 Arnaques (Scams)", desc: "Les arnaques financières sont limitées à 5000 pièces d'or. Les arnaques sur les objets de boutique ou les reliques sont interdites." },
          { name: "4.2 Emplois Civils", desc: "Tout citoyen doit avoir une source de revenus cohérente. Le travail au noir pour des clans est traqué par le Conclave." },
          { name: "4.3 Contrats de Travail", desc: "Les contrats signés en jeu ont une valeur juridique RP. Le non-respect peut entraîner des saisies par les Arcanes." }
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
          { name: "1.1 Neutralité Absolue", desc: "Le staff ne doit jamais favoriser un groupe ou un ami. Aucune commande admin ne doit servir au profit personnel du personnage." },
          { name: "1.2 Devoir de Réserve", desc: "Les informations confidentielles (prochains events, dossiers de joueurs, logs) ne doivent jamais être divulguées." },
          { name: "1.3 Exemplarité", desc: "Un membre du staff doit avoir un RP irréprochable. Toute erreur de sa part est sanctionnée plus lourdement." }
        ]
      },
      {
        title: "II. Protocole de Sanction",
        rules: [
          { name: "2.1 Pédagogie d'abord", desc: "Sauf faute grave, la discussion et l'explication des règles priment sur la sanction immédiate." },
          { name: "2.2 Preuves Obligatoires", desc: "Toute sanction doit être justifiée par des logs, vidéos ou témoignages concordants archivés en interne." },
          { name: "2.3 Ticket de Support", desc: "Le staff doit répondre avec courtoisie et professionnalisme. Aucun favoritisme n'est toléré dans le traitement des demandes." }
        ]
      },
      {
        title: "III. Animation & Lore",
        rules: [
          { name: "3.1 Cohérence Narrative", desc: "Les animateurs garantissent que chaque événement respecte l'histoire et les fondements d'Asgarm." },
          { name: "3.2 Gestion des PNJs", desc: "Les personnages non-joueurs doivent être utilisés pour enrichir le monde, pas pour bloquer le RP des citoyens." },
          { name: "3.3 Équilibre des Events", desc: "Les récompenses d'événements ne doivent jamais briser l'économie globale du royaume." }
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
                    <div className="p-8 bg-black/40 border border-white/5 shadow-2xl relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
                      <p className="text-silver/40 text-[10px] uppercase tracking-[0.2em] leading-relaxed italic">
                        La connaissance de ces décrets est impérative pour tout citoyen d'Asgarm. Le Conclave Suprême veille à leur application stricte.
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
