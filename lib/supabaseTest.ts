import { supabase } from './supabase'

// Test function to verify Supabase connection
export async function testSupabaseConnection() {
  try {
    // Try to get the current user session
    const { data, error } = await supabase.auth.getSession()
    
    if (error) {
      console.error('Supabase connection error:', error.message)
      return false
    }
    
    console.log('Supabase connection successful!')
    return true
  } catch (err) {
    console.error('Error testing Supabase connection:', err)
    return false
  }
} 