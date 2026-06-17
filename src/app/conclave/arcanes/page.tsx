
"use client"

import React from 'react'
import { Navigation } from '@/components/Navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'

const roles = [
  {
    title: "GRAND SORCIER DU CONCLAVE",
    rank: "HAUTE MAGISTRATURE",
    desc: "Architecte suprême du Code Législatif Régalien. Il possède le pouvoir d'arbitrage final sur les contentieux territoriaux et constitutionnels majeurs d'Asgarm.",
    responsibilities: ["Arbitrage Suprême", "Validation des Traités", "Garde des Sceaux"]
  },
  {
    title: "MAÎTRE SORCIER DU CONCLAVE",
    rank: "ARCHITECTURE CIVILE",
    desc: "Gérant de l'infrastructure administrative globale. Il coordonne les services publics et assure la fluidité des ressources éthérées du royaume.",
    responsibilities: ["Gestion Foncière", "Coordination des Services", "Logistique Royale"]
  },
  {
    title: "CONSEILLER DU CONCLAVE",
    rank: "DIPLOMATIE ROYALE",
    desc: "Expert en médiation et stratégie légale. Il assure la liaison entre les différents royaumes et veille à la pérennité des alliances sacrées.",
    responsibilities: ["Médiation Inter-Royaumes", "Conseil Stratégique", "Audit des Lois"]
  },
  {
    title: "PROTECTEUR DU CONCLAVE",
    rank: "ORDRE PUBLIC",
    desc: "Garant de l'application stricte du droit. Il incarne la puissance répressive légitime du trône et assure la neutralisation des mages déviants.",
    responsibilities: ["Maintien de l'Ordre", "Exécution Légale", "Sécurité Citoyenne"]
  },
  {
    title: "GARDIEN DU CONCLAVE",
    rank: "VIGILANCE ARCANIQUE",
    desc: "Sentinelle des frontières éthérées. Il surveille les flux de magie et prévient toute infiltration d'énergie occulte ou de magie du sang.",
    responsibilities: ["Surveillance de l'Ether", "Patrouille de Frontière", "Interdiction Occulte"]
  }
]

export default function ArcanesPage() {
  return (
    <main className="relative min-h-screen flex flex-col bg-transparent overflow-hidden">
      <Navigation />
      
      <div className="relative z-10 flex-1 flex flex-col pt-32 px-12 pb-12 max-w-7xl mx-auto w-full">
        
        <header className="mb-20">
          <Link href="/conclave" className="inline-flex items-center gap-2 text-sky-400/40 hover:text-sky-400 transition-colors mb-8 group">
            <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-[10px] font-bold uppercase tracking-[0.4em]">Retour au Conclave</span>
          </Link>
          
          <div className="flex flex-col">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-[1px] w-12 bg-sky-500/40" />
              <span className="text-sky-400 text-[10px] tracking-[1.2em] uppercase font-bold text-glow-sky">L'Ordre de la Justice Magique</span>
            </div>
            <h1 className="text-8xl font-headline text-white uppercase tracking-tighter leading-none mb-8">
              <span className="shine-text-blue">Conclave des</span> <br /> <span className="shine-text-blue italic font-light">Arcanes</span>
            </h1>
            <p className="text-silver/50 text-xl italic font-light max-w-3xl leading-relaxed border-l border-sky-500/20 pl-8">
              "Le Conclave des Arcanes incarne la justice de la magie. Fondé après la Grande Guerre par le rassemblement des Rois, il a pour mission de protéger le monde des sorciers d'Asgarm. Nous créons les lois qui régissent l'éther, jugeons, emprisonnons, enquêtons et arrêtons les sorciers déviants pour protéger les citoyens de la magie noire et de la magie du sang. Notre serment est absolu : seule la magie arcanique est autorisée dans le monde d'Asgarm."
            </p>
          </div>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {roles.map((role, i) => (
            <motion.div
              key={role.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group p-10 bg-white/[0.03] border border-sky-500/10 hover:border-sky-400/30 hover:bg-white/[0.05] transition-all duration-700 flex flex-col shadow-2xl"
            >
              <span className="text-[9px] text-sky-500/60 font-bold uppercase tracking-[0.4em] mb-4">{role.rank}</span>
              <h3 className="text-2xl font-headline text-white uppercase mb-6 group-hover:text-glow-sky transition-all leading-tight">{role.title}</h3>
              <div className="h-[1px] w-full bg-sky-500/10 mb-8" />
              <p className="text-silver/40 text-sm leading-relaxed italic mb-10 flex-1">
                {role.desc}
              </p>
              <div className="space-y-3">
                {role.responsibilities.map((resp, j) => (
                  <div key={j} className="flex items-center gap-3">
                    <div className="w-1 h-1 bg-sky-500/30 rounded-full" />
                    <span className="text-[10px] text-sky-400/40 uppercase tracking-widest">{resp}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </section>

        <footer className="mt-auto h-24 flex items-center justify-center relative z-20">
          <span className="shine-text text-[9px] tracking-[0.8em] uppercase font-bold">
            CONCLAVE SUPRÊME — ÉQUILIBRE D'ASGARM V3.1
          </span>
        </footer>
      </div>
      <style jsx global>{`
        .text-glow-sky {
          text-shadow: 0 0 15px rgba(14, 165, 233, 0.4);
        }
      `}</style>
    </main>
  )
}
