"use client"

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Shield, Menu, X, Compass, Github } from 'lucide-react'
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
    { name: 'L\'Atlas', href: '#the-world' },
    { name: 'Archives', href: '#lore-weaver' },
    { name: 'Reliques', href: '#artifacts' },
    { name: 'Maîtrise', href: '#mastery' },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-700 ease-in-out ${
      scrolled ? 'h-24 bg-[#010208]/90 backdrop-blur-3xl border-b border-gold/15' : 'h-32 bg-transparent'
    }`}>
      <div className="max-w-[1800px] mx-auto h-full px-12 flex items-center justify-between">
        <div className="flex items-center gap-8 group cursor-pointer">
          <div className="relative">
            <Shield className="text-gold w-10 h-10 group-hover:scale-110 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gold blur-2xl opacity-0 group-hover:opacity-40 transition-opacity" />
          </div>
          <div className="flex flex-col">
            <span className="font-headline text-3xl tracking-[0.5em] text-white font-bold uppercase hidden sm:block">
              OUTLAND
            </span>
            <span className="text-[10px] tracking-[0.7em] text-gold/50 uppercase font-bold hidden sm:block">Projet Asgarm</span>
          </div>
        </div>
        
        <div className="hidden lg:flex items-center gap-20">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="relative text-[12px] font-bold text-silver/50 hover:text-gold transition-all duration-500 tracking-[0.5em] uppercase group"
            >
              {item.name}
              <span className="absolute -bottom-4 left-0 w-0 h-[1px] bg-gold/60 transition-all duration-500 group-hover:w-full opacity-0 group-hover:opacity-100" />
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-10">
          <button className="hidden sm:flex items-center gap-4 px-12 py-5 border border-gold/40 text-gold text-[11px] font-bold tracking-[0.6em] uppercase hover:bg-gold hover:text-black transition-all duration-700 rounded-none bg-black/60 backdrop-blur-xl group relative overflow-hidden">
            <span className="relative z-10 flex items-center gap-4">
               <Compass className="w-5 h-5 group-hover:rotate-180 transition-transform duration-700" />
               REJOINDRE
            </span>
            <div className="absolute inset-0 bg-gold translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
          </button>
          <button 
            className="lg:hidden text-gold p-3"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-10 h-10" /> : <Menu className="w-10 h-10" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            className="fixed inset-0 bg-[#010208] z-[-1] flex flex-col items-center justify-center gap-16 backdrop-blur-2xl"
          >
            {navItems.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-5xl font-headline text-silver/60 tracking-[0.4em] uppercase hover:text-gold transition-all duration-500"
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
            <div className="h-[1px] w-40 bg-gold/20" />
            <div className="flex gap-10">
              <Github className="w-8 h-8 text-gold/40 cursor-pointer hover:text-gold transition-colors" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
