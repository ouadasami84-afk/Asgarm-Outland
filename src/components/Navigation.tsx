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
    { name: 'Archive', href: '#lore-weaver' },
    { name: 'Reliques', href: '#artifacts' },
    { name: 'Maîtrise', href: '#mastery' },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-700 ease-in-out ${
      scrolled ? 'h-16 bg-[#010208]/90 backdrop-blur-xl border-b border-gold/10' : 'h-24 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto h-full px-8 flex items-center justify-between">
        <div className="flex items-center gap-4 group cursor-pointer">
          <Shield className="text-gold w-6 h-6 group-hover:scale-110 transition-transform duration-500" />
          <div className="flex flex-col">
            <span className="font-headline text-lg tracking-[0.3em] text-white font-bold uppercase">
              OUTLAND
            </span>
          </div>
        </div>
        
        <div className="hidden lg:flex items-center gap-12">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="relative text-[9px] font-bold text-silver/40 hover:text-gold transition-all duration-300 tracking-[0.3em] uppercase group"
            >
              {item.name}
              <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-gold/40 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-6">
          <button className="hidden sm:flex items-center gap-2 px-6 py-2 border border-gold/20 text-gold/80 text-[9px] font-bold tracking-[0.3em] uppercase hover:bg-gold hover:text-black transition-all duration-500 rounded-none bg-black/20">
            <Compass className="w-3 h-3" />
            REJOINDRE
          </button>
          <button 
            className="lg:hidden text-gold p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#010208] z-[-1] flex flex-col items-center justify-center gap-8 backdrop-blur-3xl"
          >
            {navItems.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-headline text-silver/40 tracking-[0.2em] uppercase hover:text-gold transition-all duration-300"
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
