import { supabase } from '@/lib/supabase'

export interface LeadFormData {
  name: string
  email: string
  website: string
  source?: string
  notes?: string
}

export interface ContactFormData {
  fullName: string
  email: string
  subject: string
  massage: string
}

/**
 * Submit lead data to Supabase
 * @param formData Form data containing lead information
 * @returns Object with success status and message
 */
export const submitLeadToSupabase = async (formData: LeadFormData) => {
  try {
    // Add timestamp to the data
    const leadData = {
      ...formData,
      created_at: new Date().toISOString()
    }

    // Insert data into the leads table
    const { data, error } = await supabase
      .from('leads')
      .insert([leadData])
      .select()

    if (error) {
      console.error('Error submitting lead:', error)
      return {
        success: false,
        massage: 'Failed to submit your information. Please try again.',
        error
      }
    }

    return {
      success: true,
      massage: 'Your information has been submitted successfully!',
      data
    }
  } catch (error) {
    console.error('Exception when submitting lead:', error)
    return {
      success: false,
      massage: 'An unexpected error occurred. Please try again later.',
      error
    }
  }
}

export async function submitContactForm(formData: ContactFormData) {
  try {
    const { data, error } = await supabase
      .from('contact_messages')
      .insert([
        {
          fullname: formData.fullName,
          email: formData.email,
          subject: formData.subject,
          massage: formData.massage
        }
      ])
      .select()

    if (error) {
      console.error('Error submitting contact form:', error)
      throw new Error('Failed to submit contact form')
    }

    return data
  } catch (err) {
    console.error('Error in submitContactForm:', err)
    throw err
  }
} 