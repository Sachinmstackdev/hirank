'use client'

import { useEffect, useState, useRef } from 'react'
import { Sheet, SheetContent, SheetClose } from "@/components/ui/sheet"
import { LeadMagnetForm } from './LeadMagnetForm'
import { X } from 'lucide-react'
import { LeadFormData } from '@/lib/utils/supabaseHelpers'
import { cn } from "@/lib/utils"
import { motion } from 'framer-motion'

export function MobileSlideIn() {
  const [isOpen, setIsOpen] = useState(false)
  const [hasShown, setHasShown] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
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

  const handleSubmit = async (data: LeadFormData) => {
    setIsSubmitting(true)
    
    try {
      // Form submission is already handled in LeadMagnetForm component
      console.log('Lead data submitted:', data)
      
      // Show success state
      setIsSuccess(true)
      
      // Close the slide-in after 3 seconds
      setTimeout(() => {
        setIsOpen(false)
        // Reset states after slide-in is closed
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
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent 
        side="bottom" 
        className={cn(
          "h-auto max-h-[90%] p-0 rounded-t-3xl border-0 shadow-2xl",
          "[&>button]:hidden", // Hide the default close button
          "[&_div[data-state]]:!bg-transparent" // Remove any background overlay
        )}
      >
        <div className="bg-gradient-to-r from-blue-600 to-blue-500 py-8 px-6 rounded-t-3xl relative">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
            <div className="absolute top-0 right-0 w-40 h-40 bg-white rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full translate-y-1/2 -translate-x-1/2" />
          </div>
          
          {/* Custom close button */}
          <div className="absolute top-4 right-4 z-50">
            <SheetClose className="w-8 h-8 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full flex items-center justify-center shadow-sm border-0 outline-none focus:outline-none transition-all duration-200 hover:rotate-90">
              <X size={16} className="text-white" />
            </SheetClose>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center justify-center mb-3">
              <svg className="w-6 h-6 text-yellow-300 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-white text-sm font-medium">Limited Offer</span>
            </div>
            
            <h2 className="text-3xl font-bold text-center text-white mb-3">
              Boost Your eCommerce Revenue With Our Free SEO Audit
            </h2>
            <p className="text-center text-blue-100 text-base px-4 leading-relaxed">
              Discover hidden growth opportunities that could increase your store&apos;s traffic and conversions by 30% or more
            </p>
          </motion.div>
        </div>
        
        <div className="bg-white p-8 relative">
          <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-blue-100 to-transparent" />
          
          {isSuccess ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-8 relative"
            >
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
                <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Thank You!</h3>
              <p className="text-gray-600 text-lg max-w-md mx-auto">
                Your growth report is on the way! We&apos;ll send your personalized eCommerce SEO audit within 24 hours.
              </p>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <LeadMagnetForm 
                onSubmit={handleSubmit} 
                formRef={formRef} 
                showButton={false} 
                source="mobile_slide_in" 
              />
              
              <motion.button 
                whileHover={{ y: -3, boxShadow: "0 10px 15px -3px rgba(59, 130, 246, 0.3)" }}
                whileTap={{ y: 0, boxShadow: "0 4px 6px -1px rgba(59, 130, 246, 0.3)" }}
                onClick={submitForm}
                type="button"
                className="w-full py-4 mt-5 bg-blue-500 hover:bg-blue-600 text-white text-lg font-semibold rounded-xl flex items-center justify-center shadow-lg transition-all duration-300"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting...
                  </span>
                ) : (
                  <span className="flex items-center justify-center group">
                    Unlock My Free Growth Report <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </span>
                )}
              </motion.button>
              
              <p className="text-xs text-center text-gray-500 mt-3">
                We respect your privacy. Your information is never shared.
              </p>
            </motion.div>
          )}
          
          <div className="flex items-center mt-8 pt-6 border-t border-gray-100">
            <div className="flex -space-x-3 mr-4">
              {/* Client logos */}
              <div className="w-10 h-10 rounded-full border-2 border-white bg-white overflow-hidden flex items-center justify-center shadow-sm">
                <img 
                  src="https://res.cloudinary.com/twosapiens/image/upload/v1744477382/Ambro-bites-logo-banner_d9zmsv.png" 
                  alt="Ambro Bites" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="w-10 h-10 rounded-full border-2 border-white bg-white overflow-hidden flex items-center justify-center shadow-sm">
                <img 
                  src="https://res.cloudinary.com/twosapiens/image/upload/v1744477383/VK-pg-hostel-logo-banner_emq6ax.png" 
                  alt="VK PG Hostel" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="w-10 h-10 rounded-full border-2 border-white bg-white overflow-hidden flex items-center justify-center shadow-sm">
                <img 
                  src="https://res.cloudinary.com/twosapiens/image/upload/v1744477383/Two-Sapiens-logo-banner_efgx9t.png" 
                  alt="Two Sapiens" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <div className="text-sm text-gray-700">
              <span className="font-medium">Join 200+ eCommerce stores</span> who increased revenue by 27% on average
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
} 