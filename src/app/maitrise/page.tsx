
"use client"

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function MaitriseRedirect() {
  const router = useRouter()
  
  useEffect(() => {
    router.replace('/academie')
  }, [router])

  return null
}
