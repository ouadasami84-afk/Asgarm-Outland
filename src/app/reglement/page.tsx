
"use client"

import React from 'react'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { motion } from 'framer-motion'
import { 
  ShieldAlert, 
  UserCircle, 
  Sword, 
  Gavel,
  ScrollText,
  UserCheck,
  History,
  Eye,
  ShieldCheck
} from 'lucide-react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const regulationSections = [
  {
    id: "hrp",
    title: "Pacte HRP — Hors-Rôle-Play",
    icon: UserCircle,
    rank: "PILIER I",
    desc: "Les lois fondamentales régissant la communauté et la sécurité des citoyens d'Asgarm.",
    rules: [
      { 
        title: "Respect et Intégrité", 
        text: "Le respect mutuel est le socle d'Outland. Toute forme de harcèlement, de toxicité ou de discrimination entraînera une exclusion immédiate et définitive." 
      },
      { 
        title: "Publicité et Flux Externe", 
        text: "La promotion de royaumes tiers ou de services extérieurs est strictement interdite sur l'ensemble des canaux éthérés du projet." 
      },
      { 
        title: "Sécurité des Accès", 
        text: "Chaque citoyen est seul responsable de la sécurité de son compte. Le partage de compte est proscrit pour garantir l'intégrité de la progression." 
      },
      { 
        title: "Exploitation Technique", 
        text: "L'usage de logiciels tiers (cheats, macros) ou l'exploitation de failles architecturales est considéré comme un crime de haute trahison envers le royaume." 
      }
    ]
  },
  {
    id: "rp",
    title: "Décrets RP — Immersion et Lore",
    icon: Sword,
    rank: "PILIER II",
    desc: "Les règles de conduite en jeu pour préserver l'immersion et la cohérence de l'univers d'Asgarm.",
    rules: [
      { 
        title: "Souveraineté de l'Immersion", 
        text: "Le MetaGaming (utilisation d'informations HRP en jeu) et le PowerGaming (actions impossibles) sont formellement interdits pour préserver le réalisme." 
      },
      { 
        title: "Cohérence du Personnage", 
        text: "Chaque citoyen doit incarner son personnage avec justesse, en respectant les peurs, les ambitions et le lore spécifique à sa race et son royaume." 
      },
      { 
        title: "Usage de la Magie", 
        text: "L'utilisation des sorts et des baguettes doit suivre les directives du Conclave. L'abus de magie noire ou de sang sans raison narrative majeure est régulé." 
      },
      { 
        title: "Conséquences et Mort RP", 
        text: "Les actions majeures ont des conséquences permanentes. La mort RP est un événement magistral qui doit être validé par les instances compétentes." 
      }
    ]
  },
  {
    id: "staff",
    title: "Code du Staff — Haute Magistrature",
    icon: ShieldCheck,
    rank: "PILIER III",
    desc: "Les devoirs et obligations des gardiens et administrateurs d'Outland.",
    rules: [
      { 
        title: "Neutralité Absolue", 
        text: "Les membres du staff doivent faire preuve d'une impartialité totale. Aucun favoritisme ne sera toléré dans l'exercice de la justice royale." 
      },
      { 
        title: "Devoir de Réserve", 
        text: "La confidentialité des délibérations internes et des dossiers citoyens est un serment inviolable pour tout membre de la magistrature." 
      },
      { 
        title: "Professionnalisme Exemplaire", 
        text: "Le staff incarne l'image du royaume. Son comportement doit être irréprochable, tant dans les interactions publiques que privées." 
      },
      { 
        title: "Arbitrage et Médiation", 
        text: "Le rôle du staff est de faciliter l'expérience citoyenne. Chaque sanction doit être pédagogique, documentée et motivée par l'équilibre du jeu." 
      }
    ]
  }
]

export default function ReglementPage() {
  return (
    <main className="relative min-h-screen flex flex-col bg-transparent overflow-hidden">
      <Navigation />
      
      <div className="relative z-10 flex-1 flex flex-col pt-48 px-8 pb-24 max-w-6xl mx-auto w-full">
        
        {/* En-tête de la Charte */}
        <header className="mb-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-[1px] w-12 bg-gold/20" />
              <ShieldAlert className="w-4 h-4 text-gold/40" />
              <span className="text-gold text-[10px] tracking-[1em] uppercase font-bold text-glow-gold">Codex d'Outland</span>
              <div className="h-[1px] w-12 bg-gold/20" />
            </div>
            
            <h1 className="text-7xl font-headline text-white uppercase tracking-tighter leading-none mb-10">
              <span className="shine-text">Charte de</span> <br /> 
              <span className="shine-text italic font-light">Souveraineté</span>
            </h1>
            
            <p className="text-silver/40 text-xl italic font-light max-w-2xl mx-auto leading-relaxed border-l border-gold/10 pl-12">
              "Trois piliers pour un royaume éternel. Que la loi soit le bouclier de notre immersion et le glaive de notre justice."
            </p>
          </motion.div>
        </header>

        {/* Le Codex (Contenu) */}
        <section className="relative mb-32">
          <div className="absolute inset-0 bg-gold/[0.01] blur-3xl rounded-full pointer-events-none" />
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="space-y-12 relative z-10"
          >
            {regulationSections.map((section, idx) => (
              <div key={section.id} className="glass-night border border-gold/10 overflow-hidden">
                <div className="p-10 border-b border-gold/5 bg-gold/[0.02] flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 rounded-full border border-gold/20 flex items-center justify-center bg-black/40">
                      <section.icon className="w-6 h-6 text-gold" />
                    </div>
                    <div>
                      <span className="text-[9px] text-gold/40 font-bold uppercase tracking-[0.5em] mb-1 block">{section.rank}</span>
                      <h2 className="text-3xl font-headline text-white uppercase tracking-tight">{section.title}</h2>
                    </div>
                  </div>
                  <p className="text-silver/40 text-xs italic font-light max-w-sm md:text-right">
                    {section.desc}
                  </p>
                </div>

                <div className="p-8 md:p-12">
                  <Accordion type="single" collapsible className="w-full space-y-4">
                    {section.rules.map((rule, i) => (
                      <AccordionItem 
                        key={i} 
                        value={`${section.id}-rule-${i}`}
                        className="border-none bg-white/[0.02] hover:bg-white/[0.04] transition-all px-6"
                      >
                        <AccordionTrigger className="hover:no-underline py-6">
                          <div className="flex items-center gap-4 text-left">
                            <span className="text-gold/20 font-serif italic text-sm">0{i + 1}</span>
                            <h3 className="text-base font-bold text-white/80 uppercase tracking-widest group-hover:text-gold transition-colors">
                              {rule.title}
                            </h3>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="pb-8 pl-10">
                          <p className="text-silver/50 text-sm leading-relaxed italic font-light border-l border-gold/10 pl-6">
                            {rule.text}
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </div>
            ))}
          </motion.div>
        </section>

        {/* Section Engagement */}
        <section className="text-center mb-24">
          <div className="h-16 w-[1px] bg-gradient-to-b from-gold/40 to-transparent mx-auto mb-12" />
          <motion.div
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.95 }}
            className="inline-block p-12 border border-gold/10 bg-black/60 backdrop-blur-md"
          >
            <History className="w-6 h-6 text-gold/20 mx-auto mb-6" />
            <p className="text-silver/40 text-[10px] uppercase tracking-[0.4em] mb-10 font-bold">
              En foulant les terres d'Asgarm, vous acceptez ce serment éternel
            </p>
            <button 
              onClick={() => window.history.back()}
              className="px-20 py-5 border border-gold/20 text-gold text-[10px] font-bold uppercase tracking-[0.6em] hover:bg-gold hover:text-primary transition-all duration-700 shadow-2xl"
            >
              Retourner au Trône
            </button>
          </motion.div>
        </section>

        <footer className="mt-auto h-24 flex items-center justify-center relative z-20">
          <span className="shine-text text-[9px] tracking-[0.8em] uppercase font-bold text-center">
            CONCLAVE SUPRÊME — ÉQUILIBRE D'ASGARM V3.1
          </span>
        </footer>
      </div>

      <style jsx global>{`
        .text-glow-gold {
          text-shadow: 0 0 20px rgba(212, 175, 55, 0.4);
        }
      `}</style>
    </main>
  )
}
