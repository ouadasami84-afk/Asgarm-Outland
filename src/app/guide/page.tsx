
"use client"

import React, { useState } from 'react'
import { Navigation } from '@/components/Navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  GraduationCap, 
  Gavel, 
  Ghost, 
  Crown, 
  Users, 
  Wallet,
  ChevronRight
} from 'lucide-react'

const institutions = [
  {
    id: "academie",
    name: "Académie d'Asgarm",
    focus: "ÉDUCATION & DISCIPLINE",
    icon: GraduationCap,
    desc: "L'élite intellectuelle d'Asgarm. Ici, l'avenir du royaume est forgé dans la rigueur des arts occultes.",
    roles: [
      { title: "Directeur d'Asgarm", rank: "HAUTE AUTORITÉ", function: "Souveraineté totale. Gestion du corps enseignant et arbitrage final des sanctions." },
      { title: "Directeur Adjoint", rank: "COMMANDEMENT", function: "Coordination opérationnelle. Supervision administrative et maintien de l'ordre général." },
      { title: "Prof. Contre la Magie Noire", rank: "DÉFENSE", function: "Enseignement des protections. Autorisé à organiser des duels et à sanctionner les abus." },
      { title: "Prof. Créatures Magiques", rank: "BESTIAIRE", function: "Étude des écosystèmes et dressage. Gestion des entités sauvages et sécurité des expéditions." },
      { title: "Prof. Sortilèges", rank: "CHARMES", function: "Théorie des enchantements. Certification des paliers de puissance magique des citoyens." },
      { title: "Prof. Alchimie / Botanique", rank: "PHARMACOPÉE", function: "Synthèse de potions et étude des plantes. Gestion des serres royales d'Asgarm." },
      { title: "Prof. Divination", rank: "PRÉSAGES", function: "Exploration des flux de l'Ether. Guidance des élèves dans la compréhension des signes." },
      { title: "Professeur de Vol", rank: "AÉRONAUTIQUE", function: "Maîtrise du pilotage de balais et montures. Surveillance des périmètres aériens du royaume." },
      { title: "Prof. Histoire de la Magie", rank: "ARCHIVES", function: "Étude des traités anciens. Préservation de la chronologie et des racines d'Asgarm." },
      { title: "Prof. de Morphologie", rank: "TRANSFORMATION", function: "Maîtrise du corps magique. Enseignement des métamorphoses physiques et structurelles." },
      { title: "Prof. Astrologie", rank: "COSMOS", function: "Lecture des constellations. Rituels célestes et synchronisation avec les flux stellaires." },
      { title: "Surveillant Asgarm", rank: "ORDRE", function: "Discipline des couloirs et rondes nocturnes. Application immédiate des sanctions." }
    ]
  },
  {
    id: "arcanes",
    name: "Conclave des Arcanes",
    focus: "JUSTICE & LÉGISLATION",
    icon: Gavel,
    desc: "Garant de l'ordre public et de la loi régalienne. Une structure de fer pour un royaume uni.",
    roles: [
      { title: "Grand Sorcier", rank: "LÉGISLATION", function: "Haute magistrature, rédaction du code législatif et arbitrage des contentieux." },
      { title: "Maître Sorcier", rank: "ADMINISTRATION", function: "Architecture administrative, gestion des ressources publiques et services civils." },
      { title: "Protecteur", rank: "FORCE PUBLIQUE", function: "Maintien de la paix, application du droit et protection des intérêts vitaux." }
    ]
  },
  {
    id: "ombres",
    name: "Conclave des Ombres",
    focus: "ORDRE OCCULTE",
    icon: Ghost,
    desc: "La main invisible d'Asgarm. Renseignement, influence et protection des secrets d'État.",
    roles: [
      { title: "Grand Sorcier", rank: "SOUVERAINETÉ", function: "Commandement des réseaux clandestins. Gestion des archives secrètes du trône." },
      { title: "Maître des Ombres", rank: "COMMANDEMENT", function: "Planification tactique des opérations et coordination des agents de terrain." },
      { title: "Protecteur", rank: "OPÉRATIONS", function: "Exécution des directives silencieuses et sécurité des infrastructures sensibles." }
    ]
  },
  {
    id: "royaute",
    name: "Royauté d'Asgarm",
    focus: "SOUVERAINETÉ SUPRÊME",
    icon: Crown,
    desc: "Les architectes de la destinée. Ils règnent sur l'éther et la terre pour la grandeur d'Asgarm.",
    roles: [
      { title: "Le Monarque", rank: "SOUVERAIN", function: "Prise de décision géopolitique, arbitrage final et incarnation du trône." },
      { title: "Haut Conseiller", rank: "INFLUENCE", function: "Expertise diplomatique et conseil stratégique auprès de la Couronne." }
    ]
  },
  {
    id: "clans",
    name: "Clans & Créatures",
    focus: "STRUCTURES SAUVAGES",
    icon: Users,
    desc: "Les forces tribales et les traditions ancestrales. La puissance brute de la nature alliée à Asgarm.",
    roles: [
      { title: "Chef / Alpha", rank: "LEADERSHIP", function: "Gestion des territoires sauvages et maintien des traités de paix royaux." },
      { title: "Chaman Royal", rank: "SAGESSE", function: "Lien spirituel avec l'Ether et préservation des rituels naturels anciens." }
    ]
  },
  {
    id: "economie",
    name: "Économie & Services",
    focus: "PÔLE SOCIAL & COMMERCE",
    icon: Wallet,
    desc: "Le cœur battant du commerce. Ceux qui font vivre la cité et prospérer le patrimoine royal.",
    roles: [
      { title: "Agent Immobilier", rank: "PATRIMOINE", function: "Administration du parc foncier royal et gestion de l'habitat citoyen." },
      { title: "Journaliste", rank: "INFORMATION", function: "Chroniqueur des événements du royaume et investigation sociale." },
      { title: "Commerçant", rank: "LOGISTIQUE", function: "Gestion des ressources et approvisionnement des citoyens d'Asgarm." }
    ]
  }
]

export default function GuidePage() {
  const [activeTab, setActiveTab] = useState(institutions[0].id)
  const activeInst = institutions.find(i => i.id === activeTab) || institutions[0]

  return (
    <main className="relative h-screen flex flex-col overflow-hidden bg-[#010208]">
      <Navigation />
      
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gold/5 blur-[150px] rounded-full" />
      </div>

      <div className="flex-1 flex pt-24 pb-4 px-6 gap-6 relative z-10 overflow-hidden">
        
        {/* Sidebar Navigation */}
        <aside className="w-80 flex flex-col gap-2 flex-none">
          <div className="mb-6 pl-4">
            <span className="text-gold text-[9px] tracking-[0.8em] uppercase font-bold block mb-1">Architecture</span>
            <h1 className="text-3xl font-headline text-white uppercase tracking-tighter">CODEX ASGARM</h1>
          </div>
          
          <nav className="flex flex-col gap-1.5 overflow-y-auto custom-scrollbar pr-2">
            {institutions.map((inst) => (
              <button
                key={inst.id}
                onClick={() => setActiveTab(inst.id)}
                className={`group relative flex items-center gap-4 p-4 transition-all duration-500 border ${
                  activeTab === inst.id 
                  ? 'bg-gold/10 border-gold/40' 
                  : 'bg-white/[0.02] border-white/5 hover:border-gold/20'
                }`}
              >
                <div className={`transition-colors duration-500 ${activeTab === inst.id ? 'text-gold' : 'text-silver/30 group-hover:text-gold/60'}`}>
                  <inst.icon className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <span className={`text-[8px] tracking-[0.3em] uppercase block font-bold ${activeTab === inst.id ? 'text-gold' : 'text-silver/20'}`}>
                    {inst.focus}
                  </span>
                  <span className={`text-xs font-bold uppercase tracking-widest ${activeTab === inst.id ? 'text-white' : 'text-silver/40 group-hover:text-silver/60'}`}>
                    {inst.name}
                  </span>
                </div>
                {activeTab === inst.id && (
                  <motion.div layoutId="active-indicator" className="absolute right-4">
                    <ChevronRight className="w-4 h-4 text-gold" />
                  </motion.div>
                )}
              </button>
            ))}
          </nav>

          <div className="mt-auto p-4 border border-gold/5 bg-gold/[0.02]">
            <p className="text-[8px] text-gold/30 uppercase tracking-[0.4em] leading-relaxed">
              Sélectionnez une institution pour consulter ses prérogatives et ses grades officiels.
            </p>
          </div>
        </aside>

        {/* Content Area */}
        <section className="flex-1 flex flex-col glass-night border border-gold/10 relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeInst.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col h-full p-10"
            >
              {/* Header Institution */}
              <div className="mb-10 flex items-start justify-between">
                <div className="max-w-3xl">
                  <span className="text-gold text-[10px] tracking-[1.2em] uppercase font-bold block mb-2">{activeInst.focus}</span>
                  <h2 className="text-6xl font-headline text-white uppercase tracking-tighter leading-none mb-6 text-glow-gold">
                    {activeInst.name}
                  </h2>
                  <p className="text-silver/50 text-base italic font-light border-l-2 border-gold/20 pl-6 leading-relaxed">
                    "{activeInst.desc}"
                  </p>
                </div>
                <div className="opacity-[0.05] pointer-events-none">
                  <activeInst.icon className="w-40 h-40 text-gold" />
                </div>
              </div>

              {/* Roles Grid - Scrollable area inside frame */}
              <div className="flex-1 overflow-y-auto pr-6 custom-scrollbar pb-10">
                <div className="grid grid-cols-3 gap-4">
                  {activeInst.roles.map((role, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.03 }}
                      className="group/role flex flex-col p-5 bg-gold/[0.02] border border-gold/5 hover:border-gold/20 transition-all duration-500"
                    >
                      <div className="flex items-center gap-2 mb-3">
                        <div className="h-[1px] w-4 bg-gold/20" />
                        <span className="text-[8px] text-gold/40 font-bold uppercase tracking-[0.4em]">
                          {role.rank}
                        </span>
                      </div>
                      
                      <h3 className="text-lg text-white font-headline uppercase mb-3 group-hover/role:text-glow-gold transition-all duration-500 leading-tight">
                        {role.title}
                      </h3>
                      
                      <p className="text-silver/50 text-[10px] leading-relaxed italic font-light">
                        {role.function}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Watermark Detail */}
          <div className="absolute bottom-8 right-8 opacity-[0.02] pointer-events-none text-[80px] font-headline select-none">
            {activeInst.id.toUpperCase()}
          </div>
        </section>
      </div>

      {/* Footer Minimaliste */}
      <footer className="h-10 border-t border-white/5 flex items-center justify-center bg-black/40 relative z-20">
        <span className="text-[8px] text-gold/30 tracking-[1em] uppercase font-bold">
          OUTLAND STUDIOS — PROTOCOLE ASGARM V2.0.9
        </span>
      </footer>
    </main>
  )
}
