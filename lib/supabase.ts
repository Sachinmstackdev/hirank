import { createClient } from '@supabase/supabase-js'

// Use fixed values for Supabase URL and key to ensure they work consistently
// Note: In production, you should use environment variables
const supabaseUrl = 'https://pdwlvvawcmghxoqvppdq.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBkd2x2dmF3Y21naHhvcXZwcGRxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUyMzE5MjgsImV4cCI6MjA2MDgwNzkyOH0.DRxxxKSTQYnTm72nXE3tLoAMon-l_egYYa4bHrP5T38'

// Log configuration status
if (typeof window !== 'undefined') {
  console.log('Supabase config:', {
    url: supabaseUrl ? '✅' : '❌',
    key: supabaseAnonKey ? '✅' : '❌',
    environment: process.env.NODE_ENV
  })
}

// Simple function to check if running in browser
const isBrowser = () => typeof window !== 'undefined'

// Create a single supabase client for the entire app
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Disable connection testing to avoid errors in the console
// We'll let the actual form submission handle any connection issues 

interface FormData {
  name: string;
  email: string;
  website?: string;
}

const formData: FormData = {
  name: '',
  email: '',
  website: ''
}

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  
  try {
    const { data, error } = await supabase
      .from('leads')
      .insert([
        {
          name: formData.name,
          email: formData.email,
          website: formData.website || null,
          source: 'desktop_exit_intent'
        }
      ])
      .select()

    if (error) throw error
    
    // Handle success
    console.log('Lead submitted successfully:', data)
    
  } catch (error) {
    console.error('Error submitting lead:', error)
    // Handle error appropriately
  }
} 