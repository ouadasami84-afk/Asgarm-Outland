
"use client"

import React, { useState } from 'react'
import { Navigation } from '@/components/Navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, Shield, GraduationCap, Gavel, Ghost, Crown, Users, Wallet } from 'lucide-react'

const institutions = [
  {
    id: "academie",
    name: "Académie d'Asgarm",
    focus: "PÔLE ÉDUCATIF & DISCIPLINAIRE",
    icon: GraduationCap,
    desc: "L'institution de formation des élites. Ici commence votre ascension vers la maîtrise des arts arcaniques.",
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
    id: "arcanes",
    name: "Conclave des Arcanes",
    focus: "JUSTICE & LÉGISLATION",
    icon: Gavel,
    desc: "Le garant de l'ordre public et de la loi régalienne d'Asgarm. Une structure de fer pour un royaume uni.",
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
    id: "ombres",
    name: "Conclave des Ombres",
    focus: "ORDRE OCCULTE",
    icon: Ghost,
    desc: "La main invisible d'Asgarm. Renseignement, influence et gestion des courants interdits pour la survie du royaume.",
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
    id: "royaute",
    name: "Royauté d'Asgarm",
    focus: "SOUVERAINETÉ SUPRÊME",
    icon: Crown,
    desc: "Le sommet de la hiérarchie sociale et politique. Les architectes de la destinée d'Asgarm.",
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
    id: "clans",
    name: "Clans et Créatures",
    focus: "STRUCTURES SAUVAGES",
    icon: Users,
    desc: "Les forces tribales et les traditions ancestrales. La puissance brute de la terre d'Asgarm.",
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
    id: "economie",
    name: "Économie et Services",
    focus: "PÔLE SOCIAL & COMMERCIAL",
    icon: Wallet,
    desc: "Le cœur battant du commerce et de l'information. La vie quotidienne au service de la grandeur.",
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
  const [selected, setSelected] = useState<typeof institutions[0] | null>(null)

  return (
    <main className="relative h-screen flex flex-col overflow-hidden bg-transparent">
      <Navigation />
      
      {/* Header Permanent - Optimisé pour l'espace */}
      <section className="relative pt-24 pb-4 px-8 flex-none z-20">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex items-center justify-center gap-6 mb-2">
              <div className="h-[1px] w-12 bg-gold/30" />
              <span className="text-gold text-[10px] tracking-[0.8em] uppercase font-bold text-glow-gold">Codex Opérationnel</span>
              <div className="h-[1px] w-12 bg-gold/30" />
            </div>
            <h1 className="text-4xl md:text-5xl font-headline text-white uppercase tracking-tighter leading-none mb-2">
              GUIDE <span className="text-gold italic font-light">ARRIVANT</span>
            </h1>
          </motion.div>
        </div>
      </section>

      <div className="flex-1 relative px-8 pb-12 max-w-[1400px] mx-auto w-full overflow-hidden">
        <AnimatePresence mode="wait">
          {!selected ? (
            <motion.div
              key="grid"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 h-full p-4"
            >
              {institutions.map((inst, idx) => (
                <motion.button
                  key={inst.id}
                  onClick={() => setSelected(inst)}
                  whileHover={{ scale: 1.02, y: -5 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative flex flex-col justify-end p-8 glass-night border border-gold/10 text-left hover:border-gold/40 transition-all overflow-hidden"
                >
                  <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:opacity-10 transition-opacity">
                    <inst.icon className="w-32 h-32 text-gold" />
                  </div>
                  <div className="relative z-10">
                    <span className="text-gold/60 text-[10px] tracking-[0.4em] uppercase font-bold mb-4 block">{inst.focus}</span>
                    <h2 className="text-3xl font-headline text-white mb-4 uppercase group-hover:text-gold transition-colors">{inst.name}</h2>
                    <p className="text-silver/40 text-sm italic line-clamp-2">{inst.desc}</p>
                    <div className="mt-8 h-[1px] w-12 bg-gold/30 group-hover:w-full transition-all duration-500" />
                  </div>
                </motion.button>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="detail"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              className="h-full flex flex-col glass-night border border-gold/20 p-12 relative overflow-hidden"
            >
              {/* Filigrane Icone */}
              <div className="absolute top-1/2 right-0 -translate-y-1/2 opacity-5 pointer-events-none">
                <selected.icon className="w-[600px] h-[600px] text-gold" />
              </div>

              {/* Bouton Retour */}
              <button 
                onClick={() => setSelected(null)}
                className="absolute top-12 left-12 flex items-center gap-4 text-gold/40 hover:text-gold transition-colors group z-30"
              >
                <div className="w-10 h-10 rounded-full border border-gold/10 flex items-center justify-center group-hover:border-gold/40">
                  <ChevronLeft className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-[0.4em]">Retour au Codex</span>
              </button>

              <div className="relative z-10 h-full flex flex-col pt-16">
                <div className="mb-12">
                  <span className="text-gold text-[12px] tracking-[0.6em] uppercase font-bold block mb-4">{selected.focus}</span>
                  <h2 className="text-6xl md:text-7xl font-headline text-white uppercase tracking-tighter mb-6">{selected.name}</h2>
                  <p className="text-silver/60 text-xl italic max-w-3xl border-l-2 border-gold/20 pl-8">{selected.desc}</p>
                </div>

                {/* Grille des Rôles Spécifiques */}
                <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-12 overflow-y-auto pr-8 custom-scrollbar pb-12">
                  {selected.roles.map((role, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="group/role"
                    >
                      <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-4">
                          <span className="text-[10px] text-gold font-bold uppercase tracking-[0.3em] bg-gold/5 px-3 py-1 border border-gold/10">{role.rank}</span>
                          <div className="h-[1px] flex-1 bg-gold/10" />
                        </div>
                        <h3 className="text-3xl text-white font-headline uppercase tracking-tight group-hover/role:text-glow-gold transition-all">{role.title}</h3>
                        <p className="text-silver/50 text-lg leading-relaxed italic font-light max-w-2xl">
                          {role.function}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Certification Footer */}
      <footer className="flex-none pb-8 text-center z-10">
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-1 opacity-40">
           <span className="text-[8px] text-gold/30 tracking-[0.8em] uppercase font-bold">OUTLAND STUDIOS — CERTIFICATION D'INGÉNIERIE ASGARM</span>
        </div>
      </footer>
    </main>
  )
}
