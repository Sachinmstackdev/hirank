'use client'

import { useEffect, useState } from 'react'
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { LeadMagnetForm } from './LeadMagnetForm'

export function MobileSlideIn() {
  const [isOpen, setIsOpen] = useState(false)
  const [hasShown, setHasShown] = useState(false)

  useEffect(() => {
    // Show slide-in after 20 seconds on mobile
    if (window.innerWidth < 1024 && !hasShown) {
      const timer = setTimeout(() => {
        setIsOpen(true)
        setHasShown(true)
      }, 20000) // 20 seconds

      return () => clearTimeout(timer)
    }
  }, [hasShown])

  const handleSubmit = async (data: { name: string; email: string; website: string }) => {
    // Handle form submission here
    console.log('Form submitted:', data)
    setIsOpen(false)
  }

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent side="bottom" className="h-[95vh] sm:h-[90vh] p-0 rounded-t-[16px] sm:rounded-t-[20px]">
        <div className="relative h-full overflow-y-auto">
          {/* Blue gradient background */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#4F7DF3] to-[#3968e7] h-24 sm:h-32" />
          
          <div className="relative px-4 sm:px-6 pt-8 sm:pt-12 pb-6">
            <SheetHeader className="space-y-2">
              <SheetTitle className="text-xl sm:text-2xl font-bold text-center text-white px-4">
                Download Free SEO Checklist
              </SheetTitle>
              <div className="mt-0 sm:mt-1 text-center text-blue-100 text-xs sm:text-sm px-4 sm:px-6">
                Need help with your store? Let's talk and optimize your online presence!
              </div>
            </SheetHeader>

            <div className="mt-6 bg-white mx-0 sm:mx-2 p-4 sm:p-5 rounded-xl shadow-xl">
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
      </SheetContent>
    </Sheet>
  )
} 