"use client"

import React from 'react'
import { Instagram, Twitter, Youtube, Github, Compass } from 'lucide-react'

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#020205]/60 backdrop-blur-md pt-32 pb-20 px-6 border-t border-gold/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
          <div className="col-span-1 md:col-span-2">
            <div className="flex flex-col mb-10">
              <span className="font-headline text-4xl tracking-widest text-white font-bold uppercase leading-none">OUTLAND</span>
              <span className="text-gold/60 text-[10px] tracking-[0.6em] uppercase font-medium mt-2">PROJET ASGARM</span>
            </div>
            <p className="text-silver/40 max-w-sm font-body leading-relaxed mb-10 italic">
              "Dans l'immensité d'Asgarm, seuls ceux qui osent Outland trouveront la vérité."
            </p>
            <div className="flex gap-8">
              {[Twitter, Instagram, Youtube, Github].map((Icon, i) => (
                <a key={i} href="#" className="text-silver/20 hover:text-gold transition-colors duration-500">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-gold/80 font-headline text-sm mb-8 uppercase tracking-[0.4em] font-bold">Navigation</h4>
            <ul className="space-y-5 font-body text-[11px] text-silver/40 uppercase tracking-widest">
              <li><a href="/archive" className="hover:text-gold transition-colors">L'Archive</a></li>
              <li><a href="/reliques" className="hover:text-gold transition-colors">Les Reliques</a></li>
              <li><a href="/atlas" className="hover:text-gold transition-colors">Carte d'Asgarm</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Rejoindre</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-gold/80 font-headline text-sm mb-8 uppercase tracking-[0.4em] font-bold">Législation</h4>
            <ul className="space-y-5 font-body text-[11px] text-silver/40 uppercase tracking-widest">
              <li><a href="#" className="hover:text-gold transition-colors">Charte Outland</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Vie Privée</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Support Royal</a></li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-t border-white/5 pt-12">
          <p className="text-silver/20 text-[9px] tracking-[0.5em] uppercase font-bold">
            © 2026 OUTLAND STUDIOS. TOUS DROITS RÉSERVÉS. ASGARM PROJECT.
          </p>
          <div className="flex items-center gap-2">
            <Compass className="w-3 h-3 text-gold/20" />
            <span className="text-[9px] tracking-[0.5em] text-gold/20 font-bold uppercase">Vers l'Infini</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
