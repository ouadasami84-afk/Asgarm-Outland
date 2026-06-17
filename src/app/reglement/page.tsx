
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
    subtitle: "HORS-RÔLE-PLAY",
    color: "from-sky-500/20 to-blue-600/5",
    accent: "text-sky-400",
    glow: "text-glow-sky",
    shineClass: "shine-text-blue",
    desc: "Lois fondamentales régissant le comportement communautaire et l'intégrité technique.",
    chapters: [
      {
        title: "I. Comportement et Éthique",
        rules: [
          { name: "1.1 Respect et Toxicité", desc: "Tout propos injurieux, raciste, sexiste ou homophobe, sur n'importe quel support (jeu, Discord, MP), entraîne un bannissement définitif immédiat." },
          { name: "1.2 Publicité et Démarchage", desc: "La promotion de projets externes ou le détournement de communauté est strictement interdit (Ban permanent)." },
          { name: "1.3 Qualité de l'Immersion", desc: "Un matériel audio correct est exigé. Le joueur doit rester cohérent avec l'univers d'Asgarm en toute circonstance." },
          { name: "1.4 Streamstalking et Meta", desc: "L'utilisation d'informations hors-jeu pour influencer vos actions RP est formellement interdite." }
        ]
      },
      {
        title: "II. Mécaniques de Jeu et Abus",
        rules: [
          { name: "2.1 Exploitation de Bugs (Glitch)", desc: "L'utilisation de bugs de script ou de collision pour un avantage est un motif de bannissement. Tout bug doit être signalé." },
          { name: "2.4 Logiciels Tiers", desc: "L'usage de cheats, macros ou crosshairs externes est lourdement sanctionné." }
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
    desc: "Recueil des lois d'immersion régissant les interactions et les arcanes du royaume.",
    chapters: [
      {
        title: "I. Mécaniques du Rôle",
        rules: [
          { name: "2.2 Powergaming", desc: "Interdiction de réaliser des actions physiquement impossibles ou de forcer le RP d'un tiers sans réaction possible." },
          { name: "2.3 Metagaming", desc: "Votre personnage ne connaît que ce qu'il a appris en jeu. Coordination externe interdite." }
        ]
      },
      {
        title: "II. Combat et Arcanes",
        rules: [
          { name: "3.1 Fear RP", desc: "Vous devez simuler une peur réelle face à une menace supérieure (ex: 3 contre 1)." },
          { name: "3.2 Pain RP", desc: "Toute blessure reçue doit être jouée physiquement (chute, incapacité temporaire)." },
          { name: "3.3 Zone de Trêve Académique", desc: "L'école est une zone de paix. Aucun combat offensif n'y est toléré sans événement spécifique." },
          { name: "3.4 Sorts Prohibés", desc: "L'usage public de la magie noire entraîne des conséquences administratives et pénales (Prison/CK)." }
        ]
      },
      {
        title: "III. Mort et Fin de Personnage",
        rules: [
          { name: "4.1 État de Coma (K.O.)", desc: "Interdiction de parler ou donner des infos une fois au sol. La réanimation entraîne l'amnésie de la scène." },
          { name: "4.2 Character Kill (CK)", desc: "La mort définitive nécessite une validation administrative ou un accord mutuel lors d'un arc narratif majeur." },
          { name: "4.3 Revenge Kill", desc: "Interdiction de revenir sur une scène où vous avez été mis K.O. pour vous venger." },
          { name: "4.4 Spam de Réanimation", desc: "Abuser des soins pour revenir au combat sans convalescence est interdit." }
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
    desc: "Protocoles et devoirs de la direction et de la modération d'Outland.",
    chapters: [
      {
        title: "I. Haute Administration",
        rules: [
          { name: "Gestion Stratégique", desc: "Prise de décisions techniques, financières et direction générale du projet." },
          { name: "Validation Majeure", desc: "Étude et validation des dossiers de clans, entreprises et arcs narratifs globaux." },
          { name: "Audit et Éthique", desc: "Surveillance du staff. Neutralité absolue exigée : aucun avantage en jeu pour leurs personnages." },
          { name: "Justice Suprême", desc: "Dernier recours pour les litiges complexes et les bannissements définitifs." }
        ]
      },
      {
        title: "II. Community Manager (CM)",
        rules: [
          { name: "Image de Marque", desc: "Responsable de la communication officielle sur les réseaux et le Discord." },
          { name: "Lien Communautaire", desc: "Analyse des suggestions et médiation entre les joueurs et l'administration." },
          { name: "Régulation Discord", desc: "Garant de la bonne tenue des canaux hors-jeu et de l'ambiance générale." },
          { name: "Marketing", desc: "Gestion des partenariats et visibilité du serveur sur les plateformes de vote." }
        ]
      },
      {
        title: "III. Modération",
        rules: [
          { name: "Support Joueurs", desc: "Gestion des tickets. Dialogue et pédagogie prioritaires avant la sanction." },
          { name: "Surveillance Active", desc: "Patrouilles invisibles pour vérifier le respect du Fear et Pain RP." },
          { name: "Rapports & Preuves", desc: "Chaque sanction doit être documentée avec preuves (vidéos/logs) en interne." },
          { name: "Évaluation Test", desc: "Les Modos Tests sont en apprentissage et doivent faire valider leurs actions majeures." }
        ]
      },
      {
        title: "IV. Animateurs",
        rules: [
          { name: "Dynamisation Lore", desc: "Création de mini-scènes, gestion de PNJs et de créatures pour enrichir le monde." },
          { name: "Usage des Outils", desc: "Le menu de spawn est réservé à l'animation. Tout usage personnel est banni." },
          { name: "Neutralité Narrative", desc: "Interdiction de favoriser une faction ou un groupe spécifique." },
          { name: "Projets Narratifs", desc: "Les arcs majeurs doivent être soumis à l'administration avant lancement." }
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
              transition={{ duration: 0.8 }}
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
              transition={{ duration: 0.6 }}
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
