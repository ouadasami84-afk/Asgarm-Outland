
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
    desc: "Maître absolu des réseaux clandestins et gardien des secrets d'État du Seigneur du Mal. Il manipule l'influence pour assurer la pérennité de l'ombre.",
    responsibilities: ["Renseignement Suprême", "Gestion des Ombres", "Influence Géopolitique"]
  },
  {
    title: "Maître Silencieux",
    rank: "Commandement Tactique",
    desc: "Stratège des opérations d'infiltration. Il enseigne les arts interdits aux nouveaux sorciers et coordonne les agents de l'ombre.",
    responsibilities: ["Planification Clandestine", "Enseignement Noir", "Logistique Occulte"]
  },
  {
    title: "Lame d'Asgarm",
    rank: "Exécuteur d'Élite",
    desc: "Le bras armé invisible. Spécialiste de la neutralisation des menaces arcaniques avant qu'elles ne parviennent à entraver nos lois.",
    responsibilities: ["Infiltration", "Neutralisation de Cibles", "Sabotage Tactique"]
  }
]

export default function OmbresPage() {
  return (
    <main className="relative min-h-screen flex flex-col bg-transparent overflow-hidden">
      <Navigation />
      
      <div className="relative z-10 flex-1 flex flex-col pt-32 px-12 pb-12 max-w-7xl mx-auto w-full">
        
        <header className="mb-20">
          <Link href="/conclave" className="inline-flex items-center gap-2 text-indigo-400/40 hover:text-indigo-400 transition-colors mb-8 group">
            <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-[10px] font-bold uppercase tracking-[0.4em]">Retour au Conclave</span>
          </Link>
          
          <div className="flex flex-col">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-[1px] w-12 bg-indigo-500/30" />
              <span className="text-indigo-400 text-[10px] tracking-[1.2em] uppercase font-bold">L'Ordre du Seigneur du Mal</span>
            </div>
            <h1 className="text-8xl font-headline text-white uppercase tracking-tighter leading-none mb-8 shadow-[0_0_30px_rgba(255,255,255,0.05)]">
              Conclave des <br /> <span className="text-indigo-400 italic font-light">Ombres</span>
            </h1>
            <p className="text-silver/50 text-xl italic font-light max-w-3xl leading-relaxed border-l border-indigo-500/20 pl-8">
              "Le Conclave des Ombres appartient au Royaume du Mal. Fondé après la Grande Guerre par deux Seigneurs du Mal sous le nom de sorciers de l'ombre, ils ont créé ce royaume ainsi que l'école de magie noire Obscura. Nous appliquons nos propres lois, souvent en confrontation directe avec les Arcanes. Nous jugeons, arrêtons et créons de nouvelles lois, tout en enseignant les sorts du mal. Notre devise : la magie reste de la magie, et chacun a le droit d'utiliser la magie noire et la magie du sang."
            </p>
          </div>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {roles.map((role, i) => (
            <motion.div
              key={role.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group p-10 bg-indigo-950/20 border border-indigo-500/10 hover:border-indigo-400/30 hover:bg-indigo-950/30 transition-all duration-700 flex flex-col shadow-2xl"
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

        <footer className="mt-auto h-24 flex items-center justify-center relative z-20">
          <span className="shine-text text-[9px] tracking-[0.8em] uppercase font-bold">
            CONCLAVE SUPRÊME — ÉQUILIBRE D'ASGARM V3.1
          </span>
        </footer>
      </div>
    </main>
  )
}
