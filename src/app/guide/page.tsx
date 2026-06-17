
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
    desc: "L'élite intellectuelle et magique d'Asgarm. Ici, l'avenir du royaume est forgé dans la rigueur et la maîtrise des arts occultes.",
    roles: [
      { title: "Directeur d'Asgarm", rank: "HAUTE AUTORITÉ", function: "Souveraineté totale. Gestion du corps enseignant, validation des accréditations et arbitrage final des sanctions." },
      { title: "Directeur Adjoint", rank: "COMMANDEMENT", function: "Coordination opérationnelle. Gestion des examens, supervision administrative et maintien de l'ordre général." },
      { title: "Prof. Magie Noire", rank: "DÉFENSE", function: "Enseignement des protections. Autorisé à organiser des duels de défense et à sanctionner les abus de magie offensive." },
      { title: "Prof. Créatures", rank: "BESTIAIRE", function: "Étude des écosystèmes et dressage. Gestion des entités sauvages et sécurité des expéditions éducatives." },
      { title: "Prof. Sortilèges", rank: "CHARMES", function: "Théorie et pratique des enchantements. Certification des paliers de puissance magique des citoyens." },
      { title: "Prof. Alchimie", rank: "PHARMACOPÉE", function: "Synthèse de potions et étude des plantes. Gestion des serres royales et de la sécurité chimique du royaume." },
      { title: "Prof. Divination", rank: "PRÉSAGES", function: "Exploration des flux de l'Ether. Guidance des élèves dans la compréhension des signes et de leur destinée." },
      { title: "Professeur de Vol", rank: "AÉRONAUTIQUE", function: "Maîtrise du pilotage de balais et montures. Surveillance des périmètres aériens et gestion des tournois." },
      { title: "Prof. Histoire", rank: "ARCHIVES", function: "Étude des traités anciens et du passé d'Asgarm. Préservation de la chronologie et des racines du royaume." },
      { title: "Prof. Morphologie", rank: "TRANSFORMATION", function: "Maîtrise de la théorie du corps magique. Enseignement des métamorphoses physiques et structurelles." },
      { title: "Prof. Astrologie", rank: "COSMOS", function: "Lecture des constellations et des flux stellaires. Rituels célestes et synchronisation avec les astres." },
      { title: "Surveillant Asgarm", rank: "ORDRE", function: "Discipline des couloirs et rondes nocturnes. Application immédiate des sanctions et maintien de la paix." }
    ]
  },
  {
    id: "arcanes",
    name: "Conclave des Arcanes",
    focus: "JUSTICE & LÉGISLATION",
    icon: Gavel,
    desc: "Le garant de l'ordre public et de la loi régalienne d'Asgarm. Une structure de fer pour un royaume uni.",
    roles: [
      { title: "Grand Sorcier", rank: "LÉGISLATION", function: "Haute magistrature, rédaction du code législatif régalien et arbitrage final des contentieux territoriaux." },
      { title: "Maître Sorcier", rank: "ADMINISTRATION", function: "Architecture administrative, gestion des ressources publiques et coordination des services civils." },
      { title: "Protecteur", rank: "FORCE PUBLIQUE", function: "Maintien de la paix, application du droit constitutionnel et protection des intérêts vitaux du royaume." }
    ]
  },
  {
    id: "ombres",
    name: "Conclave des Ombres",
    focus: "ORDRE OCCULTE",
    icon: Ghost,
    desc: "La main invisible d'Asgarm. Renseignement, influence et protection des secrets d'État.",
    roles: [
      { title: "Grand Sorcier", rank: "SOUVERAINETÉ", function: "Commandement suprême des réseaux clandestins. Gestion des archives secrètes et des directives d'influence." },
      { title: "Maître des Ombres", rank: "COMMANDEMENT", function: "Planification tactique des opérations de renseignement et coordination des agents de terrain." },
      { title: "Protecteur", rank: "OPÉRATIONS", function: "Exécution des directives silencieuses, neutralisation des menaces et sécurité des infrastructures sensibles." }
    ]
  },
  {
    id: "royaute",
    name: "Royauté d'Asgarm",
    focus: "SOUVERAINETÉ SUPRÊME",
    icon: Crown,
    desc: "Les architectes de la destinée. Ils règnent sur l'éther et la terre pour la grandeur d'Asgarm.",
    roles: [
      { title: "Le Monarque", rank: "SOUVERAIN", function: "Prise de décision géopolitique, arbitrage final du Conseil des Conclaves et incarnation du trône d'Asgarm." },
      { title: "Haut Conseiller", rank: "INFLUENCE", function: "Expertise diplomatique, gestion des relations extérieures et conseil stratégique auprès de la Couronne." }
    ]
  },
  {
    id: "clans",
    name: "Clans & Créatures",
    focus: "STRUCTURES SAUVAGES",
    icon: Users,
    desc: "Les forces tribales et les traditions ancestrales. La puissance brute de la nature alliée à Asgarm.",
    roles: [
      { title: "Chef / Alpha", rank: "LEADERSHIP", function: "Gestion des territoires sauvages, protection de la meute et maintien des traités de paix avec la Royauté." },
      { title: "Chaman Royal", rank: "SAGESSE", function: "Lien spirituel avec l'Ether, préservation des rituels anciens et soins par les énergies naturelles." }
    ]
  },
  {
    id: "economie",
    name: "Économie & Services",
    focus: "PÔLE SOCIAL & COMMERCE",
    icon: Wallet,
    desc: "Le cœur battant du commerce. Ceux qui font vivre la cité et prospérer le patrimoine royal.",
    roles: [
      { title: "Agent Immobilier", rank: "PATRIMOINE", function: "Administration du parc foncier royal, expertise en transaction et gestion de l'habitat citoyen." },
      { title: "Journaliste", rank: "INFORMATION", function: "Chroniqueur des événements du royaume, investigation sociale et diffusion des annonces officielles." },
      { title: "Tavernier / Commerçant", rank: "LOGISTIQUE", function: "Gestion des ressources, animation des lieux de vie et approvisionnement des citoyens." }
    ]
  }
]

export default function GuidePage() {
  const [selected, setSelected] = useState<typeof institutions[0] | null>(null)

  return (
    <main className="relative h-screen flex flex-col overflow-hidden bg-transparent">
      <Navigation />
      
      {/* Header Codex */}
      <section className="relative pt-24 pb-2 px-8 flex-none z-20">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex items-center justify-center gap-6 mb-1">
              <div className="h-[1px] w-16 bg-gold/20" />
              <span className="text-gold text-[10px] tracking-[1em] uppercase font-bold text-glow-gold">Codex Opérationnel</span>
              <div className="h-[1px] w-16 bg-gold/20" />
            </div>
            <h1 className="text-4xl md:text-5xl font-headline text-white uppercase tracking-tighter leading-none">
              GUIDE <span className="text-gold italic font-light">ARRIVANT</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="flex-1 relative px-8 pb-6 max-w-[1700px] mx-auto w-full overflow-hidden flex flex-col">
        <AnimatePresence mode="wait">
          {!selected ? (
            <motion.div
              key="grid"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 h-full p-2"
            >
              {institutions.map((inst, idx) => (
                <motion.button
                  key={inst.id}
                  onClick={() => setSelected(inst)}
                  whileHover={{ scale: 1.01, y: -2 }}
                  whileTap={{ scale: 0.99 }}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="group relative flex flex-col justify-center items-center p-8 glass-night border border-gold/10 text-center hover:border-gold/40 transition-all duration-500 overflow-hidden"
                >
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-700">
                    <inst.icon className="w-40 h-40 text-gold" />
                  </div>
                  <div className="relative z-10">
                    <span className="text-gold/60 text-[8px] tracking-[0.5em] uppercase font-bold mb-3 block">{inst.focus}</span>
                    <h2 className="text-2xl md:text-3xl font-headline text-white uppercase group-hover:text-glow-gold transition-all duration-500 leading-tight">
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
              className="flex-1 flex flex-col glass-night border border-gold/20 p-8 relative overflow-hidden"
            >
              {/* Bouton Retour */}
              <button 
                onClick={() => setSelected(null)}
                className="absolute top-6 left-8 flex items-center gap-4 text-gold/40 hover:text-gold transition-all group z-30"
              >
                <div className="w-8 h-8 rounded-full border border-gold/10 flex items-center justify-center group-hover:border-gold/40 transition-all bg-night/40 backdrop-blur-md">
                  <ChevronLeft className="w-4 h-4" />
                </div>
                <span className="text-[9px] font-bold uppercase tracking-[0.4em]">Retour au Codex</span>
              </button>

              <div className="relative z-10 h-full flex flex-col">
                {/* Header Institution Compacté */}
                <div className="mb-4 text-center">
                  <span className="text-gold text-[9px] tracking-[1em] uppercase font-bold block mb-1">{selected.focus}</span>
                  <h2 className="text-4xl md:text-5xl font-headline text-white uppercase tracking-tighter mb-1 leading-none text-glow-gold">
                    {selected.name}
                  </h2>
                  <p className="text-silver/40 text-sm italic max-w-4xl mx-auto font-light leading-tight">
                    "{selected.desc}"
                  </p>
                </div>

                {/* Grille des Rôles Panoramique Fixe (Zéro-Scroll) */}
                <div className="flex-1 flex items-center justify-center overflow-hidden py-2">
                  <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 w-full h-full ${selected.roles.length > 8 ? 'lg:grid-rows-3' : 'lg:grid-rows-2'}`}>
                    {selected.roles.map((role, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.03 }}
                        className="group/role flex flex-col p-4 bg-gold/[0.02] border border-gold/10 hover:border-gold/30 transition-all duration-500 overflow-hidden"
                      >
                        <span className="text-[8px] text-gold/40 font-bold uppercase tracking-[0.3em] mb-2 border-b border-gold/10 pb-1 inline-block w-fit">
                          {role.rank}
                        </span>
                        
                        <h3 className="text-base md:text-lg text-white font-headline uppercase mb-1.5 group-hover/role:text-glow-gold transition-all duration-500 leading-none">
                          {role.title}
                        </h3>
                        
                        <p className="text-silver/50 text-[10px] leading-snug italic font-light border-l border-gold/10 pl-2">
                          {role.function}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Icône Filigrane Géante */}
              <div className="absolute bottom-[-5%] right-[-2%] opacity-[0.02] pointer-events-none transition-all duration-1000">
                <selected.icon className="w-[350px] h-[350px] text-gold" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Footer Minimaliste Fixe */}
      <footer className="flex-none pb-2 text-center z-10 opacity-30">
        <span className="text-[8px] text-gold/50 tracking-[0.8em] uppercase font-bold">
          OUTLAND STUDIOS — ARCHITECTURE ASGARM V2.0.5
        </span>
      </footer>
    </main>
  )
}
