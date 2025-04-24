'use client'

import { useEffect, useState, useRef } from 'react'
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { LeadMagnetForm } from './LeadMagnetForm'
import { X } from 'lucide-react'
import { LeadFormData } from '@/lib/utils/supabaseHelpers'
import { cn } from "@/lib/utils"

export function DesktopExitIntent() {
  const [isOpen, setIsOpen] = useState(false)
  const [hasShown, setHasShown] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
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

  const handleSubmit = async (data: LeadFormData) => {
    setIsSubmitting(true)
    
    try {
      // Form submission is already handled in LeadMagnetForm component
      console.log('Lead data submitted:', data)
      
      // Show success state
      setIsSuccess(true)
      
      // Close the dialog after 3 seconds
      setTimeout(() => {
        setIsOpen(false)
        // Reset states after dialog is closed
        setTimeout(() => {
          setIsSuccess(false)
          setIsSubmitting(false)
        }, 300)
      }, 3000)
    } catch (error) {
      console.error('Error handling form submission:', error)
      setIsSubmitting(false)
    }
  }

  const submitForm = () => {
    formRef.current?.requestSubmit()
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[500px] p-0 gap-0 rounded-2xl overflow-hidden">
        <div className="bg-blue-500 py-8 px-6 relative">
          {/* Close button */}
          <button 
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 w-7 h-7 bg-white hover:bg-gray-100 rounded-full flex items-center justify-center shadow-sm focus:outline-none"
          >
            <X size={14} className="text-gray-500" />
          </button>
          
          <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-2">
            Get Your Free SEO Audit
          </h2>
          <p className="text-center text-blue-100 text-base px-4">
            Find out how to improve your website's performance and rankings
          </p>
        </div>
        
        <div className="bg-white p-8">
          {isSuccess ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Thank You!</h3>
              <p className="text-gray-600">
                Your information has been submitted successfully. We'll get back to you shortly.
              </p>
            </div>
          ) : (
            <>
              <LeadMagnetForm 
                onSubmit={handleSubmit} 
                formRef={formRef} 
                showButton={false} 
                source="desktop_exit_intent"
              />
              
              <button 
                onClick={submitForm}
                type="button"
                className="w-full py-4 mt-4 bg-blue-500 hover:bg-blue-600 text-white text-lg font-semibold rounded-lg flex items-center justify-center"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Get Free Audit'} {!isSubmitting && <span className="ml-2">→</span>}
              </button>
            </>
          )}
          
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