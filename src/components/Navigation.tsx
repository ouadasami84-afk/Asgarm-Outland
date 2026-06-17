
"use client"

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export const Navigation: React.FC = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Guide Arrivant', href: '/guide' },
    { name: 'Histoire', href: '/histoire' },
    { name: 'Reliques', href: '/reliques' },
    { name: 'Maîtrise', href: '/maitrise' },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-500 ease-in-out ${
      scrolled ? 'h-16 bg-black/95 backdrop-blur-2xl border-b border-white/5' : 'h-24 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto h-full px-8 flex items-center justify-between">
        <Link href="/" className="flex items-center group">
          <div className="flex flex-col">
            <span className="font-headline text-lg tracking-[0.4em] text-white font-bold uppercase leading-none group-hover:text-gold transition-colors duration-500">
              OUTLAND
            </span>
            <span className="text-gold/60 text-[8px] tracking-[0.6em] uppercase font-medium mt-1">
              PROJET ASGARM
            </span>
          </div>
        </Link>
        
        <div className="hidden lg:flex items-center gap-12">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`relative text-[10px] font-bold tracking-[0.3em] uppercase group transition-all duration-300 ${
                pathname === item.href ? 'text-gold' : 'text-silver/40 hover:text-gold'
              }`}
            >
              {item.name}
              <motion.span 
                className={`absolute -bottom-2 left-0 h-[1px] bg-gold`}
                initial={false}
                animate={{ width: pathname === item.href ? '100%' : '0%' }}
                transition={{ duration: 0.3 }}
              />
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-6">
          <Link href="/reglement">
            <button className="hidden sm:flex items-center px-8 py-2 border border-gold/20 text-gold text-[10px] font-bold tracking-[0.3em] uppercase hover:bg-gold hover:text-night transition-all duration-500 bg-black/40">
              Réglement
            </button>
          </Link>
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
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 bg-black z-[70] flex flex-col items-center justify-center gap-8"
          >
            <button 
              className="absolute top-8 right-8 text-gold"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X className="w-8 h-8" />
            </button>
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
                  className="text-2xl font-headline text-white tracking-[0.2em] uppercase hover:text-gold transition-all duration-300"
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Link 
                href="/reglement" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-gold text-lg font-bold tracking-[0.4em] uppercase border-b border-gold/20 pb-2"
              >
                Réglement
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
