
"use client"

import React from 'react'

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-transparent pt-12 pb-12 px-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Footer épuré : tous les éléments superflus ont été retirés pour garantir une finition minimaliste et haut de gamme */}
        <div className="flex flex-col items-center justify-center">
          <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-gold/10 to-transparent" />
        </div>
      </div>
    </footer>
  )
}
