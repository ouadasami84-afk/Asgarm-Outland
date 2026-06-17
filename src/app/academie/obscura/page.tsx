
"use client"

import React from 'react'
import { Navigation } from '@/components/Navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'

const principles = [
  {
    title: "LIBERTÉ ABSOLUE",
    rank: "SOUVERAINETÉ",
    desc: "À Obscura, nous refusons les chaînes du Conclave. La magie noire et la magie du sang sont enseignées sans filtre pour ceux qui osent les maîtriser."
  },
  {
    title: "L'APPEL DU MAL",
    rank: "SÉLECTION",
    desc: "Nul ne s'inscrit à Obscura. Vous devez être remarqué par le Mal lui-même pour recevoir l'autorisation d'avoir un maître sorcier et apprendre nos secrets."
  },
  {
    title: "PUISSANCE DU SANG",
    rank: "ESSENCE",
    desc: "Maîtrisez l'essence vitale pour transcender les limites de la magie conventionnelle. Un savoir réservé aux élus du Royaume du Mal."
  },
  {
    title: "INITIATION OBSCORE",
    rank: "ARTS NOIRS",
    desc: "Un cursus de 40 sorts dévastateurs forgés par les Seigneurs du Mal. Seule la volonté de fer permet de survivre à cet apprentissage."
  }
]

export default function ObscuraPage() {
  return (
    <main className="relative min-h-screen flex flex-col bg-transparent overflow-hidden">
      <Navigation />
      
      <div className="relative z-10 flex-1 flex flex-col pt-32 px-12 pb-12 max-w-7xl mx-auto w-full">
        
        <header className="mb-20">
          <Link href="/academie" className="inline-flex items-center gap-2 text-red-600/40 hover:text-red-600 transition-colors mb-8 group">
            <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-[10px] font-bold uppercase tracking-[0.4em]">Retour à l'Académie</span>
          </Link>
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="flex flex-col">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-[1px] w-12 bg-red-600/40" />
                <span className="text-red-600 text-[10px] tracking-[1.2em] uppercase font-bold text-glow-red">Bastion du Royaume du Mal</span>
              </div>
              <h1 className="text-8xl font-headline text-white uppercase tracking-tighter leading-none mb-4">
                <span className="shine-text-red">Académie</span> <br /> <span className="shine-text-red italic font-light">Obscura</span>
              </h1>
              <p className="text-silver/50 text-xl italic font-light max-w-2xl leading-relaxed border-l border-red-600/20 pl-8">
                "La magie ne connaît pas de limites. Fondée par les deux Seigneurs du Mal pour libérer le véritable potentiel de l'ombre et du sang librement."
              </p>
            </div>

            <div className="flex gap-8 mb-4">
              <div className="text-center">
                <span className="block text-red-600 text-3xl font-headline mb-1">40</span>
                <span className="text-[8px] text-silver/40 uppercase tracking-widest font-bold">Sorts Interdits</span>
              </div>
              <div className="h-12 w-[1px] bg-white/5" />
              <div className="text-center">
                <span className="block text-red-600 text-3xl font-headline mb-1">Élite</span>
                <span className="text-[8px] text-silver/40 uppercase tracking-widest font-bold">Autorisation Spéciale</span>
              </div>
            </div>
          </div>
        </header>

        {/* Section Piliers */}
        <section className="mb-24">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-4xl font-headline text-white uppercase tracking-tight">Les Piliers de l'Ombre</h2>
            <div className="flex-1 h-[1px] bg-red-600/10" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {principles.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group p-10 bg-red-950/10 border border-red-500/10 hover:border-red-500/40 hover:bg-red-950/20 transition-all duration-700 flex flex-col shadow-2xl relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <span className="text-[9px] text-red-600/60 font-bold uppercase tracking-[0.4em] mb-4">{p.rank}</span>
                <h3 className="text-2xl font-headline text-white uppercase mb-6 group-hover:text-red-600 transition-all leading-tight">{p.title}</h3>
                <div className="h-[1px] w-full bg-red-600/10 mb-8" />
                <p className="text-silver/40 text-sm leading-relaxed italic mb-4 font-light relative z-10">
                  {p.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Section Lore Fondation */}
        <section className="mb-24 p-12 bg-black/60 border border-red-900/20 relative">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-red-600/40 to-transparent" />
          <h2 className="text-3xl font-headline text-white uppercase mb-8 pb-4 text-center">L'Héritage des Seigneurs du Mal</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <p className="text-silver/50 text-lg italic leading-relaxed font-light border-l border-red-600/20 pl-8">
              Après la Grande Guerre, les deux Seigneurs du Mal ont décidé de créer cette école pour que les sorciers puissent apprendre la magie noire et du sang librement, sans le joug restrictif du Conclave des Arcanes.
            </p>
            <p className="text-silver/50 text-lg italic leading-relaxed font-light border-l border-red-600/20 pl-8">
              Ici, 40 sorts d'une puissance dévastatrice attendent les élus. Ce n'est pas une simple éducation, c'est une ascension vers la souveraineté occulte, loin des lois conventionnelles d'Asgarm.
            </p>
          </div>
        </section>

        <footer className="mt-auto h-24 flex flex-col items-center justify-center relative z-20">
          <div className="h-[1px] w-24 bg-red-600/20 mb-6" />
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
