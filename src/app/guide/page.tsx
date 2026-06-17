
"use client"

import React, { useState } from 'react'
import { Navigation } from '@/components/Navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  ChevronLeft, 
  GraduationCap, 
  Gavel, 
  Ghost, 
  Crown, 
  Users, 
  Wallet
} from 'lucide-react'

const institutions = [
  {
    id: "academie",
    name: "Académie d'Asgarm",
    focus: "PÔLE ÉDUCATIF & DISCIPLINAIRE",
    icon: GraduationCap,
    desc: "L'institution de formation des élites. Ici commence votre ascension vers la maîtrise des arts arcaniques et de la discipline régalienne.",
    roles: [
      { 
        title: "Direction (Directeur & Adjoint)", 
        rank: "HAUTE AUTORITÉ", 
        function: "Pilotage stratégique de l'institution, validation des cursus arcaniques et gestion des accréditations." 
      },
      { 
        title: "Corps Enseignant (Professeurs)", 
        rank: "PÉDAGOGIE", 
        function: "Conception pédagogique, transmission des savoirs complexes et évaluation technique des aptitudes." 
      },
      { 
        title: "Surveillant Général", 
        rank: "DISCIPLINE", 
        function: "Garant de l'ordre intérieur, gestion disciplinaire et surveillance des périmètres sensibles." 
      },
      { 
        title: "Élève (Apprenti)", 
        rank: "IMMERSION", 
        function: "Apprentissage des mécaniques fondamentales et progression hiérarchique au sein de l'élite." 
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
        function: "Haute magistrature, rédaction du code législatif régalien et arbitrage des contentieux territoriaux." 
      },
      { 
        title: "Maître Sorcier", 
        rank: "ADMINISTRATION", 
        function: "Architecture administrative, gestion des ressources publiques et coordination des services civils." 
      },
      { 
        title: "Protecteur des Arcanes", 
        rank: "FORCE PUBLIQUE", 
        function: "Maintien de la paix, application du droit constitutionnel et protection des intérêts vitaux." 
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
        function: "Commandement des réseaux clandestins, influence politique occulte et gestion des secrets d'État." 
      },
      { 
        title: "Maître des Ténèbres", 
        rank: "COMMANDEMENT", 
        function: "Stratégie asymétrique, planification des opérations spéciales et coordination du renseignement." 
      },
      { 
        title: "Protecteur des Ombres", 
        rank: "ASSASSINAT", 
        function: "Neutralisation chirurgicale, protection rapprochée et exécution des directives secrètes." 
      }
    ]
  },
  {
    id: "royaute",
    name: "Royauté d'Asgarm",
    focus: "SOUVERAINETÉ SUPRÊME",
    icon: Crown,
    desc: "Le sommet de la hiérarchie sociale et politique. Les architectes de la destinée d'Asgarm et les gardiens du trône.",
    roles: [
      { 
        title: "Le Monarque (Roi ou Reine)", 
        rank: "SOUVERAINETÉ", 
        function: "Prise de décision géopolitique, arbitrage final du Conseil et incarnation de l'identité nationale." 
      },
      { 
        title: "Conseiller du Trône", 
        rank: "INFLUENCE", 
        function: "Expertise diplomatique, conseil en étiquette royale et gestion de l'influence politique." 
      }
    ]
  },
  {
    id: "clans",
    name: "Clans et Créatures",
    focus: "STRUCTURES SAUVAGES",
    icon: Users,
    desc: "Les forces tribales et les traditions ancestrales. La puissance brute de la terre d'Asgarm et des peuples libres.",
    roles: [
      { 
        title: "Chef de Clan / Alpha", 
        rank: "LEADERSHIP", 
        function: "Gestion territoriale des peuples sauvages, protection des meutes et commandement des forces." 
      },
      { 
        title: "Chaman du Clan", 
        rank: "SAGESSE", 
        function: "Lien spirituel avec l'Ether, préservation des traditions et médiation avec les forces occultes." 
      }
    ]
  },
  {
    id: "economie",
    name: "Économie et Services",
    focus: "PÔLE SOCIAL & COMMERCIAL",
    icon: Wallet,
    desc: "Le cœur battant du commerce et de l'information. La vie quotidienne au service de la grandeur et de la prospérité.",
    roles: [
      { 
        title: "Agent Immobilier", 
        rank: "PATRIMOINE", 
        function: "Expertise foncière, gestion des transactions de domaines de prestige et administration du patrimoine." 
      },
      { 
        title: "Journaliste", 
        rank: "INFORMATION", 
        function: "Chroniqueur des événements régaliens, investigation sociale et diffusion de l'information." 
      },
      { 
        title: "Tavernier", 
        rank: "COMMERCE", 
        function: "Logistique sociale, gestion des points de ralliement et administration des ressources." 
      }
    ]
  }
]

export default function GuidePage() {
  const [selected, setSelected] = useState<typeof institutions[0] | null>(null)

  return (
    <main className="relative h-screen flex flex-col overflow-hidden bg-transparent">
      <Navigation />
      
      {/* Header Permanent - Fixé en haut */}
      <section className="relative pt-24 pb-4 px-8 flex-none z-20">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-6 mb-2">
              <div className="h-[1px] w-12 bg-gold/30" />
              <span className="text-gold text-[10px] tracking-[0.8em] uppercase font-bold text-glow-gold">Codex Opérationnel</span>
              <div className="h-[1px] w-12 bg-gold/30" />
            </div>
            <h1 className="text-5xl md:text-6xl font-headline text-white uppercase tracking-tighter leading-none mb-2">
              GUIDE <span className="text-gold italic font-light">ARRIVANT</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Zone de contenu principale - Prend tout l'espace restant sans scroller */}
      <div className="flex-1 relative px-8 pb-12 max-w-[1500px] mx-auto w-full overflow-hidden flex flex-col">
        <AnimatePresence mode="wait">
          {!selected ? (
            <motion.div
              key="grid"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 h-full"
            >
              {institutions.map((inst, idx) => (
                <motion.button
                  key={inst.id}
                  onClick={() => setSelected(inst)}
                  whileHover={{ scale: 1.02, y: -5 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="group relative flex flex-col justify-center items-center p-8 glass-night border border-gold/10 text-center hover:border-gold/40 transition-all overflow-hidden h-full"
                >
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity">
                    <inst.icon className="w-48 h-48 text-gold" />
                  </div>
                  <div className="relative z-10 flex flex-col items-center">
                    <span className="text-gold/60 text-[10px] tracking-[0.4em] uppercase font-bold mb-4 block">{inst.focus}</span>
                    <h2 className="text-3xl md:text-4xl font-headline text-white uppercase group-hover:text-glow-gold transition-all leading-tight">
                      {inst.name}
                    </h2>
                    <div className="mt-8 h-[1px] w-12 bg-gold/30 group-hover:w-24 transition-all duration-700" />
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
              transition={{ type: "spring", damping: 25, stiffness: 120 }}
              className="flex-1 flex flex-col glass-night border border-gold/20 p-12 md:p-16 relative overflow-hidden h-full"
            >
              {/* Filigrane Icone Géant */}
              <div className="absolute top-1/2 right-0 -translate-y-1/2 opacity-[0.03] pointer-events-none">
                <selected.icon className="w-[800px] h-[800px] text-gold" />
              </div>

              {/* Bouton Retour Premium */}
              <button 
                onClick={() => setSelected(null)}
                className="absolute top-8 left-8 flex items-center gap-4 text-gold/40 hover:text-gold transition-all group z-30"
              >
                <div className="w-10 h-10 rounded-full border border-gold/10 flex items-center justify-center group-hover:border-gold/40 group-hover:bg-gold/5 transition-all">
                  <ChevronLeft className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-[0.4em]">Retour au Codex</span>
              </button>

              <div className="relative z-10 h-full flex flex-col">
                {/* Header Detail Monumental */}
                <div className="mb-12">
                  <div className="flex items-center gap-4 mb-3">
                     <div className="w-2 h-2 bg-gold animate-pulse" />
                     <span className="text-gold text-[12px] tracking-[0.8em] uppercase font-bold block">{selected.focus}</span>
                  </div>
                  <h2 className="text-6xl md:text-7xl lg:text-8xl font-headline text-white uppercase tracking-tighter mb-6 leading-none">
                    {selected.name}
                  </h2>
                  <p className="text-silver/60 text-xl md:text-2xl italic max-w-4xl border-l-2 border-gold/20 pl-8 leading-relaxed line-clamp-2">
                    {selected.desc}
                  </p>
                </div>

                {/* Grille des Rôles - Défilement interne uniquement si nécessaire */}
                <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 overflow-y-auto pr-8 custom-scrollbar pb-12">
                  {selected.roles.map((role, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 + 0.3 }}
                      className="group/role flex flex-col gap-4"
                    >
                      <div className="flex items-center gap-4">
                        <span className="text-[11px] text-gold font-bold uppercase tracking-[0.4em] bg-gold/5 px-3 py-1 border border-gold/20">
                          {role.rank}
                        </span>
                        <div className="h-[1px] flex-1 bg-gradient-to-r from-gold/20 to-transparent" />
                      </div>
                      
                      <h3 className="text-3xl md:text-4xl text-white font-headline uppercase tracking-tight group-hover/role:text-glow-gold transition-all duration-500">
                        {role.title}
                      </h3>
                      
                      <p className="text-silver/50 text-lg leading-relaxed italic font-light max-w-2xl border-l border-gold/10 pl-6 group-hover/role:border-gold/40 transition-colors">
                        {role.function}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Certification Footer Technique */}
      <footer className="flex-none pb-6 text-center z-10">
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-2 opacity-30">
           <div className="h-[1px] w-32 bg-gold/20 mb-2" />
           <span className="text-[9px] text-gold/40 tracking-[0.8em] uppercase font-bold">
             OUTLAND STUDIOS — PROTOCOLE D'INGÉNIERIE ASGARM V1.0.4
           </span>
        </div>
      </footer>
    </main>
  )
}
