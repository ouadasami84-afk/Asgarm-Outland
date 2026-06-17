
"use client"

import React, { useState } from 'react'
import { Navigation } from '@/components/Navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRight, Shield, Book, Globe, Briefcase, History, Sparkles, MapPin, CheckCircle2, AlertCircle, UserCircle } from 'lucide-react'

const institutions = [
  {
    id: "premiers-pas",
    name: "Premiers Pas",
    focus: "IMMERSION & IDENTITÉ",
    icon: Sparkles,
    desc: "Votre réveil dans Asgarm commence par le choix de votre essence. Votre identité physique doit refléter votre lignée pour maintenir l'équilibre visuel du royaume.",
    mission: "Définir votre race, respecter votre carnation imposée et obtenir votre premier artefact de canalisation.",
    rights: [
      "Choisir librement sa race parmi les 5 lignées majeures",
      "Recevoir une baguette magique d'initiation personnalisée",
      "Accéder aux zones publiques du Bastion d'Aethel",
      "Pratiquer les sorts de confort et de lumière"
    ],
    prohibitions: [
      "Porter une carnation (couleur de peau) non-conforme à sa race",
      "Utiliser des sorts offensifs sans provocation légitime",
      "Pratiquer la magie sans baguette devant des représentants officiels"
    ],
    roles: [
      { title: "RACE HUMAINE", rank: "BEIGE OU NOIR", function: "L'ambition et la résilience. Votre peau doit être impérativement de teinte beige ou noire." },
      { title: "RACE NAINE", rank: "NOIR OU ROUGE", function: "La force de la terre et des forges. Votre peau doit impérativement être de teinte noire ou rouge." },
      { title: "RACE ELFE", rank: "VERT", function: "L'harmonie et la magie de la vie. Votre peau doit impérativement être de teinte verte." },
      { title: "RACE ELFE DE LUNE", rank: "BLEU", function: "La sagesse des astres et de l'ombre. Votre peau doit impérativement être de teinte bleue." },
      { title: "RACE VAMPIRE", rank: "BLANC TRÈS CLAIR", function: "La noblesse éternelle et la magie du sang. Votre peau doit impérativement être d'un blanc très clair." }
    ]
  },
  {
    id: "academie",
    name: "Académie d'Asgarm",
    focus: "FORMATION & SAVOIR",
    icon: Book,
    desc: "L'institution souveraine pour tout étudiant. Ici, la trêve est absolue pour favoriser l'apprentissage des arcanes.",
    mission: "Maîtriser la théorie magique, progresser dans les grades académiques et respecter le corps enseignant.",
    rights: [
      "Étudier les grimoires restreints de la bibliothèque royale",
      "Participer aux duels d'entraînement supervisés",
      "Passer les examens pour monter en grade hiérarchique",
      "Accéder aux laboratoires d'alchimie avancés"
    ],
    prohibitions: [
      "Usage de la magie noire ou du sang (Exclusion immédiate)",
      "Violence physique ou verbale envers un Professeur",
      "Sortie non-autorisée des dortoirs pendant le couvre-feu"
    ],
    roles: [
      { title: "DIRECTEUR D’ASGARM", rank: "SOUVERAINETÉ", function: "Gestion totale de l'institution et arbitrage final des sanctions disciplinaires." },
      { title: "DIRECTEUR ADJOINT", rank: "COMMANDEMENT", function: "Bras droit du directeur, chargé de la coordination opérationnelle et des examens." },
      { title: "CORPS ENSEIGNANT", rank: "PROFESSEURS", function: "Transmission du savoir (Défense, Créatures, Sortilèges, Alchimie, Divination, Vol, Histoire, Morphologie, Astrologie)." },
      { title: "SURVEILLANCE", rank: "GARDIENS", function: "Maintien du calme dans les couloirs et application immédiate des retenues." }
    ]
  },
  {
    id: "arcanes",
    name: "Conclave des Arcanes",
    focus: "JUSTICE & ÉQUILIBRE",
    icon: Shield,
    desc: "Le garant de l'ordre public d'Asgarm. Toute pratique magique déviante est traquée, jugée et sanctionnée.",
    mission: "Faire respecter les décrets royaux, traquer les mages noirs et protéger les citoyens des menaces occultes.",
    rights: [
      "Procéder à des arrestations pour usage de magie prohibée",
      "Rendre des jugements lors de contentieux territoriaux",
      "Réquisitionner des ressources pour la sécurité du trône",
      "Surveiller les flux d'éther pour prévenir les failles"
    ],
    prohibitions: [
      "Abus de pouvoir ou corruption financière",
      "Violence gratuite lors des interrogatoires officiels",
      "Pratiquer soi-même la magie de l'ombre ou du sang"
    ],
    roles: [
      { title: "GRAND SORCIER", rank: "HAUTE MAGISTRATURE", function: "Architecte des lois et pouvoir d'arbitrage suprême sur Asgarm." },
      { title: "MAÎTRE SORCIER", rank: "ARCHITECTURE CIVILE", function: "Gestionnaire de l'infrastructure administrative et des services publics." },
      { title: "CONSEILLER", rank: "DIPLOMATIE", function: "Expert en médiation inter-royaumes et stratégie légale." },
      { title: "PROTECTEUR", rank: "ORDRE PUBLIC", function: "Puissance répressive chargée de la neutralisation des sorciers déviants." },
      { title: "GARDIEN", rank: "VIGILANCE", function: "Sentinelle des frontières et détection des infiltrations occultes." }
    ]
  },
  {
    id: "ombres",
    name: "Conclave des Ombres",
    focus: "PUISSANCE & LIBERTÉ",
    icon: History,
    desc: "L'ordre clandestin pour ceux qui refusent les chaînes de la justice conventionnelle et cherchent la souveraineté occulte.",
    mission: "Étudier les arts interdits, infiltrer les institutions de lumière et servir le Royaume du Mal.",
    rights: [
      "Apprendre et manipuler la magie noire et la magie du sang",
      "Mener des opérations de sabotage et d'influence politique",
      "Accéder aux reliques interdites scellées par les Arcanes",
      "Répartir l'influence de l'ombre dans les royaumes"
    ],
    prohibitions: [
      "Trahir le secret de l'Ordre ou révéler l'identité des maîtres",
      "Échouer lors d'une mission d'infiltration critique",
      "S'allier officiellement avec les Protecteurs des Arcanes"
    ],
    roles: [
      { title: "GRAND SORCIER DES OMBRES", rank: "SOUVERAINETÉ", function: "Maître absolu des réseaux clandestins et gardien des secrets d'État noirs." },
      { title: "MAÎTRE DES TÉNÈBRES", rank: "STRATÈGE", function: "Planification des opérations d'infiltration et enseignement occulte." },
      { title: "CONSEILLER OBSCUR", rank: "MANIPULATION", function: "Architecte de l'influence politique et tissage des toiles de pouvoir." },
      { title: "PROTECTEUR DES OMBRES", rank: "EXÉCUTEUR", function: "Neutralisation chirurgicale des cibles gênantes pour l'Ordre." },
      { title: "GARDIEN DES OMBRES", rank: "VEILLEUR", function: "Protecteur des artefacts de sang et des rituels occultes." }
    ]
  },
  {
    id: "economie",
    name: "Économie & Métiers",
    focus: "SOCIAL & COMMERCE",
    icon: Briefcase,
    desc: "Le moteur civil du royaume. C'est ici que vous construisez votre influence matérielle et votre réseau social.",
    mission: "Offrir des services d'excellence, stimuler les flux de ressources et enrichir la vie quotidienne d'Asgarm.",
    rights: [
      "Vendre des marchandises et services à prix libre",
      "Rédiger des contrats magiques à valeur juridique",
      "Ouvrir un établissement commercial de prestige",
      "Mener des enquêtes journalistiques d'envergure"
    ],
    prohibitions: [
      "Réaliser des arnaques financières supérieures à 5000 pièces d'or",
      "Vendre des produits prohibés (Poisons, Reliques noires) sans licence",
      "Travailler clandestinement pour des organisations criminelles"
    ],
    roles: [
      { title: "JOURNAL ASGARM", rank: "INFORMATION", function: "Documenter les faits, rédiger les annales et influencer l'opinion publique." },
      { title: "TAVERNE MAGIQUE", rank: "HOSPITALITÉ", function: "Gestion des sanctuaires sociaux et des réseaux d'information discrets." },
      { title: "BRICOLIFUS", rank: "INGÉNIERIE", function: "Maintenance et optimisation des équipements de vol (Balais, Montures)." },
      { title: "LA MAISON MAGIQUE", rank: "IMMOBILIER", function: "Gestion foncière et sécurisation runique des domaines privés." }
    ]
  },
  {
    id: "clans",
    name: "Clans & Territoires",
    focus: "STRUCTURES SAUVAGES",
    icon: Globe,
    desc: "Pour ceux qui choisissent la vie en dehors des cités, régie par l'instinct de meute et l'honneur du sang.",
    mission: "Protéger les territoires sauvages, préserver les rites ancestraux et assurer la survie de la lignée.",
    rights: [
      "Régner sur les zones sauvages hors juridiction urbaine",
      "Mener des chasses et expéditions territoriales",
      "Défendre l'honneur du clan par la force si nécessaire",
      "Pratiquer des rituels de magie primordiale"
    ],
    prohibitions: [
      "Incursion armée dans les capitales sans déclaration de guerre",
      "Massacre inutile de créatures protégées par le Conclave",
      "Non-respect de la hiérarchie interne (Alpha/Chaman)"
    ],
    roles: [
      { title: "CHEF DE CLAN (ALPHA)", rank: "SOUVERAIN", function: "Commandement stratégique et garant de la cohésion du groupe sauvage." },
      { title: "CHAMAN ROYAL", rank: "SAGESSE", function: "Lien spirituel avec l'éther pur et préservation des cycles naturels." },
      { title: "GUERRIER DE MEUTE", rank: "FORCE", function: "Protection active du territoire et exécution des ordres de l'Alpha." }
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
        
        {/* Barre Latérale */}
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
        </aside>

        {/* Zone de Contenu */}
        <section className="flex-1 flex flex-col glass-night border border-gold/20 relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeInst.id}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col h-full p-12 overflow-y-auto custom-scrollbar"
            >
              {/* En-tête */}
              <div className="mb-12 flex flex-col">
                <span className="text-gold text-[10px] tracking-[1em] uppercase font-bold mb-3">{activeInst.focus}</span>
                <h2 className="text-6xl font-headline text-white uppercase tracking-tighter leading-none mb-6 text-glow-gold">
                  {activeInst.name}
                </h2>
                <p className="text-silver/50 text-base italic font-light border-l-2 border-gold/20 pl-6 leading-relaxed max-w-3xl mb-8">
                  "{activeInst.desc}"
                </p>
                
                <div className="p-6 bg-gold/5 border border-gold/10 inline-block w-fit">
                  <span className="text-gold text-[10px] font-bold uppercase tracking-[0.3em] block mb-2">VOTRE MISSION</span>
                  <p className="text-silver/80 text-sm italic">{activeInst.mission}</p>
                </div>
              </div>

              {/* Droits & Interdits */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-emerald-500 mb-6">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="text-xs font-bold uppercase tracking-[0.4em]">Autorisé / Droits</span>
                  </div>
                  {activeInst.rights.map((r, i) => (
                    <div key={i} className="p-4 bg-white/[0.02] border border-white/5 flex items-start gap-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/40 mt-1.5" />
                      <p className="text-silver/40 text-[11px] leading-relaxed italic">{r}</p>
                    </div>
                  ))}
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-red-500 mb-6">
                    <AlertCircle className="w-5 h-5" />
                    <span className="text-xs font-bold uppercase tracking-[0.4em]">Interdit / Prohibé</span>
                  </div>
                  {activeInst.prohibitions.map((p, i) => (
                    <div key={i} className="p-4 bg-white/[0.02] border border-white/5 flex items-start gap-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-500/40 mt-1.5" />
                      <p className="text-silver/40 text-[11px] leading-relaxed italic">{p}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Grades */}
              <div className="mb-10">
                <h3 className="text-2xl font-headline text-white uppercase tracking-tight mb-8">Hiérarchie & Spécificités</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {activeInst.roles.map((role, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="group/role p-8 bg-white/[0.02] border border-white/5 hover:border-gold/30 transition-all duration-500"
                    >
                      <span className="text-[9px] text-gold/60 font-bold uppercase tracking-[0.5em] block mb-4">{role.rank}</span>
                      <h4 className="text-xl text-white font-headline uppercase mb-4 leading-tight group-role:text-glow-gold">{role.title}</h4>
                      <div className="h-[1px] w-8 bg-gold/20 mb-6 group-role:w-full transition-all duration-700" />
                      <p className="text-silver/40 text-[11px] leading-relaxed italic">{role.function}</p>
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
        .custom-scrollbar::-webkit-scrollbar { width: 3px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(212, 175, 55, 0.1); border-radius: 10px; }
      `}</style>
    </main>
  )
}
