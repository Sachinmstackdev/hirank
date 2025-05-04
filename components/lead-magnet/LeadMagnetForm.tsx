'use client'

import { useState, RefObject } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { submitLeadToSupabase, LeadFormData } from '@/lib/utils/supabaseHelpers'
import { motion } from 'framer-motion'

interface LeadMagnetFormProps {
  onSubmit: (data: LeadFormData) => void
  className?: string
  formRef?: RefObject<HTMLFormElement | null>
  showButton?: boolean
  source?: string
}

export function LeadMagnetForm({ 
  onSubmit, 
  className = '', 
  formRef, 
  showButton = true,
  source = 'lead_magnet' 
}: LeadMagnetFormProps) {
  const [formData, setFormData] = useState<LeadFormData>({
    name: '',
    email: '',
    website: '',
    source: source
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formError, setFormError] = useState<string | null>(null)
  const [focusedField, setFocusedField] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setFormError(null)
    
    try {
      // Submit to Supabase
      const result = await submitLeadToSupabase(formData)
      
      if (result.success) {
        // Clear form after successful submission
        setFormData({
          name: '',
          email: '',
          website: '',
          source: source
        })
        
        // Call the parent onSubmit callback
        onSubmit(formData)
      } else {
        setFormError(result.massage)
      }
    } catch (error) {
      console.error('Error in form submission:', error)
      setFormError('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className={`w-full space-y-5 ${className}`}>
      {formError && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-3 bg-red-50 text-red-700 rounded-xl text-sm mb-4 border-l-4 border-red-500 shadow-sm"
        >
          {formError}
        </motion.div>
      )}
      
      <div className="space-y-5">
        <div className="relative group">
          <div className={`absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-blue-400 rounded-2xl opacity-0 group-hover:opacity-20 transition duration-300 ${
            focusedField === 'name' ? 'opacity-30' : ''
          }`} />
          <Input
            type="text"
            placeholder="Your Name"
            value={formData.name}
            onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
            onFocus={() => setFocusedField('name')}
            onBlur={() => setFocusedField(null)}
            required
            className={`w-full h-14 px-5 border rounded-xl text-base transition-all duration-200 relative bg-white ${
              focusedField === 'name' 
                ? 'border-blue-400 shadow-md shadow-blue-100/50 -translate-y-1' 
                : 'border-gray-200 group-hover:border-blue-200'
            }`}
            disabled={isSubmitting}
          />
        </div>
        
        <div className="relative group">
          <div className={`absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-blue-400 rounded-2xl opacity-0 group-hover:opacity-20 transition duration-300 ${
            focusedField === 'email' ? 'opacity-30' : ''
          }`} />
          <Input
            type="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
            onFocus={() => setFocusedField('email')}
            onBlur={() => setFocusedField(null)}
            required
            className={`w-full h-14 px-5 border rounded-xl text-base transition-all duration-200 relative bg-white ${
              focusedField === 'email' 
                ? 'border-blue-400 shadow-md shadow-blue-100/50 -translate-y-1' 
                : 'border-gray-200 group-hover:border-blue-200'
            }`}
            disabled={isSubmitting}
          />
        </div>
        
        <div className="relative group">
          <div className={`absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-blue-400 rounded-2xl opacity-0 group-hover:opacity-20 transition duration-300 ${
            focusedField === 'website' ? 'opacity-30' : ''
          }`} />
          <Input
            type="url"
            placeholder="Website URL"
            value={formData.website}
            onChange={(e) => setFormData(prev => ({ ...prev, website: e.target.value }))}
            onFocus={() => setFocusedField('website')}
            onBlur={() => setFocusedField(null)}
            required
            className={`w-full h-14 px-5 border rounded-xl text-base transition-all duration-200 relative bg-white ${
              focusedField === 'website' 
                ? 'border-blue-400 shadow-md shadow-blue-100/50 -translate-y-1' 
                : 'border-gray-200 group-hover:border-blue-200'
            }`}
            disabled={isSubmitting}
          />
        </div>
      </div>
      
      {showButton && (
        <Button 
          type="submit" 
          className="w-full h-14 bg-blue-500 hover:bg-blue-600 text-white rounded-xl font-medium shadow-md text-base mt-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
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
            <span className="flex items-center justify-center">
              Get Free Audit <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
            </span>
          )}
        </Button>
      )}
    </form>
  )
} 