
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
      { 
        title: "Direction (Directeur & Adjoint)", 
        rank: "HAUTE AUTORITÉ", 
        function: "Pilotage stratégique de l'institution, validation des cursus arcaniques et gestion des accréditations de haut niveau." 
      },
      { 
        title: "Corps Enseignant (Professeurs)", 
        rank: "PÉDAGOGIE", 
        function: "Conception pédagogique, transmission des savoirs complexes et évaluation technique des aptitudes magiques." 
      },
      { 
        title: "Surveillant Général", 
        rank: "DISCIPLINE", 
        function: "Garant de l'ordre intérieur, gestion disciplinaire et surveillance des périmètres scolaires sensibles." 
      },
      { 
        title: "Élève (Apprenti)", 
        rank: "IMMERSION", 
        function: "Apprentissage des mécaniques fondamentales et progression hiérarchique au sein de l'élite académique." 
      }
    ]
  },
  {
    name: "Conclave des Arcanes",
    focus: "JUSTICE & LÉGISLATION",
    roles: [
      { 
        title: "Grand Sorcier", 
        rank: "LÉGISLATION", 
        function: "Haute magistrature, rédaction du code législatif régalien et arbitrage des contentieux territoriaux majeurs." 
      },
      { 
        title: "Maître Sorcier", 
        rank: "ADMINISTRATION", 
        function: "Architecture administrative, gestion des ressources publiques et coordination des services civils du royaume." 
      },
      { 
        title: "Protecteur des Arcanes", 
        rank: "FORCE PUBLIQUE", 
        function: "Maintien de la paix, application du droit constitutionnel et protection des intérêts vitaux d'Asgarm." 
      }
    ]
  },
  {
    name: "Conclave des Ombres",
    focus: "ORDRE OCCULTE",
    roles: [
      { 
        title: "Grand Sorcier des Ombres", 
        rank: "SOUVERAINETÉ", 
        function: "Commandement des réseaux clandestins, influence politique occulte et gestion des secrets d'État les plus sensibles." 
      },
      { 
        title: "Maître des Ténèbres", 
        rank: "COMMANDEMENT", 
        function: "Stratégie asymétrique, planification des opérations spéciales et coordination du renseignement tactique." 
      },
      { 
        title: "Protecteur des Ombres", 
        rank: "ASSASSINAT & EXÉCUTION", 
        function: "Neutralisation chirurgicale, protection rapprochée des actifs sensibles et exécution des directives secrètes." 
      }
    ]
  },
  {
    name: "Royauté d'Asgarm",
    focus: "SOUVERAINETÉ SUPRÊME",
    roles: [
      { 
        title: "Le Monarque (Roi ou Reine)", 
        rank: "SOUVERAINETÉ", 
        function: "Prise de décision géopolitique, arbitrage final du Conseil et incarnation de l'identité nationale d'Asgarm." 
      },
      { 
        title: "Conseiller du Trône", 
        rank: "INFLUENCE", 
        function: "Expertise diplomatique, conseil en étiquette royale et gestion de l'influence auprès des hautes sphères." 
      }
    ]
  },
  {
    name: "Clans et Créatures",
    focus: "STRUCTURES SAUVAGES",
    roles: [
      { 
        title: "Chef de Clan / Alpha", 
        rank: "LEADERSHIP", 
        function: "Gestion territoriale des peuples sauvages, protection des meutes et commandement des forces tribales." 
      },
      { 
        title: "Chaman du Clan", 
        rank: "SAGESSE", 
        function: "Lien spirituel avec l'Ether, préservation des traditions ancestrales et médiation avec les forces occultes." 
      }
    ]
  },
  {
    name: "Économie et Services",
    focus: "PÔLE SOCIAL & COMMERCIAL",
    roles: [
      { 
        title: "Agent Immobilier", 
        rank: "PATRIMOINE", 
        function: "Expertise foncière, gestion des transactions de domaines de prestige et administration du patrimoine architectural." 
      },
      { 
        title: "Journaliste", 
        rank: "INFORMATION", 
        function: "Chroniqueur des événements régaliens, investigation sociale et diffusion de l'information certifiée d'Asgarm." 
      },
      { 
        title: "Tavernier", 
        rank: "COMMERCE", 
        function: "Logistique sociale, gestion des points de ralliement et administration des ressources de consommation." 
      }
    ]
  }
]

export default function GuidePage() {
  return (
    <main className="relative min-h-screen bg-transparent">
      <Navigation />
      
      {/* Header Compact et Pro */}
      <section className="relative pt-32 pb-8 px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-6 mb-4">
              <div className="h-[1px] w-12 bg-gold/30" />
              <span className="text-gold text-[9px] tracking-[0.8em] uppercase font-bold text-glow-gold">Codex Opérationnel</span>
              <div className="h-[1px] w-12 bg-gold/30" />
            </div>
            <h1 className="text-4xl md:text-6xl font-headline mb-4 text-white uppercase tracking-tighter leading-none">
              GUIDE <span className="text-gold italic font-light">ARRIVANT</span>
            </h1>
            <p className="text-silver/40 max-w-xl mx-auto italic text-sm font-light leading-relaxed">
              "Définissez votre trajectoire. Chaque rôle est un pilier de l'ingénierie sociale d'Asgarm."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Grid de Commandement (3 colonnes pour minimiser le scroll) */}
      <div className="relative z-10 px-8 max-w-[1400px] mx-auto pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {institutions.map((inst, idx) => (
            <motion.div
              key={inst.name}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.05, duration: 0.5 }}
              className="group glass-night border border-gold/10 p-6 hover:border-gold/30 transition-all duration-500"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="text-gold/60 text-[7px] tracking-[0.4em] uppercase font-bold">{inst.focus}</span>
                <div className="h-[1px] flex-1 bg-gold/10 ml-4" />
              </div>
              <h2 className="text-xl font-headline text-white mb-6 uppercase tracking-tight group-hover:text-gold transition-colors">{inst.name}</h2>
              
              <div className="space-y-6">
                {inst.roles.map((role, i) => (
                  <div key={i} className="relative group/role border-l border-gold/5 pl-4 py-1 hover:border-gold/20 transition-all">
                    <div className="flex flex-col gap-1 mb-2">
                      <span className="text-[6px] text-gold/40 uppercase tracking-[0.2em] font-bold">{role.rank}</span>
                      <h3 className="text-[11px] text-white font-headline tracking-wide uppercase group-hover/role:text-gold transition-colors">{role.title}</h3>
                    </div>
                    <p className="text-silver/40 text-[9px] leading-relaxed italic font-light">
                      {role.function}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer de Page Technique */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 pt-12 border-t border-gold/10 text-center"
        >
          <div className="max-w-4xl mx-auto">
            <h3 className="text-xl font-headline text-white mb-4 uppercase tracking-widest">
              L'EXCELLENCE <span className="text-gold">OPÉRATIONNELLE</span>
            </h3>
            <p className="text-silver/40 text-[10px] italic font-light leading-relaxed mb-8 max-w-2xl mx-auto">
              Chaque poste bénéficie de mécaniques de jeu exclusives et de scripts propriétaires développés par nos ingénieurs. Votre immersion est le fruit de notre maîtrise technique.
            </p>
            <div className="flex flex-col items-center gap-4">
              <div className="h-12 w-[1px] bg-gradient-to-b from-gold/40 to-transparent" />
              <div className="text-center">
                <span className="font-headline text-lg text-gold tracking-[0.3em] uppercase block mb-1 text-glow-gold">OUTLAND STUDIOS</span>
                <span className="text-[7px] text-gold/30 tracking-[0.5em] uppercase font-bold">Certification d'Ingénierie Asgarm</span>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
      
      <Footer />
    </main>
  )
}
