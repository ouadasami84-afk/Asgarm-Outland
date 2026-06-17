
"use client"

import React from 'react'
import { Navigation } from '@/components/Navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ChevronLeft, GraduationCap, Users, BookOpen, ShieldCheck } from 'lucide-react'

const houses = [
  {
    name: "Maison Roselya",
    trait: "LA GRÂCE",
    desc: "Pour ceux dont l'esprit est pur et la volonté élégante. Ils excellent dans les sorts de protection et de cohésion.",
    color: "from-pink-400 to-rose-600"
  },
  {
    name: "Maison Verdantis",
    trait: "L'HARMONIE",
    desc: "Le refuge des gardiens de l'équilibre naturel. Ils maîtrisent les flux de l'Ether à travers la croissance et la vie.",
    color: "from-emerald-400 to-green-600"
  },
  {
    name: "Maison Tenebris",
    trait: "LA PERSPICACITÉ",
    desc: "Ceux qui explorent les profondeurs du savoir. Leurs études sur le bleu nuit de l'éther révèlent les secrets du cosmos.",
    color: "from-indigo-600 to-blue-900"
  },
  {
    name: "Maison Ruberis",
    trait: "LA PASSION",
    desc: "Le berceau des esprits ardents. Ils incarnent la force vitale et la détermination nécessaire pour forger le destin.",
    color: "from-red-500 to-red-800"
  }
]

export default function AscarniaPage() {
  return (
    <main className="relative min-h-screen flex flex-col bg-transparent overflow-hidden">
      <Navigation />
      
      <div className="relative z-10 flex-1 flex flex-col pt-32 px-12 pb-12 max-w-7xl mx-auto w-full">
        
        <header className="mb-20">
          <Link href="/academie" className="inline-flex items-center gap-2 text-sky-400/40 hover:text-sky-400 transition-colors mb-8 group">
            <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-[10px] font-bold uppercase tracking-[0.4em]">Retour à l'Académie</span>
          </Link>
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="flex flex-col">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-[1px] w-12 bg-sky-500/40" />
                <span className="text-sky-400 text-[10px] tracking-[1.2em] uppercase font-bold text-glow-blue">Institution Royale d'Asgarm</span>
              </div>
              <h1 className="text-8xl font-headline text-white uppercase tracking-tighter leading-none mb-4">
                Académie <br /> <span className="text-sky-400 italic font-light">Ascarnia</span>
              </h1>
              <p className="text-silver/50 text-xl italic font-light max-w-2xl leading-relaxed">
                "Forger l'excellence, protéger l'équilibre. Le cursus suprême de la magie arcanique fondé par les Rois."
              </p>
            </div>

            <div className="flex gap-8 mb-4">
              <div className="text-center">
                <span className="block text-sky-400 text-3xl font-headline mb-1">8</span>
                <span className="text-[8px] text-silver/40 uppercase tracking-widest font-bold">Années d'Étude</span>
              </div>
              <div className="h-12 w-[1px] bg-white/5" />
              <div className="text-center">
                <span className="block text-sky-400 text-3xl font-headline mb-1">18+</span>
                <span className="text-[8px] text-silver/40 uppercase tracking-widest font-bold">Âge Requis</span>
              </div>
            </div>
          </div>
        </header>

        {/* Section Admissions */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <div className="p-8 bg-sky-950/10 border border-sky-500/10 flex flex-col items-center text-center">
            <GraduationCap className="w-8 h-8 text-sky-400 mb-6" />
            <h3 className="text-lg text-white font-headline uppercase mb-4">Excellence Académique</h3>
            <p className="text-silver/40 text-xs leading-relaxed italic">
              Un cursus rigoureux de 100 sorts fondamentaux arcaniques, validé par le Conclave.
            </p>
          </div>
          <div className="p-8 bg-sky-950/10 border border-sky-500/10 flex flex-col items-center text-center">
            <ShieldCheck className="w-8 h-8 text-sky-400 mb-6" />
            <h3 className="text-lg text-white font-headline uppercase mb-4">Héritage des Rois</h3>
            <p className="text-silver/40 text-xs leading-relaxed italic">
              Fondée après la Grande Guerre pour protéger le monde des sorciers contre toute déviance.
            </p>
          </div>
          <div className="p-8 bg-sky-950/10 border border-sky-500/10 flex flex-col items-center text-center">
            <BookOpen className="w-8 h-8 text-sky-400 mb-6" />
            <h3 className="text-lg text-white font-headline uppercase mb-4">Équilibre d'Asgarm</h3>
            <p className="text-silver/40 text-xs leading-relaxed italic">
              Un savoir millénaire transmis par les plus grands maîtres sorciers pour préserver la paix.
            </p>
          </div>
        </section>

        {/* Section Maisons */}
        <section className="mb-24">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-4xl font-headline text-white uppercase tracking-tight">Les Quatre Maisons Ancestrales</h2>
            <div className="flex-1 h-[1px] bg-sky-500/10" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {houses.map((house, i) => (
              <motion.div
                key={house.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group relative p-8 bg-black/40 border border-sky-500/5 hover:border-sky-400/30 transition-all duration-700 overflow-hidden"
              >
                <div className={`absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r ${house.color} opacity-30 group-hover:opacity-100 transition-opacity`} />
                <span className="text-[8px] text-sky-400/60 font-bold uppercase tracking-[0.4em] mb-4 block">{house.trait}</span>
                <h4 className="text-2xl font-headline text-white uppercase mb-6 group-hover:text-sky-400 transition-colors">{house.name}</h4>
                <p className="text-silver/40 text-[10px] leading-relaxed italic mb-8">
                  {house.desc}
                </p>
                <div className="flex items-center gap-2">
                  <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${house.color}`} />
                  <span className="text-[8px] text-sky-400/40 uppercase tracking-widest font-bold">Héritage de {house.name.replace('Maison ', '')}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <footer className="mt-auto h-24 flex flex-col items-center justify-center relative z-20">
          <div className="h-[1px] w-24 bg-sky-500/20 mb-6" />
          <span className="shine-text-blue text-[9px] tracking-[0.8em] uppercase font-bold">
            CONCLAVE SUPRÊME — ÉQUILIBRE D'ASGARM V3.1
          </span>
        </footer>
      </div>

      <style jsx global>{`
        .text-glow-blue {
          text-shadow: 0 0 15px rgba(14, 165, 233, 0.4);
        }
        .shine-text-blue {
          background: linear-gradient(90deg, #0ea5e9, #ffffff, #0ea5e9);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shine 6s linear infinite;
          display: inline-block;
        }
      `}</style>
    </main>
  )
}
