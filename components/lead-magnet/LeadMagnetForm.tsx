'use client'

import { useState, RefObject } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface LeadMagnetFormProps {
  onSubmit: (data: { name: string; email: string; website: string }) => void
  className?: string
  formRef?: RefObject<HTMLFormElement | null>
  showButton?: boolean
}

export function LeadMagnetForm({ onSubmit, className = '', formRef, showButton = true }: LeadMagnetFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(formData)
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className={`w-full space-y-4 ${className}`}>
      <div className="space-y-4">
        <Input
          type="text"
          placeholder="Your Name"
          value={formData.name}
          onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
          required
          className="w-full h-14 px-5 border border-gray-200 rounded-lg text-base"
        />
        <Input
          type="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
          required
          className="w-full h-14 px-5 border border-gray-200 rounded-lg text-base"
        />
        <Input
          type="url"
          placeholder="Website URL"
          value={formData.website}
          onChange={(e) => setFormData(prev => ({ ...prev, website: e.target.value }))}
          required
          className="w-full h-14 px-5 border border-gray-200 rounded-lg text-base"
        />
      </div>
      {showButton && (
        <Button 
          type="submit" 
          className="w-full h-14 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium shadow-md text-base mt-4"
        >
          Get Free Audit →
        </Button>
      )}
    </form>
  )
} 