
"use client"

import React, { useState } from 'react'
import { Navigation } from '@/components/Navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, Gavel, ShieldAlert, Scroll, Users, Zap, EyeOff, Terminal, ShieldCheck, HeartPulse, Scale, BookOpen, AlertCircle, HardDrive, UserPlus, Fingerprint, Shield } from 'lucide-react'
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
    desc: "Les lois fondamentales régissant l'intégrité de la communauté, la sécurité technique et les interactions hors-jeu.",
    chapters: [
      {
        title: "Ethique & Comportement Communautaire",
        icon: Users,
        rules: [
          { name: "Respect et Dignité", desc: "Toute forme de harcèlement, d'insulte, de discrimination (racisme, sexisme, homophobie, etc.) ou de comportement toxique, que ce soit en jeu ou sur les plateformes communautaires, est strictement interdite et passible d'un bannissement définitif." },
          { name: "Publicité et Recrutement Externe", desc: "La promotion de serveurs tiers, de projets concurrents ou de flux extérieurs non autorisés est une violation grave du pacte de loyauté d'Asgarm." },
          { name: "Confidentialité et Doxxing", desc: "La divulgation d'informations personnelles (nom, adresse, photos, réseaux sociaux) d'un autre citoyen sans son consentement explicite est un crime de haute trahison." },
          { name: "Usurpation d'Identité", desc: "Se faire passer pour un membre du staff ou un représentant officiel du projet est une faute éliminatoire." }
        ]
      },
      {
        title: "Sécurité Technique & Anti-Triche",
        icon: Terminal,
        rules: [
          { name: "Logiciels de Triche", desc: "L'utilisation de cheats, aimbots, wallhacks, macros complexes, auto-clickers ou tout logiciel tiers modifiant les fichiers du jeu est proscrite. Toute détection entraîne un bannissement immédiat." },
          { name: "Exploitation de Failles (Glitch)", desc: "L'utilisation délibérée de bugs ou de failles de map pour obtenir un avantage injuste est interdite. Tout bug découvert doit être signalé via le système de tickets." },
          { name: "Multi-Compte et Partage", desc: "Chaque citoyen possède un compte unique lié à son identité. Le partage de compte ou la création de comptes secondaires pour contourner une sanction est strictement interdit." },
          { name: "Spam et Flood", desc: "L'inondation des canaux textuels ou vocaux avec des messages répétitifs ou du bruit inutile est sanctionnée." }
        ]
      },
      {
        title: "Streaming & Droits Médias",
        icon: EyeOff,
        rules: [
          { name: "Stream Sniping", desc: "L'utilisation d'informations obtenues en regardant le flux vidéo d'un autre joueur pour localiser, attaquer ou influencer son jeu est formellement interdite." },
          { name: "Droit à l'Image et Enregistrement", desc: "Tout enregistrement à but malveillant ou visant à ridiculiser un citoyen est interdit. Le staff se réserve le droit de demander l'accès à un enregistrement pour arbitrage." },
          { name: "Promotion d'Outland", desc: "Les créateurs de contenu doivent respecter l'image de marque d'Asgarm. Les comportements nuisant à la réputation du projet en live seront sanctionnés." }
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
    desc: "Le recueil des lois d'immersion régissant chaque interaction, chaque race et chaque métier au sein du royaume d'Asgarm.",
    chapters: [
      {
        title: "Concepts Fondamentaux du Rôle",
        icon: Gavel,
        rules: [
          { name: "MetaGaming", desc: "L'utilisation en jeu d'informations apprises hors-jeu (Discord, stream, rumeurs HRP) est strictement interdite. Votre personnage ne sait que ce qu'il a vécu en jeu." },
          { name: "PowerGaming", desc: "Réaliser des actions impossibles physiquement, ne pas laisser de chance de réaction à l'adversaire ou imposer sa volonté de manière scriptée sans interaction mutuelle est proscrit." },
          { name: "FearRP (Peur de la Mort)", desc: "Votre personnage n'est pas immortel. Face à une menace sérieuse (arme sous la gorge, supériorité numérique écrasante), vous devez agir avec crainte pour votre vie." },
          { name: "PainRP (Ressenti de la Douleur)", desc: "Toute blessure doit être jouée avec réalisme. Un sort de feu ou une chute impacte vos mouvements, votre voix et nécessite des soins appropriés." },
          { name: "Mix-RP", desc: "Parler de sujets HRP en étant en personnage (personnes réelles, problèmes techniques, admin) est interdit." }
        ]
      },
      {
        title: "Institutions, Métiers & Hiérarchie",
        icon: BookOpen,
        rules: [
          { name: "L'Académie Royale d'Asgarm", desc: "Le respect de la hiérarchie professorale est obligatoire. Les élèves doivent suivre les directives et respecter les zones de duels autorisées." },
          { name: "Le Conclave des Arcanes", desc: "Les Protecteurs représentent la loi suprême. Toute insulte, rébellion ou entrave à leur mission entraîne des sanctions judiciaires lourdes." },
          { name: "Le Conclave des Ombres", desc: "Leurs lois sont clandestines mais souveraines dans leur domaine. L'adhésion à ce conclave implique des secrets d'Etat inviolables." },
          { name: "Economie et Commerce", desc: "Le commerce doit suivre les prix du marché royal. Les arnaques massives ruinant l'expérience de jeu sont soumises à arbitrage." }
        ]
      },
      {
        title: "Physiologie, Races & Magie",
        icon: Zap,
        rules: [
          { name: "Canalisation Arcanique", desc: "Aucun sort ne peut être lancé sans une baguette (sauf trait de race spécifique). La perte de votre baguette réduit drastiquement votre puissance." },
          { name: "Spécificités des Races", desc: "Les Elfes, Nains et Vampires doivent respecter leur lore. Un Vampire doit gérer sa soif, un Nain sa fierté pour sa forge, etc." },
          { name: "Magie Noire et de Sang", desc: "L'usage de ces magies est illégal aux yeux des Arcanes. Leur utilisation publique vous expose à une arrestation immédiate par les Protecteurs." },
          { name: "Morts et Séquelles", desc: "Un coma (mort RP temporaire) implique une perte de mémoire des 15 dernières minutes précédant l'incident. Le CK (Mort définitive) est soumis à un dossier staff." }
        ]
      }
    ]
  },
  {
    id: "staff",
    title: "Code du Staff",
    subtitle: "HAUTE MAGISTRATURE",
    color: "from-red-600/20 to-black/40",
    accent: "text-red-600",
    glow: "text-glow-red",
    shineClass: "shine-text-red",
    desc: "Les devoirs, obligations et protocoles rigoureux des gardiens et administrateurs du projet Outland.",
    chapters: [
      {
        title: "Le Serment de Déontologie",
        icon: Scale,
        rules: [
          { name: "Neutralité et Impartialité", desc: "Un membre du staff ne doit jamais favoriser un ami ou une connaissance lors d'un arbitrage. Les faits priment sur les affinités." },
          { name: "Devoir de Réserve", desc: "Les informations internes au staff (projets futurs, dossiers sanctions, logs privés) ne doivent jamais être divulguées aux joueurs." },
          { name: "Exemplarité Souveraine", desc: "Le comportement d'un membre du staff doit être irréprochable. Toute faute RP ou HRP de sa part est sanctionnée doublement." },
          { name: "Non-Abus de Pouvoir", desc: "L'utilisation des commandes administratives (tp, godmode, invisible) à des fins personnelles ou pour influencer une scène RP est un motif de radiation." }
        ]
      },
      {
        title: "Protocoles de Justice Magistrale",
        icon: ShieldCheck,
        rules: [
          { name: "Pédagogie et Arbitrage", desc: "La mission première du staff est d'expliquer les erreurs. La sanction ne doit intervenir qu'en cas de récidive ou de faute grave intentionnelle." },
          { name: "Gestion des Tickets", desc: "Les demandes doivent être traitées avec respect et clarté. Chaque intervention doit être consignée dans les registres du staff." },
          { name: "Preuves et Verdicts", desc: "Aucune sanction majeure ne peut être appliquée sans preuves tangibles (vidéos, logs système). Le staff doit rester factuel." },
          { name: "Confidentialité des Sanctions", desc: "Les détails d'une sanction ne concernent que la personne sanctionnée et le staff. La délation publique est proscrite." }
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
                        La connaissance de ces décrets est impérative pour tout citoyen d'Asgarm. Le Conclave Suprême veille à leur application stricte.
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
