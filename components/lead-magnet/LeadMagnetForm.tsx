'use client'

import { useState, RefObject } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { submitLeadToSupabase, LeadFormData } from '@/lib/utils/supabaseHelpers'

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
    <form ref={formRef} onSubmit={handleSubmit} className={`w-full space-y-4 ${className}`}>
      {formError && (
        <div className="p-3 bg-red-50 text-red-700 rounded-lg text-sm mb-4">
          {formError}
        </div>
      )}
      
      <div className="space-y-4">
        <Input
          type="text"
          placeholder="Your Name"
          value={formData.name}
          onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
          required
          className="w-full h-14 px-5 border border-gray-200 rounded-lg text-base"
          disabled={isSubmitting}
        />
        <Input
          type="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
          required
          className="w-full h-14 px-5 border border-gray-200 rounded-lg text-base"
          disabled={isSubmitting}
        />
        <Input
          type="url"
          placeholder="Website URL"
          value={formData.website}
          onChange={(e) => setFormData(prev => ({ ...prev, website: e.target.value }))}
          required
          className="w-full h-14 px-5 border border-gray-200 rounded-lg text-base"
          disabled={isSubmitting}
        />
      </div>
      {showButton && (
        <Button 
          type="submit" 
          className="w-full h-14 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium shadow-md text-base mt-4"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'Get Free Audit →'}
        </Button>
      )}
    </form>
  )
} 