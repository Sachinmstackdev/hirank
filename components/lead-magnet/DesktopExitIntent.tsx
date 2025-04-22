'use client'

import { useEffect, useState, useRef } from 'react'
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { LeadMagnetForm } from './LeadMagnetForm'
import { X } from 'lucide-react'
import { cn } from "@/lib/utils"

export function DesktopExitIntent() {
  const [isOpen, setIsOpen] = useState(false)
  const [hasShown, setHasShown] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)

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

  const submitForm = () => {
    formRef.current?.requestSubmit()
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className={cn(
        "w-[95vw] max-w-[420px] p-0 overflow-hidden rounded-3xl border-none shadow-2xl",
        "[&>button]:hidden", // Hide the default close button
        "[&_div[data-state]]:!bg-transparent" // Remove any background overlay
      )}>
        <div className="bg-blue-500 py-8 px-6 relative">
          {/* Custom close button */}
          <button 
            onClick={() => setIsOpen(false)} 
            className="absolute top-4 right-4 z-50 w-7 h-7 bg-white hover:bg-gray-100 rounded-full flex items-center justify-center shadow-sm border-0 outline-none focus:outline-none"
            aria-label="Close"
          >
            <X size={14} className="text-gray-500" />
          </button>
          
          <div className="text-center mb-2">
            <h2 className="text-3xl font-bold text-white">
              Download Free SEO Checklist
            </h2>
            <p className="text-blue-100 text-base mt-2">
              Need help with your store? Let's talk and optimize your online presence!
            </p>
          </div>
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
              {[1, 2, 3].map((i) => (
                <div 
                  key={i} 
                  className="w-10 h-10 rounded-full border-2 border-white relative overflow-hidden bg-gray-200"
                >
                  <div className="absolute inset-0 flex items-center justify-center text-gray-500 text-xs">
                    {i}
                  </div>
                </div>
              ))}
            </div>
            <div className="text-sm text-gray-600 flex-1">
              Join 200+ business owners who improved their online presence
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
} 