"use client"

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Shield, Menu, X, Compass } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export const Navigation: React.FC = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Le Monde', href: '#the-world' },
    { name: 'L\'Archive', href: '#lore-weaver' },
    { name: 'Reliques', href: '#artifacts' },
    { name: 'Runes', href: '#discovery' },
    { name: 'Maîtrise', href: '#mastery' },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-in-out ${
      scrolled ? 'h-20 bg-[#03040a]/90 backdrop-blur-xl border-b border-gold/20' : 'h-32 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto h-full px-8 flex items-center justify-between">
        <div className="flex items-center gap-4 group cursor-pointer">
          <div className="relative">
            <Shield className="text-gold w-6 h-6 group-hover:scale-110 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gold blur-lg opacity-0 group-hover:opacity-30 transition-opacity" />
          </div>
          <span className="font-headline text-2xl tracking-[0.2em] text-white font-bold uppercase hidden sm:block">
            OUTLAND
          </span>
        </div>
        
        <div className="hidden lg:flex items-center gap-12">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="relative text-[10px] font-bold text-silver/50 hover:text-gold transition-all duration-300 tracking-[0.3em] uppercase group"
            >
              {item.name}
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-gold/50 transition-all duration-300 group-hover:w-full opacity-0 group-hover:opacity-100" />
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-6">
          <button className="hidden sm:flex items-center gap-2 px-8 py-3 bg-gold/10 border border-gold/30 text-gold text-[10px] font-bold tracking-[0.4em] uppercase hover:bg-gold hover:text-black transition-all duration-500 rounded-sm">
            <Compass className="w-3 h-3" />
            <span>REJOINDRE</span>
          </button>
          <button 
            className="lg:hidden text-gold p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-[#03040a] z-[-1] flex flex-col items-center justify-center gap-8"
          >
            {navItems.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-xl font-headline text-silver/70 tracking-[0.3em] uppercase hover:text-gold"
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}