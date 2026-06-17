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
      { title: "Directeur & Adjoint", rank: "DIRECTION", function: "Gouvernance de l'institution et validation des cursus arcaniques." },
      { title: "Professeurs", rank: "ENSEIGNEMENT", function: "Transmission du savoir technique et évaluation des aptitudes magiques." },
      { title: "Surveillant Général", rank: "DISCIPLINE", function: "Maintien de l'ordre interne et application du règlement scolaire." },
      { title: "Élève (Apprenti)", rank: "IMMERSION", function: "Apprentissage des mécaniques et progression dans la hiérarchie." }
    ]
  },
  {
    name: "Conclave des Arcanes",
    focus: "JUSTICE & LÉGISLATION",
    roles: [
      { title: "Grand Sorcier", rank: "SOUVERAINETÉ", function: "Rédaction des lois du royaume et arbitrage des conflits majeurs." },
      { title: "Maître Sorcier", rank: "ADMINISTRATION", function: "Gestion des ressources territoriales et coordination civile." },
      { title: "Protecteur des Arcanes", rank: "SÉCURITÉ", function: "Application de la loi et patrouilles de maintien de la paix." }
    ]
  },
  {
    name: "Conclave des Ombres",
    focus: "ORDRE OCCULTE",
    roles: [
      { title: "Grand Sorcier des Ombres", rank: "SOUVERAINETÉ", function: "Commandement des opérations clandestines et influence politique." },
      { title: "Maître des Ténèbres", rank: "STRATÉGIE", function: "Planification des tactiques occultes et gestion du renseignement." },
      { title: "Protecteur des Ombres", rank: "EXÉCUTION", function: "Protection des secrets du Conclave et interventions chirurgicales." }
    ]
  },
  {
    name: "Royauté d'Asgarm",
    focus: "SOUVERAINETÉ SUPRÊME",
    roles: [
      { title: "Le Monarque", rank: "AUTORITÉ", function: "Décision finale sur l'avenir du royaume et diplomatie d'élite." },
      { title: "Conseiller du Trône", rank: "INFLUENCE", function: "Conseil stratégique et gestion de l'étiquette royale." }
    ]
  },
  {
    name: "Clans et Créatures",
    focus: "STRUCTURES SAUVAGES",
    roles: [
      { title: "Chef de Clan / Alpha", rank: "LEADERSHIP", function: "Protection du territoire et commandement des meutes/clans." },
      { title: "Chaman du Clan", rank: "SAGESSE", function: "Lien avec l'éther et préservation des traditions ancestrales." }
    ]
  },
  {
    name: "Économie et Services",
    focus: "PÔLE SOCIAL & COMMERCIAL",
    roles: [
      { title: "Agent Immobilier", rank: "PATRIMOINE", function: "Gestion du foncier et transaction des propriétés de luxe." },
      { title: "Journaliste", rank: "INFORMATION", function: "Chronique des événements et diffusion de la vérité d'Asgarm." },
      { title: "Tavernier", rank: "COMMERCE", function: "Gestion des lieux de vie et distribution des ressources de bouche." }
    ]
  }
]

export default function GuidePage() {
  return (
    <main className="relative min-h-screen bg-[#010208]">
      <Navigation />
      
      <section className="relative pt-40 pb-12 px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-6 mb-6">
              <div className="h-[1px] w-24 bg-gradient-to-r from-transparent to-gold/40" />
              <span className="text-gold text-[10px] tracking-[0.8em] uppercase font-bold text-glow-gold">Codex de Destination</span>
              <div className="h-[1px] w-24 bg-gradient-to-l from-transparent to-gold/40" />
            </div>
            <h1 className="text-5xl md:text-7xl font-headline mb-4 text-white uppercase tracking-tighter leading-none">
              GUIDE <span className="text-gold italic font-light">ARRIVANT</span>
            </h1>
            <p className="text-silver/40 max-w-2xl mx-auto italic text-lg font-light leading-relaxed">
              "Définissez votre impact. Chaque rôle est une clé maîtresse de l'ingénierie sociale d'Asgarm."
            </p>
          </motion.div>
        </div>
      </section>

      <div className="relative z-10 px-8 max-w-7xl mx-auto pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {institutions.map((inst, idx) => (
            <motion.div
              key={inst.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              className="group glass-night border border-gold/10 p-8 hover:border-gold/30 transition-all duration-500"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-gold/60 text-[8px] tracking-[0.4em] uppercase font-bold">{inst.focus}</span>
                <div className="h-[1px] flex-1 bg-gold/10 ml-4" />
              </div>
              <h2 className="text-2xl font-headline text-white mb-8 uppercase tracking-tight group-hover:text-gold transition-colors">{inst.name}</h2>
              
              <div className="space-y-8">
                {inst.roles.map((role, i) => (
                  <div key={i} className="relative group/role">
                    <div className="flex items-baseline gap-3 mb-1">
                      <span className="text-[7px] text-gold/40 uppercase tracking-[0.2em] font-bold">{role.rank}</span>
                      <h3 className="text-sm text-white font-headline tracking-wide uppercase">{role.title}</h3>
                    </div>
                    <p className="text-silver/40 text-[10px] leading-relaxed italic border-l border-gold/10 pl-4 py-1">
                      {role.function}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

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
              "Chaque poste bénéficie de mécaniques de jeu exclusives développées par nos ingénieurs. Votre immersion est notre priorité absolue."
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
