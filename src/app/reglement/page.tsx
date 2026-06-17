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
        title: "I. Éthique et Comportement Social",
        rules: [
          { name: "1.1 Respect Universel", desc: "Tout propos injurieux, raciste, sexiste, homophobe ou discriminant, quel que soit le support, entraînera un bannissement définitif." },
          { name: "1.2 Harcèlement et Malveillance", desc: "Le harcèlement moral ou sexuel est puni d'une radiation permanente sans appel possible." },
          { name: "1.3 Publicité et Parasitisme", desc: "La promotion de projets externes ou le détournement de communauté est strictement interdit." },
          { name: "1.4 Image de la Souveraineté", desc: "Tout comportement nuisant gravement à la réputation d'Outland sur les réseaux sociaux est passible de sanctions." }
        ]
      },
      {
        title: "II. Intégrité Technique et Sécurité",
        rules: [
          { name: "2.1 Exploitation de Failles", desc: "L'usage de bugs, glitches de collision, scripts ou duplications entraîne un bannissement permanent immédiat." },
          { name: "2.2 Logiciels Tiers et Tricherie", desc: "Cheats, macros, crosshairs externes ou modifications de fichiers de jeu sont formellement interdits." },
          { name: "2.3 VPN et Dissimulation", desc: "L'usage de VPN pour masquer son identité technique ou contourner une sanction entraîne la radiation globale." },
          { name: "2.4 Multi-Comptes", desc: "Posséder plusieurs identités techniques sur le royaume est prohibé sauf autorisation magistrale exceptionnelle." }
        ]
      },
      {
        title: "III. Meta-Gaming et Immersion Technique",
        rules: [
          { name: "3.1 Mix-RP et Fusion", desc: "Mélanger des informations Hors-RP avec vos actions en jeu est une faute grave. Votre personnage ignore tout du Discord ou des streams." },
          { name: "3.2 Streamstalking et Sniping", desc: "Utiliser un flux de diffusion pour localiser ou influencer un citoyen est puni d'un bannissement définitif." },
          { name: "3.3 Force RP", desc: "Il est interdit d'imposer une scène à un autre joueur sans lui laisser de porte de sortie narrative cohérente." },
          { name: "3.4 Revenge Kill", desc: "Interdiction formelle de revenir sur une scène ou de se venger d'un joueur après avoir été mis K.O. ou être mort." }
        ]
      },
      {
        title: "IV. Identité et Nomenclature",
        rules: [
          { name: "4.1 Noms de Prestige", desc: "Le nom doit être réaliste et cohérent avec le lore d'Asgarm. Pseudonymes ridicules ou noms de célébrités sont bannis." },
          { name: "4.2 Apparence Immersive", desc: "Votre tenue doit correspondre à votre race, métier et statut. Les skins non-immersifs sont passibles de radiation." },
          { name: "4.3 Reconnaissance Vocale", desc: "Si un citoyen porte un masque intégral, la reconnaissance vocale est interdite à moins d'une connaissance intime préalable." }
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
        title: "I. Fondamentaux de l'Existence",
        rules: [
          { name: "1.1 Fear RP", desc: "Simulez une peur réelle face à une menace sérieuse. Votre vie est unique et précieuse." },
          { name: "1.2 Pain RP", desc: "Jouez vos blessures. Un impact de sort ou une blessure physique nécessite une réaction appropriée immédiate." },
          { name: "1.3 Win RP et Fair-Play", desc: "Le but est de créer une scène mémorable, pas de gagner. Accepter la défaite est une marque de qualité." },
          { name: "1.4 No-BRP", desc: "Interdiction de sauter de manière répétitive ou d'utiliser la magie pour contourner des obstacles physiques de façon non-RP." }
        ]
      },
      {
        title: "II. L'Art des Arcanes et des Sorts",
        rules: [
          { name: "2.1 Incantation et Focus", desc: "Chaque sort majeur nécessite une formule vocale et un temps de concentration. Le spam de sorts est prohibé." },
          { name: "2.2 Respect des Effets Subis", desc: "Vous devez impérativement jouer les effets de contrôle (étourdissement, aveuglement) jusqu'à leur dissipation totale." },
          { name: "2.3 Vol de Baguette", desc: "Le vol d'une baguette magique est une scène majeure. Elle doit être justifiée par un background ou une raison RP sérieuse." },
          { name: "2.4 Magie Interdite", desc: "L'usage de la magie noire ou du sang est un crime capital entraînant l'exil ou le Character Kill (CK) après jugement." }
        ]
      },
      {
        title: "III. Conflits, Justice et Destinée",
        rules: [
          { name: "3.1 Activités Criminelles", desc: "Limitées à deux actions majeures par jour par groupe. Les scènes de vol doivent être dynamiques et narratives." },
          { name: "3.2 Otages et Négociations", desc: "La vie des otages doit être la priorité. Les demandes doivent être réalistes et cohérentes avec les moyens du Conclave." },
          { name: "3.3 État de Coma (K.O.)", desc: "Interdiction de parler au sol. Amnésie totale de la scène si vous n'êtes pas réanimé par un guérisseur." },
          { name: "3.4 Character Kill (CK)", desc: "La mort définitive clôture l'histoire de votre personnage. Elle nécessite une validation administrative ou un dossier solide." }
        ]
      },
      {
        title: "IV. Vie Civile et Économie",
        rules: [
          { name: "4.1 Arnaques et Escroqueries", desc: "Plafonnées à 5000 pièces d'or. Les arnaques sur des reliques ou domaines sont interdites sans dossier staff." },
          { name: "4.2 Emplois et Contrats", desc: "Les contrats signés en jeu ont une valeur juridique. Le non-respect entraîne des saisies par décret royal." },
          { name: "4.3 Travail au Noir", desc: "Exercer une activité lucrative sans licence officielle du Conclave est traqué par les Protecteurs des Arcanes." }
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
        title: "I. Déontologie et Exemplarité",
        rules: [
          { name: "1.1 Neutralité Absolue", desc: "Aucun avantage n'est accordé à un groupe ou une faction. Le staff est le garant de l'équité." },
          { name: "1.2 Devoir de Réserve", desc: "Les informations confidentielles et les futurs événements ne doivent jamais être divulgués." },
          { name: "1.3 Excellence du Roleplay", desc: "Un Magistrat doit incarner la perfection du RP et servir de modèle aux nouveaux citoyens." }
        ]
      },
      {
        title: "II. Protocoles de Sanction",
        rules: [
          { name: "2.1 Faisceau de Preuves", desc: "Toute sanction doit être appuyée par des logs ou captures d'écran archivés systématiquement." },
          { name: "2.2 Gradation des Peines", desc: "Pédagogie, Avertissement (Warn), Kick, puis Bannissement selon la gravité et la récidive." },
          { name: "2.3 Gestion des Tickets", desc: "Le support doit être traité avec courtoisie. L'irrespect envers un Magistrat est une faute grave." }
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
