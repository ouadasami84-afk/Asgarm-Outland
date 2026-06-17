
"use client"

import React, { useRef } from 'react'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'

const institutions = [
  {
    name: "Académie d'Asgarm",
    focus: "Pôle Éducatif & Disciplinaire",
    desc: "Le centre névralgique du savoir et de la rigueur académique du royaume.",
    roles: [
      { rank: "Direction", title: "Directeur et Adjoint", function: "Haute Autorité", task: "Supervision globale de l'enseignement." },
      { rank: "Enseignants", title: "Professeurs", function: "Pédagogie", task: "Transmission des arts arcaniques." },
      { rank: "Surveillant", title: "Prévôt Général", function: "Discipline", task: "Maintenir la paix et le respect." },
      { rank: "Élève", title: "Apprenti", function: "Apprentissage", task: "Immersion dans les savoirs anciens." }
    ]
  },
  {
    name: "Conclave des Arcanes",
    focus: "Justice & Législation",
    desc: "L'institution suprême garantissant l'équilibre des lois du royaume.",
    roles: [
      { rank: "Grand Sorcier", title: "Législation", function: "Souveraineté Légale", task: "Élaboration des décrets royaux." },
      { rank: "Maître Sorcier", title: "Administration", function: "Gestion du Royaume", task: "Coordination administrative." },
      { rank: "Protecteur", title: "Garde des Arcanes", function: "Force Publique", task: "Maintien de l'ordre public." }
    ]
  },
  {
    name: "Conclave des Ombres",
    focus: "Ordre Occulte",
    desc: "Le bras armé et secret régissant les courants interdits d'Asgarm.",
    roles: [
      { rank: "Grand Maître", title: "Sorcier des Ombres", function: "Souveraineté", task: "Direction des stratégies secrètes." },
      { rank: "Commandeur", title: "Maître des Ténèbres", function: "Stratégie Occulte", task: "Gestion des agents de l'ombre." },
      { rank: "Exécuteur", title: "Protecteur des Ombres", function: "Assassinat", task: "Élimination silencieuse des menaces." }
    ]
  },
  {
    name: "Royauté d'Asgarm",
    focus: "Souveraineté Territoriale",
    desc: "Le sommet de la hiérarchie nobiliaire incarnant l'unité de la nation.",
    roles: [
      { rank: "Le Monarque", title: "Roi ou Reine", function: "Souveraineté Absolue", task: "Décisionnaire final de la destinée d'Asgarm." },
      { rank: "L'Éminence", title: "Conseiller du Trône", function: "Influence", task: "Conseil stratégique et diplomatique." }
    ]
  },
  {
    name: "Clans et Créatures",
    focus: "Structures Sauvages",
    desc: "Les forces ancestrales régissant les territoires extérieurs.",
    roles: [
      { rank: "Chef / Alpha", title: "Chef de Clan", function: "Leadership", task: "Protection du territoire et direction." },
      { rank: "Savant", title: "Chaman du Clan", function: "Sagesse", task: "Lien spirituel avec les forces naturelles." }
    ]
  },
  {
    name: "Économie et Services",
    focus: "Pôle Social & Commercial",
    desc: "Le moteur vital assurant le lien social entre les citoyens.",
    roles: [
      { rank: "Patrimoine", title: "Agent Immobilier", function: "Gestion Foncière", task: "Administration des domaines royaux." },
      { rank: "Information", title: "Journaliste", function: "Chroniqueur", task: "Diffusion des actualités du royaume." },
      { rank: "Social", title: "Tavernier", function: "Commerce", task: "Gestion des lieux d'échange." }
    ]
  }
]

function InstitutionCard({ inst }: { inst: typeof institutions[0] }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className="glass-night p-8 border border-gold/10 hover:border-gold/30 transition-all duration-700 flex flex-col gap-8 h-full"
    >
      <div>
        <span className="text-gold/60 text-[9px] tracking-[0.4em] uppercase font-bold block mb-4">{inst.focus}</span>
        <h2 className="text-3xl font-headline text-white mb-4 uppercase tracking-tight">{inst.name}</h2>
        <p className="text-silver/40 italic text-sm font-light leading-relaxed">"{inst.desc}"</p>
      </div>

      <div className="grid grid-cols-1 gap-4 mt-auto">
        {inst.roles.map((role, i) => (
          <div key={i} className="border-l border-gold/10 pl-4 py-1">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[8px] text-gold uppercase tracking-[0.2em] font-bold">{role.rank}</span>
              <span className="text-silver/20 text-[8px] uppercase tracking-[0.1em]">{role.function}</span>
            </div>
            <h3 className="text-base text-white/90 font-headline leading-tight">{role.title}</h3>
            <p className="text-silver/40 text-[10px] italic leading-tight mt-1">{role.task}</p>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default function GuidePage() {
  return (
    <main className="relative min-h-screen bg-transparent">
      <Navigation />
      
      {/* Cinematic Compact Hero */}
      <section className="relative pt-48 pb-16 px-8 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-[1px] w-12 bg-gold/40" />
            <span className="text-gold text-[10px] tracking-[0.8em] uppercase font-bold text-glow-gold">Protocoles d'Arrivée</span>
            <div className="h-[1px] w-12 bg-gold/40" />
          </div>
          <h1 className="text-6xl md:text-8xl font-headline mb-8 text-glow-gold uppercase tracking-tighter leading-none">
            GUIDE <span className="text-gold italic font-light">ARRIVANT</span>
          </h1>
          <p className="text-silver/40 max-w-2xl mx-auto italic text-lg leading-relaxed font-light">
            "Le Codex d'Asgarm définit votre place dans l'élite. Choisissez votre voie avec discernement."
          </p>
        </motion.div>
      </section>

      {/* Grid Content - Reduced Scroll */}
      <div className="relative z-10 px-8 max-w-7xl mx-auto pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
          {institutions.map((inst) => (
            <InstitutionCard key={inst.name} inst={inst} />
          ))}
        </div>

        {/* Technical Certification - Compact */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="pt-24 border-t border-gold/10 text-center"
        >
          <div className="max-w-4xl mx-auto">
            <span className="text-gold/60 text-[9px] tracking-[0.4em] uppercase font-bold block mb-8">Maîtrise Technique Outland</span>
            <h3 className="text-3xl md:text-5xl font-headline text-white mb-8 uppercase tracking-tight">
              Ingénierie de l'Imaginaire
            </h3>
            <p className="text-silver/50 text-lg italic leading-relaxed font-light mb-16">
              "L'expérience Outland repose sur des systèmes 100% propriétaires développés par nos ingénieurs. Chaque grade et interaction est le fruit d'une modélisation exclusive pour garantir une immersion sans compromis."
            </p>
            <div className="flex flex-col items-center gap-8">
              <div className="h-16 w-[1px] bg-gradient-to-b from-gold/60 to-transparent" />
              <div className="text-center">
                <span className="font-headline text-2xl text-gold tracking-[0.4em] uppercase block mb-2 text-glow-gold">OUTLAND STUDIOS</span>
                <span className="text-[8px] text-gold/40 tracking-[0.6em] uppercase font-bold">La Signature de l'Excellence</span>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
      
      <Footer />
    </main>
  )
}
