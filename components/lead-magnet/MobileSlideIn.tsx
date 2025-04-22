'use client'

import { useEffect, useState, useRef } from 'react'
import { Sheet, SheetContent, SheetClose } from "@/components/ui/sheet"
import { LeadMagnetForm } from './LeadMagnetForm'
import { X } from 'lucide-react'
import Image from 'next/image'
import { cn } from "@/lib/utils"

export function MobileSlideIn() {
  const [isOpen, setIsOpen] = useState(false)
  const [hasShown, setHasShown] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)

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

  const submitForm = () => {
    formRef.current?.requestSubmit()
  }

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent 
        side="bottom" 
        className={cn(
          "h-auto max-h-[90%] p-0 rounded-t-3xl border-0 shadow-2xl",
          "[&>button]:hidden", // Hide the default close button
          "[&_div[data-state]]:!bg-transparent" // Remove any background overlay
        )}
      >
        <div className="bg-blue-500 py-8 px-6 rounded-t-3xl relative">
          {/* Custom close button */}
          <div className="absolute top-4 right-4 z-50">
            <SheetClose className="w-7 h-7 bg-white hover:bg-gray-100 rounded-full flex items-center justify-center shadow-sm border-0 outline-none focus:outline-none">
              <X size={14} className="text-gray-500" />
            </SheetClose>
          </div>
          
          <h2 className="text-3xl font-bold text-center text-white mb-2">
            Download Free SEO Checklist
          </h2>
          <p className="text-center text-blue-100 text-base px-4">
            Need help with your store? Let's talk and optimize your online presence!
          </p>
        </div>
        
        <div className="bg-white p-8">
          <LeadMagnetForm onSubmit={handleSubmit} formRef={formRef} showButton={false} />
          
          <button 
            onClick={submitForm}
            type="button"
            className="w-full py-4 mt-4 bg-blue-500 hover:bg-blue-600 text-white text-lg font-semibold rounded-lg flex items-center justify-center"
          >
            Get Free Audit <span className="ml-2">→</span>
          </button>
          
          <div className="flex items-center mt-8">
            <div className="flex -space-x-3 mr-3">
              {[
                "/avatars/user1.png",
                "/avatars/user2.png", 
                "/avatars/user3.png"
              ].map((src, i) => (
                <div 
                  key={i} 
                  className="w-10 h-10 rounded-full border-2 border-white relative overflow-hidden bg-gray-200"
                >
                  <div className="absolute inset-0 flex items-center justify-center text-gray-500 text-xs">
                    {i+1}
                  </div>
                </div>
              ))}
            </div>
            <div className="text-sm text-gray-600">
              Join 200+ business owners who improved their online presence
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
} 