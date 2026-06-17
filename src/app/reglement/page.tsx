
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
  
  const currentSection = regulationSections.find(s => s.id === selectedSection)
  const SectionIcon = currentSection?.icon

  return (
    <main className="relative min-h-screen flex flex-col bg-transparent overflow-hidden">
      <Navigation />
      
      <div className="relative z-10 flex-1 flex flex-col pt-32 px-12 pb-12 max-w-[1600px] mx-auto w-full">
        
        <AnimatePresence mode="wait">
          {!selectedSection ? (
            <motion.div
              key="selection"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.8 }}
              className="flex-1 flex flex-col"
            >
              <header className="mb-20 text-center">
                <div className="flex items-center justify-center gap-4 mb-8">
                  <div className="h-[1px] w-12 bg-gold/20" />
                  <span className="text-gold text-[10px] tracking-[1.2em] uppercase font-bold text-glow-gold">Codex de Souveraineté</span>
                  <div className="h-[1px] w-12 bg-gold/20" />
                </div>
                <h1 className="text-8xl font-headline text-white uppercase tracking-tighter leading-none mb-10">
                  <span className="shine-text">La Loi d'</span> <br /> 
                  <span className="shine-text italic font-light">Asgarm</span>
                </h1>
                <p className="text-silver/40 text-xl italic font-light max-w-2xl mx-auto leading-relaxed border-l border-gold/10 pl-12">
                  "Trois piliers pour un royaume éternel. Sélectionnez une stèle pour consulter les décrets de notre souveraineté."
                </p>
              </header>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                {regulationSections.map((section, i) => (
                  <motion.button
                    key={section.id}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.2 }}
                    onClick={() => setSelectedSection(section.id)}
                    className="group relative h-[500px] p-12 bg-black/40 border border-white/5 hover:border-gold/30 transition-all duration-1000 flex flex-col items-center justify-center text-center overflow-hidden shadow-2xl"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${section.color} opacity-0 group-hover:opacity-100 transition-opacity duration-1000`} />
                    <section.icon className={`w-12 h-12 mb-8 ${section.accent} opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700`} />
                    <span className="text-[10px] text-gold/40 font-bold uppercase tracking-[0.6em] mb-4">{section.subtitle}</span>
                    <h2 className="text-4xl font-headline text-white uppercase mb-6 tracking-tight group-hover:text-glow-gold">{section.title}</h2>
                    <div className="h-[1px] w-12 bg-gold/20 mb-8 group-hover:w-full transition-all duration-1000" />
                    <p className="text-silver/40 text-xs italic font-light leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                      {section.desc}
                    </p>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="content"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.8 }}
              className="flex-1 flex flex-col"
            >
              <button 
                onClick={() => setSelectedSection(null)}
                className="inline-flex items-center gap-2 text-gold/40 hover:text-gold transition-colors mb-12 group w-fit"
              >
                <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                <span className="text-[10px] font-bold uppercase tracking-[0.4em]">Retour aux Piliers</span>
              </button>

              <div className="flex flex-col lg:flex-row gap-20 items-start">
                <div className="lg:w-1/3 sticky top-32">
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
                    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
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
                      className="p-12 bg-white/[0.02] border border-white/5 hover:border-gold/20 transition-all duration-700 group"
                    >
                      <div className="flex items-center gap-6 mb-6">
                        <span className="text-gold/20 font-serif italic text-2xl">0{i + 1}</span>
                        <h3 className="text-2xl font-headline text-white uppercase tracking-tight group-hover:text-glow-gold transition-colors">
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
            </motion.div>
          )}
        </AnimatePresence>

        <footer className="mt-48 h-24 flex flex-col items-center justify-center relative z-20">
          <div className="h-[1px] w-32 bg-gradient-to-r from-transparent via-gold/20 to-transparent mb-12" />
          <span className="shine-text text-[10px] tracking-[0.8em] uppercase font-bold text-center">
            CONCLAVE SUPRÊME — ÉQUILIBRE D'ASGARM V3.1
          </span>
        </footer>
      </div>

      <style jsx global>{`
        .text-glow-gold {
          text-shadow: 0 0 25px rgba(212, 175, 55, 0.4);
        }
      `}</style>
    </main>
  )
}
