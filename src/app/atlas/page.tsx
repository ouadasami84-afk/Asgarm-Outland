
"use client"

import React, { useState } from 'react'
import { Navigation } from '@/components/Navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Globe, Users, Shield, Newspaper, Wine, Wrench, House, Briefcase, History, MapPin } from 'lucide-react'

const kingdoms = [
  {
    name: "Bastion d'Aethel",
    race: "Royaume des Humains",
    desc: "Bâti sur l'ambition et la résilience, le royaume des Humains, connu sous le nom de Bastion d'Aethel, est une forteresse de magie et de courage. Après avoir reçu le don de la magie des Elfes, les humains ont érigé des cités majestueuses aux flèches scintillantes, protégées par de puissants enchantements. Leurs armées, combinant la maîtrise de l'acier et des arcanes, sont le premier rempart d'Asgarm contre les ténèbres, un symbole d'espoir et de détermination face à l'adversité.",
    color: "from-blue-500/20 to-sky-500/5",
    accent: "text-sky-400",
    glow: "text-glow-blue",
    border: "border-sky-500/20"
  },
  {
    name: "Forêt d'Argent",
    race: "Royaume des Elfes & Elfes de Lune",
    desc: "Au cœur des forêts ancestrales se niche la Forêt d'Argent, le royaume commun des Elfes et des Elfes de Lune. C'est une cité où la nature et la magie ne font qu'un, avec des habitations tissées dans les arbres vivants et des chemins illuminés par la lueur des étoiles. Tandis que les Elfes cultivent la magie de la vie, les Elfes de Lune veillent en secret depuis leurs sanctuaires ombragés, étudiant les arcanes obscurs pour maintenir l'équilibre. Ensemble, ils forment une communauté harmonieuse et sage, gardiens des plus anciens secrets d'Asgarm.",
    color: "from-emerald-600/20 to-green-600/5",
    accent: "text-emerald-400",
    glow: "text-glow-green",
    border: "border-emerald-500/20"
  },
  {
    name: "Citadelle de Fer",
    race: "Royaume des Nains",
    desc: "Creusée dans les racines des montagnes, la Citadelle de Fer est le cœur vibrant du royaume des Nains. C'est un chef-d'œuvre d'ingénierie et d'artisanat, où le grondement des forges ne s'arrête jamais. Depuis qu'ils ont accepté la magie, les Nains ont appris à insuffler le pouvoir des arcanes dans leurs créations, forgeant des armes et des artefacts d'une puissance inégalée. Leurs vastes salles souterraines, éclairées par des veines de mithril et des cristaux enchantés, abritent un peuple fier et travailleur, pilier de la défense d'Asgarm.",
    color: "from-amber-600/20 to-orange-600/5",
    accent: "text-amber-500",
    glow: "text-glow-amber",
    border: "border-amber-500/20"
  },
  {
    name: "Domaine Carmin",
    race: "Royaume des Vampires",
    desc: "Le Domaine Carmin, un château gothique aux tours élancées perçant les nuages, est le siège du pouvoir des Vampires. Autrefois un lieu de crainte, il est devenu un sanctuaire inattendu de guérison. Grâce à leur maîtrise de la magie du sang, les Vampires ont transformé leur sombre réputation, devenant les plus grands guérisseurs du royaume. Leurs salles élégantes et leurs bibliothèques remplies de savoirs occultes témoignent d'une noblesse ancienne et d'un engagement surprenant à préserver la vie, prouvant que la lumière peut naître même dans les ombres les plus profondes.",
    color: "from-red-600/20 to-black/40",
    accent: "text-red-600",
    glow: "text-glow-red",
    border: "border-red-900/40"
  }
]

const peoples = [
  {
    name: "Humains",
    trait: "Ambition & Résilience",
    desc: "Les humains d'Asgarm, un peuple à la peau beige ou grisée et au visage diversifié, vivaient aux côtés des races anciennes. Face à une invasion de sorciers noirs d'un autre monde qui menaçait d'anéantir Asgarm, la reine des Elfes, Melfetys, leur fit don de la magie. Poussés par leur ambition et leur capacité d'adaptation, les humains apprirent vite. Leur courte espérance de vie les pousse à accomplir de grandes choses, et avec la magie désormais canalisée par des baguettes, ils devinrent des défenseurs cruciaux de leur monde."
  },
  {
    name: "Elfes",
    trait: "Créateurs de la Magie",
    desc: "Créateurs de la magie, les Elfes d'Asgarm sont une race ancienne et gracieuse à la peau verdoyante, profondément liée à l'essence même de leur monde. Lorsque des sorciers noirs menèrent Asgarm au bord de l'extinction, la reine Melfetys partagea le don de la magie avec les autres races, leur enseignant que son pouvoir devait être canalisé par une baguette pour unir les peuples."
  },
  {
    name: "Elfes de Lune",
    trait: "Gardiens de l'Ombre",
    desc: "Les Elfes de Lune, à la peau bleutée, sont une branche secrète de l'espèce elfique et les créateurs de la magie obscure. Eux seuls possédaient la volonté et la sagesse nécessaires pour contenir son pouvoir corrupteur. Agissant comme des gardiens silencieux, leur maîtrise fut un atout paradoxal mais essentiel pour protéger l'équilibre d'Asgarm lors de la grande guerre."
  },
  {
    name: "Nains",
    trait: "Maîtres de la Forge",
    desc: "Les Nains, peuple à la peau grisée, sont les maîtres des montagnes et des artisans inégalés. Lorsqu'ils acceptèrent le don de la reine Melfetys, ils mirent leur savoir-faire au service de la magie, devenant les plus grands fabricants de baguettes. Leurs créations armèrent l'ensemble de l'Alliance et firent d'eux un rempart inébranlable."
  },
  {
    name: "Vampires",
    trait: "Sacrifice & Guérison",
    desc: "Créatures de la nuit à la peau noire comme l'ébène ou rouge comme le sang, les Vampires furent longtemps craints. En canalisant leur maîtrise innée du sang à travers des baguettes, they devinrent les plus grands guérisseurs du champ de bataille, soignant les blessures que nulle autre magie ne pouvait refermer."
  }
]

const clans = [
  {
    name: "Clan des Lycans",
    trait: "Instinct Sauvage",
    desc: "Descendants d'une ancienne malédiction, les Lycans sont des métamorphes capables de prendre la forme de loups terrifiants. Vivant en meutes soudées dans les forêts profonde, ils vénèrent la lune et suivent un code d'honneur sauvage. Leur force brute en fait des alliés redoutables ou des ennemis mortels."
  },
  {
    name: "Clan des Centaures",
    trait: "Sagesse Stellaire",
    desc: "Gardiens des plaines sauvages, les Centaures sont un peuple fier et nomade, mi-hommes, mi-chevaux. Maîtres de l'arc et de la lance, ils sont des astronomes accomplis qui lisent leur avenir dans les étoiles. Ils protègent farouchement leur territoire et leurs traditions séculaires."
  },
  {
    name: "Clan des Ours",
    trait: "Force Primordiale",
    desc: "Puissants et solitaires, les membres du Clan des Ours sont des métamorphes capables de prendre la forme d'ours imposants. Gardiens des montagnes, ils tirent leur force de la nature brute et vivent selon des rites anciens, respectant la puissance de la terre."
  },
  {
    name: "Clan des Serpents",
    trait: "Secrets & Illusions",
    desc: "Insaisissables et énigmatiques, les membres du Clan des Serpents sont des êtres hybrides, mi-humains, mi-serpents. Maîtres des poisons et des illusions, ils vivent dans des sanctuaires cachés. Leur société est complexe et secrète, crainte pour leur magie subtile."
  },
  {
    name: "Clan des Ogres",
    trait: "Puissance Brute",
    desc: "Brutaux et territoriaux, les Ogres sont une force de la nature vivant en petites tribus dans des vallées reculées. Leur force est légendaire et leur appétit insatiable. Bien que primitifs, ils constituent une puissance territoriale majeure dans les zones reculées."
  }
]

const jobs = [
  {
    name: "Journal Asgarm",
    trait: "VÉRITÉ & INFORMATION",
    icon: Newspaper,
    desc: "Devenez le pouls du monde magique. En tant que journaliste pour le Journal d'Asgarm, vous êtes au cœur de l'information. Enquêtez sur les derniers décrets du Conclave, couvrez les tournois de duel, interviewez les alchimistes renommés et dévoilez les mystères qui se cachent dans les ombres. Votre plume a le pouvoir de façonner l'opinion publique, de révéler la vérité ou de semer la discorde. Un métier pour les curieux, les audacieux et ceux qui croient que la connaissance est la plus grande des magies."
  },
  {
    name: "Taverne Magique",
    trait: "HOSPITALITÉ & RÉSEAUX",
    icon: Wine,
    desc: "La Taverne Magique est plus qu'un simple lieu pour boire une Bièraubeurre. C'est un carrefour où se croisent aventuriers, érudits, mages noirs repentis et protecteurs du Conclave. En tant que tavernier, vous êtes le gardien de ce sanctuaire. Vous servez des boissons enchantées, écoutez les rumeurs les plus folles, et savez désamorcer une bagarre d'un simple sortilège de nettoyage. C'est un rôle social crucial, où l'hospitalité et la discrétion sont vos meilleurs atouts."
  },
  {
    name: "Bricolifus",
    trait: "INGÉNIERIE & VOLTIGE",
    icon: Wrench,
    desc: "Les balais ne volent pas tout seuls... enfin, pas toujours de manière optimale. Chez Bricolifus, vous êtes un ingénieur de la voltige, un artiste de l'aérodynamisme magique. Vous réparez les balais endommagés, améliorez leurs performances avec des charmes de vitesse, installez des selles en cuir de dragon pour plus de confort, et personnalisez-les avec des peintures qui changent de couleur. Que ce soit pour un cours de vol ou une course clandestine, tous les sorciers comptent sur votre expertise pour fendre les cieux en toute sécurité."
  },
  {
    name: "La Maison Magique",
    trait: "IMMOBILIER & PATRIMOINE",
    icon: House,
    desc: "À Asgarm, une maison n'est pas qu'un tas de briques. C'est un sanctuaire protégé par des runes, une demeure avec des pièces qui changent de place ou un appartement avec vue sur un lac enchanté. En tant qu'agent de La Maison Magique, vous ne vendez pas des propriétés, vous trouvez des foyers. Vous guidez les sorciers à travers des maisons hantées, des appartements cachés derrière des cascades et des manoirs qui n'apparaissent qu'à la pleine lune. Un métier qui demande un sens du commerce, une connaissance des sorts de protection et un talent pour le spectaculaire."
  }
]

export default function AtlasPage() {
  const [activeTab, setActiveTab] = useState<'kingdoms' | 'peoples' | 'clans' | 'jobs'>('kingdoms')

  return (
    <main className="relative min-h-screen flex flex-col bg-transparent overflow-hidden">
      <Navigation />
      
      <div className="relative z-10 flex-1 flex flex-col pt-36 px-12 pb-24 max-w-[1600px] mx-auto w-full">
        
        <header className="mb-32 relative text-center flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            className="flex flex-col items-center"
          >
            <div className="flex items-center gap-6 mb-8">
              <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
              <span className="text-gold text-[11px] tracking-[1.5em] uppercase font-bold text-glow-gold">Archives Impériales d'Asgarm</span>
              <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
            </div>
            
            <h1 className="text-9xl font-headline text-white uppercase tracking-tighter leading-none mb-12">
              <span className="shine-text">Atlas</span> <br /> 
              <span className="shine-text italic font-light ml-24 block">Universel</span>
            </h1>

            <p className="text-silver/40 text-2xl italic font-light max-w-3xl leading-relaxed border-l border-gold/10 pl-12 mx-auto">
              "Voyagez à travers les fondations d'un monde où chaque pierre, chaque forêt et chaque château raconte l'histoire de notre souveraineté."
            </p>
          </motion.div>
        </header>

        {/* Navigation */}
        <div className="flex justify-center gap-4 md:gap-8 mb-32 border-b border-white/5 pb-12 flex-wrap">
          {[
            { id: 'kingdoms', label: 'Royaumes', icon: Globe },
            { id: 'peoples', label: 'Peuples', icon: Users },
            { id: 'clans', label: 'Clans', icon: Shield },
            { id: 'jobs', label: 'Métiers', icon: Briefcase }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`group relative flex items-center gap-4 px-8 py-6 transition-all duration-700 ${
                activeTab === tab.id ? 'text-white' : 'text-silver/30 hover:text-silver/60'
              }`}
            >
              <tab.icon className={`w-3 h-3 transition-colors ${activeTab === tab.id ? 'text-gold' : 'text-current'}`} />
              <span className="text-[10px] font-bold uppercase tracking-[0.8em]">{tab.label}</span>
              {activeTab === tab.id && (
                <motion.div 
                  layoutId="active-underline"
                  className="absolute bottom-0 left-0 w-full h-[1px] bg-gold shadow-[0_0_15px_rgba(212,175,55,0.4)]"
                />
              )}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1"
          >
            {activeTab === 'kingdoms' && (
              <div className="grid grid-cols-1 gap-32">
                {kingdoms.map((k, i) => (
                  <motion.div
                    key={k.name}
                    initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className={`flex flex-col items-stretch gap-20 group relative overflow-hidden`}
                  >
                    <div className="flex-1 relative z-10 flex flex-col justify-center py-16 px-20 bg-black/40 border border-white/5 hover:border-gold/20 transition-all duration-1000 shadow-3xl">
                      <div className={`absolute inset-0 bg-gradient-to-br ${k.color} opacity-0 group-hover:opacity-100 transition-opacity duration-1000`} />
                      
                      <div className="relative z-20">
                        <div className="flex items-center gap-4 mb-10">
                          <MapPin className={`w-3 h-3 ${k.accent}`} />
                          <span className={`text-[10px] font-bold uppercase tracking-[0.6em] ${k.accent}`}>{k.race}</span>
                        </div>
                        
                        <h3 className={`text-8xl font-headline text-white uppercase mb-12 leading-none ${k.glow}`}>
                          {k.name}
                        </h3>
                        
                        <div className={`h-[1px] w-24 bg-white/10 mb-12 group-hover:w-full transition-all duration-1000`} />
                        
                        <p className="text-silver/50 text-xl leading-relaxed italic font-light border-l border-white/5 pl-12 max-w-4xl">
                          {k.desc}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {activeTab === 'peoples' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {peoples.map((p, i) => (
                  <motion.div
                    key={p.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="group p-12 bg-white/[0.02] border border-white/5 hover:border-gold/30 hover:bg-white/[0.04] transition-all duration-1000 flex flex-col relative"
                  >
                    <span className="text-[9px] text-gold/40 font-bold uppercase tracking-[0.5em] mb-6 block">{p.trait}</span>
                    <h3 className="text-4xl font-headline text-white uppercase mb-8 group-hover:text-gold transition-all duration-700">{p.name}</h3>
                    <div className="h-[1px] w-12 bg-gold/20 mb-10 group-hover:w-full transition-all duration-1000" />
                    <p className="text-silver/40 text-lg leading-relaxed italic font-light">
                      {p.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            )}

            {activeTab === 'clans' && (
              <div className="flex flex-col gap-24">
                <section className="p-16 bg-black/60 border border-gold/10 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
                  <div className="flex items-center gap-6 mb-12">
                    <History className="w-6 h-6 text-gold" />
                    <h2 className="text-4xl font-headline text-white uppercase tracking-tight">Candidature au Clan</h2>
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className="flex flex-col gap-4 p-8 border border-white/5 hover:border-gold/20 transition-all">
                      <span className="text-gold text-[10px] font-bold uppercase tracking-[0.4em]">Etape 01 — Dossier</span>
                      <p className="text-silver/50 italic text-sm font-light leading-relaxed">Un dossier complet doit être rédigé, présentant l'histoire, les objectifs et la structure de votre groupe.</p>
                    </div>
                    <div className="flex flex-col gap-4 p-8 border border-white/5 hover:border-gold/20 transition-all">
                      <span className="text-gold text-[10px] font-bold uppercase tracking-[0.4em]">Etape 02 — Soumission</span>
                      <p className="text-silver/50 italic text-sm font-light leading-relaxed">Ce dossier doit être envoyé par ticket sur notre serveur Discord officiel pour validation magistrale.</p>
                    </div>
                    <div className="flex flex-col gap-4 p-8 border border-white/5 hover:border-gold/20 transition-all">
                      <span className="text-gold text-[10px] font-bold uppercase tracking-[0.4em]">Etape 03 — Effectif</span>
                      <p className="text-silver/50 italic text-sm font-light leading-relaxed">Un minimum de 15 joueurs actifs est requis pour que la candidature soit prise en compte par le Conclave.</p>
                    </div>
                  </div>
                </section>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {clans.map((c, i) => (
                    <motion.div
                      key={c.name}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      className="group p-12 bg-white/[0.01] border border-white/5 hover:border-gold/40 hover:bg-white/[0.03] transition-all duration-1000 flex flex-col relative overflow-hidden"
                    >
                      <Users className="absolute -top-4 -right-4 w-24 h-24 text-white/[0.02] group-hover:text-gold/[0.05] transition-colors" />
                      <span className="text-[9px] text-gold/40 font-bold uppercase tracking-[0.5em] mb-6 block">{c.trait}</span>
                      <h3 className="text-4xl font-headline text-white uppercase mb-8 group-hover:text-gold transition-all duration-700">{c.name}</h3>
                      <div className="h-[1px] w-12 bg-gold/20 mb-10 group-hover:w-full transition-all duration-1000" />
                      <p className="text-silver/40 text-lg leading-relaxed italic font-light">
                        {c.desc}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'jobs' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {jobs.map((job, i) => (
                  <motion.div
                    key={job.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="group p-12 bg-white/[0.02] border border-white/5 hover:border-gold/30 hover:bg-white/[0.04] transition-all duration-1000 flex flex-col relative overflow-hidden"
                  >
                    <job.icon className="absolute -top-4 -right-4 w-32 h-32 text-white/[0.02] group-hover:text-gold/[0.05] transition-all duration-1000" />
                    <div className="relative z-10">
                      <span className="text-[9px] text-gold/60 font-bold uppercase tracking-[0.5em] mb-6 block bg-gold/5 w-fit px-3 py-1 border border-gold/10">
                        {job.trait}
                      </span>
                      <h3 className="text-5xl font-headline text-white uppercase mb-8 group-hover:text-glow-gold transition-all duration-700">
                        {job.name}
                      </h3>
                      <div className="h-[1px] w-12 bg-gold/20 mb-10 group-hover:w-full transition-all duration-1000" />
                      <p className="text-silver/50 text-base leading-relaxed italic font-light border-l border-white/5 pl-8">
                        {job.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        <footer className="mt-48 h-32 flex flex-col items-center justify-center relative z-20">
          <div className="h-[1px] w-32 bg-gradient-to-r from-transparent via-gold/30 to-transparent mb-12" />
          <span className="shine-text text-[10px] tracking-[0.8em] uppercase font-bold text-center">
            CONCLAVE SUPRÊME — ÉQUILIBRE D'ASGARM
          </span>
        </footer>
      </div>

      <style jsx global>{`
        .text-glow-blue { text-shadow: 0 0 25px rgba(14, 165, 233, 0.4); }
        .text-glow-green { text-shadow: 0 0 25px rgba(16, 185, 129, 0.4); }
        .text-glow-amber { text-shadow: 0 0 25px rgba(245, 158, 11, 0.4); }
        .text-glow-red { text-shadow: 0 0 25px rgba(220, 38, 38, 0.4); }
        .text-glow-gold { text-shadow: 0 0 25px rgba(212, 175, 55, 0.4); }
      `}</style>
    </main>
  )
}
