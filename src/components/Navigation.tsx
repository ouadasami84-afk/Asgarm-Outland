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
    { name: 'Atlas', href: '#the-world' },
    { name: 'Archives', href: '#lore-weaver' },
    { name: 'Reliques', href: '#artifacts' },
    { name: 'Maîtrise', href: '#mastery' },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-1000 ease-in-out ${
      scrolled ? 'h-24 bg-[#010208]/95 backdrop-blur-2xl border-b border-gold/10' : 'h-40 bg-transparent'
    }`}>
      <div className="max-w-[1800px] mx-auto h-full px-12 flex items-center justify-between">
        <div className="flex items-center gap-6 group cursor-pointer">
          <div className="relative">
            <Shield className="text-gold w-8 h-8 group-hover:scale-110 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gold blur-2xl opacity-0 group-hover:opacity-40 transition-opacity" />
          </div>
          <div className="flex flex-col">
            <span className="font-headline text-2xl tracking-[0.4em] text-white font-bold uppercase hidden sm:block">
              OUTLAND
            </span>
            <span className="text-[8px] tracking-[0.6em] text-gold/40 uppercase font-bold hidden sm:block">Projet Asgarm</span>
          </div>
        </div>
        
        <div className="hidden lg:flex items-center gap-16">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="relative text-[11px] font-bold text-silver/40 hover:text-gold transition-all duration-500 tracking-[0.4em] uppercase group"
            >
              {item.name}
              <span className="absolute -bottom-3 left-0 w-0 h-[1px] bg-gold/50 transition-all duration-500 group-hover:w-full opacity-0 group-hover:opacity-100" />
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-8">
          <button className="hidden sm:flex items-center gap-3 px-10 py-4 border border-gold/30 text-gold text-[10px] font-bold tracking-[0.5em] uppercase hover:bg-gold hover:text-black transition-all duration-700 rounded-none bg-black/40 backdrop-blur-md">
            <Compass className="w-4 h-4" />
            <span>REJOINDRE</span>
          </button>
          <button 
            className="lg:hidden text-gold p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 bg-[#010208] z-[-1] flex flex-col items-center justify-center gap-12"
          >
            {navItems.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-4xl font-headline text-silver/60 tracking-[0.3em] uppercase hover:text-gold transition-all"
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
