
"use client"

import React from 'react'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { motion } from 'framer-motion'

const institutions = [
  {
    name: "Académie d'Asgarm",
    focus: "PÔLE ÉDUCATIF & DISCIPLINAIRE",
    roles: [
      { rank: "Direction", title: "Directeur & Adjoint", function: "Haute Autorité" },
      { rank: "Enseignants", title: "Professeurs", function: "Pédagogie Arcanique" },
      { rank: "Discipline", title: "Surveillant Général", function: "Maintien de l'Ordre" },
      { rank: "Apprentissage", title: "Élève (Apprenti)", function: "Immersion Savoir" }
    ]
  },
  {
    name: "Conclave des Arcanes",
    focus: "JUSTICE & LÉGISLATION",
    roles: [
      { rank: "Souveraineté", title: "Grand Sorcier", function: "Législation Royale" },
      { rank: "Administration", title: "Maître Sorcier", function: "Gestion du Royaume" },
      { rank: "Force Publique", title: "Protecteur des Arcanes", function: "Sécurité Civile" }
    ]
  },
  {
    name: "Conclave des Ombres",
    focus: "ORDRE OCCULTE",
    roles: [
      { rank: "Souveraineté", title: "Grand Sorcier des Ombres", function: "Commandement" },
      { rank: "Stratégie", title: "Maître des Ténèbres", function: "Tactiques Occultes" },
      { rank: "Exécution", title: "Protecteur des Ombres", function: "Assassinat Discret" }
    ]
  },
  {
    name: "Royauté d'Asgarm",
    focus: "SOUVERAINETÉ SUPRÊME",
    roles: [
      { rank: "Le Monarque", title: "Roi ou Reine", function: "Autorité Absolue" },
      { rank: "Influence", title: "Conseiller du Trône", function: "Conseil Stratégique" }
    ]
  },
  {
    name: "Clans et Créatures",
    focus: "STRUCTURES SAUVAGES",
    roles: [
      { rank: "Leadership", title: "Chef de Clan / Alpha", function: "Protection Territoire" },
      { rank: "Sagesse", title: "Chaman du Clan", function: "Lien Spirituel" }
    ]
  },
  {
    name: "Économie et Services",
    focus: "PÔLE SOCIAL & COMMERCIAL",
    roles: [
      { rank: "Patrimoine", title: "Agent Immobilier", function: "Gestion Foncière" },
      { rank: "Information", title: "Journaliste", function: "Chroniqueur Royal" },
      { rank: "Commerce", title: "Tavernier", function: "Lien Social" }
    ]
  }
]

export default function GuidePage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }

  return (
    <main className="relative min-h-screen bg-[#010208]">
      <Navigation />
      
      {/* Header Compact & Imposant */}
      <section className="relative pt-40 pb-12 px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="flex items-center justify-center gap-6 mb-6">
              <div className="h-[1px] w-24 bg-gradient-to-r from-transparent to-gold/40" />
              <span className="text-gold text-[10px] tracking-[0.8em] uppercase font-bold text-glow-gold">Codex de Destination</span>
              <div className="h-[1px] w-24 bg-gradient-to-l from-transparent to-gold/40" />
            </div>
            <h1 className="text-6xl md:text-8xl font-headline mb-4 text-white uppercase tracking-tighter leading-none">
              GUIDE <span className="text-gold italic font-light">ARRIVANT</span>
            </h1>
            <p className="text-silver/40 max-w-2xl mx-auto italic text-lg font-light">
              "Votre place dans l'élite d'Asgarm commence ici. Définissez votre destinée."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Grille Tactique des Rôles */}
      <div className="relative z-10 px-8 max-w-7xl mx-auto pb-24">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {institutions.map((inst) => (
            <motion.div
              key={inst.name}
              variants={itemVariants}
              className="group relative glass-night border border-gold/10 p-8 hover:border-gold/30 transition-all duration-500 overflow-hidden"
            >
              {/* Effet de scan au survol */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gold/40 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              
              <span className="text-gold/60 text-[8px] tracking-[0.4em] uppercase font-bold block mb-4">{inst.focus}</span>
              <h2 className="text-2xl font-headline text-white mb-6 uppercase tracking-tight group-hover:text-gold transition-colors">{inst.name}</h2>
              
              <div className="space-y-6">
                {inst.roles.map((role, i) => (
                  <div key={i} className="relative pl-4 border-l border-gold/10">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[7px] text-gold/40 uppercase tracking-[0.2em] font-bold">{role.rank}</span>
                    </div>
                    <h3 className="text-base text-white font-headline leading-tight">{role.title}</h3>
                    <p className="text-silver/30 text-[9px] uppercase tracking-[0.1em] mt-1 italic">{role.function}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Certification Technique Compacte */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 pt-16 border-t border-gold/10 text-center"
        >
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-headline text-white mb-6 uppercase tracking-widest">
              L'EXCELLENCE <span className="text-gold">TECHNIQUE</span>
            </h3>
            <p className="text-silver/40 text-sm italic font-light leading-relaxed mb-12">
              "L'expérience Outland repose sur des systèmes 100% propriétaires développés par nos ingénieurs. Chaque rôle bénéficie de mécaniques exclusives."
            </p>
            <div className="flex flex-col items-center gap-4">
              <div className="h-12 w-[1px] bg-gradient-to-b from-gold/40 to-transparent" />
              <div className="text-center">
                <span className="font-headline text-xl text-gold tracking-[0.3em] uppercase block mb-1 text-glow-gold">OUTLAND STUDIOS</span>
                <span className="text-[7px] text-gold/30 tracking-[0.5em] uppercase font-bold">Certification Propriétaire Asgarm</span>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
      
      <Footer />
    </main>
  )
}
