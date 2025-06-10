'use server'

import { submitContactForm, type ContactFormData } from '@/lib/utils/supabaseHelpers'

type ContactFormResult = {
  success: boolean;
  message?: string;
  data?: any;
  error?: any;
}

export async function handleContactFormSubmission(formData: ContactFormData) {
  try {
    // Use Promise.race with a timeout to avoid hanging on slow DB connections
    const result = await Promise.race([
      submitContactForm({
        fullName: formData.fullName,
        email: formData.email,
        subject: formData.subject,
        massage: formData.massage
      }),
      new Promise<never>((_, reject) => 
        setTimeout(() => reject(new Error('Request timeout')), 5000)
      )
    ]) as ContactFormResult;
    
    // Check if the result is successful
    if (result.success) {
      return { success: true }
    } else {
      return { 
        success: false, 
        error: result.message || 'Failed to submit contact form. Please try again.'
      }
    }
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