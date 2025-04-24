'use client'

import { useState } from 'react'
import { handleContactFormSubmission } from '@/app/actions/contact'

export default function ContactForm() {
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setLoading(true)
    setError(null)
    setSuccess(false)

    const formData = new FormData(event.currentTarget)
    const data = {
      fullName: formData.get('fullName') as string,
      email: formData.get('email') as string,
      subject: formData.get('subject') as string,
      massage: formData.get('massage') as string,
    }

    try {
      const result = await handleContactFormSubmission(data)
      if (result.success) {
        setSuccess(true)
        event.currentTarget.reset()
      } else {
        setError(result.error || 'Something went wrong. Please try again.')
      }
    } catch (err) {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h2 className="text-3xl font-bold">Send Us a Message</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
            Full Name
          </label>
          <input
            type="text"
            name="fullName"
            id="fullName"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
          Subject
        </label>
        <input
          type="text"
          name="subject"
          id="subject"
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>

      <div>
        <label htmlFor="massage" className="block text-sm font-medium text-gray-700">
          Message
        </label>
        <textarea
          name="massage"
          id="massage"
          rows={4}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>

      {error && (
        <div className="text-red-600 bg-red-50 p-3 rounded-md">
          {error}
        </div>
      )}

      {success && (
        <div className="text-green-600 bg-green-50 p-3 rounded-md">
          Message sent successfully!
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md transition duration-200 disabled:opacity-50"
      >
        {loading ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  )
} 