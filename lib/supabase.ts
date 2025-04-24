import { createClient } from '@supabase/supabase-js'

// These environment variables are set in .env.local
// Providing fallback values directly in the code to fix environment issues
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://pdwlvvawcmghxoqvppdq.supabase.co'
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBkd2x2dmF3Y21naHhvcXZwcGRxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUyMzE5MjgsImV4cCI6MjA2MDgwNzkyOH0.DRxxxKSTQYnTm72nXE3tLoAMon-l_egYYa4bHrP5T38'

if (!supabaseUrl || !supabaseKey) {
  console.error('Supabase URL or Key is missing. Please check your environment variables.')
}

// Create a single supabase client for the entire app with optimized settings
export const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
  },
  global: {
    // Increase connection timeout for better reliability
    fetch: (url, options) => {
      return fetch(url, { ...options, signal: AbortSignal.timeout(15000) });
    },
  },
  realtime: {
    // Disable realtime subscriptions since we don't need them for form submission
    params: {
      eventsPerSecond: 0,
    }
  }
})

// Setup an optimistic connection as soon as this module is loaded
if (typeof window !== 'undefined') {
  // Pre-connect to Supabase as early as possible
  fetch(supabaseUrl, { method: 'HEAD', cache: 'no-store' })
    .catch(() => {}) // Silently catch any errors
} 