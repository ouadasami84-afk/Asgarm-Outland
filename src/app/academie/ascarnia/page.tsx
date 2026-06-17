
"use client"

import React from 'react'
import { Navigation } from '@/components/Navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'

const houses = [
  {
    name: "Maison Roselya",
    trait: "LA GRÂCE",
    desc: "Pour ceux dont l'esprit est pur et la volonté élégante. Ils excellent dans les sorts de protection et de cohésion.",
    color: "from-yellow-400 to-amber-500"
  },
  {
    name: "Maison Verdantis",
    trait: "L'HARMONIE",
    desc: "Le refuge des gardiens de l'équilibre naturel. Ils maîtrisent les flux de l'Ether à travers la croissance et la vie.",
    color: "from-emerald-500 to-green-600"
  },
  {
    name: "Maison Tenebris",
    trait: "LA PERSPICACITÉ",
    desc: "Ceux qui explorent les profondeurs du savoir. Leurs études sur le bleu nuit de l'éther révèlent les secrets du cosmos.",
    color: "from-indigo-900 to-blue-900"
  },
  {
    name: "Maison Ruberis",
    trait: "LA PASSION",
    desc: "Le berceau des esprits ardents. Ils incarnent la force vitale et la détermination nécessaire pour forger le destin.",
    color: "from-red-600 to-red-900"
  }
]

const academicGrades = [
  {
    title: "DIRECTEUR D’ASGARM",
    desc: "Souveraineté totale sur l'institution. Gestion du corps enseignant, validation des accréditations et arbitrage final des sanctions disciplinaires majeures.",
    rank: "HAUTE AUTORITÉ"
  },
  {
    title: "DIRECTEUR ADJOINT",
    desc: "Bras droit du directeur, chargé de la coordination opérationnelle, de la gestion des examens et de la supervision administrative quotidienne.",
    rank: "COMMANDEMENT"
  },
  {
    title: "PROFESSEUR CONTRE LA MAGIE NOIRE",
    desc: "Expert en arts défensifs. Enseignement des boucliers, des contre-sorts et de la détection des influences occultes malveillantes.",
    rank: "DÉFENSE"
  },
  {
    title: "PROFESSEUR DE CRÉATURES MAGIQUES",
    desc: "Maître du bestiaire d'Asgarm. Étude des écosystèmes, dressage des entités sauvages et sécurité lors des expéditions en zones reculées.",
    rank: "BESTIAIRE"
  },
  {
    title: "PROFESSEUR DE SORTILÈGES",
    desc: "Théoricien et praticien des enchantements. Certification des paliers de puissance magique et enseignement des formules fondamentales de l'Ether.",
    rank: "CHARMES"
  },
  {
    title: "PROFESSEUR D’ALCHIMIE / BOTANIQUE",
    desc: "Expert en pharmacopée. Synthèse de potions complexes, étude des propriétés végétales et gestion des serres royales de l'académie.",
    rank: "PHARMACOPÉE"
  },
  {
    title: "PROFESSEUR DE DIVINATION",
    desc: "Explorateur des flux du temps. Guidance des élèves dans la compréhension des signes, des présages et de la lecture des lignes de l'Ether.",
    rank: "PRÉSAGES"
  },
  {
    title: "PROFESSEUR DE VOL",
    desc: "Maître de l'aéronautique magique. Enseignement du pilotage de balais et de montures, et surveillance de l'espace aérien de l'institution.",
    rank: "AÉRONAUTIQUE"
  },
  {
    title: "PROFESSEUR HISTOIRE DE LA MAGIE",
    desc: "Gardien des archives. Étude des traités anciens, des généalogies royales et de l'évolution des lois arcaniques à travers les âges.",
    rank: "ARCHIVES"
  },
  {
    title: "PROFESSEUR DE MORPHOLOGIE",
    desc: "Spécialiste de la transformation. Maîtrise de la théorie du corps magique et enseignement des métamorphoses physiques et structurelles.",
    rank: "TRANSFORMATION"
  },
  {
    title: "PROFESSEUR ASTROLOGIE",
    desc: "Lecteur du cosmos. Étude des constellations, des cycles stellaires et de leur influence directe sur les flux de mana du royaume.",
    rank: "COSMOS"
  },
  {
    title: "SURVEILLANT ASGARM",
    desc: "Garant de la discipline et de la sécurité des couloirs. Application immédiate des sanctions et maintien de la paix académique lors des rondes nocturnes.",
    rank: "ORDRE"
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
              <p className="text-silver/50 text-xl italic font-light max-w-2xl leading-relaxed border-l border-sky-500/20 pl-8">
                "Forger l'excellence, protéger l'équilibre. Le cursus suprême de la magie arcanique fondé par les Rois après la Grande Guerre."
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
                className="group relative p-10 bg-black/40 border border-sky-500/5 hover:border-sky-400/30 transition-all duration-700 overflow-hidden"
              >
                <div className={`absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r ${house.color} opacity-30 group-hover:opacity-100 transition-opacity`} />
                <span className="text-[8px] text-sky-400/60 font-bold uppercase tracking-[0.4em] mb-4 block">{house.trait}</span>
                <h4 className="text-2xl font-headline text-white uppercase mb-6 group-hover:text-sky-400 transition-colors">{house.name}</h4>
                <p className="text-silver/40 text-[10px] leading-relaxed italic mb-8 font-light">
                  {house.desc}
                </p>
                <div className="flex items-center gap-2">
                  <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${house.color}`} />
                  <span className="text-[8px] text-sky-400/40 uppercase tracking-widest font-bold">Héritage d'Asgarm</span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Section Hiérarchie */}
        <section className="mb-24">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-4xl font-headline text-white uppercase tracking-tight">Hiérarchie Académique</h2>
            <div className="flex-1 h-[1px] bg-sky-500/10" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {academicGrades.map((grade, i) => (
              <motion.div
                key={grade.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="group p-10 bg-white/[0.03] border border-sky-500/10 hover:border-sky-400/30 hover:bg-white/[0.05] transition-all duration-700 flex flex-col shadow-2xl"
              >
                <span className="text-[9px] text-sky-500/60 font-bold uppercase tracking-[0.4em] mb-4">{grade.rank}</span>
                <h3 className="text-xl font-headline text-white uppercase mb-6 group-hover:text-sky-400 transition-all leading-tight">{grade.title}</h3>
                <div className="h-[1px] w-full bg-sky-500/10 mb-8" />
                <p className="text-silver/40 text-[11px] leading-relaxed italic mb-4 flex-1 font-light">
                  {grade.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        <footer className="mt-auto h-24 flex flex-col items-center justify-center relative z-20">
          <div className="h-[1px] w-24 bg-sky-500/20 mb-6" />
          <span className="shine-text text-[9px] tracking-[0.8em] uppercase font-bold">
            CONCLAVE SUPRÊME — ÉQUILIBRE D'ASGARM V3.1
          </span>
        </footer>
      </div>

      <style jsx global>{`
        .text-glow-blue {
          text-shadow: 0 0 15px rgba(14, 165, 233, 0.4);
        }
      `}</style>
    </main>
  )
}
