'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface LeadMagnetFormProps {
  onSubmit: (data: { name: string; email: string; website: string }) => void
  className?: string
}

export function LeadMagnetForm({ onSubmit, className = '' }: LeadMagnetFormProps) {
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
    <form onSubmit={handleSubmit} className={`w-full space-y-4 ${className}`}>
      <div className="space-y-3">
        <Input
          type="text"
          placeholder="Your Name"
          value={formData.name}
          onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
          required
          className="w-full h-11 sm:h-12 px-4 bg-gray-50/50 border-gray-200 rounded-lg sm:rounded-xl focus:ring-[#4F7DF3] focus:border-[#4F7DF3] transition-all duration-200 text-sm sm:text-base"
        />
        <Input
          type="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
          required
          className="w-full h-11 sm:h-12 px-4 bg-gray-50/50 border-gray-200 rounded-lg sm:rounded-xl focus:ring-[#4F7DF3] focus:border-[#4F7DF3] transition-all duration-200 text-sm sm:text-base"
        />
        <Input
          type="url"
          placeholder="Website URL"
          value={formData.website}
          onChange={(e) => setFormData(prev => ({ ...prev, website: e.target.value }))}
          required
          className="w-full h-11 sm:h-12 px-4 bg-gray-50/50 border-gray-200 rounded-lg sm:rounded-xl focus:ring-[#4F7DF3] focus:border-[#4F7DF3] transition-all duration-200 text-sm sm:text-base"
        />
      </div>
      <Button 
        type="submit" 
        className="w-full h-11 sm:h-12 bg-[#4F7DF3] hover:bg-[#3968e7] text-white rounded-lg sm:rounded-xl font-medium transition-all duration-200 shadow-lg shadow-[#4F7DF3]/20 hover:shadow-[#4F7DF3]/30 text-sm sm:text-base mt-2"
      >
        Get Free Audit →
      </Button>
    </form>
  )
} 