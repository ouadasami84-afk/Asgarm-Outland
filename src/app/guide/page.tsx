
"use client"

import React, { useState } from 'react'
import { Navigation } from '@/components/Navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRight } from 'lucide-react'

const institutions = [
  {
    id: "academie",
    name: "Académie d'Asgarm",
    focus: "FORMATION & DISCIPLINE",
    desc: "Le point d'entrée obligatoire pour tout nouveau citoyen. Ici, vous apprenez à canaliser l'Ether. La zone est strictement protégée : aucun combat offensif n'est autorisé. Votre priorité est l'obtention de votre première accréditation magique.",
    roles: [
      { title: "DIRECTEUR D’ASGARM", rank: "HAUTE AUTORITÉ", function: "Souveraineté totale sur le cursus. Arbitre final des sanctions et gardien de la neutralité pédagogique." },
      { title: "DIRECTEUR ADJOINT", rank: "COMMANDEMENT", function: "Coordination des examens et gestion administrative des nouveaux arrivants." },
      { title: "PROFESSEUR DE DÉFENSE", rank: "SÉCURITÉ", function: "Enseignement des boucliers. Seul autorisé à superviser des duels d'entraînement au sein de l'école." },
      { title: "MAÎTRE DES CRÉATURES", rank: "BESTIAIRE", function: "Étude des écosystèmes. Responsable de la sécurité lors des expéditions en zone sauvage." },
      { title: "CERTIFICATEUR DE SORTILÈGES", rank: "CHARMES", function: "Valide la puissance magique des citoyens. Sans son sceau, l'usage de sorts avancés est prohibé." },
      { title: "SURVEILLANT GÉNÉRAL", rank: "ORDRE", function: "Garant du calme et de l'assiduité. Application immédiate des mesures disciplinaires en cas de chahut." }
    ]
  },
  {
    id: "arcanes",
    name: "Conclave des Arcanes",
    focus: "JUSTICE & LÉGISLATION",
    desc: "Le garant de l'ordre public. En tant que citoyen, vous êtes soumis à leurs décrets. Toute pratique de magie noire ou de sang est traquée et sanctionnée par l'emprisonnement ou l'exil définitif.",
    roles: [
      { title: "GRAND SORCIER DU CONCLAVE", rank: "LÉGISLATION", function: "Rédacteur du code pénal magique. Pouvoir d'arbitrage sur les litiges territoriaux." },
      { title: "CONSEILLER MAGISTRAL", rank: "DIPLOMATIE", function: "Médiateur entre les royaumes. Assure la pérennité des alliances sacrées." },
      { title: "PROTECTEUR DU CONCLAVE", rank: "FORCE PUBLIQUE", function: "Incarne la puissance répressive. Chargé des enquêtes et de l'arrestation des mages déviants." },
      { title: "GARDIEN DES FRONTIÈRES", rank: "VIGILANCE", function: "Surveille les flux d'éther pour prévenir toute infiltration d'énergie occulte." }
    ]
  },
  {
    id: "ombres",
    name: "Conclave des Ombres",
    focus: "ORDRE OCCULTE",
    desc: "Pour ceux qui refusent les chaînes de la justice conventionnelle. Une structure clandestine offrant la liberté d'étudier les arts interdits, mais au risque de devenir un paria aux yeux de la loi d'Asgarm.",
    roles: [
      { title: "GRAND SORCIER DES OMBRES", rank: "SOUVERAINETÉ", function: "Commandement des réseaux d'influence. Gardien des secrets d'État du Royaume du Mal." },
      { title: "MAÎTRE DES TÉNÈBRES", rank: "INFILTRATION", function: "Stratège des opérations silencieuses et instructeur en arts magiques prohibés." },
      { title: "GARDIEN DES RELIQUES", rank: "SÉCURITÉ", function: "Protecteur des artefacts de sang et des sources de puissance non-arcaniques." }
    ]
  },
  {
    id: "royaute",
    name: "Royauté d'Asgarm",
    focus: "SOUVERAINETÉ SUPRÊME",
    desc: "La direction politique et artistique du royaume. Ils décident du destin global d'Outland. Le respect envers la couronne est la fondation de votre citoyenneté.",
    roles: [
      { title: "Le Monarque", rank: "SOUVERAIN", function: "Prise de décision géopolitique majeure et incarnation vivante du trône d'Asgarm." },
      { title: "Haut Conseiller", rank: "INFLUENCE", function: "Expertise diplomatique directe auprès du Trône et gestion des grandes cités." }
    ]
  },
  {
    id: "economie",
    name: "Économie & Services",
    focus: "PÔLE SOCIAL & COMMERCE",
    desc: "Le moteur civil du royaume. Ici, vous construisez votre vie matérielle. De la gestion de votre demeure à l'information publique, ces services structurent le quotidien des citoyens d'Asgarm.",
    roles: [
      { title: "CHRONIQUEUR ROYAL", rank: "INFORMATION", function: "Journalisme d'investigation (Journal Asgarm). Façonne l'opinion et documente les tournois et décrets." },
      { title: "GRAND TAVERNIER", rank: "HOSPITALITÉ", function: "Gestion des sanctuaires sociaux (Taverne Magique). Point névralgique des rumeurs et du commerce de proximité." },
      { title: "INGÉNIEUR VOLTIGE", rank: "INGÉNIERIE", function: "Maintenance et optimisation des balais (Bricolifus). Expert en aérodynamisme et charmes de vitesse." },
      { title: "AGENT PATRIMONIAL", rank: "FONCIER", function: "Gestion de l'habitat et des domaines (La Maison Magique). Trouve et sécurise les foyers protégés par runes." },
      { title: "GRAND NÉGOCIANT", rank: "COMMERCE", function: "Régulation des flux de ressources critiques et approvisionnement des quartiers marchands." }
    ]
  },
  {
    id: "clans",
    name: "Clans & Créatures",
    focus: "STRUCTURES SAUVAGES",
    desc: "Pour les citoyens choisissant la vie en dehors des cités fortifiées. Une organisation basée sur la force de la meute et le respect des lois de la nature brute.",
    roles: [
      { title: "Chef de Clan / Alpha", rank: "LEADERSHIP", function: "Souveraineté territoriale sur les zones sauvages et maintien des traités avec la couronne." },
      { title: "Chaman Royal", rank: "SAGESSE", function: "Lien spirituel avec l'Ether pur. Préservation des cycles de vie ancestraux." }
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
                className={`group relative flex items-center justify-between p-4 transition-all duration-300 border ${
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
              Sélectionnez une institution pour consulter ses prérogatives
            </p>
          </div>
        </aside>

        {/* Zone de Contenu Principale */}
        <section className="flex-1 flex flex-col glass-night border border-gold/20 relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeInst.id}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.3 }}
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
                      transition={{ delay: i * 0.02 }}
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
          CONCLAVE SUPRÊME — ÉQUILIBRE D'ASGARM
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
