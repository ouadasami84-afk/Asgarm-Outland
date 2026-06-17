
"use client"

import React, { useState } from 'react'
import { Navigation } from '@/components/Navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft } from 'lucide-react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const regulationSections = [
  {
    id: "hrp",
    title: "Pacte HRP",
    subtitle: "INTÉGRITÉ TECHNIQUE",
    color: "from-sky-500/20 to-blue-600/5",
    accent: "text-sky-400",
    glow: "text-glow-sky",
    shineClass: "shine-text-blue",
    desc: "Lois fondamentales régissant le comportement communautaire, l'intégrité technique et la diffusion du contenu d'Asgarm.",
    chapters: [
      {
        title: "I. Comportement et Éthique Sociale",
        rules: [
          { name: "1.1 Respect Universel", desc: "Tout propos injurieux, raciste, sexiste, homophobe ou discriminant, quel que soit le support (In-Game, Discord, MP), entraînera un bannissement définitif immédiat sans mise en demeure." },
          { name: "1.2 Harcèlement et Malveillance", desc: "Le harcèlement moral ou sexuel est puni d'une radiation permanente. Nous appliquons une tolérance zéro pour toute forme de harcèlement, ciblé ou collectif." },
          { name: "1.3 Publicité et Parasitisme", desc: "La promotion de projets externes, le démarchage en MP ou le détournement de communauté sont strictement interdits et lourdement sanctionnés." },
          { name: "1.4 Image de la Souveraineté", desc: "Les citoyens d'Asgarm se doivent de maintenir une attitude digne sur les réseaux sociaux. Tout comportement nuisant gravement à la réputation d'Outland est passible de sanctions." }
        ]
      },
      {
        title: "II. Intégrité et Sécurité Technique",
        rules: [
          { name: "2.1 Exploitation de Failles", desc: "L'utilisation intentionnelle de bugs, de glitches de collision, de scripts ou de duplications est un motif de bannissement permanent. Signalez tout bug via ticket." },
          { name: "2.2 Logiciels Tiers et Tricherie", desc: "L'usage de cheats, macros, crosshairs externes, multi-box ou tout logiciel modifiant les fichiers du jeu ou offrant un avantage injuste est formellement interdit." },
          { name: "2.3 Double Compte et Dissimulation", desc: "L'usage de plusieurs comptes ou l'utilisation de VPN pour contourner une sanction ou masquer son identité technique est prohibé et entraîne la radiation de tous les comptes liés." },
          { name: "2.4 Transactions Hors-Cadre (RMT)", desc: "La vente ou l'achat d'objets, de monnaie éthérée ou de comptes contre de l'argent réel est strictement interdite et surveillée par la Haute Magistrature." }
        ]
      },
      {
        title: "III. Meta-Gaming et Flux de Diffusion",
        rules: [
          { name: "3.1 Mix-RP et Fusion d'Identités", desc: "Il est strictement interdit de mélanger des informations Hors-RP avec vos actions en jeu. Votre personnage ne possède que les connaissances acquises par ses propres sens en immersion." },
          { name: "3.2 Streamstalking et Infiltration", desc: "L'utilisation des flux de diffusion en direct pour localiser, espionner ou influencer un joueur est sanctionnée par un bannissement définitif immédiat." },
          { name: "3.3 Meta-Gaming en Direct", desc: "L'interaction avec le chat de diffusion ne doit jamais influencer vos décisions RP. Le diffuseur doit ignorer toute information avantageuse émanant de son audience." },
          { name: "3.4 Utilisation des Canaux HRP", desc: "L'usage du canal /me ou /do pour des informations non-visuelles ou pour forcer une scène sans laisser de réaction possible à l'autre partie est interdit." }
        ]
      },
      {
        title: "IV. Identité et Cohérence du Monde",
        rules: [
          { name: "4.1 Nomenclature de Prestige", desc: "Le nom doit être réaliste, noble et cohérent avec le lore médiéval-fantastique d'Asgarm. Les jeux de mots, noms de célébrités ou pseudonymes ridicules sont bannis." },
          { name: "4.2 Apparence et Cosmétiques", desc: "Votre tenue doit correspondre à votre statut social, votre métier et votre race. L'usage de skins non-immersifs, invisibles ou trolls est passible de radiation." },
          { name: "4.3 Background et Immigration", desc: "Chaque citoyen doit posséder une histoire cohérente validée. Le passé de votre personnage doit justifier logiquement ses compétences et son comportement actuel." }
        ]
      }
    ]
  },
  {
    id: "rp",
    title: "Décrets RP",
    subtitle: "IMMERSION & LORE",
    color: "from-gold/20 to-amber-600/5",
    accent: "text-gold",
    glow: "text-glow-gold",
    shineClass: "shine-text",
    desc: "Recueil des lois d'immersion régissant les interactions, les arcanes et la destinée des citoyens dans le royaume.",
    chapters: [
      {
        title: "I. Fondamentaux de l'Existence",
        rules: [
          { name: "1.1 Fear RP (Instinct de Survie)", desc: "Vous devez simuler une peur réelle face à une menace sérieuse. Votre vie est unique. On ne provoque pas une autorité armée ou un groupe supérieur en nombre sans protection." },
          { name: "1.2 Pain RP (Expression de la Souffrance)", desc: "Vous devez jouer vos blessures. Un impact de sort, une chute ou une blessure physique nécessite une réaction appropriée (cris, incapacité de courir, boitements)." },
          { name: "1.3 Win RP et Fair-Play", desc: "Le but n'est pas de gagner mais de créer une scène mémorable. Accepter la défaite, l'emprisonnement ou l'échec fait partie intégrante de l'excellence narrative." },
          { name: "1.4 Power-Gaming", desc: "Interdiction de réaliser des actions impossibles physiquement ou magiquement (ex: courir avec un objet massif, lancer des sorts sans concentration ou ignorer les limites éthérées)." }
        ]
      },
      {
        title: "II. L'Art des Arcanes et des Sorts",
        rules: [
          { name: "2.1 Temps d'Incantation et Focus", desc: "Chaque sortilège majeur nécessite un temps de concentration. Le spam de sorts sans RP verbal (formule) ou gestuel (baguette) est strictement prohibé." },
          { name: "2.2 Effets Subis et Contrôle", desc: "Si vous subissez un sort de contrôle (immobilisation, aveuglement, étourdissement), vous devez impérativement jouer l'effet jusqu'à sa dissipation totale par un tiers ou par le temps." },
          { name: "2.3 Magie Prohibée et Conséquences", desc: "L'usage de la magie noire ou du sang est un crime capital devant le Conclave. Son utilisation entraîne des conséquences RP définitives (Exil, Emprisonnement à vie ou Mort)." },
          { name: "2.4 Zones de Paix Sacrées", desc: "L'Académie et les sanctuaires royaux sont des zones de trêve absolue. Aucun combat offensif n'y est toléré, sous peine de bannissement IC immédiat par les Gardiens." }
        ]
      },
      {
        title: "III. Conflits, Justice et Destinée",
        rules: [
          { name: "3.1 Activités Criminelles", desc: "Limitées à deux actions majeures par jour par groupe (braquages, vols). Le vol d'objets uniques ou de reliques nécessite un dossier validé par le Conclave des Ombres." },
          { name: "3.2 Enlèvements et Séquestrations", desc: "La durée maximale d'un enlèvement est de 2 heures. Le motif doit être légitime (négociation, échange). Le harcèlement ou la torture gratuite sont interdits." },
          { name: "3.3 État de Coma (K.O.)", desc: "Interdiction totale de parler une fois au sol. Vous ne gardez aucun souvenir de la scène si vous n'êtes pas réanimé par un guérisseur sur le lieu même du conflit." },
          { name: "3.4 Character Kill (CK)", desc: "La mort définitive de votre personnage nécessite une validation de la Haute Administration. Le CK clôture l'histoire de votre personnage et réinitialise vos biens." }
        ]
      },
      {
        title: "IV. Vie Civile et Économie Éthérée",
        rules: [
          { name: "4.1 Arnaques et Escroqueries", desc: "Les arnaques financières sont plafonnées à 5000 pièces d'or. Les arnaques portant sur des reliques, des domaines fonciers ou des services de prestige sont interdites." },
          { name: "4.2 Emplois et Services Publics", desc: "Tout citoyen doit justifier d'une activité légale. Le travail clandestin pour des clans est traqué par les Protecteurs du Conclave des Arcanes." },
          { name: "4.3 Contrats de Travail Magiques", desc: "Les contrats signés en jeu ont une valeur juridique contraignante. Le non-respect entraîne des saisies de biens ou des travaux d'intérêt général par décret royal." }
        ]
      }
    ]
  },
  {
    id: "staff",
    title: "Code Staff",
    subtitle: "HAUTE MAGISTRATURE",
    color: "from-red-600/20 to-black/40",
    accent: "text-red-600",
    glow: "text-glow-red",
    shineClass: "shine-text-red",
    desc: "Protocoles, devoirs de réserve et obligations déontologiques de la haute direction et de la modération d'Asgarm.",
    chapters: [
      {
        title: "I. Déontologie et Exemplarité",
        rules: [
          { name: "1.1 Neutralité Absolue", desc: "Le membre du staff doit rester impartial en toutes circonstances. Aucun avantage, faveur ou passe-droit n'est accordé à un groupe, une faction ou un ami personnel." },
          { name: "1.2 Devoir de Réserve et Secret", desc: "Les informations confidentielles (événements à venir, dossiers techniques, logs de joueurs) ne doivent jamais être divulguées à des tiers sous peine de radiation immédiate." },
          { name: "1.3 Excellence du Roleplay", desc: "Un représentant de la Magistrature doit incarner la perfection du RP. Toute erreur de comportement est sanctionnée plus lourdement que pour un citoyen ordinaire." }
        ]
      },
      {
        title: "II. Protocoles de Sanction et Support",
        rules: [
          { name: "2.1 Pédagogie Avant Répression", desc: "Sauf faute grave ou toxicité, l'explication des règles et la médiation priment sur la sanction immédiate afin de favoriser l'apprentissage des nouveaux citoyens." },
          { name: "2.2 Faisceau de Preuves", desc: "Toute sanction (Avertissement, Kick, Bannissement) doit être justifiée par des logs, captures d'écran ou témoignages concordants archivés systématiquement." },
          { name: "2.3 Gestion des Doléances", desc: "Le staff doit répondre aux tickets avec courtoisie. Le spam de support ou l'irrespect envers un Magistrat est sanctionnable pour entrave au bon fonctionnement administratif." }
        ]
      },
      {
        title: "III. Animation et Maîtrise du Monde",
        rules: [
          { name: "3.1 Cohérence Narrative Royale", desc: "Les animateurs garantissent que chaque événement respecte scrupuleusement l'histoire millénaire d'Asgarm et l'équilibre fragile des puissances." },
          { name: "3.2 Gestion des Entités (PNJs)", desc: "Les personnages non-joueurs sont des outils d'immersion souverains. Ils ne doivent jamais être utilisés pour bloquer injustement la progression ou l'économie des citoyens." },
          { name: "3.3 Stabilité de l'Éther", desc: "La priorité absolue est la stabilité technique du royaume. Toute animation risquant de compromettre la fluidité d'Asgarm doit être soumise à validation technique préalable." }
        ]
      }
    ]
  }
]

export default function ReglementPage() {
  const [selectedSection, setSelectedSection] = useState<string | null>(null)
  const [hoveredSection, setHoveredSection] = useState<string | null>(null)
  
  const currentSection = regulationSections.find(s => s.id === selectedSection)

  return (
    <main className="relative min-h-screen flex flex-col bg-transparent overflow-hidden">
      <Navigation />
      
      <div className="relative z-10 flex-1 flex flex-col pt-24 max-w-full w-full h-screen overflow-hidden">
        
        <AnimatePresence mode="wait">
          {!selectedSection ? (
            <motion.div
              key="selection"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.6 }}
              className="flex-1 flex h-full"
            >
              {regulationSections.map((section) => (
                <button
                  key={section.id}
                  onMouseEnter={() => setHoveredSection(section.id)}
                  onMouseLeave={() => setHoveredSection(null)}
                  onClick={() => setSelectedSection(section.id)}
                  className={`relative flex-1 flex flex-col items-center justify-center p-12 transition-all duration-700 ease-in-out border-r border-white/5 last:border-0 ${
                    hoveredSection && hoveredSection !== section.id ? 'opacity-40 scale-95' : 'opacity-100'
                  }`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-b ${section.color} opacity-0 pointer-events-none transition-opacity duration-1000`} />
                  
                  <motion.div 
                    animate={{ 
                      opacity: hoveredSection === section.id ? 0.2 : 0.05,
                      scale: hoveredSection === section.id ? 1.2 : 1
                    }}
                    className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-white/10 blur-[120px] rounded-full pointer-events-none`} 
                  />

                  <div className="relative z-20 text-center max-w-md w-full flex flex-col items-center">
                    <div className="flex items-center justify-center gap-4 mb-6">
                      <div className="h-[1px] w-8 bg-white/10" />
                      <span className={`${section.accent} text-[10px] tracking-[0.8em] uppercase font-bold`}>{section.subtitle}</span>
                      <div className="h-[1px] w-8 bg-white/10" />
                    </div>
                    <h2 className={`text-6xl font-headline uppercase tracking-tighter mb-8 leading-none ${section.shineClass}`}>
                      {section.title}
                    </h2>
                    <p className="text-silver/40 italic text-base leading-relaxed mb-12 opacity-0 lg:opacity-100 transition-opacity">
                      {section.desc}
                    </p>
                    <div className="inline-block px-10 py-4 border border-white/10 text-white text-[9px] font-bold uppercase tracking-[0.4em] hover:bg-white hover:text-black transition-all duration-500">
                      Consulter le Codex
                    </div>
                  </div>
                </button>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="content"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.5 }}
              className="flex-1 flex flex-col px-12 pb-12 overflow-y-auto custom-scrollbar"
            >
              <div className="max-w-[1600px] mx-auto w-full pt-12">
                <button 
                  onClick={() => setSelectedSection(null)}
                  className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors mb-12 group w-fit"
                >
                  <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.4em]">Retour au Codex d'Asgarm</span>
                </button>

                <div className="flex flex-col lg:flex-row gap-20 items-start">
                  <div className="lg:w-1/3 lg:sticky lg:top-32">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="h-[1px] w-8 bg-white/10" />
                      <span className={`text-[10px] font-bold uppercase tracking-[0.8em] ${currentSection?.accent}`}>{currentSection?.subtitle}</span>
                    </div>
                    <h2 className={`text-7xl font-headline uppercase tracking-tighter mb-8 leading-none ${currentSection?.shineClass}`}>
                      {currentSection?.title}
                    </h2>
                    <p className="text-silver/50 text-xl italic font-light leading-relaxed border-l border-white/10 pl-8 mb-12">
                      {currentSection?.desc}
                    </p>
                    <div className="p-8 bg-black/40 border border-white/5 shadow-2xl relative overflow-hidden text-center">
                      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
                      <p className="text-silver/40 text-[10px] uppercase tracking-[0.2em] leading-relaxed italic font-bold">
                        LA CONNAISSANCE DE CES DÉCRETS EST IMPÉRATIVE POUR TOUT CITOYEN. LE CONCLAVE SUPRÊME VEILLE À LEUR APPLICATION STRICTE.
                      </p>
                    </div>
                  </div>

                  <div className="flex-1">
                    <Accordion type="single" collapsible className="w-full space-y-6">
                      {currentSection?.chapters.map((chapter, i) => (
                        <AccordionItem 
                          key={i} 
                          value={`chapter-${i}`}
                          className="border border-white/5 bg-white/[0.02] px-8 rounded-none overflow-hidden hover:bg-white/[0.04] transition-all duration-500"
                        >
                          <AccordionTrigger className="hover:no-underline py-8">
                            <span className="text-2xl font-headline text-white uppercase tracking-tight text-left">
                              {chapter.title}
                            </span>
                          </AccordionTrigger>
                          <AccordionContent className="pb-8">
                            <div className="grid grid-cols-1 gap-4 pt-4">
                              {chapter.rules.map((rule, j) => (
                                <div key={j} className="p-6 bg-black/40 border border-white/5 group hover:border-white/20 transition-all duration-500">
                                  <div className="flex items-center gap-4 mb-3">
                                    <div className={`w-1 h-1 rounded-full bg-current ${currentSection?.accent}`} />
                                    <h4 className="text-sm font-bold text-white uppercase tracking-widest">{rule.name}</h4>
                                  </div>
                                  <p className="text-silver/40 text-sm italic font-light leading-relaxed pl-5">
                                    {rule.desc}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <footer className="mt-auto h-24 flex flex-col items-center justify-center relative z-20 border-t border-white/5 bg-black/40">
          <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-gold/10 to-transparent mb-4" />
          <span className="shine-text text-[10px] tracking-[0.8em] uppercase font-bold text-center">
            CONCLAVE SUPRÊME — ÉQUILIBRE D'ASGARM
          </span>
        </footer>
      </div>

      <style jsx global>{`
        .text-glow-sky { text-shadow: 0 0 25px rgba(14, 165, 233, 0.4); }
        .text-glow-gold { text-shadow: 0 0 25px rgba(212, 175, 55, 0.4); }
        .text-glow-red { text-shadow: 0 0 25px rgba(220, 38, 38, 0.4); }
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255, 255, 255, 0.1); border-radius: 10px; }
      `}</style>
    </main>
  )
}
