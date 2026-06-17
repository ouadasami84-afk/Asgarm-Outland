
"use client"

import React from 'react'
import { Instagram, Youtube, MessageSquare, Video, Compass } from 'lucide-react'

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-transparent pt-12 pb-20 px-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex flex-col items-center md:items-start">
            <span className="font-headline text-xl tracking-[0.4em] text-white/80 font-bold uppercase leading-none">OUTLAND</span>
            <span className="text-gold/30 text-[7px] tracking-[0.6em] uppercase font-medium mt-1">Élite d'Asgarm</span>
          </div>

          <div className="flex gap-12 opacity-40 hover:opacity-100 transition-opacity duration-700">
            <a href="#" className="text-silver/40 hover:text-gold transition-all duration-500" title="Discord">
              <MessageSquare className="w-4 h-4" />
            </a>
            <a href="#" className="text-silver/40 hover:text-gold transition-all duration-500" title="TikTok">
              <Video className="w-4 h-4" />
            </a>
            <a href="#" className="text-silver/40 hover:text-gold transition-all duration-500" title="Youtube">
              <Youtube className="w-4 h-4" />
            </a>
            <a href="#" className="text-silver/40 hover:text-gold transition-all duration-500" title="Instagram">
              <Instagram className="w-4 h-4" />
            </a>
          </div>

          <div className="flex items-center gap-3">
            <Compass className="w-3 h-3 text-gold/10" />
            <span className="text-[8px] tracking-[0.5em] text-silver/20 font-bold uppercase italic">Voyage vers l'infini</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
