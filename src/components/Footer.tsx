"use client"

import React from 'react'
import { Sparkles, Instagram, Twitter, Youtube, Github } from 'lucide-react'

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#050505] pt-32 pb-20 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <Sparkles className="text-gold w-8 h-8" />
              <span className="font-headline text-3xl tracking-wider text-white font-bold uppercase">Arcanum Prime</span>
            </div>
            <p className="text-silver/60 max-w-sm font-body leading-relaxed mb-8">
              Designed for those who seek more than just play. A portal to another dimension of storytelling and magical immersion.
            </p>
            <div className="flex gap-6">
              {[Twitter, Instagram, Youtube, Github].map((Icon, i) => (
                <a key={i} href="#" className="text-silver/40 hover:text-gold transition-colors">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-headline text-lg mb-6 uppercase tracking-widest">Navigation</h4>
            <ul className="space-y-4 font-body text-sm text-silver/40">
              <li><a href="#" className="hover:text-gold transition-colors">Loreweaver</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Artifacts</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">World Atlas</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Community</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-headline text-lg mb-6 uppercase tracking-widest">Company</h4>
            <ul className="space-y-4 font-body text-sm text-silver/40">
              <li><a href="#" className="hover:text-gold transition-colors">Legal Arcanum</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Privacy Scrolls</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Press Office</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Support Portal</a></li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-t border-white/5 pt-10">
          <p className="text-silver/20 text-xs tracking-[0.2em] uppercase">
            © 2026 Arcanum Prime Studios. All Rights Reserved.
          </p>
          <div className="flex gap-8 text-[10px] tracking-[0.3em] uppercase text-silver/20 font-bold">
            <span className="hover:text-silver/40 cursor-pointer transition-colors">TERMS OF MAGIC</span>
            <span className="hover:text-silver/40 cursor-pointer transition-colors">ETHEREAL PRIVACY</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
