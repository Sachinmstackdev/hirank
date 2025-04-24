'use server'

import { submitContactForm, type ContactFormData } from '@/lib/utils/supabaseHelpers'

export async function handleContactFormSubmission(formData: ContactFormData) {
  try {
    // Use Promise.race with a timeout to avoid hanging on slow DB connections
    const result = await Promise.race([
      submitContactForm({
        fullName: formData.fullName,
        email: formData.email,
        subject: formData.subject,
        message: formData.message
      }),
      new Promise((_, reject) => 
        setTimeout(() => reject(new Error('Request timeout')), 5000)
      )
    ]);
    
    return { success: true }
  } catch (error) {
    console.error('Contact form submission error:', error)
    
    // Check if the error is a timeout, provide a more specific message
    const errorMessage = error instanceof Error && error.message === 'Request timeout'
      ? 'The server is taking too long to respond. Your message will be saved in the background.'
      : 'Failed to submit contact form. Please try again.';
      
    return { 
      success: false, 
      error: errorMessage
    }
  }
} 