
"use client"

import React from 'react'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { motion } from 'framer-motion'
import { 
  ShieldAlert, 
  MessageCircle, 
  Sword, 
  Scale, 
  ScrollText,
  UserCheck,
  History
} from 'lucide-react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const sections = [
  {
    id: "conduct",
    title: "Conduite et Respect",
    icon: UserCheck,
    rank: "PILIER I",
    rules: [
      "Le respect mutuel est le fondement sacré d'Asgarm. Toute forme d'insulte, de discrimination ou de harcèlement est proscrite.",
      "L'usurpation d'identité, qu'elle concerne un haut magistrat ou un citoyen, est passible de sanctions immédiates.",
      "La préservation de l'anonymat et de la vie privée des membres est un droit inaliénable du royaume."
    ]
  },
  {
    id: "gameplay",
    title: "Gameplay et Équité",
    icon: Sword,
    rank: "PILIER II",
    rules: [
      "L'usage de sortilèges extérieurs (cheats, macros) offrant un avantage déloyal est banni par le Conclave.",
      "L'exploitation de failles (glitchs) dans l'architecture du monde doit être signalée sans délai aux autorités.",
      "Le sabotage délibéré de l'immersion d'autrui est régulé selon les décrets territoriaux en vigueur."
    ]
  },
  {
    id: "comm",
    title: "Communication et Médias",
    icon: MessageCircle,
    rank: "PILIER III",
    rules: [
      "La clarté des flux d'information doit être préservée. Le spam et le flood sont interdits dans les canaux publics.",
      "La diffusion de messages à caractère publicitaire pour des royaumes tiers est strictement prohibée.",
      "Tout contenu visuel ou textuel enfreignant la dignité humaine sera immédiatement purgé des archives."
    ]
  },
  {
    id: "moderation",
    title: "Justice et Sanctions",
    icon: Scale,
    rank: "PILIER IV",
    rules: [
      "Le Conclave possède le pouvoir d'arbitrage final. Chaque décision est motivée par la préservation de l'équilibre.",
      "Le contournement d'un bannissement via des voies occultes (double compte) entraîne une exclusion définitive.",
      "Chaque citoyen est garant de la sécurité de ses propres accès. Le royaume ne saurait être tenu responsable des négligences individuelles."
    ]
  }
]

export default function ReglementPage() {
  return (
    <main className="relative min-h-screen flex flex-col bg-transparent overflow-hidden">
      <Navigation />
      
      <div className="relative z-10 flex-1 flex flex-col pt-48 px-8 pb-24 max-w-5xl mx-auto w-full">
        
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
              "Que ces lois soient gravées dans l'éther pour l'éternité. Nul ne peut prétendre régner sur Asgarm sans respecter l'équilibre sacré de notre royaume."
            </p>
          </motion.div>
        </header>

        {/* Le Codex (Contenu) */}
        <section className="relative mb-32">
          <div className="absolute inset-0 bg-gold/[0.02] blur-3xl rounded-full pointer-events-none" />
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="glass-night border border-gold/10 p-1 md:p-12 relative z-10"
          >
            <Accordion type="single" collapsible className="w-full space-y-6">
              {sections.map((section) => (
                <AccordionItem 
                  key={section.id} 
                  value={section.id}
                  className="border-b border-gold/5 last:border-none group"
                >
                  <AccordionTrigger className="hover:no-underline py-10 px-8 transition-all">
                    <div className="flex items-center gap-8 text-left">
                      <div className="w-14 h-14 rounded-full border border-gold/10 flex items-center justify-center bg-gold/[0.03] group-hover:border-gold/40 transition-all duration-700">
                        <section.icon className="w-5 h-5 text-gold/40 group-hover:text-gold transition-colors" />
                      </div>
                      <div>
                        <span className="text-[9px] text-gold/40 font-bold uppercase tracking-[0.5em] mb-2 block">{section.rank}</span>
                        <h3 className="text-3xl font-headline text-white group-hover:text-glow-gold transition-all duration-500 uppercase">
                          {section.title}
                        </h3>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-12 px-12 md:pl-32">
                    <div className="space-y-8 max-w-2xl">
                      {section.rules.map((rule, i) => (
                        <div key={i} className="flex gap-6 items-start group/rule">
                          <div className="mt-2 w-1.5 h-1.5 rounded-full bg-gold/20 group-hover/rule:bg-gold transition-colors shrink-0" />
                          <p className="text-silver/50 text-lg leading-relaxed italic font-light group-hover/rule:text-silver/80 transition-colors">
                            {rule}
                          </p>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </section>

        {/* Section Engagement */}
        <section className="text-center mb-24">
          <div className="h-16 w-[1px] bg-gradient-to-b from-gold/40 to-transparent mx-auto mb-12" />
          <motion.div
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.95 }}
            className="inline-block p-10 border border-gold/10 bg-black/40 backdrop-blur-md"
          >
            <History className="w-6 h-6 text-gold/20 mx-auto mb-6" />
            <p className="text-silver/40 text-xs uppercase tracking-[0.4em] mb-8 font-bold">
              En rejoignant l'aventure Outland, vous signez ce pacte éternel
            </p>
            <button 
              onClick={() => window.history.back()}
              className="px-16 py-4 border border-gold/20 text-gold text-[10px] font-bold uppercase tracking-[0.6em] hover:bg-gold hover:text-night transition-all duration-700 shadow-2xl"
            >
              Retourner au Trône
            </button>
          </motion.div>
        </section>

        <footer className="mt-auto h-24 flex items-center justify-center relative z-20">
          <span className="shine-text text-[9px] tracking-[0.8em] uppercase font-bold">
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
