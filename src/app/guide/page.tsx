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
      { rank: "Direction", title: "Directeur et Adjoint", function: "Haute Autorité", task: "Supervision globale de l'enseignement et garant de l'éthique académique." },
      { rank: "Corps Enseignant", title: "Professeurs", function: "Pédagogie", task: "Transmission des arts arcaniques et évaluation des progrès des disciples." },
      { rank: "Surveillant Général", title: "Discipline", function: "Ordre", task: "Maintenir la paix et le respect des protocoles au sein de l'établissement." },
      { rank: "Élève", title: "Apprenti", function: "Apprentissage", task: "Immersion dans les savoirs anciens pour s'élever au rang de maître." }
    ]
  },
  {
    name: "Conclave des Arcanes",
    focus: "Justice & Législation",
    desc: "L'institution suprême garantissant l'équilibre et l'application stricte des lois du royaume.",
    roles: [
      { rank: "Grand Sorcier", title: "Législation", function: "Souveraineté Légale", task: "Élaboration des décrets royaux et arbitrage des conflits majeurs." },
      { rank: "Maître Sorcier", title: "Administration", function: "Gestion du Royaume", task: "Coordination administrative et exécution des volontés du Grand Sorcier." },
      { rank: "Protecteur des Arcanes", title: "Force Publique", function: "Application du Codex", task: "Maintien de l'ordre public et exécution des sentences judiciaires." }
    ]
  },
  {
    name: "Conclave des Ombres",
    focus: "Ordre Occulte",
    desc: "Le bras armé et secret régissant les courants interdits et les opérations de l'ombre.",
    roles: [
      { rank: "Grand Sorcier des Ombres", title: "Souveraineté", function: "Maîtrise du Vide", task: "Contrôle des flux d'énergie occulte et direction des stratégies secrètes." },
      { rank: "Maître des Ténèbres", title: "Commandement", function: "Stratégie Occulte", task: "Gestion des agents et coordination des rituels de l'ombre." },
      { rank: "Protecteur des Ombres", title: "Assassinat", function: "Exécution des Volontés", task: "Élimination silencieuse des menaces et protection des secrets d'Asgarm." }
    ]
  },
  {
    name: "Royauté d'Asgarm",
    focus: "Souveraineté Territoriale",
    desc: "Le sommet de la hiérarchie nobiliaire et politique, incarnant l'unité de la nation.",
    roles: [
      { rank: "Le Monarque", title: "Roi ou Reine", function: "Souveraineté Absolue", task: "Chef suprême de l'État, décisionnaire final de la destinée d'Asgarm." },
      { rank: "Conseiller du Trône", title: "Influence", function: "Éminence Grise", task: "Conseil stratégique et gestion diplomatique des intérêts de la couronne." }
    ]
  },
  {
    name: "Clans et Créatures",
    focus: "Structures Sociales Sauvages",
    desc: "Les forces ancestrales et brutes régissant les territoires extérieurs et les peuples tribaux.",
    roles: [
      { rank: "Chef de Clan / Alpha", title: "Leadership", function: "Commandement Tribal", task: "Protection du territoire et direction des forces guerrières du clan." },
      { rank: "Chaman du Clan", title: "Sagesse", function: "Lien Éthéré", task: "Lien spirituel entre le peuple et les forces naturelles d'Asgarm." }
    ]
  },
  {
    name: "Économie et Services",
    focus: "Pôle Social & Commercial",
    desc: "Le moteur vital assurant la pérennité financière et le lien social entre les citoyens.",
    roles: [
      { rank: "Agent Immobilier", title: "Patrimoine", function: "Gestion Foncière", task: "Administration des domaines royaux et transactions immobilières d'élite." },
      { rank: "Journaliste", title: "Information", function: "Chroniqueur", task: "Diffusion des actualités et archivage des événements majeurs du royaume." },
      { rank: "Tavernier", title: "Commerce", function: "Lien Social", task: "Gestion des lieux d'échange et animation de la vie quotidienne citoyenne." }
    ]
  }
]

function InstitutionCard({ inst, index }: { inst: typeof institutions[0], index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
      className="relative mb-64"
    >
      <div className="flex flex-col gap-16">
        {/* Header Institution */}
        <div className="max-w-4xl">
          <motion.span 
            className="text-gold/60 text-[10px] tracking-[0.6em] uppercase font-bold block mb-6"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
          >
            {inst.focus}
          </motion.span>
          <h2 className="text-6xl md:text-8xl font-headline text-white mb-8 uppercase tracking-tighter leading-none">
            {inst.name.split(' ')[0]} <br /> 
            <span className="text-gold italic font-light">{inst.name.split(' ').slice(1).join(' ')}</span>
          </h2>
          <div className="h-[1px] w-24 bg-gold/30 mb-8" />
          <p className="text-silver/40 italic text-2xl font-light leading-relaxed max-w-2xl">
            "{inst.desc}"
          </p>
        </div>

        {/* Roles Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {inst.roles.map((role, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.6 + (i * 0.1) }}
              className="glass-night p-12 border border-gold/10 hover:border-gold/30 transition-all duration-700"
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="text-[9px] text-gold uppercase tracking-[0.4em] font-bold">{role.rank}</span>
                  <span className="text-silver/20 text-[9px] uppercase tracking-[0.2em] font-medium">{role.function}</span>
                </div>
                <h3 className="text-3xl text-white font-headline tracking-tight">{role.title}</h3>
                <p className="text-silver/50 text-sm leading-relaxed font-light italic mt-4 border-l border-gold/20 pl-6">
                  {role.task}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function GuidePage() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  return (
    <main className="relative min-h-screen bg-transparent" ref={containerRef}>
      <Navigation />
      
      {/* Cinematic Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden px-8">
        <motion.div
          style={{ opacity: useTransform(scrollYProgress, [0, 0.2], [1, 0]) }}
          className="text-center z-10"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <div className="flex items-center justify-center gap-6 mb-12">
              <div className="h-[1px] w-20 bg-gold/40" />
              <span className="text-gold text-[10px] tracking-[0.8em] uppercase font-bold text-glow-gold">Protocoles d'Immersion</span>
              <div className="h-[1px] w-20 bg-gold/40" />
            </div>
            <h1 className="text-8xl md:text-[12rem] font-headline mb-12 text-glow-gold uppercase tracking-tighter leading-none">
              GUIDE <br /> <span className="text-gold italic font-light">ARRIVANT</span>
            </h1>
            <p className="text-silver/40 max-w-3xl mx-auto italic text-2xl leading-relaxed font-light">
              "Chaque destinée sur Asgarm est une architecture de pouvoir. <br /> Ce codex définit les piliers de votre future ascension au sein de l'élite."
            </p>
          </motion.div>
          
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2"
          >
            <div className="w-[1px] h-24 bg-gradient-to-b from-gold/60 to-transparent" />
          </motion.div>
        </motion.div>
      </section>

      {/* Main Content Sections */}
      <div className="relative z-10 px-8 max-w-7xl mx-auto pb-48">
        <div className="mb-48 text-center border-b border-gold/5 pb-24">
          <h2 className="text-4xl font-headline text-white mb-6 uppercase tracking-[0.2em]">Architecture du Royaume</h2>
          <p className="text-silver/30 max-w-xl mx-auto italic">Explorez les structures institutionnelles qui composent l'équilibre d'Asgarm.</p>
        </div>

        {institutions.map((inst, index) => (
          <InstitutionCard key={inst.name} inst={inst} index={index} />
        ))}

        {/* Technical Mastery Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-64 pt-48 border-t border-gold/10 text-center"
        >
          <div className="max-w-5xl mx-auto">
            <span className="text-gold/60 text-[10px] tracking-[0.5em] uppercase font-bold block mb-12">Certification d'Exclusivité Technique</span>
            <h3 className="text-5xl md:text-8xl font-headline text-white mb-12 leading-none uppercase tracking-tight">
              Des Mécaniques <br /> <span className="text-gold italic font-light">Forfées pour l'Élite</span>
            </h3>
            <p className="text-silver/50 text-2xl italic leading-relaxed font-light mb-20 px-8">
              "L'expérience Outland ne repose sur aucun système tiers. Chaque métier, chaque grade et chaque interaction bénéficie de scripts 100% propriétaires développés par nos ingénieurs et modélisateurs. Votre immersion est notre seule priorité technique."
            </p>
            <div className="flex flex-col items-center gap-12">
              <div className="h-32 w-[1px] bg-gradient-to-b from-gold/60 to-transparent" />
              <div className="text-center">
                <span className="font-headline text-3xl text-gold tracking-[0.5em] uppercase block mb-3 text-glow-gold">OUTLAND STUDIOS</span>
                <span className="text-[10px] text-gold/40 tracking-[0.8em] uppercase font-bold">L'Ingénierie de l'Imaginaire</span>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
      
      <Footer />
    </main>
  )
}
