"use client"

import React from 'react'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { motion } from 'framer-motion'

const institutions = [
  {
    name: "Académie d'Asgarm",
    focus: "Pôle Éducatif & Disciplinaire",
    roles: [
      { rank: "Direction", title: "Directeur et Adjoint", desc: "Haute Autorité du savoir." },
      { rank: "Corps Enseignant", title: "Professeurs", desc: "Pédagogie et transmission des arts." },
      { rank: "Surveillant Général", title: "Discipline", desc: "Garant de l'ordre académique." },
      { rank: "Élève", title: "Apprenti", desc: "Cycle d'apprentissage initial." }
    ]
  },
  {
    name: "Conclave des Arcanes",
    focus: "Justice & Législation Suprême",
    roles: [
      { rank: "Grand Sorcier", title: "Législation", desc: "Architecte des lois du royaume." },
      { rank: "Maître Sorcier", title: "Administration", desc: "Gestion des affaires courantes." },
      { rank: "Protecteur des Arcanes", title: "Force Publique", desc: "Application du Codex de justice." }
    ]
  },
  {
    name: "Conclave des Ombres",
    focus: "Ordre Occulte & Courants Interdits",
    roles: [
      { rank: "Grand Sorcier des Ombres", title: "Souveraineté", desc: "Maître des arcanes ténébreuses." },
      { rank: "Maître des Ténèbres", title: "Commandement", desc: "Stratège des opérations occultes." },
      { rank: "Protecteur des Ombres", title: "Assassinat", desc: "Exécuteur des volontés de l'ombre." }
    ]
  },
  {
    name: "Royauté d'Asgarm",
    focus: "Souveraineté & Territoires",
    roles: [
      { rank: "Le Monarque", title: "Roi ou Reine", desc: "Incarne la souveraineté d'Asgarm." },
      { rank: "Conseiller du Trône", title: "Influence", desc: "Éminence grise de la couronne." }
    ]
  },
  {
    name: "Clans et Créatures",
    focus: "Peuples Sauvages & Sagesse",
    roles: [
      { rank: "Chef de Clan / Alpha", title: "Leadership", desc: "Autorité tribale et force brute." },
      { rank: "Chaman du Clan", title: "Sagesse", desc: "Gardien des rituels et des esprits." }
    ]
  },
  {
    name: "Économie et Services",
    focus: "Commerce & Vie Sociale",
    roles: [
      { rank: "Agent Immobilier", title: "Patrimoine", desc: "Gestion des domaines et résidences." },
      { rank: "Journaliste", title: "Information", desc: "Chroniqueur des exploits d'Asgarm." },
      { rank: "Tavernier", title: "Commerce", desc: "Cœur battant de la vie sociale." }
    ]
  }
]

export default function GuidePage() {
  return (
    <main className="relative min-h-screen bg-transparent">
      <Navigation />
      
      <div className="relative z-10 pt-48 pb-32 px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-32"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-[1px] w-8 bg-gold/30" />
              <span className="text-gold text-[9px] tracking-[0.5em] uppercase font-bold text-glow-gold">Hiérarchie Officielle</span>
              <div className="h-[1px] w-8 bg-gold/30" />
            </div>
            <h1 className="text-6xl font-headline mb-8 text-glow-gold uppercase tracking-tighter leading-tight">
              Guide des Voies <br /> <span className="text-gold italic font-light">Sur Asgarm</span>
            </h1>
            <p className="text-silver/40 max-w-2xl mx-auto italic text-lg leading-relaxed font-light">
              "Chaque citoyen est une pièce maîtresse de l'architecture d'Outland. Choisissez votre destinée parmi les piliers du royaume."
            </p>
          </motion.div>

          {/* Institutions Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-32">
            {institutions.map((inst, i) => (
              <motion.div
                key={inst.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                className="glass-night p-12 border-gold/10 hover:border-gold/30 transition-all group"
              >
                <div className="mb-10">
                  <span className="text-gold/40 text-[9px] tracking-[0.4em] uppercase font-bold block mb-2">{inst.focus}</span>
                  <h2 className="text-4xl font-headline text-white group-hover:text-gold transition-colors">{inst.name}</h2>
                </div>

                <div className="space-y-8">
                  {inst.roles.map((role, j) => (
                    <div key={j} className="relative pl-8 border-l border-gold/10">
                      <div className="absolute left-0 top-0 w-[1px] h-4 bg-gold/40" />
                      <div className="flex flex-col gap-1">
                        <span className="text-[10px] text-gold/60 uppercase tracking-[0.2em] font-bold">{role.rank}</span>
                        <h3 className="text-lg text-white font-headline">{role.title}</h3>
                        <p className="text-silver/40 text-sm italic font-light leading-relaxed">"{role.desc}"</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Section Souveraineté */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center py-20 border-t border-gold/10"
          >
            <h3 className="text-gold text-[10px] tracking-[0.6em] uppercase font-bold mb-8">Ingénierie de Rôle</h3>
            <p className="text-white/80 text-xl italic leading-relaxed font-light mb-12">
              Chaque métier bénéficie de scripts exclusifs développés par nos ingénieurs. Que vous soyez Enseignant à l'Académie ou Souverain du Trône, vos capacités ont été modélisées pour une immersion d'élite unique sur Asgarm.
            </p>
            <div className="h-[1px] w-24 bg-gold/30 mx-auto" />
          </motion.div>

        </div>
      </div>
      
      <Footer />
    </main>
  )
}
