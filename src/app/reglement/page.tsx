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
  EyeOff
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
    rules: [
      "Le respect mutuel est le pilier d'Asgarm. Aucune insulte, discrimination ou harcèlement ne sera toléré.",
      "L'usurpation d'identité, que ce soit d'un membre du staff ou d'un autre joueur, est strictement interdite.",
      "Le respect de la vie privée des autres membres est primordial. Ne diffusez jamais d'informations personnelles (doxxing)."
    ]
  },
  {
    id: "gameplay",
    title: "Gameplay et Équité",
    icon: Sword,
    rules: [
      "L'utilisation de logiciels tiers, cheats, ou macros offrant un avantage déloyal est passible d'un bannissement définitif.",
      "L'exploitation de bugs (glitchs) doit être signalée immédiatement au staff. En profiter est considéré comme une triche.",
      "Le 'Griefing' massif ou la destruction gratuite de l'expérience de jeu des autres joueurs est réglementé selon les zones de la map."
    ]
  },
  {
    id: "comm",
    title: "Communication et Médias",
    icon: MessageCircle,
    rules: [
      "Le spam et le flood dans les canaux de discussion sont interdits pour préserver la clarté des échanges.",
      "La publicité pour d'autres serveurs ou services externes non partenaires est prohibée.",
      "Les contenus à caractère pornographique, violent ou choquant sont strictement interdits dans tous nos espaces."
    ]
  },
  {
    id: "moderation",
    title: "Justice et Sanctions",
    icon: Scale,
    rules: [
      "Les décisions du staff sont finales. En cas de désaccord, une procédure d'appel est disponible sur le Discord officiel.",
      "Le contournement de sanction (via double compte) entraînera une exclusion permanente de tous nos services.",
      "Chaque joueur est responsable de la sécurité de son compte. Aucun remboursement ne sera effectué suite à un piratage personnel."
    ]
  }
]

export default function ReglementPage() {
  return (
    <main className="relative min-h-screen bg-transparent">
      <Navigation />
      
      <div className="relative z-10 pt-48 pb-32 px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="text-center mb-24"
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 border border-gold/20 bg-gold/5 mb-8">
              <ShieldAlert className="w-4 h-4 text-gold" />
              <span className="text-[10px] font-bold text-gold uppercase tracking-[0.5em]">Codex Officiel</span>
            </div>
            <h1 className="text-6xl font-headline mb-8 text-glow-gold uppercase tracking-tighter">Charte d'Asgarm</h1>
            <p className="text-silver/40 max-w-xl mx-auto italic text-lg leading-relaxed">
              "Que ces lois soient gravées dans l'éther. Nul ne peut prétendre régner sur Outland sans respecter l'équilibre d'Asgarm."
            </p>
          </motion.div>

          {/* Content */}
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 0.3 }}
            className="glass-night p-12 border border-gold/10"
          >
            <Accordion type="single" collapsible className="w-full space-y-4">
              {sections.map((section, index) => (
                <AccordionItem 
                  key={section.id} 
                  value={section.id}
                  className="border-b border-gold/5 last:border-none"
                >
                  <AccordionTrigger className="hover:no-underline group py-8">
                    <div className="flex items-center gap-6 text-left">
                      <div className="w-12 h-12 rounded-full border border-gold/10 flex items-center justify-center bg-gold/5 group-hover:border-gold/40 transition-all">
                        <section.icon className="w-5 h-5 text-gold/60 group-hover:text-gold" />
                      </div>
                      <div>
                        <h3 className="font-headline text-2xl text-white group-hover:text-gold transition-colors">
                          {section.title}
                        </h3>
                        <p className="text-[10px] text-silver/30 uppercase tracking-[0.2em] mt-1">Section {index + 1}</p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-10 pl-[72px]">
                    <div className="space-y-6">
                      {section.rules.map((rule, i) => (
                        <div key={i} className="flex gap-4 items-start">
                          <div className="mt-2 w-1.5 h-1.5 rounded-full bg-gold/30 shrink-0" />
                          <p className="text-silver/60 text-base leading-relaxed italic font-light">
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

          {/* Bottom Call to Action */}
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 0.6 }}
            className="mt-16 text-center"
          >
            <div className="flex items-center justify-center gap-4 mb-8 text-silver/20">
              <div className="h-[1px] w-12 bg-current" />
              <ScrollText className="w-4 h-4" />
              <div className="h-[1px] w-12 bg-current" />
            </div>
            <p className="text-[10px] text-silver/40 uppercase tracking-[0.4em] mb-10">
              En rejoignant Outland, vous acceptez l'intégralité de cette charte.
            </p>
            <button 
              onClick={() => window.history.back()}
              className="px-12 py-4 border border-gold/20 text-gold text-[10px] font-bold uppercase tracking-[0.4em] hover:bg-gold hover:text-night transition-all"
            >
              Retourner au Royaume
            </button>
          </motion.div>
        </div>
      </div>
      
      <Footer />
    </main>
  )
}
