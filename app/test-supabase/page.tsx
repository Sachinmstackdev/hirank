'use client'

import { useState, useEffect } from 'react'
import { testSupabaseConnection } from '@/lib/utils/supabaseHelpers'

export default function TestSupabasePage() {
  const [connectionStatus, setConnectionStatus] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)
  
  useEffect(() => {
    async function checkConnection() {
      try {
        const result = await testSupabaseConnection()
        setConnectionStatus(result)
      } catch (err) {
        setConnectionStatus({ success: false, error: err })
      } finally {
        setIsLoading(false)
      }
    }
    
    checkConnection()
  }, [])
  
  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-4">Supabase Connection Test</h1>
      
      {isLoading ? (
        <p>Testing connection...</p>
      ) : connectionStatus?.success ? (
        <div className="p-4 bg-green-100 text-green-800 rounded-md">
          <p className="font-bold">✅ Connection successful!</p>
          <pre className="mt-4 p-3 bg-white rounded border text-sm overflow-auto">
            {JSON.stringify(connectionStatus, null, 2)}
          </pre>
        </div>
      ) : (
        <div className="p-4 bg-red-100 text-red-800 rounded-md">
          <p className="font-bold">❌ Connection failed</p>
          <pre className="mt-4 p-3 bg-white rounded border text-sm overflow-auto">
            {JSON.stringify(connectionStatus, null, 2)}
          </pre>
        </div>
      )}
      
      <div className="mt-8 p-4 bg-blue-100 text-blue-800 rounded-md">
        <h2 className="font-bold mb-2">Environment Variables:</h2>
        <p className="mb-1">NEXT_PUBLIC_SUPABASE_URL: {process.env.NEXT_PUBLIC_SUPABASE_URL ? 'Set ✅' : 'Missing ❌'}</p>
        <p>NEXT_PUBLIC_SUPABASE_ANON_KEY: {process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? 'Set ✅' : 'Missing ❌'}</p>
      </div>
    </div>
  )
} 