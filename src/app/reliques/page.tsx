
"use client"

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function ReliquesRedirect() {
  const router = useRouter()
  
  useEffect(() => {
    router.replace('/conclave')
  }, [router])

  return null
}
