
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
    desc: "L'institution de formation des élites. Ici, l'avenir d'Asgarm est forgé dans la rigueur et la maîtrise des arts occultes.",
    roles: [
      { title: "Directeur d'Asgarm", rank: "HAUTE AUTORITÉ", function: "Souveraineté académique totale. Gestion du corps enseignant, validation des accréditations et arbitrage final des sanctions majeures." },
      { title: "Directeur Adjoint", rank: "COMMANDEMENT", function: "Coordination opérationnelle. Gestion des emplois du temps, supervision des examens et maintien de l'ordre administratif." },
      { title: "Prof. Défense Arcanique", rank: "DÉFENSE", function: "Enseignement des protections et contre-sorts. Autorisé à organiser des duels et à sanctionner les abus de magie offensive." },
      { title: "Prof. Créatures Magiques", rank: "BESTIAIRE", function: "Étude des écosystèmes et dressage. Autorisé à manipuler les entités sauvages pour l'éducation sécurisée des apprentis." },
      { title: "Prof. Sortilèges", rank: "CHARMES", function: "Théorie et pratique des enchantements. Validation des paliers de puissance magique et certification des brevets de sorcellerie." },
      { title: "Prof. Alchimie & Botanique", rank: "PHARMACOPÉE", function: "Synthèse de potions et étude des plantes. Gestion des laboratoires, des serres royales et de la sécurité chimique." },
      { title: "Prof. Divination", rank: "PRÉSAGES", function: "Exploration des flux de l'Ether et lecture des signes. Autorisé à guider les élèves dans la compréhension de leur destinée." },
      { title: "Prof. de Vol", rank: "AÉRONAUTIQUE", function: "Maîtrise du pilotage de balais et montures magiques. Surveillance des périmètres aériens et gestion des tournois de vol." }
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
      { title: "Protecteur des Arcanes", rank: "FORCE PUBLIQUE", function: "Maintien de la paix, application du droit constitutionnel et protection des intérêts vitaux du royaume." }
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
      { title: "Protecteur", rank: "OPÉRATIONS", function: "Exécution des directives silencieuses, neutralisation des menaces occultes et sécurité des infrastructures sensibles." }
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
      { title: "Chaman Royal", rank: "SAGESSE", function: "Lien spirituel avec l'Ether, préservation des rituels anciens et soins magiques par les énergies naturelles." }
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
      { title: "Tavernier / Commerçant", rank: "LOGISTIQUE", function: "Gestion des ressources, animation des lieux de vie et approvisionnement des citoyens en biens essentiels." }
    ]
  }
]

export default function GuidePage() {
  const [selected, setSelected] = useState<typeof institutions[0] | null>(null)

  return (
    <main className="relative h-screen flex flex-col overflow-hidden bg-transparent">
      <Navigation />
      
      {/* Header Codex Permanent */}
      <section className="relative pt-24 pb-4 px-8 flex-none z-20">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex items-center justify-center gap-6 mb-2">
              <div className="h-[1px] w-16 bg-gold/20" />
              <span className="text-gold text-[10px] tracking-[1em] uppercase font-bold text-glow-gold">Codex Opérationnel</span>
              <div className="h-[1px] w-16 bg-gold/20" />
            </div>
            <h1 className="text-5xl md:text-6xl font-headline text-white uppercase tracking-tighter leading-none">
              GUIDE <span className="text-gold italic font-light">ARRIVANT</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Main Container Full Screen */}
      <div className="flex-1 relative px-8 pb-12 max-w-[1600px] mx-auto w-full overflow-hidden flex flex-col">
        <AnimatePresence mode="wait">
          {!selected ? (
            <motion.div
              key="grid"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 h-full p-4"
            >
              {institutions.map((inst, idx) => (
                <motion.button
                  key={inst.id}
                  onClick={() => setSelected(inst)}
                  whileHover={{ scale: 1.02, y: -4 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="group relative flex flex-col justify-center items-center p-10 glass-night border border-gold/10 text-center hover:border-gold/40 transition-all duration-500 overflow-hidden"
                >
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-700">
                    <inst.icon className="w-48 h-48 text-gold" />
                  </div>
                  <div className="relative z-10">
                    <span className="text-gold/60 text-[9px] tracking-[0.6em] uppercase font-bold mb-4 block">{inst.focus}</span>
                    <h2 className="text-3xl md:text-4xl font-headline text-white uppercase group-hover:text-glow-gold transition-all duration-500 leading-tight">
                      {inst.name}
                    </h2>
                    <div className="mt-6 h-[1px] w-10 bg-gold/30 group-hover:w-24 mx-auto transition-all duration-700" />
                  </div>
                </motion.button>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="detail"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              className="flex-1 flex flex-col glass-night border border-gold/20 p-12 relative overflow-hidden"
            >
              {/* Bouton Retour Premium */}
              <button 
                onClick={() => setSelected(null)}
                className="absolute top-8 left-8 flex items-center gap-6 text-gold/40 hover:text-gold transition-all group z-30"
              >
                <div className="w-10 h-10 rounded-full border border-gold/10 flex items-center justify-center group-hover:border-gold/40 transition-all bg-night/40 backdrop-blur-md">
                  <ChevronLeft className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-[0.5em]">Retour au Codex</span>
              </button>

              <div className="relative z-10 h-full flex flex-col">
                {/* Institution Header Detail */}
                <div className="mb-10 text-center">
                  <span className="text-gold text-[10px] tracking-[1.2em] uppercase font-bold block mb-2">{selected.focus}</span>
                  <h2 className="text-6xl md:text-7xl font-headline text-white uppercase tracking-tighter mb-4 leading-none text-glow-gold">
                    {selected.name}
                  </h2>
                  <p className="text-silver/40 text-lg italic max-w-4xl mx-auto font-light leading-relaxed">
                    "{selected.desc}"
                  </p>
                </div>

                {/* Grille Panoramique Zero Scroll */}
                <div className="flex-1 flex items-center justify-center overflow-hidden">
                  <div className={`grid grid-cols-1 md:grid-cols-2 ${selected.roles.length > 4 ? 'lg:grid-cols-4' : 'lg:grid-cols-' + selected.roles.length} gap-4 w-full h-full max-h-[50vh]`}>
                    {selected.roles.map((role, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.08 }}
                        className="group/role flex flex-col p-6 bg-gold/[0.03] border border-gold/10 hover:border-gold/30 transition-all duration-500 overflow-hidden"
                      >
                        <span className="text-[10px] text-gold font-bold uppercase tracking-[0.4em] mb-4 border-b border-gold/20 pb-2 inline-block w-fit">
                          {role.rank}
                        </span>
                        
                        <h3 className="text-xl md:text-2xl text-white font-headline uppercase mb-4 group-hover/role:text-glow-gold transition-all duration-500">
                          {role.title}
                        </h3>
                        
                        <p className="text-silver/50 text-xs md:text-sm leading-relaxed italic font-light border-l border-gold/10 pl-4">
                          {role.function}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Icone Filigrane Géante */}
              <div className="absolute bottom-[-10%] right-[-5%] opacity-[0.03] pointer-events-none transition-all duration-1000 group-hover:scale-110">
                <selected.icon className="w-[500px] h-[500px] text-gold" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Signature Studio */}
      <footer className="flex-none pb-6 text-center z-10 opacity-30">
        <span className="text-[9px] text-gold/50 tracking-[0.8em] uppercase font-bold">
          OUTLAND STUDIOS — ARCHITECTURE ASGARM V2.0.1
        </span>
      </footer>
    </main>
  )
}
