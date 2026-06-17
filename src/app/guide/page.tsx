
"use client"

import React from 'react'
import { Navigation } from '@/components/Navigation'
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
        rank: "ASSASSINAT", 
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
    <main className="relative h-screen flex flex-col overflow-hidden bg-transparent">
      <Navigation />
      
      {/* Header Ultra Compact */}
      <section className="relative pt-24 pb-4 px-8 flex-none">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-6 mb-2">
              <div className="h-[1px] w-12 bg-gold/30" />
              <span className="text-gold text-[10px] tracking-[0.8em] uppercase font-bold text-glow-gold">Codex Opérationnel</span>
              <div className="h-[1px] w-12 bg-gold/30" />
            </div>
            <h1 className="text-3xl md:text-5xl font-headline text-white uppercase tracking-tighter leading-none mb-1">
              GUIDE <span className="text-gold italic font-light">ARRIVANT</span>
            </h1>
            <p className="text-silver/40 text-sm italic font-light">
              "Définissez votre trajectoire. Chaque rôle est un pilier d'Asgarm."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Grille Tactique Plein Écran */}
      <div className="flex-1 px-8 pb-8 max-w-[1600px] mx-auto w-full overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-4 h-full">
          {institutions.map((inst, idx) => (
            <motion.div
              key={inst.name}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.05, duration: 0.5 }}
              className="group glass-night border border-gold/10 p-5 flex flex-col overflow-hidden hover:border-gold/30 transition-all duration-500"
            >
              <div className="flex items-center justify-between mb-4 flex-none">
                <span className="text-gold/60 text-[9px] tracking-[0.4em] uppercase font-bold">{inst.focus}</span>
                <div className="h-[1px] flex-1 bg-gold/10 ml-4" />
              </div>
              <h2 className="text-xl font-headline text-white mb-4 uppercase tracking-tight group-hover:text-gold transition-colors flex-none">{inst.name}</h2>
              
              {/* Contenu interne scrollable si nécessaire */}
              <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar space-y-5">
                {inst.roles.map((role, i) => (
                  <div key={i} className="relative group/role border-l-2 border-gold/10 pl-4 py-1 hover:border-gold/30 transition-all">
                    <div className="flex flex-col gap-1 mb-2">
                      <span className="text-[9px] text-gold/50 uppercase tracking-[0.2em] font-bold">{role.rank}</span>
                      <h3 className="text-lg text-white font-headline tracking-wide uppercase group-hover/role:text-gold transition-colors leading-tight">{role.title}</h3>
                    </div>
                    <p className="text-silver/50 text-xs leading-relaxed italic font-light">
                      {role.function}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Footer Minimaliste de Certification */}
      <footer className="flex-none pb-4 text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-1 opacity-40">
           <span className="font-headline text-sm text-gold tracking-[0.3em] uppercase">OUTLAND STUDIOS</span>
           <span className="text-[8px] text-gold/30 tracking-[0.5em] uppercase font-bold">Certification d'Ingénierie Asgarm</span>
        </div>
      </footer>
    </main>
  )
}
