
"use client"

import React, { useState } from 'react'
import { Navigation } from '@/components/Navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Globe, Users, Shield, Castle, ChevronRight, BookOpen, Scroll, Users2 } from 'lucide-react'

const kingdoms = [
  {
    name: "Bastion d'Aethel",
    race: "Royaume des Humains",
    desc: "Bâti sur l'ambition et la résilience, le royaume des Humains est une forteresse de magie et de courage. Après avoir reçu le don de la magie des Elfes, les humains ont érigé des cités majestueuses aux flèches scintillantes, protégées par de puissants enchantements. Leurs armées, combinant la maîtrise de l'acier et des arcanes, sont le premier rempart d'Asgarm contre les ténèbres.",
    color: "from-blue-500/20 to-sky-500/5",
    accent: "text-sky-400",
    glow: "text-glow-blue"
  },
  {
    name: "Forêt d'Argent",
    race: "Royaume des Elfes",
    desc: "Au cœur des forêts ancestrales, c'est une cité où la nature et la magie ne font qu'un, avec des habitations tissées dans les arbres vivants et des chemins illuminés par la lueur des étoiles. Tandis que les Elfes cultivent la magie de la vie, les Elfes de Lune veillent en secret depuis leurs sanctuaires ombragés, étudiant les arcanes obscurs pour maintenir l'équilibre.",
    color: "from-emerald-600/20 to-green-600/5",
    accent: "text-emerald-400",
    glow: "text-glow-green"
  },
  {
    name: "Citadelle de Fer",
    race: "Royaume des Nains",
    desc: "Creusée dans les racines des montagnes, c'est un chef-d'œuvre d'ingénierie et d'artisanat où le grondement des forges ne s'arrête jamais. Les Nains ont appris à insuffler le pouvoir des arcanes dans leurs créations, forgeant des armes d'une puissance inégalée. Leurs salles souterraines, éclairées par des veines de mithril, abritent un peuple fier et travailleur.",
    color: "from-amber-600/20 to-orange-600/5",
    accent: "text-amber-500",
    glow: "text-glow-amber"
  },
  {
    name: "Domaine Carmin",
    race: "Royaume des Vampires",
    desc: "Un château gothique aux tours élancées perçant les nuages. Autrefois lieu de crainte, il est devenu un sanctuaire inattendu de guérison. Grâce à leur maîtrise de la magie du sang, les Vampires ont transformé leur sombre réputation, devenant les plus grands guérisseurs du royaume. Leurs salles élégantes témoignent d'une noblesse ancienne.",
    color: "from-red-600/20 to-black/40",
    accent: "text-red-600",
    glow: "text-glow-red"
  }
]

const peoples = [
  {
    name: "Humains",
    trait: "Ambition & Résilience",
    desc: "Un peuple à la peau beige ou grisée vivant aux côtés des races anciennes. Face à une invasion de sorciers noirs, la reine Melfetys leur fit don de la magie. Poussés par leur capacité d'adaptation, ils apprirent vite. Leur courte espérance de vie les pousse à accomplir de grandes choses, bâtissant des forteresses magiques pour sauver l'avenir d'Asgarm."
  },
  {
    name: "Elfes",
    trait: "Créateurs de la Magie",
    desc: "Une race ancienne et gracieuse à la peau verdoyante, liée à l'essence même de leur monde. Lorsque l'extinction menaça Asgarm, la reine Melfetys partagea le don de la magie, leur enseignant que son pouvoir devait être canalisé par une baguette pour unir les peuples."
  },
  {
    name: "Elfes de Lune",
    trait: "Gardiens des Arcanes Sombres",
    desc: "Branche secrète à la peau bleutée et créateurs de la magie obscure. Eux seuls possédaient la volonté nécessaire pour contenir son pouvoir corrupteur. Agissant comme des gardiens silencieux, leur maîtrise fut un atout paradoxal mais essentiel pour protéger l'équilibre."
  },
  {
    name: "Nains",
    trait: "Maîtres des Montagnes",
    desc: "Peuple à la peau grisée et artisans inégalés. Avec le don de la magie, ils mirent leur savoir-faire au service des arcanes, devenant les plus grands fabricants de baguettes. Leurs créations armèrent l'ensemble de l'Alliance."
  },
  {
    name: "Vampires",
    trait: "Guérisseurs de la Nuit",
    desc: "Créatures à la peau ébène ou rouge sang. Longtemps craints, ils révélèrent une facette inattendue : en canalisant leur maîtrise du sang, ils devinrent les plus grands guérisseurs du champ de bataille, prouvant que le sacrifice peut fleurir dans l'ombre."
  }
]

const clans = [
  {
    name: "Clan des Lycans",
    trait: "Instinct & Honneur",
    desc: "Descendants d'une ancienne malédiction, les Lycans sont des métamorphes capables de prendre la forme de loups terrifiants. Vivant en meutes soudées dans les forêts profondes, ils vénèrent la lune et suivent un code d'honneur sauvage. Leur force brute en fait des alliés redoutables ou des ennemis mortels."
  },
  {
    name: "Clan des Centaures",
    trait: "Sagesse Stellaire",
    desc: "Gardiens des plaines sauvages, les Centaures sont mi-hommes, mi-chevaux. Maîtres de l'arc et de la lance, ils lisent l'avenir dans les étoiles. Ils protègent farouchement leur territoire et leurs traditions, considérant les autres races avec une méfiance née de siècles de conflits."
  },
  {
    name: "Clan des Ours",
    trait: "Force Primordiale",
    desc: "Métamorphes capables de prendre la forme d'ours imposants. Gardiens des montagnes, ils tirent leur force de la nature brute. Leur tempérament est sauvage, respectant la puissance de la terre et vivant selon des rites anciens entre humanité et instinct bestial."
  },
  {
    name: "Clan des Serpents",
    trait: "Secrets & Illusions",
    desc: "Êtres hybrides, mi-humains, mi-serpents. Maîtres des poisons et des illusions, ils vivent dans des sanctuaires cachés. Leur société est complexe et secrète, crainte autant pour leur magie subtile que pour leur morsure venimeuse."
  },
  {
    name: "Clan des Ogres",
    trait: "Puissance Brute",
    desc: "Force de la nature vivant en petites tribus dans des vallées reculées. Leur force est légendaire et leur appétit insatiable. Bien que primitifs, ils constituent une puissance territoriale majeure, souvent en conflit avec les autres races par manque de subtilité."
  }
]

export default function AtlasPage() {
  const [activeTab, setActiveTab] = useState<'kingdoms' | 'peoples' | 'clans'>('kingdoms')

  return (
    <main className="relative min-h-screen flex flex-col bg-transparent overflow-hidden">
      <Navigation />
      
      <div className="relative z-10 flex-1 flex flex-col pt-36 px-12 pb-24 max-w-[1600px] mx-auto w-full">
        
        <header className="mb-32 relative text-center flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            className="flex flex-col items-center"
          >
            <div className="flex items-center gap-6 mb-8">
              <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
              <span className="text-gold text-[11px] tracking-[1.5em] uppercase font-bold text-glow-gold">Archives Impériales</span>
              <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
            </div>
            
            <h1 className="text-9xl font-headline text-white uppercase tracking-tighter leading-none mb-12">
              <span className="shine-text">Atlas</span> <br /> 
              <span className="shine-text italic font-light ml-24 block">Universel</span>
            </h1>

            <p className="text-silver/40 text-2xl italic font-light max-w-3xl leading-relaxed">
              "Voyagez à travers les fondations d'un monde où chaque pierre, chaque forêt et chaque château raconte l'histoire de notre survie."
            </p>
          </motion.div>
        </header>

        {/* Navigation Cinématographique */}
        <div className="flex justify-center gap-12 mb-32 border-b border-white/5 pb-12">
          {[
            { id: 'kingdoms', label: 'Les Royaumes', icon: Globe },
            { id: 'peoples', label: 'Les Peuples', icon: Users },
            { id: 'clans', label: 'Clans & Créatures', icon: Shield }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`group relative flex items-center gap-6 px-16 py-8 transition-all duration-700 ${
                activeTab === tab.id ? 'text-white' : 'text-silver/30 hover:text-silver/60'
              }`}
            >
              <tab.icon className={`w-4 h-4 transition-colors ${activeTab === tab.id ? 'text-gold' : 'text-current'}`} />
              <span className="text-[11px] font-bold uppercase tracking-[0.8em]">{tab.label}</span>
              {activeTab === tab.id && (
                <motion.div 
                  layoutId="active-underline"
                  className="absolute bottom-0 left-0 w-full h-[1px] bg-gold"
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
              <div className="grid grid-cols-1 gap-24">
                {kingdoms.map((k, i) => (
                  <motion.div
                    key={k.name}
                    initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-20 p-20 bg-black/40 border border-white/5 hover:border-gold/20 transition-all duration-1000 group relative overflow-hidden shadow-3xl`}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${k.color} opacity-0 group-hover:opacity-100 transition-opacity duration-1000`} />
                    <div className="flex-1 relative z-10">
                      <div className="flex items-center gap-4 mb-8">
                        <Castle className={`w-3 h-3 ${k.accent}`} />
                        <span className={`text-[10px] font-bold uppercase tracking-[0.6em] ${k.accent}`}>{k.race}</span>
                      </div>
                      <h3 className={`text-7xl font-headline text-white uppercase mb-10 leading-none ${k.glow}`}>
                        {k.name}
                      </h3>
                      <div className="h-[1px] w-24 bg-white/10 mb-10 group-hover:w-full transition-all duration-1000" />
                      <p className="text-silver/50 text-xl leading-relaxed italic font-light border-l border-white/5 pl-12">
                        {k.desc}
                      </p>
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
                {/* Section Procédure */}
                <section className="p-16 bg-gold/5 border border-gold/10 relative">
                  <div className="flex items-center gap-6 mb-12">
                    <Scroll className="w-8 h-8 text-gold" />
                    <h2 className="text-4xl font-headline text-white uppercase tracking-tight">Procédure de Candidature</h2>
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className="flex flex-col gap-4">
                      <span className="text-gold text-[10px] font-bold uppercase tracking-widest">Étape 01 — Dossier</span>
                      <p className="text-silver/50 italic text-sm font-light">Un dossier complet doit être rédigé, présentant l'histoire, les objectifs et la structure de votre groupe.</p>
                    </div>
                    <div className="flex flex-col gap-4">
                      <span className="text-gold text-[10px] font-bold uppercase tracking-widest">Étape 02 — Soumission</span>
                      <p className="text-silver/50 italic text-sm font-light">Le dossier doit être envoyé par ticket sur notre serveur Discord officiel pour validation.</p>
                    </div>
                    <div className="flex flex-col gap-4">
                      <span className="text-gold text-[10px] font-bold uppercase tracking-widest">Étape 03 — Effectif</span>
                      <p className="text-silver/50 italic text-sm font-light">Un minimum de 15 joueurs actifs est requis pour que la candidature soit prise en compte.</p>
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
                      <Users2 className="absolute -top-4 -right-4 w-24 h-24 text-white/[0.02] group-hover:text-gold/[0.05] transition-colors" />
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
          </motion.div>
        </AnimatePresence>

        <footer className="mt-48 h-32 flex flex-col items-center justify-center relative z-20">
          <div className="h-[1px] w-32 bg-gradient-to-r from-transparent via-gold/30 to-transparent mb-12" />
          <span className="shine-text text-[10px] tracking-[1.2em] uppercase font-bold text-center">
            CONCLAVE SUPRÊME — ÉQUILIBRE D'ASGARM V3.1
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
