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
    <nav className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-1000 ease-in-out ${
      scrolled ? 'h-20 bg-[#010208]/95 backdrop-blur-2xl border-b border-gold/10' : 'h-28 bg-transparent'
    }`}>
      <div className="max-w-[1600px] mx-auto h-full px-8 md:px-16 flex items-center justify-between">
        <div className="flex items-center gap-6 group cursor-pointer">
          <div className="relative">
            <Shield className="text-gold w-8 h-8 group-hover:scale-110 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gold blur-xl opacity-0 group-hover:opacity-30 transition-opacity" />
          </div>
          <div className="flex flex-col">
            <span className="font-headline text-2xl tracking-[0.4em] text-white font-bold uppercase hidden sm:block">
              OUTLAND
            </span>
            <span className="text-[8px] tracking-[0.5em] text-gold/40 uppercase font-bold hidden sm:block">Asgarm Project</span>
          </div>
        </div>
        
        <div className="hidden lg:flex items-center gap-16">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="relative text-[10px] font-bold text-silver/40 hover:text-gold transition-all duration-500 tracking-[0.4em] uppercase group"
            >
              {item.name}
              <span className="absolute -bottom-3 left-0 w-0 h-[1px] bg-gold/40 transition-all duration-500 group-hover:w-full opacity-0 group-hover:opacity-100" />
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-8">
          <button className="hidden sm:flex items-center gap-3 px-8 py-3.5 border border-gold/30 text-gold/80 text-[10px] font-bold tracking-[0.4em] uppercase hover:bg-gold hover:text-black transition-all duration-700 rounded-none bg-black/40 backdrop-blur-xl group relative overflow-hidden">
            <span className="relative z-10 flex items-center gap-3">
               <Compass className="w-4 h-4 group-hover:rotate-180 transition-transform duration-700" />
               REJOINDRE
            </span>
            <div className="absolute inset-0 bg-gold translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
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
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            className="fixed inset-0 bg-[#010208] z-[-1] flex flex-col items-center justify-center gap-12 backdrop-blur-3xl"
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
                  className="text-4xl font-headline text-silver/40 tracking-[0.3em] uppercase hover:text-gold transition-all duration-500"
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
            <div className="h-[1px] w-32 bg-gold/10" />
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}