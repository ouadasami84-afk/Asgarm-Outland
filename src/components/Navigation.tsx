
"use client"

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Shield, Compass, Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export const Navigation: React.FC = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Le Monde', href: '/atlas' },
    { name: 'Archive', href: '/archive' },
    { name: 'Reliques', href: '/reliques' },
    { name: 'Maîtrise', href: '/maitrise' },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-700 ease-in-out ${
      scrolled ? 'h-16 bg-night-deep/90 backdrop-blur-xl border-b border-gold/10' : 'h-24 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto h-full px-8 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-4 group">
          <Shield className="text-gold w-6 h-6 group-hover:scale-110 transition-transform duration-500" />
          <span className="font-headline text-lg tracking-[0.4em] text-white font-bold uppercase">
            OUTLAND
          </span>
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
              <span className={`absolute -bottom-2 left-0 h-[1px] bg-gold transition-all duration-300 ${
                pathname === item.href ? 'w-full' : 'w-0 group-hover:w-full'
              }`} />
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-6">
          <button className="hidden sm:flex items-center gap-2 px-8 py-2 border border-gold/20 text-gold text-[10px] font-bold tracking-[0.3em] uppercase hover:bg-gold hover:text-night transition-all duration-500 bg-night/20">
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
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-night-deep z-[-1] flex flex-col items-center justify-center gap-8"
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
