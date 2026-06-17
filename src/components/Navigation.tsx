"use client"

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Sparkles, Menu, X } from 'lucide-react'
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
    { name: 'The World', href: '#the-world' },
    { name: 'The Archive', href: '#lore-weaver' },
    { name: 'Relics', href: '#artifacts' },
    { name: 'Runes', href: '#discovery' },
    { name: 'Mastery', href: '#mastery' },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-1000 ease-in-out ${
      scrolled ? 'h-20 bg-black/80 backdrop-blur-2xl border-b border-gold/10' : 'h-32 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto h-full px-8 flex items-center justify-between">
        <div className="flex items-center gap-4 group cursor-pointer">
          <div className="relative">
            <Sparkles className="text-gold w-6 h-6 group-hover:scale-125 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gold blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-700" />
          </div>
          <span className="font-headline text-xl tracking-[0.25em] text-white font-bold uppercase hidden sm:block">
            Arcanum <span className="text-gold italic font-normal">Prime</span>
          </span>
        </div>
        
        <div className="hidden lg:flex items-center gap-14">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="relative text-[10px] font-bold text-silver/40 hover:text-gold transition-all duration-500 tracking-[0.4em] uppercase group"
            >
              {item.name}
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-gold transition-all duration-500 group-hover:w-full opacity-0 group-hover:opacity-100" />
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-8">
          <button className="hidden sm:block px-10 py-3 border border-gold/20 text-gold text-[10px] font-bold tracking-[0.4em] uppercase hover:bg-gold hover:text-black hover:border-gold transition-all duration-700 relative group overflow-hidden">
            <span className="relative z-10">Ascend</span>
            <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          </button>
          <button 
            className="lg:hidden text-gold p-2 hover:scale-110 transition-transform"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            className="fixed inset-0 top-0 left-0 w-full h-screen bg-black/95 z-[-1] flex flex-col items-center justify-center gap-12"
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
                  className="text-2xl font-headline text-silver/60 tracking-[0.4em] uppercase hover:text-gold transition-colors block text-center"
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
            <motion.button 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-8 px-12 py-5 border border-gold/30 text-gold text-[12px] font-bold tracking-[0.4em] uppercase"
            >
              Ascend to Mastery
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
