
"use client"

import React, { useState } from 'react'
import { Navigation } from '@/components/Navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRight, Shield, Book, Globe, Briefcase, History, Sparkles, MapPin } from 'lucide-react'

const institutions = [
  {
    id: "premiers-pas",
    name: "Premiers Pas",
    focus: "IMMERSION INITIALE",
    icon: Sparkles,
    desc: "Votre voyage commence ici. En tant que nouveau citoyen d'Asgarm, vous devez comprendre les bases de notre monde avant de solliciter le Conclave. Cette section vous guide de votre apparition initiale jusqu'à votre première maîtrise de l'Ether.",
    roles: [
      { title: "ARRIVÉE AU BASTION", rank: "IMMIGRATION", function: "Point d'apparition initial. Présentez-vous aux autorités pour valider votre identité et recevoir votre laissez-passer." },
      { title: "ÉVEIL DE LA BAGUETTE", rank: "ARCANES", function: "Rendez-vous chez le fabricant de baguettes pour découvrir le bois et le cœur qui résonnent avec votre âme." },
      { title: "CÉRÉMONIE DES MAISONS", rank: "DESTINÉE", function: "L'Académie évaluera votre tempérament pour vous attribuer une Maison. Ce choix définira vos futurs alliés." },
      { title: "PREMIER SORTILÈGE", rank: "PROFICIENCE", function: "Apprenez le sort de base 'Lux' pour éclairer votre chemin. C'est la preuve de votre éveil magique." }
    ]
  },
  {
    id: "academie",
    name: "Académie d'Asgarm",
    focus: "FORMATION & DISCIPLINE",
    icon: Book,
    desc: "L'institution souveraine pour tout étudiant. Ici, la trêve est absolue : aucun combat offensif n'est toléré. Votre priorité est l'obtention de vos accréditations magiques pour progresser dans la hiérarchie du royaume.",
    roles: [
      { title: "DIRECTEUR D’ASGARM", rank: "HAUTE AUTORITÉ", function: "Souveraineté totale sur le cursus. Arbitre final des sanctions et gardien de la neutralité pédagogique de l'institution." },
      { title: "DIRECTEUR ADJOINT", rank: "COMMANDEMENT", function: "Coordination des examens de passage et gestion administrative des dossiers de chaque étudiant." },
      { title: "PROFESSEUR DE DÉFENSE", rank: "SÉCURITÉ", function: "Expert en boucliers. Seul autorisé à superviser les duels d'entraînement au sein des remparts de l'école." },
      { title: "MAÎTRE DES CRÉATURES", rank: "BESTIAIRE", function: "Étude des écosystèmes magiques. Responsable de la sécurité des élèves lors des expéditions en zones reculées." },
      { title: "CERTIFICATEUR DE SORTILÈGES", rank: "CHARMES", function: "Valide la puissance magique. Sans son sceau officiel, l'usage de sortilèges avancés est strictement prohibé." },
      { title: "SURVEILLANT GÉNÉRAL", rank: "ORDRE", function: "Garant du calme et de l'assiduité dans les couloirs. Application immédiate des mesures disciplinaires en cas de chahut." }
    ]
  },
  {
    id: "arcanes",
    name: "Conclave des Arcanes",
    focus: "JUSTICE & LÉGISLATION",
    icon: Shield,
    desc: "Le garant de l'ordre public et de la justice magique. En tant que citoyen, vous êtes soumis à leurs décrets. Toute pratique de magie noire ou de sang est traquée et lourdement sanctionnée.",
    roles: [
      { title: "GRAND SORCIER DU CONCLAVE", rank: "LÉGISLATION", function: "Rédacteur du code pénal magique. Possède le pouvoir d'arbitrage suprême sur les litiges territoriaux." },
      { title: "MAÎTRE SORCIER", rank: "ADMINISTRATION", function: "Gérant de l'infrastructure civile globale et coordinateur des services publics du royaume d'Asgarm." },
      { title: "CONSEILLER MAGISTRAL", rank: "DIPLOMATIE", function: "Médiateur officiel entre les royaumes. Assure la pérennité des alliances sacrées entre les peuples." },
      { title: "PROTECTEUR DU CONCLAVE", rank: "FORCE PUBLIQUE", function: "Incarne la puissance répressive légitime. Chargé des enquêtes criminelles et de l'arrestation des déviants." },
      { title: "GARDIEN DES FRONTIÈRES", rank: "VIGILANCE", function: "Surveille les flux d'éther pour prévenir toute infiltration d'énergie occulte ou de magie interdite." }
    ]
  },
  {
    id: "ombres",
    name: "Conclave des Ombres",
    focus: "ORDRE OCCULTE",
    icon: History,
    desc: "Pour ceux qui refusent les chaînes de la justice conventionnelle. Cette structure clandestine offre la liberté d'étudier les arts interdits, mais au risque de devenir un paria aux yeux de la loi d'Asgarm.",
    roles: [
      { title: "GRAND SORCIER DES OMBRES", rank: "SOUVERAINETÉ", function: "Maître des réseaux clandestins et gardien des secrets d'État du Royaume du Mal." },
      { title: "MAÎTRE DES TÉNÈBRES", rank: "INFILTRATION", function: "Stratège des opérations silencieuses et instructeur en arts magiques prohibés pour les initiés." },
      { title: "CONSEILLER OBSCUR", rank: "INFLUENCE", function: "Architecte de la manipulation politique travaillant dans l'ombre pour asseoir la domination de l'Ombre." },
      { title: "PROTECTEUR DES OMBRES", rank: "EXÉCUTION", function: "Exécuteur d'élite chargé de neutraliser les menaces arcaniques avant qu'elles n'entravent nos plans." },
      { title: "GARDIEN DES RELIQUES", rank: "SÉCURITÉ", function: "Protecteur des artefacts de sang et des sources de puissance non-arcaniques du royaume." }
    ]
  },
  {
    id: "economie",
    name: "Économie & Services",
    focus: "PÔLE SOCIAL & COMMERCE",
    icon: Briefcase,
    desc: "Le moteur civil du royaume. Ici, vous construisez votre vie matérielle et sociale. Ces services structurent le quotidien et permettent aux citoyens de s'épanouir hors du champ de bataille.",
    roles: [
      { title: "CHRONIQUEUR ROYAL", rank: "JOURNAL ASGARM", function: "Journaliste d'investigation. Façonne l'opinion publique et documente les grands événements du royaume." },
      { title: "GRAND TAVERNIER", rank: "TAVERNE MAGIQUE", function: "Gestion des sanctuaires sociaux. Point névralgique des rumeurs, de l'hospitalité et du commerce de proximité." },
      { title: "INGÉNIEUR VOLTIGE", rank: "BRICOLIFUS", function: "Expert en maintenance de balais. Optimise les performances de vol et répare les structures aérodynamiques." },
      { title: "AGENT PATRIMONIAL", rank: "LA MAISON MAGIQUE", function: "Gestion de l'habitat et des domaines. Trouve et sécurise les foyers protégés par des runes anciennes." }
    ]
  },
  {
    id: "royaute",
    name: "Royauté d'Asgarm",
    focus: "SOUVERAINETÉ SUPRÊME",
    icon: MapPin,
    desc: "La direction politique et artistique du royaume. Le respect envers la couronne est la fondation de votre citoyenneté. Ils maintiennent l'équilibre entre les peuples d'Aethel, de Fer et du Domaine Carmin.",
    roles: [
      { title: "LE MONARQUE", rank: "SOUVERAIN", function: "Prise de décision géopolitique majeure et incarnation vivante du trône et de l'unité d'Asgarm." },
      { title: "HAUT CONSEILLER", rank: "INFLUENCE", function: "Expertise diplomatique directe auprès du Trône et gestion administrative des grandes cités fortifiées." }
    ]
  },
  {
    id: "clans",
    name: "Clans & Créatures",
    focus: "STRUCTURES SAUVAGES",
    icon: Globe,
    desc: "Pour les citoyens choisissant la vie en dehors des cités. Une organisation basée sur la force de la meute et le respect des lois de la nature brute, agissant selon leurs propres traditions ancestrales.",
    roles: [
      { title: "CHEF DE CLAN / ALPHA", rank: "LEADERSHIP", function: "Souveraineté territoriale sur les zones sauvages et garant de la cohésion de son groupe face aux menaces." },
      { title: "CHAMAN ROYAL", rank: "SAGESSE", function: "Lien spirituel avec l'Ether pur. Préservation des cycles de vie ancestraux et des rituels de la terre mère." }
    ]
  }
]

export default function GuidePage() {
  const [activeTab, setActiveTab] = useState(institutions[0].id)
  const activeInst = institutions.find(i => i.id === activeTab) || institutions[0]

  return (
    <main className="relative min-h-screen flex flex-col overflow-hidden bg-transparent">
      <Navigation />
      
      <div className="flex-1 flex pt-24 pb-4 px-6 gap-6 relative z-10 overflow-hidden">
        
        {/* Barre Latérale Institutionnelle */}
        <aside className="w-80 flex flex-col gap-2 flex-none">
          <div className="mb-6 pl-4">
            <span className="text-gold text-[9px] tracking-[0.8em] uppercase font-bold block mb-1">Codex Arrivant</span>
            <h1 className="text-3xl font-headline text-white uppercase tracking-tighter">ARCHIVES ASGARM</h1>
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
                <div className="text-left flex items-center gap-4">
                  <inst.icon className={`w-4 h-4 ${activeTab === inst.id ? 'text-gold' : 'text-silver/20'}`} />
                  <div>
                    <span className={`text-[8px] tracking-[0.3em] uppercase block font-bold mb-1 ${activeTab === inst.id ? 'text-gold' : 'text-silver/20'}`}>
                      {inst.focus}
                    </span>
                    <span className={`text-xs font-bold uppercase tracking-[0.2em] ${activeTab === inst.id ? 'text-white' : 'text-silver/40 group-hover:text-silver/60'}`}>
                      {inst.name}
                    </span>
                  </div>
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
              Consultez les prérogatives pour une intégration souveraine
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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {activeInst.roles.map((role, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.02 }}
                      className="group/role flex flex-col p-8 bg-white/[0.02] border border-white/5 hover:border-gold/30 hover:bg-white/[0.04] transition-all duration-500 shadow-2xl"
                    >
                      <div className="flex items-center gap-3 mb-6">
                        <span className="text-[9px] text-gold/60 font-bold uppercase tracking-[0.5em] bg-gold/5 px-3 py-1 border border-gold/10">
                          {role.rank}
                        </span>
                      </div>
                      
                      <h3 className="text-xl text-white font-headline uppercase mb-4 group-role:text-glow-gold transition-all duration-500 leading-tight">
                        {role.title}
                      </h3>
                      
                      <div className="h-[1px] w-8 bg-gold/20 mb-6 group-role:w-full transition-all duration-700" />
                      
                      <p className="text-silver/40 text-[11px] leading-relaxed italic font-light">
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
