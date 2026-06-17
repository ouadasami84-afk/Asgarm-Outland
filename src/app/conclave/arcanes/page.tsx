
"use client"

import React from 'react'
import { Navigation } from '@/components/Navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'

const roles = [
  {
    title: "Grand Sorcier",
    rank: "Haut Magistrat",
    desc: "Architecte du Code Législatif Régalien. Il possède le pouvoir d'arbitrage final sur les contentieux territoriaux et constitutionnels.",
    responsibilities: ["Rédaction des Lois", "Arbitrage Suprême", "Validation des Traités"]
  },
  {
    title: "Maître Sorcier",
    rank: "Commandement Civil",
    desc: "Gérant de l'infrastructure administrative d'Asgarm. Il coordonne les services publics et assure la fluidité des ressources du royaume.",
    responsibilities: ["Gestion Foncière", "Coordination des Services", "Logistique Royale"]
  },
  {
    title: "Protecteur des Arcanes",
    rank: "Force de l'Ordre",
    desc: "Garant de la paix publique et de l'application stricte du droit. Il incarne la puissance répressive légitime du trône.",
    responsibilities: ["Maintien de l'Ordre", "Protection Citoyenne", "Exécution Légale"]
  }
]

export default function ArcanesPage() {
  return (
    <main className="relative min-h-screen flex flex-col bg-background overflow-hidden">
      <Navigation />
      
      {/* Ambiance Visuelle Arcanique */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gold/5 blur-[180px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-white/5 blur-[150px] rounded-full" />
      </div>

      <div className="relative z-10 flex-1 flex flex-col pt-32 px-12 pb-12 max-w-7xl mx-auto w-full">
        
        {/* En-tête de Faction */}
        <header className="mb-20">
          <Link href="/conclave" className="inline-flex items-center gap-2 text-gold/40 hover:text-gold transition-colors mb-8 group">
            <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-[10px] font-bold uppercase tracking-[0.4em]">Retour au Conclave</span>
          </Link>
          
          <div className="flex flex-col">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-[1px] w-12 bg-gold/40" />
              <span className="text-gold text-[10px] tracking-[1.2em] uppercase font-bold text-glow-gold">L'Ordre de la Lumière</span>
            </div>
            <h1 className="text-8xl font-headline text-white uppercase tracking-tighter leading-none mb-8 text-glow-gold">
              Conclave des <br /> <span className="text-gold italic font-light">Arcanes</span>
            </h1>
            <p className="text-silver/50 text-xl italic font-light max-w-3xl leading-relaxed border-l border-gold/20 pl-8">
              "L'ordre est le rempart contre le chaos. Le Conclave des Arcanes veille à ce que chaque acte dans Asgarm soit guidé par la justice et la discipline éternelle du trône."
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
              className="group p-10 bg-gold/[0.02] border border-gold/10 hover:border-gold/30 hover:bg-gold/[0.04] transition-all duration-700 flex flex-col"
            >
              <span className="text-[9px] text-gold/60 font-bold uppercase tracking-[0.4em] mb-4">{role.rank}</span>
              <h3 className="text-3xl font-headline text-white uppercase mb-6 group-hover:text-glow-gold transition-all">{role.title}</h3>
              <div className="h-[1px] w-full bg-gold/10 mb-8" />
              <p className="text-silver/40 text-sm leading-relaxed italic mb-10 flex-1">
                {role.desc}
              </p>
              <div className="space-y-3">
                {role.responsibilities.map((resp, j) => (
                  <div key={j} className="flex items-center gap-3">
                    <div className="w-1 h-1 bg-gold/30 rounded-full" />
                    <span className="text-[10px] text-gold/40 uppercase tracking-widest">{resp}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </section>

        {/* Charte de Faction */}
        <div className="mt-auto p-12 border border-gold/5 bg-white/[0.01] text-center">
          <p className="text-[9px] text-gold/30 uppercase tracking-[1em] font-bold">
            — L'ÉQUILIBRE PAR LA LOI —
          </p>
        </div>
      </div>
    </main>
  )
}
