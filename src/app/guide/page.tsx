"use client"

import React, { useState } from 'react'
import { Navigation } from '@/components/Navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRight } from 'lucide-react'

const institutions = [
  {
    id: "academie",
    name: "Académie d'Asgarm",
    focus: "ÉDUCATION & DISCIPLINE",
    desc: "L'élite intellectuelle et magique d'Asgarm. Ici, l'avenir du royaume est forgé dans la rigueur et la maîtrise des arts occultes.",
    roles: [
      { title: "DIRECTEUR D’ASGARM", rank: "HAUTE AUTORITÉ", function: "Souveraineté totale. Gestion du corps enseignant, validation des accréditations et arbitrage final des sanctions." },
      { title: "DIRECTEUR ADJOINT", rank: "COMMANDEMENT", function: "Coordination opérationnelle. Gestion des examens, supervision administrative et maintien de l'ordre général." },
      { title: "PROFESSEUR CONTRE LA MAGIE NOIRE", rank: "DÉFENSE", function: "Enseignement des protections. Autorisé à organiser des duels de défense et à sanctionner les abus de magie offensive." },
      { title: "PROFESSEUR DE CRÉATURES MAGIQUES", rank: "BESTIAIRE", function: "Étude des écosystèmes et dressage. Gestion des entités sauvages et sécurité des expéditions éducatives." },
      { title: "PROFESSEUR DE SORTILÈGES", rank: "CHARMES", function: "Théorie et pratique des enchantements. Certification des paliers de puissance magique des citoyens d'Asgarm." },
      { title: "PROFESSEUR D’ALCHIMIE / BOTANIQUE", rank: "PHARMACOPÉE", function: "Synthèse de potions et étude des plantes. Gestion des serres royales et de la sécurité chimique du royaume." },
      { title: "PROFESSEUR DE DIVINATION", rank: "PRÉSAGES", function: "Exploration des flux de l'Ether. Guidance des élèves dans la compréhension des signes et de leur destinée." },
      { title: "PROFESSEUR DE VOL", rank: "AÉRONAUTIQUE", function: "Maîtrise du pilotage de balais et montures. Surveillance des périmètres aériens et gestion des tournois de vol." },
      { title: "PROFESSEUR HISTOIRE DE LA MAGIE", rank: "ARCHIVES", function: "Étude des traités anciens et du passé d'Asgarm. Préservation de la chronologie et des racines du royaume." },
      { title: "PROFESSEUR DE MORPHOLOGIE", rank: "TRANSFORMATION", function: "Maîtrise de la théorie du corps magique. Enseignement des métamorphoses physiques et structurelles." },
      { title: "PROFESSEUR ASTROLOGIE", rank: "COSMOS", function: "Lecture des constellations et des flux stellaires. Rituels célestes et synchronisation avec les astres." },
      { title: "SURVEILLANT ASGARM", rank: "ORDRE", function: "Discipline des couloirs et rondes nocturnes. Application immédiate des sanctions et maintien de la paix académique." }
    ]
  },
  {
    id: "arcanes",
    name: "Conclave des Arcanes",
    focus: "JUSTICE & LÉGISLATION",
    desc: "Le garant de l'ordre public et de la loi régalienne d'Asgarm. Une structure de fer pour un royaume uni.",
    roles: [
      { title: "GRAND SORCIER DU CONCLAVE", rank: "LÉGISLATION", function: "Haute magistrature, rédaction du code législatif régalien et arbitrage des contentieux territoriaux." },
      { title: "MAÎTRE SORCIER DU CONCLAVE", rank: "ADMINISTRATION", function: "Architecture administrative, gestion des ressources publiques et coordination des services civils." },
      { title: "CONSEILLER DU CONCLAVE", rank: "DIPLOMATIE", function: "Expertise en médiation et stratégie légale inter-royaumes." },
      { title: "PROTECTEUR DU CONCLAVE", rank: "FORCE PUBLIQUE", function: "Maintien de la paix, application du droit constitutionnel et protection des intérêts vitaux." },
      { title: "GARDIEN DU CONCLAVE", rank: "VIGILANCE", function: "Sentinelle des frontières éthérées et surveillance des flux de magie." }
    ]
  },
  {
    id: "ombres",
    name: "Conclave des Ombres",
    focus: "ORDRE OCCULTE",
    desc: "La main invisible d'Asgarm. Renseignement, influence et protection absolue des secrets d'État du Trône.",
    roles: [
      { title: "GRAND SORCIER DES OMBRES", rank: "SOUVERAINETÉ", function: "Commandement suprême des réseaux clandestins. Gestion des archives secrètes et de l'influence politique." },
      { title: "MAÎTRE DES TÉNÈBRES", rank: "COMMANDEMENT", function: "Planification tactique des opérations d'infiltration et enseignement des arts interdits." },
      { title: "CONSEILLER OBSCUR", rank: "INFLUENCE", function: "Architecte de la manipulation politique et tissage des toiles de pouvoir." },
      { title: "PROTECTEUR DES OMBRES", rank: "OPÉRATIONS", function: "Exécution des directives royales silencieuses et neutralisation des menaces." },
      { title: "GARDIEN DES OMBRES", rank: "SÉCURITÉ", function: "Protecteur des artefacts de sang et des rituels occultes du royaume." }
    ]
  },
  {
    id: "royaute",
    name: "Royauté d'Asgarm",
    focus: "SOUVERAINETÉ SUPRÊME",
    desc: "Les architectes de la destinée. Ils règnent sur l'éther et la terre pour la grandeur et l'éternité d'Asgarm.",
    roles: [
      { title: "Le Monarque", rank: "SOUVERAIN", function: "Prise de décision géopolitique, arbitrage final du Conseil et incarnation vivante du trône d'Asgarm." },
      { title: "Haut Conseiller", rank: "INFLUENCE", function: "Expertise diplomatique, conseil stratégique direct et gestion des relations avec les grandes cités." }
    ]
  },
  {
    id: "clans",
    name: "Clans & Créatures",
    focus: "STRUCTURES SAUVAGES",
    desc: "Les forces tribales et les traditions ancestrales. La puissance brute de la nature alliée à la couronne d'Asgarm.",
    roles: [
      { title: "Chef de Clan / Alpha", rank: "LEADERSHIP", function: "Souveraineté territoriale sur les zones sauvages et maintien des traités de paix avec le trône." },
      { title: "Chaman Royal", rank: "SAGESSE", function: "Lien spirituel avec l'Ether pur et préservation des rituels naturels et des cycles de vie anciens." }
    ]
  },
  {
    id: "economie",
    name: "Économie & Services",
    focus: "PÔLE SOCIAL & COMMERCE",
    desc: "Le cœur battant du commerce citoyen. Ceux qui font vivre la cité et prospérer le patrimoine financier d'Asgarm.",
    roles: [
      { title: "Agent Patrimonial", rank: "FONCIER", function: "Administration du parc foncier royal, gestion de l'habitat citoyen et régularisation des baux." },
      { title: "Chroniqueur Royal", rank: "INFORMATION", function: "Investigation et diffusion des événements majeurs. Garantie de la vérité et de l'histoire citoyenne." },
      { title: "Grand Négociant", rank: "COMMERCE", function: "Gestion des flux de ressources critiques et approvisionnement des quartiers marchands d'Asgarm." }
    ]
  }
]

export default function GuidePage() {
  const [activeTab, setActiveTab] = useState(institutions[0].id)
  const activeInst = institutions.find(i => i.id === activeTab) || institutions[0]

  return (
    <main className="relative h-screen flex flex-col overflow-hidden bg-transparent">
      <Navigation />
      
      <div className="flex-1 flex pt-24 pb-4 px-6 gap-6 relative z-10 overflow-hidden">
        
        {/* Barre Latérale Épurée */}
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
                className={`group relative flex items-center justify-between p-4 transition-all duration-500 border ${
                  activeTab === inst.id 
                  ? 'bg-gold/10 border-gold/40' 
                  : 'bg-white/[0.01] border-white/5 hover:border-gold/20'
                }`}
              >
                <div className="text-left">
                  <span className={`text-[8px] tracking-[0.3em] uppercase block font-bold mb-1 ${activeTab === inst.id ? 'text-gold' : 'text-silver/20'}`}>
                    {inst.focus}
                  </span>
                  <span className={`text-xs font-bold uppercase tracking-[0.2em] ${activeTab === inst.id ? 'text-white' : 'text-silver/40 group-hover:text-silver/60'}`}>
                    {inst.name}
                  </span>
                </div>
                {activeTab === inst.id && (
                  <motion.div layoutId="active-nav" className="text-gold">
                    <ChevronRight className="w-4 h-4" />
                  </motion.div>
                )}
              </button>
            ))}
          </nav>

          <div className="mt-auto p-5 border border-gold/10 bg-gold/[0.02]">
            <p className="text-[8px] text-gold uppercase tracking-[0.4em] leading-relaxed font-bold text-center">
              Sélectionnez une institution pour consulter ses prérogatives et ses grades officiels
            </p>
          </div>
        </aside>

        {/* Zone de Contenu Principale */}
        <section className="flex-1 flex flex-col glass-night border border-gold/20 relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeInst.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col h-full p-12"
            >
              {/* En-tête de l'Institution */}
              <div className="mb-10 flex flex-col">
                <div className="flex items-center gap-4 mb-3">
                  <div className="h-[1px] w-8 bg-gold/40" />
                  <span className="text-gold text-[10px] tracking-[1em] uppercase font-bold">{activeInst.focus}</span>
                </div>
                <h2 className="text-6xl font-headline text-white uppercase tracking-tighter leading-none mb-6 text-glow-gold">
                  {activeInst.name}
                </h2>
                <p className="text-silver/50 text-base italic font-light border-l-2 border-gold/20 pl-6 leading-relaxed max-w-3xl">
                  "{activeInst.desc}"
                </p>
              </div>

              {/* Zone de défilement des grades */}
              <div className="flex-1 overflow-y-auto pr-4 custom-scrollbar pb-10">
                <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {activeInst.roles.map((role, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.03 }}
                      className="group/role flex flex-col p-6 bg-gold/[0.01] border border-gold/5 hover:border-gold/30 hover:bg-gold/[0.03] transition-all duration-500"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-[8px] text-gold/60 font-bold uppercase tracking-[0.5em] bg-gold/5 px-2 py-1">
                          {role.rank}
                        </span>
                      </div>
                      
                      <h3 className="text-lg text-white font-headline uppercase mb-3 group-hover/role:text-glow-gold transition-all duration-500 leading-tight">
                        {role.title}
                      </h3>
                      
                      <div className="h-[1px] w-8 bg-gold/20 mb-4 group-hover/role:w-full transition-all duration-700" />
                      
                      <p className="text-silver/40 text-[10px] leading-relaxed italic font-light">
                        {role.function}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </section>
      </div>

      <footer className="h-12 border-t border-gold/10 flex items-center justify-center bg-black/60 relative z-20">
        <span className="shine-text text-[9px] tracking-[0.8em] uppercase font-bold">
          CONCLAVE SUPRÊME — ÉQUILIBRE D'ASGARM V3.1
        </span>
      </footer>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(212, 175, 55, 0.1);
          border-radius: 10px;
        }
      `}</style>
    </main>
  )
}
