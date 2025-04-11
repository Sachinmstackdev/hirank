'use client'

import { useEffect, useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { LeadMagnetForm } from './LeadMagnetForm'

export function DesktopExitIntent() {
  const [isOpen, setIsOpen] = useState(false)
  const [hasShown, setHasShown] = useState(false)

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        setIsOpen(true)
        setHasShown(true)
      }
    }

    // Only add exit intent for desktop
    if (window.innerWidth >= 1024) {
      document.addEventListener('mouseleave', handleMouseLeave)
    }

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [hasShown])

  const handleSubmit = async (data: { name: string; email: string; website: string }) => {
    // Handle form submission here
    console.log('Form submitted:', data)
    setIsOpen(false)
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="w-[95vw] max-w-[400px] sm:max-w-[450px] p-0 overflow-hidden rounded-xl sm:rounded-2xl mx-2">
        <div className="relative">
          {/* Blue gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#4F7DF3] to-[#3968e7] h-24 sm:h-32" />
          
          <div className="relative px-4 sm:px-6 pt-10 sm:pt-16 pb-4 sm:pb-6">
            <DialogHeader className="space-y-2">
              <DialogTitle className="text-xl sm:text-2xl font-bold text-center text-white px-4">
                Free E-commerce Audit
              </DialogTitle>
              <div className="mt-0 sm:mt-1 text-center text-blue-100 text-xs sm:text-sm px-4">
                Get a free audit of your online store or marketing strategy
              </div>
            </DialogHeader>

            <div className="mt-6 bg-white p-4 sm:p-6 rounded-xl shadow-xl">
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div 
                      key={i} 
                      className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-white bg-gray-200"
                    />
                  ))}
                </div>
                <div className="text-xs sm:text-sm text-gray-600">
                  Join 200+ business owners who improved their online presence
                </div>
              </div>
              <LeadMagnetForm onSubmit={handleSubmit} />
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
} 