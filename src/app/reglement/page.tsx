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
          { name: "1.2 Publicité et Démarchage", desc: "La promotion de projets externes ou le détournement de communauté est strictement interdit et lourdement sanctionné par un bannissement permanent." },
          { name: "1.3 Qualité de l'Immersion", desc: "Un matériel audio correct et fonctionnel est exigé. Le joueur doit rester cohérent avec l'univers d'Asgarm en toute circonstance, y compris dans ses interactions hors-jeu liées au serveur." },
          { name: "1.4 Streamstalking et Meta", desc: "L'utilisation d'informations obtenues via des diffusions en direct ou des canaux externes pour influencer vos actions RP est formellement interdite." }
        ]
      },
      {
        title: "II. Mécaniques de Jeu et Abus",
        rules: [
          { name: "2.1 Exploitation de Bugs (Glitch)", desc: "L'utilisation de bugs de script, de collision ou de toute faille technique pour obtenir un avantage est un motif de bannissement immédiat. Tout bug doit être impérativement signalé au staff." },
          { name: "2.2 Powergaming", desc: "Interdiction de réaliser des actions physiquement impossibles ou de forcer le RP d'un tiers sans lui laisser la possibilité de réagir ou de s'opposer de manière cohérente." },
          { name: "2.3 Metagaming", desc: "Votre personnage ne connaît que ce qu'il a appris en jeu. La coordination externe via Discord ou tout autre support est strictement interdite lors des scènes." },
          { name: "2.4 Logiciels Tiers et Cheating", desc: "L'usage de cheats, macros, crosshairs externes ou tout logiciel modifiant l'expérience de jeu originale est lourdement sanctionné par une radiation définitive." }
        ]
      },
      {
        title: "III. Diffusion et Contenu (Lives/Vidéos/Pub)",
        rules: [
          { name: "3.1 Responsabilité du Diffuseur", desc: "Tout streamer ou créateur de contenu est considéré comme un ambassadeur d'Outland. Une conduite exemplaire et une immersion sans faille sont exigées devant son audience. Tout manquement à l'image du serveur peut entraîner des sanctions administratives." },
          { name: "3.2 Meta-Gaming en Live", desc: "L'interaction avec le chat (donations, messages) ne doit jamais influencer les décisions du personnage en jeu. Le streamer doit ignorer toute information provenant de son audience qui pourrait briser le RP ou donner un avantage tactique." },
          { name: "3.3 Promotion et Publicité Inter-Serveurs", desc: "La promotion d'autres serveurs ou projets concurrents sur nos plateformes ou lors de diffusions liées à Asgarm est strictement interdite. Le recrutement sauvage vers d'autres communautés entraîne un bannissement permanent immédiat." },
          { name: "3.4 Utilisation de l'Identité Visuelle", desc: "L'usage du nom 'Outland', des logos ou des créations originales du serveur à des fins lucratives ou publicitaires sans l'accord écrit de la Haute Administration est formellement proscrit." }
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
        title: "I. Combat et Arcanes",
        rules: [
          { name: "3.1 Fear RP", desc: "Vous devez simuler une peur réelle et proportionnée face à une menace supérieure (ex: encerclement par plusieurs ennemis armés ou ratio 3 contre 1)." },
          { name: "3.2 Pain RP", desc: "Toute blessure reçue doit être jouée physiquement et verbalement (chutes, gémissements, incapacité temporaire de courir ou de lancer des sorts complexes)." },
          { name: "3.3 Zone de Trêve Académique", desc: "L'école est une zone de paix et de savoir. Aucun combat offensif n'y est toléré sans un événement narratif spécifique validé par le Conclave." },
          { name: "3.4 Sorts Prohibés", desc: "L'usage public de la magie noire ou du sang sans autorisation magistrale entraîne des conséquences administratives et pénales lourdes (Emprisonnement/CK)." }
        ]
      },
      {
        title: "II. Mort et Fin de Personnage",
        rules: [
          { name: "4.1 État de Coma (K.O.)", desc: "Interdiction totale de parler ou de transmettre des informations une fois au sol. La réanimation par un tiers entraîne l'amnésie partielle de la scène de combat." },
          { name: "4.2 Character Kill (CK)", desc: "La mort définitive du personnage nécessite une validation administrative préalable ou un accord mutuel lors d'un arc narratif majeur et tragique." },
          { name: "4.3 Revenge Kill", desc: "Interdiction formelle de revenir sur une scène où vous avez été mis K.O. pour tenter de vous venger de vos agresseurs." },
          { name: "4.4 Spam de Réanimation", desc: "Abuser des systèmes de soins pour revenir immédiatement au combat sans respecter un temps de convalescence est proscrit." }
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
        title: "I. Haute Administration",
        rules: [
          { name: "Gestion Stratégique", desc: "Responsabilité des décisions techniques, financières et de la direction artistique globale du projet Outland." },
          { name: "Validation Majeure", desc: "Étude et validation exclusive des dossiers de clans, des entreprises et des grands arcs narratifs impactant le royaume." },
          { name: "Audit et Éthique", desc: "Surveillance constante du comportement du staff. Neutralité absolue exigée : aucun avantage en jeu n'est toléré pour leurs personnages." },
          { name: "Justice Suprême", desc: "Arbitrage final des litiges complexes et validation des bannissements définitifs." }
        ]
      },
      {
        title: "II. Community Manager",
        rules: [
          { name: "Image de Marque", desc: "Garant de la communication officielle et de la réputation d'Asgarm sur les réseaux et le Discord." },
          { name: "Lien Communautaire", desc: "Analyse des suggestions citoyennes et médiation constante entre les joueurs et l'administration." },
          { name: "Marketing & Visibilité", desc: "Gestion des partenariats et de la visibilité du serveur sur les plateformes de référencement." }
        ]
      },
      {
        title: "III. Modération",
        rules: [
          { name: "Support Joueurs", desc: "Gestion des tickets de support. Le dialogue et la pédagogie sont prioritaires avant l'application de toute sanction." },
          { name: "Surveillance Active", desc: "Patrouilles invisibles pour vérifier le respect des règles d'immersion (Fear et Pain RP) lors des scènes de groupe." },
          { name: "Rapports & Preuves", desc: "Toute sanction appliquée doit être rigoureusement documentée avec des preuves tangibles (vidéos, logs) en interne." }
        ]
      },
      {
        title: "IV. Animateurs",
        rules: [
          { name: "Dynamisation Lore", desc: "Création de mini-scènes, gestion des PNJs et des créatures magiques pour enrichir l'expérience des citoyens." },
          { name: "Usage des Outils", desc: "Les outils d'animation sont strictement réservés aux événements. Tout usage pour convenance personnelle est motif de radiation immédiate." },
          { name: "Neutralité Narrative", desc: "Interdiction formelle de favoriser une faction, une race ou un groupe spécifique au détriment des autres." }
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
