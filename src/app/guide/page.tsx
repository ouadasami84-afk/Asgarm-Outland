"use client"

import React, { useRef } from 'react'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'

const institutions = [
  {
    name: "Académie d'Asgarm",
    focus: "Pôle Éducatif & Disciplinaire",
    desc: "Le centre névralgique du savoir et de la rigueur académique.",
    roles: [
      { rank: "Direction", title: "Directeur et Adjoint", function: "Haute Autorité" },
      { rank: "Corps Enseignant", title: "Professeurs", function: "Pédagogie" },
      { rank: "Surveillant Général", title: "Discipline", function: "Ordre" },
      { rank: "Élève", title: "Apprenti", function: "Apprentissage" }
    ]
  },
  {
    name: "Conclave des Arcanes",
    focus: "Justice & Législation",
    desc: "L'institution suprême garantissant l'équilibre des lois.",
    roles: [
      { rank: "Grand Sorcier", title: "Législation", function: "Souveraineté Légale" },
      { rank: "Maître Sorcier", title: "Administration", function: "Gestion du Royaume" },
      { rank: "Protecteur des Arcanes", title: "Force Publique", function: "Application du Codex" }
    ]
  },
  {
    name: "Conclave des Ombres",
    focus: "Ordre Occulte",
    desc: "Le bras armé et secret régissant les courants interdits.",
    roles: [
      { rank: "Grand Sorcier des Ombres", title: "Souveraineté", function: "Maîtrise du Vide" },
      { rank: "Maître des Ténèbres", title: "Commandement", function: "Stratégie Occulte" },
      { rank: "Protecteur des Ombres", title: "Assassinat", function: "Exécution des Volontés" }
    ]
  },
  {
    name: "Royauté d'Asgarm",
    focus: "Souveraineté Territoriale",
    desc: "Le sommet de la hiérarchie nobiliaire et politique.",
    roles: [
      { rank: "Le Monarque", title: "Roi ou Reine", function: "Souveraineté Absolue" },
      { rank: "Conseiller du Trône", title: "Influence", function: "Éminence Grise" }
    ]
  },
  {
    name: "Clans et Créatures",
    focus: "Structures Sociales Sauvages",
    desc: "Les forces brutes et ancestrales des territoires extérieurs.",
    roles: [
      { rank: "Chef de Clan / Alpha", title: "Leadership", function: "Commandement Tribal" },
      { rank: "Chaman du Clan", title: "Sagesse", function: "Lien Éthéré" }
    ]
  },
  {
    name: "Économie et Services",
    focus: "Pôle Social & Commercial",
    desc: "Le moteur vital de la vie quotidienne et du patrimoine.",
    roles: [
      { rank: "Agent Immobilier", title: "Patrimoine", function: "Gestion Foncière" },
      { rank: "Journaliste", title: "Information", function: "Chroniqueur" },
      { rank: "Tavernier", title: "Commerce", function: "Lien Social" }
    ]
  }
]

function InstitutionCard({ inst, index }: { inst: typeof institutions[0], index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
      className="relative mb-40 group"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Label & Title Section */}
        <div className={`lg:col-span-5 ${index % 2 !== 0 ? 'lg:order-last lg:text-right' : 'lg:text-left'}`}>
          <motion.span 
            className="text-gold/40 text-[10px] tracking-[0.6em] uppercase font-bold block mb-4"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
          >
            {inst.focus}
          </motion.span>
          <h2 className="text-5xl md:text-7xl font-headline text-white mb-8 group-hover:text-glow-gold transition-all duration-700 uppercase tracking-tighter">
            {inst.name.split(' ')[0]} <br /> 
            <span className="text-gold italic font-light">{inst.name.split(' ').slice(1).join(' ')}</span>
          </h2>
          <p className="text-silver/40 italic text-xl font-light leading-relaxed max-w-md">
            "{inst.desc}"
          </p>
        </div>

        {/* Roles Grid Section */}
        <div className="lg:col-span-7">
          <div className="glass-night p-12 border-gold/10 hover:border-gold/30 transition-all duration-700 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 blur-3xl rounded-full -mr-16 -mt-16" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {inst.roles.map((role, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + (i * 0.1) }}
                  className="relative"
                >
                  <div className="flex flex-col gap-2">
                    <span className="text-[9px] text-gold/60 uppercase tracking-[0.4em] font-bold">{role.rank}</span>
                    <h3 className="text-2xl text-white font-headline tracking-tight">{role.title}</h3>
                    <div className="h-[1px] w-8 bg-gold/20 my-2" />
                    <span className="text-silver/30 text-[10px] uppercase tracking-[0.2em] italic font-medium">{role.function}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
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
            className="mb-12"
          >
            <div className="flex items-center justify-center gap-6 mb-8">
              <div className="h-[1px] w-16 bg-gold/30" />
              <span className="text-gold text-[10px] tracking-[0.8em] uppercase font-bold text-glow-gold">Protocoles d'Immersion</span>
              <div className="h-[1px] w-16 bg-gold/30" />
            </div>
            <h1 className="text-7xl md:text-9xl font-headline mb-8 text-glow-gold uppercase tracking-tighter leading-none">
              GUIDE <br /> <span className="text-gold italic font-light">ARRIVANT</span>
            </h1>
            <p className="text-silver/40 max-w-2xl mx-auto italic text-xl leading-relaxed font-light">
              "Chaque destinée sur Asgarm est une architecture de pouvoir. <br /> Découvrez votre rôle au sein de l'élite."
            </p>
          </motion.div>
          
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2"
          >
            <div className="w-[1px] h-16 bg-gradient-to-b from-gold/60 to-transparent" />
          </motion.div>
        </motion.div>
      </section>

      {/* Main Content Sections */}
      <div className="relative z-10 px-8 max-w-7xl mx-auto pb-48">
        {institutions.map((inst, index) => (
          <InstitutionCard key={inst.name} inst={inst} index={index} />
        ))}

        {/* Technical Mastery Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-64 pt-32 border-t border-gold/10 text-center"
        >
          <div className="max-w-4xl mx-auto">
            <span className="text-gold/60 text-[10px] tracking-[0.5em] uppercase font-bold block mb-12">Certification d'Exclusivité technique</span>
            <h3 className="text-4xl md:text-6xl font-headline text-white mb-12 leading-tight uppercase tracking-tight">
              Des Mécaniques <br /> <span className="text-gold italic font-light">Forfées pour l'Élite</span>
            </h3>
            <p className="text-silver/50 text-xl italic leading-relaxed font-light mb-16 px-8">
              "Chaque métier, chaque grade et chaque interaction bénéficie de scripts exclusifs développés par nos ingénieurs. Que vous soyez Enseignant à l'Académie ou Souverain du Trône, vos capacités ont été modélisées pour une immersion d'élite unique sur Asgarm."
            </p>
            <div className="flex flex-col items-center gap-8">
              <div className="h-24 w-[1px] bg-gradient-to-b from-gold/40 to-transparent" />
              <div className="text-center">
                <span className="font-headline text-2xl text-gold tracking-[0.4em] uppercase block mb-2 text-glow-gold">OUTLAND STUDIOS</span>
                <span className="text-[9px] text-gold/40 tracking-[0.6em] uppercase font-bold">L'Ingénierie de l'Imaginaire</span>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
      
      <Footer />
    </main>
  )
}
