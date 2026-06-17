
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
    focus: "ÉDUCATION & DISCIPLINE",
    icon: GraduationCap,
    desc: "L'institution de formation des élites. Ici commence votre ascension.",
    roles: [
      { title: "Direction", rank: "HAUTE AUTORITÉ", function: "Pilotage stratégique, validation des cursus et gestion des accréditations." },
      { title: "Enseignants", rank: "PÉDAGOGIE", function: "Transmission des savoirs et évaluation technique des aptitudes." },
      { title: "Surveillant", rank: "DISCIPLINE", function: "Garant de l'ordre intérieur et gestion disciplinaire des périmètres." },
      { title: "Apprenti", rank: "IMMERSION", function: "Apprentissage des fondamentaux et progression hiérarchique." }
    ]
  },
  {
    id: "arcanes",
    name: "Conclave des Arcanes",
    focus: "JUSTICE & LOIS",
    icon: Gavel,
    desc: "Le garant de l'ordre public et de la loi régalienne d'Asgarm.",
    roles: [
      { title: "Grand Sorcier", rank: "LÉGISLATION", function: "Haute magistrature et arbitrage final des contentieux." },
      { title: "Maître Sorcier", rank: "ADMINISTRATION", function: "Architecture administrative et gestion des ressources publiques." },
      { title: "Protecteur", rank: "SÉCURITÉ", function: "Maintien de la paix et application du droit constitutionnel." }
    ]
  },
  {
    id: "ombres",
    name: "Conclave des Ombres",
    focus: "ORDRE OCCULTE",
    icon: Ghost,
    desc: "La main invisible d'Asgarm. Renseignement et influence politique.",
    roles: [
      { title: "Grand Sorcier", rank: "SOUVERAINETÉ", function: "Commandement des réseaux clandestins et secrets d'État." },
      { title: "Maître", rank: "COMMANDEMENT", function: "Planification des opérations et coordination du renseignement." },
      { title: "Protecteur", rank: "OPÉRATIONS", function: "Neutralisation chirurgicale et exécution des directives." }
    ]
  },
  {
    id: "royaute",
    name: "Royauté d'Asgarm",
    focus: "SOUVERAINETÉ SUPRÊME",
    icon: Crown,
    desc: "Les architectes de la destinée et les gardiens du trône.",
    roles: [
      { title: "Le Monarque", rank: "SOUVERAINETÉ", function: "Prise de décision géopolitique et arbitrage final du Conseil." },
      { title: "Conseiller", rank: "INFLUENCE", function: "Expertise diplomatique et gestion de l'influence politique." }
    ]
  },
  {
    id: "clans",
    name: "Clans & Créatures",
    focus: "STRUCTURES SAUVAGES",
    icon: Users,
    desc: "Les forces tribales et les traditions ancestrales du royaume.",
    roles: [
      { title: "Chef / Alpha", rank: "LEADERSHIP", function: "Gestion territoriale et protection des meutes de créatures." },
      { title: "Chaman", rank: "SAGESSE", function: "Lien avec l'Ether et préservation des traditions occultes." }
    ]
  },
  {
    id: "economie",
    name: "Économie & Services",
    focus: "PÔLE SOCIAL",
    icon: Wallet,
    desc: "Le cœur battant du commerce et de la vie quotidienne.",
    roles: [
      { title: "Immobilier", rank: "PATRIMOINE", function: "Expertise foncière et administration du patrimoine royal." },
      { title: "Journaliste", rank: "INFORMATION", function: "Chroniqueur des événements et investigation sociale." },
      { title: "Tavernier", rank: "COMMERCE", function: "Logistique sociale et gestion des points de ralliement." }
    ]
  }
]

export default function GuidePage() {
  const [selected, setSelected] = useState<typeof institutions[0] | null>(null)

  return (
    <main className="relative h-screen flex flex-col overflow-hidden bg-transparent">
      <Navigation />
      
      {/* Header Permanent */}
      <section className="relative pt-24 pb-4 px-8 flex-none z-20">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex items-center justify-center gap-6 mb-1">
              <div className="h-[1px] w-12 bg-gold/30" />
              <span className="text-gold text-[10px] tracking-[0.8em] uppercase font-bold text-glow-gold">Codex Opérationnel</span>
              <div className="h-[1px] w-12 bg-gold/30" />
            </div>
            <h1 className="text-4xl md:text-5xl font-headline text-white uppercase tracking-tighter leading-none">
              GUIDE <span className="text-gold italic font-light">ARRIVANT</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="flex-1 relative px-8 pb-4 max-w-[1600px] mx-auto w-full overflow-hidden flex flex-col">
        <AnimatePresence mode="wait">
          {!selected ? (
            <motion.div
              key="grid"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 h-full"
            >
              {institutions.map((inst, idx) => (
                <motion.button
                  key={inst.id}
                  onClick={() => setSelected(inst)}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="group relative flex flex-col justify-center items-center p-6 glass-night border border-gold/10 text-center hover:border-gold/40 transition-all overflow-hidden h-full"
                >
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity">
                    <inst.icon className="w-40 h-40 text-gold" />
                  </div>
                  <div className="relative z-10">
                    <span className="text-gold/60 text-[8px] tracking-[0.5em] uppercase font-bold mb-3 block">{inst.focus}</span>
                    <h2 className="text-2xl md:text-3xl font-headline text-white uppercase group-hover:text-glow-gold transition-all leading-tight">
                      {inst.name}
                    </h2>
                    <div className="mt-4 h-[1px] w-8 bg-gold/30 group-hover:w-16 mx-auto transition-all duration-700" />
                  </div>
                </motion.button>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="detail"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="flex-1 flex flex-col glass-night border border-gold/20 p-8 relative overflow-hidden h-full"
            >
              {/* Bouton Retour Premium */}
              <button 
                onClick={() => setSelected(null)}
                className="absolute top-6 left-6 flex items-center gap-4 text-gold/40 hover:text-gold transition-all group z-30"
              >
                <div className="w-8 h-8 rounded-full border border-gold/10 flex items-center justify-center group-hover:border-gold/40 transition-all">
                  <ChevronLeft className="w-4 h-4" />
                </div>
                <span className="text-[9px] font-bold uppercase tracking-[0.4em]">Retour</span>
              </button>

              <div className="relative z-10 h-full flex flex-col">
                {/* Header Detail */}
                <div className="mb-8 text-center">
                  <span className="text-gold text-[10px] tracking-[1em] uppercase font-bold block mb-1">{selected.focus}</span>
                  <h2 className="text-5xl md:text-6xl font-headline text-white uppercase tracking-tighter mb-2 leading-none">
                    {selected.name}
                  </h2>
                  <p className="text-silver/40 text-base italic max-w-3xl mx-auto line-clamp-1">
                    "{selected.desc}"
                  </p>
                </div>

                {/* Grille des Rôles Panoramique (Zero Scroll) */}
                <div className="flex-1 flex items-center justify-center">
                  <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${selected.roles.length} gap-4 w-full`}>
                    {selected.roles.map((role, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                        className="group/role flex flex-col p-6 bg-gold/5 border border-gold/10 hover:border-gold/30 transition-all h-full"
                      >
                        <span className="text-[10px] text-gold font-bold uppercase tracking-[0.3em] mb-4 border-b border-gold/20 pb-2 inline-block w-fit">
                          {role.rank}
                        </span>
                        
                        <h3 className="text-2xl text-white font-headline uppercase mb-4 group-hover/role:text-glow-gold transition-all">
                          {role.title}
                        </h3>
                        
                        <p className="text-silver/50 text-sm leading-relaxed italic font-light border-l border-gold/10 pl-4">
                          {role.function}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Icone Filigrane */}
              <div className="absolute bottom-4 right-4 opacity-[0.03] pointer-events-none">
                <selected.icon className="w-48 h-48 text-gold" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Technical Footer */}
      <footer className="flex-none pb-4 text-center z-10 opacity-20">
        <span className="text-[8px] text-gold/40 tracking-[0.6em] uppercase font-bold">
          OUTLAND STUDIOS — PROTOCOLE D'INGÉNIERIE ASGARM V1.0.5
        </span>
      </footer>
    </main>
  )
}
