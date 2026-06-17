
"use client"

import React from 'react'

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-transparent pt-12 pb-12 px-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center gap-6">
        <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-gold/10 to-transparent" />
        <span className="shine-text text-[9px] tracking-[0.8em] uppercase font-bold text-center">
          CONCLAVE SUPRÊME — ÉQUILIBRE D'ASGARM V3.1
        </span>
      </div>
    </footer>
  )
}
