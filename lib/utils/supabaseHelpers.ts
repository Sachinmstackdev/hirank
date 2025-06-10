import { supabase } from '@/lib/supabase'

// Test function to verify Supabase connection
export async function testSupabaseConnection() {
  try {
    console.log('Testing Supabase connection...');
    const { data, error } = await supabase.from('leads').select('count').limit(1);
    
    if (error) {
      console.error('Supabase connection test FAILED:', error);
      return { success: false, error };
    }
    
    console.log('Supabase connection test SUCCESSFUL:', data);
    return { success: true, data };
  } catch (err) {
    console.error('Supabase connection test EXCEPTION:', err);
    return { success: false, error: err };
  }
}

export interface LeadFormData {
  name: string
  email: string
  website?: string
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
    // Log submission attempt
    console.log('Submitting lead data:', formData)

    // First, try to use the localStorage fallback approach to ensure data is captured
    try {
      const storedLeads = localStorage.getItem('pendingLeads') 
        ? JSON.parse(localStorage.getItem('pendingLeads') || '[]') 
        : []
      
      storedLeads.push({
        ...formData,
        created_at: new Date().toISOString(),
        pendingSync: true
      })
      
      localStorage.setItem('pendingLeads', JSON.stringify(storedLeads))
      console.log('Form data saved to local storage as backup')
    } catch (storageErr) {
      console.warn('Could not store in localStorage:', storageErr)
    }

    // Prepare data for Supabase
    const leadData = {
      ...formData,
      created_at: new Date().toISOString()
    }

    // Simplified direct fetch to Supabase API
    const apiUrl = 'https://pdwlvvawcmghxoqvppdq.supabase.co/rest/v1/leads'
    const apiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBkd2x2dmF3Y21naHhvcXZwcGRxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUyMzE5MjgsImV4cCI6MjA2MDgwNzkyOH0.DRxxxKSTQYnTm72nXE3tLoAMon-l_egYYa4bHrP5T38'

    // Use direct fetch instead of Supabase client to troubleshoot
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': apiKey,
        'Authorization': `Bearer ${apiKey}`,
        'Prefer': 'return=representation'
      },
      body: JSON.stringify(leadData)
    })

    if (!response.ok) {
      // Handle HTTP error
      const errorText = await response.text()
      console.error('Supabase API error:', response.status, errorText)
      
      return {
        success: false,
        message: `Submission error (${response.status}). Using local backup instead.`,
        error: { status: response.status, text: errorText }
      }
    }

    // Success case
    const data = await response.json()
    console.log('Submission successful:', data)
    
    // If we succeeded, we could remove from local storage, but we'll leave it for now
    return {
      success: true,
      message: 'Your information has been submitted successfully!',
      data
    }
  } catch (error: any) {
    console.error('Exception when submitting lead:', error)
    
    return {
      success: false,
      message: 'Unable to send your information directly. Using local backup instead.',
      error
    }
  }
}

/**
 * Submit contact form data to Supabase
 * @param formData Form data containing contact information
 * @returns Object with success status and message
 */
export async function submitContactForm(formData: ContactFormData) {
  try {
    // Log submission attempt for debugging
    console.log('Submitting contact data:', formData)
    
    // Add timestamp to the data
    const contactData = {
      fullname: formData.fullName,
      email: formData.email,
      subject: formData.subject,
      massage: formData.massage,
      created_at: new Date().toISOString()
    }

    // Insert data into the contact_messages table
    const { data, error } = await supabase
      .from('contact_messages')
      .insert([contactData])
      .select()

    if (error) {
      console.error('Error submitting contact form:', error)
      console.error('Error details:', error.details)
      
      return {
        success: false,
        message: 'Failed to submit your message. Please try again.',
        error
      }
    }

    return {
      success: true,
      message: 'Your message has been submitted successfully!',
      data
    }
  } catch (error) {
    console.error('Exception when submitting contact form:', error)
    return {
      success: false,
      message: 'An unexpected error occurred. Please try again later.',
      error
    }
  }
} 