'use client'

import dynamic from 'next/dynamic'

// Dynamic imports with loading states
const DesktopExitIntent = dynamic(() => import('./DesktopExitIntent').then(mod => ({ default: mod.DesktopExitIntent })), {
  ssr: false,
  loading: () => null
})

const MobileSlideIn = dynamic(() => import('./MobileSlideIn').then(mod => ({ default: mod.MobileSlideIn })), {
  ssr: false,
  loading: () => null
})

export function LeadMagnet() {
  return (
    <>
      <DesktopExitIntent />
      <MobileSlideIn />
    </>
  )
} 