"use client"

import React from 'react'
import Link from 'next/link'
import { Sparkles } from 'lucide-react'

export const Navigation: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-20 px-8 flex items-center justify-between border-b border-white/5 bg-[#080808]/50 backdrop-blur-lg">
      <div className="flex items-center gap-3">
        <Sparkles className="text-gold w-6 h-6" />
        <span className="font-headline text-xl tracking-wider text-white font-bold uppercase">Arcanum Prime</span>
      </div>
      
      <div className="hidden md:flex items-center gap-10">
        {['The World', 'Lore Weaver', 'Artifacts', 'Discovery', 'Mastery'].map((item) => (
          <Link
            key={item}
            href={`#${item.toLowerCase().replace(' ', '-')}`}
            className="text-sm font-medium text-silver/70 hover:text-gold transition-colors tracking-widest uppercase"
          >
            {item}
          </Link>
        ))}
      </div>

      <button className="px-6 py-2.5 bg-transparent border border-gold/50 text-gold rounded-full text-sm font-medium hover:bg-gold hover:text-obsidian transition-all duration-300 tracking-widest uppercase">
        Begin Journey
      </button>
    </nav>
  )
}
