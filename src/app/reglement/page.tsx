
"use client"

import React, { useState } from 'react'
import { Navigation } from '@/components/Navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { UserCircle, Sword, ShieldCheck, ChevronLeft } from 'lucide-react'

const regulationSections = [
  {
    id: "hrp",
    title: "Pacte HRP",
    subtitle: "Hors-Rôle-Play",
    icon: UserCircle,
    color: "from-sky-500/20 to-blue-600/5",
    accent: "text-sky-400",
    glow: "text-glow-sky",
    desc: "Les lois fondamentales régissant la communauté et la sécurité des citoyens d'Asgarm.",
    rules: [
      { title: "Respect et Intégrité", text: "Le respect mutuel est le socle d'Outland. Toute forme de harcèlement, de toxicité ou de discrimination entraînera une exclusion immédiate et définitive." },
      { title: "Publicité et Flux Externe", text: "La promotion de royaumes tiers ou de services extérieurs est strictement interdite sur l'ensemble des canaux éthérés du projet." },
      { title: "Sécurité des Accès", text: "Chaque citoyen est seul responsable de la sécurité de son compte. Le partage de compte est proscrit pour garantir l'intégrité de la progression." },
      { title: "Exploitation Technique", text: "L'usage de logiciels tiers (cheats, macros) ou l'exploitation de failles architecturales est considéré comme un crime de haute trahison." }
    ]
  },
  {
    id: "rp",
    title: "Décrets RP",
    subtitle: "Immersion & Lore",
    icon: Sword,
    color: "from-gold/20 to-amber-600/5",
    accent: "text-gold",
    glow: "text-glow-gold",
    desc: "Les règles de conduite en jeu pour préserver l'immersion et la cohérence de l'univers d'Asgarm.",
    rules: [
      { title: "Souveraineté de l'Immersion", text: "Le MetaGaming et le PowerGaming sont formellement interdits pour préserver le réalisme de chaque interaction." },
      { title: "Cohérence du Personnage", text: "Chaque citoyen doit incarner son personnage avec justesse, en respectant les peurs, les ambitions et le lore de sa race." },
      { title: "Usage de la Magie", text: "L'utilisation des sorts doit suivre les directives du Conclave. L'abus de magie noire ou de sang est strictement régulé." },
      { title: "Conséquences Narratives", text: "Les actions majeures ont des conséquences permanentes. La mort RP est un événement magistral validé par les instances." }
    ]
  },
  {
    id: "staff",
    title: "Code du Staff",
    subtitle: "Haute Magistrature",
    icon: ShieldCheck,
    color: "from-red-600/20 to-black/40",
    accent: "text-red-600",
    glow: "text-glow-red",
    desc: "Les devoirs et obligations des gardiens et administrateurs d'Outland.",
    rules: [
      { title: "Neutralité Absolue", text: "Les membres du staff doivent faire preuve d'une impartialité totale. Aucun favoritisme ne sera toléré dans l'exercice de la justice." },
      { title: "Devoir de Réserve", text: "La confidentialité des délibérations internes et des dossiers citoyens est un serment inviolable pour tout magistrat." },
      { title: "Professionnalisme", text: "Le staff incarne l'image du royaume. Son comportement doit être irréprochable, dans les interactions publiques comme privées." },
      { title: "Médiation Royale", text: "Le rôle du staff est de faciliter l'expérience. Chaque sanction doit être pédagogique, documentée et motivée par l'équilibre." }
    ]
  }
]

export default function ReglementPage() {
  const [selectedSection, setSelectedSection] = useState<string | null>(null)
  const [hoveredSection, setHoveredSection] = useState<string | null>(null)
  
  const currentSection = regulationSections.find(s => s.id === selectedSection)
  const SectionIcon = currentSection?.icon

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
              className="flex-1 flex"
            >
              {regulationSections.map((section, i) => (
                <button
                  key={section.id}
                  onMouseEnter={() => setHoveredSection(section.id)}
                  onMouseLeave={() => setHoveredSection(null)}
                  onClick={() => setSelectedSection(section.id)}
                  className={`relative flex-1 flex flex-col items-center justify-center p-12 transition-all duration-1000 ease-in-out border-r border-white/5 last:border-0 ${
                    hoveredSection && hoveredSection !== section.id ? 'opacity-30 scale-95' : 'opacity-100'
                  }`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-b ${section.color} opacity-0 group-hover:opacity-10 pointer-events-none transition-opacity duration-1000`} />
                  
                  <motion.div 
                    animate={{ 
                      opacity: hoveredSection === section.id ? 0.2 : 0.05,
                      scale: hoveredSection === section.id ? 1.2 : 1
                    }}
                    className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-white/10 blur-[120px] rounded-full pointer-events-none`} 
                  />

                  <div className="relative z-20 text-center max-w-md">
                    <section.icon className={`w-12 h-12 mb-8 mx-auto ${section.accent} opacity-40`} />
                    <div className="flex items-center justify-center gap-4 mb-6">
                      <div className="h-[1px] w-8 bg-white/10" />
                      <span className={`${section.accent} text-[9px] tracking-[0.8em] uppercase font-bold`}>{section.subtitle}</span>
                      <div className="h-[1px] w-8 bg-white/10" />
                    </div>
                    <h2 className={`text-6xl font-headline text-white uppercase tracking-tighter mb-8 leading-none ${section.glow}`}>
                      {section.title}
                    </h2>
                    <p className="text-silver/40 italic text-sm leading-relaxed mb-12 opacity-0 lg:opacity-100 transition-opacity">
                      {section.desc}
                    </p>
                    <div className={`px-10 py-4 border border-white/10 text-white text-[9px] font-bold uppercase tracking-[0.4em] hover:bg-white hover:text-black transition-all duration-500`}>
                      Consulter les Décrets
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
                  <span className="text-[10px] font-bold uppercase tracking-[0.4em]">Retour au Codex</span>
                </button>

                <div className="flex flex-col lg:flex-row gap-20 items-start">
                  <div className="lg:w-1/3 sticky top-0">
                    <div className="flex items-center gap-4 mb-6">
                      {SectionIcon && <SectionIcon className={`w-5 h-5 ${currentSection?.accent}`} />}
                      <span className={`text-[10px] font-bold uppercase tracking-[0.8em] ${currentSection?.accent}`}>{currentSection?.subtitle}</span>
                    </div>
                    <h2 className="text-7xl font-headline text-white uppercase tracking-tighter mb-8 leading-none">
                      {currentSection?.title}
                    </h2>
                    <p className="text-silver/50 text-xl italic font-light leading-relaxed border-l border-white/10 pl-8 mb-12">
                      {currentSection?.desc}
                    </p>
                    <div className={`p-8 bg-black/40 border border-white/5 shadow-2xl relative overflow-hidden`}>
                      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
                      <p className="text-silver/40 text-[10px] uppercase tracking-[0.2em] leading-relaxed italic">
                        L'application de ces décrets est universelle. Chaque citoyen d'Asgarm s'engage à respecter ce serment dès son arrivée.
                      </p>
                    </div>
                  </div>

                  <div className="flex-1 grid grid-cols-1 gap-6">
                    {currentSection?.rules.map((rule, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="p-12 bg-white/[0.02] border border-white/5 hover:border-white/20 transition-all duration-700 group"
                      >
                        <div className="flex items-center gap-6 mb-6">
                          <span className="text-white/20 font-serif italic text-2xl">0{i + 1}</span>
                          <h3 className="text-2xl font-headline text-white uppercase tracking-tight group-hover:text-glow-white transition-colors">
                            {rule.title}
                          </h3>
                        </div>
                        <div className="h-[1px] w-full bg-white/5 mb-6" />
                        <p className="text-silver/50 text-lg leading-relaxed italic font-light">
                          {rule.text}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <footer className="mt-auto h-24 flex flex-col items-center justify-center relative z-20 border-t border-white/5 bg-black/40">
          <span className="shine-text text-[10px] tracking-[0.8em] uppercase font-bold text-center">
            CONCLAVE SUPRÊME — ÉQUILIBRE D'ASGARM V3.1
          </span>
        </footer>
      </div>

      <style jsx global>{`
        .text-glow-sky { text-shadow: 0 0 25px rgba(14, 165, 233, 0.4); }
        .text-glow-gold { text-shadow: 0 0 25px rgba(212, 175, 55, 0.4); }
        .text-glow-red { text-shadow: 0 0 25px rgba(220, 38, 38, 0.4); }
        .text-glow-white { text-shadow: 0 0 25px rgba(255, 255, 255, 0.2); }
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255, 255, 255, 0.1); border-radius: 10px; }
      `}</style>
    </main>
  )
}
