
"use client"

import React from 'react'
import { Navigation } from '@/components/Navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'

const roles = [
  {
    title: "Haut Éminence",
    rank: "Souveraineté Occulte",
    desc: "Maître absolu des réseaux clandestins et gardien des secrets d'État. Il manipule l'influence politique pour assurer la pérennité d'Asgarm.",
    responsibilities: ["Renseignement Suprême", "Gestion des Ombres", "Influence Géopolitique"]
  },
  {
    title: "Maître Silencieux",
    rank: "Commandement Tactique",
    desc: "Stratège des opérations d'infiltration. Il coordonne les agents sur le terrain et assure le silence absolu des directives royales.",
    responsibilities: ["Planification Clandestine", "Sécurité des Flux", "Logistique Occulte"]
  },
  {
    title: "Lame d'Asgarm",
    rank: "Exécuteur d'Élite",
    desc: "Le bras armé invisible. Spécialiste du sabotage et de la neutralisation des menaces sensibles avant qu'elles ne parviennent à la lumière.",
    responsibilities: ["Infiltration", "Neutralisation de Cibles", "Sabotage Tactique"]
  }
]

export default function OmbresPage() {
  return (
    <main className="relative min-h-screen flex flex-col bg-background overflow-hidden">
      <Navigation />
      
      {/* Ambiance Visuelle Occulte */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-indigo-950/30 blur-[180px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-900/10 blur-[150px] rounded-full" />
      </div>

      <div className="relative z-10 flex-1 flex flex-col pt-32 px-12 pb-12 max-w-7xl mx-auto w-full">
        
        {/* En-tête de Faction */}
        <header className="mb-20">
          <Link href="/conclave" className="inline-flex items-center gap-2 text-indigo-400/40 hover:text-indigo-400 transition-colors mb-8 group">
            <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-[10px] font-bold uppercase tracking-[0.4em]">Retour au Conclave</span>
          </Link>
          
          <div className="flex flex-col">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-[1px] w-12 bg-indigo-500/30" />
              <span className="text-indigo-400 text-[10px] tracking-[1.2em] uppercase font-bold">L'Ordre du Secret</span>
            </div>
            <h1 className="text-8xl font-headline text-white uppercase tracking-tighter leading-none mb-8 shadow-[0_0_30px_rgba(255,255,255,0.05)]">
              Conclave des <br /> <span className="text-indigo-400 italic font-light">Ombres</span>
            </h1>
            <p className="text-silver/50 text-xl italic font-light max-w-3xl leading-relaxed border-l border-indigo-500/20 pl-8">
              "Le silence est notre plus grande arme. Le Conclave des Ombres opère dans les recoins oubliés d'Asgarm, protégeant le royaume des menaces que la lumière ne peut voir."
            </p>
          </div>
        </header>

        {/* Grille des Grades Professionnelle */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {roles.map((role, i) => (
            <motion.div
              key={role.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group p-10 bg-indigo-950/20 border border-indigo-500/10 hover:border-indigo-400/30 hover:bg-indigo-950/30 transition-all duration-700 flex flex-col"
            >
              <span className="text-[9px] text-indigo-400/60 font-bold uppercase tracking-[0.4em] mb-4">{role.rank}</span>
              <h3 className="text-3xl font-headline text-white uppercase mb-6 group-hover:text-indigo-400 transition-all">{role.title}</h3>
              <div className="h-[1px] w-full bg-indigo-500/10 mb-8" />
              <p className="text-silver/40 text-sm leading-relaxed italic mb-10 flex-1">
                {role.desc}
              </p>
              <div className="space-y-3">
                {role.responsibilities.map((resp, j) => (
                  <div key={j} className="flex items-center gap-3">
                    <div className="w-1 h-1 bg-indigo-500/30 rounded-full" />
                    <span className="text-[10px] text-indigo-400/40 uppercase tracking-widest">{resp}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </section>

        {/* Charte de Faction */}
        <div className="mt-auto p-12 border border-indigo-500/5 bg-indigo-950/10 text-center mb-8">
          <p className="text-[9px] text-indigo-400/30 uppercase tracking-[1em] font-bold">
            — LE SALUT DANS L'OBSCURITÉ —
          </p>
        </div>

        <footer className="h-12 border-t border-indigo-500/5 flex items-center justify-center bg-black/60 relative z-20">
          <span className="shine-text text-[9px] tracking-[0.8em] uppercase font-bold">
            CONCLAVE SUPRÊME — ÉQUILIBRE D'ASGARM V3.1
          </span>
        </footer>
      </div>
    </main>
  )
}
