
"use client"

import React, { useState, useEffect } from 'react'
import { Volume2, VolumeX } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export const BackgroundMusic = () => {
  const [isPlaying, setIsPlaying] = useState(true)
  const [mounted, setMounted] = useState(false)
  const videoId = "dmlqoxtxeFc"

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null;

  return (
    <div className="fixed bottom-8 right-8 z-[100] flex items-center gap-4">
      <AnimatePresence>
        {!isPlaying && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="hidden md:block"
          >
            <span className="text-[9px] text-gold/40 uppercase tracking-[0.4em] font-bold text-glow-gold">
              Activer l'Immersion
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="absolute inset-0 pointer-events-none overflow-hidden w-0 h-0">
        {isPlaying && (
          <iframe
            width="1"
            height="1"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&loop=1&playlist=${videoId}&controls=0&mute=0&enablejsapi=1`}
            allow="autoplay"
            frameBorder="0"
          />
        )}
      </div>

      <motion.button
        onClick={() => setIsPlaying(!isPlaying)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="group relative w-14 h-14 flex items-center justify-center bg-black/80 border border-gold/20 backdrop-blur-xl rounded-full shadow-[0_0_30px_rgba(212,175,55,0.1)] hover:border-gold/50 transition-all duration-700"
      >
        <AnimatePresence mode="wait">
          {isPlaying ? (
            <motion.div
              key="playing"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="relative"
            >
              <Volume2 className="w-4 h-4 text-gold text-glow-gold" />
              <motion.div 
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 bg-gold/20 rounded-full -z-10"
              />
            </motion.div>
          ) : (
            <motion.div
              key="muted"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
            >
              <VolumeX className="w-4 h-4 text-silver/40" />
            </motion.div>
          )}
        </AnimatePresence>
        
        <div className={`absolute inset-0 rounded-full bg-gold/5 blur-xl transition-opacity duration-1000 ${isPlaying ? 'opacity-100' : 'opacity-0'}`} />
      </motion.button>
    </div>
  )
}
