"use client"

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function AtlasRedirect() {
  const router = useRouter()
  
  useEffect(() => {
    router.replace('/guide')
  }, [router])

  return null
}
