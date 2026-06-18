
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
        title: "I. Intégrité Technique & Exploitation",
        rules: [
          { name: "05 • USE BUG (Exploitation des Bugs)", desc: "Tout bug, glitch ou dysfonctionnement doit être signalé à l'équipe administrative. L'exploitation volontaire d'une faille afin d'obtenir un avantage est passible de lourdes sanctions." },
          { name: "18 • COMBAT LOG", desc: "Se déconnecter volontairement afin d'échapper aux conséquences d'une scène RP est strictement interdit. En cas de problème technique réel, il est recommandé de prévenir rapidement un membre du staff." },
          { name: "19 • BUNNY HOP", desc: "L'utilisation répétée des sauts pour augmenter artificiellement sa vitesse ou obtenir un avantage lors d'une poursuite est interdite. Les déplacements doivent rester naturels et cohérents." }
        ]
      },
      {
        title: "II. Informations & Flux de Données",
        rules: [
          { name: "04 • MÉTAGAMING", desc: "L'utilisation d'informations obtenues hors du jeu pour influencer vos actions en RP est interdite (Discord, Streams, Réseaux sociaux, Conversations HRP). Toute information utilisée en jeu doit avoir été découverte directement par votre personnage." },
          { name: "06 • CONFUSION RP / HRP", desc: "Les informations RP et HRP doivent rester totalement séparées. Ce que vous apprenez en dehors du personnage ne doit jamais influencer vos décisions en jeu." },
          { name: "14 • STREAM HACK", desc: "Utiliser un stream pour localiser un joueur, obtenir des informations stratégiques ou anticiper ses actions est strictement interdit. Cette pratique est assimilée à du méta-gaming aggravé." },
          { name: "15 • BACKSEAT GAMING", desc: "Les spectateurs ou amis extérieurs à la scène ne doivent pas influencer les décisions d'un joueur. Chaque personnage doit agir selon ses propres connaissances et sa propre réflexion." }
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
          { name: "01 • COHÉRENCE ROLEPLAY", desc: "Chaque joueur doit agir de façon logique et crédible selon la personnalité, l'histoire et les capacités de son personnage. Toute action irréaliste ou incohérente est considérée comme du Fail RP." },
          { name: "02 • POWERGAMING", desc: "Réaliser des actions impossibles ou imposer des réactions à un autre joueur sans lui laisser la possibilité d'interpréter son rôle est interdit. Exemple : forcer quelqu'un à tomber inconscient sans interaction." },
          { name: "03 • FEAR RP (Valeur de la vie)", desc: "Votre personnage tient à sa vie. Face à une menace sérieuse, vous devez réagir avec prudence. Ignorer totalement le danger constitue une violation des règles RP." },
          { name: "11 • WIN RP", desc: "Le but du RP n'est pas de gagner systématiquement. Chercher l'avantage au détriment de la logique ou de l'histoire est interdit. Privilégiez la qualité de la scène." },
          { name: "12 • LOSE RP", desc: "Savoir perdre fait partie intégrante du RP. Accepter les conséquences de ses actes ou subir un échec contribue à construire des scènes plus riches." }
        ]
      },
      {
        title: "II. Conflits & Agressions",
        rules: [
          { name: "07 • FREE KILL & FREE PUNCH", desc: "Toute agression physique doit être justifiée par une raison RP valable. Attaquer ou tuer un joueur sans contexte cohérent est interdit." },
          { name: "08 • VEHICLE DEATHMATCH (VDM)", desc: "Un véhicule ne doit jamais être utilisé comme une arme (Balai compris). Percuter volontairement un joueur pour le blesser est sanctionné." },
          { name: "16 • REVENGE KILL", desc: "Après une défaite ou un décès RP, revenir immédiatement se venger sans évolution scénaristique cohérente est interdit." },
          { name: "17 • SPAWN KILL", desc: "Attendre ou attaquer un joueur dès son apparition en jeu dans le seul but de l'éliminer est interdit." }
        ]
      },
      {
        title: "III. Vie Sociale & Immersion",
        rules: [
          { name: "09 • MASS RP", desc: "Vous devez considérer que le monde est vivant. Les actions en public doivent tenir compte de la présence potentielle de civils, de témoins ou des autorités." },
          { name: "13 • TROLL", desc: "Tout comportement destiné à perturber l'expérience des autres (provocations inutiles, nuisances répétées) est strictement interdit." },
          { name: "20 • UTILISATION DES COMMANDES RP", desc: "Les commandes /me, /do, etc., doivent enrichir la scène en décrivant des gestes ou éléments visibles. Toute utilisation abusive est sanctionnée." }
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
        title: "I. Arbitrage & Gestion des Conflits",
        rules: [
          { name: "10 • GESTION DES CONFLITS HRP", desc: "Lorsqu'un problème survient, la scène doit se poursuivre normalement. Les litiges se règlent après l'action via les outils prévus (report, ticket, support ou médiation staff)." },
          { name: "Déontologie Staff", desc: "Neutralité absolue et devoir de réserve sur les dossiers joueurs. Chaque sanction doit être appuyée par des preuves tangibles." }
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
