
"use client"

import React, { useState } from 'react'
import { Navigation } from '@/components/Navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, Gavel, ShieldAlert, Scroll, Users, Zap, EyeOff, Terminal, ShieldCheck, HeartPulse, Scale, BookOpen } from 'lucide-react'
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
    subtitle: "Hors-Rôle-Play",
    color: "from-sky-500/20 to-blue-600/5",
    accent: "text-sky-400",
    glow: "text-glow-sky",
    shineClass: "shine-text-blue",
    desc: "Les lois fondamentales régissant l'intégrité de la communauté et la sécurité technique des citoyens d'Asgarm.",
    chapters: [
      {
        title: "Piliers de la Communauté",
        icon: Users,
        rules: [
          { name: "Respect Absolu", desc: "Toute forme de harcèlement, discrimination, ou toxicité envers un citoyen ou le royaume est passible d'un bannissement définitif." },
          { name: "Publicité Interdite", desc: "La promotion de royaumes tiers ou de flux éthérés extérieurs est strictement prohibée sur l'ensemble de nos réseaux." },
          { name: "Confidentialité", desc: "La diffusion d'informations personnelles (Doxxing) est un crime de haute trahison entraînant une exclusion immédiate." }
        ]
      },
      {
        title: "Intégrité Technique",
        icon: Terminal,
        rules: [
          { name: "Logiciels Tiers", desc: "L'usage de cheats, macros, auto-clickers ou tout logiciel modifiant les capacités physiques ou magiques est proscrit." },
          { name: "Exploitation de Failles", desc: "L'utilisation de bugs (Glitch) pour obtenir un avantage est interdite. Tout bug découvert doit être signalé aux Magistrats." },
          { name: "Sécurité des Accès", desc: "Le partage de compte est strictement interdit. Vous êtes l'unique garant de votre identité au sein d'Asgarm." }
        ]
      },
      {
        title: "Flux Éthérés & Médias",
        icon: EyeOff,
        rules: [
          { name: "Stream Sniping", desc: "L'utilisation d'informations provenant d'un flux vidéo (Live) pour interagir en jeu est formellement interdite." },
          { name: "Droit à l'Image", desc: "Tout enregistrement doit respecter la dignité des participants. L'usage malveillant de vidéos est sanctionné." }
        ]
      }
    ]
  },
  {
    id: "rp",
    title: "Décrets RP",
    subtitle: "Immersion & Lore",
    color: "from-gold/20 to-amber-600/5",
    accent: "text-gold",
    glow: "text-glow-gold",
    shineClass: "shine-text",
    desc: "Le recueil des lois d'immersion régissant chaque interaction, chaque race et chaque métier au sein d'Asgarm.",
    chapters: [
      {
        title: "Lois Fondamentales du Rôle",
        icon: Gavel,
        rules: [
          { name: "MetaGaming", desc: "L'usage d'informations obtenues hors-jeu (HRP) pour influencer vos actions en jeu est strictement interdit." },
          { name: "PowerGaming", desc: "Réaliser des actions impossibles physiquement ou ne laisser aucune chance de réaction à autrui est proscrit." },
          { name: "FearRP", desc: "Votre personnage doit ressentir la peur face à une menace mortelle. Votre vie est votre bien le plus précieux." },
          { name: "PainRP", desc: "Toute blessure doit être jouée avec réalisme, impactant vos capacités de mouvement et d'élocution." }
        ]
      },
      {
        title: "Institutions & Métiers",
        icon: BookOpen,
        rules: [
          { name: "L'Académie d'Asgarm", desc: "Les élèves doivent respecter la hiérarchie professorale. Les duels sont interdits hors des zones supervisées." },
          { name: "Le Conclave des Arcanes", desc: "Les Protecteurs représentent la loi. Toute entrave à leur mission est un crime puni par l'emprisonnement." },
          { name: "La Royauté", desc: "Le respect des lignées royales est le socle de la stabilité d'Asgarm. Les régicides ont des conséquences permanentes." }
        ]
      },
      {
        title: "Physiologie & Races",
        icon: HeartPulse,
        rules: [
          { name: "Héritage Elfique", desc: "Les Elfes doivent agir en harmonie avec la nature. Leur magie est un don sacré qui ne doit pas être dévoyé." },
          { name: "Nature Vampirique", desc: "Les Vampires doivent gérer leur soif avec discrétion. Leur rôle de guérisseur prime sur leur instinct de prédateur." },
          { name: "Fierté Naine", desc: "La Citadelle de Fer est souveraine. Les Nains sont les seuls maîtres autorisés de la forge des baguettes." }
        ]
      },
      {
        title: "Usage des Arcanes",
        icon: Zap,
        rules: [
          { name: "Canalisation", desc: "Aucun sort ne peut être lancé sans baguette (sauf race spécifique). La perte de votre baguette vous rend vulnérable." },
          { name: "Magie Noire & Sang", desc: "Ces arts sont régulés par le Conclave des Ombres. Leur usage public est passible de sanctions par les Arcanes." }
        ]
      }
    ]
  },
  {
    id: "staff",
    title: "Code du Staff",
    subtitle: "Haute Magistrature",
    color: "from-red-600/20 to-black/40",
    accent: "text-red-600",
    glow: "text-glow-red",
    shineClass: "shine-text-red",
    desc: "Les devoirs, obligations et protocoles rigoureux des gardiens et administrateurs d'Outland.",
    chapters: [
      {
        title: "Le Serment du Magistrat",
        icon: Scale,
        rules: [
          { name: "Neutralité Absolue", desc: "Un membre du staff n'a ni ami, ni ennemi lors d'une médiation. L'impartialité est son premier bouclier." },
          { name: "Devoir de Réserve", desc: "Les secrets du conseil et les dossiers des citoyens sont sacrés. Toute fuite entraîne une révocation immédiate." },
          { name: "Exemple Souverain", desc: "Le comportement du staff doit être irréprochable. En jeu, ils doivent être des modèles d'immersion." }
        ]
      },
      {
        title: "Protocoles d'Intervention",
        icon: ShieldCheck,
        rules: [
          { name: "Médiation Pédagogique", desc: "La sanction est le dernier recours. L'explication et la pédagogie sont les premiers outils du magistrat." },
          { name: "Preuves & Justice", desc: "Aucune sanction majeure ne peut être appliquée sans preuves tangibles (logs, vidéos). Le doute profite au citoyen." },
          { name: "Tickets & Support", desc: "Les demandes doivent être traitées avec respect et célérité via les canaux officiels du royaume." }
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
              transition={{ duration: 1 }}
              className="flex-1 flex h-full"
            >
              {regulationSections.map((section) => (
                <button
                  key={section.id}
                  onMouseEnter={() => setHoveredSection(section.id)}
                  onMouseLeave={() => setHoveredSection(null)}
                  onClick={() => setSelectedSection(section.id)}
                  className={`relative flex-1 flex flex-col items-center justify-center p-12 transition-all duration-1000 ease-in-out border-r border-white/5 last:border-0 ${
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

                  <div className="relative z-20 text-center max-w-md w-full">
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
                    <div className={`inline-block px-10 py-4 border border-white/10 text-white text-[9px] font-bold uppercase tracking-[0.4em] hover:bg-white hover:text-black transition-all duration-500`}>
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
              transition={{ duration: 0.8 }}
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
                    <div className={`p-8 bg-black/40 border border-white/5 shadow-2xl relative overflow-hidden`}>
                      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
                      <p className="text-silver/40 text-[10px] uppercase tracking-[0.2em] leading-relaxed italic">
                        La connaissance de ces lois est impérative. Tout manquement sera arbitré par le Conclave Suprême d'Asgarm.
                      </p>
                    </div>
                  </div>

                  <div className="flex-1">
                    <Accordion type="single" collapsible className="w-full space-y-6">
                      {currentSection?.chapters.map((chapter, i) => {
                        const Icon = chapter.icon;
                        return (
                          <AccordionItem 
                            key={i} 
                            value={`chapter-${i}`}
                            className="border border-white/5 bg-white/[0.02] px-8 rounded-none overflow-hidden hover:bg-white/[0.04] transition-all duration-500"
                          >
                            <AccordionTrigger className="hover:no-underline py-8">
                              <div className="flex items-center gap-6">
                                <div className={`p-3 bg-white/[0.03] border border-white/10 rounded-none ${currentSection.accent}`}>
                                  <Icon className="w-5 h-5" />
                                </div>
                                <span className="text-2xl font-headline text-white uppercase tracking-tight text-left">
                                  {chapter.title}
                                </span>
                              </div>
                            </AccordionTrigger>
                            <AccordionContent className="pb-8">
                              <div className="grid grid-cols-1 gap-4 pt-4">
                                {chapter.rules.map((rule, j) => (
                                  <div key={j} className="p-6 bg-black/40 border border-white/5 group hover:border-white/20 transition-all duration-500">
                                    <div className="flex items-center gap-4 mb-3">
                                      <div className={`w-1 h-1 rounded-full bg-current ${currentSection.accent}`} />
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
                        );
                      })}
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
