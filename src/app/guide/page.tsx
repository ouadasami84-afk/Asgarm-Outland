
"use client"

import React, { useState } from 'react'
import { Navigation } from '@/components/Navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRight, Shield, Book, Globe, Briefcase, History, Sparkles, MapPin, CheckCircle2, AlertCircle } from 'lucide-react'

const institutions = [
  {
    id: "premiers-pas",
    name: "Premiers Pas",
    focus: "IMMERSION INITIALE",
    icon: Sparkles,
    desc: "Votre voyage commence ici. Avant de solliciter le Conclave, vous devez comprendre les bases de votre éveil magique.",
    mission: "S'intégrer dans le tissu social d'Asgarm et obtenir ses outils fondamentaux.",
    rights: [
      "Obtenir une baguette magique personnalisée",
      "Être réparti dans l'une des quatre Maisons",
      "Utiliser les sorts de base (Lumière, Déplacement mineur)",
      "Accéder aux quartiers publics du Bastion"
    ],
    prohibitions: [
      "Lancer des sorts offensifs sur des civils",
      "Pénétrer dans les zones restreintes du Conclave sans escorte",
      "Pratiquer la magie sans baguette en public"
    ],
    roles: [
      { title: "ARRIVÉE AU BASTION", rank: "IMMIGRANT", function: "Point d'apparition. Validation de l'identité et réception du laissez-passer citoyen." },
      { title: "ÉVEIL DE LA BAGUETTE", rank: "CITOYEN ÉVEILLÉ", function: "Rencontre avec le fabricant de baguettes pour lier son âme à l'éther." },
      { title: "CÉRÉMONIE DES MAISONS", rank: "NOVICE", function: "Évaluation du tempérament pour l'attribution d'une Maison ancestrale." }
    ]
  },
  {
    id: "academie",
    name: "Académie d'Asgarm",
    focus: "FORMATION & DISCIPLINE",
    icon: Book,
    desc: "L'institution souveraine pour tout étudiant. Ici, la trêve est absolue pour favoriser le savoir.",
    mission: "Apprendre la théorie magique, réussir ses examens et progresser dans la hiérarchie académique.",
    rights: [
      "Étudier les grimoires de la bibliothèque royale",
      "Participer aux duels d'entraînement supervisés",
      "Solliciter l'aide d'un Professeur pour l'apprentissage d'un sort",
      "Accéder aux serres d'alchimie"
    ],
    prohibitions: [
      "Combats offensifs non autorisés dans l'enceinte",
      "Usage de la magie noire ou du sang (Exclusion immédiate)",
      "Disrespect envers le corps enseignant",
      "Sortie des dortoirs après le couvre-feu"
    ],
    roles: [
      { title: "DIRECTEUR D’ASGARM", rank: "HAUTE AUTORITÉ", function: "Souveraineté totale sur l'institution et arbitrage final des sanctions." },
      { title: "DIRECTEUR ADJOINT", rank: "COMMANDEMENT", function: "Coordination des examens et supervision administrative." },
      { title: "PROFESSEUR DE DÉFENSE", rank: "SÉCURITÉ", function: "Expert en contre-sorts et boucliers." },
      { title: "MAÎTRE DES CRÉATURES", rank: "BESTIAIRE", function: "Étude et sécurité lors des expéditions en zones reculées." },
      { title: "SURVEILLANT GÉNÉRAL", rank: "ORDRE", function: "Garant du calme et de l'assiduité dans les couloirs." }
    ]
  },
  {
    id: "arcanes",
    name: "Conclave des Arcanes",
    focus: "JUSTICE & LÉGISLATION",
    icon: Shield,
    desc: "Le garant de l'ordre public. Toute pratique déviante est traquée et sanctionnée.",
    mission: "Faire respecter les décrets royaux, protéger les citoyens et éradiquer la corruption magique.",
    rights: [
      "Procéder à des arrestations pour usage de magie interdite",
      "Rendre des jugements lors des contentieux territoriaux",
      "Réquisitionner des ressources pour la sécurité du royaume",
      "Surveiller les flux d'éther"
    ],
    prohibitions: [
      "Abus de pouvoir ou corruption",
      "Violence gratuite lors des interrogatoires",
      "Ignorer un appel à l'aide citoyen",
      "Pratiquer soi-même la magie de l'ombre"
    ],
    roles: [
      { title: "GRAND SORCIER", rank: "HAUTE MAGISTRATURE", function: "Architecte du Code Législatif et pouvoir d'arbitrage final." },
      { title: "MAÎTRE SORCIER", rank: "ARCHITECTURE CIVILE", function: "Gestion de l'infrastructure et des ressources éthérées." },
      { title: "CONSEILLER", rank: "DIPLOMATIE", function: "Expert en médiation et stratégie légale inter-royaumes." },
      { title: "PROTECTEUR", rank: "ORDRE PUBLIC", function: "Puissance répressive légitime chargée de la neutralisation des déviants." },
      { title: "GARDIEN", rank: "VIGILANCE", function: "Sentinelle des frontières et détection des influences occultes." }
    ]
  },
  {
    id: "ombres",
    name: "Conclave des Ombres",
    focus: "ORDRE OCCULTE",
    icon: History,
    desc: "Pour ceux qui refusent les chaînes de la justice conventionnelle et cherchent la puissance absolue.",
    mission: "Étudier les arts interdits, infiltrer les institutions et servir le Royaume du Mal.",
    rights: [
      "Apprendre et utiliser la magie noire et du sang",
      "Mener des opérations clandestines",
      "Manipuler l'influence politique dans l'ombre",
      "Accéder aux reliques interdites"
    ],
    prohibitions: [
      "Trahir le secret de l'Ordre (Mort RP)",
      "Échouer lors d'une mission d'infiltration majeure",
      "S'allier ouvertement avec les Arcanes"
    ],
    roles: [
      { title: "GRAND SORCIER DES OMBRES", rank: "SOUVERAINETÉ", function: "Maître des réseaux clandestins et gardien des secrets d'État." },
      { title: "MAÎTRE DES TÉNÈBRES", rank: "COMMANDEMENT", function: "Stratège des opérations d'infiltration et instructeur occulte." },
      { title: "CONSEILLER OBSCUR", rank: "INFLUENCE", function: "Architecte de la manipulation politique pour la domination de l'ombre." },
      { title: "PROTECTEUR DES OMBRES", rank: "EXÉCUTION", function: "Exécuteur d'élite chargé de neutraliser les menaces arcaniques." },
      { title: "GARDIEN DES RELIQUES", rank: "SÉCURITÉ", function: "Protecteur des artefacts de sang et des sources de mana noir." }
    ]
  },
  {
    id: "economie",
    name: "Économie & Métiers",
    focus: "PÔLE SOCIAL & COMMERCE",
    icon: Briefcase,
    desc: "Le moteur civil. C'est ici que vous construisez votre influence matérielle.",
    mission: "Offrir des services de qualité, stimuler le commerce et enrichir la vie sociale d'Asgarm.",
    rights: [
      "Vendre des marchandises et services à prix libre",
      "Rédiger des contrats magiques contraignants",
      "Ouvrir un établissement commercial (Taverne, Boutique)",
      "Mener des enquêtes journalistiques"
    ],
    prohibitions: [
      "Arnaques financières supérieures à 5000 pièces d'or",
      "Vente de produits illégaux (Poisons, Magie noire) sans licence",
      "Travail dissimulé pour des organisations criminelles"
    ],
    roles: [
      { title: "JOURNAL ASGARM", rank: "CHRONIQUEUR", function: "Documenter les événements et façonner l'opinion publique." },
      { title: "TAVERNE MAGIQUE", rank: "HOSPITALITÉ", function: "Gestion des sanctuaires sociaux et des réseaux d'information." },
      { title: "BRICOLIFUS", rank: "INGÉNIERIE", function: "Maintenance et optimisation des balais et équipements de vol." },
      { title: "LA MAISON MAGIQUE", rank: "PATRIMOINE", function: "Gestion foncière et sécurisation des domaines runiques." }
    ]
  },
  {
    id: "clans",
    name: "Clans & Créatures",
    focus: "STRUCTURES SAUVAGES",
    icon: Globe,
    desc: "Pour ceux qui choisissent la vie en dehors des cités, régie par l'instinct et l'honneur.",
    mission: "Protéger le territoire sauvage, préserver les rites ancestraux et assurer la survie de la meute.",
    rights: [
      "Régner sur les zones sauvages hors juridiction urbaine",
      "Pratiquer des rituels de magie primordiale",
      "Mener des chasses et expéditions territoriales",
      "Défendre l'honneur du clan par la force"
    ],
    prohibitions: [
      "Incursion armée dans les capitales sans motif de guerre",
      "Massacre gratuit de créatures protégées",
      "Non-respect des traditions hiérarchiques internes"
    ],
    roles: [
      { title: "CHEF DE CLAN / ALPHA", rank: "SOUVERAIN SAUVAGE", function: "Leadership territorial et garant de la cohésion du groupe." },
      { title: "CHAMAN ROYAL", rank: "SAGESSE", function: "Lien spirituel avec l'éther pur et préservation des cycles naturels." }
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
                <h3 className="text-2xl font-headline text-white uppercase tracking-tight mb-8">Hiérarchie Institutionnelle</h3>
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
