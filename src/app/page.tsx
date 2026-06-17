"use client"

import { Navigation } from '@/components/Navigation'
import { Hero } from '@/components/Hero'
import { LoreWeaverSection } from '@/components/LoreWeaverSection'
import { ArtifactGallery } from '@/components/ArtifactGallery'
import { RuneDiscovery } from '@/components/RuneDiscovery'
import { WorldAtlas } from '@/components/WorldAtlas'
import { MasteryLedger } from '@/components/MasteryLedger'
import { MagicalBackground } from '@/components/MagicalBackground'
import { FinalCTA } from '@/components/FinalCTA'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <MagicalBackground />
      <Navigation />
      
      <Hero />
      
      <WorldAtlas />
      
      <LoreWeaverSection />
      
      <ArtifactGallery />
      
      <RuneDiscovery />
      
      <MasteryLedger />
      
      <FinalCTA />
      
      <Footer />
    </main>
  )
}
