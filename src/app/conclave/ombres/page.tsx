
"use client"

import React from 'react'
import { Navigation } from '@/components/Navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'

const roles = [
  {
    title: "GRAND SORCIER DES OMBRES",
    rank: "SOUVERAINETÉ OCCULTE",
    desc: "Maître absolu des réseaux clandestins et gardien des secrets d'État du Seigneur du Mal. Il manipule l'influence pour assurer la pérennité de l'ombre.",
    responsibilities: ["Renseignement Suprême", "Gestion des Ombres", "Influence Géopolitique"]
  },
  {
    title: "MAÎTRE DES TÉNÈBRES",
    rank: "COMMANDEMENT TACTIQUE",
    desc: "Stratège des opérations d'infiltration. Il enseigne les arts interdits de la magie noire aux nouveaux sorciers et coordonne les agents de l'ombre.",
    responsibilities: ["Planification Clandestine", "Enseignement Noir", "Logistique Occulte"]
  },
  {
    title: "CONSEILLER OBSCUR",
    rank: "INFLUENCE & SECRETS",
    desc: "Architecte de la manipulation politique. Il tisse les toiles de pouvoir dans l'ombre pour asseoir la domination du Royaume du Mal.",
    responsibilities: ["Manipulation Politique", "Archives Secrètes", "Tissage d'Influence"]
  },
  {
    title: "PROTECTEUR DES OMBRES",
    rank: "EXÉCUTEUR D'ÉLITE",
    desc: "Le bras armé invisible. Spécialiste de la neutralisation des menaces arcaniques avant qu'elles ne parviennent à entraver nos lois de l'ombre.",
    responsibilities: ["Neutralisation de Cibles", "Sabotage Tactique", "Infiltration"]
  },
  {
    title: "GARDIEN DES OMBRES",
    rank: "VEILLEUR DU SANG",
    desc: "Protecteur des artefacts de sang et des rituels occultes. Il veille à ce que nul ne puisse profaner les sources de notre puissance.",
    responsibilities: ["Garde des Reliques", "Protection des Rituels", "Sécurité du Royaume"]
  }
]

export default function OmbresPage() {
  return (
    <main className="relative min-h-screen flex flex-col bg-transparent overflow-hidden">
      <Navigation />
      
      <div className="relative z-10 flex-1 flex flex-col pt-32 px-12 pb-12 max-w-7xl mx-auto w-full">
        
        <header className="mb-20">
          <Link href="/conclave" className="inline-flex items-center gap-2 text-red-600/40 hover:text-red-600 transition-colors mb-8 group">
            <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-[10px] font-bold uppercase tracking-[0.4em]">Retour au Conclave</span>
          </Link>
          
          <div className="flex flex-col">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-[1px] w-12 bg-red-600/30" />
              <span className="text-red-600 text-[10px] tracking-[1.2em] uppercase font-bold text-glow-red">L'Ordre du Seigneur du Mal</span>
            </div>
            <h1 className="text-8xl font-headline text-white uppercase tracking-tighter leading-none mb-8 text-glow-red">
              Conclave des <br /> <span className="text-red-600 italic font-light">Ombres</span>
            </h1>
            <p className="text-silver/50 text-xl italic font-light max-w-3xl leading-relaxed border-l border-red-600/20 pl-8">
              "Le Conclave des Ombres appartient au Royaume du Mal. Fondé après la Grande Guerre par deux Seigneurs du Mal sous le nom de sorciers de l'ombre, ils ont créé ce royaume ainsi que l'école de magie noire Obscura. Nous appliquons nos propres lois, souvent en confrontation directe avec les Arcanes. Nous jugeons, arrêtons et créons de nouvelles lois, tout en enseignant les arts interdits de l'ombre et du sang. Notre devise : la magie reste de la magie, et chacun a le droit d'utiliser la magie noire et la magie du sang."
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
              className="group p-10 bg-red-950/20 border border-red-600/10 hover:border-red-500/30 hover:bg-red-950/30 transition-all duration-700 flex flex-col shadow-2xl"
            >
              <span className="text-[9px] text-red-600/60 font-bold uppercase tracking-[0.4em] mb-4">{role.rank}</span>
              <h3 className="text-2xl font-headline text-white uppercase mb-6 group-hover:text-red-600 transition-all leading-tight">{role.title}</h3>
              <div className="h-[1px] w-full bg-red-600/10 mb-8" />
              <p className="text-silver/40 text-sm leading-relaxed italic mb-10 flex-1">
                {role.desc}
              </p>
              <div className="space-y-3">
                {role.responsibilities.map((resp, j) => (
                  <div key={j} className="flex items-center gap-3">
                    <div className="w-1 h-1 bg-red-600/30 rounded-full" />
                    <span className="text-[10px] text-red-600/40 uppercase tracking-widest">{resp}</span>
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
        .text-glow-red {
          text-shadow: 0 0 15px rgba(220, 38, 38, 0.4);
        }
      `}</style>
    </main>
  )
}
